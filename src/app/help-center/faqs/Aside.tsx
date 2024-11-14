import Link from "next/link";

export default function Aside() {
  return (
    <div className="sticky top-[100px] h-fit hidden lg:block space-y-4">
      <div className="py-6 px-8 border border-dark-white bg-off-white rounded-xl">
        <p className="mb-5 text-sm font-semibold tracking-[-0.14px] uppercase text-primary/75">
          Most popular topics
        </p>

        <div className="flex flex-col items-start gap-y-3">
          <Link
            href={"/help-center/faqs#general"}
            className="text-base tracking-[-0.16px] text-accent"
          >
            General
          </Link>

          <Link
            href={"/help-center/faqs#refunds"}
            className="text-base tracking-[-0.16px] text-accent"
          >
            Refunds
          </Link>

          <Link
            href={"/help-center/faqs#troubleshooting"}
            className="text-base tracking-[-0.16px] text-accent"
          >
            Troubleshooting
          </Link>

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
          className="flex items-center gap-1.5 text-base tracking-[-0.16px] text-primary/75"
        >
          Contact our live chat support
          <svg
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.75"
              d="M0.21967 2.03033C-0.0732234 1.73744 -0.0732234 1.26256 0.21967 0.96967C0.512563 0.676777 0.987437 0.676777 1.28033 0.96967L5.28033 4.96967C5.57322 5.26256 5.57322 5.73744 5.28033 6.03033L1.28033 10.0303C0.987437 10.3232 0.512563 10.3232 0.21967 10.0303C-0.0732234 9.73744 -0.0732234 9.26256 0.21967 8.96967L2.93934 6.25L3.5 5.5L2.93934 4.75L0.21967 2.03033Z"
              fill="#1D2026"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
