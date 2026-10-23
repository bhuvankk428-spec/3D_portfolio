import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import HomeCanvas from "./HomeCanvas";
import HomeScrollIndicator from "./HomeScrollIndicator";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const skills = [
        "React.js", "JavaScript (ES6+)", "Python", "Agentic AI",
        "Next.js", "Node.js", "REST APIs", "RAG Workflows"
    ];

    return (
        <div className="home-page-root" style={{ height: "400vh", position: "relative" }}>
            {/* Top Interactive Scroll Progress Line */}
            <motion.div
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, #6366f1, #a855f7, #ec4899)",
                    transformOrigin: "0%",
                    zIndex: 101,
                    boxShadow: "0 0 10px rgba(99, 102, 241, 0.7)"
                }}
            />

            {/* Left side: Canvas Animation (Modular Component) */}
            <HomeCanvas frameCount={300} width="40vw" />

            {/* Right side: Sticky Content (Adjusted down below navbar, stays pinned on scroll) */}
            <div
                className="home-container"
                style={{
                    height: "calc(100vh - 90px)",
                    position: "sticky",
                    top: "90px", // Adjusted down so navbar never overlaps the card
                    zIndex: 2,
                    background: "transparent",
                    display: "flex",
                    width: "60vw",
                    marginLeft: "40vw",
                    justifyContent: "center",
                    alignItems: "center",
                    pointerEvents: "none",
                    padding: "20px 40px",
                    boxSizing: "border-box"
                }}
            >
                <div style={{ width: "100%", padding: "0 4vw", pointerEvents: "auto", boxSizing: "border-box" }}>
                    <div className="background-glow" style={{ opacity: 0.3, left: "50%" }}></div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="content-wrapper"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            background: "rgba(10, 10, 10, 0.65)",
                            padding: "45px 50px",
                            borderRadius: "24px",
                            backdropFilter: "blur(16px)",
                            WebkitBackdropFilter: "blur(16px)",
                            border: "1px solid rgba(255, 255, 255, 0.08)",
                            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(99, 102, 241, 0.12)",
                            width: "100%",
                            maxWidth: "800px",
                            boxSizing: "border-box"
                        }}
                    >
                        <motion.h1 variants={itemVariants} className="hero-title" style={{ textAlign: "left", marginBottom: "12px" }}>
                            Hi, I'm <span>Bhuvan K K</span>
                        </motion.h1>

                        <motion.h2 variants={itemVariants} className="hero-subtitle" style={{ textAlign: "left", marginBottom: "18px" }}>
                            Software Engineer — React — JavaScript — Python — Agentic AI
                        </motion.h2>

                        <motion.p variants={itemVariants} className="hero-description" style={{ textAlign: "left", maxWidth: "100%", marginBottom: "28px" }}>
                            Computer Science engineering student with hands-on experience building AI-powered full-stack applications using Python, JavaScript, React.js, SQL, Node.js, and Agentic AI workflows.
                        </motion.p>

                        <motion.div variants={itemVariants} className="skills-container" style={{ justifyContent: "flex-start", marginBottom: "28px" }}>
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    className="skill-tag"
                                    whileHover={{ y: -3, scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.3)" }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants} className="cta-buttons">
                            <Link to="/project" className="btn btn-primary">
                                View My Projects
                            </Link>
                            <Link to="/contact" className="btn btn-secondary">
                                Get In Touch
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Animated Scroll Helper */}
            <HomeScrollIndicator />

            {/* Responsive Styles */}
            <style>
                {`
                    @media (max-width: 900px) {
                        .home-canvas-animation {
                            width: 100vw !important;
                            opacity: 0.25 !important;
                        }
                        .home-container {
                            width: 100vw !important;
                            margin-left: 0 !important;
                            top: 80px !important;
                            height: calc(100vh - 80px) !important;
                            padding: 15px !important;
                        }
                        .content-wrapper {
                            padding: 30px 24px !important;
                        }
                        .home-scroll-indicator {
                            right: 16px !important;
                            bottom: 16px !important;
                        }
                    }
                `}
            </style>
        </div>
    );
}