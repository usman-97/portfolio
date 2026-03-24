import { motion, AnimatePresence } from "motion/react";
import React from "react";
import TerminalCommand from "./TerminalCommand";
import TerminalProcess from "./TerminalProcess";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5, delayChildren: 0.2 },
  },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

const item = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const TerminalProcessMode = ({
  key,
  currentPage,
  headerLogs,
  fullPath,
  terminalContent,
  footerLogs,
  commandTag,
  command,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={key}
        className="flex-col flex-1 space-y-1 p-3 text-xs"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <TerminalCommand tag={commandTag} command={command} />
        <TerminalProcess
          logs={headerLogs}
          fullPath={fullPath}
          animateItem={item}
        />
        <motion.div className="flex flex-col space-y-2 pb-2" variants={item}>
          {terminalContent}
        </motion.div>
        <TerminalProcess logs={footerLogs} animateItem={item} />
        <TerminalCommand
          tag={commandTag}
          showCursor={true}
          animateItem={item}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default TerminalProcessMode;
