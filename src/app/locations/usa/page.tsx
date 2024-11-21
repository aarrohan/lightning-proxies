import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";
import Info1Section from "./Info1Section";
import UseCasesSection from "@/app/(landing)/UseCasesSection";
import Info2Section from "./Info2Section";
import SupportedSection from "./SupportedSection";
import LocationsSection from "./LocationsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "USA Location - Lightning Proxies",
};

export default function USALocation() {
  return (
    <main>
      <HeroSection />
      <ProductsSection />
      <Info1Section />
      <UseCasesSection />
      <Info2Section />
      <SupportedSection />
      <LocationsSection />
      <FollowUpSection />
    </main>
  );
}
