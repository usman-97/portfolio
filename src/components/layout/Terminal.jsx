import { IoMdClose } from "react-icons/io";
import { fileContents } from "../../data/fileContents";
import { useLocation } from "react-router-dom";
import { getBreadcrumbStack } from "../../utility/Location";
import { navItems } from "../../data/navigation";
import TerminalProcess from "./terminal/TerminalProcess";
import { motion, AnimatePresence } from "motion/react";

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
    transition: { delay: i * 0.5, duration: 0.2, ease: "easeOut" },
  }),
};

const Terminal = ({ activeFile }) => {
  const content = fileContents[activeFile];
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
    <section
      className="col-start-2 col-end-4 row-start-3 row-end-4 bg-obsidian lg:col-start-3"
      onClick={() => inputRef?.current.focus()}
    >
      <div className="flex items-start shrink-0 space-x-10 pl-5 pt-1 bg-midnight border-b border-steel font-sans">
        <span className="text-silver/50">Terminal</span>
        <div className="flex items-center space-x-3 border-b-3 border-emerald">
          <span className="pl-2">Local</span>
          <IoMdClose />
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          className="flex-col flex-1 space-y-1 p-3 text-xs font-mono"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {content?.terminalContent && (
            <TerminalProcess
              content={content.terminalContent}
              tag={commandTag}
              tagPath={comandTagPath}
              fullPath={fullPath}
              animateItem={item}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Terminal;
