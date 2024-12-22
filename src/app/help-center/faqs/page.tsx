import type { Metadata } from "next";
import FollowUpSection from "@/app/(landing)/FollowUpSection";
import FAQ, { IProps as IFAQ } from "@/components/ui/FAQ";
import Link from "next/link";
import Aside from "./Aside";

export const metadata: Metadata = {
  title: "FAQs - Frequently Asked Questions",
  description:
    "Find answers to the most commonly asked questions about our proxy services, pricing, and setup. Explore our FAQ section to get the support you need.",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_APP_URL}/help-center/faqs`,
    title: "FAQs - Frequently Asked Questions",
    description:
      "Find answers to the most commonly asked questions about our proxy services, pricing, and setup. Explore our FAQ section to get the support you need.",
    images: `${process.env.NEXT_PUBLIC_APP_URL}/images/og-img.png`,
  },
};

export default function FAQs() {
  const generalFaqs: IFAQ[] = [
    {
      question: "When was LightningProxies founded?",
      answer:
        "LightningProxies was founded in January 2023 to provide high-quality proxy services and year-round support.",
    },
    {
      question: "What proxy types does LightningProxies provide?",
      answer: "We offer Residential, Datacenter, Mobile, and ISP Proxies.",
    },
    {
      question: "How can I contact your support team?",
      answer: `Our support team is available 24/7 through: <br/><br/> • Live Chat (fastest response time) <br/> • Telegram <br/> • Discord <br/> • Email <br/><br/> We recommend using Live Chat first for the quickest reply.`,
    },
    {
      question: "Do you provide trial periods for proxies before purchasing?",
      answer:
        "Yes, we do. Please contact our support team via Live Chat to apply for a free trial. Certain conditions apply.",
    },
    {
      question: "What payment methods do you accept?",
      answer: `We accept payments via: <br/><br/> • Credit Card <br/> • PayPal (processed with Stripe) <br/> • Crypto (through Cryptomus, supporting most major cryptocurrencies).`,
    },
  ];

  const refundFaqs: IFAQ[] = [
    {
      question: "What is LightningProxies’ refund policy?",
      answer:
        "You can find our refund policy in Section 20 of the Terms of Service page.",
    },
    {
      question: "Can I get a refund for my proxies?",
      answer:
        "Yes, refunds are available if you meet the conditions outlined in Section 20 of our Terms of Service page.",
    },
  ];

  const troubleshootingFaqs: IFAQ[] = [
    {
      question:
        "Do you have a guide on how to test or set up your proxies in different tools or browsers?",
      answer:
        "Yes! You can contact our Live Chat support to get a link to our public proxy guide. Alternatively, the guide is also available on our dashboard in the left-side tab.",
    },
  ];

  const residentialProxiesFaqs: IFAQ[] = [
    {
      question: "What is a residential proxy?",
      answer:
        "A residential proxy is a type of proxy server that uses IP addresses assigned to real residential devices (like smartphones, computers, and routers) rather than data center servers. These IP addresses are provided by Internet Service Providers (ISPs) to homeowners, which makes them appear as regular user traffic, giving the proxy a more natural, less detectable appearance.",
    },
    {
      question: "Do you offer a residential proxy free trial?",
      answer:
        "Yes, we do offer a free trial for our residential proxies! To get started, simply reach out to our support team via Live Chat. They’ll assist you with your request and schedule your free trial.",
    },
    {
      question: "What is a sticky residential proxy?",
      answer:
        "A sticky residential proxy is a type of residential proxy that maintains the same IP address for an extended period of time, rather than rotating with every request. This means that you can continue to use the same IP address for a specific session or for a longer duration, making it ideal for tasks where consistency is important.",
    },
    {
      question: "What is an unlimited residential proxy?",
      answer:
        "An unlimited residential proxy is a proxy that offers unrestricted data usage and connections. LightningProxies provides unlimited residential proxies, ideal for tasks like web scraping, data mining, and much more.",
    },
    {
      question: "Are residential proxies legal? ",
      answer:
        "Yes, residential proxies are generally legal to use, as they use IP addresses provided by Internet Service Providers (ISPs) to real users. However, the legality of using residential proxies depends on how they are used and the laws in your specific country or region.",
    },
  ];

  const datacenterProxiesFaqs: IFAQ[] = [
    {
      question: "What is a datacenter proxy?",
      answer:
        "Datacenter proxies are IP addresses from data centers that provide fast, cost-effective anonymity and allow access to georestricted content, but are easier to detect than residential proxies.",
    },
    {
      question:
        "What's the difference between ISP proxies and datacenter proxies?",
      answer:
        "The key difference between ISP proxies and datacenter proxies lies in their source and reliability. ISP proxies are provided by internet service providers and route traffic through residential or commercial IP addresses, offering high trust and low detection rates. Datacenter proxies, on the other hand, originate from data centers and provide fast, cost-effective solutions but are easier to detect due to their non-residential nature.",
    },
    {
      question: "Do you offer a Datacenter Proxies free trial?",
      answer:
        "Yes, we offer a free trial for Datacenter Proxies. Please contact our support team via live chat to request access.",
    },
    {
      question:
        "What is the main difference between shared and private proxies?",
      answer:
        "The main difference between shared and private proxies is exclusivity. Shared proxies are used by multiple users at the same time, making them more affordable but potentially slower and less secure. Private proxies, on the other hand, are dedicated to a single user, offering better performance, higher security, and exclusive access, ideal for sensitive tasks.",
    },
    {
      question: "How do shared proxies work?",
      answer:
        "Shared proxies work by routing multiple users' internet traffic through the same IP address. This means the proxy IP is shared among several users simultaneously. While this makes shared proxies cost-effective, it also means that the bandwidth and resources are divided among users, which may impact speed and performance. Additionally, if one user engages in prohibited activities, the IP could be flagged, potentially affecting all users sharing the proxy. Shared proxies are suitable for less demanding tasks like light web browsing or accessing geo-restricted content.",
    },
  ];

  const ispProxiesFaqs: IFAQ[] = [
    {
      question: "What is a ISP proxy?",
      answer:
        "An ISP proxy (Internet Service Provider proxy), also known as a static residential proxy, is a type of proxy server that uses IP addresses provided by an internet service provider (ISP). These IPs are associated with real residential locations, but unlike traditional residential proxies, ISP proxies are not tied to actual end-users. Instead, they are static, meaning the IP addresses don’t rotate and remain consistent.",
    },
    {
      question:
        "What is the difference between a ISP proxy and residential proxy?",
      answer: `
        <span class="font-semibold">ISP Proxy:</span> Uses static IPs assigned by ISPs,
