"use client";
import { Press_Start_2P } from "next/font/google";
import PakLayer from "@/components/ui/PakLayer";
import Shuffle from "@/components/Shuffle";
import TechStack from "@/components/ui/TechStack";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

export default function Role() {
  return (
    <main
      id="role"
      className={`py-10 flex min-h-screen overflow-x-hidden ${pixel.className}`}
    >
      {/* Outer container: reduce margins on mobile */}
      <section className="mx-2 md:mx-10 py-5 md:py-10 bg-black/60 flex-1 flex flex-col text-white rounded-2xl">
        {/* Inner container: reduce padding on mobile */}
        <section className="mx-2 md:mx-10 p-4 md:p-10 bg-yellow-300/60 rounded-xl">
          <PakLayer name="role" />

          <section className="flex items-center justify-start mt-10 md:mt-20">
            <Shuffle
              text="Frontend creative"
              // Responsive text size: 30px to 85px
              className="text-left text-[30px] sm:text-[50px] md:text-[85px] leading-none font-semibold uppercase tracking-tighter text-black/60 z-10"
              // ... other props
            />
          </section>

          {/* Changed flex to flex-col on mobile */}
          <section className="flex flex-col lg:flex-row items-start justify-between text-black/60 gap-10">
            <div className="flex-1 my-5 md:my-10 order-2 lg:order-1">
              <h1 className="tracking-tight text-lg md:text-xl font-semibold leading-relaxed">
                with <span className="bg-orange-500 p-1">backend</span>{" "}
                capabilities building modern web applications.
              </h1>
              <TechStack />
            </div>

            {/* Decorative Side Box: Hide on mobile or make it a small accent */}
            <div className="hidden lg:block flex-1 bg-orange-500 w-[200px] h-[600px] -mt-5 order-1 lg:order-2"></div>
          </section>

          <section className="text-center my-10 md:my-15 px-2">
            <h1 className="text-sm md:text-xl text-black/60 tracking-tight leading-6 md:leading-7">
              I’m a self-taught web developer with a strong foundation in React
              and Next.js...
            </h1>
          </section>
        </section>
      </section>
    </main>
  );
}
