import { useParams } from "react-router-dom";
import { fileContents } from "../data/fileContents";
import { MdLiveTv } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import CustomButton from "../components/CustomButton";
import Section from "../components/layout/Section";

const ProjectsPage = () => {
  const { projectId } = useParams();
  const content = fileContents?.projects?.[projectId];

  return (
    <div className="mx-14 mt-5 font-sans">
      <h2 className="pb-1 text-emerald text-3xl font-extrabold border-b border-emerald/60">
        {content.name}
      </h2>
      <div className="flex space-x-8 pt-4">
        <div className="flex flex-col space-y-6 w-full">
          <img src={content.image} alt={content.name} className="rounded-lg" />
          <div className="flex justify-evenly items-center">
            <CustomButton
              backgroundColour="bg-forest"
              colour="text-obsidian"
              icon={<MdLiveTv size={20} className="text-obsidian" />}
              link={content.demoLink}
              label="Demo"
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
        <div className="flex flex-col space-y-3">
          <p>{content.description}</p>
          <Section heading="Challenge" text={content.challenge} />
          <Section heading="Solution" text={content.solution} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
