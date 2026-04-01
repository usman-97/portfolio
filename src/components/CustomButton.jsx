import { Link } from "react-router-dom";

const CustomButton = ({ link, backgroundColour, colour, icon, label }) => {
  return (
    <Link to={link} target="_blank">
      <button
        className={`flex items-center justify-center gap-1 py-3 px-5 ${backgroundColour} rounded-sm cursor-pointer`}
      >
        <span className="mb-1 shrink-0">{icon}</span>
        <a className={`text-lg font-semibold ${colour}`}>{label}</a>
      </button>
    </Link>
  );
};

export default CustomButton;
