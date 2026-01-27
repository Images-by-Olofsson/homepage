# Images by Olofsson

En modern, responsiv fotografportfolio webbplats byggd med Astro, Tailwind CSS och avancerade animationer.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://imagesbyolofsson.se)
[![Astro](https://img.shields.io/badge/Astro-5.16.7-FF5E01?style=for-the-badge&logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

##  Funktioner

-  **Modern Design** - Minimalistisk och elegant design med fokus på bilder
-  **Avancerade Animationer** - Våg-animationer, 3D-scroll effekter och rök-partiklar
-  **Fullt Responsiv** - Perfekt anpassad för alla enheter
-  **Blazingly Fast** - Byggd med Astro för maximal prestanda
-  **Interaktiva Element** - Hover-effekter, smooth transitions och dynamiska bakgrunder
-  **SEO-optimerad** - Semantisk HTML och metadata

##  Bildexempel

Här är några exempel på hur bilder presenteras på sidan:

### Portfolio Grid
![Portfolio Grid](https://imagesbyolofsson.se/images/portfolio-grid.jpg)
*Ett snyggt rutnät av bilder med hover-effekter*

### 3D Scroll Effect
![3D Scroll](https://imagesbyolofsson.se/images/3d-scroll-effect.jpg)
*Dynamisk 3D-parallax effekt vid scrollning*

### Hero Section
![Hero Section](https://imagesbyolofsson.se/images/hero-section.jpg)
*Imponerande hero-sektion med animerad text och bakgrunder*

##  Snabbstart

### Förutsättningar
- Node.js 18.0+ 
- npm eller yarn

### Installation

```bash
# Klona repot
git clone https://github.com/LinusOlofsson-maker/imagesbyolofsson.se.git
cd imagesbyolofsson.se

# Installera dependencies
npm install

# Starta utvecklingsservern
npm run dev
```

Öppna [http://localhost:4321](http://localhost:4321) i din webbläsare.

### Bygg för produktion

```bash
# Bygg projektet
npm run build

# Förhandsgranska production build
npm run preview
```

##  Projektstruktur

```
src/
├── assets/           # Statiska resurser (bilder, SVG:er)
├── components/       # Återanvändbara Astro-komponenter
│   ├── WaveBackground.astro    # Animerad vågbakgrund
│   ├── ThreeDScroll.astro      # 3D scroll-effekt
│   ├── FloatingOrbs.astro      # Flytande orb-element
│   └── Welcome.astro           # Välkomstkomponent
├── layouts/          # Sid-layouter
│   ├── MainLayout.astro        # Huvudlayout
│   └── Layout.astro            # Bas-layout
├── pages/            # Sid-komponenter
│   ├── index.astro             # Startsida
│   ├── portfolio.astro         # Portfolio-sida
│   ├── about.astro             # Om-sida
│   └── contact.astro           # Kontakt-sida
└── styles/           # CSS-stilar
    └── global.css             # Globala stilar
```

##  Teknologier

- **[Astro](https://astro.build/)** - Modern webb-ramverk
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Typsäker JavaScript
- **[Exifr](https://github.com/mattiasw/ExifReader)** - EXIF-data läsning

##  Designsystem

### Färgpalett
- **Primär**: Cyan (#06B6D4)
- **Sekundär**: Lila (#A855F7)
- **Neutral**: Gråskalor (#1F2937 - #F9FAFB)

### Typografi
- **Rubriker**: Font Black, Tracking Tighter
- **Brödtext**: Font Light
- **Accent**: Uppercase, Tracking Widest

### Animationer
- **Vågor**: SVG-baserade med filter-effekter
- **Rök**: Path-animationer med gaussian blur
- **3D Scroll**: Parallax med transform3d
- **Transitions**: Smooth ease-in/out

##  Responsiv Design

Webbplatsen är optimerad för:
-  **Mobil** (< 768px) - Enkel kolumn, touch-vänlig
-  **Tablet** (768px - 1024px) - Mellanstor layout
-  **Desktop** (> 1024px) - Full upplevelse med alla animationer

##  Prestanda

- **Lighthouse Score**: 95+ Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

##  Bidrag

Alla bidrag är välkomna! Vänligen följ dessa steg:

1. Forka detta repo
2. Skapa en feature branch (`git checkout -b feature/AmazingFeature`)
3. Committa dina ändringar (`git commit -m 'Add some AmazingFeature'`)
4. Pusha till branchen (`git push origin feature/AmazingFeature`)
5. Öppna en Pull Request

##  Licens

Detta projekt är licensierat under MIT License - se [LICENSE](LICENSE) filen för detaljer.

##  Kontakt

- **Webbplats**: [imagesbyolofsson.se](https://imagesbyolofsson.se)
- **Email**: info@imagesbyolofsson.se
- **Instagram**: [@imagesbyolofsson](https://www.instagram.com/imagesbyolofsson/)
- **LinkedIn**: [Linus Olofsson](https://www.linkedin.com/in/linus-olofsson-/)

##  Tack

Tack till alla fantastiska open-source projekt som gjort detta möjligt:
- [Astro](https://astro.build/) - För det fantastiska webb-ramverket
- [Tailwind CSS](https://tailwindcss.com/) - För det kraftfulla CSS-ramverket
- [Adobe Lightroom](https://lightroom.adobe.com/) - För bildbehandling

---

<div align="center">
  <p>Byggd av <a href="https://github.com/LinusOlofsson-maker">Linus Olofsson</a></p>
  <p>© 2024 Images by Olofsson. Alla rättigheter reserverade.</p>
</div>
