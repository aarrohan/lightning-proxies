import type { Metadata } from "next";
import HeroSection from "./HeroSection";

export const metadata: Metadata = {
  title: "Coming Soon - Exciting New Features on the Horizon",
  description:
    "Discover what’s next at LightningProxies. Stay tuned for upcoming features, tools, and solutions designed to enhance your proxy experience.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/coming-soon`,
    title: "Coming Soon - Exciting New Features on the Horizon",
    description:
      "Discover what’s next at LightningProxies. Stay tuned for upcoming features, tools, and solutions designed to enhance your proxy experience.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function ComingSoon() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
