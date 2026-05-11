import type { ClassSchedule } from "@/sanity/schemas/classSchedule";

/**
 * Weekly class schedule. Times match the Figma "Classes - Desktop" frame
 * exactly. When the studio updates a slot, this file is the single place to
 * edit (until Sanity is wired up).
 */
export const fallbackClassSchedule: ClassSchedule = {
  title: "2025 - 2026 Weekly Class Schedule",
  startDateLabel: "First Day of Class September 11",
  endDateLabel: "Last Day of Class June 21",
  days: [
    {
      day: "monday",
      slots: [
        { level: "Class Level", startTime: "4:55pm", endTime: "5:55pm" },
        { level: "Class Level", startTime: "4:55pm", endTime: "5:55pm" },
        { level: "Class Level", startTime: "4:55pm", endTime: "5:55pm" },
        { level: "Class Level", startTime: "4:55pm", endTime: "5:55pm" },
      ],
    },
    {
      day: "tuesday",
      slots: [
        { level: "Class Level", startTime: "5:00pm", endTime: "6:00pm" },
        { level: "Class Level", startTime: "6:10pm", endTime: "7:10pm" },
      ],
    },
    {
      day: "wednesday",
      slots: [
        { level: "Class Level", startTime: "4:55pm", endTime: "5:55pm" },
        { level: "Class Level", startTime: "6:10pm", endTime: "7:10pm" },
        { level: "Class Level", startTime: "6:30pm", endTime: "7:30pm" },
      ],
    },
    {
      day: "thursday",
      slots: [
        { level: "Class Level", startTime: "5:00pm", endTime: "6:10pm" },
        { level: "Class Level", startTime: "6:15pm", endTime: "7:15pm" },
        { level: "Class Level", startTime: "7:20pm", endTime: "8:20pm" },
      ],
    },
    {
      day: "sunday",
      slots: [
        { level: "Class Level", startTime: "7:55am", endTime: "8:55am" },
        { level: "Class Level", startTime: "9:10am", endTime: "10:10am" },
        { level: "Class Level", startTime: "10:20am", endTime: "11:20am" },
        { level: "Class Level", startTime: "11:30am", endTime: "12:30pm" },
        { level: "Class Level", startTime: "11:45am", endTime: "12:45am" },
        { level: "Class Level", startTime: "12:45pm", endTime: "1:45pm" },
        {
          level: "College Student Batch",
          startTime: "",
          endTime: "",
          tbd: true,
          tbdLabel: "College Student Batch TBD",
        },
      ],
    },
  ],
};
