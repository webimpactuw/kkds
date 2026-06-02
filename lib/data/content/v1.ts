import type { AboutPage } from "@/sanity/schemas/aboutPage";
import type { ClassLevelDetail } from "@/sanity/schemas/classLevel";
import type { Instructor } from "@/sanity/schemas/instructor";
import type { SiteSettings } from "@/sanity/schemas/siteSettings";

/** Version 1.0 canonical content — used by fallbacks and Sanity seed script. */
export const V1_STUDIO_ADDRESS = "18109 NE 76th St #100, Redmond, WA 98052";

export const V1_SITE_SETTINGS: SiteSettings = {
  studioName: "Kalamandapam Kuchipudi Dance School",
  hero: {
    wordmark: "Kalamandapam",
    subhead: "Kuchipudi Dance School",
    subtitle:
      "Discover the vibrant world of Kuchipudi dance at our studio in Redmond, Washington.",
    image: {
      url: "/images/hero/dancer.png",
      alt: "Kuchipudi dancer in traditional costume",
    },
  },
  mission:
    "Kalamandapam Kuchipudi Dance School is dedicated to preserving, teaching, and promoting the classical art form of Kuchipudi with depth, discipline, and devotion.",
  contact: {
    email: "info@kalamandapam.com",
    phone: "Phone number coming soon",
    address: V1_STUDIO_ADDRESS,
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=18109+NE+76th+St+%23100%2C+Redmond%2C+WA+98052",
    hours: "By appointment — please call or email to confirm class times.",
  },
  social: {
    facebookUrl: "https://www.facebook.com/",
    instagramUrl: "https://www.instagram.com/",
  },
};

export const V1_ABOUT_PAGE: AboutPage = {
  heading: "About Kalamandapam Kuchipudi Dance School",
  paragraphs: [
    "Kalamandapam Kuchipudi Dance School is dedicated to preserving, teaching, and promoting the classical art form of Kuchipudi with depth, discipline, and devotion. Our training focuses not only on technique, rhythm, and stage presentation, but also on helping students understand the storytelling, expression, and spiritual richness behind this beautiful art form.",
    "At KKDS, students are guided step by step through a structured learning journey. They begin with strong foundations in footwork, rhythm, posture, and coordination, and gradually move toward expressive storytelling, abhinaya, and full classical dance repertoire. Our goal is to help each student grow with confidence, discipline, grace, and a deep connection to the art.",
    "Kuchipudi is more than movement. It is a blend of rhythm, expression, music, character, and devotion. Through regular classes, performances, workshops, and productions, KKDS gives students the opportunity to experience this art form both as learners and performers.",
  ],
};

export const V1_CLASS_LEVELS: ClassLevelDetail[] = [
  {
    id: "level-beginner",
    level: "beginner",
    name: "Beginner Level",
    description:
      "At the beginner level, students focus on building a strong foundation in Kuchipudi technique. They learn basic steps across all five jaathis, helping them understand rhythm, timing, and body coordination.\n\nThe main focus at this stage is on listening to the beat and moving the body in coordination with the rhythm. Students are introduced to posture, balance, basic hand positions, and simple movement patterns. This level helps them develop discipline, body awareness, and confidence in movement.",
    image: {
      url: "/images/classes/level-beginner.png",
      alt: "Beginner Kuchipudi class",
    },
    videoUrl: "/videos/class-levels/beginner.mp4",
    order: 0,
  },
  {
    id: "level-intermediate",
    level: "intermediate",
    name: "Intermediate Level",
    description:
      "At the intermediate level, students begin learning longer jathis across all five jaathis. The lessons become more detailed, and students learn how to connect multiple steps seamlessly without breaking the flow of movement.\n\nAt this stage, the focus slowly expands from lower-body strength and footwork to upper-body movement. Students work on adding body bends, graceful torso movement, neck movements, eye movements, and clearer hand coordination. They begin to understand how every part of the body contributes to the beauty and precision of Kuchipudi.",
    image: {
      url: "/images/classes/level-beginner.png",
      alt: "Intermediate Kuchipudi class",
    },
    videoUrl: "/videos/class-levels/intermediate.mp4",
    order: 1,
  },
  {
    id: "level-advanced",
    level: "advanced",
    name: "Advanced Level",
    description:
      "At the advanced level, students begin learning full classical items and take on the deeper responsibility of storytelling. They work on combining intricate footwork with hastabhinaya, facial expressions, and emotional depth.\n\nAt this stage, students are trained to understand and convey the layered meaning of the composer. The focus moves beyond steps and rhythm into abhinaya, where the dancer learns to communicate emotion, character, and meaning through satvika abhinaya, facial expression, and refined body language.\n\nAdvanced students are encouraged to develop maturity, stage presence, and ownership of the art form. They learn that Kuchipudi is not just about performing movements, but about bringing poetry, music, devotion, and character to life on stage.",
    image: {
      url: "/images/classes/level-beginner.png",
      alt: "Advanced Kuchipudi class",
    },
    videoUrl: "/videos/class-levels/advanced.mp4",
    order: 2,
  },
];

