"use client";

import Shuffle from "@/components/Shuffle";
import Navbar from "@/components/ui/Navbar";
import Dock from "@/components/ui/Dock";
import { Press_Start_2P } from "next/font/google";
import { MoveRight } from "lucide-react";

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

      <section className="w-full p-4 md:p-5">
        <div className="bg-personal-one w-12 h-16 md:w-20 md:h-25 animate-fade-up animation-delay-1200"></div>
      </section>

      <section className="my-5 md:my-8 animate-fade-up animation-delay-1000 group">
        <h2
          className={`text-center ${pixel.className} tracking-tighter text-[10px] 2xl:text-xl md:text-base`}
        >
          Everyday - Dec 19, 2023
        </h2>
      </section>

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
            className={`text-center text-[60px]  md:text-[90px] lg:text-[120px] leading-none font-semibold uppercase tracking-tighter bg-clip-text animate-fade-up animation-delay-200 ${pixel.className}`}
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
            className={`text-center text-[60px] md:text-[90px] lg:text-[120px] leading-none font-semibold uppercase tracking-tighter bg-clip-text animate-fade-up animation-delay-600 ${pixel.className} `}
          />
        </section>
      </div>

      <section className="w-full flex flex-col py-5 md:py-0 md:flex-row  justify-center items-center md:justify-between md:items-start  xl:max-w-[1800px] mx-auto gap-8 px-5 md:px-8 lg:px-10">
        {/* COLLABORATION */}
        <div className="animate-fade-up animation-delay-1000 group">
          <div className="flex items-center gap-3 mb-0 md:mb-1">
            <h1 className="text-base md:text-lg lg:text-2xl  font-light tracking-tight text-black/80">
              AVAILABLE FOR COLLABORATION
            </h1>
            <MoveRight className=" w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6   text-black group-hover:text-orange-500 rotate-30 group-hover:rotate-0 transition-transform duration-300" />
          </div>

          <div className="relative overflow-hidden ml-12">
            <a
              href="mailto:princeamanorkabutey@gmail.com"
              className="block text-base md:text-lg lg:text-2xl font-bold tracking-tighter hover:text-orange-600 underline hover:no-underline transition-all"
            >
              princeamanorkabutey@gmail.com
            </a>

            <span className="absolute bottom-0 left-0 w-full h-[2px] md:h-[3px] bg-orange-500 transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
          </div>
        </div>

        {/* RECENT WORK */}
        <div className="-ml-30 animate-fade-up animation-delay-1000 group">
          <div className="flex items-center gap-3 mb-0 md:mb-1">
            <h1 className="text-base md:text-lg lg:text-2xl  font-light tracking-tight text-black/80">
              RECENT PROJECT
            </h1>
            <MoveRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-black group-hover:text-orange-500 rotate-30 group-hover:rotate-0 transition-transform duration-300" />
          </div>

          <div className="relative overflow-hidden ml-20">
            <a
              href="https://stanect.com"
              className="block text-lg md:text-lg lg:text-4xl font-bold tracking-tighter hover:text-orange-600  underline hover:no-underline transition-all"
            >
              STANECT
            </a>

            <span className="absolute bottom-0 left-0 w-full h-[2px] md:h-[3px] bg-orange-500 transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
          </div>
        </div>
      </section>

      {/* <section className="mt-auto mb-10">
        <h2
          className={`text-center ${pixel.className} tracking-tighter text-[10px] md:text-base 2xl:text-xl animate-fade-up animation-delay-1200`}
        >
          Accra, Ghana.
        </h2>
      </section> */}

      <div className="pb-20 md:pb-10 w-full flex justify-center items-center">
        <Dock />
      </div>
    </main>
  );
}
