import { motion } from "motion/react";
import { forwardRef } from "react";

const Bar = forwardRef(({ h }, ref) => {
  return <motion.div ref={ref} className="bar" style={{ height: `${h}em` }} />;
});

export default Bar;
