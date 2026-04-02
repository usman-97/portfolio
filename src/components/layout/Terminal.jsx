import { fileContents } from "../../data/fileContents";
import { useLocation } from "react-router-dom";
import { getBreadcrumbStack } from "../../utility/Location";
import { navItems } from "../../data/navigation";
import TerminalHeader from "./terminal/TerminalHeader";
import TerminalBody from "./terminal/TerminalBody";

const Terminal = ({ activeFile, setHideTerminal }) => {
  const content = fileContents[activeFile];
  const location = useLocation();
  const hideTerminal = content?.hideTerminal;
  setHideTerminal(hideTerminal);
  const currentPageItem = navItems.find(
    (item) => item.route === location.pathname,
  );
  const breadcrumbItems = getBreadcrumbStack(currentPageItem?.id, navItems);
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

  return (
    !hideTerminal && (
      <section className="col-start-2 col-end-4 row-start-3 row-end-4 bg-obsidian lg:col-start-3">
        <TerminalHeader />
        <TerminalBody
          key={location.pathname}
          content={content?.terminalContent}
          commandTag={commandTag}
          comandTagPath={commandTagPath}
          fullPath={fullPath}
        />
      </section>
    )
  );
};

export default Terminal;
