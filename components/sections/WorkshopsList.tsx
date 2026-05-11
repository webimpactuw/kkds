import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkshopDetailCard } from "@/components/ui/WorkshopDetailCard";
import type { Workshop } from "@/sanity/schemas/workshop";

interface WorkshopsListProps {
  workshops: Workshop[];
}

/**
 * /events page "Upcoming Workshops" section. Same layout as Events list with
 * different card variant (no location, "Sign Up" button instead of "Buy
 * Tickets").
 */
export function WorkshopsList({ workshops }: WorkshopsListProps) {
  return (
    <section className="bg-cream w-full pb-16 md:pb-24 lg:pb-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[136px]">
        <div className="flex flex-col items-center gap-10 lg:gap-12">
          <SectionHeading>Upcoming Workshops</SectionHeading>
          {workshops.length === 0 ? (
            <p className="font-rambla text-body text-ink/70">
              No upcoming workshops at the moment. Check back soon!
            </p>
          ) : (
            <div className="flex w-full max-w-[1168px] flex-col gap-8 lg:gap-12">
              {workshops.map((workshop, i) => (
                <WorkshopDetailCard
                  key={workshop.id}
                  workshop={workshop}
                  index={i}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
