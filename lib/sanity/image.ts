import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityDataset, sanityProjectId } from "./env";

const builder =
  sanityProjectId && sanityDataset
    ? createImageUrlBuilder({ projectId: sanityProjectId, dataset: sanityDataset })
    : null;

/** Build a Sanity CDN URL from an image field reference. */
export function urlFor(source: SanityImageSource) {
  if (!builder) {
    throw new Error("Sanity image builder is not configured.");
  }
  return builder.image(source);
}
