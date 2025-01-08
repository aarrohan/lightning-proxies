import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Subscription Cancel",
  description:
    "Your email subscription has been successfully cancelled. You will no longer receive any emails from us.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/email-subscription/cancel`,
    title: "Email Subscription Cancel",
    description:
      "Your email subscription has been successfully cancelled. You will no longer receive any emails from us.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function ComingSoon() {
  return (
    <iframe
      src="https://lp-auth.vercel.app/email-subscription/cancel"
      className="fixed z-[998] top-0 left-0 w-full h-full"
    ></iframe>
  );
}
