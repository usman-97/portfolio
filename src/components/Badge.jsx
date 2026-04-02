import React from "react";

const Badge = ({ text, bg, border, pulse, colour }) => {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-1 ${bg} border ${border} rounded-full`}
    >
      <span
        className={`w-2 h-2 rounded-full ${pulse}-500 animate-pulse`}
      ></span>
      <span
        className={`text-xs font-mono ${colour} uppercase tracking-wider text-[10px]`}
      >
        {text}
      </span>
    </div>
  );
};

export default Badge;
