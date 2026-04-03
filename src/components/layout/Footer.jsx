import { FaCodeBranch } from "react-icons/fa";
import { IoCloseCircle, IoWarning } from "react-icons/io5";
import { getZoneTime, getYear } from "../../utils/dateUtil";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="col-start-1 col-end-4 bg-midnight">
      <div className="flex flex-col justify-between items-center pr-3 pl-12 bg-steel text-silver/60 md:flex-row">
        <div className="flex space-x-6 py-2 text-sm bg-steel">
          <div className="flex items-center space-x-2">
            <FaCodeBranch className="text-teal-400" />
            <p className="text-teal-400">main *</p>
          </div>
          <div className="border-r border-white/10"></div>
          <div className="flex items-center space-x-2">
            <p>0</p>
            <IoCloseCircle className="text-red-400" />
          </div>
          <div className="border-r border-white/10"></div>
          <div className="flex items-center space-x-2">
            <p>0</p>
            <IoWarning className="text-amber-400" />
          </div>
        </div>
        <div className="flex items-center gap-1 mb-1 md:mb-0">
          <FaLocationDot size={12} />
          <p>Manchester, UK ({getZoneTime("Europe/London")})</p>
        </div>
      </div>
      <div className="p-5 text-xs text-center">
        <p>Usman Shabir &#169; {getYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
