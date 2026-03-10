# ⚛️ PALANTIR DEMO
## Plataforma de Inteligencia Global en Tiempo Real

<div align="center">

![Pantalla 1](readme-assets/screen-1.png)

**Sistema avanzado de monitoreo geopolítico y evaluación de amenazas mundial**

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev)
[![THREE.js](https://img.shields.io/badge/Three.js-globe-black?style=flat-square)](https://threejs.org)
[![Móvil](https://img.shields.io/badge/Móvil-Responsive-green?style=flat-square)](MOBILE_IMPROVEMENTS.md)

</div>

---

## 🎯 Descripción de la Misión

PALANTIR DEMO es una plataforma de visualización de inteligencia de nivel empresarial que proporciona conciencia situacional en tiempo real en dimensiones geopolíticas, ambientales y logísticas. Construida para excelencia operativa y toma rápida de decisiones.

### 🆕 ¡Ahora Totalmente Responsivo para Móviles!

La plataforma ahora ofrece una experiencia inmersiva tipo aplicación nativa en dispositivos móviles con:
- 📱 Interfaz optimizada para táctil con retroalimentación háptica
- 🎮 Gestos de deslizamiento para navegación intuitiva
- 📲 Modales de pantalla completa y hojas inferiores
- 🌐 Navegación deslizante con controles de capas
- ⚡ Datos en tiempo real optimizados para redes móviles

### Dominios de Inteligencia

| Dominio | Capacidades |
|---------|------------|
| **🔴 Evaluación de Amenazas Geopolíticas** | Monitoreo en tiempo real de zonas de conflicto, cuantificación de riesgos |
| **🌋 Peligros Ambientales** | Actividad sísmica, eventos volcánicos, radiación atmosférica |
| **✈️ Logística Global** | Seguimiento de vuelos en vivo, rutas marítimas, análisis de carga |
| **⛅ Inteligencia Meteorológica** | Patrones climáticos, condiciones atmosféricas, eventos climáticos |
| **📡 Vigilancia Electrónica** | Red de cámaras global, transmisión desde ubicaciones estratégicas |

---

## 📱 Experiencia Móvil

### Gestos Táctiles

| Gesto | Acción |
|-------|--------|
| **Deslizar Izquierda/Derecha** | Cambiar cámaras en vivo |
| **Deslizar Abajo** | Cerrar panel de noticias |
| **Toque** | Seleccionar eventos, abrir detalles |
| **Pellizcar** | Zoom del globo |
| **Arrastrar** | Rotar globo |

### Características de Interfaz Móvil

- **Navegación Deslizante** - Panel de altura completa con interruptores de capas
- **Estadísticas Rápidas** - Conteos en tiempo real en la parte inferior
- **Tickers Horizontales** - Datos de mercado desplazables
- **Panel Inferior** - Noticias con deslizamiento hacia arriba
- **Video Pantalla Completa** - Visualización inmersiva de cámaras
- **Retroalimentación Háptica** - Respuesta táctil para todas las interacciones

---

## 📊 Descripción General del Panel

<div align="center">

![Pantalla 2](readme-assets/screen-2.png)

*Globo 3D interactivo con visualización de datos multicapa*

</div>

### Capacidades Principales

**Visualización Global Dinámica**
- Renderizado de globo 3D de alto rendimiento con aceleración WebGL
- Sistema de superposición de datos multicapa
- Capacidades de exploración interactiva para análisis detallado
- **Móvil:** Controles optimizados para táctil con retroalimentación háptica

**Inteligencia Avanzada de Eventos**
- Detección y clasificación de eventos en tiempo real
- Paneles de información contextual con metadatos
- Análisis histórico de amenazas y reconocimiento de patrones
- **Móvil:** Modales de detalles en pantalla completa con enlaces externos

**Características de Comando Operacional**
- Estética de sala de guerra con interfaz profesional en modo oscuro
- Diseño de alto contraste para sesiones operativas extendidas
- Diseño responsivo para implementaciones en múltiples monitores
- **Móvil:** Menús deslizantes, paneles inferiores, gestos de deslizamiento

---

## 🚀 Implementación y Operaciones

### Inicio Rápido

```bash
# Instalación básica
npm install

# Implementación en desarrollo
npm run dev

# Compilación de producción
npm run build

# Implementación en GitHub Pages
npm run deploy
```

### Requisitos del Sistema

| Requisito | Especificación |
|-----------|----------------|
| **Node.js** | v20+ LTS |
| **npm** | Última versión |
| **Navegador** | Moderno (Chrome, Firefox, Safari, Edge) |
| **GPU** | Recomendado para rendimiento óptimo |
| **Móvil** | iOS 14+ / Android 10+ recomendado |

### Soporte de Navegadores Móviles

| Plataforma | Navegador | Soporte |
|------------|-----------|---------|
| **iOS** | Safari | ✅ Completo |
| **iOS** | Chrome | ✅ Completo |
| **Android** | Chrome | ✅ Completo |
| **Android** | Firefox | ✅ Completo |
| **Android** | Samsung Internet | ✅ Completo |

### Implementación en la Nube

Configurar implementación en GitHub Pages:

1. Navegar a **Settings** → **Pages** del repositorio
2. Establecer fuente a **gh-pages branch** desde **root folder**
3. Ejecutar `npm run deploy` para publicar

---

## ⚙️ Arquitectura Técnica

### Stack Tecnológico

```
Framework Frontend       React 19 (Vite)
Visualización 3D         react-globe.gl (Three.js)
Sistema de Estilos       Tailwind CSS 4.0
Componentes UI           Lucide-React
Gestión de Estado        React Hooks
Sistema de Build         Vite 6
Motor de Simulación      Personalizado
Gestos Móviles           Custom Touch Hook
Retroalimentación Háptica Navigator Vibration API
```

### Arquitectura de Componentes

| Componente | Función | Mejora Móvil |
|------------|---------|--------------|
| **GlobeComponent** | Motor de visualización 3D | Controles táctiles, marcadores grandes |
| **Dashboard** | Interfaz operacional principal | Diseño responsivo, header móvil |
| **MobileMenu** | Navegación deslizante | Interruptores de capas |
| **EventDetailModal** | Análisis detallado | Modal pantalla completa |
| **MarketTickers** | Datos en tiempo real | Ticker desplazable horizontal |
| **NewsFeed** | Boletín de inteligencia | Panel inferior deslizante |
| **VideoModal** | Transmisión de vigilancia | Pantalla completa con zonas táctiles |

---

## 🔧 Flujo de Desarrollo

### Desarrollo Local

```bash
# Clonar y configurar
git clone <repository-url>
cd palantir-demo

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo con HMR
npm run dev
```

Acceder en `http://localhost:5173` con actualizaciones HMR en vivo.

### Pruebas Móviles

**Chrome DevTools:**
1. Presionar `F12` o `Cmd+Option+I`
2. Click en ícono de dispositivo o presionar `Cmd+Shift+M`
3. Seleccionar dispositivo (iPhone 14 Pro, Pixel 7, iPad)
4. Probar gestos táctiles con simulación de mouse/táctil

**Dispositivo Físico:**
1. Asegurar que el dispositivo esté en la misma red
2. Acceder vía `http://<tu-ip>:5173`
3. Probar retroalimentación háptica en dispositivos compatibles

### Pipeline de Build

```bash
# Optimización de producción
npm run build

# Salida: directorio dist/ listo para implementación
```

### Vista Previa de Build de Producción

```bash
npm run preview
```

---

## 📋 Estructura del Proyecto

```
palantir-demo/
├── src/
│   ├── components/          # Módulos de componentes React
│   │   ├── Dashboard.jsx    # Diseño principal (responsivo)
│   │   ├── GlobeComponent.jsx
│   │   ├── EventDetailModal.jsx
│   │   ├── MarketTickers.jsx
│   │   ├── NewsFeed.jsx
│   │   ├── VideoModal.jsx
│   │   └── MobileMenu.jsx   # NUEVO: Navegación móvil
│   │
│   ├── data/                # Motores de simulación de datos
│   │   ├── mockEngine.js
│   │   ├── cameras.js
│   │   └── maritimeRoutes.js
│   │
│   ├── hooks/               # NUEVO: Hooks personalizados
│   │   └── useTouchGestures.jsx
│   │
│   ├── App.jsx              # Componente raíz
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales mobile-first
│
├── readme-assets/           # Gráficos de documentación
├── mobile-screenshots.html  # NUEVO: Showcase de interfaz móvil
├── MOBILE_IMPROVEMENTS.md   # NUEVO: Documentación móvil detallada
├── index.html               # Plantilla HTML habilitada para PWA
├── vite.config.js           # Configuración de build
└── package.json             # Manifiesto de dependencias
```

---

## 🎓 Uso Educativo y de Demostración

Esta plataforma demuestra capacidades de visualización de inteligencia en tiempo real a nivel empresarial. Diseñada para exploración educativa de:

- Patrones avanzados de React y optimización de rendimiento
- Técnicas de visualización 3D y WebGL
- Arquitectura de streaming de datos en tiempo real
- UI/UX de alta fidelidad para centros de comando
- Metodología de visualización de datos geoespaciales
- **Patrones de diseño responsivo mobile-first**
- **Reconocimiento de gestos táctiles y retroalimentación háptica**
- **Implementación de Progressive Web App (PWA)**

---

## 📄 Licencia y Atribución

Creado con fines de demostración y educativos

### Aspectos Destacados del Desarrollo Móvil

- ✅ Diseño totalmente responsivo (320px - 2560px+)
- ✅ Interacciones optimizadas para táctil
- ✅ Integración de retroalimentación háptica
- ✅ Soporte de área segura (dispositivos con notch)
- ✅ Efectos de interfaz glass morphism
- ✅ Rendimiento optimizado para móviles
- ✅ Meta tags listos para PWA

<div align="center">

**Para consultas**: Revisar issues del repositorio o documentación

**Documentación Móvil**: [MOBILE_IMPROVEMENTS.md](MOBILE_IMPROVEMENTS.md)

</div>

---

## 📖 Documentación Adicional

- **[MOBILE_IMPROVEMENTS.md](MOBILE_IMPROVEMENTS.md)** - Documentación completa de responsividad móvil
- **[mobile-screenshots.html](mobile-screenshots.html)** - Showcase interactivo de interfaz móvil
- **README.md** - Documentación en inglés
- **README.fr.md** - Documentación en francés
- **README.zh.md** - Documentación en chino
