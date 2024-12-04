import type { Metadata } from "next";
import HeroSection from "./HeroSection";

export const metadata: Metadata = {
  title: "Partners - Lightning Proxies",
};

export default function Partners() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
