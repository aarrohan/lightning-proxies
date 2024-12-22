import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import FAQsSection from "./FAQsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Unlimited Residential Proxies - Flat-Rate Pricing",
  description:
    "Explore unlimited bandwidth residential proxies with flat-rate plans. Ideal for high-volume data extraction needs.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing/unlimited-residential-proxies`,
    title: "Unlimited Residential Proxies - Flat-Rate Pricing",
    description:
      "Explore unlimited bandwidth residential proxies with flat-rate plans. Ideal for high-volume data extraction needs.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function UnlimitedResidentialProxiesPricing() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <FAQsSection />
      <FollowUpSection />
    </main>
  );
}
