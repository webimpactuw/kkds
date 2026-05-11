import type { ClassOffering } from "@/sanity/schemas/classOffering";

/**
 * The three class cards rendered on the Home page "Classes Offered" section.
 * Each one maps to a Class Card component with a colored label strip.
 */
export const fallbackClassOfferings: ClassOffering[] = [
  {
    id: "beginner",
    title: "Beginner",
    level: "beginner",
    description:
      "Step into the world of Kuchipudi with foundational adavus, posture, and rhythm exercises. Designed for first-time dancers age 5 and up, this class builds technique, musicality, and joy in movement.",
    image: {
      url: "/images/classes/class-beginner.png",
      alt: "Beginner Kuchipudi class",
    },
    order: 0,
  },
  {
    id: "intermediate",
    title: "Intermediate",
    level: "intermediate",
    description:
      "Deepen your practice with extended adavu combinations, jathis, and the beginnings of expressive abhinaya. Students grow their stamina, precision, and emotional range while exploring classical Telugu compositions.",
    image: {
      url: "/images/classes/class-beginner.png",
      alt: "Intermediate Kuchipudi class",
    },
    order: 1,
  },
  {
    id: "advanced",
    title: "Advanced",
    level: "advanced",
    description:
      "Refine artistry, stage presence, and repertoire. Advanced students learn full-length items, work on solo performance, and prepare for arangetrams, festivals, and community performances.",
    image: {
      url: "/images/classes/class-beginner.png",
      alt: "Advanced Kuchipudi class",
    },
    order: 2,
  },
];
