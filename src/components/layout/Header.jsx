import { X, Square, Minus, Search } from "lucide-react";
import IconButton from "../IconButton";

const Header = () => {
  return (
    <header className="col-span-3 pl-14 bg-steel text-silver font-sans">
      <div className="flex justify-between items-center">
        <h1 className="font-bold tracking-wider">Project - Portfolio</h1>
        <form className="py-2">
          <div className="flex pr-2 items-center bg-silver rounded-sm">
            <input
              type="text"
              placeholder="Search . . ."
              className="px-2 py-1 bg-transparent text-obsidian placeholder:text-steel/50 rounded-sm outline-none"
            />
            <Search className="text-steel cursor-pointer" />
          </div>
        </form>
        <div className="flex pr-2">
          <IconButton>
            <Minus />
          </IconButton>
          <IconButton>
            <Square className="h-5" />
          </IconButton>
          <IconButton hoverBgClass="hover:bg-red-500/50">
            <X />
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
