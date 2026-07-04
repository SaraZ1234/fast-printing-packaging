// src/app/industries/[slug]/ClientAnimationWrapper.tsx
"use client";
import React from "react";
  import { motion, type Variants } from "framer-motion";


interface WrapperProps {
  children: React.ReactNode;
  type?: "fade-up" | "fade";
  delay?: number;
}

export default function ClientAnimationWrapper({ children, type = "fade-up", delay = 0 }: WrapperProps) {

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: type === "fade-up" ? 20 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: "easeOut",
    },
  },
};

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {children}
    </motion.div>
  );
}