import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function HomeScrollIndicator() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const progress = Math.max(0, Math.min(1, scrollTop / maxScroll));
      setScrollPercent(Math.round(progress * 100));
      setCurrentFrame(Math.min(300, Math.max(1, Math.ceil(progress * 300))));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isAtBottom = scrollPercent > 90;

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({
        top: Math.min(maxScroll, (window.scrollY || document.documentElement.scrollTop) + window.innerHeight),
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="home-scroll-indicator"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "32px",
        zIndex: 50,
        pointerEvents: "auto",
      }}
    >
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "10px 18px",
          borderRadius: "40px",
          background: "rgba(12, 12, 18, 0.8)",
          border: "1px solid rgba(99, 102, 241, 0.4)",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7), 0 0 25px rgba(99, 102, 241, 0.25)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          cursor: "pointer",
          color: "#ffffff",
          outline: "none",
          transition: "border 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {/* Animated Mouse Icon */}
        <div
          style={{
            position: "relative",
            width: "20px",
            height: "30px",
            borderRadius: "12px",
            border: "2px solid #818cf8",
            display: "flex",
            justifyContent: "center",
            paddingTop: "5px",
            boxSizing: "border-box",
          }}
        >
          <motion.div
            animate={
              isAtBottom
                ? { y: [8, 0, 8] }
                : { y: [0, 8, 0] }
            }
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: "4px",
              height: "6px",
              borderRadius: "2px",
              backgroundColor: "#6366f1",
              boxShadow: "0 0 8px #6366f1",
            }}
          />
        </div>

        {/* Text Details & Live Frame Counter */}
        <div style={{ textAlign: "left" }}>
          <div
            style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              color: "#a5b4fc",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <span>{isAtBottom ? "REPLAY ANIMATION" : "SCROLL TO PLAY"}</span>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "0.7rem",
                color: "#6366f1",
                background: "rgba(99, 102, 241, 0.15)",
                padding: "2px 6px",
                borderRadius: "4px",
              }}
            >
              {scrollPercent}%
            </span>
          </div>

          <div
            style={{
              fontSize: "0.7rem",
              color: "#94a3b8",
              fontWeight: 500,
              marginTop: "1px",
            }}
          >
            {isAtBottom ? "Click to scroll to top" : ""}
          </div>
        </div>

        {/* Bouncing Chevron Indicator */}
        <motion.div
          animate={
            isAtBottom
              ? { y: [0, -4, 0] }
              : { y: [0, 4, 0] }
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
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            background: "rgba(99, 102, 241, 0.2)",
            color: "#818cf8",
          }}
        >
          {isAtBottom ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </motion.div>
      </motion.button>
    </div>
  );
}
