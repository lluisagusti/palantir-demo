# ⚛️ PALANTIR DEMO
## Plateforme d'Intelligence Mondiale en Temps Réel

<div align="center">

![Écran 1](readme-assets/screen-1.png)

**Système avancé de surveillance géopolitique et d'évaluation des menaces mondiales**

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev)
[![THREE.js](https://img.shields.io/badge/Three.js-globe-black?style=flat-square)](https://threejs.org)

</div>

---

## 🎯 Briefing de Mission

PALANTIR DEMO est une plateforme de visualisation d'intelligence de niveau entreprise fournissant une connaissance de la situation en temps réel dans les dimensions géopolitiques, environnementales et logistiques. Construite pour l'excellence opérationnelle et la prise de décision rapide.

### Domaines d'Intelligence

| Domaine | Capacités |
|---------|----------|
| **🔴 Évaluation des Menaces Géopolitiques** | Surveillance en temps réel des zones de conflit, quantification des risques, suivi des points chauds stratégiques |
| **🌋 Aléas Environnementaux** | Activité sismique, événements volcaniques, radiation atmosphérique, détection des impacts de foudre |
| **✈️ Logistique Mondiale** | Suivi des vols en direct, visualisation des routes maritimes, analyse des flux de cargaison |
| **⛅ Renseignement Météorologique** | Analyse des modèles de temps, conditions atmosphériques, corrélation des événements climatiques |
| **📡 Surveillance Électronique** | Intégration du réseau de caméras mondial, streaming depuis les emplacements stratégiques, flux de reconnaissance |

---

## 📊 Aperçu du Tableau de Bord

<div align="center">

![Écran 2](readme-assets/screen-2.png)

*Globe 3D interactif avec visualisation de données multi-couches*

</div>

### Capacités Principales

**Visualisation Mondiale Dynamique**
- Rendu de globe 3D haute performance avec accélération WebGL
- Système de superposition de données multi-couches
- Capacités d'exploration interactive pour une analyse détaillée
- Navigation fluide avec rotation et zoom du globe

**Renseignement Avancé sur les Événements**
- Détection et classification des événements en temps réel
- Panneaux d'informations contextuelles avec métadonnées
- Analyse des menaces historiques et reconnaissance de motifs
- Algorithmes de notation automatique des risques

**Caractéristiques de Commandement Opérationnel**
- Esthétique de salle de guerre avec interface sombre professionnelle
- Conception à contraste élevé pour les sessions opérationnelles prolongées
- Mise en page réactive pour les déploiements multi-écrans
- Activation tactile pour les centres de commandement tactiques

---

## 🚀 Déploiement et Opérations

<div align="center">

![Écran 3](readme-assets/screen-3.png)

*Surveillance du système et intégration des données en temps réel*

</div>

### Lancement Rapide

```bash
# Configuration fondamentale
npm install

# Déploiement de développement
npm run dev

# Construction en production
npm run build

# Déploiement GitHub Pages
npm run deploy
```

### Exigences Système

| Exigence | Spécification |
|----------|--------------|
| **Node.js** | v20+ LTS |
| **npm** | Dernière version |
| **Navigateur** | Moderne (Chrome, Firefox, Safari, Edge) |
| **GPU** | Recommandé pour les performances optimales |

### Déploiement Cloud

Configurez le déploiement GitHub Pages :

1. Accédez à **Settings** → **Pages** du dépôt
2. Définissez la source sur la **branche gh-pages** depuis le **dossier racine**
3. Exécutez `npm run deploy` pour publier

Le système se compilera et se déploiera automatiquement sur votre instance GitHub Pages.

---

## ⚙️ Architecture Technique

<div align="center">

![Écran 4](readme-assets/screen-4.png)

*Tableau de bord avancé de surveillance et d'analyse*

</div>

### Pile Technologique

```
Framework Frontend          React 19 (Vite)
Visualisation 3D            react-globe.gl (Three.js)
Système de Style            Tailwind CSS 4.0
Composants UI               Lucide-React
Gestion d'État              React Hooks
Système de Compilation      Vite 6
Moteur de Simulation        Personnalisé Haute Performance
```

### Architecture des Composants

| Composant | Fonction |
|----------|----------|
| **GlobeComponent** | Moteur de visualisation 3D et gestion de la fenêtre d'affichage |
| **Dashboard** | Interface opérationnelle principale et disposition |
| **EventDetailModal** | Analyse approfondie pour les événements individuels |
| **MarketTickers** | Flux de données en temps réel et indicateurs de marché |
| **NewsFeed** | Système d'agrégation des bulletins d'intelligence |
| **VideoModal** | Intégration et lecture des flux de surveillance |

---

## 🔧 Flux de Travail de Développement

### Développement Local

```bash
# Cloner et configurer
git clone <repository-url>
cd palantir-demo

# Installer les dépendances
npm install

# Démarrer le serveur de développement avec rechargement à chaud
npm run dev
```

Accéder à `http://localhost:5173` avec les mises à jour HMR en direct.

### Pipeline de Construction

```bash
# Optimisation en production
npm run build

# Sortie : répertoire dist/ prêt pour le déploiement
```

### Aperçu de la Construction en Production

```bash
npm run preview
```

---

## 📋 Structure du Projet

```
palantir-demo/
├── src/
│   ├── components/          # Modules de composants React
│   │   ├── Dashboard.jsx
│   │   ├── GlobeComponent.jsx
│   │   ├── EventDetailModal.jsx
│   │   ├── MarketTickers.jsx
│   │   ├── NewsFeed.jsx
│   │   └── VideoModal.jsx
│   │
│   ├── data/                # Moteurs de simulation de données
│   │   ├── mockEngine.js
│   │   ├── cameras.js
│   │   └── maritimeRoutes.js
│   │
│   ├── App.jsx              # Composant d'application racine
│   ├── main.jsx             # Point d'entrée
│   └── index.css            # Styles globaux
│
├── readme-assets/           # Graphiques de documentation
├── index.html               # Modèle HTML
├── vite.config.js           # Configuration de compilation
└── package.json             # Manifeste des dépendances
```

---

## 🎓 Utilisation Éducative et Démonstrative

Cette plateforme démontre les capacités de visualisation d'intelligence en temps réel au niveau entreprise. Conçue pour l'exploration éducative de :

- Modèles React avancés et optimisation des performances
- Techniques de visualisation Web WebGL et 3D
- Architecture de streaming de données en temps réel
- UI/UX haute fidélité pour les centres de commandement
- Méthodologie de visualisation de données géospatiales

---

## 📄 Licence et Attribution

Créé à des fins de démonstration et d'éducation.

<div align="center">

**Pour les demandes** : Consultez les problèmes du dépôt ou la documentation

</div>
