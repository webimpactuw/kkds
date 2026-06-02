import { createClient } from "@sanity/client";
import { V1_CLASS_LEVELS } from "@/lib/data/content/v1";
import {
  isSanityConfigured,
  sanityApiVersion,
  sanityDataset,
  sanityProjectId,
} from "@/lib/sanity/env";
import { CLASS_LEVELS_QUERY } from "@/lib/sanity/queries";
import type { ClassLevelDetail } from "@/sanity/schemas/classLevel";

/** Prefer Sanity video; use v1 local paths when a level has no uploaded file yet. */
function mergeClassLevelVideos(
  levels: ClassLevelDetail[],
  fallbackLevels: ClassLevelDetail[],
): ClassLevelDetail[] {
  const fallbackByLevel = new Map(
    fallbackLevels
      .filter((level) => level.videoUrl)
      .map((level) => [level.level, level]),
  );

  return levels.map((level) => {
    if (level.videoUrl?.trim()) return level;
    const backup = fallbackByLevel.get(level.level);
    if (!backup?.videoUrl) return level;
    return {
      ...level,
      videoUrl: backup.videoUrl,
      videoMimeType: backup.videoMimeType ?? "video/mp4",
    };
  });
}

async function fetchClassLevelsFromSanity(): Promise<ClassLevelDetail[] | null> {
  if (!isSanityConfigured) return null;

  try {
    const client = createClient({
      projectId: sanityProjectId!,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      useCdn: false,
    });
    return await client.fetch<ClassLevelDetail[]>(CLASS_LEVELS_QUERY);
  } catch {
    return null;
  }
}

export async function getClassLevels(): Promise<ClassLevelDetail[]> {
  const fromSanity = await fetchClassLevelsFromSanity();

  if (fromSanity === null || fromSanity === undefined) {
    return V1_CLASS_LEVELS;
  }

  if (fromSanity.length === 0) {
    return V1_CLASS_LEVELS;
  }

  return mergeClassLevelVideos(fromSanity, V1_CLASS_LEVELS);
}
