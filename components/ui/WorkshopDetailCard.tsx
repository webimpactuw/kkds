"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { ImageWithFallback } from "./ImageWithFallback";
import type { Workshop } from "@/sanity/schemas/workshop";

interface WorkshopDetailCardProps {
  workshop: Workshop;
  index?: number;
}

/**
 * Horizontal workshop card for the /events page. Identical layout to
 * `EventDetailCard` minus the location row and with a "Sign Up" button.
 */
export function WorkshopDetailCard({
  workshop,
  index = 0,
}: WorkshopDetailCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="bg-class-level-gradient flex flex-col items-stretch gap-6 rounded-[10px] p-6 drop-shadow-[0_4px_2px_rgba(0,0,0,0.25)] md:gap-9 md:p-9 lg:flex-row lg:items-center"
    >
      <ImageWithFallback
        src={workshop.image.url}
        alt={workshop.image.alt ?? workshop.title}
        sizes="(max-width: 1024px) 90vw, 381px"
        wrapperClassName="aspect-[381/281] w-full rounded-[8px] bg-cream lg:w-[381px] lg:shrink-0"
        className="rounded-[8px]"
      />
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
            <h3 className="font-rambla text-body-lg font-bold text-maroon">
              {workshop.title}
            </h3>
            <p className="font-rambla text-body text-maroon">
              {workshop.dateLabel}
            </p>
          </div>
          <p className="font-rambla text-body text-ink/90">
            {workshop.description}
          </p>
        </div>
        {workshop.signUpUrl && (
          <div className="flex justify-start">
            <Button href={workshop.signUpUrl} external>
              Sign Up
            </Button>
          </div>
        )}
      </div>
    </motion.article>
  );
}
