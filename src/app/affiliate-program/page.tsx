import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import InfosSection from "./InfosSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Affiliate Program - Lightning Proxies",
};

export default function Affiliate() {
  return (
    <main>
      <HeroSection />
      <InfosSection />
      <FollowUpSection />
    </main>
  );
}
