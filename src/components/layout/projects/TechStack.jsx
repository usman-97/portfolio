import Badge from "../../Badge";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TechStack = ({ techStack, colourList }) => {
  const getRandomStyle = () => {
    return colourList?.[Math.floor(Math.random() * colourList.length)];
  };

  return (
    <div className="flex flex-wrap gap-3 mb-3">
      {techStack.map((stack, i) => {
        return (
          <motion.div
            key={i}
            className="flex flex-col gap-2"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <span
              className="text-silver/80 text-xs text-center uppercase"
              variants={item}
            >
              {stack.area}
            </span>
            {stack.tech.map((tech, j) => {
              const badgeColour = getRandomStyle();
              return (
                <Badge
                  key={`${i}-${j}`}
                  text={tech}
                  bg={badgeColour?.bg}
                  border={badgeColour?.border}
                  pulse={badgeColour?.pulse}
                  colour={badgeColour?.text}
                  animateItem={item}
                />
              );
            })}
          </motion.div>
        );
      })}
    </div>
  );
};

export default TechStack;
