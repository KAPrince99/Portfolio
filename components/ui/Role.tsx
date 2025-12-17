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
      className={`mt-5 md:py-5 lg:py-10 flex min-h-screen justify-center items-center overflow-x-hidden ${pixel.className} animate-fade-up px-1 `}
    >
      <section className="mx-2 md:mx-5 lg:mx-10 max-w-[1800px] w-full py-2 md:py-5 lg:py-10 bg-black/60 flex-1 flex flex-col  rounded-2xl  shadow-2xl">
        <section className="mx-2 md:mx-5 lg:mx-10 p-4 lg:p-10 bg-yellow-300/60 rounded-xl">
          <PakLayer name="role" />

          <section className="flex flex-col lg:flex-row items-center justify-start mt-10 md:mt-20 lg:gap-10">
            <Shuffle
              text="Frontend"
              shuffleDirection="right"
              duration={1.15}
              animationMode="evenodd"
              shuffleTimes={1}
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
              className="text-left text-[33px] sm:text-[50px] md:text-[70px]  lg:text-[100px]  leading-none font-semibold uppercase tracking-tight text-black z-10 hidden "
            />
            <Shuffle
              text="Creative"
              shuffleDirection="right"
              duration={1.15}
              animationMode="evenodd"
              shuffleTimes={1}
              stagger={0.03}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={true}
              respectReducedMotion={true}
              className="text-left text-[33px] sm:text-[50px] md:text-[70px] lg:text-[95px]  leading-none font-semibold uppercase tracking-tighter text-black/60 z-10 hidden "
            />
          </section>

          <section className="flex flex-col lg:flex-row items-start justify-between text-black/60 gap-10">
            <div className="flex-1 my-5 md:my-10 order-2 lg:order-1">
              <h1 className="tracking-tight text-lg md:text-xl font-semibold leading-relaxed md:leading-loose">
                with <span className="bg-orange-500 p-1">backend</span>{" "}
                capabilities building modern web applications.
              </h1>
              <TechStack />
            </div>

            <div className="hidden lg:block flex-1 bg-orange-500 w-[200px] h-[600px] -mt-6 order-1 lg:order-2"></div>
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
