import { motion } from "motion/react";

const Badge = ({ text, bg, border, pulse, colour, animateItem }) => {
  return (
    <motion.div
      layout
      className={`flex items-center gap-2 px-3 py-1 ${bg} border ${border} rounded-full cursor-pointer`}
      variants={animateItem}
      whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <span
        className={`w-2 h-2 rounded-full ${pulse}-500 animate-pulse`}
      ></span>
      <span
        className={`text-xs font-mono ${colour} uppercase tracking-wider text-[10px]`}
      >
        {text}
      </span>
    </motion.div>
  );
};

export default Badge;
