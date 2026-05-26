import { CalendarIcon, ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { imageField } from "./shared";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  icon: CalendarIcon,
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "date", title: "Date (ISO)", type: "datetime" }),
    defineField({ name: "dateLabel", title: "Date label (display)", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    imageField("image", "Image"),
    defineField({ name: "ticketsUrl", title: "Buy Tickets URL", type: "url" }),
    defineField({
      name: "upcoming",
      title: "Upcoming?",
      type: "boolean",
      initialValue: true,
    }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
});

export const workshop = defineType({
  name: "workshop",
  title: "Workshop",
  type: "document",
  icon: CalendarIcon,
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "date", title: "Date (ISO)", type: "datetime" }),
    defineField({ name: "dateLabel", title: "Date label (display)", type: "string" }),
    defineField({ name: "description", title: "Description", type: "text" }),
    imageField("image", "Image"),
    defineField({ name: "signUpUrl", title: "Sign Up URL", type: "url" }),
    defineField({
      name: "upcoming",
      title: "Upcoming?",
      type: "boolean",
      initialValue: true,
    }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
});

export const galleryImage = defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  icon: ImageIcon,
  fields: [
    imageField("image", "Image"),
    defineField({ name: "caption", title: "Caption", type: "text" }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Performance", value: "performance" },
          { title: "Class", value: "class" },
          { title: "Event", value: "event" },
          { title: "Studio", value: "studio" },
          { title: "Other", value: "other" },
        ],
      },
    }),
    defineField({ name: "credit", title: "Credit", type: "string" }),
    defineField({ name: "order", title: "Display order", type: "number" }),
    defineField({ name: "feature", title: "Feature image?", type: "boolean" }),
  ],
  preview: {
    select: { title: "caption", subtitle: "category", media: "image" },
  },
});

export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Question", type: "string" }),
    defineField({ name: "answer", title: "Answer", type: "text" }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
});

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text" }),
    defineField({ name: "author", title: "Author", type: "string" }),
    defineField({ name: "className", title: "Class", type: "string" }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
});

export const announcement = defineType({
  name: "announcement",
  title: "Announcement",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text" }),
    defineField({ name: "date", title: "Date", type: "datetime" }),
    defineField({
      name: "active",
      title: "Active?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "ctaUrl", title: "CTA URL", type: "url" }),
    defineField({ name: "ctaLabel", title: "CTA label", type: "string" }),
  ],
});
