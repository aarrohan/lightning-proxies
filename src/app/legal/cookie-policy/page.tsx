import type { Metadata } from "next";
import FollowUpSection from "@/app/(landing)/FollowUpSection";
import Links from "./Links";

export const metadata: Metadata = {
  title: "Cookie Policy - Understanding Cookies Usage",
  description:
    "Discover how we use cookies to improve your experience. Learn about the types of cookies we use and how you can manage them.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/legal/cookie-policy`,
    title: "Cookie Policy - Understanding Cookies Usage",
    description:
      "Discover how we use cookies to improve your experience. Learn about the types of cookies we use and how you can manage them.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function CookiePolicy() {
  return (
    <main>
      <section className="pt-[70px]">
        <div className="relative mx-auto container max-w-[1320px] py-20 sm:py-28 px-5 grid lg:grid-cols-[300px_auto] gap-28">
          <Links />

          <div>
            <h1 className="mb-4 max-w-[500px] text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
              Cookie Policy
            </h1>

            <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/50">
              Last updated: August 30, 2024
            </p>

            <span className="my-7 sm:my-10 w-[45px] h-px bg-accent block"></span>

            <div className="space-y-8">
              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                This website is operated by LightningProxies. Throughout the
                site, the terms “we”, “us” and “our” refer to LightningProxies.
                LightningProxies offers this website, including all information,
                tools and Services available from this site to you, the user,
                conditioned upon your acceptance of all terms, conditions,
                policies and notices stated here.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Overview
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                By visiting our site and/ or purchasing something from us, you
                engage in our “Service” and agree to be bound by the following
                terms and conditions (“Terms of Service”, “Terms”), including
                those additional terms and conditions and policies referenced
                herein and/or available by hyperlink. These Terms of Service
                apply to all users of the site, including without limitation
                users who are browsers, vendors, customers, merchants, and/ or
                contributors of content.
              </p>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                Please read these Terms of Service carefully before accessing or
                using our website. By accessing or using any part of the site,
                you agree to be bound by these Terms of Service. If you do not
                agree to all the terms and conditions of this agreement, then
                you may not access the website or use any Services. If these
                Terms of Service are considered an offer, acceptance is
                expressly limited to these Terms of Service.
              </p>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                Any new features or tools which are added to the current store
                shall also be subject to the Terms of Service. You can review
                the most current version of the Terms of Service at any time on
                this page. We reserve the right to update, change or replace any
                part of these Terms of Service by posting updates and/or changes
                to our website. It is your responsibility to check this page
                periodically for changes. Your continued use of or access to the
                website following the posting of any changes constitutes
                acceptance of those changes.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                01 - Online Store Terms
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                By agreeing to these Terms of Service, you represent that you
                are at least the age of majority in your state or province of
                residence, or that you are the age of majority in your state or
                province of residence and you have given us your consent to
                allow any of your minor dependents to use this site.
              </p>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                You may not use our products for any illegal or unauthorized
                purpose nor may you, in the use of the Service, violate any laws
                in your jurisdiction (including but not limited to copyright
                laws).
              </p>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                You must not transmit any worms or viruses or any code of a
                destructive nature.
              </p>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                A breach or violation of any of the Terms will result in an
                immediate termination of your Services.
              </p>

              <h4 className="text-base sm:text-xl font-medium tracking-[-0.16px] sm:tracking-[-0.2px]">
                Our contact information is posted below - H2
              </h4>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                BOLD TEXT EXAMPLE
              </p>

              <p className="text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                Email:{" "}
                <span className="text-accent">
                  support@lightningproxies.net
                </span>{" "}
                <br />
                Telegram: <span className="text-accent">@lightningproxies</span>
              </p>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                Thank you and welcome to Lightning Proxies!
              </p>
            </div>
          </div>
        </div>
      </section>

      <FollowUpSection />
    </main>
  );
}
