import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import FAQsSection from "./FAQsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Residential Proxies Pricing - Lightning Proxies",
};

export default function ResidentialProxiesPricing() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <FAQsSection />
      <FollowUpSection />
    </main>
  );
}
