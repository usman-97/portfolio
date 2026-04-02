import { useParams } from "react-router-dom";
import { fileContents } from "../data/fileContents";
import { MdLiveTv } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import CustomButton from "../components/CustomButton";
import TechStack from "../components/layout/projects/TechStack";
import { motion } from "motion/react";
import BulletPointList from "../components/layout/BulletPointList";

const ProjectsPage = () => {
  const { projectId } = useParams();
  const generalContent = fileContents?.projects;
  const content = generalContent?.[projectId];

  return (
    <div className="flex flex-col gap-3 mx-14 mt-5 font-sans">
      <h2 className="pb-1 text-emerald text-3xl font-extrabold border-b border-emerald/60">
        {content.name}
      </h2>
      <div className="flex space-x-8">
        <div className="flex flex-col space-y-6 w-full">
          <motion.img
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            src={content.image}
            alt={content.name}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col space-y-3 text-[16px]">
          <div className="flex justify-between">
            <TechStack
              techStack={content?.techStack}
              colourList={generalContent?.colourPool}
            />
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
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {content.description}
          </motion.p>
          <BulletPointList title="Key Features" list={content?.features} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
