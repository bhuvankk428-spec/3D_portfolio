import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";
import ProjectVisualizer from "./projects/ProjectVisualizer";
import ProjectCard from "./projects/ProjectCard";
import ScrollIndicator from "./projects/ScrollIndicator";
import "./projects/Project.css";

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef([]);

  // Setup Intersection Observer to detect which card is centered in viewport
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < projectsData.length; i++) {
        const el = document.getElementById(`project-card-${i}`);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (index) => {
    const el = document.getElementById(`project-card-${index}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollNext = () => {
    if (activeIndex < projectsData.length - 1) {
      handleScrollTo(activeIndex + 1);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentProject = projectsData[activeIndex] || projectsData[0];
  const nextProject = projectsData[activeIndex + 1] || null;

  return (
    <div className="project-page-container">
      {/* Dynamic Background Glow corresponding to active project */}
      <motion.div
        animate={{
          background: `radial-gradient(ellipse at 70% 30%, ${currentProject.theme.glowColor} 0%, rgba(3, 7, 18, 0) 65%)`,
        }}
        transition={{ duration: 0.8 }}
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          opacity: 0.5,
        }}
      />

      {/* Split Screen Layout */}
      <div className="project-split-layout">
        {/* Left Half: Sticky/Fixed Dynamic Visualizer */}
        <div className="project-left-sticky">
          <div style={{ width: "100%", height: "100%", paddingTop: "75px", boxSizing: "border-box" }}>
            <ProjectVisualizer
              project={currentProject}
              activeIndex={activeIndex}
            />
          </div>
        </div>

        {/* Center Progress Dot Track */}
        <div className="project-progress-track">
          {projectsData.map((proj, idx) => {
            const isDotActive = activeIndex === idx;
            return (
              <button
                key={proj.id}
                onClick={() => handleScrollTo(idx)}
                className={`progress-dot-btn ${isDotActive ? "active" : ""}`}
                title={`${proj.num}: ${proj.shortTitle}`}
                style={{
                  backgroundColor: isDotActive
                    ? proj.theme.primary
                    : "rgba(255, 255, 255, 0.2)",
                  borderColor: isDotActive
                    ? proj.theme.primary
                    : "rgba(255, 255, 255, 0.1)",
                  boxShadow: isDotActive
                    ? `0 0 16px ${proj.theme.primary}`
                    : "none",
                }}
              />
            );
          })}
        </div>

        {/* Right Half: Scrollable Project Cards */}
        <div className="project-right-scrollable">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isActive={activeIndex === index}
            />
          ))}
        </div>
      </div>

      {/* Persistent Animated Scroll Indicator */}
      <ScrollIndicator
        activeIndex={activeIndex}
        totalProjects={projectsData.length}
        currentProject={currentProject}
        nextProject={nextProject}
        onScrollNext={handleScrollNext}
        onScrollTop={handleScrollTop}
      />
    </div>
  );
}