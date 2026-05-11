import type { ScheduleBreak } from "@/sanity/schemas/scheduleBreak";

export const fallbackScheduleBreaks: ScheduleBreak[] = [
  { id: "b1", title: "Thanksgiving Break", dateRange: "Nov 27 - Nov 30", order: 0 },
  { id: "b2", title: "First Winter Break", dateRange: "Dec 23 - Jan 4", order: 1 },
  { id: "b3", title: "Second Winter Break", dateRange: "Feb 15 - Feb 21", order: 2 },
  { id: "b4", title: "Third Winter Break", dateRange: "Apr 12 - Apr 18", order: 3 },
  { id: "b5", title: "Memorial Day Weekend", dateRange: "May 23 - May 25", order: 4 },
];
