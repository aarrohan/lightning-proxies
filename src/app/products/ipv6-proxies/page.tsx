import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import Info1Section from "./Info1Section";
import Info2Section from "./Info2Section";
import FeaturesSection from "./FeaturesSection";
import UseCasesSection from "@/app/(landing)/UseCasesSection";
import DashboardSection from "@/app/(landing)/DashboardSection";
import APISection from "@/app/(landing)/APISection";
import LocationsSection from "@/app/(landing)/LocationsSection";
import ReviewsSection from "@/app/(landing)/ReviewsSection";
import ExtensionSection from "@/app/(landing)/ExtensionSection";
import UpcomingSection from "@/app/(landing)/UpcomingSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "IPv6 Proxies - Lightning Proxies",
};

export default function IPv6ProxiesProduct() {
  return (
    <main>
      <HeroSection />
      <Info1Section />
      <Info2Section />
      <FeaturesSection />
      <UseCasesSection />
      <DashboardSection />
      <APISection />
      <LocationsSection />
      <ReviewsSection />
      <ExtensionSection />
      <UpcomingSection />
      <FollowUpSection />
    </main>
  );
}
