import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ProductsSection from "../web-scraping/ProductsSection";
import UseCasesSection2 from "./UseCasesSection";
import UseCasesSection from "@/app/(landing)/UseCasesSection";
import DetailsSection from "./DetailsSection";
import LocationsSection from "../web-scraping/LocationsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Ad Verification Proxies - Ensure Ad Integrity",
  description:
    "Monitor and verify ads with rotating and sticky proxies. Proxies ensure uninterrupted access to geo-restricted content and validate ad performance in real-time.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/use-cases/ad-verification`,
    title: "Ad Verification Proxies - Ensure Ad Integrity",
    description:
      "Monitor and verify ads with rotating and sticky proxies. Proxies ensure uninterrupted access to geo-restricted content and validate ad performance in real-time.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function AdVerificationUseCase() {
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
