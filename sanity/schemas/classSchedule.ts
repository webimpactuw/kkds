import type { SanitySchema } from "./_shared";

export type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export interface ClassSlot {
  /** Display label (e.g. "Class Level 1" or "Beginner"). */
  level: string;
  /** Start time in 12-h format ("4:55pm"). */
  startTime: string;
  /** End time in 12-h format ("5:55pm"). */
  endTime: string;
  /** If true, render as a placeholder row (e.g. "College Student Batch TBD"). */
  tbd?: boolean;
  /** Override label used when `tbd` is true. */
  tbdLabel?: string;
}

export interface DaySchedule {
  day: Weekday;
  slots: ClassSlot[];
}

export interface ClassSchedule {
  /** Display label for the schedule (e.g. "2025 - 2026 Weekly Class Schedule"). */
  title: string;
  startDateLabel: string;
  endDateLabel: string;
  days: DaySchedule[];
}

export const classScheduleSchema: SanitySchema = {
  name: "classSchedule",
  title: "Class Schedule",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "startDateLabel", title: "First Day of Class label", type: "string" },
    { name: "endDateLabel", title: "Last Day of Class label", type: "string" },
    {
      name: "days",
      title: "Day schedules",
      type: "array",
      of: [
        {
          type: "object",
          // shape captured by the runtime type above
        },
      ],
    },
  ],
};
