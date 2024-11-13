import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import FAQsSection from "./FAQsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Mobile Proxies Pricing - Lightning Proxies",
  description:
    "Gather data efficiently with the industry-leading proxy network and enjoy limitless web scraping solutions on the most intense tasks.",
};

export default function MobileProxiesPricing() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <FAQsSection />
      <FollowUpSection />
    </main>
  );
}
