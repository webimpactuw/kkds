"use client";

import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Textarea } from "@/components/ui/Textarea";
import type { SiteSettings } from "@/sanity/schemas/siteSettings";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_TEMPLATE_ID2 = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID2;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const isEmailJsConfigured = Boolean(
  EMAILJS_SERVICE_ID &&
    EMAILJS_TEMPLATE_ID &&
    EMAILJS_TEMPLATE_ID2 &&
    EMAILJS_PUBLIC_KEY,
);

interface ContactSectionProps {
  /**
   * Pulled from `siteSettings.contact`. We need `email` (mailto target) and
   * optionally `mapUrl` for the Google Maps link.
   */
  settings: SiteSettings;
  /**
   * Render the rich "page" version with additional studio info beside the
   * map (used on /contact). Defaults to the home-section variant.
   */
  variant?: "section" | "page";
  /** Override heading. Defaults to "Get In Touch". */
  heading?: string;
}

interface FormState {
  from_name: string;
  email: string;
  message: string;
}

const INITIAL_STATE: FormState = { from_name: "", email: "", message: "" };

function openMailtoFallback(form: FormState, contactEmail: string) {
  const subject = encodeURIComponent(
    `Inquiry from ${form.from_name || "the Kalamandapam website"}`,
  );
  const body = encodeURIComponent(
    `Name: ${form.from_name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
  );
  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
}

/**
 * "Get In Touch" form + map. Used on the Home page and (richer) on /contact.
 *
 * Submits via EmailJS when configured (client auto-reply + studio notification).
 * Falls back to a pre-filled `mailto:` link when EmailJS is unavailable or fails.
 */
export function ContactSection({
  settings,
  variant = "section",
  heading = "Get In Touch",
}: ContactSectionProps) {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEmailJsConfigured) {
      openMailtoFallback(form, settings.contact.email);
      return;
    }

    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const formElement = e.currentTarget;

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID!,
        EMAILJS_TEMPLATE_ID!,
        formElement,
        EMAILJS_PUBLIC_KEY!,
      );

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID!,
        EMAILJS_TEMPLATE_ID2!,
        formElement,
        EMAILJS_PUBLIC_KEY!,
      );

      setSuccess(true);
      setForm(INITIAL_STATE);
      formElement.reset();
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-section-warm-gradient w-full py-16 md:py-24 lg:py-[72px]"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[136px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-[118px]">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <SectionHeading align="left" as="h2">
              {heading}
            </SectionHeading>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[18px]"
              noValidate
            >
              <Input
                label="Name"
                name="from_name"
                type="text"
                placeholder="Name"
                value={form.from_name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, from_name: e.target.value }))
                }
                required
                autoComplete="name"
              />
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                required
                autoComplete="email"
              />
              <Textarea
                label="Message"
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                required
              />
              <Button type="submit" variant="send" disabled={loading}>
                {loading ? "Sending..." : "Send"}
              </Button>

              {success && (
                <p className="font-rambla text-body font-bold text-green-700">
                  Message sent successfully!
                </p>
              )}

              {error && (
                <div className="font-rambla text-body flex flex-col gap-2">
                  <p className="font-bold text-red-700">
                    Something went wrong. Please try again.
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      openMailtoFallback(form, settings.contact.email)
                    }
                    className="text-maroon w-fit underline decoration-maroon/40 underline-offset-4 transition hover:decoration-maroon"
                  >
                    Send via your email app instead
                  </button>
                </div>
              )}
            </form>
          </motion.div>

          {/* Map / studio info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <MapEmbed
              address={settings.contact.address}
              mapUrl={settings.contact.mapUrl}
            />
            {variant === "page" && (
              <div className="grid gap-6 sm:grid-cols-2">
                <InfoCard title="Phone">{settings.contact.phone}</InfoCard>
                <InfoCard title="Email">
                  <a
                    href={`mailto:${settings.contact.email}`}
                    className="underline decoration-maroon/40 underline-offset-4 transition hover:decoration-maroon"
                  >
                    {settings.contact.email}
                  </a>
                </InfoCard>
                <InfoCard title="Location">{settings.contact.address}</InfoCard>
                {settings.contact.hours && (
                  <InfoCard title="Hours">{settings.contact.hours}</InfoCard>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MapEmbed({
  address,
  mapUrl,
}: {
  address: string;
  mapUrl?: string;
}) {
  /* Google Maps keyless embed. Query parameter accepts a freeform address
   * and Google returns an interactive iframe — no API key required. */
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address,
  )}&output=embed`;
  const openHref =
    mapUrl ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address,
    )}`;

  return (
    <div className="relative aspect-[487/621] w-full overflow-hidden rounded-[10px] bg-cream shadow-[0_8px_2px_rgba(0,0,0,0.18)] lg:aspect-[487/560]">
      <iframe
        title={`Map of ${address}`}
        src={embedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
        <a
          href={openHref}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto rounded-full bg-maroon px-4 py-2 text-[14px] font-bold text-white shadow-md transition hover:bg-wine-deep"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[10px] border border-maroon/15 bg-white/80 p-5">
      <p className="font-rambla text-maroon mb-1 text-[14px] font-bold uppercase tracking-wider">
        {title}
      </p>
      <p className="font-rambla text-body text-ink">{children}</p>
    </div>
  );
}
