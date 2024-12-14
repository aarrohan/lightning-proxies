import Image from "next/image";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import SecondaryBtn from "@/components/ui/SecondaryBtn";
import referralProgramImg1 from "@/assets/images/referral-program-1.svg";

export default function HeroSection() {
  return (
    <section className="pt-[70px]">
      <div className="mx-auto container max-w-[1320px] pt-20 pb-16 px-5 grid xl:grid-cols-[auto_580px] items-center gap-x-16">
        <div className="flex flex-col items-center xl:items-start">
          <p className="mb-6 py-2 px-3.5 bg-accent/10 rounded-xl text-[11px] sm:text-sm tracking-[-0.11px] sm:tracking-[-0.14px] text-accent">
            Our online referral program is now available.{" "}
            <span className="font-medium">Earn Rewards</span>
          </p>

          <h1 className="mb-6 text-4xl sm:text-[64px] leading-[42px] sm:leading-[72px] tracking-[-1.08px] sm:tracking-[-1.95px] font-semibold text-center xl:text-left">
            Join LightningProxies Reseller Program
          </h1>

          <p className="max-w-[580px] text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-center xl:text-left">
            Optimized and Secure Proxy Network, LightningProxies offers a White
            Label Reselling Program, allowing anyone to effortlessly start or
            expand their proxy business with minimal investments and zero risk.
          </p>

          <div className="my-7 flex flex-wrap items-center gap-y-4 gap-x-6 sm:gap-x-8">
            <p className="flex items-center gap-2 sm:gap-3 text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px]">
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
                  className="stroke-primary"
                />
                <path
                  d="M3.82812 4.5V13.6238C3.82812 16.4588 15.8281 16.4588 15.8281 13.6238V4.5"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-primary"
                />
              </svg>
              10M+ Proxy Pool
            </p>

            <p className="flex items-center gap-2 sm:gap-3 text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px]">
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
                  className="stroke-primary"
                />
              </svg>
              30 Day Free Trial
            </p>
          </div>

          <div className="w-full sm:w-fit grid sm:flex items-center gap-y-1.5 gap-x-3">
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

            <SecondaryBtn customClasses="!py-2.5 !px-8 border border-dark-white sm:!text-base sm:!tracking-[-0.16px] text-primary">
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
        </div>

        <div className="hidden xl:flex justify-center">
          <Image src={referralProgramImg1} alt="" className="w-full" />
        </div>
      </div>
    </section>
  );
}
