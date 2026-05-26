"use client";

import { motion } from "framer-motion";
import { ClassLevelVideo } from "./ClassLevelVideo";
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
 */
export function ClassLevelCard({ level, index = 0 }: ClassLevelCardProps) {
  const descriptionParagraphs = level.description.split(/\n\s*\n/);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="bg-class-level-gradient flex flex-col items-stretch gap-6 rounded-[10px] p-5 drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] md:gap-8 md:p-6 lg:flex-row lg:items-center lg:gap-12"
    >
      <div className="aspect-[440/292] w-full overflow-hidden rounded-[10px] bg-cream lg:w-[440px] lg:shrink-0">
        {level.videoUrl ? (
          <ClassLevelVideo
            src={level.videoUrl}
            poster={level.image.url}
            title={level.name}
            className="rounded-[10px]"
          />
        ) : (
          <ImageWithFallback
            src={level.image.url}
            alt={level.image.alt ?? `${level.name} class`}
            sizes="(max-width: 1024px) 90vw, 440px"
            wrapperClassName="size-full"
            className="rounded-[10px]"
          />
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-4 text-maroon">
        <h3 className="font-montserrat text-body-lg font-bold">{level.name}</h3>
        <div className="flex flex-col gap-4">
          {descriptionParagraphs.map((paragraph, i) => (
            <p
              key={i}
              className="font-rambla text-body leading-relaxed text-ink/90 tracking-[0.5px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
