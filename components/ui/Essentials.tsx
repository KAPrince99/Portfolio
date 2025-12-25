"use client";

import { sectionVariants } from "@/lib/variants";
import { motion } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";

const stacks = [
  { id: "1", name: "Nextjs" },
  { id: "2", name: "React" },
  { id: "3", name: "Python" },
  { id: "4", name: "GSAP" },
  { id: "5", name: "Motion" },
  { id: "6", name: "Tailwind" },
  { id: "7", name: "Supabase" },
  { id: "8", name: "OpenAi" },
  { id: "9", name: "Clerk" },
];

export default function Essentials() {
  return (
    <main
      id="socials"
      className="min-h-screen w-full flex flex-col justify-center items-center md:items-start relative  md:px-10 py-10 md:py-30 lg:py-50 
   space-y-15 md:space-y-25 lg:space-y-40"
    >
      <div
        className={`my-15 flex items-center justify-center w-full font-satoshi  text-[24px] md:text-[30px] lg:text-[48px] font-bold tracking-wider text-black/60  space-x-2 line-through decoration-orange-500 decoration-2 md:decoration-4 lg:decoration-6`}
      >
        <span className="text-[35px] leading-none flex items-center justify-center translate-y-[2px]"></span>{" "}
        <h1>ESSENTIALS</h1>
      </div>
      <div className="my-5 md:hidden text-2xl font-bold tracking-wide text-black/60">
        Tech Stack
      </div>
      <section className="flex items-center md:gap-10 lg:gap-20">
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          custom={0.1}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative flex flex-col space-y-15 lg:space-y-25 p-4 md:p-5 lg:p-10 md:-ml-2 lg:ml-4 xl:ml-2 bg-white
       text-2xl md:text-3xl lg:text-5xl
           w-[clamp(350px,90vw,1000px)] 
          md:w-[clamp(350px,60vw,1000px)]
          h-[clamp(240px,50vw,500px)] shadow-2xl shadow-personal-one "
        >
          <div className="flex justify-between items-center">
            <h1>Nextjs</h1>
            <h1>React</h1>
            <h1>Typescript</h1>
          </div>
          <div className="flex justify-between items-center">
            <h1>Supabase</h1>
            <h1>Tailwind</h1>
            <h1>Motion</h1>
          </div>
          <div className="flex justify-between items-center">
            <h1>Gsap</h1>
            <h1>Clerk</h1>
            <h1>OpenAI</h1>
          </div>
          <div className="absolute h-4 w-8 md:h-6 md:w-15 lg:h-8 lg:w-18 xl:h-10 xl:w-24 bg-orange-500 -right-3 md:-right-10 -top-2 rotate-40 md:rotate-40 lg:rotate-42 xl:rotate-40 shadow-2xl shadow-personal-one " />
        </motion.section>
        <div className="relative hidden md:flex items-center md:gap-2 lg:gap-10 overflow-hidden ml-5 group ">
          <MoveLeft className="md:w-10 md:h-8 lg:w-15 lg:h-15 text-orange-500 " />
          <span
            className={`block md:text-4xl xl:text-5xl font-bold tracking-wide text-orange-500  transition-all font-satoshi `}
          >
            Tech Stack
          </span>
        </div>
      </section>
      <div className="my-5 md:hidden text-2xl font-bold tracking-wide text-black/60">
        Socials
      </div>
      <section className="flex items-center ">
        <div className="relative hidden md:flex items-center  md:gap-2 lg:gap-10  overflow-hidden ml-5 group">
          <span
            className={`inline-block text-lg md:text-3xl lg:text-5xl font-bold tracking-wider text-orange-500  font-satoshi`}
          >
            Socials
          </span>

          <MoveRight className="md:w-10 md:h-8 lg:w-15 lg:h-15 text-orange-500" />
        </div>
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          custom={0.1}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative flex flex-col md:ml-60 lg:ml-60 xl:ml-40 px-5 md:px-5 lg:px-10 py-5 md:py-10  bg-yellow-300 space-y-10 md:space-y-15 lg:space-y-20  font-satoshi font-medium  tracking-wide
          text-[clamp(1.5rem,5.5vw,3.75rem)]  
          w-[clamp(350px,90vw,1000px)] 
          md:w-[clamp(350px,60vw,1000px)]
          h-[clamp(240px,50vw,500px)] shadow-2xl shadow-personal-one"
        >
          <div className="flex justify-between items-center">
            <Link
              href="https://github.com/KAPrince99"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/prince-amanor-103368177/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Link
              href="mailto:amanorprincekabutey@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <h1>
              {" "}
              <Link
                href="https://x.com/facultywave?s=21&t=EA7KVzb47NhFewv2bvQfpQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
            </h1>
            <Link
              href="https://www.instagram.com/facultywave?igsh=bXRzd3B0ZW40Ymg0&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
          </div>
          <div className="absolute h-4 w-8 md:h-6 md:w-15 lg:h-8 lg:w-18 xl:h-10 xl:w-24 bg-orange-500 -right-3 md:-right-10 -top-2 rotate-40 md:rotate-40 lg:rotate-42 xl:rotate-40 shadow-2xl shadow-personal-one " />
        </motion.section>
      </section>
    </main>
  );
}
