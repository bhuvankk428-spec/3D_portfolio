import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Mouse } from "lucide-react";

export default function ScrollIndicator({ activeIndex, totalProjects, currentProject, nextProject, onScrollNext, onScrollTop }) {
  const isLast = activeIndex >= totalProjects - 1;
  const theme = currentProject.theme;

  return (
    <div
      className="scroll-indicator-root"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 90,
        pointerEvents: "auto",
      }}
    >
      <motion.button
        onClick={isLast ? onScrollTop : onScrollNext}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "10px 18px",
          borderRadius: "50px",
          background: "rgba(10, 15, 25, 0.85)",
          border: `1px solid ${theme.borderColor}`,
          color: "#ffffff",
          boxShadow: `0 8px 30px rgba(0, 0, 0, 0.6), 0 0 20px ${theme.pillBg}`,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          cursor: "pointer",
          outline: "none",
          transition: "border 0.4s ease, box-shadow 0.4s ease",
        }}
      >
        {/* Animated Mouse Icon with moving scroll dot */}
        <div
          style={{
            position: "relative",
            width: "20px",
            height: "30px",
            borderRadius: "12px",
            border: `2px solid ${theme.primary}`,
            display: "flex",
            justifyContent: "center",
            paddingTop: "5px",
            boxSizing: "border-box",
          }}
        >
          <motion.div
            animate={
              isLast
                ? { y: [8, 0, 8] }
                : { y: [0, 8, 0] }
            }
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: "4px",
              height: "6px",
              borderRadius: "2px",
              backgroundColor: theme.primary,
            }}
          />
        </div>

        {/* Shimmering Text Instruction */}
        <div style={{ textAlign: "left" }}>
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: theme.primary,
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            {isLast ? "EXPLORED ALL PROJECTS" : "SCROLL TO EXPLORE"}
          </div>

          <div
            style={{
              fontSize: "0.7rem",
              color: "#94a3b8",
              fontWeight: 500,
            }}
          >
            {isLast ? "Click to scroll to top" : `Next: ${nextProject ? nextProject.shortTitle : ""}`}
          </div>
        </div>

        {/* Bouncing Chevron Arrow */}
        <motion.div
          animate={
            isLast
              ? { y: [0, -4, 0] }
              : { y: [0, 5, 0] }
          }
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            background: theme.pillBg,
            border: `1px solid ${theme.borderColor}`,
            color: theme.primary,
          }}
        >
          {isLast ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </motion.div>
      </motion.button>
    </div>
  );
}
