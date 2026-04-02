import { useParams } from "react-router-dom";
import { fileContents } from "../data/fileContents";
import { MdLiveTv } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import CustomButton from "../components/CustomButton";
import Badge from "../components/Badge";

const ProjectsPage = () => {
  const { projectId } = useParams();
  const generalContent = fileContents?.projects;
  const content = generalContent?.[projectId];

  const getRandomStyle = () => {
    const colourList = generalContent?.colourPool;
    const colour = colourList?.[Math.floor(Math.random() * colourList.length)];
    return colour;
  };

  return (
    <div className="flex flex-col gap-3 mx-14 mt-5 font-sans">
      <h2 className="pb-1 text-emerald text-3xl font-extrabold border-b border-emerald/60">
        {content.name}
      </h2>
      <div className="flex space-x-8">
        <div className="flex flex-col space-y-6 w-full">
          <img src={content.image} alt={content.name} className="rounded-lg" />
        </div>
        <div className="flex flex-col space-y-3 text-[16px]">
          <div className="flex justify-between">
            <div className="flex flex-wrap gap-3 mb-3">
              {content?.techStack.map((stack, i) => {
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <span className="text-xs text-center uppercase">
                      {stack.area}
                    </span>
                    {stack.tech.map((tech, j) => {
                      const badgeColour = getRandomStyle();
                      return (
                        <Badge
                          key={j}
                          text={tech}
                          bg={badgeColour?.bg}
                          border={badgeColour?.border}
                          pulse={badgeColour?.pulse}
                          colour={badgeColour?.text}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end gap-8">
              <CustomButton
                backgroundColour="bg-forest"
                colour="text-obsidian"
                icon={<MdLiveTv size={20} className="text-obsidian" />}
                link={content.demoLink}
                label="Demo"
                border="border border-forest"
              />
              <CustomButton
                backgroundColour="bg-obsidian"
                colour="text-silver"
                icon={<FaGithub size={20} className="text-silver" />}
                link={content.sourceLink}
                label="Source"
                border="border border-silver"
              />
            </div>
          </div>
          <p>{content.description}</p>
          <div className="flex flex-col gap-2">
            <h3>Key Features</h3>
            <ul className="ml-5 list-disc list-outside space-y-2">
              {content?.features.map((feature, i) => {
                return (
                  <li className="">
                    <span className="font-semibold">{feature.feature}: </span>
                    <span>{feature.detail}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
