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
  title: "France Proxies - Premium French IPs",
  description:
    "Connect with French IP addresses for accurate geo-restricted data. Explore high-speed residential and datacenter proxies for any use case.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/locations/france`,
    title: "France Proxies - Premium French IPs",
    description:
      "Connect with French IP addresses for accurate geo-restricted data. Explore high-speed residential and datacenter proxies for any use case.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function FranceLocation() {
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
