import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { imageField } from "./shared";

export const instructor = defineType({
  name: "instructor",
  title: "Instructor",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: [
          { title: "Founder / Lead", value: "founder" },
          { title: "Youth Instructor", value: "youth" },
          { title: "Teaching Assistant", value: "assistant" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title (e.g. Founder & Instructor)",
      type: "string",
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      description:
        "Founder message can be multiple paragraphs. Assistant bios are stored for CMS reference.",
    }),
    imageField("photo", "Portrait", { required: true }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      validation: (rule) => rule.required().min(0),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "role", media: "photo" },
  },
});
