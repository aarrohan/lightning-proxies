"use client";
import { useState } from "react";
import Image from "next/image";
import pricingPageHeroSectionGrainImg from "@/assets/images/pricing-page-hero-section-grain.png";
import comingSoonShape1Img from "@/assets/images/coming-soon-shape-1.svg";

export default function HeroSection() {
  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  return (
    <section className="relative pt-[70px] bg-[#121118] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1675FF] to-transparent"></div>

      <Image
        src={comingSoonShape1Img}
        alt=""
        className="absolute top-[238px] left-1/2 -translate-x-1/2 w-[1000px] sm:w-[1920px] min-w-[1000px] sm:min-w-[1920px] h-auto"
      />

      <Image
        src={pricingPageHeroSectionGrainImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-25 sm:opacity-50"
      />

      <div className="relative z-10 mx-auto container max-w-[1320px] pt-12 lg:pt-20 pb-72 px-5 flex flex-col items-center">
        <p className="mb-4 sm:mb-6 py-2 px-3.5 bg-white/10 rounded-xl text-[11px] sm:text-sm tracking-[-0.11px] sm:tracking-[-0.14px] text-white">
          COMING SOON
        </p>

        <h1 className="mb-6 text-4xl sm:text-[64px] sm:leading-[72px] tracking-[-1.08px] sm:tracking-[-1.95px] font-semibold text-center text-white">
          We will bring <br className="hidden sm:block" /> this{" "}
          <br className="sm:hidden" /> very soon!
        </h1>

        <p className="mb-6 sm:mb-8 text-xs sm:text-base font-light leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-white">
          We are bringing this service to our platform as soon as possible.{" "}
          <br /> Feel free to drop your email below and subscribe to our
          spam-free newsletter.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            setIsSubmited(true);
          }}
          className="mb-4 sm:mb-5 w-full max-w-[380px] sm:max-w-[590px] p-1.5 sm:p-2.5 pl-4 sm:pl-6 bg-white rounded-lg sm:rounded-xl flex items-center gap-5"
        >
          <input
            type="email"
            placeholder="Your email address"
            required
            className="w-full text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] placeholder:text-primary/50"
          />

          <button className="py-2 px-4 bg-accent rounded-md sm:rounded-lg text-xs sm:text-sm font-medium tracking-[-0.14px] text-white">
            Submit
          </button>
        </form>

        <p className="text-xs sm:text-base font-light leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-white">
          No spam, we promise.
        </p>

        <p
          className={`mt-5 sm:mt-8 sm:mb-6 py-3 px-4 bg-[#16D857]/25 rounded-xl flex items-center gap-2.5 text-[11px] sm:text-sm tracking-[-0.11px] sm:tracking-[-0.14px] text-[#16D857] ${
            !isSubmited ? "opacity-0 pointer-events-none" : ""
          } duration-200`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5C13.1421 16.5 16.5 13.1421 16.5 9Z"
              stroke="#16D857"
              strokeWidth="1.125"
            />
            <path
              d="M6 9.375L7.875 11.25L12 6.75"
              stroke="#16D857"
              strokeWidth="1.125"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Thank you for your interest
        </p>
      </div>
    </section>
  );
}
