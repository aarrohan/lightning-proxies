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
import ExploreSection from "./ExploreSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Mobile Proxies - Real 4G/5G Proxy Network",
  description:
    "Access 500K+ mobile IPs across 50+ countries for unmatched reliability. Perfect for ad verification, social media, and sneaker copping with secure and flexible solutions.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/products/mobile-proxies`,
    title: "Mobile Proxies - Real 4G/5G Proxy Network",
    description:
      "Access 500K+ mobile IPs across 50+ countries for unmatched reliability. Perfect for ad verification, social media, and sneaker copping with secure and flexible solutions.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function MobileProxiesProduct() {
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
      <ExploreSection />
      <FollowUpSection />
    </main>
  );
}
