import { motion } from "motion/react";

const LogLine = ({ logLine, animateItem, ...props }) => {
  const logLineWithFullPath = props.fullPath
    ? logLine.text.replace("{path}", props.fullPath)
    : logLine.text;
  return (
    <motion.p variants={animateItem} className="md:flex md:space-x-1">
      <span className="text-forest">{logLine.tag ? logLine.tag : ""}</span>
      <span className="text-silver/40">{logLineWithFullPath} </span>
      <span className="text-forest">
        {logLine.status ? logLine.status : ""}
      </span>
    </motion.p>
  );
};

export default LogLine;
