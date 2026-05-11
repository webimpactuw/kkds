import type { SanityImage, SanitySchema } from "./_shared";

export interface KkdsEvent {
  id: string;
  title: string;
  /** ISO date-string. The UI renders a human label via `dateLabel`. */
  date: string;
  /** Display label rendered in the UI (e.g. "Month Day Year"). */
  dateLabel: string;
  location: string;
  description: string;
  image: SanityImage;
  /** Optional ticket purchase URL — wired to the "Buy Tickets" button. */
  ticketsUrl?: string;
  /** True until the event passes; used to filter upcoming. */
  upcoming: boolean;
  order: number;
}

export const eventSchema: SanitySchema = {
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "date", title: "Date (ISO)", type: "datetime" },
    { name: "dateLabel", title: "Date label (display)", type: "string" },
    { name: "location", title: "Location", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "image", title: "Image", type: "image" },
    { name: "ticketsUrl", title: "Buy Tickets URL", type: "url" },
    {
      name: "upcoming",
      title: "Upcoming?",
      type: "boolean",
      initialValue: true,
    },
    { name: "order", title: "Display order", type: "number" },
  ],
};
