import { InstructorCard } from "@/components/ui/InstructorCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Instructor } from "@/sanity/schemas/instructor";

interface YouthInstructorsProps {
  instructors: Instructor[];
}

/**
 * About-Us "Youth Instructors" row. Figma:
 *   • banner heading (Rambla Bold 56, maroon, centered)
 *   • 2 large Youth Instructor Cards side-by-side on desktop
 *   • Stacks on mobile
 */
export function YouthInstructors({ instructors }: YouthInstructorsProps) {
  return (
    <section className="bg-cream w-full py-16 md:py-24 lg:py-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[136px]">
        <div className="flex flex-col items-center gap-12 lg:gap-16">
          <SectionHeading>Youth Instructors</SectionHeading>
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12 lg:max-w-[1018px]">
            {instructors.map((instructor, i) => (
              <div key={instructor.id} className="flex justify-center">
                <div className="w-full max-w-[437px]">
                  <InstructorCard
                    instructor={instructor}
                    variant="youth"
                    index={i}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
