import { createContext, useContext, useMemo } from "react";

const TerminalContext = createContext(null);

export const useTerminalContext = () => {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error(
      "useTerminalContext must be used within a TerminalProvider",
    );
  }
};

export const TerminalProvider = ({ children }) => {
  const value = useMemo(() => ({}), []);

  return (
    <TerminalContext.Provider value={value}>
      {children}
    </TerminalContext.Provider>
  );
};
