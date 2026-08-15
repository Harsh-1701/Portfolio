"use client";

import { motion } from "framer-motion";

export default function SignalLine() {
  return (
    <div className="relative h-px w-full overflow-hidden bg-line">
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "500%" }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 h-px w-1/5 bg-gradient-to-r from-transparent via-accent to-transparent"
      />
    </div>
  );
}