import React from "react";
import { IoMdClose, IoMdCloseCircle } from "react-icons/io";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillInfoCircle } from "react-icons/ai";

const CustomToast = ({ toast, removeToast }) => {
  let iconColour = "text-blue-400";

  if (toast?.type === "error") {
    iconColour = "text-red-400";
  } else if (toast?.type === "success") {
    iconColour = "text-emerald";
  }

  return (
    <div className="w-[320px] bg-midnight border border-white/10 shadow-2xl animate-toast-in overflow-hidden pointer-events-auto">
      <div className="flex items-center justify-between pr-2">
        <div className="flex items-start space-x-2 p-3 text-xs">
          {toast.type === "success" ? (
            <GoCheckCircleFill className="text-emerald text-sm" />
          ) : toast.type === "error" ? (
            <IoMdCloseCircle className="text-red-400 text-sm" />
          ) : (
            <AiFillInfoCircle className="text-blue-400 text-sm" />
          )}
          <div>
            <p className="flex-1 font-mono">{toast.message}</p>
          </div>
        </div>
        <button
          onClick={() => removeToast(toast.id)}
          className="cursor-pointer"
        >
          <IoMdClose size={16} />
        </button>
      </div>
      <div className="h-0.5 bg-white/5 w-full">
        <div className="h-full bg-emerald animate-progress" />
      </div>
    </div>
  );
};

export default CustomToast;
