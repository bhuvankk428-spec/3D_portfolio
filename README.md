# ⚡ 3D Interactive Developer Portfolio

<div align="center">

[![Live Portfolio](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-6366f1?style=for-the-badge&logo=googlechrome&logoColor=white)](https://bhuvankk428-spec.github.io/portfolio/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/bhuvankk428-spec/3D_portfolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Bhuvan%20K%20K-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bhuvanlinkdin/)
[![React 19](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-13.4-ff0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

<br />

**A cutting-edge, 3D interactive portfolio engineered by [Bhuvan K K](https://github.com/bhuvankk428-spec).**  
Featuring an Apple-style 300-frame scroll-driven canvas engine, dynamic post-quantum cryptography simulators, real-time agentic AI visualizers, and glassmorphic UI architecture.

[🌐 View Live Portfolio](https://bhuvankk428-spec.github.io/portfolio/) • [📂 Explore Featured Projects](#-featured-engineering-projects) • [🏆 Achievements](#-hackathons--achievements) • [📬 Contact Me](https://www.linkedin.com/in/bhuvanlinkdin/)

</div>

---

## 📑 Table of Contents

- [🌟 Live Links & Demos](#-live-links--demos)
- [🎯 Overview & Architecture](#-overview--architecture)
- [✨ Key Highlights & Features](#-key-highlights--features)
- [🖥️ Featured Engineering Projects](#️-featured-engineering-projects)
- [🛠️ Tech Stack & Tools](#️-tech-stack--tools)
- [📁 Project Structure](#-project-structure)
- [🚀 Quick Start & Installation](#-quick-start--installation)
- [💼 Professional Experience](#-professional-experience)
- [🏆 Hackathons & Achievements](#-hackathons--achievements)
- [🎓 Education & Certifications](#-education--certifications)
- [📬 Author & Contact Information](#-author--contact-information)
- [📄 License](#-license)

---

## 🌟 Live Links & Demos

| Resource | Status | Direct Link |
| :--- | :--- | :--- |
| **🌐 Portfolio Live Site** | **Production** | [**bhuvankk428-spec.github.io/portfolio**](https://bhuvankk428-spec.github.io/portfolio/) |
| **👑 Save the Queen (ResQ Queen)** | **Live App** | [**resq-queen.vercel.app**](https://resq-queen.vercel.app/) |
| **👑 ResQ Queen Video Demo** | **YouTube** | [**Watch Full Demonstration**](https://youtu.be/63IO5uWvjC4) |
| **🛡️ Insure.AI Claim Platform** | **Live App** | [**qk-my-al-1999-2005.vercel.app**](https://qk-my-al-1999-2005.vercel.app/) |
| **🔐 Quantum A2A Protocol** | **Open Source** | [**GitHub Repository**](https://github.com/bhuvankk428-spec/PQS-A2A_Encryption_method.git) |
| **🖥️ Student Management System** | **Open Source** | [**GitHub Repository**](https://github.com/bhuvankk428-spec/Student_management_system.git) |
| **📜 Verified Credentials & Certificates** | **Google Drive** | [**View Credentials Folder**](https://drive.google.com/drive/folders/1J3BKow6KYsk0NaPqeTlZYGeOYF2GJRQg) |

---

## 🎯 Overview & Architecture

This portfolio is not just a personal resume website—it is an **interactive software showcase** designed to represent production engineering capabilities across **React 19**, **Computer Vision / AI**, **Post-Quantum Cryptography**, and **Agentic System Architectures**.

### 🌟 Core Philosophy
> *"The AI generates the content. React turns that content into a reliable, interactive, and resilient human experience."*

### 💡 Architectural Highlights
- **Apple-Inspired Scroll-Driven 3D Canvas (`HomeCanvas.jsx`)**: Seamlessly binds page scroll progress to a sequence of **300 pre-rendered 3D frames** using an unblocking `requestAnimationFrame` loop with memory image preloading and aspect ratio calculation.
- **Micro-Interaction Design System**: Built with modern CSS design tokens, HSL gradients, glassmorphism (`backdrop-filter: blur(16px)`), and spring-damped physics via Framer Motion.
- **Deep Interactive Visualizers (`ProjectVisualizer.jsx`)**: Embedded interactive sandboxes allow visitors to trigger real-time cryptographic handshakes (ML-KEM-768 lattice key exchanges), audit insurance claim cross-verifications, toggle multilingual audio RAG feeds, and inspect live packet flows.
- **Client-Side Routing with React Router 7**: Lightning-fast transitions between `/`, `/project`, `/exprience`, `/edu`, and `/contact` with persistent navigation and active state indicators.

---

## ✨ Key Highlights & Features

### 1. 🎞️ High-Performance 3D Scroll Canvas
- Preloads 300 high-resolution sequential frames into browser memory.
- Uses HTML5 Canvas 2D context with hardware-accelerated draw passes.
- Computes scroll fraction in real time:
  $$\text{frameIndex} = \min(\text{frameCount}, \max(1, \lceil \text{scrollFraction} \times \text{frameCount} \rceil))$$
- Pinned left-side canvas (`40vw`) synchronized with right-side card details (`60vw`) on desktop, gracefully adapting to overlay mode on mobile.

### 2. 🎛️ Interactive Real-Time Visualizers
- **Live Cryptographic Hex Monitor**: Streams simulated lattice-based KEM operations (`0x4F_ML_KEM_768_ENCAP`, `0xA1_AES_256_GCM_OK`, `0x9C_HKDF_SHA384_ROTATION`).
- **Interactive Multi-Modal Claim Simulator**: Live confidence score dial, multilingual language switcher (English, Hindi, Telugu, Kannada), and instant claim verdict triggers.
- **Gamified Quiz Simulator**: Interactive heart/lives mechanics, topic selectors, and score counter.
- **Database Pipeline Simulator**: Live record counters, sub-10ms filter latency tests, and animated Excel workbook exports.

### 3. 🎨 Glassmorphic Dark UI & Fluid Animation
- Deep space palette (`#0a0a0a`, `#030712`, `#040814`) accented with indigo, purple, emerald, and amber ambient glows.
- Smooth spring scroll progress indicator spanning the top viewport edge.
- Floating directional scroll helper with animated SVG indicators.
- One-click copy-to-clipboard interactions with instant visual checkmarks.

---

## 🖥️ Featured Engineering Projects

### 01. 🔐 Quantum-Secure AI-to-AI Communication Protocol
> **Post-Quantum Cryptography • Distributed Multi-Agent Systems • QUIC/UDP**  
> 🔗 **Repository**: [bhuvankk428-spec/PQS-A2A_Encryption_method](https://github.com/bhuvankk428-spec/PQS-A2A_Encryption_method.git)

An enterprise-grade protocol allowing autonomous AI agents to exchange encrypted model outputs, tokens, and telemetry resistant to quantum decryption (Shor's algorithm).
- **Lattice-Based Key Exchange**: Implements NIST-standardized **ML-KEM-768 (CRYSTALS-Kyber)** for bulletproof post-quantum key encapsulation.
- **Symmetric Transport**: Derives keys with **HKDF-SHA384** and secures payloads using **AES-256-GCM**.
- **QUIC / UDP Layer**: Built on `aioquic` over UDP port 4433 for zero-RTT connection resumption and connection migration.
- **Dynamic Forward Secrecy**: Automatic session re-keying every 10 message exchanges.
- **64-Packet Anti-Replay Sliding Window**: Bitmask-based duplicate telemetry suppression.
- **Live Telemetry Server**: Flask-SocketIO event relay broadcasting live cipher metrics and handshake latencies to a React visualizer.

```
AI Agent A ──▶ ML-KEM-768 Encap ──▶ HKDF-SHA384 ──▶ AES-256-GCM ──▶ QUIC/UDP (Port 4433)
                                                                           │
AI Agent B ◀── ML-KEM-768 Decap ◀── Session Keys ◀── Decryption  ◀────────┘
```

---

### 02. 🛡️ Insure.AI — Autonomous Multi-Modal Claim Engine
> **Enterprise AI • Multimodal RAG • FinTech Automation • Edge Deployment**  
> 🌐 **Live Demo**: [qk-my-al-1999-2005.vercel.app](https://qk-my-al-1999-2005.vercel.app/)  
> 🔗 **Repository**: [bhuvankk428-spec/Insurance_claim_agent](https://github.com/bhuvankk428-spec/Insurance_claim_agent.git)

A production-grade AI platform automating insurance claim adjudication and policy consultation:
- **Multimodal Evidence Auditing**: Ingests vehicle damage photos, police First Information Reports (FIR), and policy PDFs to cross-verify claims via GPT-4 Vision reasoning.
- **Multilingual RAG Policy Advisor**: Voice-enabled conversational AI supporting **English, Hindi, Telugu, and Kannada** with Web Speech API audio narration.
- **Underwriter Portal**: Interactive administrative review console with claim filtering, visual discrepancy markers, manual override controls, and **1-click printable PDF claim dossiers**.
- **Security & Auth**: Role-based access control with Firebase Authentication and admin email allowlists.

---

### 03. 👑 Save the Queen (ResQ Queen)
> **AI Product Architecture • Strict JSON Schema • Gamified EdTech**  
> 🌐 **Live Demo**: [resq-queen.vercel.app](https://resq-queen.vercel.app/)  
> 📺 **Video Demonstration**: [YouTube Walkthrough](https://youtu.be/63IO5uWvjC4)  
> 🔗 **Repository**: [bhuvankk428-spec/resq_queen](https://github.com/bhuvankk428-spec/resq_queen)

An AI-driven interactive gamified learning platform that turns LLM completions into structured, bug-free game interfaces:
- **Strict JSON Schema & Auto-Repair Loop**: Guarantees zero hallucinations and prevents malformed UI crashes through rigorous JSON schema validation and retry pipelines before React renders.
- **Survival Quest Game**: 10-question survival quiz where players must score 7/10 to rescue the Queen; includes 3-heart health mechanics, streak bonuses, and dynamic win/loss screens.
- **AI Learn Mode**: Generates topic flashcards, deep summaries, bullet takeaways, and synchronized YouTube tutorials.
- **Cloud State Sync**: Google OAuth integration with cloud synchronization of player scores and live global leaderboards.

---

### 04. 🖥️ Student Management System
> **Desktop Software • Data Automation • Python GUI • SQLite3**  
> 🔗 **Repository**: [bhuvankk428-spec/Student_management_system](https://github.com/bhuvankk428-spec/Student_management_system.git)

A high-efficiency administrative data suite engineered for educational institutions and coaching centers:
- **Dynamic Treeview Rendering**: Instantaneous rendering and column re-sorting across large student datasets with zero lag.
- **Sub-10ms Live Search**: Real-time multi-field query matching across Name, Student ID, Department, and Contact details.
- **Automated Excel Export**: 1-click formatted Excel (`.xlsx`) workbook generation utilizing OpenPyXL with styled headers, auto-adjusted columns, and audit metadata.
- **Acoustic Feedback Engine**: Native OS sound notifications providing auditory feedback for record operations.
- **ACID Reliability**: Full transactional SQLite persistence guaranteeing offline operational safety.

---

## 🛠️ Tech Stack & Tools

### Frontend
- **Core**: React 19 (`react`, `react-dom`)
- **Build Tool**: Vite 8 with `@vitejs/plugin-react`
- **Routing**: React Router DOM 7
- **Motion & Dynamics**: Framer Motion 13
- **Icons**: Lucide React
- **Graphics & Animation**: HTML5 Canvas API (Frame-by-Frame 2D Hardware-Accelerated Context)
- **Typography & Styling**: Google Fonts (`Outfit`, `Space Grotesk`, `IBM Plex Mono`), Modern Vanilla CSS, Glassmorphic Tokens

### Backend & AI Systems
- **Languages**: Python 3.13, JavaScript (ES6+), Node.js
- **Frameworks & Servers**: Express 5, Flask-SocketIO, Mongoose 9
- **AI & Models**: OpenAI GPT-4.1 / GPT-4 Vision, Multimodal RAG, Prompt Engineering
- **Post-Quantum Cryptography**: ML-KEM-768 (CRYSTALS-Kyber), AES-256-GCM, HKDF-SHA384
- **Transport & Protocols**: QUIC/UDP (`aioquic`), WebSockets, REST APIs
- **Database & Storage**: SQLite3, MongoDB, OpenPyXL, LocalStorage

### Deployment & DevOps
- **Hosting**: GitHub Pages, Vercel Edge Network
- **Auth**: Firebase Auth, Google OAuth 2.0
- **Version Control**: Git, GitHub

---

## 📁 Project Structure

```text
3D_portfolio/
├── client/                              # Frontend React application
│   ├── public/                          # Static assets
│   │   ├── favicon.svg                  # Vector favicon
│   │   ├── icons.svg                    # SVG icon sprites
│   │   ├── profile.jpg                  # Developer profile photograph
│   │   └── frames/                      # 300 sequential 3D animation frames
│   │       ├── ezgif-frame-001.jpg
│   │       ├── ezgif-frame-002.jpg
│   │       └── ... (300 frames)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Home.jsx                 # Hero section with sticky frame synchronizer
│   │   │   ├── HomeCanvas.jsx           # 300-frame Canvas 2D scroll engine
│   │   │   ├── HomeScrollIndicator.jsx  # Floating animated scroll helper
│   │   │   ├── Navbar.jsx               # Floating glassmorphic navigation bar
│   │   │   ├── Project.jsx              # Featured projects container & controller
│   │   │   ├── Exprience.jsx            # Experience & internship timeline
│   │   │   ├── Education.jsx            # Degrees, coursework & certifications
│   │   │   ├── Contact.jsx              # Interactive contact hub & form
│   │   │   └── projects/
│   │   │       ├── ProjectCard.jsx      # Individual project card presenter
│   │   │       ├── ProjectIcons.jsx     # Specialized tech stack & social icons
│   │   │       ├── ProjectVisualizer.jsx# Dynamic cryptographic & state sandboxes
│   │   │       ├── ScrollIndicator.jsx  # Project scroll tracker
│   │   │       └── Project.css          # Project visualizer & card stylesheets
│   │   ├── data/
│   │   │   └── projectsData.js          # Project specifications, metrics & flows
│   │   ├── App.jsx                      # Route definitions & layout wrappers
│   │   ├── App.css                      # Global design system & animations
│   │   └── main.jsx                     # Application bootstrap entry point
│   ├── index.html                       # HTML5 root template
│   ├── vite.config.js                   # Vite configuration
│   └── package.json                     # Client scripts & dependencies
├── server/                              # Backend microservice skeleton
│   ├── package.json                     # Express, Mongoose, CORS, Dotenv
│   └── package-lock.json
└── README.md                            # Comprehensive project documentation
```

---

## 🚀 Quick Start & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (version `18.0.0` or higher recommended)
- [npm](https://www.npmjs.com/) (version `9.0.0` or higher)
- [Git](https://git-scm.com/)

### 1. Clone the Repository
```bash
git clone https://github.com/bhuvankk428-spec/3D_portfolio.git
cd 3D_portfolio
```

### 2. Install Client Dependencies
```bash
cd client
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
Open your browser and navigate to **`http://localhost:5173`**.

### 4. Build for Production
To create an optimized production build:
```bash
npm run build
```
To preview the production bundle locally:
```bash
npm run preview
```

---

## 💼 Professional Experience

### 🏢 INERA Software — Frontend Developer Intern
**Duration:** Sep 2025 – Dec 2025 | **Mode:** Remote  
**Credential Verification:** [View Verification Document](https://drive.google.com/drive/folders/1J3BKow6KYsk0NaPqeTlZYGeOYF2GJRQg)

- **20+ Production Pages Built**: Engineered over 20 responsive pages across 5 core modules including authentication, financial forms, interactive management dashboards, and document workflows using React.js, Next.js, and Tailwind CSS.
- **63% Build-Time Optimization**: Streamlined Next.js application performance by removing redundant `'use client'` boundaries, refining Server/Client Component boundaries, and introducing dynamic code splitting—reducing build duration from **27 seconds to 10 seconds**.
- **4 End-to-End PDF Document Pipelines**: Built end-to-end PDF pipelines handling frontend schema validation, payload serialization, server-side PDF response parsing, in-browser viewing, and direct downloads.
- **RESTful API Interceptors**: Integrated asynchronous REST APIs using JavaScript Fetch with strict error fallbacks, token headers, and granular loading states.
- **Figma to Code**: Faithfully transformed high-fidelity Figma design systems into pixel-perfect, accessible web interfaces.

---

## 🏆 Hackathons & Achievements

- 🥇 **Honeywell Hackathon Winner (1st Place 🏆)** — *GSKSJTI College × Honeywell*  
  Won first place tackling complex real-world software automation and latency optimization challenges.
- 🚀 **Top 93 Teams Nationwide (Top 0.12%)** — *NxtWave Buildathon × OpenAI*  
  Ranked among the top 93 teams across India out of **75,000+ competitors**, building cutting-edge generative AI applications.
- 🏅 **Jain University Hackathon Top 100 Finalist** — *Jain University*  
  Selected among the top 100 teams for technical system design and rapid prototyping.
- 🔥 **600+ DSA Problems Solved** with an unbroken **400+ Day Coding Streak** across competitive platforms.
- 👥 **Technical Mentor — Samsung Hackathon**, providing architectural guidance to aspiring developers.
- 💡 **Founder & Lead — Generative AI Club**, mentoring students on prompt engineering, RAG pipelines, and agentic LLMs.

---

## 🎓 Education & Certifications

### Degree
- **Bachelor of Engineering (B.E.) in Computer Science & Engineering**  
  *Visvesvaraya Technological University (VTU), Karnataka, India*  
  - Focus: Distributed Systems, Cryptography & Network Security, Agentic AI, Algorithms, Full-Stack Architecture.

### Verified Certifications
- **Generative AI, Deep Learning & Prompt Engineering** — *Infosys Springboard*
- **Full Stack Development (HTML, CSS, JavaScript, Node.js & SQL)** — *NxtWave (CCBP 4.0)*
- **Python Programming Specialization** — *Infosys Springboard*

*(All credential certificates are accessible in the [Verified Credentials Drive](https://drive.google.com/drive/folders/1J3BKow6KYsk0NaPqeTlZYGeOYF2GJRQg)).*

---

## 📬 Author & Contact Information

**Bhuvan K. K.**  
*Software Engineer — React • JavaScript • Python • Agentic AI*  
📍 Bangalore, Karnataka, India (Available for Global Remote Roles)

- 🌐 **Live Portfolio:** [bhuvankk428-spec.github.io/portfolio](https://bhuvankk428-spec.github.io/portfolio/)
- 💼 **LinkedIn:** [linkedin.com/in/bhuvanlinkdin](https://www.linkedin.com/in/bhuvanlinkdin/)
- 📂 **GitHub:** [github.com/bhuvankk428-spec](https://github.com/bhuvankk428-spec)
- 📧 **Email:** [bhuvankk2005@gmail.com](mailto:bhuvankk2005@gmail.com)
- 📱 **Phone / WhatsApp:** [+91 9036694320](tel:+919036694320)
- 📜 **Credentials & Proof:** [Google Drive Verification Folder](https://drive.google.com/drive/folders/1J3BKow6KYsk0NaPqeTlZYGeOYF2GJRQg)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to explore, learn from, and adapt the concepts with appropriate attribution.

<div align="center">
  <sub>Designed & engineered  by <a href="https://github.com/bhuvankk428-spec">Bhuvan K K</a>. Built with React 19, Framer Motion, and HTML5 Canvas.</sub>
</div>
