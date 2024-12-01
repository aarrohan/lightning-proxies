import PrimaryBtn from "@/components/ui/PrimaryBtn";
import Image from "next/image";
import affiliateProgramImg2 from "@/assets/images/affiliate-program-2.png";

export default function JoinSection() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="mx-auto container max-w-[1320px] px-5">
        <div className="relative py-28 px-14 bg-gradient-to-b from-[#005EE7] to-[#010502] rounded-2xl sm:rounded-3xl flex flex-col items-center overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <p className="mb-3 text-[11px] sm:text-sm font-medium tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-white">
              AFFILIATE PROGRAM
            </p>

            <h2 className="mb-4 sm:mb-5 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center text-white">
              Join today and start earning{" "}
            </h2>

            <p className="mb-6 sm:mb-8 max-w-[590px] text-xs sm:text-base font-light leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-white/75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              molestie nec dui ut laoreet. Vivamus pellentesque, ipsum vel
              sagittis pharetra.
            </p>

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
          </div>

          <Image
            src={affiliateProgramImg2}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
