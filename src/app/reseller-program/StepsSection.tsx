import Image from "next/image";
import referralProgramStep1Img from "@/assets/images/referral-program-step-1.svg";
import referralProgramStep2Img from "@/assets/images/referral-program-step-2.svg";
import referralProgramStep3Img from "@/assets/images/referral-program-step-3.svg";

export default function StepsSection() {
  return (
    <section className="pb-20 sm:pb-44">
      <div className="mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-accent">
          HOW TO GET STARTED
        </p>

        <h2 className="mb-6 max-w-[550px] text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          First Steps to Enter Our Reseller Program
        </h2>

        <p className="mb-16 max-w-[580px] text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/75">
          Following the steps below is crucial to successfully joining our
          Reseller Program. It helps us build a connection and understand our
          partners before embarking on a business journey together.
        </p>

        <div className="w-full grid sm:grid-cols-3 gap-y-10 gap-x-6">
          <div>
            <div className="flex items-center gap-2.5">
              <svg
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8.125L4.5 4.375L1 0.875"
                  stroke="#1675FF"
                  strokeWidth="1.5"
                />
              </svg>

              <p className="text-xs sm:text-sm font-medium uppercase tracking-[-0.12px] sm:tracking-[-0.14px]">
                Step 01
              </p>

              <div className="flex-1 border border-dashed border-dark-white"></div>
            </div>

            <Image
              src={referralProgramStep1Img}
              alt=""
              className="my-4 w-full border border-dark-white rounded-xl"
            />

            <h3 className="mb-2 text-xs sm:text-lg font-medium tracking-[-0.12px] sm:tracking-[-0.18px]">
              Get in touch with our team
            </h3>

            <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
              Perfectly tailored for partners looking to launch their proxy
              network or expand it by offering a range of new products to their
              audience.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2.5">
              <svg
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8.125L4.5 4.375L1 0.875"
                  stroke="#1675FF"
                  strokeWidth="1.5"
                />
              </svg>

              <p className="text-xs sm:text-sm font-medium uppercase tracking-[-0.12px] sm:tracking-[-0.14px]">
                Step 02
              </p>

              <div className="flex-1 border border-dashed border-dark-white"></div>
            </div>

            <Image
              src={referralProgramStep2Img}
              alt=""
              className="my-4 w-full border border-dark-white rounded-xl"
            />

            <h3 className="mb-2 text-xs sm:text-lg font-medium tracking-[-0.12px] sm:tracking-[-0.18px]">
              Recharge Balance
            </h3>

            <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
              Say goodbye to payment headaches with SecurePay! Our easy-to-use
              payment platform makes it simple for businesses and individuals.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2.5">
              <svg
                width="6"
                height="9"
                viewBox="0 0 6 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8.125L4.5 4.375L1 0.875"
                  stroke="#1675FF"
                  strokeWidth="1.5"
                />
              </svg>

              <p className="text-xs sm:text-sm font-medium uppercase tracking-[-0.12px] sm:tracking-[-0.14px]">
                Step 03
              </p>

              <div className="flex-1 border border-dashed border-dark-white"></div>
            </div>

            <Image
              src={referralProgramStep3Img}
              alt=""
              className="my-4 w-full border border-dark-white rounded-xl"
            />

            <h3 className="mb-2 text-xs sm:text-lg font-medium tracking-[-0.12px] sm:tracking-[-0.18px]">
              Start Reselling
            </h3>

            <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
              Say goodbye to payment headaches with SecurePay! Our easy-to-use
              payment platform makes it simple for businesses and individuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
