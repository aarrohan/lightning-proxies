import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import InfosSection from "./InfosSection";
import FeaturesSection from "./FeaturesSection";
import StepsSection from "./StepsSection";
import DashboardSection from "./DashboardSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Referral Program - Lightning Proxies",
};

export default function Referral() {
  return (
    <main>
      <HeroSection />
      <InfosSection />
      <FeaturesSection />
      <StepsSection />
      <DashboardSection />
      <FollowUpSection />
    </main>
  );
}
