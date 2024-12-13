import Link from "next/link";
import FAQ, { IProps as IFAQ } from "@/components/ui/FAQ";

export default function FAQsSection() {
  const faqs: IFAQ[] = [
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

  return (
    <section className="py-20 sm:py-44">
      <div className="mx-auto container max-w-[1320px] px-5 grid lg:grid-cols-[540px_auto] gap-y-10">
        <div>
          <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-[#00C153]">
            FAQs
          </p>

          <h2 className="mb-5 sm:mb-6 max-w-[420px] text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
            Learn more about our <br /> Datacenter Proxies
          </h2>

          <p className="mb-6 sm:mb-7 max-w-[420px] text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
            Can't find the answer you're looking for? Reach out to our customer
            support team.
          </p>

          <Link
            href={"/"}
            className="py-1.5 px-3.5 border border-dark-white rounded-full text-[11px] sm:text-sm tracking-[-0.14px] text-center"
          >
            Read all FAQs{" "}
            <svg
              width="13"
              height="10"
              viewBox="0 0 13 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[10px] sm:w-[13px] inline-block ml-2"
            >
              <path
                d="M7.71967 1.53033C7.42678 1.23744 7.42678 0.762563 7.71967 0.46967C8.01256 0.176777 8.48744 0.176777 8.78033 0.46967L12.7803 4.46967C13.0732 4.76256 13.0732 5.23744 12.7803 5.53033L8.78033 9.53033C8.48744 9.82322 8.01256 9.82322 7.71967 9.53033C7.42678 9.23744 7.42678 8.76256 7.71967 8.46967L10.4393 5.75H0.75C0.335787 5.75 0 5.41421 0 5C0 4.58579 0.335787 4.25 0.75 4.25H10.4393L7.71967 1.53033Z"
                className="fill-primary"
              />
            </svg>
          </Link>
        </div>

        <div className="grid gap-5">
          {faqs.map((faq, index) => (
            <FAQ key={index} color="#00C153" {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
