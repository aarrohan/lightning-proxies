import Image from "next/image";
import infoImg from "@/assets/images/product-5-info-2.png";

export default function Info2Section() {
  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <div className="flex flex-col items-start">
          <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-[#00CEDF]">
            WHY CHOOSE OUR PROXIES
          </p>

          <h2 className="mb-5 sm:mb-8 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
            Cost-effective and private Mobile proxies
          </h2>

          <p className="mb-6 sm:mb-8 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
            Datacenter proxies are the most cost-effective and budget-friendly
            proxy solution in major use cases. <br />
            <br />
            LightningProxies provides private datacenter proxies sourced from
            reliable third-party datacenter partners. All IPs are dedicated to
            our service ensuring the best quality in your scraping projects.
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
                  d="M20.5 5.5H9.5C5.78672 5.5 3 8.18503 3 12"
                  stroke="#00CEDF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.5 18.5H14.5C18.2133 18.5 21 15.815 21 12"
                  stroke="#00CEDF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.5 3C18.5 3 21 4.84122 21 5.50002C21 6.15882 18.5 8 18.5 8"
                  stroke="#00CEDF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.49998 16C5.49998 16 3.00001 17.8412 3 18.5C2.99999 19.1588 5.5 21 5.5 21"
                  stroke="#00CEDF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                Instant proxy rotation
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
                  d="M12 12C12 12 9.26142 17 6.5 17C3.73858 17 2 14.7614 2 12C2 9.23858 3.73858 7 6.5 7C9.26142 7 12 12 12 12ZM12 12C12 12 14.7386 17 17.5 17C20.2614 17 22 14.7614 22 12C22 9.23858 20.2614 7 17.5 7C14.7386 7 12 12 12 12Z"
                  stroke="#00CEDF"
                  strokeWidth="1.5"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                Unlimited Bandwidth
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
                  d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7"
                  stroke="#00CEDF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10"
                  stroke="#00CEDF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M12.0312 11.9624L16.5842 7.40949M19.7414 4.34451L19.1882 2.35737C19.0863 2.03 18.6923 1.89954 18.4268 2.11651C16.9907 3.29007 15.4263 4.8708 16.7039 7.36408C19.278 8.56443 20.7476 6.94573 21.8743 5.58519C22.0985 5.31449 21.9633 4.90756 21.6257 4.80994L19.7414 4.34451Z"
                  stroke="#00CEDF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                Country Targeting
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
