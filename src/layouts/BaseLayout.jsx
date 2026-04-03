import { Outlet } from "react-router-dom";
import Editor from "../components/layout/Editor";
import Header from "../components/layout/Header";
import LeftPanel from "../components/layout/LeftPanel";
import SideNavBar from "../components/layout/SideNavBar";
import Terminal from "../components/layout/Terminal";
import { useState } from "react";
import Footer from "../components/layout/Footer";
import { useMobile } from "../hooks/useMobile";
import { navItems } from "../data/navigation";
import { getActiveFileFromPath } from "../utility/navigationUtil";

const BaseLayout = () => {
  const isMobile = useMobile();
  const [activeFile, setActiveFile] = useState(() =>
    getActiveFileFromPath(window.location.pathname, navItems),
  );
  const [hideTerminal, setHideTerminal] = useState(false);
  const [showNavbar, setShowNavbar] = useState(!isMobile);

  return (
    <>
      <div className="text-silver overflow-hidden min-h-screen lg:grid lg:grid-cols-[3rem_20rem_1fr] lg:grid-rows-[auto_auto_1fr_8rem] xl:grid-rows-[3rem_25rem_25rem_8rem]">
        <Header showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
        <LeftPanel />
        <SideNavBar setActiveFile={setActiveFile} showNavbar={showNavbar} />
        <Editor hideTerminal={hideTerminal}>
          <Outlet />
        </Editor>
        <Terminal activeFile={activeFile} setHideTerminal={setHideTerminal} />
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
