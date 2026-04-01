import React from "react";

const Section = ({ heading, text }) => {
  return (
    <div className="flex flex-col space-y-1">
      <h3 className="pb-1 text-emerald text-lg font-semibold border-b border-emerald/60">
        {heading}
      </h3>
      <p>{text}</p>
    </div>
  );
};

export default Section;
