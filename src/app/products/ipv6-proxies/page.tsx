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
  title: "IPv6 Proxies - Huge IP Network",
  description:
    "Optimize web scraping with billions of IPv6 addresses. IPv6 Proxies ensure low-cost, high-speed connections with flexible targeting and robust performance.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/products/ipv6-proxies`,
    title: "IPv6 Proxies - Huge IP Network",
    description:
      "Optimize web scraping with billions of IPv6 addresses. IPv6 Proxies ensure low-cost, high-speed connections with flexible targeting and robust performance.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
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
      <ExploreSection />
      <FollowUpSection />
    </main>
  );
}
