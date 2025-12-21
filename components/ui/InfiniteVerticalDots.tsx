"use client";
import { motion } from "framer-motion";
interface Props {
  numDots: number;
  height: string;
}

export default function InfiniteVerticalDots({
  numDots = 30,
  height = "100",
}: Props) {
  // Distance = Dot Height (6px) + Gap (12px) = 18px
  const loopDistance = 18;

  return (
    <div
      className={`h-${height} overflow-hidden relative border-l border-black/5`}
      style={{
        // Mask fades the dots out at the very top and bottom for a "portal" effect
        maskImage:
          "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
      }}
    >
      <motion.div
        // 1. The Infinite Loop
        animate={{ y: [0, loopDistance] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-3 p-2"
      >
        {[...Array(numDots)].map((_, i) => (
          <motion.div
            key={i}
            // 2. The Pop-In / Scroll-Out logic
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            // Removing 'once: true' allows them to disappear when you scroll away
            transition={{
              delay: i * 0.05,
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
}
