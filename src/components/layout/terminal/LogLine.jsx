import { motion } from "motion/react";

const LogLine = ({ tag, text, status, animateItem, textStyle, ...props }) => {
  const logLineWithFullPath = props.fullPath
    ? text?.replace("{path}", props.fullPath)
    : text;
  return (
    <motion.p variants={animateItem} className="md:flex md:space-x-1">
      {tag && <span className="text-forest">{tag}</span>}
      {logLineWithFullPath && (
        <span className={textStyle ? textStyle : `text-silver/40`}>
          {logLineWithFullPath}
        </span>
      )}
      {status && <span className="text-forest">{status}</span>}
    </motion.p>
  );
};

export default LogLine;
