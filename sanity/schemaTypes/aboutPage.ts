import { DocumentIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "heading",
      title: "Section heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "paragraphs",
      title: "Intro paragraphs",
      type: "array",
      of: [defineArrayMember({ type: "text" })],
      description: "Each item is one paragraph on the About page intro.",
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: { title: "heading" },
  },
});
