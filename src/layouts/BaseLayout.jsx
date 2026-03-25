import { Outlet } from "react-router-dom";
import Editor from "../components/layout/Editor";
import Header from "../components/layout/Header";
import LeftPanel from "../components/layout/LeftPanel";
import SideNavBar from "../components/layout/SideNavBar";
import Terminal from "../components/layout/Terminal";
import { useState } from "react";
import { FaCodeBranch } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import Footer from "../components/layout/Footer";

const BaseLayout = () => {
  const [activeFile, setActiveFile] = useState("Home.jsx");

  return (
    <>
      <div className="text-silver overflow-hidden min-h-screen md:grid md:grid-cols-[3rem_16rem_1fr] md:grid-rows-[auto_1fr_auto_auto] md:overflow-auto lg:grid-rows-[auto_1fr_22rem_8rem]">
        <Header />
        <LeftPanel />
        <SideNavBar setActiveFile={setActiveFile} />
        <Editor>
          <Outlet />
        </Editor>
        <Terminal activeFile={activeFile} />
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
