import { FaqItem } from "@/components/ui/FaqItem";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Faq } from "@/sanity/schemas/faq";

interface FaqSectionProps {
  faqs: Faq[];
}

/**
 * Frequently Asked Questions. Figma split layout:
 *   • Left: section heading (wrapped to multiple lines)
 *   • Right: vertical list of collapsible questions
 *   • bg: cream
 *
 * On mobile: heading stacks on top of the questions list.
 */
export function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section className="bg-cream w-full py-16 md:py-24 lg:py-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[136px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[420px_1fr] lg:gap-8">
          <div className="flex items-center">
            <SectionHeading align="left">
              Frequently Asked Questions
            </SectionHeading>
          </div>
          <div className="flex flex-col gap-8">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
