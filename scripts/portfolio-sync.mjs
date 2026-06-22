#!/usr/bin/env node
// Portfolio-synk: speglar Immich "portfolio"-taggade bilder till src/assets/images/portfolio/
// Självläkande: härleder synkat tillstånd från immich-<assetId>-*-filnamn i repot.
// Bevarar EXIF (portfolion läser DateTimeOriginal/Model/ISO för år/månad-filter + lightbox).
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const IMMICH = process.env.IMMICH_URL || "https://foto.imagesbyolofsson.se/api";
const KEY = process.env.IMMICH_API_KEY;
const TAGID = process.env.PORTFOLIO_TAG_ID || "67d16b6c-0dea-42ef-a289-2c9e57fa5c5a";
const PORTFOLIO_DIR = "src/assets/images/portfolio";
const MAX_DIM = 3000;
const JPEG_QUALITY = 88;
// RAW-format som sharp/libvips inte kan konvertera — hoppas över elegant.
// Tagga JPEG-versionen (redigera RAW → exportera JPEG → tagga den) istället.
const RAW_EXTENSIONS = [".cr2", ".cr3", ".arw", ".nef", ".dng", ".raf", ".orf", ".rw2", ".pef", ".srw"];

function isRaw(name) {
  const lower = name.toLowerCase();
  return RAW_EXTENSIONS.some((ext) => lower.endsWith(ext));
}

if (!KEY) { console.error("IMMICH_API_KEY saknas"); process.exit(1); }

async function api(method, pathname, body) {
  const res = await fetch(IMMICH + pathname, {
    method,
    headers: { "x-api-key": KEY, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(`${method} ${pathname} → ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return res;
}

// Hämta alla portfolio-taggade assets (paginerat, unikt på id — search/metadata ger dubbletter över sidgräns)
async function fetchTagged() {
  const map = new Map();
  let page = 1;
  while (true) {
    const res = await api("POST", "/search/metadata", { tagIds: [TAGID], size: 250, page });
    const d = await res.json();
    const items = d.assets.items;
    if (!items.length) break;
    for (const a of items) {
      const date = a.exifInfo?.dateTimeOriginal || a.fileCreatedAt;
      map.set(a.id, { id: a.id, name: a.originalFileName, date });
    }
    const next = d.assets.nextPage;
    if (!next) break;
    page = Number(next);
  }
  return [...map.values()];
}

// Vilka immich-<assetId>-*.jpg finns redan i repot? → { assetId: filename }
function existingSynced() {
  if (!fs.existsSync(PORTFOLIO_DIR)) return {};
  const out = {};
  for (const f of fs.readdirSync(PORTFOLIO_DIR)) {
    const m = f.match(/^immich-([0-9a-f-]{36})-/i);
    if (m) out[m[1]] = f;
  }
  return out;
}

// Bygg destinationsfilnamn: immich-<assetId>-<ÅÅÅÅMMDD>-<safeOriginalName>.jpg
function destName(asset) {
  const d = asset.date ? new Date(asset.date) : new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  // strippa ev. "<assetid>__"-prefix från originalnamnet (från migreringen), behåll basnamn utan ändelse
  let base = asset.name.replace(/^[0-9a-f-]{36}__/i, "").replace(/\.[^.]+$/, "");
  base = base.replace(/[^\w.\-]/g, "_").slice(0, 60);
  return `immich-${asset.id}-${ymd}-${base}.jpg`;
}

async function downloadAndResize(asset, destPath) {
  const res = await api("GET", `/assets/${asset.id}/original`);
  const buf = Buffer.from(await res.arrayBuffer());
  await sharp(buf)
    .rotate()                               // respektera EXIF-orientering
    .resize(MAX_DIM, MAX_DIM, { fit: "inside", withoutEnlargement: true })
    .withMetadata()                         // BEVARA EXIF (kritiskt för portfolions datum/kamera)
    .jpeg({ quality: JPEG_QUALITY })
    .toFile(destPath);
}

async function main() {
  const taggedAll = await fetchTagged();
  // Hoppa över RAW-filer elegant — de räknas inte mot synk (tagga JPEG-versionen istället)
  const skippedRaw = taggedAll.filter((a) => isRaw(a.name));
  const tagged = taggedAll.filter((a) => !isRaw(a.name));

  const synced = existingSynced();
  const taggedIds = new Set(tagged.map((a) => a.id));

  const toAdd = tagged.filter((a) => !synced[a.id]);
  const toRemove = Object.entries(synced).filter(([id]) => !taggedIds.has(id)).map(([id, file]) => ({ id, file }));

  console.log(`portfolio-synk: ${taggedAll.length} taggade (${tagged.length} bilder + ${skippedRaw.length} RAW), ${Object.keys(synced).length} redan synkade`);
  console.log(`→ lägg till: ${toAdd.length}, ta bort: ${toRemove.length}`);
  if (skippedRaw.length) {
    console.log(`⏭  Hoppade över ${skippedRaw.length} RAW-fil(er) — tagga JPEG-versionen istället:`);
    for (const r of skippedRaw) console.log(`     ${r.name}`);
  }

  fs.mkdirSync(PORTFOLIO_DIR, { recursive: true });

  for (const a of toAdd) {
    const fname = destName(a);
    const dest = path.join(PORTFOLIO_DIR, fname);
    try {
      await downloadAndResize(a, dest);
      console.log(`  + ${fname}`);
    } catch (e) {
      console.error(`  ! misslyckades ${a.name}: ${e.message}`);
      process.exitCode = 1; // signalera fel men fortsätt med resten
    }
  }
  for (const r of toRemove) {
    fs.rmSync(path.join(PORTFOLIO_DIR, r.file), { force: true });
    console.log(`  - ${r.file}`);
  }

  // skriv ut om något ändrats (workflow läser detta för att avgöra commit)
  const changed = toAdd.length > 0 || toRemove.length > 0;
  fs.writeFileSync(process.env.GITHUB_OUTPUT || "/dev/stdout",
    `changed=${changed}\nadded=${toAdd.length}\nremoved=${toRemove.length}\n`, { flag: "a" });
}

main().catch((e) => { console.error("FEL:", e.message); process.exit(1); });
