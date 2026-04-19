import { useContentContext } from "../../contexts/ContentContext";
import Breadcrumb from "./Breadcrumb";
import FileTab from "./FileTab";

const Editor = ({ children, hideTerminal }) => {
  // const { files, loading } = useContentContext();
  return (
    <main
      className={`col-start-3 col-end-4 row-start-2 ${hideTerminal ? "row-end-4" : "row-end-3"} bg-obsidian`}
    >
      <FileTab />
      <Breadcrumb />
      {children}
    </main>
  );
};

export default Editor;
