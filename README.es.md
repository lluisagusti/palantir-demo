# ⚛️ PALANTIR DEMO
## Plataforma de Inteligencia Global en Tiempo Real

<div align="center">

![Pantalla 1](readme-assets/screen-1.png)

**Sistema avanzado de monitoreo geopolítico y evaluación de amenazas mundial**

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev)
[![THREE.js](https://img.shields.io/badge/Three.js-globe-black?style=flat-square)](https://threejs.org)

</div>

---

## 🎯 Descripción de la Misión

PALANTIR DEMO es una plataforma de visualización de inteligencia de nivel empresarial que proporciona conciencia situacional en tiempo real en dimensiones geopolíticas, ambientales y logísticas. Construida para excelencia operativa y toma rápida de decisiones.

### Dominios de Inteligencia

| Dominio | Capacidades |
|---------|------------|
| **🔴 Evaluación de Amenazas Geopolíticas** | Monitoreo en tiempo real de zonas de conflicto, cuantificación de riesgos, seguimiento de puntos críticos estratégicos |
| **🌋 Peligros Ambientales** | Actividad sísmica, eventos volcánicos, radiación atmosférica, detección de rayos |
| **✈️ Logística Global** | Seguimiento de vuelos en vivo, visualización de rutas marítimas, análisis de flujo de carga |
| **⛅ Inteligencia Meteorológica** | Análisis de patrones climáticos, condiciones atmosféricas, correlación de eventos climáticos |
| **📡 Vigilancia Electrónica** | Integración de red de cámaras global, transmisión desde ubicaciones estratégicas, alimentación de reconocimiento |

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
- Navegación fluida de rotación y zoom del globo

**Inteligencia Avanzada de Eventos**
- Detección y clasificación de eventos en tiempo real
- Paneles de información contextual con metadatos
- Análisis de amenazas históricas y reconocimiento de patrones
- Algoritmos automáticos de puntuación de riesgos

**Características de Comando Operacional**
- Estética de sala de guerra con interfaz profesional de modo oscuro
- Diseño de alto contraste para sesiones operacionales extendidas
- Disposición receptiva para implementaciones de múltiples monitores
- Habilitado para táctil para centros de comando tácticos

---

## 🚀 Despliegue y Operaciones

<div align="center">

![Pantalla 3](readme-assets/screen-3.png)

*Monitoreo del sistema e integración de datos en tiempo real*

</div>

### Lanzamiento Rápido

```bash
# Configuración fundamental
npm install

# Despliegue de desarrollo
npm run dev

# Construcción de producción
npm run build

# Despliegue en GitHub Pages
npm run deploy
```

### Requisitos del Sistema

| Requisito | Especificación |
|-----------|----------------|
| **Node.js** | v20+ LTS |
| **npm** | Última versión |
| **Navegador** | Moderno (Chrome, Firefox, Safari, Edge) |
| **GPU** | Recomendado para óptimo rendimiento |

### Despliegue en la Nube

Configure el despliegue de GitHub Pages:

1. Navegue a **Settings** → **Pages** del repositorio
2. Configure la fuente a **rama gh-pages** desde **carpeta raíz**
3. Ejecute `npm run deploy` para publicar

El sistema se compilará e implementará automáticamente en su instancia de GitHub Pages.

---

## ⚙️ Arquitectura Técnica

<div align="center">

![Pantalla 4](readme-assets/screen-4.png)

*Panel avanzado de monitoreo y análisis*

</div>

### Pila Tecnológica

```
Framework Frontend          React 19 (Vite)
Visualización 3D            react-globe.gl (Three.js)
Sistema de Estilos          Tailwind CSS 4.0
Componentes UI              Lucide-React
Gestión de Estado           React Hooks
Sistema de Compilación      Vite 6
Motor de Simulación         Personalizado de Alto Rendimiento
```

### Arquitectura de Componentes

| Componente | Función |
|-----------|---------|
| **GlobeComponent** | Motor de visualización 3D y gestión de viewport |
| **Dashboard** | Interfaz operacional principal y diseño |
| **EventDetailModal** | Análisis en profundidad para eventos individuales |
| **MarketTickers** | Fuentes de datos en tiempo real e indicadores de mercado |
| **NewsFeed** | Sistema de agregación de boletines de inteligencia |
| **VideoModal** | Integración y reproducción de fuentes de vigilancia |

---

## 🔧 Flujo de Trabajo de Desarrollo

### Desarrollo Local

```bash
# Clonar y configurar
git clone <repository-url>
cd palantir-demo

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo con hot-reload
npm run dev
```

Acceder en `http://localhost:5173` con actualizaciones HMR en vivo.

### Canalización de Compilación

```bash
# Optimización de producción
npm run build

# Salida: directorio dist/ listo para despliegue
```

### Vista Previa de Compilación de Producción

```bash
npm run preview
```

---

## 📋 Estructura del Proyecto

```
palantir-demo/
├── src/
│   ├── components/          # Módulos de componentes React
│   │   ├── Dashboard.jsx
│   │   ├── GlobeComponent.jsx
│   │   ├── EventDetailModal.jsx
│   │   ├── MarketTickers.jsx
│   │   ├── NewsFeed.jsx
│   │   └── VideoModal.jsx
│   │
│   ├── data/                # Motores de simulación de datos
│   │   ├── mockEngine.js
│   │   ├── cameras.js
│   │   └── maritimeRoutes.js
│   │
│   ├── App.jsx              # Componente de aplicación raíz
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
│
├── readme-assets/           # Gráficos de documentación
├── index.html               # Plantilla HTML
├── vite.config.js           # Configuración de compilación
└── package.json             # Manifiesto de dependencias
```

---

## 🎓 Uso Educativo y de Demostración

Esta plataforma demuestra capacidades de visualización de inteligencia en tiempo real de nivel empresarial. Diseñada para exploración educativa de:

- Patrones avanzados de React y optimización de rendimiento
- Técnicas de visualización web WebGL y 3D
- Arquitectura de streaming de datos en tiempo real
- UI/UX de alta fidelidad para centros de comando
- Metodología de visualización de datos geoespaciales

---

## 📄 Licencia y Atribución

Creado con fines de demostración y educativos.

<div align="center">

**Para consultas**: Consulte los problemas del repositorio o la documentación

</div>
