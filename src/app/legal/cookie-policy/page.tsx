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
              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Introduction
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                Lightning Hosting Solutions SRL, located in Romania, operates
                the website lightningproxies.net. This cookie policy informs you
                about our use of cookies and similar technologies on our
                website. By using our website, you consent to the use of cookies
                in accordance with this policy.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                What Are Cookies?
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                Cookies are small text files stored on your device when you
                visit a website. They help enhance your experience, enable us to
                understand how our site is being used, and make our
                communication with you more relevant.{" "}
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Types of Cookies We Use
              </h3>

              <h4 className="text-base sm:text-xl font-medium tracking-[-0.16px] sm:tracking-[-0.2px]">
                Necessary Cookies
              </h4>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                These cookies are essential for the operation of our website,
                enabling you to navigate the site and access its features, such
                as secure areas. <br />
                Examples: Authentication cookies for logged-in users.
              </p>

              <h4 className="text-base sm:text-xl font-medium tracking-[-0.16px] sm:tracking-[-0.2px]">
                Performance Cookies
              </h4>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                These cookies collect information about how you use our website,
                such as which pages you visit most frequently, helping us to
                improve the site’s functionality.
                <br />
                Examples: Google Tag Manager for tracking website performance.
              </p>

              <h4 className="text-base sm:text-xl font-medium tracking-[-0.16px] sm:tracking-[-0.2px]">
                Functionality Cookies
              </h4>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                These cookies remember choices you make to provide enhanced,
                personalized features.
                <br />
                Examples: Crisp for customer support interactions.
              </p>

              <h4 className="text-base sm:text-xl font-medium tracking-[-0.16px] sm:tracking-[-0.2px]">
                Security Cookies
              </h4>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                These cookies help us identify and prevent security risks.
                <br />
                Examples: Cloudflare for security protection.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Managing Cookies
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                You can manage your cookie preferences through our cookie banner
                or by visiting the cookie settings in the footer of our website.
                You may also configure your browser settings to refuse cookies,
                although this may affect your ability to use certain features of
                our site.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Data Sharing and Third-Party Cookies
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                We use third-party services that may set cookies for performance
                and analytical purposes. These third parties include, but are
                not limited to: <br />- Google Tag Manager <br /> - Crisp <br />{" "}
                - Cloudflare <br /> - Facebook <br /> These third parties may
                collect and use information in accordance with their respective
                privacy policies.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                User Rights
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                You have the right to access, rectify, delete, and object to the
                processing of your personal data collected via cookies. To
                exercise these rights, please contact us at
                support@lightningproxies.net.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FollowUpSection />
    </main>
  );
}
