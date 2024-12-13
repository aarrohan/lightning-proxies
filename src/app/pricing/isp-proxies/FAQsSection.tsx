import Link from "next/link";
import FAQ, { IProps as IFAQ } from "@/components/ui/FAQ";
{
}

export default function FAQsSection() {
  const faqs: IFAQ[] = [
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

  return (
    <section className="py-20 sm:py-44">
      <div className="mx-auto container max-w-[1320px] px-5 grid lg:grid-cols-[540px_auto] gap-y-10">
        <div>
          <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-[#FF792E]">
            FAQs
          </p>

          <h2 className="mb-5 sm:mb-6 max-w-[420px] text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
            Learn more about our <br /> ISP Proxies
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
            <FAQ key={index} color="#FF792E" {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
