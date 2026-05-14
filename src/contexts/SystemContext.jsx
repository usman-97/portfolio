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

  const changeStatus = (newStatus, loading = false) => {
    setStatus(newStatus);
    setLoading(loading);
  };

  const value = useMemo(
    () => ({ status, loading, changeStatus, setLoading }),
    [status, loading, changeStatus, setLoading],
  );

  return (
    <SystemContext.Provider value={value}>{children}</SystemContext.Provider>
  );
};
