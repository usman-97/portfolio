import { createContext, useContext, useMemo, useState } from "react";

const SystemContext = createContext(null);

export const useSystemContext = () => {
  const context = useContext(SystemContext);
  if (!context) {
    throw new Error("useSystemContext must be used within a SystemProvider.");
  }

  return context;
};

export const SystemProvider = ({ children }) => {
  const [status, setStatus] = useState("ready");
  const [loading, setLoading] = useState(false);
  const [toasts, setToasts] = useState([]);

  const changeStatus = (newStatus, loading = false) => {
    setStatus(newStatus);
    setLoading(loading);
  };

  const showToast = (message, type = "info", displayTime = 4000) => {
    const id = Date.now();
    const newToast = { id, message, type };

    setToasts((prev) => {
      const currentToasts = [...prev];

      if (currentToasts.length >= 5) {
        currentToasts.shift();
      }

      return [...currentToasts, newToast];
    });

    setTimeout(() => {
      removeToast(id);
    }, displayTime);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleToast = (show) => {
    setToast({ ...toast, show: show });
  };

  const value = useMemo(
    () => ({ status, loading, toasts, changeStatus, showToast, removeToast }),
    [status, loading, toasts, changeStatus, showToast, removeToast],
  );

  return (
    <SystemContext.Provider value={value}>{children}</SystemContext.Provider>
  );
};
