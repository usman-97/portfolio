import TreeItem from "./nav/TreeItem";
import { navItems } from "../../data/navigation";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useMobile } from "../../hooks/useMobile";
import { IoMdClose } from "react-icons/io";
import { motion } from "motion/react";

const SideNavBar = ({ setActiveFile, showNavbar = true, setShowNavbar }) => {
  const location = useLocation();
  const isMobile = useMobile();

  useEffect(() => {
    const activeItem = navItems.find(
      (item) => item.route === location.pathname,
    );
    if (activeItem) {
      let fileName = activeItem.name;
      if (activeItem.type === "file" && activeItem.parentId !== 2) {
        const parentItem = navItems.find((i) => i.id === activeItem.parentId);
        if (parentItem) fileName = parentItem.name;
      }
      setActiveFile(fileName);
    }
  }, [location.pathname, setActiveFile]);

  useEffect(() => {
    if (isMobile && showNavbar) {
      setShowNavbar(false);
    }
  }, [location.pathname]);

  const handleCloseNavClick = () => {
    setShowNavbar(false);
  };

  return (
    showNavbar && (
      <motion.nav
        className={`row-start-2 row-end-3 pb-5 bg-midnight text-silver/50 font-mono border-r-2 border-steel md:pb-0 lg:row-end-4 ${isMobile ? "fixed inset-0 z-50" : ""}`}
        initial={isMobile ? { opacity: 0, x: -20 } : {}}
        animate={isMobile ? { opacity: 1, x: 0 } : {}}
        transition={isMobile ? { duration: 0.2, ease: "easeOut" } : {}}
      >
        <div className="flex items-center justify-between p-2 border-b-2 border-b-steel">
          <h2 className="text-silver/60! text-sm uppercase">Explorer</h2>
          {isMobile && (
            <button onClick={handleCloseNavClick}>
              <IoMdClose size={25} className="text-emerald/80" />
            </button>
          )}
        </div>
        <div className="mt-2 text-sm">
          {navItems.map((item) => {
            return (
              <TreeItem
                key={item.id}
                item={item}
                isActive={item.route && item.route === location.pathname}
              />
            );
          })}
        </div>
      </motion.nav>
    )
  );
};

export default SideNavBar;
