import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  Award,
  Trophy,
  CheckCircle2,
  ExternalLink,
  Code2,
  Sparkles,
  ArrowRight,
  Flame,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";
import HomeCanvas from "./HomeCanvas";

export default function Education() {
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

  const degrees = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Science & Engineering",
      institution: "Visvesvaraya Technological University (VTU)",
      location: "Karnataka, India",
      status: "Undergraduate",
      badges: ["CSE Major", "Core Engineering", "AI & Cryptography"],
      overview:
        "Rigorous technical curriculum in computer science theory and engineering practice, focusing on distributed systems, post-quantum protocols, agentic AI architectures, algorithms, and full-stack software development.",
      highlights: [
        "Consistent daily problem solving: 600+ DSA problems solved across platforms with an unbroken 400+ day streak.",
        "Honeywell Hackathon Winner at GSKSJTI College, engineering competitive real-world automation solutions.",
        "Top 93 Teams nationwide out of 75,000+ participants in the NxtWave Buildathon × OpenAI.",
        "Founded and headed the Generative AI Club, mentoring students on LLMs, RAG, and applied agentic workflows.",
      ],
      coursework: [
        "Data Structures & Algorithms",
        "Design & Analysis of Algorithms",
        "Database Management Systems (DBMS)",
        "Operating Systems & Concurrency",
        "Computer Networks & Protocols",
        "Artificial Intelligence & Machine Learning",
        "Cryptography & Network Security",
        "Object-Oriented Programming (OOP)",
      ],
    },
  ];

  const certifications = [
    {
      title: "Generative AI, Deep Learning & Prompt Engineering",
      issuer: "Infosys Springboard",
      date: "Certified",
      skills: ["Generative AI", "Deep Learning", "Prompt Engineering", "Python"],
      badge: "AI Specialization",
      color: "#818cf8",
      glow: "rgba(99, 102, 241, 0.2)",
    },
    {
      title: "Full Stack Development & Data Management",
      issuer: "NxtWave (CCBP 4.0)",
      date: "Certified",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Node.js", "SQL"],
      badge: "Full-Stack Web",
      color: "#38bdf8",
      glow: "rgba(56, 189, 248, 0.2)",
    },
    {
      title: "Algorithmic Mastery (600+ Problems)",
      issuer: "LeetCode / Algorithmic Practice",
      date: "400+ Day Streak",
      skills: ["Data Structures", "Algorithms", "Dynamic Programming", "Graph Theory"],
      badge: "Competitive Coding",
      color: "#ef4444",
      glow: "rgba(239, 68, 68, 0.2)",
    },
  ];

  const academicHonors = [
    {
      title: "Honeywell Hackathon Winner",
      org: "GSKSJTI College × Honeywell",
      rank: "1st Place Trophy",
    },
    {
      title: "OpenAI Buildathon Finalist",
      org: "NxtWave × OpenAI (Top 93 / 75,000+)",
      rank: "Top 0.12% Nationwide",
    },
    {
      title: "Jain University Hackathon",
      org: "Jain University",
      rank: "Top 100 Finalist",
    },
  ];

  return (
    <div
      className="education-page-root"
      style={{
        minHeight: "100vh",
        background: "#030712",
        color: "#ffffff",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Left side: Canvas Animation (40% width, fixed on scroll) */}
      <HomeCanvas frameCount={300} width="40vw" />

      {/* Right side: Education Content (60% width) */}
      <div
        className="education-content-container"
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
        {/* Ambient Glow */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
            filter: "blur(110px)",
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
            <GraduationCap size={15} color="#818cf8" />
            <span>Academic Foundations & Specializations</span>
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
            Education &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #818cf8, #c084fc, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Academic Background
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
            Computer Science Engineering foundations, rigorous algorithmic problem solving,
            and continuous industry certifications in Generative AI and full-stack software.
          </p>
        </motion.div>

        {/* Section 1: Degree Cards */}
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
            <BookOpen size={15} /> DEGREE PROGRAM
          </div>

          {degrees.map((deg, idx) => (
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
              {/* Degree Title & Institution */}
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
                      {deg.degree}
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
                      {deg.status}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#38bdf8",
                      marginTop: "6px",
                    }}
                  >
                    {deg.field}
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
                    <span>{deg.institution}</span>
                    <span>•</span>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <MapPin size={13} /> {deg.location}
                    </span>
                  </div>
                </div>

                {/* Proof Link */}
                <a
                  href="https://drive.google.com/drive/folders/1J3BKow6KYsk0NaPqeTlZYGeOYF2GJRQg"
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
                  <span>Verify Credentials</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* Overview */}
              <p style={{ margin: "0 0 20px 0", fontSize: "0.92rem", color: "#cbd5e1", lineHeight: 1.6 }}>
                {deg.overview}
              </p>

              {/* Key Academic Accomplishments */}
              <div style={{ marginBottom: "22px" }}>
                <div style={{ fontSize: "0.75rem", color: "#818cf8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>
                  KEY HIGHLIGHTS & ACTIVITIES
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {deg.highlights.map((h, hIdx) => (
                    <div
                      key={hIdx}
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
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Relevant Coursework */}
              <div>
                <div style={{ fontSize: "0.75rem", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px" }}>
                  RELEVANT COMPUTER SCIENCE COURSEWORK
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                  {deg.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.09)",
                        padding: "5px 12px",
                        borderRadius: "16px",
                        fontSize: "0.78rem",
                        color: "#e2e8f0",
                        fontWeight: 500,
                      }}
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section 2: Certifications Grid */}
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
              color: "#c084fc",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Award size={15} /> INDUSTRY CERTIFICATIONS & SPECIALIZATIONS
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
            }}
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -3, borderColor: cert.color }}
                style={{
                  background: "rgba(15, 23, 42, 0.65)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "16px",
                  padding: "20px",
                  boxShadow: `0 8px 25px rgba(0, 0, 0, 0.4), 0 0 15px ${cert.glow}`,
                  backdropFilter: "blur(14px)",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      padding: "3px 8px",
                      borderRadius: "6px",
                      background: `rgba(255, 255, 255, 0.06)`,
                      color: cert.color,
                      border: `1px solid ${cert.color}`,
                    }}
                  >
                    {cert.badge}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>{cert.date}</span>
                </div>

                <h3
                  style={{
                    margin: "0 0 6px 0",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.35,
                  }}
                >
                  {cert.title}
                </h3>

                <div style={{ fontSize: "0.8rem", color: "#94a3b8", marginBottom: "14px" }}>
                  Issued by: <strong style={{ color: "#e2e8f0" }}>{cert.issuer}</strong>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {cert.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontSize: "0.72rem",
                        background: "rgba(255, 255, 255, 0.04)",
                        padding: "3px 8px",
                        borderRadius: "10px",
                        color: "#cbd5e1",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section 3: Academic Awards & Proof Vault */}
        <div
          style={{
            background: "linear-gradient(145deg, rgba(15, 23, 42, 0.7), rgba(8, 12, 24, 0.9))",
            border: "1px solid rgba(99, 102, 241, 0.25)",
            borderRadius: "18px",
            padding: "28px",
            marginBottom: "50px",
            backdropFilter: "blur(14px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <Trophy size={18} color="#f59e0b" />
            <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 700, color: "#ffffff" }}>
              Collegiate Competitions & Recognition
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
              marginBottom: "20px",
            }}
          >
            {academicHonors.map((honor, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.07)",
                  borderRadius: "12px",
                  padding: "14px",
                }}
              >
                <div style={{ fontSize: "0.72rem", color: "#f59e0b", fontWeight: 700, textTransform: "uppercase" }}>
                  {honor.rank}
                </div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", marginTop: "4px" }}>
                  {honor.title}
                </div>
                <div style={{ fontSize: "0.78rem", color: "#94a3b8", marginTop: "2px" }}>
                  {honor.org}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
              Verified documentation and credentials are archived in Google Drive.
            </span>
            <a
              href="https://drive.google.com/drive/folders/1J3BKow6KYsk0NaPqeTlZYGeOYF2GJRQg"
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
                color: "#a5b4fc",
                border: "1px solid rgba(99, 102, 241, 0.35)",
              }}
            >
              <span>Open Certificate Folder</span>
              <ExternalLink size={13} />
            </a>
          </div>
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
            Ready to discuss technical opportunities?
          </h3>
          <p style={{ margin: "0 0 18px 0", color: "#94a3b8", fontSize: "0.9rem" }}>
            Review my project architectures or get in touch directly.
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
            .education-content-container {
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