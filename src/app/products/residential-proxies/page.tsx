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
  title: "Buy Residential Proxies - 10M+ Active Home IPs",
  description:
    "Leverage 10M+ real residential IPs with country, city, and ISP targeting. Our Residential Proxies offer high-speed, anonymous, and reliable connections for data scraping, SERP monitoring, and more.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/products/residential-proxies`,
    title: "Buy Residential Proxies - 10M+ Active Home IPs",
    description:
      "Leverage 10M+ real residential IPs with country, city, and ISP targeting. Our Residential Proxies offer high-speed, anonymous, and reliable connections for data scraping, SERP monitoring, and more.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function ResidentialProxiesProduct() {
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
