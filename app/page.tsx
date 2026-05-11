import {
  ClassesOffered,
  ContactSection,
  FaqSection,
  Hero,
  MissionBanner,
  UpcomingEventsHome,
} from "@/components/sections";
import {
  getClassOfferings,
  getFaqs,
  getSiteSettings,
  getUpcomingEvents,
} from "@/lib/data";

export default async function HomePage() {
  const [settings, offerings, events, faqs] = await Promise.all([
    getSiteSettings(),
    getClassOfferings(),
    getUpcomingEvents(),
    getFaqs(),
  ]);

  return (
    <>
      <Hero
        wordmark={settings.hero.wordmark}
        subhead={settings.hero.subhead}
        subtitle={settings.hero.subtitle}
        image={settings.hero.image}
      />
      <MissionBanner mission={settings.mission} />
      <ClassesOffered offerings={offerings} />
      <UpcomingEventsHome events={events} />
      <ContactSection settings={settings} />
      <FaqSection faqs={faqs} />
    </>
  );
}
