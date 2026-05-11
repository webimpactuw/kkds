"use client";

import { motion } from "framer-motion";
import { ImageWithFallback } from "./ImageWithFallback";
import type { KkdsEvent } from "@/sanity/schemas/event";

interface EventTileProps {
  event: KkdsEvent;
  /** Visual size — "tall" is the big left card, "short" is the right column. */
  size: "tall" | "short";
  index?: number;
}

/**
 * Compact Home-page event tile. Figma:
 *   • Full-bleed background image
 *   • Translucent gray strip at the bottom holding title + date | location
 *   • Title font: Montserrat Bold 24; meta font: Montserrat Regular 18
 */
export function EventTile({ event, size, index = 0 }: EventTileProps) {
  const isTall = size === "tall";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className={`relative w-full overflow-hidden rounded-[10px] ${
        isTall ? "aspect-[575/555]" : "aspect-[510/262]"
      }`}
    >
      <ImageWithFallback
        src={event.image.url}
        alt={event.image.alt ?? event.title}
        sizes={isTall ? "(max-width: 768px) 100vw, 575px" : "(max-width: 768px) 100vw, 510px"}
        wrapperClassName="absolute inset-0 bg-cream"
      />
      <div className="absolute inset-x-0 bottom-0 bg-[var(--color-event-overlay)] px-7 pb-6 pt-4 backdrop-blur-[2px]">
        <h3 className="font-montserrat text-[22px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] md:text-[24px]">
          {event.title}
        </h3>
        <p className="font-montserrat text-[15px] font-normal text-white/95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] md:text-body">
          {event.dateLabel} | {event.location}
        </p>
      </div>
    </motion.article>
  );
}
