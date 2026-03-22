import { IoMdClose } from "react-icons/io";

const Terminal = () => {
  return (
    <section className="col-start-3 col-end-4 row-start-3 row-end-4 bg-obsidian">
      <div className="flex items-start space-x-10 pl-5 pt-1 bg-midnight border-b border-steel">
        <span className="text-silver/50">Terminal</span>
        <div className="flex items-center space-x-3 border-b-3 border-emerald">
          <span>Local</span>
          <IoMdClose />
        </div>
      </div>
    </section>
  );
};

export default Terminal;
