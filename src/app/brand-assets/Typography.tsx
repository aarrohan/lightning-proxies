import Image from "next/image";
import brandAssets3Img from "@/assets/images/brand-assets-3.svg";
import brandAssets4Img from "@/assets/images/brand-assets-4.svg";

export default function TypographySection() {
  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
        <h2 className="mb-3 sm:mb-4 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          Typography
        </h2>

        <p className="mb-10 text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
          The duo that defines the typography for the brand{" "}
        </p>

        <div className="w-full grid sm:grid-cols-2 gap-y-10 gap-x-3">
          <div>
            <Image
              src={brandAssets3Img}
              alt=""
              className="mb-3.5 w-full border border-dark-white rounded-lg sm:rounded-xl"
            />

            <div className="flex items-center gap-3.5">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.4px] sm:tracking-[-0.52px]">
                Inter
              </h3>

              <p className="text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
                for Landing Pages
              </p>
            </div>
          </div>

          <div>
            <Image
              src={brandAssets4Img}
              alt=""
              className="mb-3.5 w-full border border-dark-white rounded-lg sm:rounded-xl"
            />

            <div className="flex items-center gap-3.5">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.4px] sm:tracking-[-0.52px]">
                Figtree
              </h3>

              <p className="text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
                for Dashboards
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
