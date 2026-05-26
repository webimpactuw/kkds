import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { imageField } from "./shared";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "studioName",
      title: "Studio name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({ name: "wordmark", title: "Hero wordmark", type: "string" }),
        defineField({ name: "subhead", title: "Hero subheading", type: "string" }),
        defineField({ name: "subtitle", title: "Hero subtitle copy", type: "text" }),
        imageField("image", "Hero image"),
      ],
    }),
    defineField({
      name: "mission",
      title: "Mission statement (home page banner)",
      type: "text",
      description: "Short summary shown on the home page.",
    }),
    defineField({
      name: "contact",
      title: "Contact info",
      type: "object",
      fields: [
        defineField({ name: "email", title: "Studio email", type: "string" }),
        defineField({ name: "phone", title: "Phone", type: "string" }),
        defineField({ name: "address", title: "Address", type: "string" }),
        defineField({ name: "mapUrl", title: "Google Maps URL", type: "url" }),
        defineField({
          name: "hours",
          title: "Studio hours (optional)",
          type: "text",
        }),
      ],
    }),
    defineField({
      name: "social",
      title: "Social links",
      type: "object",
      fields: [
        defineField({ name: "facebookUrl", title: "Facebook URL", type: "url" }),
        defineField({ name: "instagramUrl", title: "Instagram URL", type: "url" }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
