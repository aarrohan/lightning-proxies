import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ArticlesSection from "./ArticlesSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Blog - Insights & Updates on Proxy Solutions",
  description:
    "Stay informed with our expert blogs on proxy solutions, web scraping, and data extraction. Explore industry insights, tutorials, and updates to empower your online operations.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/blog`,
    title: "Blog - Insights & Updates on Proxy Solutions",
    description:
      "Stay informed with our expert blogs on proxy solutions, web scraping, and data extraction. Explore industry insights, tutorials, and updates to empower your online operations.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
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