offering fast, stable connections ideal for
consistent tasks like account management. <br/><br/>
<span class="font-semibold">Residential Proxy:</span> Uses IPs from real
devices, providing high anonymity and
rotating options for activities like large-scale
scraping.
        `,
    },
    {
      question: "Are there target restrictions for ISP Proxies?",
      answer: `Yes, LightningProxies enforces restrictions on certain targets for ISP Proxies. To ensure you have the most accurate and up-to-date information about which targets are supported, please reach out to our support team.`,
    },
    {
      question: "Do you offer a free trial for ISP Proxies?",
      answer:
        "Unfortunately, we do not offer a free trial for ISP Proxies due to the diversity of subnets and locations, which might differ from the actual order. We recommend starting with the purchase of a single IP to test our service and scaling up if you're satisfied.",
    },
    {
      question: "Are ISP proxies better than datacenter proxies?",
      answer:
        "ISP proxies are better than datacenter proxies for tasks requiring high anonymity, legitimacy, and reliability, while datacenter proxies are more cost-effective for speedintensive or large-scale operations.",
    },
  ];

  const ipv6ProxiesFaqs: IFAQ[] = [
    {
      question: "What is a IPv6 proxy?",
      answer:
        "An IPv6 proxy is a proxy server that uses IPv6 addresses to route internet traffic. IPv6 is the latest version of the Internet Protocol, designed to replace IPv4 due to the exhaustion of available IPv4 addresses. It provides a vastly larger pool of IP addresses, improved performance, and advanced features.",
    },
    {
      question: "Can I use IPv6 with every target?",
      answer:
        "Not all targets fully support IPv6 yet, so it depends on the specific website or platform you want to access. While IPv6 adoption is growing, some websites or services still rely solely on IPv4 and do not accept IPv6 connections.",
    },
    {
      question: "Is IPv6 faster than IPv4?",
      answer:
        "Yes, IPv6 can be faster than IPv4 in certain scenarios due to its modern infrastructure and design, but the actual speed difference depends on multiple factors.",
    },
    {
      question: "Do you offer free trial for IPv6 proxies?",
      answer:
        "Yes, we offer free trials for IPv6 proxies. Please contact our support team via live chat to request your trial and explore our services.",
    },
  ];

  return (
    <main>
      <section className="pt-[70px]">
        <div className="relative mx-auto container max-w-[1320px] py-20 sm:py-28 px-5 grid lg:grid-cols-[auto_350px] gap-28">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <Link
                href={"/help-center"}
                className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/50"
              >
                Help Center
              </Link>

              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.75"
                  d="M0.21967 1.53033C-0.0732234 1.23744 -0.0732234 0.762563 0.21967 0.46967C0.512563 0.176777 0.987437 0.176777 1.28033 0.46967L5.28033 4.46967C5.57322 4.76256 5.57322 5.23744 5.28033 5.53033L1.28033 9.53033C0.987437 9.82322 0.512563 9.82322 0.21967 9.53033C-0.0732234 9.23744 -0.0732234 8.76256 0.21967 8.46967L2.93934 5.75L3.5 5L2.93934 4.25L0.21967 1.53033Z"
                  fill="#1D2026"
                />
              </svg>

              <Link
                href={"/help-center/faqs"}
                className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/75"
              >
                FAQs
              </Link>
            </div>

            <h1 className="mb-4 max-w-[500px] text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
              FAQs
            </h1>

            <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/50">
              View answers to all your frequently asked questions.
            </p>

            <div>
              <div id="general" className="pt-12">
                <h4 className="mb-5 text-base sm:text-xl font-medium tracking-[-0.16px] sm:tracking-[-0.2px]">
                  General
                </h4>

                <div className="grid gap-5">
                  {generalFaqs.map((faq, index) => (
                    <FAQ key={index} {...faq} />
                  ))}
                </div>
              </div>

              <div id="refunds" className="pt-12">
                <h4 className="mb-5 text-base sm:text-xl font-medium tracking-[-0.16px] sm:tracking-[-0.2px]">
                  Refunds
                </h4>

                <div className="grid gap-5">
                  {refundFaqs.map((faq, index) => (
                    <FAQ key={index} {...faq} />
                  ))}
                </div>
              </div>

              <div id="troubleshooting" className="pt-12">
                <h4 className="mb-5 text-base sm:text-xl font-medium tracking-[-0.16px] sm:tracking-[-0.2px]">
                  Troubleshooting
                </h4>

                <div className="grid gap-5">
                  {troubleshootingFaqs.map((faq, index) => (
                    <FAQ key={index} {...faq} />
                  ))}
                </div>
              </div>

              <div id="residentialProxies" className="pt-12">
                <h4 className="mb-5 text-base sm:text-xl font-medium tracking-[-0.16px] sm:tracking-[-0.2px]">
                  Residential Proxies
                </h4>

                <div className="grid gap-5">
                  {residentialProxiesFaqs.map((faq, index) => (
                    <FAQ key={index} {...faq} />
                  ))}
                </div>
              </div>

              <div id="datacenterProxies" className="pt-12">
                <h4 className="mb-5 text-base sm:text-xl font-medium tracking-[-0.16px] sm:tracking-[-0.2px]">
                  Datacenter Proxies
                </h4>

                <div className="grid gap-5">
                  {datacenterProxiesFaqs.map((faq, index) => (
                    <FAQ key={index} {...faq} />
                  ))}
                </div>
              </div>

              <div id="ispProxies" className="pt-12">
                <h4 className="mb-5 text-base sm:text-xl font-medium tracking-[-0.16px] sm:tracking-[-0.2px]">
                  ISP Proxies
                </h4>

                <div className="grid gap-5">
                  {ispProxiesFaqs.map((faq, index) => (
                    <FAQ key={index} {...faq} />
                  ))}
                </div>
              </div>

              <div id="ipv6Proxies" className="pt-12">
                <h4 className="mb-5 text-base sm:text-xl font-medium tracking-[-0.16px] sm:tracking-[-0.2px]">
                  IPv6 Proxies
                </h4>

                <div className="grid gap-5">
                  {ipv6ProxiesFaqs.map((faq, index) => (
                    <FAQ key={index} {...faq} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Aside />
        </div>
      </section>

      <FollowUpSection />
    </main>
  );
}
