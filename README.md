# Aum Lenka - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, dark mode, and a professional design.

## Features

- 🎨 Modern, responsive design
- 🌙 Dark mode support
- ✨ Smooth animations with Framer Motion & GSAP
- 📱 Mobile-first approach
- ⚡ Fast performance with Vite
- 🎯 SEO optimized
- 🔧 Customizable components

## Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Navigation.jsx
│   │   └── ParticleBackground.jsx
│   ├── ui/
│   │   └── button.jsx
│   ├── lib/
│   │   └── utils.js
│   ├── assets/
│   │   └── placeholder.svg
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   ├── useGSAPAnimations.js
│   └── performance.js
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Customization

### Colors & Theme

The color scheme is defined in `App.css` using CSS custom properties. You can easily modify the colors by updating the `:root` variables.

### Content

Update the content in each component:
- **Hero.jsx**: Personal information and introduction
- **Skills.jsx**: Skills and technologies
- **Projects.jsx**: Portfolio projects
- **Contact.jsx**: Contact information

### Animations

Custom animations are defined in:
- `useGSAPAnimations.js` - GSAP animations
- `App.css` - CSS keyframe animations

## Performance Optimizations

- Lazy loading for components
- Image optimization utilities
- Debounced scroll events
- Intersection Observer for animations
- Service Worker support

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Aum Lenka - [LinkedIn](https://linkedin.com/in/aumlenka) - [GitHub](https://github.com/aumlenka) 