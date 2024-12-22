import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import LocationsSection from "./usa/LocationsSection";
import ProductsSection from "./usa/ProductsSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Proxies by Location - Explore Global Options",
  description:
    "Discover proxies from the United States, United Kingdom, France, China, and more. Access our full range of geo-targeted IPs for seamless operations.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/locations`,
    title: "Proxies by Location - Explore Global Options",
    description:
      "Discover proxies from the United States, United Kingdom, France, China, and more. Access our full range of geo-targeted IPs for seamless operations.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function Locations() {
  return (
    <main>
      <HeroSection />
      <LocationsSection />

      <div className="-mt-20 sm:-mt-44">
        <ProductsSection />
      </div>

      <div className="pt-20 sm:pt-44"></div>
      <FollowUpSection />
    </main>
  );
}
