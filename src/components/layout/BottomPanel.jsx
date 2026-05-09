import React from "react";
import Terminal from "./Terminal";

const BottomPanel = ({ activeFile, hideTerminal }) => {
  if (!hideTerminal) {
    return <Terminal activeFile={activeFile} />;
  } else {
    return null;
  }
};

export default BottomPanel;
