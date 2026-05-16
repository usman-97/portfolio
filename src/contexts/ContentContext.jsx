import { useCallback, useContext } from "react";
import { useState } from "react";
import { createContext, useMemo } from "react";
import { client } from "../lib/sanity";
import { useEffect } from "react";
import { urlFor } from "../utils/imageUtil";

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
  const [navItems, setNavItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllData = useCallback(async () => {
    if (Object.keys(files).length > 0) return;

    try {
      const query = `{
        "home": *[_type == "homePage"][0],
        "contact": *[_type == "contactPage"][0],
        "projects": *[_type == "project"] | order(order asc),
        "nav": *[_type == "navigation"][0]
    }`;
      const data = await client.fetch(query);
      const projectsMap = {};
      let finalNavItems = [...(data.nav?.navItems || [])];
      let dynamicProjectFiles = [];

      data?.projects?.forEach((proj, index) => {
        const uiId = `P${1000 + index}`;
        projectsMap[uiId] = {
          ...proj,
          image: proj.image ? urlFor(proj.image).url() : null,
        };

        dynamicProjectFiles.push({
          id: `project-${proj._id}`,
          name: `${proj.slug.current}.md`,
          type: "file",
          level: 3,
          icon: "readme",
          route: `/projects/${uiId}`,
          parentId: "projects",
        });
      });
      const projectsFolderIndex = finalNavItems.findIndex(
        (item) => item.name === "projects",
      );
      if (projectsFolderIndex !== -1) {
        finalNavItems.splice(
          projectsFolderIndex + 1,
          0,
          ...dynamicProjectFiles,
        );
      } else {
        finalNavItems = [...finalNavItems, ...dynamicProjectFiles];
      }
      setNavItems(finalNavItems);

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
          showGitView: data.contact?.showGitView,
          type: "EDITOR",
        },
        projects: {
          id: "projects",
          projects: projectsMap,
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

  const value = useMemo(
    () => ({ files, loading, navItems, fetchAllData }),
    [files, loading, navItems, fetchAllData],
  );
  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};
