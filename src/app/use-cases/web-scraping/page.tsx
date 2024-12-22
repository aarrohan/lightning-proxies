import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ProductsSection from "./ProductsSection";
import UseCasesSection2 from "./UseCasesSection";
import UseCasesSection from "@/app/(landing)/UseCasesSection";
import DetailsSection from "./DetailsSection";
import LocationsSection from "./LocationsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Web Scraping Proxies - Seamless Data Collection",
  description:
    "Enhance your web scraping tasks with secure and anonymous proxies. Residential and datacenter proxies tailored for large-scale, high-speed data gathering.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/use-cases/web-scraping`,
    title: "Web Scraping Proxies - Seamless Data Collection",
    description:
      "Enhance your web scraping tasks with secure and anonymous proxies. Residential and datacenter proxies tailored for large-scale, high-speed data gathering.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function WebScrapingUseCase() {
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
