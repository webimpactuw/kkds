"use client";

import { motion } from "framer-motion";
import { ImageWithFallback } from "./ImageWithFallback";
import { LevelTag } from "./LevelTag";
import type { ClassOffering } from "@/sanity/schemas/classOffering";

interface ClassCardProps {
  offering: ClassOffering;
  /** Index used for staggered entrance animation. */
  index?: number;
}

/**
 * Class Card used on the Home page "Classes Offered" grid.
 *
 * Figma anatomy (top to bottom):
 *   • 256×256 image (rounded top corners)
 *   • LevelTag colored gradient strip with "Beginner / Intermediate / Advanced"
 *   • Cream body panel with description (Rambla Regular 18, ink)
 *   • Drop shadow + lift on hover
 */
export function ClassCard({ offering, index = 0 }: ClassCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="flex w-full flex-col rounded-[10px] drop-shadow-[0px_8px_2px_rgba(0,0,0,0.25)] sm:w-[307px]"
    >
      <ImageWithFallback
        src={offering.image.url}
        alt={offering.image.alt ?? offering.title}
        sizes="(max-width: 640px) 90vw, 307px"
        wrapperClassName="aspect-[307/256] w-full rounded-t-[10px] bg-cream"
        className="rounded-t-[10px]"
      />
      <LevelTag>{offering.title}</LevelTag>
      <div className="flex flex-1 items-center justify-center rounded-b-[10px] bg-cream p-6">
        <p className="font-rambla text-body text-center text-ink">
          {offering.description}
        </p>
      </div>
    </motion.article>
  );
}
