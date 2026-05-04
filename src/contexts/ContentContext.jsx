import { useCallback, useContext } from "react";
import { useState } from "react";
import { createContext, useMemo } from "react";
import { client } from "../lib/sanity";
import { useEffect } from "react";

const ContentContext = createContext(null);

export const useContentContext = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContentContext must be used within a ContentProvider.");
  }
  return context;
};

export const ContentProvider = ({ children }) => {
  const [files, setFiles] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchAllData = useCallback(async () => {
    if (Object.keys(files).length > 0) return;

    try {
      const query = `{
        "home": *[_type == "homePage"][0],
        "contact": *[_type == "contactPage"][0]
    }`;
      const data = await client.fetch(query);

      setFiles({
        "Home.jsx": {
          id: "home",
          content: data.home?.editorContent,
          terminal: data.home?.terminalLogs,
          language: data.home?.language,
          showTerminal: data.home?.showTerminal,
          type: "EDITOR",
        },
        "contact.css": {
          id: "contact",
          content: data.contact?.editorContent,
          language: data.contact?.language,
          contactLinks: data.contact?.contactLinks,
          type: "EDITOR",
        },
      });
    } catch (e) {
      console.error("Fetch error:", e);
    } finally {
      setLoading(false);
    }
  }, [files]);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  const value = useMemo(() => ({ files, loading }), [files, loading]);
  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};
