import Image from "next/image";
import locationInfo2Img from "@/assets/images/brazil-location-info-2.png";

export default function Info2Section() {
  return (
    <section className="sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5 grid lg:grid-cols-[575px_auto] items-center gap-6 sm:gap-14">
        <div className="order-2 lg:order-1 w-full max-w-[575px] flex">
          <Image src={locationInfo2Img} alt="" className="w-full rounded-lg" />
        </div>

        <div className="order-1 lg:order-2">
          <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-[#12A250]">
            COST EFFECTIVE
          </p>

          <h2 className="mb-6 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
            Fastest Brazilian Datacenter proxy servers for cost-effective
            scraping
          </h2>

          <p className="mb-6 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
            Scraping low or medium security websites can be done easily with
            Shared Datacenter proxy servers from Brazilian. <br />
            <br />
            We know that having limitations on your proxies can be difficult,
            that's why at LightningProxies DC proxy servers come equipped with
            Unlimited bandwidth and Unlimited concurrent sessions to help you
            scale your web scraping projects.
          </p>

          <button className="active:scale-95 w-full sm:w-fit py-2.5 sm:py-2 px-5 border border-dark-white bg-white rounded-lg flex justify-center items-center gap-2.5 text-xs sm:text-base font-medium tracking-[-0.16px] text-[#12A250] duration-300">
            Explore Datacenter Proxies
            <svg
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[10px] sm:w-[13px] h-auto"
            >
              <path
                d="M7.71967 2.03033C7.42678 1.73744 7.42678 1.26256 7.71967 0.96967C8.01256 0.676777 8.48744 0.676777 8.78033 0.96967L12.7803 4.96967C13.0732 5.26256 13.0732 5.73744 12.7803 6.03033L8.78033 10.0303C8.48744 10.3232 8.01256 10.3232 7.71967 10.0303C7.42678 9.73744 7.42678 9.26256 7.71967 8.96967L10.4393 6.25H0.75C0.335787 6.25 0 5.91421 0 5.5C0 5.08579 0.335787 4.75 0.75 4.75H10.4393L7.71967 2.03033Z"
                fill="#12A250"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
