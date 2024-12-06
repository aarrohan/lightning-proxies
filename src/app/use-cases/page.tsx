import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";
import ProductsSection from "./ad-verification/ProductsSection";

export const metadata: Metadata = {
  title: "Use Cases - Lightning Proxies",
};

export default function UseCases() {
  return (
    <main>
      <HeroSection />
      <ProductsSection />
      <div className="pt-20 sm:pt-44"></div>
      <FollowUpSection />
    </main>
  );
}
