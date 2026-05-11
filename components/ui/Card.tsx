"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Apply Figma drop-shadow (default `lg`). */
  shadow?: "lg" | "sm" | "none";
  /** Lift on hover (default true). */
  interactive?: boolean;
}

const shadowClasses = {
  lg: "drop-shadow-[0px_8px_2px_rgba(0,0,0,0.25)]",
  sm: "drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)]",
  none: "",
};

/**
 * Generic card primitive. Provides the Figma drop-shadow + rounded radius and
 * an optional hover lift. Used as the outer shell for Class Card, Youth
 * Instructor Card, Assistant Card, Event Card, Workshop Card, etc.
 */
export function Card({
  children,
  className,
  shadow = "lg",
  interactive = true,
}: CardProps) {
  return (
    <motion.div
      whileHover={interactive ? { y: -4 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "rounded-card overflow-hidden",
        shadowClasses[shadow],
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
