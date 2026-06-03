import { PageBanner } from "@/components/ui/PageBanner";
import { EventsList, WorkshopsList } from "@/components/sections";
import { getUpcomingEvents, getUpcomingWorkshops } from "@/lib/data";
/** Re-fetch Sanity every 60s — see lib/sanity/cache.ts */
export const revalidate = 60;

export const metadata = {
  title: "Events & Workshops",
  description:
    "Upcoming Kuchipudi performances, recitals, and weekend workshops at Kalamandapam Kuchipudi Dance School.",
};

export default async function EventsPage() {
  const [events, workshops] = await Promise.all([
    getUpcomingEvents(),
    getUpcomingWorkshops(),
  ]);

  return (
    <>
      <PageBanner title="Events & Workshops" />
      <EventsList events={events} />
      <WorkshopsList workshops={workshops} />
    </>
  );
}
