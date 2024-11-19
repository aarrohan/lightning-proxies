import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";
import UseCasesSection2 from "./UseCasesSection";
import UseCasesSection from "@/app/(landing)/UseCasesSection";
import DetailsSection from "./DetailsSection";
import LocationsSection from "./LocationsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Datacenter Proxies Pricing - Lightning Proxies",
};

export default function DatacenterProxiesPricing() {
  return (
    <main>
      <HeroSection />
      <ProductsSection />
      <UseCasesSection2 />
      <UseCasesSection />
      <DetailsSection />
      <LocationsSection />
      <FollowUpSection />
    </main>
  );
}
