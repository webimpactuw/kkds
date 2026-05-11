import type { SanitySchema } from "./_shared";

export interface ScheduleBreak {
  id: string;
  title: string;
  /** Human-friendly date range (e.g. "Nov 27 - Nov 30"). */
  dateRange: string;
  order: number;
}

export const scheduleBreakSchema: SanitySchema = {
  name: "scheduleBreak",
  title: "Schedule Break",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "dateRange", title: "Date range", type: "string" },
    { name: "order", title: "Display order", type: "number" },
  ],
};
