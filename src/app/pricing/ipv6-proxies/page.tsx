import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import FAQsSection from "./FAQsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "IPv6 Proxies Pricing - Scalable and Budget-Friendly",
  description:
    "Find affordable pricing for IPv6 proxies. Access billions of IPs with flexible targeting options.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing/ipv6-proxies`,
    title: "IPv6 Proxies Pricing - Scalable and Budget-Friendly",
    description:
      "Find affordable pricing for IPv6 proxies. Access billions of IPs with flexible targeting options.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function IPv6ProxiesPricing() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <FAQsSection />
      <FollowUpSection />
    </main>
  );
}
