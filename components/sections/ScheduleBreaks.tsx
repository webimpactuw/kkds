"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ScheduleBreak } from "@/sanity/schemas/scheduleBreak";

interface ScheduleBreaksProps {
  breaks: ScheduleBreak[];
  /** Heading text. Defaults to "2025 - 2026 Breaks". */
  title?: string;
}

/**
 * Row of break tiles. Figma:
 *   • Section title (Rambla Bold 32+, maroon, centered)
 *   • 5 evenly-spaced tiles each containing a title + date range
 */
export function ScheduleBreaks({
  breaks,
  title = "2025 - 2026 Breaks",
}: ScheduleBreaksProps) {
  return (
    <section className="bg-cream w-full pb-16 md:pb-24 lg:pb-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[136px]">
        <div className="flex flex-col items-center gap-10 lg:gap-12">
          <SectionHeading as="h3">{title}</SectionHeading>
          <div className="grid w-full max-w-[1168px] grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {breaks.map((b, i) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="bg-cream border-2 border-maroon/40 rounded-[10px] px-4 py-4 text-center shadow-[0_4px_0_rgba(131,0,51,0.12)]"
              >
                <p className="font-rambla text-maroon text-body-lg font-bold">
                  {b.title}
                </p>
                <p className="font-rambla text-body text-ink/80 mt-1">
                  {b.dateRange}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
