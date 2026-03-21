import { IoMdClose } from "react-icons/io";

const FileTab = () => {
  return (
    <div className="flex justify-start border-b border-steel">
      <div className="flex items-center justify-between py-2 pl-3 pr-2 bg-midnight text-sm">
        <span className=" pr-2">Home.jsx</span>
        <IoMdClose size={16} />
      </div>
    </div>
  );
};

export default FileTab;
