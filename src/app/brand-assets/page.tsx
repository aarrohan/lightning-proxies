import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ColorsSection from "./ColorsSection";
import TypographySection from "./Typography";
import DownloadSection from "./DownloadSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Brand Assets - Lightning Proxies",
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
