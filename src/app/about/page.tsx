import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "About - Lightning Proxies",
};

export default function About() {
  return (
    <main>
      <HeroSection />
      <FollowUpSection />
    </main>
  );
}
