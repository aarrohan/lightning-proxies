import type { Metadata } from "next";
import HeroSection from "./HeroSection";

export const metadata: Metadata = {
  title: "Coming Soon - Lightning Proxies",
};

export default function ComingSoon() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
