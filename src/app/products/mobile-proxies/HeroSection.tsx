import Image from "next/image";
import pricingPageHeroSectionGrainImg from "@/assets/images/pricing-page-hero-section-grain.png";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import SecondaryBtn from "@/components/ui/SecondaryBtn";
import productBigImg from "@/assets/images/product-5-big.png";
import PricingPart from "@/app/pricing/mobile-proxies/PricingPart";
import Marquee from "react-fast-marquee";
import clientImg1 from "@/assets/images/client-1-white.svg";
import clientImg2 from "@/assets/images/client-2-white.svg";
import clientImg3 from "@/assets/images/client-3-white.svg";
import clientImg4 from "@/assets/images/client-4-white.svg";
import clientImg5 from "@/assets/images/client-5-white.svg";
import clientImg6 from "@/assets/images/client-6-white.svg";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-[70px] bg-[#010502] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[45%] sm:h-[80%] bg-gradient-to-b from-[#00C1D1] via-[#031412] to-transparent"></div>

      <Image
        src={pricingPageHeroSectionGrainImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-25 sm:opacity-50"
      />

      <div className="relative z-10 mx-auto container max-w-[1320px] pt-12 lg:pt-20 px-5 grid xl:grid-cols-[auto_550px] items-center gap-x-24">
        <div className="flex flex-col items-center xl:items-start">
          <p className="mb-5 sm:mb-6 py-2 px-3.5 bg-white/10 rounded-xl text-[11px] sm:text-sm tracking-[-0.11px] sm:tracking-[-0.14px] text-white">
            Our online referral program is now available.{" "}
            <span className="font-medium">Earn Rewards</span>
          </p>

          <h1 className="mb-5 sm:mb-6 text-4xl sm:text-[64px] sm:leading-[72px] tracking-[-1.08px] sm:tracking-[-1.95px] font-semibold text-center xl:text-left text-white">
            3G/4G/5G <br /> Mobile Proxies
          </h1>

          <p className="max-w-[580px] text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-center xl:text-left text-white">
            Premium Mobile Proxies with authentic IPs sourced directly from Top
            Mobile Carriers, providing reliable and consistent performance.
          </p>

          <div className="my-7 w-full sm:w-fit grid sm:flex gap-3">
            <PrimaryBtn customClasses="!py-2.5 !px-12 sm:!text-base sm:!tracking-[-0.16px]">
              Get Started{" "}
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.21967 2.03033C7.92678 1.73744 7.92678 1.26256 8.21967 0.96967C8.51256 0.676777 8.98744 0.676777 9.28033 0.96967L13.2803 4.96967C13.5732 5.26256 13.5732 5.73744 13.2803 6.03033L9.28033 10.0303C8.98744 10.3232 8.51256 10.3232 8.21967 10.0303C7.92678 9.73744 7.92678 9.26256 8.21967 8.96967L10.9393 6.25H1.25C0.835787 6.25 0.5 5.91421 0.5 5.5C0.5 5.08579 0.835787 4.75 1.25 4.75H10.9393L8.21967 2.03033Z"
                  className="fill-white"
                />
              </svg>
            </PrimaryBtn>

            <SecondaryBtn customClasses="!py-2.5 !px-8 sm:!text-base sm:!tracking-[-0.16px] text-primary">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.75C22.56 11.97 22.49 11.22 22.36 10.5H12V14.76H17.92C17.66 16.13 16.88 17.29 15.71 18.07V20.84H19.28C21.36 18.92 22.56 16.1 22.56 12.75Z"
                  fill="#4285F4"
                />
                <path
                  d="M11.9997 23.4996C14.9697 23.4996 17.4597 22.5196 19.2797 20.8396L15.7097 18.0696C14.7297 18.7296 13.4797 19.1296 11.9997 19.1296C9.13969 19.1296 6.70969 17.1996 5.83969 14.5996H2.17969V17.4396C3.98969 21.0296 7.69969 23.4996 11.9997 23.4996Z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.5903C5.62 13.9303 5.49 13.2303 5.49 12.5003C5.49 11.7703 5.62 11.0703 5.84 10.4103V7.57031H2.18C1.43 9.05031 1 10.7203 1 12.5003C1 14.2803 1.43 15.9503 2.18 17.4303L5.03 15.2103L5.84 14.5903Z"
                  fill="#FBBC05"
                />
                <path
                  d="M11.9997 5.88C13.6197 5.88 15.0597 6.44 16.2097 7.52L19.3597 4.37C17.4497 2.59 14.9697 1.5 11.9997 1.5C7.69969 1.5 3.98969 3.97 2.17969 7.57L5.83969 10.41C6.70969 7.81 9.13969 5.88 11.9997 5.88Z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </SecondaryBtn>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-6 sm:gap-x-8">
            <p className="flex items-center gap-2 sm:gap-3 text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px] text-white">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] sm:w-[19px] h-auto"
              >
                <path
                  d="M9.73725 2.39038C9.75891 2.37562 9.79064 2.36454 9.82841 2.36454C9.86618 2.36454 9.89791 2.37562 9.91958 2.39038C9.93727 2.40244 9.95866 2.4234 9.97388 2.47023L11.0799 5.8743C11.2677 6.45234 11.8064 6.84371 12.4142 6.84371H15.9935C16.0427 6.84371 16.0692 6.85758 16.0862 6.87067C16.1069 6.88671 16.1272 6.91347 16.1389 6.94939C16.1506 6.98532 16.1499 7.01891 16.1425 7.04408C16.1365 7.06463 16.1232 7.09145 16.0834 7.12039L13.1877 9.22422C12.696 9.58147 12.4902 10.2147 12.678 10.7928L13.7841 14.1968C13.7993 14.2437 13.7943 14.2732 13.7871 14.2933C13.7782 14.318 13.7591 14.3456 13.7285 14.3678C13.698 14.39 13.6658 14.3997 13.6396 14.4005C13.6182 14.4012 13.5886 14.3968 13.5487 14.3678L10.653 12.264C10.1613 11.9067 9.49549 11.9068 9.00378 12.264L6.10811 14.3678C6.06827 14.3968 6.03865 14.4012 6.01725 14.4005C5.99105 14.3997 5.95887 14.39 5.92831 14.3678C5.89775 14.3456 5.87859 14.318 5.86974 14.2933C5.86252 14.2732 5.85753 14.2437 5.87275 14.1968L6.97879 10.7928C7.16661 10.2147 6.96086 9.58147 6.46914 9.22422L3.57347 7.12039C3.53363 7.09145 3.52031 7.06463 3.51431 7.04408C3.50696 7.01892 3.50624 6.98532 3.51791 6.94939C3.52958 6.91347 3.54992 6.88671 3.57066 6.87067C3.58759 6.85758 3.61413 6.84371 3.66337 6.84371H7.24262C7.85041 6.84371 8.38908 6.45234 8.5769 5.87429L9.68295 2.47023L9.08854 2.27709L9.68295 2.47023C9.69817 2.42339 9.71956 2.40244 9.73725 2.39038Z"
                  strokeWidth="1.25"
                  className="stroke-white"
                />
              </svg>
              High Trust IPs
            </p>

            <p className="flex items-center gap-2 sm:gap-3 text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px] text-white">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] sm:w-[19px] h-auto"
              >
                <path
                  d="M15.8281 8.8125C15.8281 12.3127 3.82812 12.3127 3.82812 8.8125M9.82812 2.25C6.51462 2.25 3.82812 3.2175 3.82812 4.41C3.82812 7.53 15.8281 7.53 15.8281 4.41C15.8281 3.2175 13.1416 2.25 9.82812 2.25Z"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-white"
                />
                <path
                  d="M3.82812 4.5V13.6238C3.82812 16.4588 15.8281 16.4588 15.8281 13.6238V4.5"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-white"
                />
              </svg>
              Massive IP Pool
            </p>

            <p className="flex items-center gap-2 sm:gap-3 text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px] text-white">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] sm:w-[19px] h-auto"
              >
                <path
                  d="M12.8138 5.66406L13.3441 5.13381M10.5931 15.1456L16.0666 9.67206C16.3441 9.39456 16.5016 9.01956 16.5068 8.62806L16.5781 3.01131C16.5794 2.91098 16.5606 2.8114 16.5228 2.71845C16.485 2.6255 16.429 2.54106 16.358 2.47011C16.2871 2.39916 16.2026 2.34313 16.1097 2.30534C16.0167 2.26755 15.9171 2.24875 15.8168 2.25006L10.2001 2.32131C9.80797 2.32633 9.43335 2.48431 9.15606 2.76156L3.68256 8.23506C3.17706 8.73981 2.78856 9.70431 3.36456 10.2803L8.54706 15.4628C9.12381 16.0396 10.0883 15.6503 10.5931 15.1456Z"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-white"
                />
              </svg>
              Free Trial Available
            </p>
          </div>
        </div>

        <div className="hidden xl:flex justify-center">
          <Image src={productBigImg} alt="" className="w-full rounded-xl" />
        </div>
      </div>

      <div className="relative z-10 mx-auto container max-w-[1320px] pt-24 lg:pt-32 px-5 flex flex-col items-center">
        <p className="mb-7 text-[11px] sm:text-sm font-medium tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-white">
          TRUSTED BY TOP PARTNERS IN THE INDUSTRY
        </p>

        <Marquee autoFill={true} speed={40}>
          <Image
            src={clientImg1}
            alt=""
            className="mx-auto h-[20px] lg:h-auto"
          />

          <span className="mx-8 sm:mx-12 w-px h-[15px] bg-white/25 block"></span>

          <Image
            src={clientImg2}
            alt=""
            className="mx-auto h-[16px] lg:h-auto"
          />

          <span className="mx-8 sm:mx-12 w-px h-[15px] bg-white/25 block"></span>

          <Image
            src={clientImg3}
            alt=""
            className="mx-auto h-[13px] lg:h-auto"
          />

          <span className="mx-8 sm:mx-12 w-px h-[15px] bg-white/25 block"></span>

          <Image
            src={clientImg4}
            alt=""
            className="mx-auto h-[15px] lg:h-auto"
          />

          <span className="mx-8 sm:mx-12 w-px h-[15px] bg-white/25 block"></span>

          <Image
            src={clientImg5}
            alt=""
            className="mx-auto h-[17px] lg:h-auto"
          />

          <span className="mx-8 sm:mx-12 w-px h-[15px] bg-white/25 block"></span>

          <Image
            src={clientImg6}
            alt=""
            className="mx-auto h-[18px] lg:h-auto"
          />

          <span className="mx-8 sm:mx-12 w-px h-[15px] bg-white/25 block"></span>
        </Marquee>

        <Link
          href={"/"}
          className="mt-8 py-1.5 px-3.5 border border-white/25 rounded-full text-[11px] sm:text-sm tracking-[-0.14px] text-center text-white"
        >
          Learn how Lightning Proxies is transforming the proxy landscape
          worldwide
          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[10px] sm:w-[13px] inline-block ml-2"
          >
            <path
              d="M7.71967 1.53033C7.42678 1.23744 7.42678 0.762563 7.71967 0.46967C8.01256 0.176777 8.48744 0.176777 8.78033 0.46967L12.7803 4.46967C13.0732 4.76256 13.0732 5.23744 12.7803 5.53033L8.78033 9.53033C8.48744 9.82322 8.01256 9.82322 7.71967 9.53033C7.42678 9.23744 7.42678 8.76256 7.71967 8.46967L10.4393 5.75H0.75C0.335787 5.75 0 5.41421 0 5C0 4.58579 0.335787 4.25 0.75 4.25H10.4393L7.71967 1.53033Z"
              className="fill-white"
            />
          </svg>
        </Link>
      </div>

      <div className="relative z-10 mx-auto container max-w-[1320px] pt-12 lg:pt-16 pb-12 lg:pb-20 px-5">
        <div className="mb-12 lg:mb-16 w-full h-px bg-[#00C1D1]"></div>
        <div
          className="absolute top-12 lg:top-16 left-0 w-full h-[170px] opacity-25"
          style={{
            background: `radial-gradient(50.46% 100% at 50% 0%, #00C1D1 0%, rgba(0, 193, 83, 0.00) 100%)`,
          }}
        ></div>

        <div className="relative z-20 flex flex-col items-center">
          <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-[#00C1D1]">
            PRICING
          </p>

          <h2 className="mb-5 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center text-white">
            Clear Pricing
          </h2>

          <p className="mb-5 text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-white/75">
            Access the largest and most{" "}
            <span className="font-semibold">stable IP pool</span> of 3G/4G/5G
            Mobile Proxies
          </p>

          <PricingPart />
        </div>
      </div>
    </section>
  );
}
