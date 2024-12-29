import type { Metadata } from "next";
import FollowUpSection from "@/app/(landing)/FollowUpSection";
import Links from "./Links";

export const metadata: Metadata = {
  title: "Privacy Policy - Data Protection and Usage",
  description:
    "Learn how we collect, use, and protect your data. Our privacy policy ensures transparency and compliance with data protection regulations.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/legal/privacy-policy`,
    title: "Privacy Policy - Data Protection and Usage",
    description:
      "Learn how we collect, use, and protect your data. Our privacy policy ensures transparency and compliance with data protection regulations.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function PrivacyPolicy() {
  return (
    <main>
      <section className="pt-[70px]">
        <div className="relative mx-auto container max-w-[1320px] py-20 sm:py-28 px-5 grid lg:grid-cols-[300px_auto] gap-28">
          <Links />

          <div>
            <h1 className="mb-4 max-w-[500px] text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
              Privacy Policy
            </h1>

            <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/50">
              Last updated: August 30, 2024
            </p>

            <span className="my-7 sm:my-10 w-[45px] h-px bg-accent block"></span>

            <div className="space-y-8">
              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                Your privacy is important to us. It is LightningProxies’s policy
                to respect your privacy and comply with any applicable law and
                regulation regarding any personal information. We may collect
                about you, including across our website,
                https://lightningproxies.net/, and other sites we own and
                operate.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Information We Collect
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                Information we collect includes both information you knowingly
                and actively provide us when using or participating in any of
                our services and promotions, and any information automatically
                sent by your devices in the course of accessing our products and
                services.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Log Data
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                When you visit our website, our servers may automatically log
                the standard data provided by your web browser. It may include
                your device’s Internet Protocol (IP) address, your browser type
                and version, the pages you visit, the time and date of your
                visit, the time spent on each page, other details about your
                visit, and technical details that occur in conjunction with any
                errors you may encounter. <br />
                Please be aware that while this information may not be
                personally identifying by itself, it may be possible to combine
                it with other data to personally identify individual persons.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Personal Information
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                We may ask for personal information which may include one or
                more of the following: <br />
                Name <br /> Email
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Legitimate Reasons for Processing Your Personal Information
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                We only collect and use your personal information when we have a
                legitimate reason for doing so. In which instance, we only
                collect personal information that is reasonably necessary to
                provide our services to you.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Collection and Use of Information
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                We may collect personal information from you when you do any of
                the following on our website: <br />· Use a mobile device or web
                browser to access our content <br />
                · Contact us via email, social media, or on any similar
                technologies <br />
                · When you mention us on social media <br />
                We may collect, hold, use, and disclose information for the
                following purposes, and personal information will not be further
                processed in a manner that is incompatible with these purposes:{" "}
                <br />
                · to contact and communicate with you <br />
                · for internal record keeping and administrative purposes <br />
                · for security and fraud prevention, and to ensure that our
                sites and apps are safe, secure, and used in line with our terms
                of use <br />
                Please be aware that we may combine information we collect about
                you with general information or research data we receive from
                other trusted sources.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Security of Your Personal Information
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                When we collect and process personal information, and while we
                retain this information, we will protect it within commercially
                acceptable means to prevent loss and theft, as well as
                unauthorized access, disclosure, copying, use, or modification.{" "}
                <br />
                Although we will do our best to protect the personal information
                you provide to us, we advise that no method of electronic
                transmission or storage is 100% secure, and no one can guarantee
                absolute data security. We will comply with laws applicable to
                us in respect of any data breach. <br />
                You are responsible for selecting any password (preferably not
                common to other services of which you may be a part of) and its
                overall security strength, ensuring the security of your own
                information within the bounds of our services.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                How Long We Keep Your Personal Information
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                We keep your personal information only for as long as we need
                to. This period may depend on what we are using your information
                for, in accordance with this privacy policy. If your personal
                information is no longer required, we will delete it or make it
                anonymous by removing all details that identify you. <br />
                However, if necessary, we may retain your personal information
                for our compliance with a legal, accounting, or reporting
                obligation or for archiving purposes in the public interest,
                scientific, or historical research purposes or statistical
                purposes.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Minor’s Privacy
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                We do not aim any of our products or services directly at minors
                under the age of 18, and we do not knowingly collect personal
                information about minors under 18.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Disclosure of Personal Information to Third Parties
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                To collect and process data, we may disclose personal
                information to: <br />
                · a parent, subsidiary, or affiliate of our company <br />
                · third party service providers for the purpose of enabling them
                to provide their services, for example, IT service providers,
                data storage, hosting and server providers, advertisers, or
                analytics platforms <br />
                · our employees, contractors, and/or related entities <br />
                · our existing or potential agents or business partners <br />
                · sponsors or promoters of any competition, sweepstakes, or
                promotion we run <br />
                · courts, tribunals, regulatory authorities, and law enforcement
                officers, as required by law, in connection with any actual or
                prospective legal proceedings, or in order to establish,
                exercise, or defend our legal rights <br />· third parties,
                including agents or sub-contractors, who assist us in providing
                information, products, services, or direct marketing to you.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                International Transfers of Personal Information
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                The personal information we collect is stored and/or processed
                where we or our partners, affiliates, and third-party providers
                maintain facilities. Please be aware that the locations to which
                we store, process, or transfer your personal information may not
                have the same data protection laws as the country in which you
                initially provided the information. If we transfer your personal
                information to third parties in other countries: (i) we will
                perform those transfers in accordance with the requirements of
                applicable law and (ii) we will protect the transferred personal
                information in accordance with this privacy policy.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Your Rights and Controlling Your Personal Information
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                You always retain the right to withhold personal information
                from us, with the understanding that your experience of our
                website may be affected. We will not discriminate against you
                for exercising any of your rights over your personal
                information. If you do provide us with personal information you
                understand that we will collect, hold, use and disclose it in
                accordance with this privacy policy. You retain the right to
                request details of any personal information we hold about you.{" "}
                <br />
                If we receive personal information about you from a third party,
                we will protect it as set out in this privacy policy. If you are
                a third party providing personal information about somebody
                else, you represent and warrant that you have such person’s
                consent to provide the personal information to us. <br />
                If you have previously agreed to us using your personal
                information for direct marketing purposes, you may change your
                mind at any time. We will provide you with the ability to
                unsubscribe from our email-database or opt out of
                communications. Please be aware we may need to request specific
                information from you to help us confirm your identity. <br />
                If you believe that any information, we hold about you is
                inaccurate, out of date, incomplete, irrelevant, or misleading,
                please contact us using the details provided in this privacy
                policy. We will take reasonable steps to correct any information
                found to be inaccurate, incomplete, misleading, or out of date.{" "}
                <br />
                If you believe that we have breached a relevant data protection
                law and wish to make a complaint, please contact us using the
                details below and provide us with full details of the alleged
                breach. We will promptly investigate your complaint and respond
                to you, in writing, setting out the outcome of our investigation
                and the steps we will take to deal with your complaint. You also
                have the right to contact a regulatory body or data protection
                authority in relation to your complaint.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Use of Cookies
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                We use “cookies” to collect information about you and your
                activity across our site. A cookie is a small piece of data that
                our website stores on your computer, and accesses each time you
                visit, so we can understand how you use our site. This helps us
                serve you content based on preferences you have specified.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Limits of Our Policy
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                Our website may link to external sites that are not operated by
                us. Please be aware that we have no control over the content and
                policies of those sites and cannot accept responsibility or
                liability for their respective privacy practices.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Changes to This Policy
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                At our discretion, we may change our privacy policy to reflect
                updates to our business processes, current acceptable practices,
                or legislative or regulatory changes. If we decide to change
                this privacy policy, we will post the changes here at the same
                link by which you are accessing this privacy policy. <br />
                If required by law, we will get your permission or give you the
                opportunity to opt in to or opt out of, as applicable, any new
                uses of your personal information.
              </p>

              <h3 className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Contact Us
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/80">
                For any questions or concerns regarding your privacy, you may
                contact us using the following details: <br />
                By email at support@lightningproxies.net
                <br />
                By telegram at @lightningproxies
              </p>
            </div>
          </div>
        </div>
      </section>

      <FollowUpSection />
    </main>
  );
}
