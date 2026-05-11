import { Link } from "react-router-dom";

const CustomButton = ({
  link,
  backgroundColour,
  colour,
  icon,
  label,
  border,
  duration = "duration-300",
  customStyles = "",
  customLabelStyles = "",
  hoverStyle = "hover:brightness-125 hover:shadow-[0_0_20px_rgba(0,143,93,0.6)]",
  activeStyle = "active:scale-95",
}) => {
  return link ? (
    <Link to={link} target="_blank">
      <button
        className={`flex items-center justify-center gap-1 py-3 px-5 button ${backgroundColour} rounded-sm cursor-pointer ${border} transition-all ${duration} ${hoverStyle} ${activeStyle}`}
      >
        <span className="mb-1 shrink-0">{icon}</span>
        <span className={`text-lg font-semibold ${colour}`}>{label}</span>
      </button>
    </Link>
  ) : (
    <button
      className={`flex ${customStyles} items-center justify-center gap-1 py-3 px-5 button ${backgroundColour} rounded-sm cursor-pointer ${border} transition-all ${duration} ${hoverStyle} ${activeStyle}`}
    >
      {icon && <span className="mb-1 shrink-0">{icon}</span>}
      <span className={`${customLabelStyles} text-lg font-semibold ${colour}`}>
        {label}
      </span>
    </button>
  );
};

export default CustomButton;
