import SecondaryBtn from "@/components/ui/SecondaryBtn";
import followUpSectionShapeImg from "@/assets/images/follow-up-section-shape.svg";
import followUpSectionShapeMobileImg from "@/assets/images/follow-up-section-shape-mobile.svg";
import Image from "next/image";
import Link from "next/link";

export default function FollowUpSection() {
  return (
    <section className="relative pt-16 pb-40 sm:pb-36 bg-gradient-to-b from-[#1488FF] to-[#015DE3] overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url('/images/grain.png')`,
          backgroundSize: "cover",
        }}
      ></div>

      <Image
        src={followUpSectionShapeImg}
        alt=""
        className="absolute top-0 left-[49.895%] -translate-x-1/2 w-[1320px] hidden sm:block"
      />

      <Image
        src={followUpSectionShapeMobileImg}
        alt=""
        className="absolute -bottom-[36px] left-[49.4%] -translate-x-1/2 w-[435px] min-w-[435px] block sm:hidden"
      />

      <div className="relative z-20 mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
        <h2 className="mb-6 sm:mb-7 text-4xl sm:text-[42px] font-semibold leading-[42px] sm:leading-[48px] tracking-[-1.08px] text-center text-white">
          Begin your data gathering <br className="hidden sm:block" /> journey
          today!
        </h2>

        <p className="mb-6 text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.16px] text-center text-white/75">
          We help you gather data faster and smarter with our <br /> advanced
          proxy solutions.
        </p>

        <Link href={`${process.env.NEXT_PUBLIC_AUTH_URL}/signup`}>
          <SecondaryBtn customClasses="sm:!py-2.5 !px-14 sm:!text-base sm:!tracking-[-0.16px]">
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
                className="fill-accent"
              />
            </svg>
          </SecondaryBtn>
        </Link>
      </div>
    </section>
  );
}
