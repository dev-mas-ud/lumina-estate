"use client";

import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion.create(Box);

export function SlideIn({
  isImage = false,
  isLoaded = false,
  direction = "up",
  children,
  ...props
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // direction mapping
  const directionMap = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  };

  const initial = { opacity: 0, ...directionMap[direction] };
  const animate = { opacity: 1, x: 0, y: 0 };

  const animationState =
    inView && !isImage
      ? animate
      : inView && isImage && isLoaded
      ? animate
      : initial;

  return (
    <MotionBox
      ref={ref}
      initial={initial}
      animate={animationState}
      transition={{ duration: 0.6, ease: "easeOut" }}
      {...props}
    >
      {children}
    </MotionBox>
  );
}

export { MotionBox };
