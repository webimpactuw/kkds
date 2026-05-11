"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { EventTile } from "@/components/ui/EventTile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { KkdsEvent } from "@/sanity/schemas/event";

interface UpcomingEventsHomeProps {
  events: KkdsEvent[];
  /** Destination for the "View All" button. */
  viewAllHref?: string;
}

/**
 * Home page "Upcoming Events" section. Figma layout:
 *   • Section heading + 3-event mosaic + "View All" button
 *   • Desktop: one large left card (575×555) + two stacked right cards (510×262)
 *   • Mobile: stacked single column
 *   • bg: cream solid
 */
export function UpcomingEventsHome({
  events,
  viewAllHref = "/events",
}: UpcomingEventsHomeProps) {
  const [first, second, third] = events;

  return (
    <section className="bg-cream w-full py-16 md:py-24 lg:py-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[136px]">
        <div className="flex flex-col items-center gap-12 lg:gap-16">
          <SectionHeading>Upcoming Events</SectionHeading>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
            {first && <EventTile event={first} size="tall" index={0} />}
            <div className="flex flex-col gap-6 md:gap-8">
              {second && <EventTile event={second} size="short" index={1} />}
              {third && <EventTile event={third} size="short" index={2} />}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button href={viewAllHref}>View All</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
