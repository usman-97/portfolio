import { LuChevronDown } from "react-icons/lu";
import { ICON_MAP } from "../../../constants/IconRegistry";
import { Link } from "react-router-dom";

const TreeItem = ({ item, isActive = false }) => {
  const isFolder = item.type === "folder" || item.type === "root";
  const icon =
    ICON_MAP[item.icon] ||
    (isFolder ? ICON_MAP.defaultFolder : ICON_MAP.defaultFile);

  return (
    <Link to={item.route}>
      <div
        className={`flex items-center py-1.5 space-x-1 cursor-pointer group ${isActive ? "bg-emerald-500/10 text-emerald-400 font-medium" : "hover:bg-steel hover:text-silver"}`}
        style={{
          paddingLeft: `${item.level * 12 + 8}px`,
        }}
      >
        <span className="w-5 flex items-center justify-center shrink-0">
          {isFolder && (
            <LuChevronDown
              size={20}
              className="text-silver/30 group-hover:text-silver"
            />
          )}
        </span>
        {item.type !== "root" && (
          <span
            className={`flex items-center justify-center shrink-0 mr-1 w-6 ${isActive ? "text-emerald-400" : "text-silver/50 group-hover:text-silver"}`}
          >
            {icon}
          </span>
        )}
        <p
          className={`${isFolder ? "font-medium" : "font-normal"} tracking-tight`}
        >
          {item.name}
        </p>
      </div>
    </Link>
  );
};

export default TreeItem;
