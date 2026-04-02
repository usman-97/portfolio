import { FaCodeBranch } from "react-icons/fa";
import { IoCloseCircle, IoWarning } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="col-start-1 col-end-4 bg-midnight">
      <div className="flex justify-between items-center pr-3 pl-12 bg-steel text-silver/60">
        <div className="flex space-x-6 py-2 text-sm bg-steel">
          <div className="flex items-center space-x-2">
            <FaCodeBranch className="text-teal-400" />
            <p>main *</p>
          </div>
          <div className="border-r"></div>
          <div className="flex items-center space-x-2">
            <p>0</p>
            <IoCloseCircle className="text-red-400" />
          </div>
          <div className="border-r"></div>
          <div className="flex items-center space-x-2">
            <p>0</p>
            <IoWarning className="text-amber-400" />
          </div>
        </div>
        <p>Manchester, UK (20:01)</p>
      </div>
      <div className="p-5 text-center">
        <p>Usman Shabir &#169; 2026</p>
      </div>
    </footer>
  );
};

export default Footer;
