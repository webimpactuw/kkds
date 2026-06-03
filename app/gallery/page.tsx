import { PageBanner } from "@/components/ui/PageBanner";
import { GalleryGrid } from "@/components/sections";
import { getGalleryImages } from "@/lib/data";
/** Re-fetch Sanity every 60s — see lib/sanity/cache.ts */
export const revalidate = 60;

export const metadata = {
  title: "Gallery",
  description:
    "Performances, classes, and community moments from Kalamandapam Kuchipudi Dance School.",
};

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <>
      <PageBanner title="Gallery" />
      <GalleryGrid images={images} />
    </>
  );
}
