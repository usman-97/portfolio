import TreeItem from "./nav/TreeItem";
import { navItems } from "../../data/navigation";
import { useLocation } from "react-router-dom";

const SideNavBar = ({ setActiveFile }) => {
  const location = useLocation();

  return (
    <nav className="row-start-2 row-end-3 bg-midnight text-silver/50 font-mono border-r-2 border-steel lg:row-end-4">
      <div className="flex items-center p-2 border-b-2 border-b-steel">
        <h2 className="text-sm uppercase">Explorer</h2>
      </div>
      <div className="mt-2 text-sm">
        {navItems.map((item) => {
          const isActive = item.route && item.route === location.pathname;
          if (isActive) {
            setActiveFile(item.name);
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
  );
};

export default SideNavBar;
