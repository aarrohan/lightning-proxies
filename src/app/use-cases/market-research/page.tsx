import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ProductsSection from "../web-scraping/ProductsSection";
import UseCasesSection2 from "./UseCasesSection";
import UseCasesSection from "@/app/(landing)/UseCasesSection";
import DetailsSection from "./DetailsSection";
import LocationsSection from "../web-scraping/LocationsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Market Research Proxies - Actionable Insights, Unrestricted",
  description:
    "Conduct thorough market research with robust proxy networks. Access geo-targeted data without restrictions to power competitive analysis and consumer insights.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/use-cases/market-research`,
    title: "Market Research Proxies - Actionable Insights, Unrestricted",
    description:
      "Conduct thorough market research with robust proxy networks. Access geo-targeted data without restrictions to power competitive analysis and consumer insights.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function MarketResearchUseCase() {
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
