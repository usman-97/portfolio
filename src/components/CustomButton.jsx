const CustomButton = ({ backgroundColour, colour, icon }) => {
  return (
    <button
      className={`flex items-center justify-center gap-1 py-3 px-5 ${backgroundColour} rounded-sm cursor-pointer`}
    >
      <span className="mb-1 shrink-0">{icon}</span>
      <span className={`text-lg font-semibold ${colour}`}>Demo</span>
    </button>
  );
};

export default CustomButton;
