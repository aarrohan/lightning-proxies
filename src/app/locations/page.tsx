import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import LocationsSection from "./usa/LocationsSection";
import ProductsSection from "./usa/ProductsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Locations - Lightning Proxies",
};

export default function Locations() {
  return (
    <main>
      <HeroSection />
      <LocationsSection />

      <div className="-mt-20 sm:-mt-44">
        <ProductsSection />
      </div>

      <div className="pt-20 sm:pt-44"></div>
      <FollowUpSection />
    </main>
  );
}
