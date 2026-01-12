# X-Bau - Moderne React SPA

Eine professionelle Single Page Application für das Bauunternehmen X-Bau, spezialisiert auf Abriss und Trockenbau.

## 🎨 Features

- **iOS-inspirierte Glasmorphismus-Ästhetik** - Durchgängig moderne Glaseffekte
- **Responsive Design** - Optimiert für Mobile, Tablet und Desktop
- **Framer Motion Animationen** - Flüssige und ansprechende Übergänge
- **Performance-optimiert** - Built mit Vite für schnelle Ladezeiten
- **SEO-freundlich** - Mit Meta-Tags und semantischem HTML
- **Barrierefreiheit** - ARIA-Labels und Keyboard-Navigation

## 🛠️ Technologie-Stack

- **React 18+** - Moderne funktionale Komponenten mit Hooks
- **Vite** - Schnelles Build-Tool
- **Framer Motion** - Animations-Library
- **React Icons** - Icon-Sammlung
- **CSS Modules** - Scoped Styling

## 📋 Installation & Start

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Production Build erstellen
npm run build

# Production Build lokal testen
npm run preview
```

## 🎯 Projekt Struktur

```
x-bau/
├── src/
│   ├── components/
│   │   ├── common/          # Wiederverwendbare Komponenten
│   │   │   ├── Logo.jsx
│   │   │   ├── GlassCard.jsx
│   │   │   └── GlassButton.jsx
│   │   ├── layout/          # Layout-Komponenten
│   │   │   └── Navbar.jsx
│   │   └── sections/        # Seiten-Sektionen
│   │       ├── Hero.jsx
│   │       ├── Services.jsx
│   │       ├── Projects.jsx
│   │       ├── About.jsx
│   │       └── Contact.jsx
│   ├── styles/              # Globale Styles
│   │   ├── variables.css
│   │   └── glassmorphism.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
└── package.json
```

## 🎨 Design-System

### Farbpalette

- **Primär**: Blaugrau-Töne (keine orangen Elemente)
- **Akzent**: Lila-Blau Gradient (#667eea → #764ba2)
- **Hintergrund**: Dunkle Basis mit Gradient-Overlay

### Glasmorphismus-Effekte

- Semi-transparente Hintergründe
- Backdrop Filter (Blur)
- Subtile Schatten und Borders
- Hover-Animationen

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Wide**: > 1440px

## 🚀 Deployment

Die Anwendung kann auf folgenden Plattformen deployed werden:

- **Vercel** (empfohlen für Vite/React)
- **Netlify**  
- **GitHub Pages**

```bash
# Build erstellen
npm run build

# Der dist/ Ordner kann dann deployed werden
```

## 📄 Lizenz

© 2024 X-Bau. Alle Rechte vorbehalten.

## 🤝 Kontakt

X-Bau  
Musterstraße 123  
12345 Musterstadt  
Tel: +49 (0) 123 456789  
E-Mail: info@x-bau.de
