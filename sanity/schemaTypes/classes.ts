import { defineArrayMember, defineField, defineType } from "sanity";
import { imageField } from "./shared";

export const classOffering = defineType({
  name: "classOffering",
  title: "Class Offering",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "level",
      title: "Level",
      type: "string",
      options: {
        list: [
          { title: "Beginner", value: "beginner" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Advanced", value: "advanced" },
        ],
      },
    }),
    defineField({ name: "description", title: "Description", type: "text" }),
    imageField("image", "Image"),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
  preview: { select: { title: "title", subtitle: "level", media: "image" } },
});

export const classSchedule = defineType({
  name: "classSchedule",
  title: "Class Schedule",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({
      name: "startDateLabel",
      title: "First Day of Class label",
      type: "string",
    }),
    defineField({
      name: "endDateLabel",
      title: "Last Day of Class label",
      type: "string",
    }),
    defineField({
      name: "days",
      title: "Day schedules",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "daySchedule",
          fields: [
            defineField({
              name: "day",
              title: "Day",
              type: "string",
              options: {
                list: [
                  "monday",
                  "tuesday",
                  "wednesday",
                  "thursday",
                  "friday",
                  "saturday",
                  "sunday",
                ],
              },
            }),
            defineField({
              name: "slots",
              title: "Class slots",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  name: "classSlot",
                  fields: [
                    defineField({ name: "level", title: "Level label", type: "string" }),
                    defineField({ name: "startTime", title: "Start time", type: "string" }),
                    defineField({ name: "endTime", title: "End time", type: "string" }),
                    defineField({ name: "tbd", title: "TBD row?", type: "boolean" }),
                    defineField({ name: "tbdLabel", title: "TBD label", type: "string" }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: { select: { title: "title" } },
});

export const scheduleBreak = defineType({
  name: "scheduleBreak",
  title: "Schedule Break",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "dateRange", title: "Date range", type: "string" }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
});
