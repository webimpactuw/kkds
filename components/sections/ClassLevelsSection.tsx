"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ClassLevelCard } from "@/components/ui/ClassLevelCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ClassLevelDetail } from "@/sanity/schemas/classLevel";

interface ClassLevelsSectionProps {
  levels: ClassLevelDetail[];
  /** Where the Enroll button leads. Defaults to /contact. */
  enrollHref?: string;
}

/**
 * /classes page "Class Levels" section. Figma:
 *   • Section heading "Class Levels"
 *   • Stack of 3 horizontal ClassLevelCards
 *   • Enroll button centered at the bottom
 *
 * (Per user direction: ship the 3-card stacked version. The Figma also has a
 * carousel variant but the to-do list in the file flags the carousel layout
 * for revision, so the cleaner stack is the canonical layout.)
 */
export function ClassLevelsSection({
  levels,
  enrollHref = "/contact",
}: ClassLevelsSectionProps) {
  return (
    <section className="bg-cream w-full py-16 md:py-24 lg:py-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[136px]">
        <div className="flex flex-col items-center gap-10 lg:gap-12">
          <SectionHeading>Class Levels</SectionHeading>

          <div className="flex w-full max-w-[1168px] flex-col gap-8 lg:gap-12">
            {levels.map((level, i) => (
              <ClassLevelCard key={level.id} level={level} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button href={enrollHref}>Enroll Now</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
