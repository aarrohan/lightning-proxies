import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/global/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lightning Proxies: Data Extraction Excellence at Scale",
  description:
    "Gather data efficiently with the industry-leading proxy network and enjoy limitless web scraping solutions on the most intense tasks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NavigationBar />

        {children}
      </body>
    </html>
  );
}
