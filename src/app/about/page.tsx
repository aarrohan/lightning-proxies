import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ValuesSection from "./ValuesSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "About - Lightning Proxies",
};

export default function About() {
  return (
    <main>
      <HeroSection />
      <ValuesSection />
      <FollowUpSection />
    </main>
  );
}
