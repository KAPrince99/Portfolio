import { motion } from "framer-motion";

export default function StackCard({ name }: { name: string }) {
  const tipVariants = {
    initial: { rotate: -10 },
    hover: { rotate: -40 },
  };

  return (
    <motion.section
      className="relative bg-yellow-300 w-full h-16 md:h-25 items-center grid place-content-center cursor-pointer"
      initial="initial"
      whileHover="hover"
      variants={{
        initial: { rotate: 0, scale: 1 },
        hover: { rotate: 5, scale: 1.05 },
      }}
    >
      <motion.div
        className="absolute bg-black w-6 h-3 md:w-10 md:h-4 -right-2 md:-right-4 -top-1 md:-top-2"
        variants={tipVariants}
      />
      <h2
        className="text-black  font-satoshi font-medium  tracking-wide
          text-[clamp(1.5rem,5.5vw,2rem)]"
      >
        {name}
      </h2>
    </motion.section>
  );
}
