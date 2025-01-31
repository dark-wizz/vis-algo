import { motion } from "motion/react";

const Bar = ({ h, id }) => {
  return <motion.div className={`bar b${id}`} style={{ height: `${h}em` }} />;
};

export default Bar;
