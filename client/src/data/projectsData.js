export const projectsData = [
  {
    id: "quantum-protocol",
    num: "01",
    title: "Quantum-Secure AI-to-AI Protocol",
    shortTitle: "Quantum A2A Protocol",
    tagline: "Post-Quantum Cryptography & Distributed Multi-Agent QUIC Network",
    subtitle: "Autonomous AI-to-AI Communication Engine with ML-KEM-768 & AES-256-GCM",
    category: "Post-Quantum Cryptography • Distributed AI Systems",
    status: "Production Architecture",
    badge: "Post-Quantum Resilient",
    role: "Protocol Architect & Core Engineer",
    githubUrl: "https://github.com/bhuvankk428-spec/PQS-A2A_Encryption_method.git",
    liveUrl: null,
    videoUrl: null,
    theme: {
      name: "quantum",
      primary: "#00f5d4",
      secondary: "#7928ca",
      accent: "#38bdf8",
      bgDark: "#040814",
      bgGradient: "linear-gradient(135deg, rgba(0, 245, 212, 0.12), rgba(121, 40, 202, 0.15))",
      glowColor: "rgba(0, 245, 212, 0.4)",
      borderColor: "rgba(0, 245, 212, 0.35)",
      pillBg: "rgba(0, 245, 212, 0.1)",
      cardGradient: "linear-gradient(145deg, rgba(7, 19, 40, 0.85), rgba(4, 8, 20, 0.95))"
    },
    description:
      "A high-performance quantum-resistant protocol enabling autonomous AI agents (Agent A & Agent B) to exchange encrypted model outputs, tokens, and telemetry over QUIC/UDP. Combines ML-KEM-768 (CRYSTALS-Kyber) post-quantum key encapsulation with HKDF-SHA384 session key derivation and AES-256-GCM symmetric encryption to protect against quantum computing attacks.",
    innovations: [
      {
        title: "ML-KEM-768 Post-Quantum Key Exchange",
        desc: "Immune to Shor's algorithm using lattice-based cryptography for bulletproof key encapsulation."
      },
      {
        title: "Multiplexed QUIC Transport",
        desc: "Built on aioquic over UDP (port 4433) for ultra-low latency, zero-RTT connection resumption and connection migration."
      },
      {
        title: "Dynamic Forward Secrecy & Key Rotation",
        desc: "Automatic session re-keying every 10 message exchanges, guaranteeing past transmissions remain secure."
      },
      {
        title: "64-Packet Anti-Replay Sliding Window",
        desc: "Bitmask-based replay attack mitigation preventing rogue duplicate telemetry packets."
      },
      {
        title: "Real-Time WebSocket Monitor",
        desc: "Flask-SocketIO event relay transmitting live handshake events, cipher metrics, and RTT to a React 19 visualizer."
      }
    ],
    techStack: [
      "Python 3.13",
      "aioquic (QUIC/UDP)",
      "ML-KEM-768 (Kyber)",
      "AES-256-GCM",
      "HKDF-SHA384",
      "OpenAI GPT-4.1",
      "Flask-SocketIO",
      "React 19",
      "Framer Motion",
      "AsyncIO"
    ],
    metrics: [
      { label: "Cryptographic Strength", value: "ML-KEM-768", subtext: "Post-Quantum Standard" },
      { label: "Transport Layer", value: "QUIC / UDP", subtext: "Port 4433 Zero-RTT" },
      { label: "Forward Secrecy", value: "Every 10 Msgs", subtext: "Auto Key Rotation" },
      { label: "Replay Protection", value: "64-Packet Window", subtext: "Sliding Bitmask" }
    ],
    packetFlow: [
      "HELLO",
      "KYBER_PUBLIC_KEY",
      "KYBER_CIPHERTEXT",
      "KEY_CONFIRM",
      "AES-256-GCM DATA",
      "HEARTBEAT PING/PONG"
    ]
  },
  {
    id: "insure-ai",
    num: "02",
    title: "Insure.AI — Autonomous Claim Engine",
    shortTitle: "Insure.AI Platform",
    tagline: "Autonomous Multi-Modal Insurance Claim Verifier & RAG Policy Advisor",
    subtitle: "Enterprise Claim Verification Engine with Document OCR, Fraud Detection & Admin Portal",
    category: "Enterprise AI • Multimodal RAG • FinTech Automation",
    status: "Live Production",
    badge: "Deployed on Vercel",
    role: "Full-Stack AI Engineer",
    githubUrl: "https://github.com/bhuvankk428-spec/Insurance_claim_agent.git",
    liveUrl: "https://qk-my-al-1999-2005.vercel.app/",
    videoUrl: null,
    theme: {
      name: "insure",
      primary: "#10b981",
      secondary: "#06b6d4",
      accent: "#3b82f6",
      bgDark: "#041512",
      bgGradient: "linear-gradient(135deg, rgba(16, 185, 129, 0.12), rgba(6, 182, 212, 0.15))",
      glowColor: "rgba(16, 185, 129, 0.4)",
      borderColor: "rgba(16, 185, 129, 0.35)",
      pillBg: "rgba(16, 185, 129, 0.1)",
      cardGradient: "linear-gradient(145deg, rgba(6, 30, 25, 0.85), rgba(4, 21, 18, 0.95))"
    },
    description:
      "A production-grade enterprise AI platform automating claim adjudication and policy consultation. Users submit insurance policies, police FIR filings, and damaged vehicular photos; the multimodal AI correlates evidence against incident stories to determine liability, calculate payout estimates, and flag anomalies. Features a multilingual RAG advisor chatbot with voice playback across 4 Indian languages and an administrative review portal with one-click printable PDF claim reports.",
    innovations: [
      {
        title: "Multi-Modal Claim Cross-Verification",
        desc: "Ingests policy PDF documents, FIR records, and damage images to cross-validate claims using GPT-4 vision reasoning."
      },
      {
        title: "Multilingual RAG Policy Advisor",
        desc: "Streams natural language guidance across English, Hindi, Telugu, and Kannada with Web Speech API audio narration."
      },
      {
        title: "Admin Review & Audit Workflow",
        desc: "Enables underwriters to filter claims, inspect visual evidence, patch decisions, and generate printable PDF dossiers."
      },
      {
        title: "Enterprise Role-Based Security",
        desc: "Firebase Authentication paired with admin email allowlists and cryptographically guarded administrative tokens."
      },
      {
        title: "Resilient Micro-Service Pipeline",
        desc: "Clean separation between conversational RAG services and claim verification microservices with Vercel edge deployment."
      }
    ],
    techStack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Python / Node.js",
      "OpenAI GPT-4 Vision",
      "Firebase Auth",
      "Multilingual RAG",
      "Web Speech API",
      "REST APIs",
      "Vercel"
    ],
    metrics: [
      { label: "Supported Languages", value: "4 Dialects", subtext: "En, Hi, Te, Kn + Audio" },
      { label: "Evidence Analysis", value: "PDF + FIR + Photo", subtext: "Cross-Modal Auditing" },
      { label: "Admin Capability", value: "PDF Export", subtext: "Instant Printable Dossier" },
      { label: "Deployment", value: "Vercel Edge", subtext: "Global Low-Latency" }
    ],
    packetFlow: [
      "POLICY_UPLOAD",
      "FIR_PHOTO_OCR",
      "STORY_REASONING",
      "FRAUD_CROSS_CHECK",
      "DECISION_CALCULATION",
      "ADMIN_PDF_REPORT"
    ]
  },
  {
    id: "save-the-queen",
    num: "03",
    title: "👑 Save the Queen (ResQ Queen)",
    shortTitle: "Save the Queen",
    tagline: "AI-Powered Interactive Gamified Learning & Survival Quiz Platform",
    subtitle: "Gamified Quiz Experience Turning AI Generation into Structured UI Components",
    category: "AI Product Architecture • Gamification • EdTech",
    status: "Live Demo & Video",
    badge: "Top Assignment Project",
    role: "Frontend Architect & Designer",
    githubUrl: "https://github.com/bhuvankk428-spec/resq_queen",
    liveUrl: "https://resq-queen.vercel.app/",
    videoUrl: "https://youtu.be/63IO5uWvjC4",
    theme: {
      name: "queen",
      primary: "#f59e0b",
      secondary: "#ef4444",
      accent: "#a855f7",
      bgDark: "#181004",
      bgGradient: "linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(239, 68, 68, 0.15))",
      glowColor: "rgba(245, 158, 11, 0.4)",
      borderColor: "rgba(245, 158, 11, 0.35)",
      pillBg: "rgba(245, 158, 11, 0.1)",
      cardGradient: "linear-gradient(145deg, rgba(32, 20, 5, 0.85), rgba(24, 16, 4, 0.95))"
    },
    description:
      "A flagship interactive application built around the principle: 'The AI generates the content; React turns that content into a reliable interactive experience.' Rather than an unstructured chat window, the system commands LLMs to produce strictly validated JSON structures. Features a 10-question survival quest game where answering 7/10 correctly rescues the queen, coupled with an AI Learn Mode generating interactive flashcards, summaries, key takeaways, and curated YouTube video tutorials.",
    innovations: [
      {
        title: "Strict JSON Validation & Auto-Repair",
        desc: "Zero hallucinated formats: responses pass JSON schema validators with automatic retry loops before React renders."
      },
      {
        title: "Story-Driven Survival Quiz Game",
        desc: "10-question dynamic quiz, lives-based mechanics (3 hearts), score counters, win/loss states, and global leaderboard."
      },
      {
        title: "Adaptive AI Learn Mode",
        desc: "Enter any topic to synthesize interactive learning cards, bulleted takeaways, deep summaries, and tutorial videos."
      },
      {
        title: "Dynamic Player Onboarding",
        desc: "Story-driven visual intro for new challengers with intelligent skip detection for returning players."
      },
      {
        title: "Google OAuth & State Synchronization",
        desc: "Cloud sync of player scores, completed topics, and leaderboard standing across sessions."
      }
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "OpenAI API",
      "Structured JSON Schema",
      "Google Auth",
      "Vite",
      "Tailwind CSS",
      "Vercel"
    ],
    metrics: [
      { label: "Survival Target", value: "7 / 10 Score", subtext: "Rescue the Queen" },
      { label: "Game Mechanics", value: "3 Heart Lives", subtext: "Real-time Leaderboard" },
      { label: "Data Quality", value: "Zero Hallucination", subtext: "Strict Schema Validator" },
      { label: "Content Modes", value: "Quiz + Learn", subtext: "Synced YouTube Tutorials" }
    ],
    packetFlow: [
      "TOPIC_SUBMISSION",
      "STRICT_JSON_PROMPT",
      "SCHEMA_VALIDATION",
      "AUTO_REPAIR_LOOP",
      "REACT_COMPONENT_RENDER",
      "LEADERBOARD_UPDATE"
    ]
  },
  {
    id: "student-management",
    num: "04",
    title: "Student Management System",
    shortTitle: "Student Management",
    tagline: "Desktop Operations, Dynamic Treeview & Automated Excel Export Pipeline",
    subtitle: "High-Efficiency Administrative Data Suite with SQLite & Instant Excel Reporting",
    category: "Desktop Software • Data Automation • Python GUI",
    status: "Completed & Proven",
    badge: "Automation Utility",
    role: "Software Developer",
    githubUrl: "https://github.com/bhuvankk428-spec/Student_management_system.git",
    liveUrl: null,
    videoUrl: null,
    theme: {
      name: "student",
      primary: "#3b82f6",
      secondary: "#06b6d4",
      accent: "#10b981",
      bgDark: "#061024",
      bgGradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(6, 182, 212, 0.15))",
      glowColor: "rgba(59, 130, 246, 0.4)",
      borderColor: "rgba(59, 130, 246, 0.35)",
      pillBg: "rgba(59, 130, 246, 0.1)",
      cardGradient: "linear-gradient(145deg, rgba(8, 22, 50, 0.85), rgba(6, 16, 36, 0.95))"
    },
    description:
      "A desktop administrative platform engineered for educational institutions, academies, and coaching centers. Built using Python and Tkinter, it provides a high-efficiency graphical workspace for student record management. Features real-time multi-field search filtering across dynamic Treeview tables, full CRUD validation, instant single-click formatted Excel (.xlsx) data export via OpenPyXL, and acoustic notifications for real-time auditory feedback.",
    innovations: [
      {
        title: "Dynamic Treeview Table Rendering",
        desc: "Instantaneous rendering and fluid column re-sorting across large student datasets with zero lag."
      },
      {
        title: "Multi-Field Live Search Filter",
        desc: "Sub-10ms query matching filtering across Name, Student ID, Department, and Contact credentials."
      },
      {
        title: "1-Click Formatted Excel Export",
        desc: "Automated report generation outputting stylized Excel (.xlsx) workbooks ready for institutional distribution."
      },
      {
        title: "Acoustic Event Feedback Engine",
        desc: "System sound notifications providing affirmative audio feedback on record creation, updates, and removals."
      },
      {
        title: "ACID Relational Persistence",
        desc: "Robust SQLite transactional safety ensuring offline operational reliability without network dependency."
      }
    ],
    techStack: [
      "Python 3",
      "Tkinter GUI",
      "SQLite3",
      "OpenPyXL (Excel Export)",
      "Audio Notification Engine",
      "OS / Desktop Integration"
    ],
    metrics: [
      { label: "Search Latency", value: "< 10ms", subtext: "Real-time Field Filter" },
      { label: "Data Pipeline", value: "1-Click .xlsx", subtext: "Automated Excel Export" },
      { label: "Audio Feedback", value: "Acoustic FX", subtext: "Sound Notification Engine" },
      { label: "Architecture", value: "Offline-First", subtext: "Zero-Latency SQLite" }
    ],
    packetFlow: [
      "INPUT_VALIDATION",
      "SQLITE_TRANSACTION",
      "TREEVIEW_SYNC",
      "SOUND_NOTIFICATION",
      "OPENPYXL_FORMATTING",
      "EXCEL_DISK_EXPORT"
    ]
  }
];
