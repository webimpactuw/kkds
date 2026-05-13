import type { Faq } from "@/sanity/schemas/faq";

export const fallbackFaqs: Faq[] = [
  {
    id: "faq-age",
    question: "What age groups do you teach?",
    answer:
      "We offer classes for all age groups, from young children to adults. Our programs are tailored to suit different age levels.",
    order: 0,
  },
  {
    id: "faq-experience",
    question: "Do I need prior dance experience?",
    answer:
      "No prior dance experience is necessary for our beginner classes. We welcome all levels of dancers.",
    order: 1,
  },
  {
    id: "faq-attire",
    question: "How can I register for classes?",
    answer:
      "You can register for classes by contacting us through our website or visiting our studio in Redmond.",
    order: 2,
  },
];
