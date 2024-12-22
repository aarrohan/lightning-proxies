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
  title: "Canada Proxies - Reliable CA IPs",
  description:
    "Utilize Canadian proxies for data extraction, monitoring, and more. Enjoy high-performance IPs with robust geo-targeting features.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/locations/canada`,
    title: "Canada Proxies - Reliable CA IPs",
    description:
      "Utilize Canadian proxies for data extraction, monitoring, and more. Enjoy high-performance IPs with robust geo-targeting features.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function CanadaLocation() {
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
