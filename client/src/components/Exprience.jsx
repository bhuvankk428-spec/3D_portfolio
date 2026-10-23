import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Trophy,
  Award,
  Zap,
  Sparkles,
  ExternalLink,
  Flame,
  Users,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import HomeCanvas from "./HomeCanvas";

export default function Exprience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const workExperience = [
    {
      company: "INERA Software",
      role: "Frontend Developer Intern",
      period: "Sep 2025 – Dec 2025",
      location: "Remote",
      type: "Internship",
      metrics: [
        { label: "Pages Built", value: "20+", subtext: "Across 5 Core Modules" },
        { label: "Build Time Optimized", value: "63% ⚡", subtext: "27s down to 10s" },
        { label: "PDF Pipelines", value: "4 E2E", subtext: "Validation to Download" },
        { label: "Tech Stack", value: "Next.js", subtext: "React + Tailwind" },
      ],
      points: [
        "Developed 20+ responsive frontend pages across 5 core features including authentication, finance forms, interactive dashboards, data submission, and document/PDF workflows using React.js, Next.js, JavaScript, and Tailwind CSS.",
        "Engineered login, registration, protected-route guards, and data-entry workflows, implementing strict state handling, custom validation, and loading/error fallbacks.",
        "Optimized Next.js application performance by removing redundant 'use client' boundaries, refining Server/Client Component splits, and applying dynamic imports—reducing build time from 27 seconds to 10 seconds (63% reduction).",
        "Implemented 4 end-to-end PDF/document pipelines covering frontend schema validation, backend payload submission, generated PDF responses, in-browser viewing, and direct downloads.",
        "Integrated RESTful APIs using JavaScript Fetch, handling asynchronous state machines, JSON/HTTP interceptors, authentication headers, and granular loading states.",
        "Translated high-fidelity Figma design systems into responsive interfaces across dashboards, accessible data tables, navigation, and mobile layouts.",
        "Collaborated with backend engineers in an Agile team, coordinating API requirements, feature testing, debugging, and iterative release cycles through Git/GitHub.",
      ],
      skills: [
        "Next.js",
        "React.js",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "REST APIs",
        "PDF Workflows",
        "Git/GitHub",
        "Agile Methodology",
      ],
      proofUrl: "https://drive.google.com/drive/folders/1J3BKow6KYsk0NaPqeTlZYGeOYF2GJRQg",
    },
  ];

  const hackathonsAndAchievements = [
    {
      title: "Honeywell Hackathon Winner",
      org: "GSKSJTI College × Honeywell",
      rank: "1st Place Winner 🏆",
      desc: "Won first prize in competitive collegiate hackathon solving real-world software automation and performance challenges.",
      icon: Trophy,
      glow: "rgba(245, 158, 11, 0.25)",
      color: "#f59e0b",
    },
    {
      title: "Top 93 Teams (Top 0.12%)",
      org: "NxtWave Buildathon × OpenAI",
      rank: "Top 93 / 75,000+ Participants",
      desc: "Ranked among the premier top 93 teams nationwide out of 75,000+ contestants, designing AI-powered products.",
      icon: Sparkles,
      glow: "rgba(99, 102, 241, 0.25)",
      color: "#818cf8",
    },
    {
      title: "Jain University Hackathon",
      org: "Jain University",
      rank: "Top 100 Finalist",
      desc: "Recognized among top 100 teams for technical architecture, innovative solution design, and rapid prototyping.",
      icon: Award,
      glow: "rgba(16, 185, 129, 0.25)",
      color: "#10b981",
    },
    {
      title: "600+ DSA & 400+ Day Streak",
      org: "Algorithmic Problem Solving",
      rank: "400+ Days Unbroken Streak",
      desc: "Solved 600+ Data Structures & Algorithms problems maintaining an unbroken daily problem-solving discipline.",
      icon: Flame,
      glow: "rgba(239, 68, 68, 0.25)",
      color: "#ef4444",
    },
  ];

  const leadershipRoles = [
    {
      role: "Mentor — Samsung Hackathon",
      context: "Technical Guidance & Support",
      desc: "Mentored participating engineering teams, advising on system architecture, API integrations, and product pitch strategy.",
    },
    {
      role: "Head — Generative AI Club",
      context: "Student Community Leadership",
      desc: "Led a university technical community focused on LLM pipelines, RAG architectures, prompt engineering, and hands-on AI projects.",
    },
    {
      role: "Member — British English Club",
      context: "Communication & Collaboration",
      desc: "Active participant in professional English communication, debates, collaborative discussions, and public speaking forums.",
    },
  ];

  const certifications = [
    {
      name: "Python Programming, Generative AI, Deep Learning & Prompt Engineering",
      issuer: "Infosys Springboard",
      badge: "AI & Deep Learning",
    },
    {
      name: "Full Stack Development (HTML, CSS, JavaScript, Node.js & SQL)",
      issuer: "NxtWave (CCBP 4.0)",
      badge: "Full-Stack Certified",
    },
  ];

  return (
    <div
      className="experience-page-root"
      style={{
        minHeight: "100vh",
        background: "#030712",
        color: "#ffffff",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Left side: Canvas Animation from HomeCanvas (40% width, fixed on scroll) */}
      <HomeCanvas frameCount={300} width="40vw" />

      {/* Right side: Scrollable Experience Content (60% width) */}
      <div
        className="experience-content-container"
        style={{
          width: "60vw",
          marginLeft: "40vw",
          minHeight: "100vh",
          padding: "100px 48px 80px 32px",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Background Ambient Glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
            filter: "blur(100px)",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "40px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "30px",
              background: "rgba(99, 102, 241, 0.12)",
              border: "1px solid rgba(99, 102, 241, 0.35)",
              color: "#a5b4fc",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            <Briefcase size={14} color="#818cf8" />
            <span>Career Milestones & Leadership</span>
          </div>

          <h1
            style={{
              margin: "0 0 12px 0",
              fontSize: "clamp(2rem, 3.2vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.5px",
              lineHeight: 1.15,
            }}
          >
            Work Experience &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #818cf8, #c084fc, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Achievements
            </span>
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "0.98rem",
              color: "#94a3b8",
              lineHeight: 1.6,
              maxWidth: "700px",
            }}
          >
            Production frontend engineering, build time optimizations, hackathon victories,
            and leadership impact across student and developer communities.
          </p>
        </motion.div>

        {/* Section 1: Professional Work Experience */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: "50px" }}
        >
          <div
            style={{
              fontSize: "0.8rem",
              fontWeight: 800,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "#818cf8",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Zap size={15} /> PROFESSIONAL WORK EXPERIENCE
          </div>

          {workExperience.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              style={{
                background: "linear-gradient(145deg, rgba(15, 23, 42, 0.75), rgba(8, 12, 24, 0.9))",
                border: "1px solid rgba(99, 102, 241, 0.28)",
                borderRadius: "20px",
                padding: "32px",
                boxShadow: "0 20px 45px rgba(0, 0, 0, 0.5), 0 0 30px rgba(99, 102, 241, 0.08)",
                backdropFilter: "blur(18px)",
                boxSizing: "border-box",
              }}
            >
              {/* Header Bar */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <h2
                      style={{
                        margin: 0,
                        fontSize: "clamp(1.4rem, 2vw, 1.8rem)",
                        fontWeight: 800,
                        color: "#ffffff",
                      }}
                    >
                      {exp.role}
                    </h2>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        padding: "3px 10px",
                        borderRadius: "20px",
                        background: "rgba(99, 102, 241, 0.15)",
                        border: "1px solid rgba(99, 102, 241, 0.35)",
                        color: "#a5b4fc",
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      marginTop: "6px",
                      color: "#94a3b8",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                      flexWrap: "wrap",
                    }}
                  >
                    <span style={{ color: "#38bdf8", fontWeight: 700, fontSize: "1rem" }}>
                      {exp.company}
                    </span>
                    <span>•</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <Calendar size={13} /> {exp.period}
                    </span>
                    <span>•</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <MapPin size={13} /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Proof Link Button */}
                <a
                  href={exp.proofUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    borderRadius: "10px",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    background: "rgba(99, 102, 241, 0.15)",
                    color: "#ffffff",
                    border: "1px solid rgba(99, 102, 241, 0.4)",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(99, 102, 241, 0.3)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(99, 102, 241, 0.15)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span>Internship Proof & Vault</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* Key Metrics Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                  gap: "10px",
                  marginBottom: "24px",
                }}
              >
                {exp.metrics.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.07)",
                      borderRadius: "12px",
                      padding: "10px 12px",
                    }}
                  >
                    <div style={{ fontSize: "0.68rem", color: "#94a3b8", textTransform: "uppercase", fontWeight: 600 }}>
                      {m.label}
                    </div>
                    <div style={{ fontSize: "1.2rem", fontWeight: 800, color: "#818cf8", margin: "3px 0" }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: "0.68rem", color: "#cbd5e1" }}>
                      {m.subtext}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bulleted Accomplishments */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "22px" }}>
                {exp.points.map((pt, pIdx) => (
                  <div
                    key={pIdx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "0.88rem",
                      color: "#cbd5e1",
                      lineHeight: 1.5,
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      color="#818cf8"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div>
                <div style={{ fontSize: "0.72rem", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px" }}>
                  TECHNOLOGIES APPLIED
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {exp.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.09)",
                        padding: "4px 10px",
                        borderRadius: "16px",
                        fontSize: "0.75rem",
                        color: "#e2e8f0",
                        fontWeight: 500,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section 2: Hackathon Victories & Problem Solving */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ marginBottom: "50px" }}
        >
          <div
            style={{
              fontSize: "0.8rem",
              fontWeight: 800,
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "#f59e0b",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Trophy size={15} /> COMPETITIVE VICTORIES & HACKATHONS
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {hackathonsAndAchievements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -3, borderColor: item.color }}
                  style={{
                    background: "rgba(15, 23, 42, 0.65)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "16px",
                    padding: "20px",
                    boxShadow: `0 8px 25px rgba(0, 0, 0, 0.4), 0 0 15px ${item.glow}`,
                    backdropFilter: "blur(14px)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: `1px solid ${item.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "14px",
                    }}
                  >
                    <Icon size={20} color={item.color} />
                  </div>

                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: item.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {item.rank}
                  </span>

                  <h3
                    style={{
                      margin: "6px 0 2px",
                      fontSize: "1.08rem",
                      fontWeight: 700,
                      color: "#ffffff",
                    }}
                  >
                    {item.title}
                  </h3>

                  <div style={{ fontSize: "0.75rem", color: "#94a3b8", marginBottom: "10px" }}>
                    {item.org}
                  </div>

                  <p style={{ margin: 0, fontSize: "0.82rem", color: "#cbd5e1", lineHeight: 1.45 }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Section 3: Technical Leadership & Certifications */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "50px",
          }}
        >
          {/* Leadership Roles */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{
              background: "rgba(15, 23, 42, 0.65)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "18px",
              padding: "24px",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 800,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#38bdf8",
                marginBottom: "18px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Users size={15} /> LEADERSHIP & COMMUNITY HEAD
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {leadershipRoles.map((lead, idx) => (
                <div
                  key={idx}
                  style={{
                    paddingBottom: idx < leadershipRoles.length - 1 ? "14px" : "0",
                    borderBottom: idx < leadershipRoles.length - 1 ? "1px solid rgba(255, 255, 255, 0.06)" : "none",
                  }}
                >
                  <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#ffffff" }}>
                    {lead.role}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#38bdf8", margin: "2px 0 5px", fontWeight: 600 }}>
                    {lead.context}
                  </div>
                  <p style={{ margin: 0, fontSize: "0.82rem", color: "#94a3b8", lineHeight: 1.45 }}>
                    {lead.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            style={{
              background: "rgba(15, 23, 42, 0.65)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "18px",
              padding: "24px",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(14px)",
            }}
          >
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 800,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#c084fc",
                marginBottom: "18px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Award size={15} /> CERTIFIED SPECIALIZATIONS
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(192, 132, 252, 0.2)",
                    borderRadius: "12px",
                    padding: "12px 14px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      padding: "2px 6px",
                      borderRadius: "5px",
                      background: "rgba(192, 132, 252, 0.15)",
                      color: "#c084fc",
                    }}
                  >
                    {cert.badge}
                  </span>
                  <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#ffffff", marginTop: "6px" }}>
                    {cert.name}
                  </div>
                  <div style={{ fontSize: "0.76rem", color: "#94a3b8", marginTop: "3px" }}>
                    Issued by: {cert.issuer}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "18px" }}>
              <a
                href="https://drive.google.com/drive/folders/1J3BKow6KYsk0NaPqeTlZYGeOYF2GJRQg"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "10px",
                  borderRadius: "10px",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  background: "rgba(192, 132, 252, 0.12)",
                  color: "#c084fc",
                  border: "1px solid rgba(192, 132, 252, 0.35)",
                  transition: "all 0.2s",
                }}
              >
                <span>View Google Drive Certificate Vault</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA to Projects or Contact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            textAlign: "center",
            padding: "36px 20px",
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(6, 182, 212, 0.08))",
            borderRadius: "18px",
            border: "1px solid rgba(99, 102, 241, 0.25)",
          }}
        >
          <h3 style={{ margin: "0 0 8px 0", fontSize: "1.3rem", fontWeight: 800 }}>
            Want to see these skills in action?
          </h3>
          <p style={{ margin: "0 0 18px 0", color: "#94a3b8", fontSize: "0.9rem" }}>
            Explore full interactive demos of quantum protocols, multimodal AI claim analyzers, and gamified platforms.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link
              to="/project"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 22px",
                borderRadius: "30px",
                background: "linear-gradient(135deg, #6366f1, #a855f7)",
                color: "#ffffff",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 18px rgba(99, 102, 241, 0.4)",
              }}
            >
              <span>Explore My Projects</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 22px",
                borderRadius: "30px",
                background: "transparent",
                color: "#ffffff",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <span>Get In Touch</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Responsive adjustments */}
      <style>
        {`
          @media (max-width: 900px) {
            .experience-content-container {
              width: 100vw !important;
              margin-left: 0 !important;
              padding: 90px 20px 60px !important;
            }
          }
        `}
      </style>
    </div>
  );
}