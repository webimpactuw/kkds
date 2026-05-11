"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ClassCard } from "@/components/ui/ClassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ClassOffering } from "@/sanity/schemas/classOffering";

interface ClassesOfferedProps {
  offerings: ClassOffering[];
  /** CTA destination — defaults to /classes. */
  enrollHref?: string;
}

/**
 * Home page "Classes Offered" grid. Figma:
 *   • bg cream→peach top→bottom gradient
 *   • Section heading + 3 ClassCards + Enroll Now button
 *   • Cards: row on desktop, column on mobile, 2-col on tablet
 */
export function ClassesOffered({
  offerings,
  enrollHref = "/classes",
}: ClassesOfferedProps) {
  return (
    <section className="bg-section-warm-gradient w-full py-16 md:py-24 lg:py-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[136px]">
        <div className="flex flex-col items-center gap-12 lg:gap-16">
          <SectionHeading>Classes Offered</SectionHeading>

          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {offerings.map((offering, i) => (
              <div key={offering.id} className="flex justify-center">
                <ClassCard offering={offering} index={i} />
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button href={enrollHref}>Enroll Now</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
