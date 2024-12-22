import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import InfosSection from "./InfosSection";
import FeaturesSection from "./FeaturesSection";
import StepsSection from "./StepsSection";
import DashboardSection from "./DashboardSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Proxy Reseller Program - Scale Your Business",
  description:
    "Join our reseller program to access high-quality proxies at wholesale prices. Enjoy competitive margins, robust infrastructure, and 24/7 support.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/reseller-program`,
    title: "Proxy Reseller Program - Scale Your Business",
    description:
      "Join our reseller program to access high-quality proxies at wholesale prices. Enjoy competitive margins, robust infrastructure, and 24/7 support.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function ResellerProgram() {
  return (
    <main>
      <HeroSection />
      <InfosSection />
      <FeaturesSection />
      <StepsSection />
      <DashboardSection />
      <FollowUpSection />
    </main>
  );
}
