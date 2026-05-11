import { PageBanner } from "@/components/ui/PageBanner";
import { GalleryFeature, GalleryGrid } from "@/components/sections";
import { getGalleryImages } from "@/lib/data";

export const metadata = {
  title: "Gallery",
  description:
    "Performances, classes, and community moments from Kalamandapam Kuchipudi Dance School.",
};

export default async function GalleryPage() {
  const images = await getGalleryImages();

  const featureImages = images.filter((i) => i.feature);
  const [firstFeature, secondFeature, ...collageExtras] = featureImages;
  const gridImages = images.filter((i) => !i.feature);

  return (
    <>
      <PageBanner title="Gallery" />
      {firstFeature && (
        <GalleryFeature feature={firstFeature} layout="single" />
      )}
      {secondFeature && (
        <GalleryFeature
          feature={secondFeature}
          layout="collage"
          extras={collageExtras.length ? collageExtras : gridImages.slice(0, 2)}
        />
      )}
      <GalleryGrid images={gridImages} />
    </>
  );
}
