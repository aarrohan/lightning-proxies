import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import FAQsSection from "./FAQsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "ISP Proxies Pricing - Premium Static IPs",
  description:
    "Check our flexible pricing for ISP proxies. High-speed, tier-1 residential IPs at unbeatable prices.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing/isp-proxies`,
    title: "ISP Proxies Pricing - Premium Static IPs",
    description:
      "Check our flexible pricing for ISP proxies. High-speed, tier-1 residential IPs at unbeatable prices.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function ISPProxiesPricing() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <FAQsSection />
      <FollowUpSection />
    </main>
  );
}
