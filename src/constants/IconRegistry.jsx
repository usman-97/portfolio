// iconRegistry.js
import { LuFolderCode } from "react-icons/lu";
import { FaFolderOpen, FaReact, FaReadme } from "react-icons/fa";
import { BsCss } from "react-icons/bs";
import { VscFile } from "react-icons/vsc";

export const ICON_MAP = {
  src: <LuFolderCode />,
  projects: <FaFolderOpen />,
  react: <FaReact />,
  readme: <FaReadme />,
  css: <BsCss />,
  defaultFile: <VscFile />,
  defaultFolder: <FaFolderOpen />,
};
