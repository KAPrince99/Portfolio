"use client";

import Shuffle from "@/components/Shuffle";
import Navbar from "@/components/ui/Navbar";
import Dock from "@/components/ui/Dock";
import { Press_Start_2P } from "next/font/google";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

export default function Hero() {
  return (
    <main
      id="hero"
      className="min-h-screen w-full overflow-x-hidden flex flex-col"
    >
      <Navbar />

      {/* Decorative Box */}
      <section className="p-4 md:p-5">
        <div className="bg-orange-500 w-12 h-16 md:w-20 md:h-25 animate-fade-up animation-delay-1200"></div>
      </section>

      {/* Date Header */}
      <section className="my-5 md:my-8">
        <h2
          className={`text-center ${pixel.className} tracking-tighter text-[10px] md:text-base`}
        >
          Everyday - Dec 19, 2023
        </h2>
      </section>

      {/* Main Name Sections */}
      <div className="flex flex-col justify-center items-center px-1 my-5 md:my-8 gap-2 md:gap-4">
        <section className="flex justify-center items-start">
          <Shuffle
            text="Prince Amanor"
            shuffleDirection="right"
            duration={1.15}
            animationMode="evenodd"
            shuffleTimes={1}
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover={true}
            respectReducedMotion={true}
            className={`text-center text-[60px] sm:text-[60px] md:text-[90px] lg:text-[120px] leading-none font-semibold uppercase tracking-tighter bg-clip-text animate-fade-up animation-delay-200 ${pixel.className}`}
          />
        </section>

        <section className="flex justify-center items-start mt-2">
          <Shuffle
            text="Kabutey"
            shuffleDirection="right"
            duration={1.15}
            animationMode="evenodd"
            shuffleTimes={1}
            tag="h1"
            className={`text-center text-[60px] sm:text-[60px] md:text-[90px] lg:text-[120px] leading-none font-semibold uppercase tracking-tighter bg-clip-text animate-fade-up animation-delay-600 ${pixel.className} `}
          />
        </section>
      </div>

      {/* Location Footer */}
      <section className="">
        <h2
          className={`text-center ${pixel.className} tracking-tighter text-[10px] md:text-base`}
        >
          Accra, Ghana .
        </h2>
      </section>

      {/* Ensure Dock is fixed or padded correctly */}
      <div className="pb-20 md:pb-10">
        <Dock />
      </div>
    </main>
  );
}
