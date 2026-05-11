import type { Workshop } from "@/sanity/schemas/workshop";

export const fallbackWorkshops: Workshop[] = [
  {
    id: "workshop-abhinaya",
    title: "Abhinaya Intensive",
    date: "2026-07-12T10:00:00-07:00",
    dateLabel: "July 12, 2026",
    description:
      "A weekend workshop focused on facial expression, hand gestures, and the storytelling traditions of Kuchipudi. Open to intermediate and advanced students by registration.",
    image: {
      url: "/images/workshops/workshop-sample.png",
      alt: "Abhinaya Intensive workshop",
    },
    signUpUrl: "#",
    upcoming: true,
    order: 0,
  },
  {
    id: "workshop-rhythm",
    title: "Rhythm & Konnakol Workshop",
    date: "2026-09-21T11:00:00-07:00",
    dateLabel: "September 21, 2026",
    description:
      "Explore the rhythmic foundation of Kuchipudi through konnakol (vocal percussion) and adavu pattern work. Suitable for all levels — bring curiosity and an empty stomach for chai.",
    image: {
      url: "/images/workshops/workshop-sample.png",
      alt: "Rhythm & Konnakol Workshop",
    },
    signUpUrl: "#",
    upcoming: true,
    order: 1,
  },
];
