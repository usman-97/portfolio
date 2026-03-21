import Breadcrumb from "./Breadcrumb";
import FileTab from "./FileTab";

const Editor = ({ children }) => {
  return (
    <main className="bg-obsidian">
      <FileTab />
      <Breadcrumb />
      {children}
    </main>
  );
};

export default Editor;
