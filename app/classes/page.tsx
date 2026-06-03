import { PageBanner } from "@/components/ui/PageBanner";
import {
  ClassLevelsSection,
  ScheduleBreaks,
  WeeklySchedule,
} from "@/components/sections";
import {
  getClassLevels,
  getClassSchedule,
  getScheduleBreaks,
} from "@/lib/data";
/** Re-fetch Sanity every 60s — see lib/sanity/cache.ts */
export const revalidate = 60;

export const metadata = {
  title: "Classes",
  description:
    "Weekly Kuchipudi class schedule, school breaks, and class levels at Kalamandapam — Redmond's home for classical Indian dance.",
};

export default async function ClassesPage() {
  const [schedule, breaks, levels] = await Promise.all([
    getClassSchedule(),
    getScheduleBreaks(),
    getClassLevels(),
  ]);

  return (
    <>
      <PageBanner title="Classes" />
      <WeeklySchedule schedule={schedule} />
      <ScheduleBreaks breaks={breaks} />
      <ClassLevelsSection levels={levels} />
    </>
  );
}
