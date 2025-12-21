"use client";
import { MoveLeft, MoveRight } from "lucide-react";
import { motion } from "framer-motion";
import { Press_Start_2P } from "next/font/google";
import { sectionVariants, tapeVariants } from "@/lib/variants";

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

export default function Projects() {
  return (
    <main
      className="min-h-screen w-full flex flex-col justify-center items-center md:items-start relative  md:px-10 py-10 md:py-30 lg:py-50 
    "
    >
      <div
        className={`my-15 flex items-center justify-center w-full ${pixel.className} text-[24px] md:text-[30px] lg:text-[48px] font-semibold tracking-tight text-black/60  space-x-2`}
      >
        <span className="text-[35px] leading-none flex items-center justify-center translate-y-[2px]">
          *
        </span>{" "}
        <h1>PROJECTS</h1>
      </div>
      <section className="flex items-center md:gap-10 lg:gap-20">
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          custom={0.1}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          viewport={{ once: true }}
          className="relative flex flex-col  p-4 md:p-5 lg:p-10 md:-ml-2 lg:ml-4 xl:ml-2 bg-white
        tracking-tight lg:tracking-tight leading-[2.1] mb-15 md:mb-20 lg:mb-30
        md:leading-[1.1] font-satoshi font-meduim text-gray-800
        text-[clamp(1rem,4.5vw,3rem)]  
           w-[clamp(350px,90vw,1000px)] 
          md:w-[clamp(350px,60vw,1000px)]
          h-[clamp(240px,50vw,500px)] shadow-2xl shadow-personal-one"
        >
          <p>
            Full-stack AI-powered voice companion designed to help users improve
            communication skills through interactive, real-time conversations
            with AI companions.
          </p>
          <div className="hidden xl:flex items-center justify-between my-8">
            {[
              "Nextjs",
              "Vapi AI",
              "supabase",
              "Clerk",
              "paystack",
              "framer-motion",
            ].map((stack, i) => (
              <div
                key={i}
                className="flex items-center gap-2 border-2 border-black/30 px-3 py-1 rounded-sm text-black/60 bg-white/10"
              >
                {/* Use a span with leading-none to remove extra space around the asterisk */}
                <span className="text-[24px] leading-none flex items-center justify-center translate-y-[2px]">
                  *
                </span>

                {/* leading-none and flex items-center ensure the text is perfectly centered */}
                <p className="text-[24px] leading-none flex items-center">
                  {stack}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-start gap-10 py-5 text-base lg:text-[24px] tracking-wide ">
            <div className=" flex items-center justify-around bg-personal-one px-2 py-1 ">
              <p>Production</p>
              <span>
                <MoveRight className="inline-block w-8 h-4 -rotate-25 -mt-1" />
              </span>
            </div>
            <div className=" flex items-center justify-around bg-personal-one px-2 py-1 ">
              <p>Github</p>
              <span>
                <MoveRight className="inline-block w-8 h-4 -rotate-25 -mt-1" />
              </span>
            </div>
          </div>
          <motion.div
            variants={tapeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute h-4 w-8 md:h-6 md:w-15 lg:h-8 lg:w-18 xl:h-10 xl:w-24 bg-orange-500 -right-3 md:-right-10 -top-2 shadow-2xl "
          />
          {/* <div className="absolute left-200 top-6/6 bottom-0">
          <InfiniteVerticalDots numDots={7} height="20" />
        </div> */}
        </motion.section>
        <div className="relative flex items-center md:gap-2 lg:gap-10 overflow-hidden ml-5 group">
          <MoveLeft className="md:w-10 md:h-8 lg:w-15 lg:h-15 text-orange-500 lg:text-black group-hover:text-orange-500 lg:rotate-30 group-hover:rotate-0 transition-transform duration-300" />
          <a
            href="https://stanect.vercel.app/"
            className={`block text-lg md:text-lg lg:text-4xl font-bold tracking-tighter text-orange-500 lg:text-black hover:text-orange-600  underline hover:no-underline transition-all ${pixel.className}`}
          >
            Stanect
          </a>

          <span className="absolute bottom-0 left-0 w-full h-[2px] md:h-[3px] bg-orange-500 transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
        </div>
      </section>
      <section className="flex items-center">
        <div className="relative flex items-center  md:gap-2 lg:gap-10  overflow-hidden ml-5 group">
          <a
            href="https://tiny45.vercel.app/"
            className={`block text-lg md:text-lg lg:text-4xl font-bold tracking-tighter text-orange-500 lg:text-black hover:text-orange-600  underline hover:no-underline transition-all ${pixel.className}`}
          >
            Tiny45
          </a>

          <span className="absolute bottom-0 left-0 w-full h-[2px] md:h-[3px] bg-orange-500 transform translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
          <MoveRight className="md:w-10 md:h-8 lg:w-15 lg:h-15 text-orange-500 lg:text-black group-hover:text-orange-500 lg:rotate-30 group-hover:rotate-0 transition-transform duration-300" />
        </div>
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          custom={0.1}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          viewport={{ once: true }}
          className="relative flex flex-col md:ml-40 lg:ml-50 xl:ml-30 px-5 py-5 md:py-10 bg-white
        tracking-tight lg:tracking-tight leading-[2.1]
        md:leading-[1.1] font-satoshi font-meduim text-gray-800
        text-[clamp(1rem,4.5vw,3rem)]  
           w-[clamp(350px,90vw,1000px)] 
          md:w-[clamp(350px,60vw,1000px)]
          h-[clamp(240px,50vw,500px)] shadow-2xl shadow-personal-one"
        >
          <p>
            Full-stack e-commerce clothing application showcasing frontend UI,
            backend data handling, and real-world shopping flows built to
            replicate fivefourfive website.
          </p>
          <div className="hidden xl:flex items-center justify-between my-8">
            {["Nextjs", "supabase", "Clerk", "stripe", "framer-motion"].map(
              (stack, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 border-2 border-black/30 px-3 py-1 rounded-sm text-black/60 bg-white/10"
                >
                  {/* Use a span with leading-none to remove extra space around the asterisk */}
                  <span className="text-[24px] leading-none flex items-center justify-center translate-y-[2px]">
                    *
                  </span>

                  {/* leading-none and flex items-center ensure the text is perfectly centered */}
                  <p className="text-[24px] leading-none flex items-center">
                    {stack}
                  </p>
                </div>
              )
            )}
          </div>
          <div className="flex items-center justify-start gap-10 py-5 text-base lg:text-[24px] tracking-wide ">
            <div className=" flex items-center justify-around bg-personal-one px-2 py-1 ">
              <p>Production</p>
              <span>
                <MoveRight className="inline-block w-8 h-4 -rotate-25 -mt-1" />
              </span>
            </div>
            <div className=" flex items-center justify-around bg-personal-one px-2 py-1 ">
              <p>Github</p>
              <span>
                <MoveRight className="inline-block w-8 h-4 -rotate-25 -mt-1" />
              </span>
            </div>
          </div>

          <motion.div
            variants={tapeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute h-4 w-8 md:h-6 md:w-15 lg:h-8 lg:w-18 xl:h-10 xl:w-24 bg-orange-500 -right-3 md:-right-10 -top-2 shadow-2xl "
          />
          {/* <div className="absolute left-75 top-6/6 bottom-0">
          <InfiniteVerticalDots numDots={30} height="100" />
        </div> */}
        </motion.section>
      </section>
    </main>
  );
}
