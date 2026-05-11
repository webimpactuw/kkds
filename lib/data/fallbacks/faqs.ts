import type { Faq } from "@/sanity/schemas/faq";

export const fallbackFaqs: Faq[] = [
  {
    id: "faq-age",
    question: "What is the youngest age you accept?",
    answer:
      "We welcome new students starting at age 5. Our beginner classes are designed to make movement, rhythm, and storytelling approachable for young dancers while still honoring the depth of the Kuchipudi tradition.",
    order: 0,
  },
  {
    id: "faq-experience",
    question: "Do I need prior dance experience to join?",
    answer:
      "No prior experience required. Our beginner track starts from the very first adavu and teaches the rhythmic foundations gradually. Adults and teenagers are welcome to enroll alongside younger students.",
    order: 1,
  },
  {
    id: "faq-attire",
    question: "What should my child wear to class?",
    answer:
      "Comfortable, breathable clothing that allows free movement of the legs and arms — leggings or salwar pants with a fitted top work well. Classes are practiced barefoot. We will share costume details for performances separately.",
    order: 2,
  },
  {
    id: "faq-trial",
    question: "Can I observe or try a trial class before enrolling?",
    answer:
      "Yes! Reach out via the contact form and we will arrange a complimentary observation or trial class so you and your child can feel the studio in person before committing.",
    order: 3,
  },
];
