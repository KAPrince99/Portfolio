"use client";

import Box from "@/components/ui/Box";
import { motion } from "framer-motion";
import { Press_Start_2P } from "next/font/google";
import { useLenis } from "@studio-freight/react-lenis";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

const boxItems = [
  {
    id: "hero",
    name: "Pak.",
    className: `bg-amber-400 text-white text-[12px] md:text-xl h-[60px] md:h-[85px] border-0 bg-black hover:text-white ${pixel.className} tracking-tighter`,
    main: true,
  },
  {
    id: "role",
    name: "Role",
    main: true,
  },
  {
    id: "about",
    name: "About",
    main: true,
  },
  {
    id: "projects",
    name: "Projects",
    className: `bg-yellow-300/60 text-black text-[8px] md:text-[10px] h-[60px] md:h-[85px] border-0 hover:bg-amber-300 hover:text-black ${pixel.className} tracking-tighter antialiased`,
    main: true,
  },
];

export default function Dock() {
  const lenis = useLenis();

  const scrollToSection = (id: string) => {
    // lenis.scrollTo handles the selection, offset, and easing automatically
    lenis?.scrollTo(`#${id}`, {
      offset: 0, // Adjust this if you have a fixed header (e.g., -80)
      duration: 1.5, // Matches your smooth scroll feel
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // High-end "out-expo" easing
      immediate: false, // Set to true if you want it to jump without animation
    });
  };
  return (
    <section className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-up animation-delay-1000 w-[95%] max-w-[600px]">
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }} // Reduced scale on hover for better stability
        transition={{ duration: 0.4 }}
        className="
          bg-black/30
          backdrop-blur-md
          border border-white/10
          shadow-lg
          w-full
          h-[80px] md:h-[100px]
          rounded-2xl
          px-2
          flex
          items-center
        "
      >
        <div className="flex w-full items-center justify-between gap-1 md:gap-0">
          {/* First box */}
          <Box
            box={boxItems[0]}
            className={boxItems[0].className}
            onClick={() => scrollToSection(boxItems[0].id)}
          />

          {/* Middle boxes */}
          <div className="flex items-center gap-1 md:gap-3 bg-black/60 h-[70px] md:h-[90px] mx-1 md:mx-2 px-1 md:px-2 rounded-2xl">
            {boxItems.slice(1, -1).map((box) => (
              <Box
                key={box.id}
                box={box}
                // Pass internal box sizing if your Box component supports it,
                // otherwise ensure your Box component handles mobile widths.
                onClick={() => scrollToSection(box.id)}
              />
            ))}
          </div>

          {/* Last box */}
          <Box
            box={boxItems[boxItems.length - 1]}
            className={boxItems[boxItems.length - 1].className}
            onClick={() => scrollToSection(boxItems[boxItems.length - 1].id)}
          />
        </div>
      </motion.div>
    </section>
  );
}
