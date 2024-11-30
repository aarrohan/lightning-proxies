import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ArticlesSection from "./ArticlesSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Article - Lightning Proxies",
};

export default function Article() {
  return (
    <main className="bg-off-white">
      <HeroSection />
      <ArticlesSection />
      <FollowUpSection />
    </main>
  );
}
