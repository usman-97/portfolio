import { LuChevronRight } from "react-icons/lu";
import { navItems } from "../../data/navigation";
import { useLocation } from "react-router-dom";
import { getBreadcrumbStack } from "../../utils/location";
import { ICON_MAP } from "../../constants/IconRegistry";
import { useContentContext } from "../../contexts/ContentContext";

const Breadcrumb = () => {
  const location = useLocation();
  const { navItems } = useContentContext();
  const currentPageItem = navItems.find(
    (item) => item.route === location.pathname,
  );
  const breadcrumbItems = getBreadcrumbStack(currentPageItem?.route, navItems);

  return (
    <div className="flex items-center mt-1 ml-5 text-xs text-silver/50 cursor-pointer">
      {breadcrumbItems.map((item, key) => {
        const isFolder = item.type === "folder" || item.type === "root";
        const icon =
          ICON_MAP[item.icon] ||
          (isFolder ? ICON_MAP.defaultFolder : ICON_MAP.defaultFile);
        return (
          <div key={key} className="flex items-center hover:text-silver">
            <div className="flex items-center space-x-1">
              {!isFolder && <span>{icon}</span>}
              <p>{item.name}</p>
            </div>
            {key < breadcrumbItems.length - 1 && <LuChevronRight size={25} />}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
