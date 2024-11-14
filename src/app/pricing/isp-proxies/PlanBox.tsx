"use client";
import { useState } from "react";
import Select, { IOption } from "@/components/ui/Select";
import PlanBoxDuration from "./PlanBoxDuration";
import usaFlagImg from "@/assets/images/flags/usa.svg";
import ukFlagImg from "@/assets/images/flags/uk.svg";
import canadaFlagImg from "@/assets/images/flags/canada.svg";
import Image from "next/image";

export default function PlanBox() {
  const [numberOfIPsSelectedOptionIndex, setNumberOfIPsSelectedOptionIndex] =
    useState<number>(0);
  const [countrySelectedOptionIndex, setCountrySelectedOptionIndex] =
    useState<number>(0);

  const numberofIPs: IOption[] = [
    {
      title: "60",
      value: "60",
    },
    {
      title: "100",
      value: "100",
    },
  ];

  const countryOptions: IOption[] = [
    {
      icon: (
        <Image src={canadaFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "Canada",
      value: "canada",
    },
    {
      icon: <Image src={usaFlagImg} alt="" className="w-[24px] sm:w-[27px]" />,
      title: "United States",
      value: "united-states",
    },
    {
      icon: <Image src={ukFlagImg} alt="" className="w-[24px] sm:w-[27px]" />,
      title: "United Kingdom",
      value: "united-kingdom",
    },
  ];

  return (
    <div className="order-1 lg:order-2 p-5 border border-white/10 bg-white/5 rounded-xl flex flex-col justify-between duration-200">
      <div>
        <h3 className="mb-5 text-lg sm:text-[24px] font-semibold tracking-[-0.54px] sm:tracking-[-0.84px] text-white">
          Select your plan
        </h3>

        <div className="border-b border-dashed border-white/15">
          <div className="py-3.5 border-t border-dashed border-white/15 flex justify-between items-center gap-3.5">
            <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-white/75">
              Select Number of IPs
            </p>

            <div className="hidden sm:block">
              <p className="py-1.5 px-3 sm:px-4 border border-dashed border-white/25 bg-gradient-to-b from-white/10 to-[#999]/10 rounded-lg text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px] text-white duration-200">
                60
              </p>
            </div>

            <div className="sm:hidden">
              <Select
                customClasses="border-dashed border-white/25 !gap-3"
                options={numberofIPs}
                selectedOptionIndex={numberOfIPsSelectedOptionIndex}
                setSelectedOptionIndex={setNumberOfIPsSelectedOptionIndex}
              />
            </div>
          </div>

          <PlanBoxDuration />

          <div className="py-3.5 border-t border-dashed border-white/15 flex justify-between items-center gap-4">
            <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] whitespace-nowrap text-white/75">
              Select Country
            </p>

            <Select
              options={countryOptions}
              selectedOptionIndex={countrySelectedOptionIndex}
              setSelectedOptionIndex={setCountrySelectedOptionIndex}
            />
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-between items-center">
        <h4 className="text-lg sm:text-[24px] font-semibold tracking-[-0.54px] sm:tracking-[-0.84px] text-white">
          $35{" "}
          <span className="text-xs sm:text-sm font-normal tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75">
            / monthly
          </span>
        </h4>

        <button className="group active:scale-95 py-[8px] px-6 sm:px-10 border border-white/15 bg-white/5 hover:bg-white rounded-[9px] flex justify-center items-center gap-3 text-sm font-medium tracking-[-0.14px] text-white hover:text-primary duration-200">
          Get Started{" "}
          <svg
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.46967 2.03033C0.176777 1.73744 0.176777 1.26256 0.46967 0.96967C0.762563 0.676777 1.23744 0.676777 1.53033 0.96967L5.53033 4.96967C5.82322 5.26256 5.82322 5.73744 5.53033 6.03033L1.53033 10.0303C1.23744 10.3232 0.762563 10.3232 0.46967 10.0303C0.176777 9.73744 0.176777 9.26256 0.46967 8.96967L3.18934 6.25L3.75 5.5L3.18934 4.75L0.46967 2.03033Z"
              className="fill-white group-hover:fill-primary duration-200"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
