import { defineField } from "sanity";

/** Image field with hotspot cropping and editor-provided alt text. */
export function imageField(
  name: string,
  title: string,
  options?: { description?: string; required?: boolean },
) {
  return defineField({
    name,
    title,
    type: "image",
    description: options?.description,
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Alternative text",
        type: "string",
        description: "Brief description for screen readers and SEO.",
        validation: options?.required
          ? (rule) => rule.required().warning("Alt text improves accessibility")
          : undefined,
      }),
    ],
  });
}
