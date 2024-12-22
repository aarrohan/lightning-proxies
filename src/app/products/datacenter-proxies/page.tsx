import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import Info1Section from "./Info1Section";
import Info2Section from "./Info2Section";
import FeaturesSection from "./FeaturesSection";
import UseCasesSection from "@/app/(landing)/UseCasesSection";
import DashboardSection from "@/app/(landing)/DashboardSection";
import APISection from "@/app/(landing)/APISection";
import LocationsSection from "@/app/(landing)/LocationsSection";
import ReviewsSection from "@/app/(landing)/ReviewsSection";
import ExtensionSection from "@/app/(landing)/ExtensionSection";
import ExploreSection from "./ExploreSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Buy Datacenter Proxies - Unlimited Bandwidth",
  description:
    "Achieve top-tier performance with 15,000+ datacenter proxies in 5 global locations. Enjoy unlimited bandwidth, high concurrency, and rotating or sticky sessions for seamless operations.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/products/datacenter-proxies`,
    title: "Buy Datacenter Proxies - Unlimited Bandwidth",
    description:
      "Achieve top-tier performance with 15,000+ datacenter proxies in 5 global locations. Enjoy unlimited bandwidth, high concurrency, and rotating or sticky sessions for seamless operations.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function DatacenterProxiesProduct() {
  return (
    <main>
      <HeroSection />
      <Info1Section />
      <Info2Section />
      <FeaturesSection />
      <UseCasesSection />
      <DashboardSection />
      <APISection />
      <LocationsSection />
      <ReviewsSection />
      <ExtensionSection />
      <ExploreSection />
      <FollowUpSection />
    </main>
  );
}
