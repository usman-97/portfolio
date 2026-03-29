import React from "react";
import { IoMdClose } from "react-icons/io";

const TerminalHeader = () => {
  return (
    <div className="flex items-start shrink-0 space-x-10 pl-5 pt-1 bg-midnight border-b border-steel font-sans">
      <span className="text-silver/50">Terminal</span>
      <div className="flex items-center space-x-3 border-b-3 border-emerald">
        <span className="pl-2">Local</span>
        <IoMdClose />
      </div>
    </div>
  );
};

export default TerminalHeader;
