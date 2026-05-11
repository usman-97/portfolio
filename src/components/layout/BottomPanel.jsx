import React from "react";
import Terminal from "./Terminal";
import GitView from "./GitView";

const BottomPanel = ({ activeFile, hideTerminal, showGitView }) => {
  if (!hideTerminal) {
    return <Terminal activeFile={activeFile} />;
  } else if (showGitView) {
    return <GitView />;
  } else {
    return null;
  }
};

export default BottomPanel;
