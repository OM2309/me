"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  type Variants,
  type HTMLMotionProps,
  type Transition,
} from "motion/react";

interface BlurFadeProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number; opacity: number; filter: string; scale?: number };
    visible: { y: number; opacity: number; filter: string; scale?: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
  scale?: number;
}

const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

export default function BlurFade({
  children,
  className,
  variant,
  duration = 0.65,
  delay = 0,
  yOffset = 12,
  inView = true,
  inViewMargin = "-60px",
  blur = "5px",
  scale = 0.985,
  ...props
}: BlurFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin as `${number}px` });
  const shouldAnimate = !inView || inViewResult;

  const defaultVariants: Variants = {
    hidden: {
      y: yOffset,
      opacity: 0,
      filter: `blur(${blur})`,
      scale,
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
    },
  };

  const combinedVariants = variant || defaultVariants;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={combinedVariants}
      transition={{
        delay,
        duration,
        ease: EASE,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
