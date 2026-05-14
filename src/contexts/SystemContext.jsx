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
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "info",
  });

  const changeStatus = (newStatus, loading = false) => {
    setStatus(newStatus);
    setLoading(loading);
  };

  const showToast = (message, type = "info", displayTime = 4000) => {
    setToast({ show: true, message: message, type });

    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, displayTime);
  };

  const toggleToast = (show) => {
    setToast({ ...toast, show: show });
  };

  const value = useMemo(
    () => ({ status, loading, toast, changeStatus, showToast, toggleToast }),
    [status, loading, toast, changeStatus, showToast, toggleToast],
  );

  return (
    <SystemContext.Provider value={value}>{children}</SystemContext.Provider>
  );
};
