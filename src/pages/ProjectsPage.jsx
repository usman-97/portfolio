import { useParams } from "react-router-dom";
import { fileContents } from "../data/fileContents";
import { MdLiveTv } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import CustomButton from "../components/CustomButton";
import TechStack from "../components/layout/projects/TechStack";
import { motion } from "motion/react";
import BulletPointList from "../components/layout/BulletPointList";
import { COLOUR_POOL } from "../constants/colourPool";
import { useContentContext } from "../contexts/ContentContext";

const ProjectsPage = () => {
  const { projectId } = useParams();
  const { files, loading } = useContentContext();
  const content = files["projects"]?.projects[projectId];

  return (
    content && (
      <div
        key={projectId}
        className="flex flex-col gap-3 mx-5 mt-5 mb-5 pb-5 font-sans md:mx-14"
      >
        <h2 className="pb-1 text-emerald text-lg font-extrabold border-b border-emerald/60 md:text-3xl">
          {content.name}
        </h2>
        <div className="flex md:space-x-8 lg:flex-col 2xl:flex-row">
          <div className="hidden lg:flex lg:flex-col lg:self-center lg:space-y-6 lg:w-md lg:my-5 2xl:w-full 2xl:self-auto 2xl:my-0">
            <motion.img
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              src={content.image}
              alt={content.name}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-3 text-[16px]">
            <div className="flex flex-col items-start gap-3 md:flex-row md:justify-between md:items-stretch md:gap-0">
              <TechStack
                techStack={content?.techStack}
                colourList={COLOUR_POOL}
              />
              <div className="flex gap-8 justify-end self-center md:self-start">
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
    )
  );
};

export default ProjectsPage;
