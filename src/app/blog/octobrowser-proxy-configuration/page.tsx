import type { Metadata } from "next";
import HeroSection from "./HeroSection";
import ArticlesSection from "./ArticlesSection";
import FollowUpSection from "@/app/(landing)/FollowUpSection";

export const metadata: Metadata = {
  title: "Setting Up a Proxy in the OctoBrowser",
  description:
    "Learn how to seamlessly integrate proxies into OctoBrowser. This guide covers setup steps, residential proxies, rotating datacenter proxies, and exclusive discount codes to enhance your browsing experience.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/blog/octobrowser-proxy-configuration`,
    title: "Setting Up a Proxy in the OctoBrowser",
    description:
      "Learn how to seamlessly integrate proxies into OctoBrowser. This guide covers setup steps, residential proxies, rotating datacenter proxies, and exclusive discount codes to enhance your browsing experience.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
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
