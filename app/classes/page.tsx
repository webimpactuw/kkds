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

export const metadata = {
  title: "Classes",
  description:
    "Weekly Kuchipudi class schedule, school breaks, and class levels at Kalamandapam — Sammamish's home for classical Indian dance.",
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
