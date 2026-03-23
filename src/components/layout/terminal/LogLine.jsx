import React from "react";

const LogLine = ({ logLine, key, ...props }) => {
  const logLineWithFullPath = props.fullPath
    ? logLine.text.replace("{path}", props.fullPath)
    : logLine.text;
  return (
    <p key={key}>
      <span className="text-forest">{logLine.tag ? logLine.tag : ""} </span>
      <span className="text-silver/40">{logLineWithFullPath} </span>
      <span className="text-forest">
        {logLine.status ? logLine.status : ""}
      </span>
    </p>
  );
};

export default LogLine;
