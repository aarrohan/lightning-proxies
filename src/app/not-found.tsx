import type { Metadata } from "next";
import Image from "next/image";
import notFoundImg from "@/assets/images/not-found.png";
import FollowUpSection from "./(landing)/FollowUpSection";
import PrimaryBtn from "@/components/ui/PrimaryBtn";

export const metadata: Metadata = {
  title: "404 - Lightning Proxies",
};

export default function NotFound() {
  return (
    <main>
      <section className="pt-[70px]">
        <div className="mx-auto container max-w-[1320px] py-20 sm:py-28 px-5 flex flex-col items-center">
          <Image src={notFoundImg} alt="" className="w-full max-w-[590px]" />

          <h2 className="mt-7 mb-6 sm:mb-7 max-w-[500px] text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
            We can’t find the page you’re looking for
          </h2>

          <p className="mb-7 max-w-[590px] text-xs sm:text-lg tracking-[-0.12px] sm:tracking-[-0.18px] text-center text-primary/50">
            It may have been moved, renamed or temporarily unavailable. Please
            check the URL or contact our support for more assistance.
          </p>

          <PrimaryBtn customClasses="!py-2.5 !px-12 sm:!text-base sm:!tracking-[-0.16px]">
            <svg
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.78033 2.03033C6.07322 1.73744 6.07322 1.26256 5.78033 0.96967C5.48744 0.676777 5.01256 0.676777 4.71967 0.96967L0.71967 4.96967C0.426777 5.26256 0.426777 5.73744 0.71967 6.03033L4.71967 10.0303C5.01256 10.3232 5.48744 10.3232 5.78033 10.0303C6.07322 9.73744 6.07322 9.26256 5.78033 8.96967L3.06066 6.25H12.75C13.1642 6.25 13.5 5.91421 13.5 5.5C13.5 5.08579 13.1642 4.75 12.75 4.75H3.06066L5.78033 2.03033Z"
                fill="white"
              />
            </svg>
            Back to homepage
          </PrimaryBtn>
        </div>
      </section>

      <FollowUpSection />
    </main>
  );
}
