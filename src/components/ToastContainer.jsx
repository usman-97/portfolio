import React from "react";
import { useSystemContext } from "../contexts/SystemContext";
import CustomToast from "./CustomToast";

const ToastContainer = () => {
  const { toasts, removeToast } = useSystemContext();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-20 right-4 min-w-70 transition-all duration-300 z-100">
      <div className="flex flex-col space-y-2">
        {toasts.map((toast) => (
          <CustomToast key={toast.id} toast={toast} removeToast={removeToast} />
        ))}
      </div>
    </div>
  );
};

export default ToastContainer;
