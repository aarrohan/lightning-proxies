import Image from "next/image";
import infoImg from "@/assets/images/product-1-info-2.png";

export default function Info2Section() {
  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <div className="flex flex-col items-start">
          <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-accent">
            WHY CHOOSE OUR PROXIES
          </p>

          <h2 className="mb-5 sm:mb-8 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
            Ethically sourced Residential Proxies with Free Geo Targeting
          </h2>

          <p className="mb-6 sm:mb-8 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
            LightningProxies get's it's Residential Proxy pool from trustworthy
            partners who follow ethical business practices and strict rules.{" "}
            <br />
            <br />
            Our Residential Proxy network covers 188+ countries and offers
            country, city, state and ASN targeting. Lightning proxies help
            access geo-restricted content with no hidden fees.
          </p>

          <div className="flex flex-wrap gap-3">
            <div className="min-w-[100px] sm:min-w-[175px] py-1 sm:py-1.5 px-3 border border-dark-white bg-gradient-to-b from-transparent to-off-white rounded-lg flex items-center gap-2.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] sm:w-[24px] min-w-[20px] sm:min-w-[24px] h-auto"
              >
                <path
                  d="M6 12.75L9.75 16.5L18 7.5"
                  stroke="#1675FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                Country
              </p>
            </div>

            <div className="min-w-[100px] sm:min-w-[175px] py-1 sm:py-1.5 px-3 border border-dark-white bg-gradient-to-b from-transparent to-off-white rounded-lg flex items-center gap-2.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] sm:w-[24px] min-w-[20px] sm:min-w-[24px] h-auto"
              >
                <path
                  d="M6 12.75L9.75 16.5L18 7.5"
                  stroke="#1675FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                State
              </p>
            </div>

            <div className="min-w-[100px] sm:min-w-[175px] py-1 sm:py-1.5 px-3 border border-dark-white bg-gradient-to-b from-transparent to-off-white rounded-lg flex items-center gap-2.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] sm:w-[24px] min-w-[20px] sm:min-w-[24px] h-auto"
              >
                <path
                  d="M6 12.75L9.75 16.5L18 7.5"
                  stroke="#1675FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                City
              </p>
            </div>

            <div className="min-w-[100px] sm:min-w-[175px] py-1 sm:py-1.5 px-3 border border-dark-white bg-gradient-to-b from-transparent to-off-white rounded-lg flex items-center gap-2.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] sm:w-[24px] min-w-[20px] sm:min-w-[24px] h-auto"
              >
                <path
                  d="M6 12.75L9.75 16.5L18 7.5"
                  stroke="#1675FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                ASN
              </p>
            </div>

            <div className="min-w-[100px] sm:min-w-[175px] py-1 sm:py-1.5 px-3 border border-dark-white bg-gradient-to-b from-transparent to-off-white rounded-lg flex items-center gap-2.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] sm:w-[24px] min-w-[20px] sm:min-w-[24px] h-auto"
              >
                <path
                  d="M6 12.75L9.75 16.5L18 7.5"
                  stroke="#1675FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                API url
              </p>
            </div>

            <div className="min-w-[100px] sm:min-w-[175px] py-1 sm:py-1.5 px-3 border border-dark-white bg-gradient-to-b from-transparent to-off-white rounded-lg flex items-center gap-2.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] sm:w-[24px] min-w-[20px] sm:min-w-[24px] h-auto"
              >
                <path
                  d="M6 12.75L9.75 16.5L18 7.5"
                  stroke="#1675FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                Whitelist IPs
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex">
          <Image src={infoImg} alt="" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
