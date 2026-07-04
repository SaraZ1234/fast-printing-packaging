// src/app/industries/[slug]/ClientAnimationWrapper.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

interface WrapperProps {
  children: React.ReactNode;
  type?: "fade-up" | "fade";
  delay?: number;
}

export default function ClientAnimationWrapper({ children, type = "fade-up", delay = 0 }: WrapperProps) {
  const variants = {
    hidden: { opacity: 0, y: type === "fade-up" ? 20 : 0 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: delay, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {children}
    </motion.div>
  );
}