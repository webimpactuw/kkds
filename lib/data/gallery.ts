import { createClient } from "@sanity/client";
import {
  isSanityConfigured,
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
} from "@/lib/sanity/env";
import { GALLERY_QUERY } from "@/lib/sanity/queries";
import type { GalleryImageEntry } from "@/sanity/schemas/galleryImage";

async function fetchGalleryFromSanity(): Promise<GalleryImageEntry[] | null> {
  if (!isSanityConfigured) return null;

  try {
    const client = createClient({
      projectId: sanityProjectId!,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn: false,
    });
    return await client.fetch<GalleryImageEntry[]>(GALLERY_QUERY);
  } catch {
    return null;
  }
}

function hasDisplayableImage(entry: GalleryImageEntry): boolean {
  return Boolean(entry.image?.url?.trim());
}

/**
 * Gallery images from Sanity. Empty CMS → empty page (no placeholder fallbacks).
 * Only entries with a resolved image URL are returned.
 */
export async function getGalleryImages(): Promise<GalleryImageEntry[]> {
  const fromSanity = await fetchGalleryFromSanity();

  if (fromSanity === null || fromSanity === undefined) {
    return [];
  }

  return fromSanity.filter(hasDisplayableImage);
}
