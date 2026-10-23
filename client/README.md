# ⚡ Client Application — 3D Interactive Portfolio

This directory contains the React 19 frontend application for the **3D Interactive Portfolio** of [Bhuvan K K](https://github.com/bhuvankk428-spec).

🌐 **Live Portfolio:** [https://bhuvankk428-spec.github.io/portfolio/](https://bhuvankk428-spec.github.io/portfolio/)  
📖 **Main Documentation:** Please refer to the root [README.md](../README.md) for full project architecture, features, and engineering showcases.

---

## 🛠️ Tech Stack

- **React 19** (`react`, `react-dom`)
- **Vite 8** for lightning-fast bundling & HMR
- **Framer Motion 13** for physics-based spring animations & scroll synchronization
- **Lucide React** for modern UI icons
- **React Router DOM 7** for client-side routing
- **HTML5 Canvas 2D Context** for high-performance 300-frame scroll animation

---

## 🏃 Local Development Scripts

Ensure you are inside the `client` directory:

```bash
cd client
```

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Vite Development Server
```bash
npm run dev
```
Runs the app on `http://localhost:5173`. Supports instant Hot Module Replacement (HMR).

### 3. Build for Production
```bash
npm run build
```
Compiles and bundles modern assets into the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```
Serves the generated `dist/` folder locally to verify production performance.

### 5. Lint Code
```bash
npm run lint
```
Runs ESLint with React hooks and refresh rules.

---

## 📂 Key Architecture in `src/`

- `components/HomeCanvas.jsx`: Hardware-accelerated HTML5 Canvas preloading 300 frames from `/frames/` and mapping them dynamically to scroll progress.
- `components/Home.jsx`: Pinned hero card with glassmorphism, skills tags, and smooth Framer Motion springs.
- `components/projects/ProjectVisualizer.jsx`: Live cryptographic and state machine visualizer (ML-KEM-768, AES-256-GCM, claim verifier, gamification engine).
- `data/projectsData.js`: Data source defining all project technical specifications, innovations, packet flows, and direct demo URLs.
