import { motion } from "motion/react";
import TerminalCommand from "./TerminalCommand";
import LogLine from "./LogLine";
import { terminalComponentRegistry } from "../../../constants/TerminalBodyRegistry";

const TerminalProcess = ({ content, animateItem, tag, tagPath, ...props }) => {
  return (
    <motion.div className="flex flex-col space-y-1">
      {content.map((row, index) => {
        const type = row?.type || "PROCESS";
        const rowKey = `terminal-row-${type}-${index}`;
        const BodyComponent = terminalComponentRegistry[row.componentKey];

        return (
          <motion.div
            key={rowKey}
            variants={animateItem}
            custom={index}
            className="flex flex-col"
          >
            {type === "BODY" ? (
              <motion.div
                key={rowKey}
                className="space-y-2 pb-2"
                variants={animateItem}
              >
                {BodyComponent && <BodyComponent />}
              </motion.div>
            ) : type === "PROCESS" ? (
              <LogLine
                key={rowKey}
                tag={row.tag}
                text={row.text}
                status={row.status}
                fullPath={props.fullPath}
                animateItem={animateItem}
                Component={BodyComponent}
              />
            ) : type === "COMMAND" ? (
              <TerminalCommand
                key={rowKey}
                tag={tag}
                tagPath={tagPath}
                command={row.text}
                animateItem={animateItem}
                showCursor={row.active}
              />
            ) : (
              <span key={rowKey}></span>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default TerminalProcess;
