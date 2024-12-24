import Image from "next/image";
import webScraperApiIconImg from "@/assets/images/web-scraper-api-icon.svg";
import serpScraperApiIconImg from "@/assets/images/serp-scraper-api-icon.svg";

export default function UpcomingSection() {
  return (
    <section className="py-20 sm:py-44">
      <div className="mx-auto container max-w-[1320px] px-5">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-green">
          RELEASING SOON
        </p>

        <h2 className="mb-8 sm:mb-14 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          Our Upcoming Products
        </h2>

        <div className="relative border border-dark-white bg-white grid lg:grid-cols-2">
          <div className="relative z-10 py-8 px-5 border-b lg:border-b-0 lg:border-r border-dark-white flex flex-col items-center gap-3">
            <Image
              src={webScraperApiIconImg}
              alt=""
              className="mb-2 sm:mb-5 w-[66px] sm:w-[91px]"
            />

            <h3 className="text-sm sm:text-2xl font-semibold tracking-[-0.28px] sm:tracking-[-0.48px] text-center">
              Web Scraper API
            </h3>

            <p className="max-w-[450px] text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
              Effortlessly collect data from websites with our powerful Web
              Scraper API, designed for reliability and ease of use.
            </p>

            <p className="py-1 sm:py-1.5 px-2.5 sm:px-3.5 bg-green/10 rounded-lg sm:rounded-xl text-[11px] sm:text-base font-medium tracking-[-0.11px] sm:tracking-[-0.16px] text-green">
              Launching soon
            </p>
          </div>

          <div className="relative z-10 py-8 px-5 flex flex-col items-center gap-3">
            <Image
              src={serpScraperApiIconImg}
              alt=""
              className="mb-2 sm:mb-5 w-[66px] sm:w-[91px]"
            />

            <h3 className="text-sm sm:text-2xl font-semibold tracking-[-0.28px] sm:tracking-[-0.48px] text-center">
              SERP Scraper API
            </h3>

            <p className="max-w-[450px] text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
              Unlock precise search engine result data with the SERP Scraper
              API, perfect for SEO and market insights.
            </p>

            <p className="py-1 sm:py-1.5 px-2.5 sm:px-3.5 bg-yellow/10 rounded-lg sm:rounded-xl text-[11px] sm:text-base font-medium tracking-[-0.11px] sm:tracking-[-0.16px] text-yellow">
              Launching Soon
            </p>
          </div>

          <Image
            src={"/images/grain-2.png"}
            alt=""
            fill
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          <div className="absolute z-20 -top-[9px] sm:-top-[16px] -left-[9px] sm:-left-[16px] w-fit h-fit border-4 sm:border-8 border-white rounded-full">
            <div className="w-[10px] sm:w-[16px] aspect-square border border-white-dark bg-white rounded-full"></div>
          </div>

          <div className="absolute z-20 -bottom-[9px] sm:-bottom-[16px] -left-[9px] sm:-left-[16px] w-fit h-fit border-4 sm:border-8 border-white rounded-full">
            <div className="w-[10px] sm:w-[16px] aspect-square border border-white-dark bg-white rounded-full"></div>
          </div>

          <div className="absolute z-20 top-1/2 sm:-top-[16px] -left-[9px] sm:left-1/2 -translate-y-1/2 sm:-translate-y-0 sm:-translate-x-1/2 w-fit h-fit border-4 sm:border-8 border-white rounded-full">
            <div className="w-[10px] sm:w-[16px] aspect-square border border-white-dark bg-white rounded-full"></div>
          </div>

          <div className="absolute z-20 top-1/2 sm:top-[auto] sm:-bottom-[16px] sm:left-1/2 -right-[9px] sm:-right-0 -translate-y-1/2 sm:-translate-y-0 sm:-translate-x-1/2 w-fit h-fit border-4 sm:border-8 border-white rounded-full">
            <div className="w-[10px] sm:w-[16px] aspect-square border border-white-dark bg-white rounded-full"></div>
          </div>

          <div className="absolute z-20 -top-[9px] sm:-top-[16px] -right-[9px] sm:-right-[16px] w-fit h-fit border-4 sm:border-8 border-white rounded-full">
            <div className="w-[10px] sm:w-[16px] aspect-square border border-white-dark bg-white rounded-full"></div>
          </div>

          <div className="absolute z-20 -bottom-[9px] sm:-bottom-[16px] -right-[9px] sm:-right-[16px] w-fit h-fit border-4 sm:border-8 border-white rounded-full">
            <div className="w-[10px] sm:w-[16px] aspect-square border border-white-dark bg-white rounded-full"></div>
          </div>

          {/* other */}

          <div className="absolute top-[18%] -left-[3px] w-[6px] h-[26px] border border-dark-white bg-white rounded-full hidden lg:block"></div>
          <div className="absolute -top-[3px] left-[32%] w-[26px] h-[6px] border border-dark-white bg-white rounded-full hidden lg:block"></div>
          <div className="absolute -bottom-[3px] right-[25%] w-[26px] h-[6px] border border-dark-white bg-white rounded-full hidden lg:block"></div>
          <div className="absolute -bottom-[3px] left-[42%] w-[26px] h-[6px] border border-dark-white bg-white rounded-full hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
