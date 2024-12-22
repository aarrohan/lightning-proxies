import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ProductsSection from "../web-scraping/ProductsSection";
import UseCasesSection2 from "./UseCasesSection";
import UseCasesSection from "@/app/(landing)/UseCasesSection";
import DetailsSection from "./DetailsSection";
import LocationsSection from "../web-scraping/LocationsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "SERP Monitoring Proxies - Reliable SEO Data Collection",
  description:
    "Track SERP rankings effortlessly with high-performance proxies. We provide rotating residential and datacenter proxies for accurate and uninterrupted SEO monitoring.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/use-cases/serp-monitoring`,
    title: "SERP Monitoring Proxies - Reliable SEO Data Collection",
    description:
      "Track SERP rankings effortlessly with high-performance proxies. We provide rotating residential and datacenter proxies for accurate and uninterrupted SEO monitoring.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function SerpMonitoringUseCase() {
  return (
    <main>
      <HeroSection />
      <ProductsSection />
      <UseCasesSection2 />
      <UseCasesSection />
      <DetailsSection />
      <LocationsSection />
      <FollowUpSection />
    </main>
  );
}
