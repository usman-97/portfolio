import LogLine from "./LogLine";

const TerminalProcess = ({ logs, ...props }) => {
  return (
    <div className="flex flex-col space-y-2 pb-2 pl-5">
      <div>
        {logs.map((logLine, key) => (
          <LogLine logLine={logLine} key={key} fullPath={props.fullPath} />
        ))}
      </div>
    </div>
  );
};

export default TerminalProcess;