const TA_PHOTOS = "/images/instructors/teaching-assistants";

function teachingAssistant(
  slug: string,
  name: string,
  bio: string,
  order: number,
): Instructor {
  return {
    id: `assistant-${slug}`,
    name,
    role: "assistant",
    title: "Teaching Assistant",
    bio,
    photo: {
      url: `${TA_PHOTOS}/${slug}.jpg`,
      alt: `${name} — Teaching Assistant`,
    },
    order,
  };
}

/**
 * Founder + teaching assistants. Portrait files go in
 * `public/images/instructors/teaching-assistants/` — see README there.
 */
export const V1_INSTRUCTORS: Instructor[] = [
  {
    id: "sushma",
    name: "Sushma",
    role: "founder",
    title: "Founder & Instructor",
    bio:
      "Welcome to Kalamandapam Kuchipudi Dance School, a vibrant cultural hub based in Sammamish, dedicated to preserving and promoting the classical Indian dance form of Kuchipudi. Our school offers a nurturing environment where students of all ages, starting from 5 years onwards, can immerse themselves in the rich traditions and expressive beauty of Kuchipudi.\n\nAt Kalamandapam, we believe in the power of dance to inspire, educate, and connect people. Our experienced instructors are passionate about sharing their knowledge and expertise, ensuring that each student receives personalized attention to develop their skills, grace, and confidence. Through a blend of traditional techniques and modern teaching methods, we create a dynamic learning experience that celebrates the heritage of Kuchipudi while encouraging individual expression.\n\nOur classes are designed to cater to all levels, from beginners to advanced dancers. Whether you are looking to explore a new art form, deepen your understanding of Indian culture, or pursue a serious study of dance, Kalamandapam is the perfect place to start your journey.\n\nJoin us at Kalamandapam Kuchipudi Dance School and become part of a community that celebrates the joy of dance and the beauty of Indian classical arts. We look forward to welcoming you and your family to our dance family.",
    photo: {
      url: "/images/instructors/sushma.png",
      alt: "Sushma, Founder & Instructor at Kalamandapam",
    },
    order: 0,
  },

  teachingAssistant(
    "anika-yechuri",
    "Anika Yechuri",
    "Anika Yechuri has been training in Kuchipudi for the past 19 years and is currently working toward her diploma through the University of Silicon Andhra. She has been actively involved in several dance initiatives, including serving as captain of Natya during the 2023–2024 academic year. She has also performed in major dance ballets such as Tirumala Annamayya and Sri Krishna Parijatham.",
    0,
  ),
  teachingAssistant(
    "eesha-koduru",
    "Eesha Koduru",
    "Eesha Koduru is a sophomore at Eastlake High School. She has been learning dance from Guru Smt.Sushma Yechuri garu for 10 years, and completed her Rangapravesam in 2025. In addition to dance, she has been learning Carnatic singing under guru Smt. Sarvani Poduri garu. Last year, she achieved first degree black belt in taekwondo from TMA Sammamish. She hopes to support Just Step in their mission to spread Kuchipudi, and other classical arts.",
    1,
  ),
  teachingAssistant(
    "haritha-gali",
    "Haritha Gali",
    "Haritha Gali is an 11th grader at Issaquah High School. She has been learning Kuchipudi, under the guidance of Smt. Sushma Yechuri garu, for 11 years at Kalamandapam Kuchipudi Dance School. She completed her Rangapravesam in 2025. In addition to dance, she is learning Carnatic music from guru Smt. Sarvani Poduri garu. In her free time, Haritha likes to volunteer, read, and spend time with family. Haritha is excited to be a part of this production and bring recognition to the story of Chenchu Lakshmi.",
    2,
  ),
  teachingAssistant(
    "lakshmi-gali",
    "Lakshmi Gali",
    "Lakshmi Gali is a Kuchipudi dancer and disciple of Smt. Sushma Yechuri. She has been learning Kuchipudi for the past 9 years under the guidance of Smt. Sushma Yechuri, and before that, was a Bharatnatyam student of 7 years at From Within Academy. She has performed in various local productions and shows, is currently competing with Natya at UW, and has presented at Cleveland Thygaraja Festival.",
    3,
  ),
  teachingAssistant(
    "manyada-alapaty",
    "Manyada Alapaty",
    "Manyada Alapaty is a high school junior who has trained in Kuchipudi for over twelve years under Smt. Sushma Yechuri, completing her SAMPADA senior certificate and Rangapravesam in 2025. She continues her Carnatic vocal training under Smt. Dharini Kalyanaraman, performs with Surya Teja Arts, and is a certified Bhagavad Geeta Avadhani. Manya is honored to be part of Just Step, and hopes to bring the beauty of Indian Classical Arts globally.",
    4,
  ),
  teachingAssistant(
    "nithika-yechuri",
    "Nithika Yechuri",
    "Nithika Yechuri has trained in Kuchipudi dance for 16 years and served as choreography lead for her college's classical competitive dance team at UW, which placed third nationally. She earned the Best Lead Character award at nationals and has performed across the country in various productions, including ballets in Boston and Seattle, and at the Cleveland Thyagaraja Festival.",
    5,
  ),
  teachingAssistant(
    "pournami-varma",
    "Pournami Varma",
    "Pournami Varma is a classically trained dancer with 15 years of formal training, having completed her Kuchipudi Rangapravesam in 2021. With a foundation in Bharatanatyam and a growing love for Mohiniyattam, she embraces her passion for dance through multiple styles, striving to bring storytelling and choreography to life. She has performed across many local and national stages, from productions in the Greater Seattle area to performances with Natya at UW and at prestigious events such as the Cleveland Thyagaraja Festival. Outside of dance, Pournami enjoys travel, film and exploring creative ways to connect with the arts.",
    6,
  ),
  teachingAssistant(
    "sneha-pilli",
    "Sneha Pilli",
    "Sneha Pilli has been training in the art of Kuchipudi for 9 years under the guidance of Smt. Sushma Yechuri garu. Throughout her dance journey she has received many opportunities to perform across various states and locations, including the Tyagaraja Aradhana festival in Cleveland. She is currently a junior at the University of Washington. Sneha hopes to support JustStep in their mission to spread Kuchipudi and other classical arts.",
    7,
  ),
  teachingAssistant(
    "vipra-manchi",
    "Vipra Manchi",
    "Vipra Manchi is currently a sophomore at Skyline High School. She has been learning Kuchipudi under Guru Smt. Sushma Yechuri garu for 6 years and recently completed her Rangapravesam in 2025. In addition to dance, she is currently learning Carnatic singing from Smt Sarvani Poduri garu. In her free time, Vipra enjoys cooking, being outdoors, and hanging out with friends. She is excited to be a part of Just Step and spread South Indian culture.",
    8,
  ),
  teachingAssistant(
    "nitya-masina",
    "Nitya Masina",
    "Nitya Masina has been learning Kuchipudi under the tutelage of Smt. Sushma Yechuri for the past nine years. She has previously showcased her talent in performances spanning several states and countries, including at the Thyagaraja Aradhana Festival in Cleveland and with Natya at UW. Nitya is excited to share her passion for Kuchipudi with new audiences through JustStep!",
    9,
  ),
];
