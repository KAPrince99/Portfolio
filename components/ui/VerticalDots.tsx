"use client";
import { motion } from "framer-motion";

export default function VerticalDots() {
  return (
    <div className="h-64 overflow-hidden relative border-l border-black/5">
      {/* 1. The Looping Container */}
      <motion.div
        animate={{ y: [0, 20] }} // Adjust '20' to match the gap height
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-3 p-2"
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
}
