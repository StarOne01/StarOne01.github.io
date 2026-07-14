"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef, MouseEvent, HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface MagneticProps extends Omit<HTMLAttributes<HTMLElement>, "ref" | "onClick" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration" | "onDrag" | "onDragEnd" | "onDragStart"> {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "div" | "a";
  href?: string;
  onClick?: () => void;
}

export default function Magnetic({
  children,
  className,
  strength = 0.35,
  as = "div",
  href,
  onClick,
  ...rest
}: MagneticProps) {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.3 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const props = {
    ref: ref as React.Ref<HTMLElement>,
    onMouseMove: handleMove,
    onMouseLeave: reset,
    className: cn("inline-block", className),
    style: { x: sx, y: sy },
    onClick,
    ...rest,
  } as const;

  if (as === "a") return <motion.a {...(props as React.ComponentProps<typeof motion.a>)} href={href}>{children}</motion.a>;
  if (as === "button") return <motion.button {...(props as React.ComponentProps<typeof motion.button>)}>{children}</motion.button>;
  return <motion.div {...(props as React.ComponentProps<typeof motion.div>)}>{children}</motion.div>;
}
