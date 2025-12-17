"use client";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import { Press_Start_2P } from "next/font/google";
import { MouseEventHandler } from "react";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

interface BoxItem {
  id: string;
  name: string;
  main: boolean;
}

interface Props {
  className?: string;
  box?: BoxItem;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const boxVariants: Variants = {
  initial: { scale: 1, filter: "brightness(1)" },
  hover: {
    scale: 1.05,
    filter: "brightness(1.1)",
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
  tap: { scale: 0.95 },
};

export default function Box({ className, box, onClick }: Props) {
  return (
    <motion.button
      onClick={onClick}
      variants={boxVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      className={cn(
        // Responsive Width and Height: Smaller on mobile, standard on desktop
        "w-[75px] h-[55px] sm:w-[90px] sm:h-[65px] md:w-[110px] md:h-[75px]",
        // Responsive Text: 8px on small mobile to prevent "Projects" from breaking
        "text-[7px] sm:text-[9px] md:text-[10px]",
        "rounded-xl flex items-center justify-center",
        "tracking-tighter antialiased cursor-pointer font-sans",
        "bg-black/60 text-gray-200 border border-white/50",
        "transition-colors duration-200",
        pixel.className,
        className
      )}
    >
      {box?.name}
    </motion.button>
  );
}
