import Image from "next/image";
import pricingPageHeroSectionGrainImg from "@/assets/images/pricing-page-hero-section-grain.png";
import ProductIconImg from "@/assets/images/pricing-datacenter-proxies-icon.svg";
import Link from "next/link";
import IncludedBox from "./IncludedBox";
import PaymentMethodsBox from "./PaymentMethodsBox";
import ExtraDataBox from "./ExtraDataBox";
import PointsBox from "./PointsBox";
import CountryBox from "./CountryBox";
import PlanBox from "./PlanBox";
import AddonsBox from "./AddonsBox";

export default function HeroSection() {
  return (
    <section className="relative pt-[70px] bg-[#121118] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-[#00C153] to-transparent"></div>

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
          Datacenter Proxies Pricing{" "}
        </h1>

        <p className="mb-12 text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-white/75">
          Praesent vestibulum bibendum suscipit. Pellentesque sit amet convallis
          orci. 
        </p>

        <div className="w-full grid lg:grid-cols-[350px_auto] gap-3">
          <div className="order-2 lg:order-1">
            <IncludedBox />
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-3">
            <PlanBox />
            <AddonsBox />
          </div>
        </div>

        <CountryBox />

        <div className="my-4 sm:my-8 w-full sm:pt-8 sm:border-t border-dashed border-white/15 grid lg:grid-cols-2 gap-4">
          <ExtraDataBox />
          <PaymentMethodsBox />
        </div>

        <PointsBox />

        <Link
          href={"/"}
          className="py-1.5 px-3.5 border border-white/25 rounded-full text-[11px] sm:text-sm tracking-[-0.14px] text-center text-white"
        >
          Are you looking to resell residential proxies?{" "}
          <span className="font-semibold text-accent">
            Get Started as a Reseller
          </span>
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
              className="fill-accent"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
