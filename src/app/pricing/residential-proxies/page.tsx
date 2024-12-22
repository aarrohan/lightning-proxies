import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import BenefitsSection from "./BenefitsSection";
import FAQsSection from "./FAQsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Residential Proxies Pricing - Affordable Plans",
  description:
    "Explore flexible and competitive pricing plans for residential proxies. Enjoy high-speed, geo-targeted IPs with no hidden costs.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing/residential-proxies`,
    title: "Residential Proxies Pricing - Affordable Plans",
    description:
      "Explore flexible and competitive pricing plans for residential proxies. Enjoy high-speed, geo-targeted IPs with no hidden costs.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
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
