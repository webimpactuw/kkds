import type { KkdsEvent } from "@/sanity/schemas/event";

export const fallbackEvents: KkdsEvent[] = [
  {
    id: "event-annual",
    title: "Annual Recital 2026",
    date: "2026-06-15T18:00:00-07:00",
    dateLabel: "June 15, 2026",
    location: "Sammamish, WA",
    description:
      "Our students of every level take the stage for an evening of Kuchipudi celebrating the year's training. Family-friendly and open to the public — join us for an unforgettable performance.",
    image: {
      url: "/images/events/event-sample.png",
      alt: "Annual Recital performance",
    },
    ticketsUrl: "#",
    upcoming: true,
    order: 0,
  },
  {
    id: "event-diwali",
    title: "Diwali Cultural Showcase",
    date: "2026-10-25T17:30:00-07:00",
    dateLabel: "October 25, 2026",
    location: "Sammamish Community Center",
    description:
      "A vibrant Diwali celebration featuring classical Kuchipudi performances, community music, and traditional refreshments. Open to all friends and family of Kalamandapam.",
    image: {
      url: "/images/events/event-sample.png",
      alt: "Diwali Cultural Showcase",
    },
    ticketsUrl: "#",
    upcoming: true,
    order: 1,
  },
  {
    id: "event-spring",
    title: "Spring Arangetram",
    date: "2026-04-12T16:00:00-07:00",
    dateLabel: "April 12, 2026",
    location: "Bellevue Performing Arts Hall",
    description:
      "Celebrate the solo debut of our advanced students with an evening of full-length Kuchipudi compositions, abhinaya, and live music.",
    image: {
      url: "/images/events/home-event.png",
      alt: "Spring Arangetram performance",
    },
    ticketsUrl: "#",
    upcoming: true,
    order: 2,
  },
];
