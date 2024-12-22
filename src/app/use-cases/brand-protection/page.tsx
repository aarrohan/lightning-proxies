import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ProductsSection from "../web-scraping/ProductsSection";
import UseCasesSection2 from "./UseCasesSection";
import UseCasesSection from "@/app/(landing)/UseCasesSection";
import DetailsSection from "./DetailsSection";
import LocationsSection from "../web-scraping/LocationsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Brand Protection Proxies - Safeguard Your Digital Assets",
  description:
    "Protect your brand with reliable proxies for anti-counterfeiting, copyright monitoring, and market surveillance. We offer secure solutions for enhanced digital security.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/use-cases/brand-protection`,
    title: "Brand Protection Proxies - Safeguard Your Digital Assets",
    description:
      "Protect your brand with reliable proxies for anti-counterfeiting, copyright monitoring, and market surveillance. We offer secure solutions for enhanced digital security.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function BrandProtectionUseCase() {
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
