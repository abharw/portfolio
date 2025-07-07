"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Hide the indicator when user scrolls down or reaches the bottom
      if (
        scrollTop > windowHeight * 0.3 ||
        scrollTop + windowHeight >= documentHeight - 100
      ) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4"
    >
      {/* Animated Down Arrow */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Main Arrow */}
        <motion.div
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-6 relative"
        >
          {/* Arrow Shape */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full text-white/80"
          >
            <path d="M7 13l5 5 5-5" />
            <path d="M7 6l5 5 5-5" />
          </svg>
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 w-6 h-6"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full text-white/20"
          >
            <path d="M7 13l5 5 5-5" />
            <path d="M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Scroll Line */}
      <motion.div
        animate={{
          height: [0, 16, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
        className="w-px bg-gradient-to-b from-white/60 to-transparent"
      />
    </motion.div>
  );
}
