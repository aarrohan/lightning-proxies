import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import FAQsSection from "./FAQsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Datacenter Proxies Pricing - Cost-Effective Options",
  description:
    "Compare affordable plans for datacenter proxies. High-performance solutions tailored to your specific business needs.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing/datacenter-proxies`,
    title: "Datacenter Proxies Pricing - Cost-Effective Options",
    description:
      "Compare affordable plans for datacenter proxies. High-performance solutions tailored to your specific business needs.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function DatacenterProxiesPricing() {
  return (
    <main>
      <HeroSection />
      <BenefitsSection />
      <FAQsSection />
      <FollowUpSection />
    </main>
  );
}
