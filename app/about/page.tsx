import { PageBanner } from "@/components/ui/PageBanner";
import {
  AboutIntro,
  SushmasMessage,
  TeachingAssistants,
  YouthInstructors,
} from "@/components/sections";
import { getAboutPage, getInstructors } from "@/lib/data";
/** Re-fetch Sanity every 60s — see lib/sanity/cache.ts */
export const revalidate = 60;

export const metadata = {
  title: "About Us",
  description:
    "Meet the founder, youth instructors, and teaching assistants of Kalamandapam Kuchipudi Dance School in Redmond, Washington.",
};

export default async function AboutPage() {
  const [about, instructors] = await Promise.all([
    getAboutPage(),
    getInstructors(),
  ]);

  const founder = instructors.find((i) => i.role === "founder");
  const youthInstructors = instructors
    .filter((i) => i.role === "youth")
    .sort((a, b) => a.order - b.order);
  const assistants = instructors
    .filter((i) => i.role === "assistant")
    .sort((a, b) => a.order - b.order);

  return (
    <>
      <PageBanner title="About Us" />
      <AboutIntro content={about} />
      {founder && <SushmasMessage founder={founder} />}
      {youthInstructors.length > 0 && (
        <YouthInstructors instructors={youthInstructors} />
      )}
      {assistants.length > 0 && <TeachingAssistants assistants={assistants} />}
    </>
  );
}
