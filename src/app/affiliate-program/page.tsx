import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Affiliate Program - Lightning Proxies",
};

export default function Affiliate() {
  return (
    <main>
      <HeroSection />
      <FollowUpSection />
    </main>
  );
}
