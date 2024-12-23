import Image from "next/image";
import partnersBigImg from "@/assets/images/partners-big.png";

export default function HeroSection() {
  return (
    <section className="pt-[70px] bg-off-white">
      <div className="relative mx-auto container max-w-[1320px] py-16 sm:py-28 px-5">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-accent">
          OUR PARTNERS
        </p>

        <h1 className="mb-3 text-4xl sm:text-[64px] leading-[42px] sm:leading-[72px] tracking-[-1.08px] sm:tracking-[-1.95px] font-semibold">
          Partnered with the best
        </h1>

        <p className="mb-6 sm:mb-10 max-w-[580px] text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/65">
          Partnered with the best to offer you the best experience with other
          tools for online privacy.
        </p>

        <div className="relative w-full max-w-[528px]">
          <input
            type="text"
            placeholder="Search all partners..."
            className="w-full h-[40px] sm:h-[48px] pl-11 focus:ring-[3px] focus:ring-accent/15 pr-4 border border-dark-white focus:border-accent bg-white rounded-md text-sm sm:text-base placeholder:text-primary/35 duration-200"
          />

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 left-4 -translate-y-1/2"
          >
            <g opacity="0.75">
              <path
                d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z"
                stroke="#1D2026"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>

        <Image
          src={partnersBigImg}
          alt=""
          className="absolute top-0 right-0 w-auto h-full hidden lg:block"
        />
      </div>
    </section>
  );
}
