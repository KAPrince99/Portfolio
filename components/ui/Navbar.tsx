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
      className="fixed top-0 left-0 w-full bg-personal-two/90 backdrop-blur-md h-[70px] md:h-[90px] flex justify-center items-center px-6 z-[100] border-b border-black/5 "
    >
      <section className="w-full max-w-[1440px] flex justify-between items-center">
        {/* Logo Section */}
        <div
          className={`${pixel.className} text-[10px] hidden sm:block opacity-50`}
        >
          PORTFOLIO./25
        </div>

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
