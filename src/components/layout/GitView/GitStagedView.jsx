import React from "react";

const GitStagedView = () => {
  return (
    <div className="flex flex-col space-y-2">
      <h3 className="text-silver/50 uppercase">Staged files</h3>
      <div className="flex items-start w-lg h-32 bg-midnight">
        <span className="w-full py-1 pl-2 font-mono text-xs bg-silver/10 text-silver cursor-pointer">
          contact_usman.md
        </span>
      </div>
    </div>
  );
};

export default GitStagedView;
