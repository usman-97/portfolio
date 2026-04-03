import { LuChevronRight } from "react-icons/lu";
import { motion } from "motion/react";

const TerminalCommand = ({
  command,
  tag,
  showCursor,
  animateItem,
  tagPath,
}) => {
  return (
    <motion.div
      className="flex items-center text-[10px] md:text-sm"
      variants={animateItem}
    >
      <LuChevronRight size={20} className="text-emerald/50" />
      <div className="flex space-x-1">
        <span className="text-emerald/50">{tag}</span>
        <span className="pr-2 text-emerald/80">{tagPath}</span>
      </div>
      {command && <span className="text-silver/80">{command}</span>}
      {showCursor && (
        <div className="w-2 h-4 bg-emerald animate-[pulse_1.2s_infinite]"></div>
      )}
    </motion.div>
  );
};

export default TerminalCommand;
