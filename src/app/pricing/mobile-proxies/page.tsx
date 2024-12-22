import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import FAQsSection from "./FAQsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Mobile Proxies Pricing - Secure and Reliable",
  description:
    "Discover cost-effective mobile proxy pricing plans. Access secure and fast 4G/5G proxies across 50+ locations.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing/mobile-proxies`,
    title: "Mobile Proxies Pricing - Secure and Reliable",
    description:
      "Discover cost-effective mobile proxy pricing plans. Access secure and fast 4G/5G proxies across 50+ locations.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
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
