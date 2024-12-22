import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ClientsSection from "./ClientsSection";
import ProductsSection from "./ProductsSection";
import FeaturesSection from "./FeaturesSection";
import UseCasesSection from "./UseCasesSection";
import DashboardSection from "./DashboardSection";
import APISection from "./APISection";
import LocationsSection from "./LocationsSection";
import ReviewsSection from "./ReviewsSection";
import BenefitsSection from "./BenefitsSection";
import ExtensionSection from "./ExtensionSection";
import BlogSection from "./BlogSection";
import UpcomingSection from "./UpcomingSection";
import FollowUpSection from "./FollowUpSection";

export const metadata: Metadata = {
  title:
    "LightningProxies - Simplified Proxy Solutions for Web Data Extraction",
  description:
    "Access 20M+ premium Residential, Datacenter, and IPv6 Proxies. Designed for seamless web data extraction, scraping, and monitoring, we provide reliable proxy solutions tailored to your business needs.",
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_APP_URL,
    title:
      "LightningProxies - Simplified Proxy Solutions for Web Data Extraction",
    description:
      "Access 20M+ premium Residential, Datacenter, and IPv6 Proxies. Designed for seamless web data extraction, scraping, and monitoring, we provide reliable proxy solutions tailored to your business needs.",
    images: "https://i.imgur.com/s2kQsiw.png",
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientsSection />
      <ProductsSection />
      <FeaturesSection />
      <UseCasesSection />
      <DashboardSection />
      <APISection />
      <LocationsSection />
      <ReviewsSection />
      <BenefitsSection />
      <ExtensionSection />
      <BlogSection />
      <UpcomingSection />
      <FollowUpSection />
    </main>
  );
}
