import Image from "next/image";
import brandAssets5Img from "@/assets/images/brand-assets-5.svg";
import PrimaryBtn from "@/components/ui/PrimaryBtn";

export default function DownloadSection() {
  return (
    <section className="my-20 sm:my-44">
      <div className="mx-auto container max-w-[1320px] px-5">
        <div className="py-10 sm:py-12 px-6 sm:px-20 border border-dark-white bg-off-white rounded-3xl flex flex-col sm:flex-row justify-between sm:items-center gap-10">
          <div className="sm:flex flex-col items-start">
            <h2 className="mb-3 sm:mb-4 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
              Get Brand Assets
            </h2>

            <p className="mb-6 text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
              Logos, brand colors, screenshots and more.
            </p>

            <PrimaryBtn extraSmall customClasses="!px-10">
              <svg
                width="10"
                height="13"
                viewBox="0 0 10 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.21967 7.71967C8.51256 7.42678 8.98744 7.42678 9.28033 7.71967C9.57322 8.01256 9.57322 8.48744 9.28033 8.78033L5.28033 12.7803C4.98744 13.0732 4.51256 13.0732 4.21967 12.7803L0.219669 8.78033C-0.0732244 8.48744 -0.0732244 8.01256 0.219669 7.71967C0.512562 7.42678 0.987436 7.42678 1.28033 7.71967L4 10.4393L4 0.75C4 0.335787 4.33579 -2.25735e-07 4.75 -2.07629e-07C5.16421 -1.89523e-07 5.5 0.335787 5.5 0.75L5.5 10.4393L8.21967 7.71967Z"
                  fill="white"
                />
              </svg>
              Download .zip
            </PrimaryBtn>
          </div>

          <div className="flex">
            <Image
              src={brandAssets5Img}
              alt=""
              className="w-full max-w-[200px] sm:max-w-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
