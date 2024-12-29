import Link from "next/link";
import Image from "next/image";
import article3Img from "@/assets/images/article-3.png";

export default function HeroSection() {
  return (
    <section className="pt-[70px]">
      <div className="relative mx-auto container max-w-[1320px] pt-10 sm:pt-14 px-5">
        <div className="mb-8 sm:mb-10 flex justify-between items-center">
          <p className="text-xs sm:text-sm font-semibold text-accent tracking-[-0.12px] sm:tracking-[-0.14px]">
            Blog
          </p>

          <button
            onClick={() => {
              if (window.$crisp) {
                window.$crisp.push(["do", "chat:open"]);
              }
            }}
            className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-accent tracking-[-0.12px] sm:tracking-[-0.14px]"
          >
            Write to Us{" "}
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.21967 0.46967C0.512563 0.176777 0.987437 0.176777 1.28033 0.46967L5.28033 4.46967C5.57322 4.76256 5.57322 5.23744 5.28033 5.53033L1.28033 9.53033C0.987437 9.82322 0.512563 9.82322 0.21967 9.53033C-0.0732233 9.23744 -0.0732233 8.76256 0.21967 8.46967L3.68934 5L0.21967 1.53033C-0.0732233 1.23744 -0.0732233 0.762563 0.21967 0.46967Z"
                fill="#1675FF"
              />
            </svg>
          </button>
        </div>

        <Link
          href={"/blog/octobrowser-proxy-configuration"}
          className="hover:-translate-y-1 p-5 sm:p-8 border border-dark-white bg-white shadow-[0px_10px_10px_0px_rgba(0,0,0,0.02),_0px_1px_0px_0px_rgba(0,0,0,0.02)] rounded-2xl grid lg:grid-cols-2 items-center gap-y-8 gap-x-14 cursor-pointer duration-200"
        >
          <div>
            <p className="mb-3 text-xs sm:text-sm font-semibold tracking-[-0.12px] sm:tracking-[-0.14px] text-accent">
              RECENT UPDATE
            </p>

            <h1 className="mb-3 text-2xl sm:text-4xl font-semibold tracking-[-0.24px] sm:tracking-[-0.36px]">
              Setting Up a Proxy in the OctoBrowser
            </h1>

            <div className="mb-6 sm:mb-8 flex items-center gap-2.5 opacity-75">
              <p className="text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px]">
                August 27, 2024
              </p>

              <span className="w-[3px] sm:w-[4px] aspect-square bg bg-primary/50 rounded-full block"></span>

              <p className="text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px]">
                Guides
              </p>
            </div>

            <div className="mb-5 sm:mb-7 flex items-center gap-3 sm:gap-3.5">
              <div className="relative w-[38px] sm:w-[48px] aspect-square bg-dark-white rounded-full">
                <Image
                  src={`https://lightningproxies.net/assets/images/team-02.svg`}
                  alt=""
                  fill
                />
              </div>

              <div>
                <h3 className="text-sm sm:text-lg font-medium tracking-[-0.14px] sm:tracking-[-0.18px]">
                  JustWatch
                </h3>

                <p className="text-xs sm:text-base tracking-[-0.16px] text-primary/50">
                  Moderator @LightingProxies
                </p>
              </div>
            </div>

            <p className="mb-4 sm:mb-7 text-xs sm:text-lg tracking-[-0.12px] sm:tracking-[-0.18px] text-primary/75">
              Pairing Octo anti-detection browser with proxies provides a
              reliable means to safeguard online anonymity, manage numerous
              accounts effortlessly.
            </p>

            <button className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-accent tracking-[-0.12px] sm:tracking-[-0.14px]">
              Read More{" "}
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.21967 0.46967C0.512563 0.176777 0.987437 0.176777 1.28033 0.46967L5.28033 4.46967C5.57322 4.76256 5.57322 5.23744 5.28033 5.53033L1.28033 9.53033C0.987437 9.82322 0.512563 9.82322 0.21967 9.53033C-0.0732233 9.23744 -0.0732233 8.76256 0.21967 8.46967L3.68934 5L0.21967 1.53033C-0.0732233 1.23744 -0.0732233 0.762563 0.21967 0.46967Z"
                  fill="#1675FF"
                />
              </svg>
            </button>
          </div>

          <div className="flex justify-center">
            <Image
              src={article3Img}
              alt=""
              className="w-full max-w-[624px] border border-dark-white rounded-lg"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
