import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import TopicsSection from "./TopicsSection";
import AssistanceSection from "./AssistanceSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Help Center - Lightning Proxies",
};

export default function HelpCenter() {
  return (
    <main>
      <HeroSection />
      <TopicsSection />
      <AssistanceSection />
      <FollowUpSection />
    </main>
  );
}
