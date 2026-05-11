import { cn } from "@/lib/utils/cn";

interface PageBannerProps {
  title: string;
  className?: string;
}

/**
 * Hero banner used at the top of every sub-page (About Us / Classes / Events
 * & Workshops / Gallery / Contact).
 *
 * Figma:
 *   • Desktop 1440×280, Tablet 768×200, Phone 390×140-180
 *   • bg gradient: orange (#ffa540) → cream (#fffaee) top→bottom
 *   • title: Rambla Bold · 56px (40 on mobile) · maroon
 */
export function PageBanner({ title, className }: PageBannerProps) {
  return (
    <section
      className={cn(
        "bg-banner-gradient flex h-[180px] w-full items-center justify-center px-6 md:h-[200px] lg:h-[280px]",
        className,
      )}
    >
      <h1 className="font-rambla text-[40px] md:text-[48px] lg:text-banner text-maroon text-center font-bold leading-tight">
        {title}
      </h1>
    </section>
  );
}
