import { IoMdClose } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { navItems } from "../../data/navigation";

const FileTab = () => {
  const location = useLocation();
  const currentPageItem = navItems.find(
    (item) => item.route === location.pathname,
  );
  return (
    <div className="flex justify-start border-b border-steel">
      <div className="flex items-center justify-between py-2 pl-3 pr-2 bg-midnight text-sm">
        <span className="pr-2 text-silver/60">{currentPageItem?.name}</span>
        <IoMdClose size={16} />
      </div>
    </div>
  );
};

export default FileTab;
