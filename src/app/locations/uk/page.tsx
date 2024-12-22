import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ProductsSection from "../usa/ProductsSection";
import Info1Section from "./Info1Section";
import UseCasesSection from "@/app/(landing)/UseCasesSection";
import Info2Section from "./Info2Section";
import FeaturesSection from "./FeaturesSection";
import SupportedSection from "./SupportedSection";
import LocationsSection from "../usa/LocationsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "United Kingdom Proxies - High-Quality UK IPs",
  description:
    "Access UK-based proxies for seamless browsing, scraping, and monitoring. Achieve consistent performance with geo-targeted residential and datacenter IPs.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/locations/uk`,
    title: "United Kingdom Proxies - High-Quality UK IPs",
    description:
      "Access UK-based proxies for seamless browsing, scraping, and monitoring. Achieve consistent performance with geo-targeted residential and datacenter IPs.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function UKLocation() {
  return (
    <main>
      <HeroSection />
      <ProductsSection />
      <Info1Section />
      <UseCasesSection />
      <Info2Section />
      <FeaturesSection />
      <SupportedSection />
      <LocationsSection />
      <FollowUpSection />
    </main>
  );
}
