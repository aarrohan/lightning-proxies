import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ColorsSection from "./ColorsSection";
import TypographySection from "./Typography";
import DownloadSection from "./DownloadSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Brand Assets - Media Kit",
  description:
    "Access the official logo, media files, and brand guidelines. Download assets to maintain consistent branding across all platforms.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/brand-assets`,
    title: "Brand Assets - Media Kit",
    description:
      "Access the official logo, media files, and brand guidelines. Download assets to maintain consistent branding across all platforms.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function BrandAssets() {
  return (
    <main>
      <HeroSection />
      <ColorsSection />
      <TypographySection />
      <DownloadSection />
      <FollowUpSection />
    </main>
  );
}
