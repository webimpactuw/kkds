"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type {
  ClassSchedule,
  DaySchedule,
} from "@/sanity/schemas/classSchedule";

interface WeeklyScheduleProps {
  schedule: ClassSchedule;
}

const DAY_LABEL: Record<string, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

/**
 * Weekly class schedule grid for the /classes page. Figma:
 *   • Section title (Rambla Bold 36-48, maroon, centered)
 *   • "First Day / Last Day" sub-strip (Rambla Bold 32-36, maroon, centered)
 *   • 5-column day grid: Monday · Tuesday · Wednesday · Thursday · Sunday
 *     - Each column: maroon-text day header on top, time slots stacked below
 *     - Cream alternating background per row inside each column
 *   • Responsive:
 *      - lg: 5 cols (Figma)
 *      - md: 2 cols (Mon/Tue, Wed/Thu, Sunday spans 2)
 *      - sm: 1 col (one day after another)
 */
export function WeeklySchedule({ schedule }: WeeklyScheduleProps) {
  return (
    <section className="bg-cream w-full py-16 md:py-24 lg:py-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[136px]">
        <div className="flex flex-col items-center gap-10 lg:gap-12">
          <SectionHeading>{schedule.title}</SectionHeading>

          <div className="grid w-full max-w-[1168px] grid-cols-1 gap-4 sm:grid-cols-2">
            <DateBanner label={schedule.startDateLabel} />
            <DateBanner label={schedule.endDateLabel} />
          </div>

          <div className="grid w-full max-w-[1168px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-2">
            {schedule.days.map((day, i) => (
              <DayColumn key={day.day} day={day} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DateBanner({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-cream border-2 border-maroon/40 rounded-[8px] px-4 py-3 shadow-[0_2px_0_rgba(131,0,51,0.08)]"
    >
      <p className="font-rambla text-maroon text-center text-[18px] font-bold sm:text-[22px] lg:text-[24px]">
        {label}
      </p>
    </motion.div>
  );
}

function DayColumn({ day, index }: { day: DaySchedule; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="flex flex-col rounded-[10px] border-2 border-maroon/40 overflow-hidden shadow-[0_4px_0_rgba(131,0,51,0.12)]"
    >
      <div className="bg-maroon flex h-[56px] items-center justify-center px-3">
        <p className="font-rambla text-body-lg font-bold text-white">
          {DAY_LABEL[day.day] ?? day.day}
        </p>
      </div>
      <ul className="flex flex-col">
        {day.slots.map((slot, i) => (
          <li
            key={i}
            className={`flex min-h-[92px] flex-col items-center justify-center gap-1 border-t border-maroon/25 px-3 py-3 text-center ${
              i % 2 === 0 ? "bg-cream" : "bg-white"
            }`}
          >
            {slot.tbd ? (
              <p className="font-rambla text-body text-maroon italic">
                {slot.tbdLabel ?? `${slot.level} TBD`}
              </p>
            ) : (
              <>
                <p className="font-rambla text-body-lg font-bold text-maroon">
                  {slot.level}
                </p>
                <p className="font-rambla text-body text-ink">
                  {slot.startTime} – {slot.endTime}
                </p>
              </>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
