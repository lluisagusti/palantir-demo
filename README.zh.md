# ⚛️ PALANTIR DEMO
## 实时全球情报平台

<div align="center">

![屏幕 1](readme-assets/screen-1.png)

**先进的地缘政治监测和全球威胁评估系统**

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev)
[![THREE.js](https://img.shields.io/badge/Three.js-globe-black?style=flat-square)](https://threejs.org)

</div>

---

## 🎯 任务简报

PALANTIR DEMO 是一个企业级情报可视化平台，在地缘政治、环保和物流维度提供实时态势感知。为运营卓越和快速决策而设计。

### 情报领域

| 领域 | 能力 |
|------|-----|
| **🔴 地缘政治威胁评估** | 实时冲突区监测、风险量化、战略热点追踪 |
| **🌋 环境灾害** | 地震活动、火山事件、大气辐射、闪电探测 |
| **✈️ 全球物流** | 实时飞机追踪、海上航线可视化、货运流分析 |
| **⛅ 气象情报** | 天气模式分析、大气条件、气候事件关联 |
| **📡 电子监控** | 全球摄像头网络整合、战略位置流媒体、侦察信息源 |

---

## 📊 仪表板概览

<div align="center">

![屏幕 2](readme-assets/screen-2.png)

*支持多层数据可视化的交互式 3D 地球仪*

</div>

### 核心功能

**动态全球可视化**
- 采用 WebGL 加速的高性能 3D 地球渲染
- 多层数据叠加系统
- 深度分析的交互式深钻功能
- 无缝地球旋转和缩放导航

**高级事件情报**
- 实时事件检测和分类
- 带元数据的上下文信息面板
- 历史威胁分析和模式识别
- 自动风险评分算法

**运营指挥特性**
- 具有专业暗模式界面的作战室美学
- 用于长时间运营的高对比度设计
- 多显示器部署的响应式布局
- 支持触控的战术指挥中心

---

## 🚀 部署与运营

<div align="center">

![屏幕 3](readme-assets/screen-3.png)

*系统监测和实时数据整合*

</div>

### 快速启动

```bash
# 基础设置
npm install

# 开发部署
npm run dev

# 生产构建
npm run build

# GitHub Pages 部署
npm run deploy
```

### 系统需求

| 需求 | 规格 |
|------|------|
| **Node.js** | v20+ LTS |
| **npm** | 最新版本 |
| **浏览器** | 现代浏览器（Chrome、Firefox、Safari、Edge） |
| **GPU** | 推荐用于最佳性能 |

### 云部署

配置 GitHub Pages 部署：

1. 进入仓库 **Settings** → **Pages**
2. 将源设置为从 **root folder** 的 **gh-pages branch**
3. 运行 `npm run deploy` 发布

系统将自动构建并部署到您的 GitHub Pages 实例。

---

## ⚙️ 技术架构

<div align="center">

![屏幕 4](readme-assets/screen-4.png)

*高级监测和分析仪表板*

</div>

### 技术栈

```
前端框架                React 19 (Vite)
3D 可视化              react-globe.gl (Three.js)
样式系统                Tailwind CSS 4.0
UI 组件                 Lucide-React
状态管理                React Hooks
构建系统                Vite 6
模拟引擎                自定义高性能
```

### 组件架构

| 组件 | 功能 |
|------|------|
| **GlobeComponent** | 3D 可视化引擎和视口管理 |
| **Dashboard** | 主要运营界面和布局 |
| **EventDetailModal** | 单个事件的深度分析 |
| **MarketTickers** | 实时数据流和市场指标 |
| **NewsFeed** | 情报通报汇总系统 |
| **VideoModal** | 监控信息源整合和播放 |

---

## 🔧 开发工作流

### 本地开发

```bash
# 克隆并设置
git clone <repository-url>
cd palantir-demo

# 安装依赖
npm install

# 启动热重载开发服务器
npm run dev
```

访问 `http://localhost:5173` 获得实时 HMR 更新。

### 构建管道

```bash
# 生产优化
npm run build

# 输出：dist/ 目录已准备好部署
```

### 预览生产构建

```bash
npm run preview
```

---

## 📋 项目结构

```
palantir-demo/
├── src/
│   ├── components/          # React 组件模块
│   │   ├── Dashboard.jsx
│   │   ├── GlobeComponent.jsx
│   │   ├── EventDetailModal.jsx
│   │   ├── MarketTickers.jsx
│   │   ├── NewsFeed.jsx
│   │   └── VideoModal.jsx
│   │
│   ├── data/                # 数据模拟引擎
│   │   ├── mockEngine.js
│   │   ├── cameras.js
│   │   └── maritimeRoutes.js
│   │
│   ├── App.jsx              # 根应用组件
│   ├── main.jsx             # 入口点
│   └── index.css            # 全局样式
│
├── readme-assets/           # 文档图形资源
├── index.html               # HTML 模板
├── vite.config.js           # 构建配置
└── package.json             # 依赖清单
```

---

## 🎓 教育和演示用途

该平台展示了企业级实时情报可视化功能。专为以下方向的教育探索而设计：

- 高级 React 模式和性能优化
- WebGL 和 3D 网络可视化技术
- 实时数据流传输架构
- 指挥中心的高保真 UI/UX
- 地理空间数据可视化方法

---

## 📄 许可和署名

为演示和教育目的而创建。

<div align="center">

**询问**: 请查看仓库议题或文档

</div>
