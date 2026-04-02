import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const BulletPointList = ({ title, list }) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-emerald font-semibold">{title}</h3>
      <motion.ul
        className="ml-5 list-disc list-outside space-y-2"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {list.map((listItem, i) => {
          return (
            <motion.li key={i} variants={item}>
              {listItem.point && (
                <span className="font-semibold">{listItem.point}: </span>
              )}
              <span>{listItem.detail}</span>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default BulletPointList;
