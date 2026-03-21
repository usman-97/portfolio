import { LuChevronDown } from "react-icons/lu";
import { ICON_MAP } from "../../constants/IconRegistry";

const TreeItem = ({ item }) => {
  const isFolder = item.type === "folder" || item.type === "root";
  const icon =
    ICON_MAP[item.icon] ||
    (isFolder ? ICON_MAP.defaultFolder : ICON_MAP.defaultFile);

  return (
    <div
      className="flex items-center py-1.5 space-x-1 hover:bg-steel hover:text-silver cursor-pointer group"
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
        <span className="flex items-center justify-center shrink-0 mr-1 w-6 text-silver/50 group-hover:text-silver">
          {icon}
        </span>
      )}
      <p
        className={`${isFolder ? "font-medium" : "font-normal"} tracking-tight`}
      >
        {item.name}
      </p>
    </div>
  );
};

export default TreeItem;
