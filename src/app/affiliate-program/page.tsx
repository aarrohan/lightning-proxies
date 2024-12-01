import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import InfosSection from "./InfosSection";
import StepsSection from "./StepsSection";
import PaymentsSection from "./PaymentsSection";
import JoinSection from "./JoinSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Affiliate Program - Lightning Proxies",
};

export default function Affiliate() {
  return (
    <main>
      <HeroSection />
      <InfosSection />
      <StepsSection />
      <PaymentsSection />
      <JoinSection />
      <FollowUpSection />
    </main>
  );
}
