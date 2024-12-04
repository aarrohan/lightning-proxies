import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import PartnersSection from "./PartnersSection";

export const metadata: Metadata = {
  title: "Partners - Lightning Proxies",
};

export default function Partners() {
  return (
    <main>
      <HeroSection />
      <PartnersSection />
    </main>
  );
}
