/**
 * Seeds Sanity with v1.0 content from lib/data/fallbacks and lib/data/content/v1.ts.
 *
 * Usage:
 *   1. Copy .env.local.example → .env.local and add SANITY_API_WRITE_TOKEN
 *   2. npm run schema:deploy
 *   3. npm run seed
 */
import { createClient, type SanityClient } from "@sanity/client";
import fs from "node:fs";
import path from "node:path";
import {
  V1_ABOUT_PAGE,
  V1_CLASS_LEVELS,
  V1_INSTRUCTORS,
  V1_SITE_SETTINGS,
} from "../lib/data/content/v1";
import { fallbackClassOfferings } from "../lib/data/fallbacks/classOfferings";
import { fallbackClassSchedule } from "../lib/data/fallbacks/classSchedule";
import { fallbackEvents } from "../lib/data/fallbacks/events";
import { fallbackFaqs } from "../lib/data/fallbacks/faqs";
import { fallbackGalleryImages } from "../lib/data/fallbacks/gallery";
import { fallbackScheduleBreaks } from "../lib/data/fallbacks/scheduleBreaks";
import { fallbackTestimonials } from "../lib/data/fallbacks/testimonials";
import { fallbackWorkshops } from "../lib/data/fallbacks/workshops";

function loadEnvFile(filePath: string) {
  if (!fs.existsSync(filePath)) return;
  for (const line of fs.readFileSync(filePath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile(path.join(process.cwd(), ".env.local"));

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN in .env.local",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01",
  token,
  useCdn: false,
});

type SanityImageValue = {
  _type: "image";
  asset: { _type: "reference"; _ref: string };
  alt?: string;
};

async function uploadLocalImage(
  sanityClient: SanityClient,
  publicUrl: string,
  alt?: string,
): Promise<SanityImageValue | undefined> {
  if (!publicUrl.trim()) {
    return undefined;
  }

  const relative = publicUrl.replace(/^\//, "");
  const filePath = path.join(process.cwd(), "public", relative);
  if (!fs.existsSync(filePath)) {
    console.warn(`  ⚠ Image not found, skipping upload: ${publicUrl}`);
    return undefined;
  }

  if (!fs.statSync(filePath).isFile()) {
    console.warn(`  ⚠ Not a file, skipping upload: ${publicUrl}`);
    return undefined;
  }

  const asset = await sanityClient.assets.upload("image", fs.readFileSync(filePath), {
    filename: path.basename(filePath),
  });

  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
    alt,
  };
}

type SanityFileValue = {
  _type: "file";
  asset: { _type: "reference"; _ref: string };
};

async function uploadLocalVideo(
  sanityClient: SanityClient,
  publicUrl: string | undefined,
): Promise<SanityFileValue | undefined> {
  if (!publicUrl?.trim()) return undefined;

  const relative = publicUrl.replace(/^\//, "");
  const filePath = path.join(process.cwd(), "public", relative);
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    console.warn(`  ⚠ Video not found, skipping upload: ${publicUrl}`);
    return undefined;
  }

  const asset = await sanityClient.assets.upload("file", fs.readFileSync(filePath), {
    filename: path.basename(filePath),
    contentType: "video/mp4",
  });

  return {
    _type: "file",
    asset: { _type: "reference", _ref: asset._id },
  };
}

async function seedSingleton(
  doc: Record<string, unknown> & { _id: string; _type: string },
) {
  console.log(`→ ${doc._type} (${doc._id})`);
  await client.createOrReplace(doc);
}

async function main() {
  console.log(`Seeding project ${projectId} / ${dataset}\n`);

  const heroImage = await uploadLocalImage(
    client,
    V1_SITE_SETTINGS.hero.image.url,
    V1_SITE_SETTINGS.hero.image.alt,
  );

  await seedSingleton({
    _id: "siteSettings",
    _type: "siteSettings",
    studioName: V1_SITE_SETTINGS.studioName,
    hero: {
      wordmark: V1_SITE_SETTINGS.hero.wordmark,
      subhead: V1_SITE_SETTINGS.hero.subhead,
      subtitle: V1_SITE_SETTINGS.hero.subtitle,
      image: heroImage,
    },
    mission: V1_SITE_SETTINGS.mission,
    contact: V1_SITE_SETTINGS.contact,
    social: V1_SITE_SETTINGS.social,
  });

  await seedSingleton({
    _id: "aboutPage",
    _type: "aboutPage",
    heading: V1_ABOUT_PAGE.heading,
    paragraphs: V1_ABOUT_PAGE.paragraphs,
  });

  await seedSingleton({
    _id: "classSchedule",
    _type: "classSchedule",
    ...fallbackClassSchedule,
  });

  for (const level of V1_CLASS_LEVELS) {
    const image = await uploadLocalImage(client, level.image.url, level.image.alt);
    const video = await uploadLocalVideo(client, level.videoUrl);
    console.log(`→ classLevel (${level.level})`);
    await client.createOrReplace({
      _id: level.id,
      _type: "classLevel",
      level: level.level,
      name: level.name,
      description: level.description,
      image,
      video,
      order: level.order,
    });
  }

  for (const instructor of V1_INSTRUCTORS) {
    const photo = await uploadLocalImage(
      client,
      instructor.photo.url,
      instructor.photo.alt,
    );
    console.log(`→ instructor (${instructor.name})`);
    await client.createOrReplace({
      _id: instructor.id,
      _type: "instructor",
      name: instructor.name,
      role: instructor.role,
      title: instructor.title,
      bio: instructor.bio,
      photo,
      order: instructor.order,
    });
  }

  for (const offering of fallbackClassOfferings) {
    const image = await uploadLocalImage(client, offering.image.url, offering.image.alt);
    console.log(`→ classOffering (${offering.title})`);
    await client.createOrReplace({
      _id: offering.id,
      _type: "classOffering",
      title: offering.title,
      level: offering.level,
      description: offering.description,
      image,
      order: offering.order,
    });
  }

  for (const item of fallbackScheduleBreaks) {
    const { id, ...fields } = item;
    console.log(`→ scheduleBreak (${item.title})`);
    await client.createOrReplace({ _id: id, _type: "scheduleBreak", ...fields });
  }

  for (const event of fallbackEvents) {
    const image = await uploadLocalImage(client, event.image.url, event.image.alt);
    console.log(`→ event (${event.title})`);
    await client.createOrReplace({
      _id: event.id,
      _type: "event",
      title: event.title,
      date: event.date,
      dateLabel: event.dateLabel,
      location: event.location,
      description: event.description,
      image,
      ticketsUrl: event.ticketsUrl,
      upcoming: event.upcoming,
      order: event.order,
    });
  }

  for (const workshop of fallbackWorkshops) {
    const image = await uploadLocalImage(client, workshop.image.url, workshop.image.alt);
    console.log(`→ workshop (${workshop.title})`);
    await client.createOrReplace({
      _id: workshop.id,
      _type: "workshop",
      title: workshop.title,
      date: workshop.date,
      dateLabel: workshop.dateLabel,
      description: workshop.description,
      image,
      signUpUrl: workshop.signUpUrl,
      upcoming: workshop.upcoming,
      order: workshop.order,
    });
  }

  for (const imageEntry of fallbackGalleryImages) {
    const image = await uploadLocalImage(
      client,
      imageEntry.image.url,
      imageEntry.image.alt,
    );
    console.log(`→ galleryImage (${imageEntry.id})`);
    await client.createOrReplace({
      _id: imageEntry.id,
      _type: "galleryImage",
      image,
      caption: imageEntry.caption,
      category: imageEntry.category,
      credit: imageEntry.credit,
      order: imageEntry.order,
      feature: imageEntry.feature,
    });
  }

  for (const faq of fallbackFaqs) {
    const { id, ...fields } = faq;
    console.log(`→ faq (${faq.id})`);
    await client.createOrReplace({ _id: id, _type: "faq", ...fields });
  }

  for (const testimonial of fallbackTestimonials) {
    const { id, ...fields } = testimonial;
    console.log(`→ testimonial (${testimonial.id})`);
    await client.createOrReplace({ _id: id, _type: "testimonial", ...fields });
  }

  console.log("\nDone. Open /studio to review content.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
