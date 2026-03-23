import { IoMdClose } from "react-icons/io";
import { fileContents } from "../../data/fileContents";
import { useLocation } from "react-router-dom";
import { getBreadcrumbStack } from "../../utility/Location";
import { navItems } from "../../data/navigation";
import TerminalCommand from "./terminal/TerminalCommand";
import TerminalProcess from "./terminal/TerminalProcess";

const Terminal = ({ activeFile }) => {
  const content = fileContents[activeFile];
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
    <section className="col-start-3 col-end-4 row-start-3 row-end-4 bg-obsidian">
      <div className="flex items-start space-x-10 pl-5 pt-1 bg-midnight border-b border-steel">
        <span className="text-silver/50">Terminal</span>
        <div className="flex items-center space-x-3 border-b-3 border-emerald">
          <span className="pl-2">Local</span>
          <IoMdClose />
        </div>
      </div>
      <div className="flex flex-col space-y-1 p-3 text-xs">
        <TerminalCommand
          tag="guest@profile$"
          command={`run ${currentPageItem?.name}`}
        />
        <TerminalProcess
          logs={fileContents.terminalLogs.header}
          fullPath={fullPath}
        />
        {content && (
          <div className="flex flex-col space-y-2 pb-2">
            <div className="w-full border-b border-dashed border-forest/50"></div>
            <p className="py-2 px-15 text-[1rem] text-emerald text-shadow-emerald">
              {content.terminalContent}
            </p>
            <div className="w-full border-b border-dashed border-forest/50"></div>
          </div>
        )}
        <TerminalProcess logs={fileContents.terminalLogs.footer} />
        <TerminalCommand tag="guest@profile$" showCursor={true} />
      </div>
    </section>
  );
};

export default Terminal;
