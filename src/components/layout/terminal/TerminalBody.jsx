import { motion, AnimatePresence } from "motion/react";
import TerminalProcess from "./TerminalProcess";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const item = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.4, duration: 0.2, ease: "easeOut" },
  }),
};

const TerminalBody = ({ content, commandTag, commandTagPath, fullPath }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="flex-col flex-1 space-y-1 p-3 text-[10px] font-mono md:text-xs"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {content && (
          <TerminalProcess
            content={content}
            tag={commandTag}
            tagPath={commandTagPath}
            fullPath={fullPath}
            animateItem={item}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default TerminalBody;
