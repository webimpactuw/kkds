import type { Testimonial } from "@/sanity/schemas/testimonial";

export const fallbackTestimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Sushma teaches with such warmth and rigor — my daughter has flourished in every way since starting at Kalamandapam.",
    author: "Parent of a Beginner student",
    className: "Beginner",
    order: 0,
  },
  {
    id: "t2",
    quote:
      "The community here is as beautiful as the dance itself. We have found a second family.",
    author: "Advanced student",
    className: "Advanced",
    order: 1,
  },
];
