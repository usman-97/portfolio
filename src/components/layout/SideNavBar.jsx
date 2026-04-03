import TreeItem from "./nav/TreeItem";
import { navItems } from "../../data/navigation";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const SideNavBar = ({ setActiveFile, showNavbar = true }) => {
  const location = useLocation();

  useEffect(() => {
    const activeItem = navItems.find(
      (item) => item.route === location.pathname,
    );
    if (activeItem) {
      let fileName = activeItem.name;
      if (activeItem.type === "file" && activeItem.parentId !== 2) {
        const parentItem = navItems.find((i) => i.id === activeItem.parentId);
        if (parentItem) fileName = parentItem.name;
      }
      setActiveFile(fileName);
    }
  }, [location.pathname, setActiveFile]);

  return (
    showNavbar && (
      <nav className="row-start-2 row-end-3 pb-5 bg-midnight text-silver/50 font-mono border-r-2 border-steel md:pb-0 lg:row-end-4">
        <div className="flex items-center p-2 border-b-2 border-b-steel">
          <h2 className="text-silver/60! text-sm uppercase">Explorer</h2>
        </div>
        <div className="mt-2 text-sm">
          {navItems.map((item) => {
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
