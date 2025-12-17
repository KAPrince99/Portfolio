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
      className={`py-10  flex m-h-screen overflow-y-auto ${pixel.className} animate-fade-up animation-delay-200`}
    >
      {/*First Inner */}
      <section className="mx-10 py-10 bg-black/60 flex-1 flex-col text-white rounded-2xl">
        {/*second Inner */}
        <section className="mx-10 p-10 bg-yellow-300/60 rounded-xl">
          <PakLayer name="role" />
          <section className="flex items-center justify-start mt-20">
            <Shuffle
              text="Frontend creative"
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
              className={`text-center text-[85px] leading-none font-semibold uppercase tracking-tigher bg-clip-text animate-fade-up animation-delay-600 text-black/60 z-50 `}
            />
          </section>
          <section className="flex items-start justify-between text-black/60  ">
            <div className="flex-1 flex-col my-10 animate-fade-up animation-delay-600">
              <h1 className="-tracking-tight text-xl font-semibold">
                with <span className="bg-orange-500 p-1">backend</span>{" "}
                capabilities building modern web applications with React,
                Next.js, Supabase and AI integrations.
              </h1>
              <TechStack />
            </div>
            <div className="flex-1 bg-orange-500 w-[200px] h-[600px] -mt-5 animate-fade-up animation-delay-1200"></div>
          </section>
          <section className="text-center my-15 animate-fade-up animation-delay-600">
            <h1 className="text-xl  text-black/60 tracking-tight leading-7">
              I’m a self-taught web developer with a strong foundation in React
              and Next.js, focused on building user-friendly, scalable
              applications. I enjoy turning ideas into real products and
              combining web technologies with AI to solve real problems.
            </h1>
          </section>
        </section>
      </section>
    </main>
  );
}
