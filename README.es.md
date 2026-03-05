# PALANTIR DEMO — Inteligencia Geopolítica en Tiempo Real

Un panel de control 3D interactivo y de alta fidelidad que visualiza riesgos geopolíticos globales, eventos ambientales e infraestructura estratégica en tiempo real.

## 🌍 Descripción General

PALANTIR DEMO proporciona una visión integral de inteligencia global mediante el seguimiento de:
- **Amenazas Geopolíticas**: Monitoreo en tiempo real de zonas de conflicto global y niveles de riesgo.
- **Monitoreo Ambiental**: Seguimiento en vivo de terremotos, volcanes, rayos y niveles de radiación.
- **Logística Global**: Visualización en tiempo real de vuelos de aeronaves y rutas de navegación marítima.
- **Datos Meteorológicos**: Patrones climáticos en vivo y condiciones atmosféricas.
- **Vigilancia**: Cámaras de transmisión pública integradas desde ubicaciones estratégicas en todo el mundo.

## 🚀 Tecnologías

- **Framework**: React 19 (Vite)
- **Visualización 3D**: `react-globe.gl` (basado en Three.js)
- **Estilos**: Tailwind CSS 4.0
- **Iconos**: Lucide-React
- **Motor en Tiempo Real**: Motor de simulación personalizado de alto rendimiento.

## 🛠️ Primeros Pasos

### Requisitos Previos
- [Node.js](https://nodejs.org/) (se recomienda v20+)
- [npm](https://www.npmjs.com/)

### Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone <repository-url>
   cd palantir-demo
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

### Ejecutar la Aplicación

1. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   *Acceda al panel de control en la URL proporcionada por Vite (normalmente http://localhost:5173).*

## 🌐 Despliegue

Este proyecto está configurado para un despliegue sencillo en GitHub Pages.

1. **Compilar y Desplegar:**
   ```bash
   npm run deploy
   ```
   *Esto compilará automáticamente el proyecto y subirá la carpeta `dist` a la rama `gh-pages`.*

2. **Configuración en GitHub:**
   - Vaya a la **Configuración** (Settings) de su repositorio en GitHub.
   - Navegue a **Pages**.
   - En **Build and deployment** > **Source**, asegúrese de que **"Deploy from a branch"** esté seleccionado.
   - Seleccione la rama **`gh-pages`** y la carpeta **`/(root)`**.

## 📈 Características Principales

- **Globo 3D Dinámico**: Visualización de alto rendimiento con exploración interactiva de capas de datos globales.
- **Monitoreo Avanzado de Eventos**: Modales detallados para cada evento (terremotos, vuelos, amenazas) con información contextual.
- **Operaciones Marítimas**: Seguimiento en tiempo real de buques de carga y petroleros a través de rutas marítimas internacionales.
- **Vigilancia en Vivo**: Sistema interactivo de selección de cámaras para ver transmisiones públicas en todo el mundo.
- **Estética de Sala de Guerra**: Interfaz de usuario elegante y de alto contraste en modo oscuro, diseñada para el monitoreo profesional de inteligencia.


---

Creado con fines de demostración y educativos.
