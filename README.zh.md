# ⚛️ PALANTIR DEMO
## 实时全球情报平台

<div align="center">

![屏幕 1](readme-assets/screen-1.png)

**先进的地缘政治监测和全球威胁评估系统**

[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev)
[![THREE.js](https://img.shields.io/badge/Three.js-globe-black?style=flat-square)](https://threejs.org)
[![移动](https://img.shields.io/badge/移动 - 响应式-green?style=flat-square)](MOBILE_IMPROVEMENTS.md)

</div>

---

## 🎯 任务简介

PALANTIR DEMO 是一个企业级情报可视化平台，提供跨地缘政治、环境和后勤维度的实时态势感知。为卓越运营和快速决策而构建。

### 🆕 现在完全支持移动端响应！

该平台现在在移动设备上提供沉浸式的原生应用体验，包括：
- 📱 针对触控优化的界面，带有触觉反馈
- 🎮 用于直观导航的手势滑动
- 📲 全屏模态框和底部面板
- 🌐 带有图层控制的滑动导航
- ⚡ 针对移动网络优化的实时数据

### 情报领域

| 领域 | 能力 |
|------|------|
| **🔴 地缘政治威胁评估** | 实时冲突区监测、风险量化、战略热点追踪 |
| **🌋 环境危害** | 地震活动、火山事件、大气辐射、闪电检测 |
| **✈️ 全球物流** | 实时航班跟踪、海事路线可视化、货流分析 |
| **⛅ 气象情报** | 天气模式分析、大气条件、气候事件关联 |
| **📡 电子监控** | 全球摄像头网络集成、战略位置流、侦察源 |

---

## 📱 移动体验

### 触控手势

| 手势 | 操作 |
|------|------|
| **左右滑动** | 切换直播摄像头 |
| **向下滑动** | 关闭新闻推送 |
| **点击** | 选择事件、打开详情 |
| **捏合** | 地球仪缩放 |
| **拖动** | 地球仪旋转 |

### 移动界面功能

- **滑动导航** - 全高抽屉式图层切换
- **快速统计** - 底部实时计数显示
- **横向滚动** - 可滚动的市场数据
- **底部面板** - 向上滑动显示新闻
- **全屏视频** - 沉浸式摄像头观看
- **触觉反馈** - 所有交互的触觉响应

---

## 📊 仪表板概述

<div align="center">

![屏幕 2](readme-assets/screen-2.png)

*交互式 3D 地球仪与多层数据可视化*

</div>

### 核心能力

**动态全球可视化**
- 高性能 3D 地球仪渲染，WebGL 加速
- 多层数据叠加系统
- 交互式深入分析功能
- **移动端：** 针对触控优化的控制，带触觉反馈

**高级事件情报**
- 实时事件检测和分类
- 带元数据的上下文信息面板
- 历史威胁分析和模式识别
- **移动端：** 带外部链接的全屏详情模态框

**作战指挥功能**
- 作战室美学，专业深色界面
- 高对比度设计，适合长时间作战会话
- 响应式布局，支持多显示器部署
- **移动端：** 滑动菜单、底部面板、滑动手势

---

## 🚀 部署和操作

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

### 系统要求

| 要求 | 规格 |
|------|------|
| **Node.js** | v20+ LTS |
| **npm** | 最新版本 |
| **浏览器** | 现代浏览器（Chrome、Firefox、Safari、Edge） |
| **GPU** | 推荐以获得最佳性能 |
| **移动** | 推荐 iOS 14+ / Android 10+ |

### 移动浏览器支持

| 平台 | 浏览器 | 支持 |
|------|--------|------|
| **iOS** | Safari | ✅ 完整 |
| **iOS** | Chrome | ✅ 完整 |
| **Android** | Chrome | ✅ 完整 |
| **Android** | Firefox | ✅ 完整 |
| **Android** | Samsung Internet | ✅ 完整 |

### 云部署

配置 GitHub Pages 部署：

1. 导航到仓库 **Settings** → **Pages**
2. 设置源为 **gh-pages branch** 从 **root folder**
3. 运行 `npm run deploy` 发布

---

## ⚙️ 技术架构

### 技术栈

```
前端框架            React 19 (Vite)
3D 可视化           react-globe.gl (Three.js)
样式系统            Tailwind CSS 4.0
UI 组件             Lucide-React
状态管理            React Hooks
构建系统            Vite 6
模拟引擎            自定义高性能
移动手势            Custom Touch Hook
触觉反馈            Navigator Vibration API
```

### 组件架构

| 组件 | 功能 | 移动增强 |
|------|------|----------|
| **GlobeComponent** | 3D 可视化引擎 | 触控优化、大标记 |
| **Dashboard** | 主操作界面 | 响应式布局、移动头部 |
| **MobileMenu** | 滑动导航 | 图层切换 |
| **EventDetailModal** | 深入分析 | 全屏模态框 |
| **MarketTickers** | 实时数据源 | 横向滚动 ticker |
| **NewsFeed** | 情报简报 | 滑动底部面板 |
| **VideoModal** | 监控源 | 带触控区的全屏 |

---

## 🔧 开发工作流

### 本地开发

```bash
# 克隆和设置
git clone <repository-url>
cd palantir-demo

# 安装依赖
npm install

# 启动热重载开发服务器
npm run dev
```

访问 `http://localhost:5173` 实时 HMR 更新。

### 移动测试

**Chrome DevTools：**
1. 按 `F12` 或 `Cmd+Option+I`
2. 点击设备切换图标或按 `Cmd+Shift+M`
3. 选择设备预设（iPhone 14 Pro、Pixel 7、iPad）
4. 使用鼠标/触控模拟测试手势

**物理设备：**
1. 确保设备在同一网络
2. 通过 `http://<你的 ip>:5173` 访问
3. 在支持的设备上测试触觉反馈

### 构建流程

```bash
# 生产优化
npm run build

# 输出：dist/ 目录准备部署
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
│   │   ├── Dashboard.jsx    # 主布局（响应式）
│   │   ├── GlobeComponent.jsx
│   │   ├── EventDetailModal.jsx
│   │   ├── MarketTickers.jsx
│   │   ├── NewsFeed.jsx
│   │   ├── VideoModal.jsx
│   │   └── MobileMenu.jsx   # 新增：移动导航
│   │
│   ├── data/                # 数据模拟引擎
│   │   ├── mockEngine.js
│   │   ├── cameras.js
│   │   └── maritimeRoutes.js
│   │
│   ├── hooks/               # 新增：自定义 React hooks
│   │   └── useTouchGestures.jsx
│   │
│   ├── App.jsx              # 根应用组件
│   ├── main.jsx             # 入口点
│   └── index.css            # 移动优先全局样式
│
├── readme-assets/           # 文档图形
├── mobile-screenshots.html  # 新增：移动界面展示
├── MOBILE_IMPROVEMENTS.md   # 新增：详细移动文档
├── index.html               # PWA 启用 HTML 模板
├── vite.config.js           # 构建配置
└── package.json             # 依赖清单
```

---

## 🎓 教育和演示用途

该平台展示企业级实时情报可视化能力。设计用于教育探索：

- 高级 React 模式和性能优化
- WebGL 和 3D Web 可视化技术
- 实时数据流架构
- 指挥中心高保真 UI/UX
- 地理空间数据可视化方法
- **移动优先响应式设计模式**
- **触控手势识别和触觉反馈**
- **渐进式 Web 应用（PWA）实现**

---

## 📄 许可和归属

为演示和教育目的创建

### 移动开发亮点

- ✅ 完全响应式设计（320px - 2560px+）
- ✅ 针对触控优化的交互
- ✅ 触觉反馈集成
- ✅ 安全区域支持（刘海屏设备）
- ✅ 玻璃形态界面效果
- ✅ 针对移动优化的性能
- ✅ PWA 就绪元标签

<div align="center">

**咨询**：查看仓库 issues 或文档

**移动文档**：[MOBILE_IMPROVEMENTS.md](MOBILE_IMPROVEMENTS.md)

</div>

---

## 📖 附加文档

- **[MOBILE_IMPROVEMENTS.md](MOBILE_IMPROVEMENTS.md)** - 完整的移动响应式文档
- **[mobile-screenshots.html](mobile-screenshots.html)** - 交互式移动界面展示
- **README.md** - 英文文档
- **README.es.md** - 西班牙语文档
- **README.fr.md** - 法语文档
