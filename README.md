# 神威·海洋之光 - 中国算力报道 (Sunway OceanLight Visualization)

> 一个基于 WebGL 的沉浸式 3D 融媒体新闻网页，通过三维粒子网络拓扑展示中国超级算力的核心调度能力。


## 🌟 项目亮点 (Features)

*   沉浸式 3D 场景：基于 `Three.js` 和 `React Three Fiber` 构建的深空粒子网络，包含 35,000+ 个动态交互粒子。
*   高性能渲染：利用 GPU Instancing 技术与 Bloom 后处理辉光特效，实现电影级视觉体验。
*   动态拓扑结构：粒子节点模拟“算力中心”，通过自定义 Shader 实现数据脉冲在神经网络中的流动效果。
*   现代交互设计：
    *   Hero Banner：鼠标拖拽旋转 3D 模型，滚轮浏览新闻。
    *   多页面路由：无缝切换首页与详情页，背景 3D 场景保持驻留不重载。
    *   响应式布局：完美适配桌面端与移动端。

## 🛠️ 技术栈 (Tech Stack)

*   核心框架: [React 18](https://reactjs.org/) + [Vite](https://vitejs.dev/)
*   3D 引擎: [Three.js](https://threejs.org/)
*   3D 抽象层: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
*   后处理特效: [React Three Postprocessing](https://github.com/pmndrs/react-postprocessing)
*   样式库: [Tailwind CSS](https://tailwindcss.com/)
*   路由: [React Router DOM](https://reactrouter.com/)

## 🚀 快速开始 (Getting Started)

### 1. 克隆项目
```bash
git clone https://github.com/Cinve-Yu/Assignment-archive.git
cd Assignment-archive
```

### 2. 安装依赖
确保你的电脑已安装 [Node.js](https://nodejs.org/)。
```bash
npm install
```

### 3. 启动本地开发服务器
```bash
npm run dev
```
打开浏览器访问 `http://localhost:5173` 即可查看效果。

### 4. 构建生产版本
```bash
npm run build
```

## 📂 目录结构

```text
├── public/              # 静态资源 (图片/视频)
├── src/
│   ├── components/      # React 组件
│   │   ├── Scene.tsx        # 3D 场景入口
│   │   ├── DataGalaxy.tsx   # 粒子系统核心代码
│   │   ├── Header.tsx       # 全局导航栏
│   │   └── ...
│   ├── App.tsx          # 路由布局配置
│   └── index.css        # Tailwind 指令
└── ...
```

## 👤 作者 (Author)

Cinve-Yu

---
*此项目仅供学习与展示使用。*

