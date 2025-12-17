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
    <main id="hero" className="min-h-screen">
      <Navbar />
      <section className="p-5">
        <div className="bg-orange-500 w-20 h-25  animate-fade-up animation-delay-1200"></div>
      </section>
      <section className="p-10">
        <h2 className={`text-center ${pixel.className} tracking-tighter`}>
          Everyday - Dec 19,2023
        </h2>
      </section>
      <section className="flex justify-center items-center">
        <Shuffle
          text="Prince Amanor"
          shuffleDirection="right"
          duration={1.15}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
          className={`text-center text-[120px] leading-none font-semibold uppercase tracking-tighter bg-clip-text animate-fade-up animation-delay-200 ${pixel.className}`}
        />
      </section>
      <section className="flex justify-center items-center">
        <Shuffle
          text="Kabutey"
          shuffleDirection="right"
          duration={1.15}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
          tag="h1"
          className={`text-center text-[120px] leading-none font-semibold uppercase tracking-tighter bg-clip-text animate-fade-up animation-delay-600 ${pixel.className} `}
        />
      </section>
      <section className="p-5">
        <h2 className={`text-center ${pixel.className} tracking-tighter`}>
          Accra, Ghana .
        </h2>
      </section>

      <Dock />
    </main>
  );
}
