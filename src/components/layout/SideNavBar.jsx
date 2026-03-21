import TreeItem from "./TreeItem";
import { navItems } from "../../data/navigation";

const SideNavBar = () => {
  return (
    <nav className="row-start-2 row-end-4 bg-midnight text-silver/50 font-mono border-r-2 border-steel">
      <div className="flex items-center p-2 border-b-2 border-b-steel">
        <h2 className="text-sm uppercase">Explorer</h2>
      </div>
      <div className="mt-2 text-sm">
        {navItems.map((item) => (
          <TreeItem key={item.id} item={item} />
        ))}
      </div>
    </nav>
  );
};

export default SideNavBar;
