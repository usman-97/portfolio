import { Outlet } from "react-router-dom";
import Editor from "../components/layout/Editor";
import Header from "../components/layout/Header";
import LeftPanel from "../components/layout/LeftPanel";
import SideNavBar from "../components/layout/SideNavBar";
import Terminal from "../components/layout/Terminal";
import { useState } from "react";

const BaseLayout = () => {
  const [activeFile, setActiveFile] = useState("Home.jsx");

  return (
    <>
      <div className="text-silver overflow-hidden min-h-screen md:grid md:grid-cols-[3rem_16rem_1fr] md:grid-rows-[auto_1fr_auto_1.5rem] md:overflow-auto lg:grid-rows-[auto_1fr_22rem_1.5rem]">
        <Header />
        <LeftPanel />
        <SideNavBar setActiveFile={setActiveFile} />
        <Editor>
          <Outlet />
        </Editor>
        <Terminal activeFile={activeFile} />
        <footer className="col-start-1 col-end-4 bg-midnight">Footer</footer>
      </div>
    </>
  );
};

export default BaseLayout;
