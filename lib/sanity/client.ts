import { createClient, type SanityClient } from "@sanity/client";
import {
  isSanityConfigured,
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
} from "./env";

const stubClient = {
  async fetch<T = unknown>(): Promise<T | null> {
    return null;
  },
} satisfies Pick<SanityClient, "fetch">;

/** Live Sanity client when env vars are set; otherwise a no-op stub. */
export const sanityClient: Pick<SanityClient, "fetch"> = isSanityConfigured
  ? createClient({
      projectId: sanityProjectId!,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn: process.env.NODE_ENV === "production",
    })
  : stubClient;
