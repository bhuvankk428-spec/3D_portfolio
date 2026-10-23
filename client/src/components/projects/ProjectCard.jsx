import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Layers,
  Shield,
  Zap,
} from "lucide-react";
import { GithubIcon, YoutubeIcon } from "./ProjectIcons";

export default function ProjectCard({ project, index, isActive }) {
  const theme = project.theme;

  return (
    <div
      id={`project-card-${index}`}
      className="project-card-wrapper"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 32px 60px 24px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Background Radial Glow tailored to project */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "-10%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: theme.glowColor,
          filter: "blur(130px)",
          opacity: isActive ? 0.35 : 0.1,
          transition: "opacity 0.6s ease",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Main Glassmorphic Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "680px",
          background: theme.cardGradient,
          border: `1px solid ${isActive ? theme.borderColor : "rgba(255, 255, 255, 0.08)"}`,
          borderRadius: "24px",
          padding: "36px",
          boxShadow: isActive
            ? `0 24px 60px rgba(0, 0, 0, 0.75), 0 0 40px ${theme.pillBg}`
            : "0 12px 40px rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          transition: "border 0.5s ease, box-shadow 0.5s ease",
          boxSizing: "border-box",
        }}
      >
        {/* Top Card Bar: Counter, Role & Badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "18px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "0.85rem",
                fontWeight: 800,
                color: theme.primary,
                background: theme.pillBg,
                border: `1px solid ${theme.borderColor}`,
                padding: "4px 10px",
                borderRadius: "8px",
              }}
            >
              PROJECT {project.num}
            </span>

            <span
              style={{
                fontSize: "0.8rem",
                color: "#94a3b8",
                fontWeight: 600,
                letterSpacing: "0.3px",
              }}
            >
              {project.role}
            </span>
          </div>

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.78rem",
              fontWeight: 700,
              padding: "4px 12px",
              borderRadius: "20px",
              background: theme.pillBg,
              border: `1px solid ${theme.borderColor}`,
              color: theme.primary,
            }}
          >
            <Sparkles size={13} />
            {project.badge}
          </span>
        </div>

        {/* Project Title */}
        <h2
          style={{
            margin: "0 0 10px 0",
            fontSize: "clamp(1.7rem, 2.3vw, 2.2rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#ffffff",
            letterSpacing: "-0.5px",
          }}
        >
          {project.title}
        </h2>

        {/* Subtitle / Innovation Tagline */}
        <h4
          style={{
            margin: "0 0 18px 0",
            fontSize: "0.95rem",
            fontWeight: 500,
            color: theme.primary,
            lineHeight: 1.4,
          }}
        >
          {project.subtitle}
        </h4>

        {/* Detailed Description */}
        <p
          style={{
            margin: "0 0 22px 0",
            fontSize: "0.95rem",
            lineHeight: 1.65,
            color: "#cbd5e1",
          }}
        >
          {project.description}
        </p>

        {/* Key Architectural Innovations */}
        <div style={{ marginBottom: "22px" }}>
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "#94a3b8",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Zap size={14} color={theme.primary} /> CORE ARCHITECTURE & INNOVATIONS
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {project.innovations.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  fontSize: "0.85rem",
                  color: "#e2e8f0",
                  lineHeight: 1.45,
                }}
              >
                <CheckCircle2
                  size={16}
                  color={theme.primary}
                  style={{ flexShrink: 0, marginTop: "2px" }}
                />
                <div>
                  <strong style={{ color: "#ffffff", fontWeight: 600 }}>
                    {item.title}:{" "}
                  </strong>
                  <span style={{ color: "#94a3b8" }}>{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Metrics Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "10px",
            marginBottom: "24px",
          }}
        >
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.07)",
                borderRadius: "12px",
                padding: "10px 12px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "#94a3b8",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: "4px",
                }}
              >
                {m.label}
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  fontFamily: "monospace",
                }}
              >
                {m.value}
              </div>
              <div
                style={{
                  fontSize: "0.68rem",
                  color: theme.primary,
                  marginTop: "2px",
                }}
              >
                {m.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div style={{ marginBottom: "26px" }}>
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "#94a3b8",
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Layers size={14} color={theme.primary} /> TECHNOLOGIES USED
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: `1px solid ${idx % 2 === 0 ? theme.borderColor : "rgba(255, 255, 255, 0.09)"}`,
                  color: idx % 2 === 0 ? "#f8fafc" : "#cbd5e1",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  transition: "all 0.2s",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons & Links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            alignItems: "center",
          }}
        >
          {/* Live Demo Link (If available) */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 22px",
                borderRadius: "12px",
                fontSize: "0.9rem",
                fontWeight: 700,
                textDecoration: "none",
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                color: "#ffffff",
                boxShadow: `0 0 25px ${theme.pillBg}`,
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 0 35px ${theme.glowColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 0 25px ${theme.pillBg}`;
              }}
            >
              <span>Live Demonstration</span>
              <ExternalLink size={16} />
            </a>
          )}

          {/* GitHub Link */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 20px",
                borderRadius: "12px",
                fontSize: "0.9rem",
                fontWeight: 600,
                textDecoration: "none",
                background: "rgba(255, 255, 255, 0.05)",
                color: "#ffffff",
                border: `1px solid ${theme.borderColor}`,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = theme.pillBg;
                e.currentTarget.style.borderColor = theme.primary;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.borderColor = theme.borderColor;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <GithubIcon size={16} color="#ffffff" />
              <span>Source Repository</span>
            </a>
          )}

          {/* Video Walkthrough (If available) */}
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 18px",
                borderRadius: "12px",
                fontSize: "0.9rem",
                fontWeight: 600,
                textDecoration: "none",
                background: "rgba(239, 68, 68, 0.12)",
                color: "#f87171",
                border: "1px solid rgba(239, 68, 68, 0.35)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(239, 68, 68, 0.25)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(239, 68, 68, 0.12)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <YoutubeIcon size={16} color="#f87171" />
              <span>Video Walkthrough</span>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
