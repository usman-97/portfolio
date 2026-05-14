import { Outlet, useLocation } from "react-router-dom";
import Editor from "../components/layout/Editor";
import Header from "../components/layout/Header";
import LeftPanel from "../components/layout/LeftPanel";
import SideNavBar from "../components/layout/SideNavBar";
import Terminal from "../components/layout/Terminal";
import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import { useMobile } from "../hooks/useMobile";
import { getActiveFileFromPath } from "../utils/navigationUtil";
import { useContentContext } from "../contexts/ContentContext";
import BottomPanel from "../components/layout/BottomPanel";
import CustomToast from "../components/CustomToast";

const BaseLayout = () => {
  const { navItems, files } = useContentContext();
  const location = useLocation();
  const isMobile = useMobile(768);
  const [activeFile, setActiveFile] = useState(null);
  const [hideTerminal, setHideTerminal] = useState(false);
  const [showNavbar, setShowNavbar] = useState(!isMobile);
  const [showGitView, setShowGitView] = useState(false);

  useEffect(() => {
    setShowNavbar(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    if (!navItems || navItems.length === 0) return;
    const activeItem = navItems.find(
      (item) => item.route === location.pathname,
    );

    if (activeItem) {
      let fileName = activeItem.name;
      if (activeItem.type === "file" && activeItem.parentId !== "src") {
        const parentItem = navItems.find((i) => i.name === activeItem.parentId);
        if (parentItem) fileName = parentItem.name;
      }
      setActiveFile(fileName);
      const currentFileConfig = files[fileName];

      if (currentFileConfig) {
        setHideTerminal(
          !currentFileConfig.showTerminal ||
            currentFileConfig.showTerminal === false,
        );
        setShowGitView(
          currentFileConfig && currentFileConfig.showGitView === true,
        );
      }
    } else {
      setActiveFile("Home.jsx");
      setHideTerminal(false);
    }
  }, [location.pathname, navItems, files]);

  return (
    <>
      <div className="text-silver overflow-hidden min-h-screen lg:grid lg:grid-cols-[3rem_20rem_1fr] lg:grid-rows-[auto_auto_1fr_8rem] 2xl:grid-rows-[3rem_25rem_25rem_8rem]">
        <Header showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
        <LeftPanel />
        <SideNavBar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
        <Editor hideBottomPanel={hideTerminal && !showGitView}>
          <Outlet />
        </Editor>
        <BottomPanel
          activeFile={activeFile}
          hideTerminal={hideTerminal}
          showGitView={showGitView}
        />
        <CustomToast />
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
