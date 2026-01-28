# Images by Olofsson

A modern, responsive photography portfolio website built with Astro, Tailwind CSS, and advanced animations.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://imagesbyolofsson.se)
[![Astro](https://img.shields.io/badge/Astro-5.16.7-FF5E01?style=for-the-badge&logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

##  Features

-  **Modern Design** - Minimalist and elegant design with focus on images
-  **Advanced Animations** - Wave animations, 3D scroll effects, and smoke particles
-  **Fully Responsive** - Perfectly adapted for all devices
-  **Blazingly Fast** - Built with Astro for maximum performance
-  **Interactive Elements** - Hover effects, smooth transitions, and dynamic backgrounds
-  **SEO Optimized** - Semantic HTML and metadata

##  Image Examples

Here are some examples of how images are presented on the site:

### Portfolio Grid
![Portfolio Grid](./public/3d-scroll/img1.jpg)
*A beautiful grid of images with hover effects*

### 3D Scroll Effect
![3D Scroll](https://imagesbyolofsson.se/images/3d-scroll-effect.jpg)
*Dynamic 3D parallax effect while scrolling*

### Hero Section
![Hero Section](https://imagesbyolofsson.se/images/hero-section.jpg)
*Impressive hero section with animated text and backgrounds*

##  Quick Start

### Prerequisites
- Node.js 18.0+ 
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/LinusOlofsson-maker/imagesbyolofsson.se.git
cd imagesbyolofsson.se

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

##  Project Structure

```
src/
├── assets/           # Static resources (images, SVGs)
├── components/       # Reusable Astro components
│   ├── WaveBackground.astro    # Animated wave background
│   ├── ThreeDScroll.astro      # 3D scroll effect
│   ├── FloatingOrbs.astro      # Floating orb elements
│   └── Welcome.astro           # Welcome component
├── layouts/          # Page layouts
│   ├── MainLayout.astro        # Main layout
│   └── Layout.astro            # Base layout
├── pages/            # Page components
│   ├── index.astro             # Home page
│   ├── portfolio.astro         # Portfolio page
│   ├── about.astro             # About page
│   └── contact.astro           # Contact page
└── styles/           # CSS styles
    └── global.css             # Global styles
```

##  Technologies

- **[Astro](https://astro.build/)** - Modern web framework
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Exifr](https://github.com/mattiasw/ExifReader)** - EXIF data reading

##  Design System

### Color Palette
- **Primary**: Cyan (#06B6D4)
- **Secondary**: Purple (#A855F7)
- **Neutral**: Grayscale (#1F2937 - #F9FAFB)

### Typography
- **Headings**: Font Black, Tracking Tighter
- **Body Text**: Font Light
- **Accent**: Uppercase, Tracking Widest

### Animations
- **Waves**: SVG-based with filter effects
- **Smoke**: Path animations with gaussian blur
- **3D Scroll**: Parallax with transform3d
- **Transitions**: Smooth ease-in/out

##  Responsive Design

The website is optimized for:
-  **Mobile** (< 768px) - Single column, touch-friendly
-  **Tablet** (768px - 1024px) - Medium layout
-  **Desktop** (> 1024px) - Full experience with all animations

##  Performance

- **Lighthouse Score**: 95+ Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

##  Contributing

All contributions are welcome! Please follow these steps:

1. Fork this repo
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Contact

- **Website**: [imagesbyolofsson.se](https://imagesbyolofsson.se)
- **Email**: info@imagesbyolofsson.se
- **Instagram**: [@imagesbyolofsson](https://www.instagram.com/imagesbyolofsson/)
- **LinkedIn**: [Linus Olofsson](https://www.linkedin.com/in/linus-olofsson-/)

##  Acknowledgments

Thanks to all the amazing open-source projects that made this possible:
- [Astro](https://astro.build/) - For the fantastic web framework
- [Tailwind CSS](https://tailwindcss.com/) - For the powerful CSS framework
- [Adobe Lightroom](https://lightroom.adobe.com/) - For image processing

---

<div align="center">
  <p>Built by <a href="https://github.com/LinusOlofsson-maker">Linus Olofsson</a></p>
  <p>© 2024 Images by Olofsson. All rights reserved.</p>
</div>
