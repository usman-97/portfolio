import TreeItem from "./nav/TreeItem";
import { navItems } from "../../data/navigation";
import { useLocation } from "react-router-dom";

const SideNavBar = ({ setActiveFile, showNavbar = true }) => {
  const location = useLocation();

  return (
    showNavbar && (
      <nav className="row-start-2 row-end-3 bg-midnight text-silver/50 font-mono border-r-2 border-steel lg:row-end-4">
        <div className="flex items-center p-2 border-b-2 border-b-steel">
          <h2 className="text-silver/60! text-sm uppercase">Explorer</h2>
        </div>
        <div className="mt-2 text-sm">
          {navItems.map((item) => {
            const isActive = item.route && item.route === location.pathname;
            if (isActive) {
              let activeFile = item.name;
              if (item.type === "file" && item.parentId !== 2) {
                const parentId = item.parentId;
                const parentItem = navItems.find((i) => i.id === parentId);
                activeFile = parentItem.name;
              }
              setActiveFile(activeFile);
            }

            return (
              <TreeItem
                key={item.id}
                item={item}
                isActive={item.route && item.route === location.pathname}
              />
            );
          })}
        </div>
      </nav>
    )
  );
};

export default SideNavBar;
