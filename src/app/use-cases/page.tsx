import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";
import ProductsSection from "./web-scraping/ProductsSection";

export const metadata: Metadata = {
  title: "Proxy Use Cases - Explore All Solutions",
  description:
    "Discover versatile proxy solutions for SERP monitoring, web scraping, brand protection, ad verification, and more. Power your business with reliable and scalable proxies.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/use-cases`,
    title: "Proxy Use Cases - Explore All Solutions",
    description:
      "Discover versatile proxy solutions for SERP monitoring, web scraping, brand protection, ad verification, and more. Power your business with reliable and scalable proxies.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function UseCases() {
  return (
    <main>
      <HeroSection />
      <ProductsSection />
      <div className="pt-20 sm:pt-44"></div>
      <FollowUpSection />
    </main>
  );
}
