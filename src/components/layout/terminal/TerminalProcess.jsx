import LogLine from "./LogLine";
import { motion } from "motion/react";

const TerminalProcess = ({ logs, animateItem, ...props }) => {
  return (
    <motion.div className="flex flex-col space-y-1 pb-2 pl-5">
      {logs.map((logLine) => (
        <LogLine
          logLine={logLine}
          fullPath={props.fullPath}
          animateItem={animateItem}
        />
      ))}
    </motion.div>
  );
};

export default TerminalProcess;
