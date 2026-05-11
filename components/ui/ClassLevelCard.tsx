"use client";

import { motion } from "framer-motion";
import { ImageWithFallback } from "./ImageWithFallback";
import type { ClassLevelDetail } from "@/sanity/schemas/classLevel";

interface ClassLevelCardProps {
  level: ClassLevelDetail;
  index?: number;
}

/**
 * Horizontal Class Level Card used on the /classes page. Figma:
 *   • bg gradient: orange → cream (left→right)
 *   • Left:  rounded video/image thumbnail (440×292 on desktop)
 *   • Right: name (Montserrat Bold 24, maroon) + description (Rambla Reg 18)
 *   • Soft drop shadow
 *
 * Responsive: stacks vertically on mobile (image on top, text below).
 */
export function ClassLevelCard({ level, index = 0 }: ClassLevelCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="bg-class-level-gradient flex flex-col items-stretch gap-6 rounded-[10px] p-5 drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] md:gap-8 md:p-6 lg:flex-row lg:items-center lg:gap-12"
    >
      <ImageWithFallback
        src={level.image.url}
        alt={level.image.alt ?? `${level.name} class`}
        sizes="(max-width: 1024px) 90vw, 440px"
        wrapperClassName="aspect-[440/292] w-full rounded-[10px] bg-cream lg:w-[440px] lg:shrink-0"
        className="rounded-[10px]"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-4 text-maroon">
        <h3 className="font-montserrat text-body-lg font-bold">{level.name}</h3>
        <p className="font-rambla text-body leading-relaxed text-ink/90 tracking-[0.5px]">
          {level.description}
        </p>
      </div>
    </motion.article>
  );
}
