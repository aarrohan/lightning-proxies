import Image from "next/image";
import locationsPageHeroSectionBg from "@/assets/images/locations-page-hero-section-bg.png";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import SecondaryBtn from "@/components/ui/SecondaryBtn";
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
    <section className="relative pt-[70px] bg-[#000F25] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#000F25] to-[#0043A4]"></div>

      <Image
        src={locationsPageHeroSectionBg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-25 sm:opacity-50"
      />

      <div className="relative z-10 mx-auto container max-w-[1320px] pt-12 lg:pt-20 px-5 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <p className="mb-2 sm:mb-6 py-2 px-3.5 bg-white/10 rounded-xl text-[11px] sm:text-sm tracking-[-0.11px] sm:tracking-[-0.14px] text-center text-white">
            Our online referral program is now available.{" "}
            <span className="font-medium">Earn Rewards</span>
          </p>

          <h1 className="mb-8 sm:mb-6 text-4xl sm:text-[64px] leading-[10px] sm:leading-[72px] tracking-[-1.08px] sm:tracking-[-1.95px] font-semibold text-center text-white">
            Our{" "}
            <svg
              width="63"
              height="60"
              viewBox="0 0 63 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-4 w-[36px] sm:w-[64px] xl:w-[78px] inline-block align-middle"
            >
              <rect
                opacity="0.1"
                y="4.08203"
                width="58.5168"
                height="56"
                rx="7.31343"
                transform="rotate(-4 0 4.08203)"
                fill="url(#paint0_radial_479_8031)"
              />
              <path
                d="M48.8699 29.3455C48.1957 19.704 39.8331 12.4347 30.1917 13.1089C20.5503 13.783 13.2809 22.1455 13.9551 31.787C14.6293 41.4283 22.9918 48.6978 32.6332 48.0236C42.2746 47.3494 49.544 38.9868 48.8699 29.3455Z"
                stroke="#1675FF"
                strokeWidth="2.625"
              />
              <path
                d="M44.612 18.5893C42.9885 18.821 40.9427 19.5989 39.6246 21.5761C37.2439 25.1473 34.646 25.6131 32.822 24.6057C30.0858 23.0947 32.0937 20.1968 28.9171 18.9204C26.8468 18.0885 26.3827 15.4633 27.3518 13.3072"
                stroke="#1675FF"
                strokeWidth="2.625"
                strokeLinejoin="round"
              />
              <path
                d="M13.8359 30.041C15.2479 31.1038 17.1863 32.0315 19.3829 31.8779C23.9213 31.5606 24.8896 32.3642 25.1321 35.8328C25.3747 39.3014 25.3747 39.3014 26.4642 41.8392C27.173 43.4901 27.4977 45.1678 26.4225 46.7036"
                stroke="#1675FF"
                strokeWidth="2.625"
                strokeLinejoin="round"
              />
              <path
                d="M49.0445 31.8804C47.4335 31.0962 45.465 30.865 43.5971 32.416C40.0229 35.3838 37.2715 33.3241 36.2594 35.6454C34.7697 39.0627 40.9857 39.6694 36.1221 47.779"
                stroke="#1675FF"
                strokeWidth="2.625"
                strokeLinejoin="round"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_479_8031"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(29.2584 32.082) rotate(90) scale(28 29.2584)"
                >
                  <stop stopColor="#1675FF" />
                  <stop offset="1" stopColor="white" stopOpacity="0.5" />
                </radialGradient>
              </defs>
            </svg>
            Global
            <br />
            Proxy Network
          </h1>

          <p className="max-w-[580px] text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-white">
            Gather data efficiently with the industry-leading proxy network and
            enjoy limitless web scraping solutions on the most intense tasks.
          </p>

          <div className="my-7 flex flex-wrap justify-center items-center gap-y-4 gap-x-6 sm:gap-x-8">
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
                  d="M17.1641 9C17.1641 4.85786 13.8062 1.5 9.66406 1.5C5.52192 1.5 2.16406 4.85786 2.16406 9C2.16406 13.1421 5.52192 16.5 9.66406 16.5C13.8062 16.5 17.1641 13.1421 17.1641 9Z"
                  stroke="white"
                  strokeWidth="1.125"
                />
                <path
                  d="M15.6641 4.27424C14.963 4.32477 14.0651 4.59618 13.4425 5.40208C12.3179 6.85771 11.1933 6.97917 10.4436 6.49396C9.31899 5.76615 10.2641 4.58727 8.94414 3.94661C8.08391 3.52906 7.96397 2.39284 8.44276 1.5"
                  stroke="white"
                  strokeWidth="1.125"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.16406 8.25C2.73594 8.74658 3.53691 9.20115 4.48062 9.20115C6.43038 9.20115 6.82034 9.57367 6.82034 11.0638C6.82034 12.554 6.82034 12.554 7.21029 13.6716C7.46394 14.3986 7.5526 15.1256 7.04701 15.75"
                  stroke="white"
                  strokeWidth="1.125"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.1641 10.0892C16.4987 9.70582 15.6641 9.54809 14.8191 10.1554C13.2023 11.3173 12.0876 10.3545 11.5855 11.3167C10.8464 12.7331 13.4858 13.1783 11.1641 16.5"
                  stroke="white"
                  strokeWidth="1.125"
                  strokeLinejoin="round"
                />
              </svg>
              150+ Countries
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
                  d="M5.91406 13.5C4.54236 13.8088 3.66406 14.2832 3.66406 14.8153C3.66406 15.7457 6.35035 16.5 9.66406 16.5C12.9778 16.5 15.6641 15.7457 15.6641 14.8153C15.6641 14.2832 14.7857 13.8088 13.4141 13.5"
                  stroke="white"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                />
                <path
                  d="M11.5391 6.75C11.5391 7.78552 10.6996 8.625 9.66406 8.625C8.62854 8.625 7.78906 7.78552 7.78906 6.75C7.78906 5.71447 8.62854 4.875 9.66406 4.875C10.6996 4.875 11.5391 5.71447 11.5391 6.75Z"
                  stroke="white"
                  strokeWidth="1.125"
                />
                <path
                  d="M10.6071 13.1202C10.3541 13.3638 10.016 13.5 9.66421 13.5C9.31231 13.5 8.97421 13.3638 8.72124 13.1202C6.40479 10.8756 3.30045 8.36812 4.81434 4.7278C5.63289 2.75949 7.59777 1.5 9.66421 1.5C11.7306 1.5 13.6955 2.7595 14.514 4.7278C16.026 8.36355 12.9293 10.8833 10.6071 13.1202Z"
                  stroke="white"
                  strokeWidth="1.125"
                />
              </svg>
              City-level targeting
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
                  d="M7.41406 9.75C7.41406 9.75 8.16406 9.75 8.91406 11.25C8.91406 11.25 11.2964 7.5 13.4141 6.75"
                  stroke="white"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.4141 8.38748V6.21022C16.4141 4.98022 16.4141 4.36521 16.111 3.96397C15.8079 3.56272 15.1226 3.36792 13.7521 2.97833C12.8157 2.71215 11.9903 2.39147 11.3308 2.09872C10.4316 1.69957 9.98206 1.5 9.66406 1.5C9.34606 1.5 8.89651 1.69957 7.99734 2.09872C7.33785 2.39147 6.51244 2.71214 5.57606 2.97833C4.20551 3.36792 3.52023 3.56272 3.21714 3.96397C2.91406 4.36521 2.91406 4.98022 2.91406 6.21022V8.38748C2.91406 12.6064 6.71114 15.1376 8.60956 16.1395C9.06489 16.3798 9.29251 16.5 9.66406 16.5C10.0356 16.5 10.2632 16.3798 10.7186 16.1395C12.617 15.1376 16.4141 12.6064 16.4141 8.38748Z"
                  stroke="white"
                  strokeWidth="1.125"
                  strokeLinecap="round"
                />
              </svg>
              Block-free scraping
            </p>
          </div>

          <div className="w-full sm:w-fit grid sm:flex gap-3">
            <Link href={`${process.env.NEXT_PUBLIC_AUTH_URL}/signup`}>
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
            </Link>

            <Link href={`${process.env.NEXT_PUBLIC_AUTH_URL}/signup`}>
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
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto container max-w-[1320px] pt-24 lg:pt-32 pb-12 lg:pb-20 px-5 flex flex-col items-center">
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
          href={`${process.env.NEXT_PUBLIC_AUTH_URL}/signup`}
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
    </section>
  );
}
