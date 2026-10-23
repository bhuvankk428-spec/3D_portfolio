import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  Lock,
  Terminal,
  Activity,
  Database,
  Volume2,
  Sparkles,
  Zap,
  Crown,
  FileText,
  Play,
  RotateCw,
  Layers,
  ArrowRight
} from "lucide-react";

export default function ProjectVisualizer({ project, activeIndex }) {
  const [interactiveState, setInteractiveState] = useState({
    quantumPackets: 4,
    quantumRekey: 10,
    claimApproved: true,
    claimConfidence: 99.4,
    claimLang: "English",
    queenScore: 7,
    queenHearts: 3,
    studentRecords: 128,
    isExporting: false,
  });

  const [tickerHex, setTickerHex] = useState("0x7F_KEM_KYBER_INIT");

  useEffect(() => {
    const interval = setInterval(() => {
      const hexList = [
        "0x4F_ML_KEM_768_ENCAP",
        "0xA1_AES_256_GCM_OK",
        "0x9C_HKDF_SHA384_ROTATION",
        "0x3B_QUIC_UDP_0RTT_STREAM",
        "0xE4_REPLAY_WIN_64_VERIFIED",
        "0x2D_FORWARD_SECRECY_PASS"
      ];
      setTickerHex(hexList[Math.floor(Math.random() * hexList.length)]);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const theme = project.theme;

  return (
    <div
      className="visualizer-container"
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "36px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Background Dynamic Ambient Glow */}
      <motion.div
        animate={{
          background: `radial-gradient(circle at 40% 45%, ${theme.glowColor} 0%, rgba(5,5,10,0.85) 65%, #050508 100%)`,
        }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.85,
        }}
      />

      {/* Subtle Animated Cyber Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Floating Ambient Theme Particles */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`p-${project.id}-${i}`}
            animate={{
              y: [0, -60, 0],
              x: [0, (i % 2 === 0 ? 30 : -30), 0],
              opacity: [0.15, 0.6, 0.15],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4 + (i % 5) * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
            style={{
              position: "absolute",
              left: `${(i * 19) % 95}%`,
              top: `${(i * 23) % 90}%`,
              width: `${4 + (i % 4) * 3}px`,
              height: `${4 + (i % 4) * 3}px`,
              borderRadius: "50%",
              backgroundColor: theme.primary,
              boxShadow: `0 0 16px ${theme.primary}`,
            }}
          />
        ))}
      </div>

      {/* Top Header Information in Visualizer */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          {/* Giant Masked Number */}
          <motion.div
            key={`num-${project.num}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
              fontWeight: 900,
              lineHeight: 0.9,
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: "-2px",
              background: `linear-gradient(180deg, ${theme.primary} 30%, rgba(255,255,255,0.05) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              userSelect: "none",
            }}
          >
            {project.num}
          </motion.div>

          {/* Project Status & Badge */}
          <motion.div
            key={`badge-${project.id}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "6px",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "30px",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.5px",
                textTransform: "uppercase",
                background: "rgba(10, 15, 25, 0.75)",
                border: `1px solid ${theme.borderColor}`,
                color: theme.primary,
                boxShadow: `0 0 20px ${theme.pillBg}`,
                backdropFilter: "blur(12px)",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: theme.primary,
                  boxShadow: `0 0 10px ${theme.primary}`,
                  display: "inline-block",
                  animation: "pulseDot 1.8s infinite",
                }}
              />
              {project.status}
            </span>

            <span
              style={{
                fontSize: "0.75rem",
                color: "#94a3b8",
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              {project.category.split("•")[0]}
            </span>
          </motion.div>
        </div>

        {/* Project Mini Title & Subtitle */}
        <motion.div
          key={`title-vis-${project.id}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginTop: "12px" }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(1.4rem, 2.2vw, 2rem)",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.5px",
            }}
          >
            {project.shortTitle}
          </h2>
          <p
            style={{
              margin: "6px 0 0 0",
              fontSize: "0.9rem",
              color: "#cbd5e1",
              maxWidth: "460px",
              lineHeight: 1.4,
            }}
          >
            {project.tagline}
          </p>
        </motion.div>
      </div>

      {/* Middle Interactive Holographic Animation Stage */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "20px 0",
          minHeight: "320px",
        }}
      >
        <AnimatePresence mode="wait">
          {project.id === "quantum-protocol" && (
            <motion.div
              key="quantum-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              style={{ width: "100%", maxWidth: "520px" }}
            >
              {/* Post Quantum AI Nodes & Quantum Orbit */}
              <div
                style={{
                  position: "relative",
                  height: "230px",
                  borderRadius: "20px",
                  background: "rgba(3, 7, 18, 0.7)",
                  border: `1px solid ${theme.borderColor}`,
                  boxShadow: `0 10px 40px rgba(0,0,0,0.6), inset 0 0 30px ${theme.pillBg}`,
                  backdropFilter: "blur(16px)",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                {/* Protocol Header Bar */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Cpu size={18} color={theme.primary} />
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#ffffff", letterSpacing: "0.5px" }}>
                      QUIC/UDP MULTI-AGENT LINK
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.75rem",
                      color: theme.primary,
                      background: "rgba(0, 245, 212, 0.1)",
                      padding: "3px 8px",
                      borderRadius: "6px",
                      border: `1px solid ${theme.borderColor}`,
                    }}
                  >
                    PORT 4433
                  </span>
                </div>

                {/* Animated Node Pipeline: Agent A <----> Agent B */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                    padding: "0 10px",
                  }}
                >
                  {/* Agent A */}
                  <div style={{ textAlign: "center", zIndex: 3 }}>
                    <motion.div
                      animate={{ boxShadow: [`0 0 10px ${theme.primary}`, `0 0 25px ${theme.primary}`, `0 0 10px ${theme.primary}`] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "16px",
                        background: "linear-gradient(135deg, #0f172a, #020617)",
                        border: `2px solid ${theme.primary}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 6px",
                      }}
                    >
                      <Lock size={22} color={theme.primary} />
                    </motion.div>
                    <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#ffffff" }}>AI Agent A</div>
                    <div style={{ fontSize: "0.7rem", color: "#94a3b8" }}>Client (OpenAI)</div>
                  </div>

                  {/* Quantum Stream Conduit */}
                  <div style={{ flex: 1, position: "relative", height: "40px", margin: "0 15px", display: "flex", alignItems: "center" }}>
                    {/* Glowing Wire */}
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary}, ${theme.primary})`,
                        borderRadius: "3px",
                        boxShadow: `0 0 12px ${theme.primary}`,
                      }}
                    />

                    {/* Orbiting Quantum Orb in Center */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        border: `2px dashed ${theme.primary}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(5, 10, 20, 0.9)",
                        zIndex: 4,
                      }}
                    >
                      <Zap size={16} color={theme.primary} />
                    </motion.div>

                    {/* Flying UDP Packets */}
                    <motion.div
                      animate={{ x: ["-10%", "110%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      style={{
                        position: "absolute",
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: "#ffffff",
                        boxShadow: `0 0 16px ${theme.primary}`,
                        zIndex: 5,
                      }}
                    />
                    <motion.div
                      animate={{ x: ["110%", "-10%"] }}
                      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                      style={{
                        position: "absolute",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        background: theme.secondary,
                        boxShadow: `0 0 14px ${theme.secondary}`,
                        zIndex: 5,
                      }}
                    />
                  </div>

                  {/* Agent B */}
                  <div style={{ textAlign: "center", zIndex: 3 }}>
                    <motion.div
                      animate={{ boxShadow: [`0 0 10px ${theme.secondary}`, `0 0 25px ${theme.secondary}`, `0 0 10px ${theme.secondary}`] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "16px",
                        background: "linear-gradient(135deg, #0f172a, #020617)",
                        border: `2px solid ${theme.secondary}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 6px",
                      }}
                    >
                      <ShieldCheck size={22} color={theme.secondary} />
                    </motion.div>
                    <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#ffffff" }}>AI Agent B</div>
                    <div style={{ fontSize: "0.7rem", color: "#94a3b8" }}>Server (QUIC)</div>
                  </div>
                </div>

                {/* Live Console Output Bar */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "rgba(0, 0, 0, 0.4)",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    fontFamily: "monospace",
                    fontSize: "0.75rem",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <span style={{ color: "#94a3b8" }}>CIPHER TELEMETRY:</span>
                  <span style={{ color: theme.primary, fontWeight: 700 }}>{tickerHex}</span>
                </div>
              </div>

              {/* Interactive Simulation Controls */}
              <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
                <button
                  onClick={() => {
                    setInteractiveState((prev) => ({
                      ...prev,
                      quantumPackets: prev.quantumPackets + 2,
                    }));
                  }}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "9px 12px",
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    background: "rgba(0, 245, 212, 0.12)",
                    border: `1px solid ${theme.borderColor}`,
                    color: theme.primary,
                    transition: "all 0.2s",
                  }}
                >
                  <Zap size={14} /> Send QUIC Packet (+{interactiveState.quantumPackets})
                </button>
                <button
                  onClick={() => {
                    setInteractiveState((prev) => ({
                      ...prev,
                      quantumRekey: prev.quantumRekey + 10,
                    }));
                  }}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "9px 12px",
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    background: "rgba(121, 40, 202, 0.15)",
                    border: "1px solid rgba(121, 40, 202, 0.35)",
                    color: "#c084fc",
                    transition: "all 0.2s",
                  }}
                >
                  <RotateCw size={14} /> Trigger Rekey ({interactiveState.quantumRekey} msgs)
                </button>
              </div>
            </motion.div>
          )}

          {project.id === "insure-ai" && (
            <motion.div
              key="insure-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              style={{ width: "100%", maxWidth: "520px" }}
            >
              {/* Insure.AI Holographic Verification Scanner */}
              <div
                style={{
                  position: "relative",
                  height: "230px",
                  borderRadius: "20px",
                  background: "rgba(4, 21, 18, 0.75)",
                  border: `1px solid ${theme.borderColor}`,
                  boxShadow: `0 10px 40px rgba(0,0,0,0.6), inset 0 0 30px ${theme.pillBg}`,
                  backdropFilter: "blur(16px)",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                {/* Laser Scanning Beam */}
                <motion.div
                  animate={{ y: [0, 190, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, transparent, ${theme.primary}, transparent)`,
                    boxShadow: `0 0 15px ${theme.primary}, 0 0 30px ${theme.primary}`,
                    zIndex: 6,
                    pointerEvents: "none",
                  }}
                />

                {/* Top Status */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <ShieldCheck size={18} color={theme.primary} />
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#ffffff" }}>
                      MULTIMODAL CLAIM VERIFIER
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#10b981",
                      background: "rgba(16, 185, 129, 0.15)",
                      padding: "3px 10px",
                      borderRadius: "6px",
                      border: "1px solid rgba(16, 185, 129, 0.35)",
                    }}
                  >
                    STATUS: APPROVED ({interactiveState.claimConfidence}%)
                  </span>
                </div>

                {/* Multi-modal Evidence Pipeline */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
                  <div
                    style={{
                      background: "rgba(10, 30, 25, 0.8)",
                      border: "1px solid rgba(16, 185, 129, 0.25)",
                      borderRadius: "10px",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    <FileText size={18} color={theme.primary} style={{ margin: "0 auto 4px" }} />
                    <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#ffffff" }}>Policy PDF</div>
                    <div style={{ fontSize: "0.65rem", color: "#10b981" }}>Clause Verified</div>
                  </div>

                  <div
                    style={{
                      background: "rgba(10, 30, 25, 0.8)",
                      border: "1px solid rgba(16, 185, 129, 0.25)",
                      borderRadius: "10px",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    <Activity size={18} color={theme.secondary} style={{ margin: "0 auto 4px" }} />
                    <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#ffffff" }}>FIR & Photos</div>
                    <div style={{ fontSize: "0.65rem", color: "#06b6d4" }}>Damage Match 98%</div>
                  </div>

                  <div
                    style={{
                      background: "rgba(10, 30, 25, 0.8)",
                      border: "1px solid rgba(16, 185, 129, 0.25)",
                      borderRadius: "10px",
                      padding: "10px",
                      textAlign: "center",
                    }}
                  >
                    <Volume2 size={18} color="#3b82f6" style={{ margin: "0 auto 4px" }} />
                    <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "#ffffff" }}>RAG Audio</div>
                    <div style={{ fontSize: "0.65rem", color: "#60a5fa" }}>{interactiveState.claimLang}</div>
                  </div>
                </div>

                {/* Audio Wave Spectrum Simulator */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "rgba(0, 0, 0, 0.4)",
                    padding: "8px 12px",
                    borderRadius: "8px",
                  }}
                >
                  <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>Voice Synthesis Stream:</span>
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    {[16, 24, 12, 28, 20, 32, 14, 22, 18].map((h, idx) => (
                      <motion.div
                        key={idx}
                        animate={{ height: [8, h, 8] }}
                        transition={{ duration: 0.8 + (idx % 3) * 0.3, repeat: Infinity }}
                        style={{
                          width: "3px",
                          backgroundColor: theme.primary,
                          borderRadius: "2px",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Language & Inspection Controls */}
              <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
                <button
                  onClick={() => {
                    const langs = ["English", "Hindi", "Telugu", "Kannada"];
                    const currentIdx = langs.indexOf(interactiveState.claimLang);
                    setInteractiveState((prev) => ({
                      ...prev,
                      claimLang: langs[(currentIdx + 1) % langs.length],
                    }));
                  }}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "9px 12px",
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    background: "rgba(16, 185, 129, 0.12)",
                    border: `1px solid ${theme.borderColor}`,
                    color: theme.primary,
                    transition: "all 0.2s",
                  }}
                >
                  <Volume2 size={14} /> Voice: {interactiveState.claimLang}
                </button>
                <button
                  onClick={() => {
                    setInteractiveState((prev) => ({
                      ...prev,
                      claimConfidence: (99.1 + Math.random() * 0.8).toFixed(1),
                    }));
                  }}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "9px 12px",
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    background: "rgba(6, 182, 212, 0.15)",
                    border: "1px solid rgba(6, 182, 212, 0.35)",
                    color: "#22d3ee",
                    transition: "all 0.2s",
                  }}
                >
                  <ShieldCheck size={14} /> Re-verify Evidence
                </button>
              </div>
            </motion.div>
          )}

          {project.id === "save-the-queen" && (
            <motion.div
              key="queen-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              style={{ width: "100%", maxWidth: "520px" }}
            >
              {/* Save the Queen Royal Game HUD */}
              <div
                style={{
                  position: "relative",
                  height: "230px",
                  borderRadius: "20px",
                  background: "rgba(24, 16, 4, 0.75)",
                  border: `1px solid ${theme.borderColor}`,
                  boxShadow: `0 10px 40px rgba(0,0,0,0.6), inset 0 0 30px ${theme.pillBg}`,
                  backdropFilter: "blur(16px)",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                {/* Header: Crown & Lives */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Crown size={20} color={theme.primary} />
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#ffffff" }}>
                      ROYAL RESCUE QUEST
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    {[...Array(interactiveState.queenHearts)].map((_, i) => (
                      <motion.span
                        key={i}
                        animate={{ scale: [1, 1.25, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        style={{ color: "#ef4444", fontSize: "1.1rem" }}
                      >
                        ❤️
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Score Goal & Survival Progress */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", marginBottom: "6px" }}>
                    <span style={{ color: "#fcd34d" }}>Objective: Answer 7/10 correctly</span>
                    <span style={{ fontWeight: 700, color: "#ffffff" }}>Score: {interactiveState.queenScore} / 10</span>
                  </div>
                  <div
                    style={{
                      height: "10px",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.1)",
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      animate={{ width: `${(interactiveState.queenScore / 10) * 100}%` }}
                      transition={{ duration: 0.5 }}
                      style={{
                        height: "100%",
                        background: "linear-gradient(90deg, #f59e0b, #ef4444)",
                        borderRadius: "10px",
                        boxShadow: "0 0 12px #f59e0b",
                      }}
                    />
                  </div>
                </div>

                {/* Strict Schema Validation Flow Bar */}
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.45)",
                    border: "1px solid rgba(245, 158, 11, 0.3)",
                    borderRadius: "10px",
                    padding: "8px 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "0.75rem",
                  }}
                >
                  <span style={{ color: "#cbd5e1" }}>AI Structured Output:</span>
                  <span
                    style={{
                      color: "#fbbf24",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <Sparkles size={14} color="#fbbf24" /> Strict JSON Validated (0% Hallucination)
                  </span>
                </div>
              </div>

              {/* Interactive Quest Controls */}
              <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
                <button
                  onClick={() => {
                    setInteractiveState((prev) => ({
                      ...prev,
                      queenScore: Math.min(10, prev.queenScore + 1),
                    }));
                  }}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "9px 12px",
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    background: "rgba(245, 158, 11, 0.15)",
                    border: `1px solid ${theme.borderColor}`,
                    color: theme.primary,
                    transition: "all 0.2s",
                  }}
                >
                  <Sparkles size={14} /> Answer Correctly (+1)
                </button>
                <button
                  onClick={() => {
                    setInteractiveState((prev) => ({
                      ...prev,
                      queenScore: 7,
                      queenHearts: 3,
                    }));
                  }}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "9px 12px",
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    background: "rgba(239, 68, 68, 0.15)",
                    border: "1px solid rgba(239, 68, 68, 0.35)",
                    color: "#f87171",
                    transition: "all 0.2s",
                  }}
                >
                  <RotateCw size={14} /> Reset Quest
                </button>
              </div>
            </motion.div>
          )}

          {project.id === "student-management" && (
            <motion.div
              key="student-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              style={{ width: "100%", maxWidth: "520px" }}
            >
              {/* Student Management System Treeview Terminal */}
              <div
                style={{
                  position: "relative",
                  height: "230px",
                  borderRadius: "20px",
                  background: "rgba(6, 16, 36, 0.75)",
                  border: `1px solid ${theme.borderColor}`,
                  boxShadow: `0 10px 40px rgba(0,0,0,0.6), inset 0 0 30px ${theme.pillBg}`,
                  backdropFilter: "blur(16px)",
                  padding: "18px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Database size={18} color={theme.primary} />
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#ffffff" }}>
                      DYNAMIC TREEVIEW DB
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.75rem",
                      color: "#60a5fa",
                      background: "rgba(59, 130, 246, 0.15)",
                      padding: "3px 8px",
                      borderRadius: "6px",
                      border: "1px solid rgba(59, 130, 246, 0.35)",
                    }}
                  >
                    SQLITE3 ACID
                  </span>
                </div>

                {/* Simulated Table Rows */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {[
                    { id: "STU-1042", name: "Alex Mercer", course: "Computer Science", grade: "A+" },
                    { id: "STU-1043", name: "Bhuvan K. K.", course: "AI & Distributed Systems", grade: "O" },
                    { id: "STU-1044", name: "Sarah Chen", course: "Data Analytics", grade: "A" },
                  ].map((row, idx) => (
                    <motion.div
                      key={row.id}
                      animate={idx === 1 ? { backgroundColor: ["rgba(59, 130, 246, 0.2)", "rgba(59, 130, 246, 0.05)", "rgba(59, 130, 246, 0.2)"] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1.2fr 2fr 2fr 0.8fr",
                        gap: "8px",
                        background: "rgba(255, 255, 255, 0.04)",
                        padding: "6px 10px",
                        borderRadius: "6px",
                        fontFamily: "monospace",
                        fontSize: "0.72rem",
                        color: "#e2e8f0",
                        border: "1px solid rgba(255, 255, 255, 0.06)",
                      }}
                    >
                      <span style={{ color: theme.primary, fontWeight: 700 }}>{row.id}</span>
                      <span>{row.name}</span>
                      <span style={{ color: "#94a3b8" }}>{row.course}</span>
                      <span style={{ color: "#10b981", fontWeight: 700, textAlign: "right" }}>{row.grade}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Excel & Sound Feedback Status */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "rgba(0, 0, 0, 0.4)",
                    padding: "7px 12px",
                    borderRadius: "8px",
                    fontSize: "0.75rem",
                  }}
                >
                  <span style={{ color: "#94a3b8" }}>Acoustic FX Engine:</span>
                  <span style={{ color: "#10b981", fontWeight: 600 }}>Active • 1-Click .xlsx Ready</span>
                </div>
              </div>

              {/* Interactive Record & Export Controls */}
              <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
                <button
                  onClick={() => {
                    setInteractiveState((prev) => ({
                      ...prev,
                      studentRecords: prev.studentRecords + 1,
                    }));
                  }}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "9px 12px",
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    background: "rgba(59, 130, 246, 0.15)",
                    border: `1px solid ${theme.borderColor}`,
                    color: theme.primary,
                    transition: "all 0.2s",
                  }}
                >
                  <Database size={14} /> Add Student Record ({interactiveState.studentRecords})
                </button>
                <button
                  onClick={() => {
                    setInteractiveState((prev) => ({ ...prev, isExporting: true }));
                    setTimeout(() => {
                      setInteractiveState((prev) => ({ ...prev, isExporting: false }));
                    }, 1200);
                  }}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    padding: "9px 12px",
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    background: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.35)",
                    color: "#34d399",
                    transition: "all 0.2s",
                  }}
                >
                  <Layers size={14} /> {interactiveState.isExporting ? "Exporting .xlsx..." : "Export to Excel (.xlsx)"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Technical Packet Flow Breadcrumb */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <div style={{ fontSize: "0.75rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "8px", fontWeight: 700 }}>
          DATA & ARCHITECTURE FLOW
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            alignItems: "center",
          }}
        >
          {project.packetFlow.map((step, idx) => (
            <React.Fragment key={idx}>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontFamily: "monospace",
                  padding: "4px 8px",
                  borderRadius: "6px",
                  background: idx === 0 ? theme.pillBg : "rgba(255, 255, 255, 0.04)",
                  border: `1px solid ${idx === 0 ? theme.borderColor : "rgba(255, 255, 255, 0.07)"}`,
                  color: idx === 0 ? theme.primary : "#94a3b8",
                  fontWeight: idx === 0 ? 700 : 500,
                }}
              >
                {step}
              </span>
              {idx < project.packetFlow.length - 1 && (
                <span style={{ color: "#475569", fontSize: "0.7rem" }}>→</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
