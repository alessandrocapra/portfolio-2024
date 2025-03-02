import { motion, useInView } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

type ScrollRevealProps = PropsWithChildren<{
  direction?: "left" | "right" | "up" | "down";
}>;

const ScrollReveal = ({ children, direction = "up" }: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });

  return (
    <div className="overflow-hidder">
      <motion.div
        ref={ref}
        initial={{
          opacity: 0,
          y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
          x: direction === "left" ? -40 : direction === "right" ? 40 : 0
        }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : direction === "up" ? 40 : direction === "down" ? -40 : 0,
          x: isInView ? 0 : direction === "left" ? -40 : direction === "right" ? 40 : 0
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollReveal; 
