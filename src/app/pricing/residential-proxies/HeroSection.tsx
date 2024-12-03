import Image from "next/image";
import pricingPageHeroSectionGrainImg from "@/assets/images/pricing-page-hero-section-grain.png";
import ProductIconImg from "@/assets/images/pricing-residential-proxies-icon.svg";
import PricingPart from "./PricingPart";

export default function HeroSection() {
  return (
    <section className="relative pt-[70px] bg-[#121118] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-[#0050C3] to-transparent"></div>

      <Image
        src={pricingPageHeroSectionGrainImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-25 sm:opacity-50"
      />

      <div className="relative z-10 mx-auto container max-w-[1320px] py-12 lg:py-20 px-5 flex flex-col items-center">
        <Image
          src={ProductIconImg}
          alt=""
          className="hover:scale-105 w-[50px] sm:w-[60px] h-auto duration-200"
        />

        <h1 className="mt-5 mb-5 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center text-white">
          Residential Proxies Pricing
        </h1>

        <p className="mb-5 text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-white/75">
          72M+ rotating residential IPs in 195 Country, state, city and zip code
          geo-targeting <span className="font-semibold">free!</span>
        </p>

        <PricingPart />
      </div>
    </section>
  );
}
