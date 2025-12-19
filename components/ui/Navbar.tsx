"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Press_Start_2P } from "next/font/google";
import Link from "next/link";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  /**
   * Framer Motion listener to track scroll direction
   */
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    // 1. Hide if scrolling down and past the hero section (e.g., 150px)
    if (latest > previous && latest > 150) {
      setHidden(true);
    }
    // 2. Show if scrolling up
    else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full bg-personal-one backdrop-blur-md h-[70px] md:h-[90px] flex justify-center items-center px-6 z-100 border-b border-black/5 "
    >
      <section className="w-full max-w-[1440px] flex justify-between items-center  animate-fade-down animation-delay-1400 group">
        {/* <div
          className={`${pixel.className} group flex items-center  sm:flex opacity-80 hover:opacity-100 transition-opacity duration-300`}
        >
          
          <span className="relative inline-block text-white text-xl md:text-2xl lg:text-4xl bg-black px-2 py-1 md:px-4 md:py-2 transition-transform duration-300 ease-out group-hover:rotate-6 group-hover:scale-110">
            FRONTEND
           
            <span className="absolute bg-orange-500 w-6 h-3 md:w-8 md:h-5 -right-3 -top-2 -rotate-12 group-hover:rotate-12 group-hover:bg-white transition-all duration-300 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
          </span>
        </div> */}

        {/* Links Section */}
        <div className="flex gap-8 md:gap-12">
          <Link
            href="https://www.linkedin.com/in/prince-amanor-103368177/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${pixel.className} tracking-tighter text-[8px] sm:text-[10px] md:text-[14px] 2xl:text-lg underline hover:text-orange-500 transition-colors`}
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/KAPrince99"
            target="_blank"
            rel="noopener noreferrer"
            className={`${pixel.className} tracking-tighter text-[8px] sm:text-[10px] md:text-[14px] 2xl:text-lg underline hover:text-orange-500 transition-colors`}
          >
            GitHub
          </Link>
        </div>
      </section>
    </motion.nav>
  );
}
