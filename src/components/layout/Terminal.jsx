import { IoMdClose } from "react-icons/io";
import { fileContents } from "../../data/fileContents";
import { useLocation } from "react-router-dom";
import { getBreadcrumbStack } from "../../utility/Location";
import { navItems } from "../../data/navigation";
import TerminalProcessMode from "./terminal/TerminalProcessMode";
import { terminalData } from "../../constants/TerminalData";
import { motion, AnimatePresence } from "motion/react";

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

const Terminal = ({ activeFile }) => {
  const content = fileContents[activeFile];
  const data = terminalData[activeFile] || "PROCESS";
  const location = useLocation();
  const currentPageItem = navItems.find(
    (item) => item.route === location.pathname,
  );
  const breadcrumbItems = getBreadcrumbStack(currentPageItem?.id, navItems);
  const fullPath =
    "/" +
    breadcrumbItems
      .map((location) => {
        return location.name;
      })
      .join("/");
  const activeFileParentDirectory = fullPath.replace("/" + activeFile, "");
  const commandTag = "guest@profile:";
  const comandTagPath = "~" + activeFileParentDirectory + "$";

  return (
    <section className="col-start-2 col-end-4 row-start-3 row-end-4 bg-obsidian lg:col-start-3">
      <div className="flex items-start shrink-0 space-x-10 pl-5 pt-1 bg-midnight border-b border-steel">
        <span className="text-silver/50">Terminal</span>
        <div className="flex items-center space-x-3 border-b-3 border-emerald">
          <span className="pl-2">Local</span>
          <IoMdClose />
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="flex-col flex-1 space-y-1 p-3 text-xs"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {content?.terminalContent &&
            (data.mode === "PROCESS" ? (
              <TerminalProcessMode
                key={location.pathname}
                currentPage={activeFile}
                headerLogs={content?.terminalContent?.header}
                footerLogs={content?.terminalContent?.footer}
                terminalContent={data.body}
                fullPath={fullPath}
                commandTag={commandTag}
                command={data.command}
                comandTagPath={comandTagPath}
                animateItem={item}
              />
            ) : (
              <span></span>
            ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Terminal;
