import { LuChevronRight } from "react-icons/lu";

const TerminalCommand = ({ command, tag, showCursor }) => {
  return (
    <div className="flex items-center text-sm">
      <LuChevronRight size={20} className="text-emerald/50" />
      <span className="pr-2 text-emerald/50">{tag}</span>
      {command && <span className="text-silver/80">{command}</span>}
      {showCursor && (
        <div className="w-2 h-4 bg-emerald animate-[pulse_1.2s_infinite]"></div>
      )}
    </div>
  );
};

export default TerminalCommand;
