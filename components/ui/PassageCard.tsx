import { motion } from "framer-motion";

export default function PassageCard({ content }: { content: string }) {
  const tipVariants = {
    initial: { rotate: -10 },
    hover: { rotate: -40 },
  };
  return (
    <motion.div
      className="bg-black/70 p-4 md:p-6 text-white relative w-full"
      initial="initial"
      whileHover="hover"
      variants={{
        initial: { rotate: 0, scale: 1 },
        hover: { rotate: 1, scale: 1.05 },
      }}
    >
      <motion.div
        className="absolute bg-orange-500 w-6 h-3 md:w-10 md:h-4 -right-2 md:-right-4 -top-1 md:-top-2 -rotate-10"
        variants={tipVariants}
      />
      <p className="text-[10px] sm:text-xs md:text-sm leading-relaxed">
        {content}
      </p>
    </motion.div>
  );
}
