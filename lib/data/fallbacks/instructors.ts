import type { Instructor } from "@/sanity/schemas/instructor";

/**
 * Instructor and Teaching Assistant fallback data. Photos reference the
 * Figma-exported placeholder slots in /public/images/instructors/. Replace
 * with real portraits via Sanity when the studio is wired up.
 */
export const fallbackInstructors: Instructor[] = [
  {
    id: "sushma",
    name: "Sushma",
    role: "founder",
    title: "Founder & Instructor",
    bio:
      "Welcome to Kalamandapam Kuchipudi Dance School, a vibrant cultural hub based in Sammamish, dedicated to preserving and promoting the classical Indian dance form of Kuchipudi. Our school offers a nurturing environment where students of all ages, starting from 5 years onwards, can immerse themselves in the rich traditions and expressive beauty of Kuchipudi.\n\nOur classes are designed to cater to all levels, from beginners to advanced dancers. Whether you are looking to explore a new art form, deepen your understanding of Indian culture, or pursue a serious study of dance, Kalamandapam is the perfect place to start your journey.\n\nJoin us at Kalamandapam Kuchipudi Dance School and become part of a community that celebrates the joy of dance and the beauty of Indian classical arts. We look forward to welcoming you and your family to our dance family.",
    photo: {
      url: "/images/instructors/sushma.png",
      alt: "Sushma, Founder & Instructor at Kalamandapam",
    },
    specialties: ["Kuchipudi", "Choreography", "Bhakti Margam"],
    order: 0,
  },

  /* ---------- Youth Instructors ---------- */
  {
    id: "youth-anika",
    name: "Anika Yechuri",
    role: "youth",
    title: "Youth Instructor",
    bio:
      "Anika has been training in Kuchipudi for over a decade and now shares her passion with the next generation of dancers. She focuses on adavu fundamentals, expressive abhinaya, and helping students build confidence on and off the stage.",
    photo: {
      url: "/images/instructors/youth-anika.png",
      alt: "Anika Yechuri — Youth Instructor",
    },
    specialties: ["Adavus", "Abhinaya", "Performance prep"],
    order: 0,
  },
  {
    id: "youth-second",
    name: "Riya Sharma",
    role: "youth",
    title: "Youth Instructor",
    bio:
      "Riya joined Kalamandapam as a young student and now leads beginner youth classes. Her gentle pacing and deep knowledge of foundational Kuchipudi vocabulary make her a favorite among new students.",
    photo: {
      url: "/images/instructors/youth-anika.png",
      alt: "Riya Sharma — Youth Instructor",
    },
    specialties: ["Beginner technique", "Rhythm training"],
    order: 1,
  },

  /* ---------- Teaching Assistants ---------- */
  ...Array.from({ length: 8 }).map<Instructor>((_, i) => ({
    id: `assistant-${i + 1}`,
    name: [
      "Aanya Kumar",
      "Meera Iyer",
      "Diya Patel",
      "Kavya Reddy",
      "Saanvi Rao",
      "Ishani Menon",
      "Aditi Shah",
      "Priya Nair",
    ][i] ?? `Assistant ${i + 1}`,
    role: "assistant",
    title: "Teaching Assistant",
    bio:
      "An advanced student of Kalamandapam who assists in classes, helping younger students refine their adavus and prepare for performances.",
    photo: {
      url: "/images/instructors/assistant-sample.png",
      alt: "Teaching Assistant",
    },
    specialties: ["Class support", "Performance prep"],
    order: i,
  })),
];
