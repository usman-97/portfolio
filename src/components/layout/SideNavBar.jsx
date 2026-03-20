import { ChevronDown, ChevronRight } from "lucide-react";
import { LuFolderCode } from "react-icons/lu";
import { FaReact, FaFolderOpen, FaReadme } from "react-icons/fa";
import { BsCss } from "react-icons/bs";
import { Link } from "react-router-dom";

const SideNavBar = () => {
  return (
    <nav className="row-start-2 row-end-4 bg-midnight text-silver font-mono">
      <div className="flex items-center p-2 border-b-2 border-b-steel">
        <h2 className="text-sm uppercase">Explorer</h2>
      </div>
      <div className="mt-2 pl-2 pr-4 text-xs">
        <div className="flex items-end">
          <ChevronDown />
          <p className="uppercase font-medium">Portfolio</p>
        </div>
        <div className="flex pl-6 pr-4 py-1.5 items-center space-x-1 font-medium">
          <ChevronDown />
          <LuFolderCode />
          <p>src</p>
        </div>
        <div className="flex pl-10 pr-4 py-1.5 items-center space-x-1">
          <FaReact />
          <p>Home.jsx</p>
        </div>
        <div className="flex pl-10 pr-4 py-1.5 items-center space-x-1 font-medium">
          <ChevronDown />
          <FaFolderOpen />
          <p>projects</p>
        </div>
        <div className="flex pl-14 pr-4 py-1.5 items-center space-x-1">
          <FaReadme />
          <p>App1.md</p>
        </div>
        <div className="flex pl-14 pr-4 py-1.5 items-center space-x-1">
          <FaReadme />
          <p>App2.md</p>
        </div>
        <div className="flex pl-10 pr-4 py-1.5 items-center space-x-1">
          <BsCss />
          <p>contact.css</p>
        </div>
      </div>
    </nav>
  );
};

export default SideNavBar;
