import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

const AnimatedPage = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 10 }}
      transition={{
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage; 