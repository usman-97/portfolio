import { X, Square, Minus, Search } from "lucide-react";
import IconButton from "../IconButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMobile } from "../../hooks/useMobile";

const Header = ({ showNavbar, setShowNavbar }) => {
  const isMobile = useMobile();

  return (
    <header className="col-span-3 bg-steel text-silver font-sans md:pl-14">
      <div className="flex justify-between items-center">
        {!isMobile && (
          <h1 className="pl-2 text-silver! font-bold tracking-wider md:pl-0">
            Project - Portfolio
          </h1>
        )}
        {isMobile && (
          <div className="flex items-center pl-2 gap-1">
            <RxHamburgerMenu
              size={20}
              onClick={() => setShowNavbar(!showNavbar)}
            />
            <h1 className="pl-2 text-silver! font-bold tracking-wider md:pl-0">
              Project - Portfolio
            </h1>
          </div>
        )}
        <form className="hidden md:block md:py-2">
          <div className="flex pr-2 items-center bg-silver rounded-sm">
            <input
              type="text"
              placeholder="Search . . ."
              className="px-2 py-1 bg-transparent text-obsidian placeholder:text-steel/50 placeholder:italic rounded-sm outline-none"
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
