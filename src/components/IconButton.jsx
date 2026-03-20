import React from "react";

const IconButton = ({ children, hoverBgClass = "hover:bg-silver/10" }) => {
  return (
    <button className={`p-2 cursor-pointer ${hoverBgClass}`}>{children}</button>
  );
};

export default IconButton;
