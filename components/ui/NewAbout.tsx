"use client";
import { sectionVariants, tapeVariants } from "@/lib/variants";
import { motion } from "framer-motion";

const passages = [
  {
    id: "1",
    content: ` I started my journey into web development about six months ago,
              driven by a desire to build real, usable products. Before
              transitioning into web development, I explored machine learning
              and deep learning using Tensorflow and then later to PyTorch.`,
  },
  {
    id: "2",
    content: ` While working with machine learning, I realized that most of my
              ideas required a strong frontend to truly come to life. That led
              me to focus on web development.That realization led me to focus on web development, where I could be more creative and user-focused.`,
  },
  {
    id: "3",
    content: `  Today, I build full-stack applications using React and Next.js, with Supabase for backend services, Tailwind CSS for styling, and Clerk for authentication. I especially enjoy integrating AI-powered features into web applications to create meaningful user experiences. One example is Stanect, an AI-powered voice companion designed to help users improve communication skills through real-time conversational practice.`,
  },
  {
    id: "4",
    content: ` I’m currently focused on improving my skills by building real projects and writing clean, maintainable, production-style code. While I don’t yet have formal industry experience, I’ve intentionally focused on shipping real applications that mirror how modern products are built. My approach is simple: learn by building, ship consistently, and improve through feedback.`,
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
