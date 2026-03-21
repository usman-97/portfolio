import { LuChevronRight } from "react-icons/lu";

const Breadcrumb = () => {
  return (
    <div className="flex items-center mt-1 ml-5 text-xs text-silver/50">
      <p>src</p>
      <LuChevronRight size={25} />
      <p>Home.jsx</p>
    </div>
  );
};

export default Breadcrumb;
