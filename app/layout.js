import { Oleo_Script_Swash_Caps } from "next/font/google";
import { Rambla } from "next/font/google";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./globals.css";

// Geist fonts removed in favor of Rambla + Oleo Script Swash Caps

const oleoScriptSwashCaps = Oleo_Script_Swash_Caps({
  weight: '700',
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-oleo-swash',
});

const rambla = Rambla({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rambla",
});

export const metadata = {
  title: "Kalamandapam Kuchipudi Dance School",
  description: "App for Kalamandapam Kuchipudi Dance School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rambla.variable} ${oleoScriptSwashCaps.variable}`}>
      <body className={rambla.className}>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
