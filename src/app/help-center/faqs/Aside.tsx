"use client";
import Link from "next/link";

export default function Aside() {
  return (
    <div className="sticky top-[100px] h-fit hidden lg:block space-y-4">
      <div className="py-6 px-8 border border-dark-white bg-off-white rounded-xl">
        <p className="mb-5 text-sm font-semibold tracking-[-0.14px] uppercase text-primary/75">
          Most popular topics
        </p>

        <div className="flex flex-col items-start gap-y-3">
          <button
            onClick={() => {
              const element = document.getElementById("general");

              if (element) {
                scrollTo({
                  top: element.offsetTop,
                  behavior: "smooth",
                });
              }
            }}
            className="text-base tracking-[-0.16px] text-accent"
          >
            General
          </button>

          <button
            onClick={() => {
              const element = document.getElementById("refunds");

              if (element) {
                scrollTo({
                  top: element.offsetTop,
                  behavior: "smooth",
                });
              }
            }}
            className="text-base tracking-[-0.16px] text-accent"
          >
            Refunds
          </button>

          <button
            onClick={() => {
              const element = document.getElementById("troubleshooting");

              if (element) {
                scrollTo({
                  top: element.offsetTop,
                  behavior: "smooth",
                });
              }
            }}
            className="text-base tracking-[-0.16px] text-accent"
          >
            Troubleshooting
          </button>

          <Link
            href={"/help-center/faqs"}
            className="text-base tracking-[-0.16px] text-accent"
          >
            Residential Proxies
          </Link>

          <Link
            href={"/help-center/faqs"}
            className="text-base tracking-[-0.16px] text-accent"
          >
            Datacenter Proxies
          </Link>

          <Link
            href={"/help-center/faqs"}
            className="text-base tracking-[-0.16px] text-accent"
          >
            Mobile Proxies
          </Link>

          <Link
            href={"/help-center/faqs"}
            className="text-base tracking-[-0.16px] text-accent"
          >
            ISP Proxies
          </Link>

          <Link
            href={"/help-center/faqs"}
            className="text-base tracking-[-0.16px] text-accent"
          >
            IPv6 Proxies
          </Link>

          <Link
            href={"/help-center/faqs"}
            className="text-base tracking-[-0.16px] text-accent"
          >
            Blogs
          </Link>
        </div>
      </div>

      <div className="py-6 px-8 border border-dark-white bg-off-white rounded-xl">
        <p className="mb-1.5 text-sm font-semibold tracking-[-0.14px] uppercase text-accent">
          Require Assistance
        </p>

        <Link
          href={"/"}
          className="group flex items-center gap-2.5 text-base tracking-[-0.16px] text-primary/75"
        >
          Contact our live chat support
          <span className="relative mt-[2px]">
            <svg
              width="9"
              height="10"
              viewBox="0 0 9 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative -left-[4px] group-hover:-left-0 duration-200"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.21967 0.21967C3.51256 -0.0732232 3.98744 -0.0732232 4.28033 0.21967L8.28033 4.21967C8.57322 4.51256 8.57322 4.98744 8.28033 5.28033L4.28033 9.2803C3.98744 9.5732 3.51256 9.5732 3.21967 9.2803C2.92678 8.98744 2.92678 8.51256 3.21967 8.21967L6.68934 4.75L3.21967 1.28033C2.92678 0.98744 2.92678 0.51256 3.21967 0.21967Z"
                fill="#707275"
              />
            </svg>

            <svg
              width="9"
              height="10"
              viewBox="0 0 9 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0"
            >
              <rect
                y="4"
                height="1.5"
                rx="0.75"
                fill="#707275"
                className="w-[7px] opacity-0 group-hover:opacity-100 duration-200"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
}
