import React from "react";

const CustomInputField = ({
  label,
  inputId,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center">
      <label className="text-silver/50 w-24 shrink-0 text-xs">{label}</label>
      <input
        id={inputId}
        type={type}
        onChange={onChange}
        value={value}
        className="flex-1 p-1 bg-midnight text-silver text-sm border-b border-b-emerald outline-none focus:bg-white/5 focus:border-b-emerald-400"
      />
    </div>
  );
};

export default CustomInputField;
