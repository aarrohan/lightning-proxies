import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ProductsSection from "../web-scraping/ProductsSection";
import UseCasesSection2 from "./UseCasesSection";
import UseCasesSection from "@/app/(landing)/UseCasesSection";
import DetailsSection from "./DetailsSection";
import LocationsSection from "../web-scraping/LocationsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Brand Protection Use Case - Lightning Proxies",
};

export default function BrandProtectionUseCase() {
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
