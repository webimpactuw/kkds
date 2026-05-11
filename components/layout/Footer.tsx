import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";
import { NAV_LINKS } from "./navLinks";

interface FooterProps {
  /** Studio contact info — falls back to a placeholder. */
  phone?: string;
  address?: string;
  /** Social profile URLs. */
  facebookUrl?: string;
  instagramUrl?: string;
}

/**
 * Site footer. Figma: bg maroon, 4 columns on desktop:
 *   Logo + name · primary nav · contact info · social icons.
 *
 * Stacks vertically on mobile and tablet.
 */
export function Footer({
  phone = "Phone number coming soon",
  address = "Sammamish, Washington",
  facebookUrl = "https://facebook.com",
  instagramUrl = "https://instagram.com",
}: FooterProps) {
  return (
    <footer className="bg-maroon">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-10 md:grid-cols-2 md:px-12 lg:grid-cols-4 lg:items-start lg:gap-12 lg:px-[64px]">
        <div>
          <Logo theme="light" />
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-1.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-inter text-footer leading-[22px] font-bold text-white transition-colors hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="font-inter text-footer leading-[22px] font-bold text-white">
          <p>Phone Number:</p>
          <p className="font-normal">{phone}</p>
          <p className="mt-2">Location:</p>
          <p className="font-normal">{address}</p>
        </div>

        <div className="flex items-center gap-4 lg:justify-end">
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Kalamandapam on Facebook"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/images/social/facebook.png"
              alt=""
              width={48}
              height={48}
              className="size-12"
            />
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Kalamandapam on Instagram"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/images/social/instagram.png"
              alt=""
              width={48}
              height={48}
              className="size-12"
            />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center md:px-12 lg:px-[64px]">
        <p className="font-inter text-[14px] text-white/70">
          © {new Date().getFullYear()} Kalamandapam Kuchipudi Dance School. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
