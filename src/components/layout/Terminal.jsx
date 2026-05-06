import { fileContents } from "../../data/fileContents";
import { useLocation } from "react-router-dom";
import { getBreadcrumbStack } from "../../utils/location";
import TerminalHeader from "./terminal/TerminalHeader";
import TerminalBody from "./terminal/TerminalBody";
import { useEffect } from "react";
import { useContentContext } from "../../contexts/ContentContext";

const Terminal = ({ activeFile, setHideTerminal }) => {
  const { files, loading } = useContentContext();
  const content = files[activeFile];
  const location = useLocation();
  const showTerminal = content?.showTerminal;
  const { navItems } = useContentContext();
  const currentPageItem = navItems.find(
    (item) => item.route === location.pathname,
  );
  const breadcrumbItems = getBreadcrumbStack(currentPageItem?.route, navItems);
  const fullPath =
    "/" +
    breadcrumbItems
      .map((location) => {
        return location.name;
      })
      .join("/");
  const activeFileParentDirectory = fullPath.replace("/" + activeFile, "");
  const commandTag = "guest@profile:";
  const commandTagPath = "~" + activeFileParentDirectory + "$";

  useEffect(() => {
    setHideTerminal(!showTerminal);
  }, [activeFile]);

  return (
    showTerminal && (
      <section className="col-start-2 col-end-4 row-start-3 row-end-4 bg-obsidian lg:col-start-3">
        <TerminalHeader />
        <TerminalBody
          key={location.pathname}
          content={content?.terminal}
          commandTag={commandTag}
          comandTagPath={commandTagPath}
          fullPath={fullPath}
        />
      </section>
    )
  );
};

export default Terminal;
