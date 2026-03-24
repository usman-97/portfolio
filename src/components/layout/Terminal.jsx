import { IoMdClose } from "react-icons/io";
import { fileContents } from "../../data/fileContents";
import { useLocation } from "react-router-dom";
import { getBreadcrumbStack } from "../../utility/Location";
import { navItems } from "../../data/navigation";
import TerminalProcessMode from "./terminal/TerminalProcessMode";
import { terminalData } from "../../constants/TerminalData";

const Terminal = ({ activeFile }) => {
  const content = fileContents[activeFile];
  const data = terminalData[activeFile] || "PROCESS";
  const location = useLocation();
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

  return (
    <section className="col-start-2 col-end-4 row-start-3 row-end-4 bg-obsidian lg:col-start-3">
      <div className="flex items-start shrink-0 space-x-10 pl-5 pt-1 bg-midnight border-b border-steel">
        <span className="text-silver/50">Terminal</span>
        <div className="flex items-center space-x-3 border-b-3 border-emerald">
          <span className="pl-2">Local</span>
          <IoMdClose />
        </div>
      </div>
      {data.mode === "PROCESS" ? (
        <TerminalProcessMode
          key={location.pathname}
          currentPage={activeFile}
          headerLogs={content.terminalContent.header}
          footerLogs={content.terminalContent.footer}
          terminalContent={data.body}
          fullPath={fullPath}
        />
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default Terminal;
