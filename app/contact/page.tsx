import { PageBanner } from "@/components/ui/PageBanner";
import { ContactSection } from "@/components/sections";
import { getSiteSettings } from "@/lib/data";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Kalamandapam Kuchipudi Dance School. Send us a message, find our studio in Sammamish, Washington, or follow us on social.",
};

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <PageBanner title="Contact Us" />
      <ContactSection settings={settings} variant="page" />
    </>
  );
}
