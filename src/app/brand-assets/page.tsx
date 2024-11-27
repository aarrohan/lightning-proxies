import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ColorsSection from "./ColorsSection";
import TypographySection from "./Typography";
import FollowUpSection from "@/app/(landing)/FollowUpSection";
import DownloadSection from "./DownloadSection";

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
