/**
 * Primary navigation links shared between Navbar and Footer.
 * Lives in its own module (no "use client" directive) so it can be safely
 * imported from both server components (Footer) and client components (Navbar).
 *
 * Order matches Figma. Update here to update everywhere.
 */
export interface NavLink {
  href: string;
  label: string;
}

export const NAV_LINKS: ReadonlyArray<NavLink> = [
  { href: "/about", label: "About Us" },
  { href: "/classes", label: "Classes" },
  { href: "/events", label: "Events & Workshops" },
  { href: "/gallery", label: "Gallery" },
];
