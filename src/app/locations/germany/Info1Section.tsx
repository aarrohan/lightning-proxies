import Image from "next/image";
import locationInfo1Img from "@/assets/images/germany-location-info-1.png";

export default function Info1Section() {
  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5 grid lg:grid-cols-[auto_575px] items-center gap-6 sm:gap-14">
        <div>
          <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-accent">
            PROXIES FROM UNITED STATES
          </p>

          <h2 className="mb-6 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
            Genuine Residential proxies in United States
          </h2>

          <p className="mb-6 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
            Enhance your appreance on the web with the best US residential IPs.
            Using LightningProxies residential US proxy servers will keep you
            protected and anonymous on the entire proxy session.
          </p>

          <button className="active:scale-95 w-full sm:w-fit py-2.5 sm:py-2 px-5 border border-dark-white bg-white rounded-lg flex justify-center items-center gap-2.5 text-xs sm:text-base font-medium tracking-[-0.16px] text-accent duration-300">
            View all locations in United States
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
                fill="#1675FF"
              />
            </svg>
          </button>

          <p className="mt-6 sm:mt-12 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
            “Review from customer here,Praesent ullamcorper, magna in dictum
            dictum, ipsum tortor facilisis elit, sit amet consectetur turpis est
            ut nulla.” <br />
            <br />
            <span className="font-serif text-lg sm:text-2xl font-bold text-primary/65">
              Eric Stevens
            </span>
          </p>
        </div>

        <div className="w-full max-w-[575px] p-3.5 sm:p-5 border border-dark-white bg-off-white rounded-2xl flex">
          <Image src={locationInfo1Img} alt="" className="w-full rounded-lg" />
        </div>
      </div>
    </section>
  );
}
