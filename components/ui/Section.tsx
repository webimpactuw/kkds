"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  /** Optional id used for in-page nav (e.g. #contact). */
  id?: string;
  /** Disable the framer-motion entrance animation for this section. */
  noAnimate?: boolean;
  /** Render as a different element (default: `section`). */
  as?: "section" | "header" | "footer" | "div";
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Page section with scroll-triggered fade-up entrance animation.
 * Wraps every named section in `components/sections/` for consistency.
 *
 * Applies the Figma vertical rhythm:
 *   mobile  py-16  ·  tablet py-24  ·  desktop py-[72px]
 * Horizontal padding is intentionally NOT set here — wrap children in
 * `<Container>` so backgrounds bleed full-width while content stays centered.
 */
export function Section({
  children,
  className,
  id,
  noAnimate = false,
  as = "section",
}: SectionProps) {
  const MotionTag = motion[as];
  const inner = (
    <MotionTag
      id={id}
      className={cn(
        "relative w-full py-16 md:py-24 lg:py-[72px]",
        className,
      )}
      initial={noAnimate ? false : "hidden"}
      whileInView={noAnimate ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
      variants={noAnimate ? undefined : sectionVariants}
    >
      {children}
    </MotionTag>
  );
  return inner;
}
