"use client";

import { motion } from "framer-motion";
import { ImageWithFallback } from "./ImageWithFallback";
import type { Instructor } from "@/sanity/schemas/instructor";

interface InstructorCardProps {
  instructor: Instructor;
  /** Card variant. `youth` is the large bio card, `assistant` is compact. */
  variant: "youth" | "assistant";
  index?: number;
}

/**
 * Two Figma variants:
 *
 *   youth     →  Big card: 437×541 (image + maroon name strip + cream bio)
 *   assistant →  Compact:  256×375 (image + maroon name strip)
 */
export function InstructorCard({
  instructor,
  variant,
  index = 0,
}: InstructorCardProps) {
  const isYouth = variant === "youth";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      whileHover={{ y: -4 }}
      className="flex w-full flex-col rounded-[10px] drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)]"
    >
      <ImageWithFallback
        src={instructor.photo.url}
        alt={instructor.photo.alt ?? instructor.name}
        sizes={isYouth ? "(max-width: 768px) 90vw, 437px" : "(max-width: 768px) 80vw, 256px"}
        wrapperClassName={`w-full rounded-t-[10px] bg-cream ${isYouth ? "aspect-[437/334]" : "aspect-[256/322]"}`}
        className="rounded-t-[10px]"
      />
      <div
        className={`bg-maroon flex w-full items-center justify-center p-3 ${
          isYouth ? "" : "rounded-b-[10px]"
        }`}
      >
        <h3 className="font-rambla text-body-lg text-center font-bold text-white">
          {instructor.name}
        </h3>
      </div>
      {isYouth && (
        <div className="bg-cream flex flex-1 items-center justify-center rounded-b-[10px] p-6">
          <p className="font-rambla text-body text-center text-ink">
            {instructor.bio}
          </p>
        </div>
      )}
    </motion.article>
  );
}
