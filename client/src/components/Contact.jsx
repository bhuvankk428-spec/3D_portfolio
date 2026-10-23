import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  MessageSquare,
  Clock,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./projects/ProjectIcons";
import HomeCanvas from "./HomeCanvas";

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const contactInfo = {
    name: "Bhuvan K. K.",
    email: "bhuvankk2005@gmail.com",
    phone: "+91 9036694320",
    education: "BE — Computer Science Engineering, VTU",
    location: "Bangalore, India (Open to Remote Worldwide)",
    github: "https://github.com/bhuvankk428-spec",
    linkedin: "https://www.linkedin.com/in/bhuvanlinkdin/",
    certificates: "https://drive.google.com/drive/folders/1J3BKow6KYsk0NaPqeTlZYGeOYF2GJRQg",
  };

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div
      className="contact-page-root"
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

      {/* Right side: Contact Content & Interactive Form (60% width) */}
      <div
        className="contact-content-container"
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
          style={{ marginBottom: "36px" }}
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
            <Sparkles size={14} color="#818cf8" />
            <span>Open for Collaboration & Roles</span>
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
            Let's Build Something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #818cf8, #c084fc, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Exceptional
            </span>
          </h1>

          <p
            style={{
              margin: 0,
              fontSize: "0.98rem",
              color: "#94a3b8",
              lineHeight: 1.6,
              maxWidth: "680px",
            }}
          >
            Have a project in mind, interested in hiring, or want to discuss agentic AI,
            cryptography protocols, or web engineering? Get in touch directly.
          </p>
        </motion.div>

        {/* Availability Status Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 18px",
            borderRadius: "30px",
            background: "rgba(16, 185, 129, 0.1)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            marginBottom: "32px",
          }}
        >
          <span
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#10b981",
              boxShadow: "0 0 10px #10b981",
              display: "inline-block",
            }}
          />
          <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#34d399" }}>
            Available for Full-time Roles & Internships
          </span>
        </div>

        {/* Contact Info Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
            marginBottom: "36px",
          }}
        >
          {/* Email Card */}
          <div
            style={{
              background: "linear-gradient(145deg, rgba(15, 23, 42, 0.75), rgba(8, 12, 24, 0.9))",
              border: "1px solid rgba(99, 102, 241, 0.25)",
              borderRadius: "18px",
              padding: "20px",
              backdropFilter: "blur(16px)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "rgba(99, 102, 241, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#818cf8",
                }}
              >
                <Mail size={18} />
              </div>
              <button
                onClick={() => handleCopy(contactInfo.email, "email")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  padding: "5px 10px",
                  color: copiedField === "email" ? "#34d399" : "#cbd5e1",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                }}
              >
                {copiedField === "email" ? <Check size={13} /> : <Copy size={13} />}
                <span>{copiedField === "email" ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <div style={{ fontSize: "0.72rem", color: "#94a3b8", textTransform: "uppercase", fontWeight: 700 }}>
              DIRECT EMAIL
            </div>
            <a
              href={`mailto:${contactInfo.email}`}
              style={{
                display: "block",
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#ffffff",
                marginTop: "4px",
                textDecoration: "none",
                wordBreak: "break-all",
              }}
            >
              {contactInfo.email}
            </a>
          </div>

          {/* Phone Card */}
          <div
            style={{
              background: "linear-gradient(145deg, rgba(15, 23, 42, 0.75), rgba(8, 12, 24, 0.9))",
              border: "1px solid rgba(99, 102, 241, 0.25)",
              borderRadius: "18px",
              padding: "20px",
              backdropFilter: "blur(16px)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "rgba(16, 185, 129, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#10b981",
                }}
              >
                <Phone size={18} />
              </div>
              <button
                onClick={() => handleCopy(contactInfo.phone, "phone")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "8px",
                  padding: "5px 10px",
                  color: copiedField === "phone" ? "#34d399" : "#cbd5e1",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                }}
              >
                {copiedField === "phone" ? <Check size={13} /> : <Copy size={13} />}
                <span>{copiedField === "phone" ? "Copied" : "Copy"}</span>
              </button>
            </div>
            <div style={{ fontSize: "0.72rem", color: "#94a3b8", textTransform: "uppercase", fontWeight: 700 }}>
              PHONE NUMBER
            </div>
            <a
              href={`tel:${contactInfo.phone}`}
              style={{
                display: "block",
                fontSize: "0.95rem",
                fontWeight: 700,
                color: "#ffffff",
                marginTop: "4px",
                textDecoration: "none",
              }}
            >
              {contactInfo.phone}
            </a>
          </div>
        </div>

        {/* Social Profiles & Proof Vault Links */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "36px" }}>
          {/* GitHub */}
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "12px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#ffffff",
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <GithubIcon size={16} color="#ffffff" />
            <span>GitHub Profile</span>
            <ExternalLink size={13} color="#94a3b8" />
          </a>

          {/* LinkedIn */}
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "12px",
              background: "rgba(10, 102, 194, 0.15)",
              border: "1px solid rgba(10, 102, 194, 0.35)",
              color: "#60a5fa",
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(10, 102, 194, 0.25)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(10, 102, 194, 0.15)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <LinkedinIcon size={16} color="#60a5fa" />
            <span>LinkedIn Profile</span>
            <ExternalLink size={13} color="#94a3b8" />
          </a>

          {/* Certificates Vault */}
          <a
            href={contactInfo.certificates}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "12px",
              background: "rgba(192, 132, 252, 0.12)",
              border: "1px solid rgba(192, 132, 252, 0.35)",
              color: "#c084fc",
              fontSize: "0.85rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(192, 132, 252, 0.22)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(192, 132, 252, 0.12)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <ShieldCheck size={16} color="#c084fc" />
            <span>Certificates & Proofs Vault</span>
            <ExternalLink size={13} color="#94a3b8" />
          </a>
        </div>

        {/* Message Contact Form Card */}
        <div
          style={{
            background: "linear-gradient(145deg, rgba(15, 23, 42, 0.8), rgba(8, 12, 24, 0.95))",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            borderRadius: "20px",
            padding: "32px",
            boxShadow: "0 20px 45px rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <MessageSquare size={18} color="#818cf8" />
            <h3 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 700, color: "#ffffff" }}>
              Send a Direct Message
            </h3>
          </div>
          <p style={{ margin: "0 0 24px 0", fontSize: "0.88rem", color: "#94a3b8" }}>
            Leave your details and note below—I typically reply within 24 hours.
          </p>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  padding: "32px",
                  borderRadius: "14px",
                  background: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.35)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "rgba(16, 185, 129, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 14px",
                    color: "#34d399",
                  }}
                >
                  <CheckCircle2 size={28} />
                </div>
                <h4 style={{ margin: "0 0 6px 0", fontSize: "1.2rem", fontWeight: 700, color: "#ffffff" }}>
                  Message Sent Successfully!
                </h4>
                <p style={{ margin: "0 0 18px 0", fontSize: "0.88rem", color: "#94a3b8" }}>
                  Thank you for reaching out, {formData.name}. I'll get back to you at {formData.email} promptly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  style={{
                    padding: "9px 20px",
                    borderRadius: "20px",
                    background: "rgba(255, 255, 255, 0.08)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#ffffff",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "16px",
                    marginBottom: "16px",
                  }}
                >
                  {/* Name */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "6px" }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "10px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        color: "#ffffff",
                        fontSize: "0.88rem",
                        outline: "none",
                        boxSizing: "border-box",
                        transition: "border 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#818cf8")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.12)")}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "6px" }}>
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        borderRadius: "10px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        color: "#ffffff",
                        fontSize: "0.88rem",
                        outline: "none",
                        boxSizing: "border-box",
                        transition: "border 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#818cf8")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.12)")}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "6px" }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Engineering Role / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#ffffff",
                      fontSize: "0.88rem",
                      outline: "none",
                      boxSizing: "border-box",
                      transition: "border 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#818cf8")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.12)")}
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: "22px" }}>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "#cbd5e1", marginBottom: "6px" }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Write your note, project details, or interview proposal..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#ffffff",
                      fontSize: "0.88rem",
                      outline: "none",
                      resize: "vertical",
                      boxSizing: "border-box",
                      fontFamily: "inherit",
                      lineHeight: 1.5,
                      transition: "border 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#818cf8")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.12)")}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 28px",
                    borderRadius: "30px",
                    background: "linear-gradient(135deg, #6366f1, #a855f7)",
                    color: "#ffffff",
                    fontSize: "0.92rem",
                    fontWeight: 700,
                    border: "none",
                    cursor: isSending ? "not-allowed" : "pointer",
                    boxShadow: "0 4px 20px rgba(99, 102, 241, 0.4)",
                    opacity: isSending ? 0.7 : 1,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSending) e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isSending) e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Send size={15} />
                  <span>{isSending ? "Sending Message..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Responsive adjustments */}
      <style>
        {`
          @media (max-width: 900px) {
            .contact-content-container {
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