import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";
import UseCasesSection from "@/app/(landing)/UseCasesSection";
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
      <UseCasesSection />
      <LocationsSection />
      <FollowUpSection />
    </main>
  );
}
