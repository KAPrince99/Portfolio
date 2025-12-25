"use client";
import Dock from "@/components/ui/Dock";
import {
  fadeRightVariants,
  fadeUpVariants,
  sectionVariants,
  tapeVariants,
} from "@/lib/variants";
import { motion } from "framer-motion";

export default function NewHero() {
  return (
    <main
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center lg:justify-start "
    >
      <div className="flex justify-center items-center px-5">
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          custom={0.1}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          viewport={{ once: true, amount: "all" }}
          className="
          
      bg-white 
      w-[clamp(350px,98vw,1000px)] 
      md:w-[clamp(350px,80vw,1000px)] 
      h-[clamp(240px,50vw,500px)] 
      p-[clamp(0.75rem,3vw,2.5rem)] 
      relative  border border-black/10 shadow-xl shadow-personal-one
    "
        >
          <div
            className="
        text-[clamp(1.5rem,5.5vw,3.75rem)] 
        font-satoshi font-medium 
        tracking-tighter lg:tracking-tight 
        relative z-10 
        leading-[1.1]
        space-y-2
      "
          >
            <motion.h1
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              viewport={{ once: true, amount: "all" }}
              className=""
            >
              Prince Amanor Kabutey
            </motion.h1>
            <motion.h1
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              custom={0.6}
              viewport={{ once: true, amount: "all" }}
              className="ml-[clamp(1rem,4vw,2.5rem)]"
            >
              is a Ghanaian
            </motion.h1>
            <motion.h1
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              custom={1.0}
              viewport={{ once: true, amount: "all" }}
            >
              frontend creative
            </motion.h1>
            <motion.h1
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              custom={1.2}
              viewport={{ once: true, amount: "all" }}
              className="ml-[clamp(1rem,4vw,2.5rem)]"
            >
              mastering react & nextjs
            </motion.h1>
            <motion.h1
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: "all" }}
              custom={1.4}
            >
              Backend with supabase
            </motion.h1>
            <motion.h1
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              custom={1.6}
              viewport={{ once: true, amount: "all" }}
              className="ml-[clamp(1rem,4vw,2.5rem)]"
            >
              Infusing AI magic
            </motion.h1>
          </div>

          <motion.div
            variants={fadeRightVariants}
            initial="hidden"
            whileInView="visible"
            custom={1.8}
            viewport={{ once: true, amount: "all" }}
            className="
        absolute 
        right-0 top-0
     
        w-[clamp(240px,50vw,500px)] 
        h-[clamp(240px,50vw,500px)] 
        rounded-full bg-yellow-300/70 z-0
      "
          />

          <motion.div
            variants={tapeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: "all" }}
            className="absolute h-4 w-8 md:h-6 md:w-15 lg:h-8 lg:w-18 xl:h-10 xl:w-24 bg-orange-500 -right-3 md:-right-10 -top-2 shadow-2xl "
          />
        </motion.section>
      </div>

      <div className="pb-20 md:pb-10 w-full flex justify-center items-center">
        <Dock />
      </div>

      {/* <div className="absolute  top-4/6 bottom-0">
        <InfiniteVerticalDots numDots={30} height="100" />
      </div> */}
    </main>
  );
}
