import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ArticlesSection from "./ArticlesSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Blog - Lightning Proxies",
};

export default function Blog() {
  return (
    <main className="bg-off-white">
      <HeroSection />
      <ArticlesSection />
      <FollowUpSection />
    </main>
  );
}
