import { ThLargeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { imageField } from "./shared";

export const classLevel = defineType({
  name: "classLevel",
  title: "Class Level",
  type: "document",
  icon: ThLargeIcon,
  fields: [
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "name",
      title: "Display name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    imageField("image", "Thumbnail / poster image", {
      description: "Poster shown before the class demo video plays.",
    }),
    defineField({
      name: "video",
      title: "Class demo video",
      type: "file",
      options: { accept: "video/*" },
      description: "Optional MP4 demo for this level. Upload in Studio or via seed.",
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      validation: (rule) => rule.required().min(0),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "level", media: "image" },
  },
});
