import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ValuesSection from "./ValuesSection";
import HistorySection from "./HistorySection";
import TeamSection from "./TeamSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "About Us - Trusted Proxy Provider",
  description:
    "Learn more about us, a trusted name in proxy services. Our mission is to deliver reliable, scalable, and innovative proxy solutions for businesses worldwide.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/about`,
    title: "About Us - Trusted Proxy Provider",
    description:
      "Learn more about us, a trusted name in proxy services. Our mission is to deliver reliable, scalable, and innovative proxy solutions for businesses worldwide.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function About() {
  return (
    <main>
      <HeroSection />
      <ValuesSection />
      <HistorySection />
      <TeamSection />
      <FollowUpSection />
    </main>
  );
}
