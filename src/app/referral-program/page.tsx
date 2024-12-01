import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Referral Program - Lightning Proxies",
};

export default function Referral() {
  return (
    <main>
      <HeroSection />
      <FollowUpSection />
    </main>
  );
}
