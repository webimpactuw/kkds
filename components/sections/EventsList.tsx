import { EventDetailCard } from "@/components/ui/EventDetailCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { KkdsEvent } from "@/sanity/schemas/event";

interface EventsListProps {
  events: KkdsEvent[];
}

/**
 * /events page "Upcoming Events" section. Figma:
 *   • Section title (Rambla Bold 32–48 maroon)
 *   • Vertical stack of EventDetailCards
 *   • bg cream
 */
export function EventsList({ events }: EventsListProps) {
  return (
    <section className="bg-cream w-full py-16 md:py-24 lg:py-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[136px]">
        <div className="flex flex-col items-center gap-10 lg:gap-12">
          <SectionHeading>Upcoming Events</SectionHeading>
          {events.length === 0 ? (
            <p className="font-rambla text-body text-ink/70">
              No upcoming events at the moment. Check back soon!
            </p>
          ) : (
            <div className="flex w-full max-w-[1168px] flex-col gap-8 lg:gap-12">
              {events.map((event, i) => (
                <EventDetailCard key={event.id} event={event} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
