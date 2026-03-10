# ⚛️ PALANTIR DEMO
## Plateforme de Renseignement Global en Temps Réel

<div align="center">

![Écran 1](readme-assets/screen-1.png)

**Système avancé de surveillance géopolitique et d'évaluation des menaces mondiales**

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev)
[![THREE.js](https://img.shields.io/badge/Three.js-globe-black?style=flat-square)](https://threejs.org)
[![Mobile](https://img.shields.io/badge/Mobile-Responsive-green?style=flat-square)](MOBILE_IMPROVEMENTS.md)

</div>

---

## 🎯 Description de la Mission

PALANTIR DEMO est une plateforme de visualisation de renseignement de niveau entreprise fournissant une conscience situationnelle en temps réel à travers les dimensions géopolitiques, environnementales et logistiques. Conçu pour l'excellence opérationnelle et la prise de décision rapide.

### 🆕 Maintenant Entièrement Responsive pour Mobile !

La plateforme offre désormais une expérience immersive de type application native sur les appareils mobiles avec :
- 📱 Interface optimisée pour le tactile avec retour haptique
- 🎮 Gestes de balayage pour une navigation intuitive
- 📲 Modales plein écran et panneaux inférieurs
- 🌐 Navigation coulissante avec contrôles des calques
- ⚡ Données en temps réel optimisées pour les réseaux mobiles

### Domaines de Renseignement

| Domaine | Capacités |
|---------|-----------|
| **🔴 Évaluation des Menaces Géopolitiques** | Surveillance en temps réel des zones de conflit, quantification des risques |
| **🌋 Risques Environnementaux** | Activité sismique, événements volcaniques, radiation atmosphérique |
| **✈️ Logistique Globale** | Suivi des vols en direct, visualisation des routes maritimes |
| **⛅ Renseignement Météorologique** | Analyse des modèles météorologiques, conditions atmosphériques |
| **📡 Surveillance Électronique** | Intégration de réseau de caméras global, flux de reconnaissance |

---

## 📱 Expérience Mobile

### Gestes Tactiles

| Geste | Action |
|-------|--------|
| **Balayer Gauche/Droite** | Changer de caméra en direct |
| **Balayer Vers le Bas** | Fermer le flux d'actualités |
| **Appuyer** | Sélectionner des événements, ouvrir les détails |
| **Pincer** | Zoom du globe |
| **Faire Glisser** | Rotation du globe |

### Fonctionnalités de l'Interface Mobile

- **Navigation Coulissante** - Panneau pleine hauteur avec bascules de calques
- **Statistiques Rapides** - Comptes en temps réel en bas de l'écran
- **Tickers Horizontaux** - Données de marché défilantes
- **Panneau Inférieur** - Actualités avec balayage vers le haut
- **Vidéo Plein Écran** - Visualisation immersive des caméras
- **Retour Haptique** - Réponse tactile pour toutes les interactions

---

## 📊 Aperçu du Tableau de Bord

<div align="center">

![Écran 2](readme-assets/screen-2.png)

*Globe 3D interactif avec visualisation de données multi-couches*

</div>

### Capacités Principales

**Visualisation Globale Dynamique**
- Rendu de globe 3D haute performance avec accélération WebGL
- Système de superposition de données multi-couches
- Capacités d'exploration interactive pour analyse détaillée
- **Mobile :** Contrôles optimisés pour le tactile avec retour haptique

**Renseignement Avancé sur les Événements**
- Détection et classification d'événements en temps réel
- Panneaux d'information contextuels avec métadonnées
- Analyse historique des menaces et reconnaissance de motifs
- **Mobile :** Modales de détails en plein écran avec liens externes

**Fonctionnalités de Commande Opérationnelle**
- Esthétique de salle de guerre avec interface professionnelle en mode sombre
- Conception à contraste élevé pour sessions opérationnelles prolongées
- Disposition responsive pour déploiements multi-écrans
- **Mobile :** Menus coulissants, panneaux inférieurs, gestes de balayage

---

## 🚀 Déploiement et Opérations

### Lancement Rapide

```bash
# Installation de base
npm install

# Déploiement en développement
npm run dev

# Build de production
npm run build

# Déploiement GitHub Pages
npm run deploy
```

### Configuration Requise

| Requis | Spécification |
|--------|---------------|
| **Node.js** | v20+ LTS |
| **npm** | Dernière version |
| **Navigateur** | Moderne (Chrome, Firefox, Safari, Edge) |
| **GPU** | Recommandé pour performances optimales |
| **Mobile** | iOS 14+ / Android 10+ recommandé |

### Support des Navigateurs Mobiles

| Plateforme | Navigateur | Support |
|------------|------------|---------|
| **iOS** | Safari | ✅ Complet |
| **iOS** | Chrome | ✅ Complet |
| **Android** | Chrome | ✅ Complet |
| **Android** | Firefox | ✅ Complet |
| **Android** | Samsung Internet | ✅ Complet |

### Déploiement Cloud

Configurer le déploiement GitHub Pages :

1. Accéder à **Settings** → **Pages** du dépôt
2. Définir la source sur **gh-pages branch** depuis **root folder**
3. Exécuter `npm run deploy` pour publier

---

## ⚙️ Architecture Technique

### Stack Technologique

```
Framework Frontend       React 19 (Vite)
Visualisation 3D         react-globe.gl (Three.js)
Système de Style         Tailwind CSS 4.0
Composants UI            Lucide-React
Gestion d'État           React Hooks
Système de Build         Vite 6
Moteur de Simulation     Personnalisé
Gestes Mobiles           Custom Touch Hook
Retour Haptique          Navigator Vibration API
```

### Architecture des Composants

| Composant | Fonction | Amélioration Mobile |
|-----------|----------|---------------------|
| **GlobeComponent** | Moteur de visualisation 3D | Contrôles tactiles, marqueurs larges |
| **Dashboard** | Interface opérationnelle principale | Design responsive, header mobile |
| **MobileMenu** | Navigation coulissante | Bascules de calques |
| **EventDetailModal** | Analyse approfondie | Modale plein écran |
| **MarketTickers** | Flux de données en temps réel | Ticker défilant horizontal |
| **NewsFeed** | Bulletin de renseignement | Panneau inférieur coulissant |
| **VideoModal** | Flux de surveillance | Plein écran avec zones tactiles |

---

## 🔧 Flux de Développement

### Développement Local

```bash
# Cloner et configurer
git clone <repository-url>
cd palantir-demo

# Installer les dépendances
npm install

# Démarrer le serveur de développement avec HMR
npm run dev
```

Accès via `http://localhost:5173` avec mises à jour HMR en direct.

### Tests Mobiles

**Chrome DevTools :**
1. Appuyer sur `F12` ou `Cmd+Option+I`
2. Cliquer sur l'icône de périphérique ou appuyer sur `Cmd+Shift+M`
3. Sélectionner un périphérique (iPhone 14 Pro, Pixel 7, iPad)
4. Tester les gestes tactiles avec simulation souris/tactile

**Appareil Physique :**
1. S'assurer que l'appareil est sur le même réseau
2. Accéder via `http://<votre-ip>:5173`
3. Tester le retour haptique sur les appareils compatibles

### Pipeline de Build

```bash
# Optimisation de production
npm run build

# Sortie : répertoire dist/ prêt pour déploiement
```

### Aperçu du Build de Production

```bash
npm run preview
```

---

## 📋 Structure du Projet

```
palantir-demo/
├── src/
│   ├── components/          # Modules de composants React
│   │   ├── Dashboard.jsx    # Disposition principale (responsive)
│   │   ├── GlobeComponent.jsx
│   │   ├── EventDetailModal.jsx
│   │   ├── MarketTickers.jsx
│   │   ├── NewsFeed.jsx
│   │   ├── VideoModal.jsx
│   │   └── MobileMenu.jsx   # NOUVEAU : Navigation mobile
│   │
│   ├── data/                # Moteurs de simulation de données
│   │   ├── mockEngine.js
│   │   ├── cameras.js
│   │   └── maritimeRoutes.js
│   │
│   ├── hooks/               # NOUVEAU : Hooks personnalisés
│   │   └── useTouchGestures.jsx
│   │
│   ├── App.jsx              # Composant racine
│   ├── main.jsx             # Point d'entrée
│   └── index.css            # Styles globaux mobile-first
│
├── readme-assets/           # Graphiques de documentation
├── mobile-screenshots.html  # NOUVEAU : Présentation interface mobile
├── MOBILE_IMPROVEMENTS.md   # NOUVEAU : Documentation mobile détaillée
├── index.html               # Template HTML activé PWA
├── vite.config.js           # Configuration de build
└── package.json             # Manifeste des dépendances
```

---

## 🎓 Utilisation Éducative et de Démonstration

Cette plateforme démontre des capacités de visualisation de renseignement en temps réel de niveau entreprise. Conçue pour l'exploration éducative de :

- Modèles React avancés et optimisation des performances
- Techniques de visualisation 3D et WebGL
- Architecture de streaming de données en temps réel
- UI/UX haute fidélité pour centres de commandement
- Méthodologie de visualisation de données géospatiales
- **Modèles de design responsive mobile-first**
- **Reconnaissance de gestes tactiles et retour haptique**
- **Implémentation Progressive Web App (PWA)**

---

## 📄 Licence et Attribution

Créé à des fins de démonstration et éducatives

### Points Forts du Développement Mobile

- ✅ Design entièrement responsive (320px - 2560px+)
- ✅ Interactions optimisées pour le tactile
- ✅ Intégration de retour haptique
- ✅ Support des zones de sécurité (appareils encoche)
- ✅ Effets d'interface glass morphism
- ✅ Performances optimisées pour mobile
- ✅ Balises meta prêtes pour PWA

<div align="center">

**Pour toute demande** : Consulter les issues du dépôt ou la documentation

**Documentation Mobile** : [MOBILE_IMPROVEMENTS.md](MOBILE_IMPROVEMENTS.md)

</div>

---

## 📖 Documentation Additionnelle

- **[MOBILE_IMPROVEMENTS.md](MOBILE_IMPROVEMENTS.md)** - Documentation complète de responsivité mobile
- **[mobile-screenshots.html](mobile-screenshots.html)** - Présentation interactive de l'interface mobile
- **README.md** - Documentation en anglais
- **README.es.md** - Documentation en espagnol
- **README.zh.md** - Documentation en chinois
