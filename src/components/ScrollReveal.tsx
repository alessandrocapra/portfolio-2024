import { motion, useInView } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

type ScrollRevealProps = PropsWithChildren<{
  direction?: "left" | "right" | "up" | "down";
}>;

const ScrollReveal = ({ children, direction = "left" }: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-20% 0px -20% 0px" // Trigger when element is 20% into the viewport
  });

  const directionOffset = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 }
  }[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionOffset }}
      transition={{
        duration: 0.8,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal; 