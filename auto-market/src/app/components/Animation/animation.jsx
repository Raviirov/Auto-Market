"use client";
import { motion } from "framer-motion";

export default function Animation({ children }) {
  return (
    <motion.div
      style={{ transform: "translateY(20px)" }}  // ← important: initial position rendered immediately
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}