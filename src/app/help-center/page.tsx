import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Help Center - Lightning Proxies",
};

export default function HelpCenter() {
  return (
    <main>
      <HeroSection />

      <FollowUpSection />
    </main>
  );
}
