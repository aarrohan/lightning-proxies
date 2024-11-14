import type { Metadata } from "next";
import FollowUpSection from "@/app/(landing)/FollowUpSection";
import FAQ, { IProps as IFAQ } from "@/components/ui/FAQ";
import Link from "next/link";
import Aside from "./Aside";

export const metadata: Metadata = {
  title: "FAQs - Lightning Proxies",
};

export default function FAQs() {
  const faqs: IFAQ[] = [
    {
      question: "What is a datacenter proxy?",
      answer:
        "Aenean turpis lectus, convallis vel laoreet quis, maximus sit amet purus. Nulla sollicitudin justo id aliquet condimentum. Suspendisse vehicula, est ut accumsan efficitur, velit massa vulputate erat, sit amet bibendum libero nunc at sem. Aliquam in ligula vel est suscipit consequat. Aliquam sit amet lacus id est convallis sagittis.",
    },
    {
      question: "What's the difference between a Datacenter and an IPv6 proxy?",
      answer:
        "Aenean turpis lectus, convallis vel laoreet quis, maximus sit amet purus. Nulla sollicitudin justo id aliquet condimentum. Suspendisse vehicula, est ut accumsan efficitur, velit massa vulputate erat, sit amet bibendum libero nunc at sem. Aliquam in ligula vel est suscipit consequat. Aliquam sit amet lacus id est convallis sagittis.",
    },
    {
      question:
        "Are your Datacenter & IPv6 proxies truly unlimited in any way?",
      answer:
        "Aenean turpis lectus, convallis vel laoreet quis, maximus sit amet purus. Nulla sollicitudin justo id aliquet condimentum. Suspendisse vehicula, est ut accumsan efficitur, velit massa vulputate erat, sit amet bibendum libero nunc at sem. Aliquam in ligula vel est suscipit consequat. Aliquam sit amet lacus id est convallis sagittis.",
    },
    {
      question: "What should I choose between Datacenter & IPv6?",
      answer:
        "Aenean turpis lectus, convallis vel laoreet quis, maximus sit amet purus. Nulla sollicitudin justo id aliquet condimentum. Suspendisse vehicula, est ut accumsan efficitur, velit massa vulputate erat, sit amet bibendum libero nunc at sem. Aliquam in ligula vel est suscipit consequat. Aliquam sit amet lacus id est convallis sagittis.",
    },
  ];

  return (
    <main>
      <section className="pt-[70px]">
        <div className="mx-auto container max-w-[1320px] py-20 sm:py-28 px-5 grid lg:grid-cols-[auto_350px] gap-28">
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

            <p className="mb-12 text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/50">
              View answers to all your frequently asked questions.
            </p>

            <div className="space-y-12">
              <div>
                <h4 className="mb-5 text-base sm:text-xl font-medium tracking-[-0.16px] sm:tracking-[-0.2px]">
                  General
                </h4>

                <div className="grid gap-5">
                  {faqs.map((faq, index) => (
                    <FAQ key={index} {...faq} />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-5 text-base sm:text-xl font-medium tracking-[-0.16px] sm:tracking-[-0.2px]">
                  Refunds
                </h4>

                <div className="grid gap-5">
                  {faqs.map((faq, index) => (
                    <FAQ key={index} {...faq} />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-5 text-base sm:text-xl font-medium tracking-[-0.16px] sm:tracking-[-0.2px]">
                  Troubleshooting
                </h4>

                <div className="grid gap-5">
                  {faqs.map((faq, index) => (
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
