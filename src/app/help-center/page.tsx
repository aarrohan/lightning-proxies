import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import TopicsSection from "./TopicsSection";
import AssistanceSection from "./AssistanceSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Help Center - Support & Documentation",
  description:
    "Find answers to your questions in the Help Center. Access guides, FAQs, and 24/7 live chat support to optimize your proxy experience.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/help-center`,
    title: "Help Center - Support & Documentation",
    description:
      "Find answers to your questions in the Help Center. Access guides, FAQs, and 24/7 live chat support to optimize your proxy experience.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
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
