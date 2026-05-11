import type { Metadata } from "next";
import {
  Inter,
  Montserrat,
  Oleo_Script_Swash_Caps,
  Rambla,
} from "next/font/google";
import "../styles/globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

/* ----------------------------------------------------------------------------
 * Fonts (self-hosted via next/font/google)
 *
 * Mapping (extracted from Figma):
 *   --font-rambla     → primary brand font; headings, body, buttons, nav
 *   --font-oleo       → "Kalamandapam" hero wordmark only
 *   --font-inter      → footer + About-Us body + Sushma's italic subtitle
 *   --font-montserrat → Event Card titles, Class Level Card titles
 * -------------------------------------------------------------------------- */
const rambla = Rambla({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-rambla",
  display: "swap",
});

const oleo = Oleo_Script_Swash_Caps({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oleo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kalamandapam — Kuchipudi Dance School",
    template: "%s · Kalamandapam Kuchipudi Dance School",
  },
  description:
    "Kalamandapam Kuchipudi Dance School in Sammamish, Washington — celebrating the heritage of classical Indian dance through expressive, traditional instruction for students of all ages.",
  metadataBase: new URL("https://kalamandapam.example.com"),
  openGraph: {
    title: "Kalamandapam — Kuchipudi Dance School",
    description:
      "Classical Kuchipudi dance instruction in Sammamish, Washington. Beginner to advanced classes, taught with grace, precision, and joy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${rambla.variable} ${oleo.variable} ${inter.variable} ${montserrat.variable}`}
    >
      <body className="font-rambla bg-cream text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
