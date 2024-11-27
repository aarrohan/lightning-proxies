import Image from "next/image";
import brandAssets1Img from "@/assets/images/brand-assets-1.svg";
import brandAssets2Img from "@/assets/images/brand-assets-2.svg";

export default function HeroSection() {
  return (
    <section className="pt-[70px]">
      <div className="relative mx-auto container max-w-[1320px] pt-20 sm:pt-28 px-5">
        <div className="mb-10 flex flex-col sm:flex-row justify-between sm:items-end gap-2.5">
          <h1 className="max-w-[500px] text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
            Brand Assets
          </h1>

          <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/50">
            LighthingProxies brand identity
          </p>
        </div>

        <Image
          src={brandAssets1Img}
          alt=""
          className="w-full rounded-xl hidden sm:block"
        />
        <Image
          src={brandAssets2Img}
          alt=""
          className="w-full rounded-xl sm:hidden"
        />
      </div>
    </section>
  );
}
