import { motion } from "motion/react";
import TerminalCommand from "./TerminalCommand";
import TerminalProcess from "./TerminalProcess";

const TerminalProcessMode = ({
  headerLogs,
  fullPath,
  terminalContent,
  footerLogs,
  commandTag,
  command,
  comandTagPath,
  animateItem,
}) => {
  return (
    <>
      <TerminalCommand
        tag={commandTag}
        command={command}
        tagPath={comandTagPath}
      />
      <TerminalProcess
        logs={headerLogs}
        fullPath={fullPath}
        animateItem={animateItem}
      />
      <motion.div
        className="flex flex-col space-y-2 pb-2"
        variants={animateItem}
      >
        {terminalContent}
      </motion.div>
      <TerminalProcess logs={footerLogs} animateItem={animateItem} />
      <TerminalCommand
        tag={commandTag}
        showCursor={true}
        animateItem={animateItem}
        tagPath={comandTagPath}
      />
    </>
  );
};

export default TerminalProcessMode;
