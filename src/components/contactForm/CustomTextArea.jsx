import React from "react";

const CustomTextArea = ({ label, resizable = false, value, onChange }) => {
  return (
    <div className="flex items-start">
      <label className="pt-0.5 text-silver/50 w-24 shrink-0 text-xs">
        {label}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        className={`flex-1 p-1 h-32 bg-midnight text-silver border-b text-sm leading-none border-b-emerald outline-none ${resizable === true ? "" : "resize-none"} focus:bg-white/5 focus:border-b-emerald-400`}
      ></textarea>
    </div>
  );
};

export default CustomTextArea;
