import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import FAQsSection from "./FAQsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Residential Proxies Pricing - Lightning Proxies",
  description:
    "Gather data efficiently with the industry-leading proxy network and enjoy limitless web scraping solutions on the most intense tasks.",
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
