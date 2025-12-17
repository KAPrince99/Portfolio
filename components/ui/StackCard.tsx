"use client";
import { motion } from "framer-motion";
interface Props {
  name: string;
}

export default function StackCard({ name }: Props) {
  return (
    // Changed fixed w-40 to w-full
    <motion.section
      className="relative bg-black w-full h-16 md:h-20 items-center grid place-content-center cursor-pointer"
      whileHover={{ rotate: 5, scale: 1.05 }}
    >
      <div className="absolute bg-orange-500 w-6 h-3 md:w-10 md:h-4 -right-2 md:-right-4 -top-1 md:-top-2 -rotate-10" />
      <h2 className="text-white text-xs md:text-sm">{name}</h2>
    </motion.section>
  );
}
