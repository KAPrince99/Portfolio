"use client";
import { sectionVariants, tapeVariants } from "@/lib/variants";
import { motion } from "framer-motion";

const passages = [
  {
    id: "1",
    content: ` I’m a frontend-focused full-stack engineer and solo founder who builds real, production-ready web products from the ground up. I founded and single-handedly developed Stanect, an AI-powered voice companion helping users practice and improve real-world communication skills, now used by over 200 beta users.`,
  },
  {
    id: "2",
    content: `  I led the entire stack, designing responsive, intuitive interfaces with React, Next.js, and Tailwind CSS, integrating AI features, and building scalable backend services with Supabase and Clerk.`,
  },
  {
    id: "3",
    content: `  As a solo founder, I thrive at the intersection of product, technology, and user experience, shipping polished, high-performance applications that solve real problems and delight users. My approach combines hands-on engineering, AI integration, and continuous iteration, delivering solutions that are both scalable and impactful.`,
  },
  {
    id: "4",
    content: ` I’m currently focused on improving my skills by building real projects and writing clean, maintainable, production-style code,shipping real applications that mirror how modern products are built. My approach is simple: learn by building, ship consistently, and improve through feedback.`,
  },
];

export default function NewAbout() {
  return (
    <main
      id="about"
      className="min-h-screen w-full flex flex-col justify-center items-center  relative   md:px-10 py-10 md:py-30 lg:py-50 
    "
    >
      <div
        className={`my-15 flex items-center justify-center w-full font-satoshi  text-[24px] md:text-[30px] lg:text-[48px] font-bold tracking-wider text-black/60  space-x-2 line-through decoration-orange-500 decoration-2 md:decoration-4 lg:decoration-6`}
      >
        <span className="text-[35px] leading-none flex items-center justify-center "></span>{" "}
        <h1>ABOUT ME</h1>
      </div>

      <section className="flex flex-col w-full items-center justify-center ">
        {passages.map((passage) => (
          <motion.section
            key={passage.id}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`flex flex-col w-full p-4 md:p-5 lg:p-10 bg-personal-one
        tracking-tight lg:tracking-tighter leading-[2.1] mb-5 lg:mb-10
        md:leading-[2.1] font-satoshi font-normal text-gray-800/70
        text-[clamp(1rem,4.5vw,3rem)]  
           shadow-2xl shadow-personal-one`}
          >
            <p>{passage.content}</p>
          </motion.section>
        ))}
      </section>
    </main>
  );
}
