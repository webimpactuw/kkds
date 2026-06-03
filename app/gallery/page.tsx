import { PageBanner } from "@/components/ui/PageBanner";
import { GalleryGrid } from "@/components/sections";
import { getGalleryImages } from "@/lib/data";

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
