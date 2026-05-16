import React from "react";
import { useSystemContext } from "../../../contexts/SystemContext";

const StatusBar = () => {
  const { status, loading } = useSystemContext();

  return (
    <div className="flex items-center space-x-2 px-4 text-silver/50 cursor-pointer">
      <div
        className={`w-2 h-2 rounded-full ${loading ? "bg-emerald animate-pulse" : "bg-emerald-400/50"}`}
      />
      <span
        className={`text-xs font-mono lowercase ${loading ? "text-silver" : "text-silver/50"}`}
      >
        {status}
      </span>
    </div>
  );
};

export default StatusBar;
