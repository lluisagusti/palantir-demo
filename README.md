# ⚛️ PALANTIR DEMO
## Real-Time Global Intelligence Platform

<div align="center">

![Screen 1](readme-assets/screen-1.png)

**Advanced geopolitical monitoring and worldwide threat assessment system**

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev)
[![THREE.js](https://img.shields.io/badge/Three.js-globe-black?style=flat-square)](https://threejs.org)
[![Mobile](https://img.shields.io/badge/Mobile-Responsive-green?style=flat-square)](MOBILE_IMPROVEMENTS.md)

</div>

---

## 🎯 Mission Brief

PALANTIR DEMO is an enterprise-grade intelligence visualization platform providing real-time situational awareness across geopolitical, environmental, and logistical dimensions. Built for operational excellence and rapid decision-making.

### 🆕 Now Fully Mobile Responsive!

The platform now delivers an immersive, native app-like experience on mobile devices with:
- 📱 Touch-optimized interface with haptic feedback
- 🎮 Swipe gestures for intuitive navigation
- 📲 Fullscreen mobile modals and bottom sheets
- 🌐 Slide-out navigation with layer controls
- ⚡ Real-time data optimized for mobile networks

### Intelligence Domains

| Domain | Capabilities |
|--------|-------------|
| **🔴 Geopolitical Threat Assessment** | Real-time conflict zone monitoring, risk quantification, strategic hotspot tracking |
| **🌋 Environmental Hazards** | Seismic activity, volcanic events, atmospheric radiation, lightning strike detection |
| **✈️ Global Logistics** | Live aircraft tracking, maritime route visualization, cargo flow analysis |
| **⛅ Meteorological Intelligence** | Weather pattern analysis, atmospheric conditions, climate event correlation |
| **📡 Electronic Surveillance** | Global camera network integration, strategic location streaming, reconnaissance feeds |

---

## 📊 Dashboard Overview

<div align="center">

![Screen 2](readme-assets/screen-2.png)

*Interactive 3D globe with multi-layer data visualization*

</div>

### Core Capabilities

**Dynamic Global Visualization**
- High-performance 3D globe rendering with WebGL acceleration
- Multi-layered data overlay system
- Interactive drill-down capabilities for detailed analysis
- Seamless globe rotation and zoom navigation
- **Mobile:** Touch-optimized controls with haptic feedback

**Advanced Event Intelligence**
- Real-time event detection and classification
- Contextual information panels with metadata
- Historical threat analysis and pattern recognition
- Automated risk scoring algorithms
- **Mobile:** Fullscreen detail modals with external links

**Operational Command Features**
- War room aesthetic with professional dark-mode interface
- High-contrast design for extended operational sessions
- Responsive layout for multi-monitor deployments
- Touch-enabled for tactical command centers
- **Mobile:** Slide-out menus, bottom sheets, swipe gestures

---

## 📱 Mobile Experience

### Touch Gestures

| Gesture | Action |
|---------|--------|
| **Swipe Left/Right** | Switch live cameras (when video modal open) |
| **Swipe Down** | Close news feed drawer |
| **Tap** | Select events, open details |
| **Pinch** | Zoom globe |
| **Drag** | Rotate globe |
| **Long Press** | Context menu (coming soon) |

### Mobile Interface Features

- **Slide-out Navigation** - Full-height drawer with layer toggles
- **Bottom Quick Stats** - Real-time counts for threats, quakes, flights, ships
- **Horizontal Tickers** - Scrollable market data with auto-scroll
- **Bottom Sheet Drawer** - Swipe-up news feed with live intel
- **Fullscreen Video** - Immersive camera viewing with touch zones
- **Haptic Feedback** - Tactile response for all interactions

<div align="center">

![Mobile Screenshots](mobile-screenshots.html)

*Open [mobile-screenshots.html](mobile-screenshots.html) for detailed mobile interface showcase*

</div>

---

## 🚀 Deployment & Operations

<div align="center">

![Screen 3](readme-assets/screen-3.png)

*System monitoring and real-time data integration*

</div>

### Quick Launch

```bash
# Foundation setup
npm install

# Development deployment
npm run dev

# Production build
npm run build

# GitHub Pages deployment
npm run deploy
```

### System Requirements

| Requirement | Specification |
|-------------|--------------|
| **Node.js** | v20+ LTS |
| **npm** | Latest version |
| **Browser** | Modern (Chrome, Firefox, Safari, Edge) |
| **GPU** | Recommended for optimal performance |
| **Mobile** | iOS 14+ / Android 10+ recommended |

### Mobile Browser Support

| Platform | Browser | Support |
|----------|---------|---------|
| **iOS** | Safari | ✅ Full |
| **iOS** | Chrome | ✅ Full |
| **Android** | Chrome | ✅ Full |
| **Android** | Firefox | ✅ Full |
| **Android** | Samsung Internet | ✅ Full |

### Cloud Deployment

Configure GitHub Pages deployment:

1. Navigate to repository **Settings** → **Pages**
2. Set source to **gh-pages branch** from **root folder**
3. Run `npm run deploy` to publish

The system will automatically build and deploy to your GitHub Pages instance.

---

## ⚙️ Technical Architecture

<div align="center">

![Screen 4](readme-assets/screen-4.png)

*Advanced monitoring and analytics dashboard*

</div>

### Technology Stack

```
Frontend Framework       React 19 (Vite)
3D Visualization        react-globe.gl (Three.js)
Styling System          Tailwind CSS 4.0
UI Components           Lucide-React
State Management        React Hooks
Build System            Vite 6
Simulation Engine       Custom High-Performance
Mobile Gestures         Custom Touch Hook
Haptic Feedback         Navigator Vibration API
```

### Component Architecture

| Component | Function | Mobile Enhancement |
|-----------|----------|-------------------|
| **GlobeComponent** | 3D visualization engine | Touch-optimized controls, larger markers |
| **Dashboard** | Main operational interface | Responsive layout, mobile header |
| **MobileMenu** | Slide-out navigation | Layer toggles, glass morphism |
| **EventDetailModal** | Deep-dive analysis | Fullscreen mobile modal |
| **MarketTickers** | Real-time data feeds | Horizontal scrolling ticker |
| **NewsFeed** | Intelligence bulletin | Bottom sheet drawer |
| **VideoModal** | Surveillance feed | Fullscreen with touch zones |

### Mobile-Specific Files

```
src/
├── components/
│   └── MobileMenu.jsx         # Slide-out navigation drawer
├── hooks/
│   └── useTouchGestures.jsx   # Touch gesture handling
└── index.css                   # Mobile-first responsive styles
```

---

## 🔧 Development Workflow

### Local Development

```bash
# Clone and setup
git clone <repository-url>
cd palantir-demo

# Install dependencies
npm install

# Start hot-reload development server
npm run dev
```

Access at `http://localhost:5173` with live HMR updates.

### Mobile Testing

**Chrome DevTools:**
1. Press `F12` or `Cmd+Option+I`
2. Click device toggle or press `Cmd+Shift+M`
3. Select device preset (iPhone 14 Pro, Pixel 7, iPad)
4. Test touch gestures with mouse/touch simulation

**Physical Device Testing:**
1. Ensure device is on same network as development machine
2. Access via `http://<your-ip>:5173`
3. Test haptic feedback on supported devices

### Build Pipeline

```bash
# Production optimization
npm run build

# Output: dist/ directory ready for deployment
```

### Preview Production Build

```bash
npm run preview
```

---

## 📋 Project Structure

```
palantir-demo/
├── src/
│   ├── components/          # React component modules
│   │   ├── Dashboard.jsx    # Main layout (responsive)
│   │   ├── GlobeComponent.jsx
│   │   ├── EventDetailModal.jsx
│   │   ├── MarketTickers.jsx
│   │   ├── NewsFeed.jsx
│   │   ├── VideoModal.jsx
│   │   └── MobileMenu.jsx   # NEW: Mobile navigation
│   │
│   ├── data/                # Data simulation engines
│   │   ├── mockEngine.js
│   │   ├── cameras.js
│   │   └── maritimeRoutes.js
│   │
│   ├── hooks/               # NEW: Custom React hooks
│   │   └── useTouchGestures.jsx
│   │
│   ├── App.jsx              # Root application component
│   ├── main.jsx             # Entry point
│   └── index.css            # Mobile-first global styles
│
├── readme-assets/           # Documentation graphics
├── mobile-screenshots.html  # NEW: Mobile interface showcase
├── MOBILE_IMPROVEMENTS.md   # NEW: Detailed mobile docs
├── index.html               # PWA-enabled HTML template
├── vite.config.js           # Build configuration
└── package.json             # Dependencies manifest
```

---

## 🎓 Educational & Demonstration Use

This platform demonstrates enterprise-level real-time intelligence visualization capabilities. Designed for educational exploration of:

- Advanced React patterns and performance optimization
- WebGL and 3D web visualization techniques
- Real-time data streaming architecture
- High-fidelity UI/UX for command centers
- Geospatial data visualization methodology
- **Mobile-first responsive design patterns**
- **Touch gesture recognition and haptic feedback**
- **Progressive Web App (PWA) implementation**

---

## 📄 License & Attribution

Created for demonstration and educational purposes

### Mobile Development Highlights

- ✅ Fully responsive design (320px - 2560px+)
- ✅ Touch-optimized interactions
- ✅ Haptic feedback integration
- ✅ Safe area support (notched devices)
- ✅ Glass morphism UI effects
- ✅ Performance optimized for mobile
- ✅ PWA-ready meta tags

<div align="center">

**For inquiries**: Check repository issues or documentation

**Mobile Documentation**: [MOBILE_IMPROVEMENTS.md](MOBILE_IMPROVEMENTS.md)

</div>

---

## 📖 Additional Documentation

- **[MOBILE_IMPROVEMENTS.md](MOBILE_IMPROVEMENTS.md)** - Comprehensive mobile responsiveness documentation
- **[mobile-screenshots.html](mobile-screenshots.html)** - Interactive mobile interface showcase
- **README.es.md** - Spanish documentation
- **README.fr.md** - French documentation  
- **README.zh.md** - Chinese documentation
