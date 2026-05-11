import type { ClassLevelDetail } from "@/sanity/schemas/classLevel";

/**
 * Long-form descriptions used by the /classes page's "Class Levels" section.
 * Each entry renders a horizontal Class Level Card (image + name + body).
 */
export const fallbackClassLevels: ClassLevelDetail[] = [
  {
    id: "level-beginner",
    level: "beginner",
    name: "Beginner",
    description:
      "Foundational adavus, hand gestures (hastas), and rhythmic patterns introduce students to the Kuchipudi vocabulary. Emphasis on posture, balance, and joyful movement makes this the perfect entry point for new dancers.",
    image: {
      url: "/images/classes/level-beginner.png",
      alt: "Beginner Kuchipudi class footage",
    },
    order: 0,
  },
  {
    id: "level-intermediate",
    level: "intermediate",
    name: "Intermediate",
    description:
      "Longer adavu combinations, mukhajaathis, and the start of expressive abhinaya. Students learn classical Telugu compositions, expand their stamina, and grow comfortable performing in front of others.",
    image: {
      url: "/images/classes/level-beginner.png",
      alt: "Intermediate Kuchipudi class footage",
    },
    order: 1,
  },
  {
    id: "level-advanced",
    level: "advanced",
    name: "Advanced",
    description:
      "Repertoire, stage craft, and choreography for festivals, performances, and arangetrams. Advanced dancers refine artistry, deepen expressive range, and step into solo work.",
    image: {
      url: "/images/classes/level-beginner.png",
      alt: "Advanced Kuchipudi class footage",
    },
    order: 2,
  },
];
