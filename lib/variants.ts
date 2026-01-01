import { Variants } from "framer-motion";

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: customDelay,
      ease: "easeOut",
    },
  }),
};

export const fadeRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
    scale: 0.5,
  },
  visible: (customDelay: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: customDelay,
      type: "spring",
      stiffness: 260, // Higher = faster pop
      damping: 15, // Lower = more "wiggle" at the end
      mass: 1,
    },
  }),
};
export const sectionVariants: Variants = {
  hidden: { rotate: 0, x: -80, opacity: 0 },
  hover: { rotate: 5 },
  visible: (customDelay: number) => ({
    whileHover: { rotate: 5 },
    x: 0,
    opacity: 1,
    hover: { rotate: 5 },
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
      duration: 2,
      delay: customDelay,
    },
  }),
};

export const tapeVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -80,
    scale: 0.5,
  },

  hover: {
    rotate: -20,
    scale: 1.1,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },

  visible: () => ({
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 40,

    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15,
      delay: 1,
    },
  }),
};
