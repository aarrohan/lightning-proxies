"use client";
import { useState } from "react";
import Select, { IOption } from "@/components/ui/Select";
import PlanBoxDuration from "./PlanBoxDuration";
import usaFlagImg from "@/assets/images/flags/usa.svg";
import ukFlagImg from "@/assets/images/flags/uk.svg";
import germanyFlagImg from "@/assets/images/flags/germany.svg";
import canadaFlagImg from "@/assets/images/flags/canada.svg";
import netherlandsFlagImg from "@/assets/images/flags/netherlands.svg";
import franceFlagImg from "@/assets/images/flags/france.svg";
import thailandFlagImg from "@/assets/images/flags/thailand.svg";
import indiaFlagImg from "@/assets/images/flags/india.svg";
import japanFlagImg from "@/assets/images/flags/japan.svg";
import italyFlagImg from "@/assets/images/flags/italy.svg";
import spainFlagImg from "@/assets/images/flags/spain.svg";
import brazilFlagImg from "@/assets/images/flags/brazil.svg";
import romaniaFlagImg from "@/assets/images/flags/romania.svg";
import austriaFlagImg from "@/assets/images/flags/austria.svg";
import hongkongFlagImg from "@/assets/images/flags/hong-kong.svg";
import polandFlagImg from "@/assets/images/flags/poland.svg";
import singaporeFlagImg from "@/assets/images/flags/singapore.svg";
import australiaFlagImg from "@/assets/images/flags/australia.svg";
import norwayFlagImg from "@/assets/images/flags/norway.svg";
import latviaFlagImg from "@/assets/images/flags/latvia.svg";
import ukraineFlagImg from "@/assets/images/flags/ukraine.svg";
import southkoreaFlagImg from "@/assets/images/flags/south-korea.svg";
import Image from "next/image";

export default function PlanBox() {
  const [numberOfIPs, setNumberOfIPs] = useState<number>(25);

  const [countrySelectedOptionIndex, setCountrySelectedOptionIndex] =
    useState<number>(0);

  const countryOptions: IOption[] = [
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
    {
      icon: (
        <Image src={germanyFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "Germany",
      value: "germany",
    },
    {
      icon: (
        <Image src={canadaFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "Canada",
      value: "canada",
    },
    {
      icon: (
        <Image
          src={netherlandsFlagImg}
          alt=""
          className="w-[24px] sm:w-[27px]"
        />
      ),
      title: "Netherlands",
      value: "netherlands",
    },
    {
      icon: (
        <Image src={franceFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "France",
      value: "france",
    },
    {
      icon: (
        <Image src={thailandFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "Thailand",
      value: "thailand",
    },
    {
      icon: (
        <Image src={indiaFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "India",
      value: "india",
    },
    {
      icon: (
        <Image src={japanFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "Japan",
      value: "japan",
    },
    {
      icon: (
        <Image src={italyFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "Italy",
      value: "italy",
    },
    {
      icon: (
        <Image src={spainFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "Spain",
      value: "spain",
    },
    {
      icon: (
        <Image src={brazilFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "Brazil",
      value: "brazil",
    },
    {
      icon: (
        <Image src={romaniaFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "Romania",
      value: "romania",
    },
    {
      icon: (
        <Image src={austriaFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "Austria",
      value: "austria",
    },
    {
      icon: (
        <Image src={hongkongFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "Hong Kong",
      value: "hong-kong",
    },
    {
      icon: (
        <Image src={polandFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "Poland",
      value: "poland",
    },
    {
      icon: (
        <Image src={singaporeFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "Singapore",
      value: "singapore",
    },
    {
      icon: (
        <Image src={australiaFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "Australia",
      value: "australia",
    },
    {
      icon: (
        <Image src={norwayFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "Norway",
      value: "norway",
    },
    {
      icon: (
        <Image src={latviaFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "Latvia",
      value: "latvia",
    },
    {
      icon: (
        <Image src={ukraineFlagImg} alt="" className="w-[24px] sm:w-[27px]" />
      ),
      title: "Ukraine",
      value: "ukraine",
    },
    {
      icon: (
        <Image
          src={southkoreaFlagImg}
          alt=""
          className="w-[24px] sm:w-[27px]"
        />
      ),
      title: "South Korea",
      value: "south-korea",
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

            <div className="flex items-center gap-3">
              <div className="w-[450px] py-3.5 px-3 sm:px-4 border border-white/20 bg-gradient-to-b from-white/10 to-[#999]/10 rounded-lg hidden lg:flex">
                <div className="ip-range-input-wrapper relative w-full flex">
                  <input
                    value={numberOfIPs}
                    onChange={(e) => setNumberOfIPs(parseInt(e.target.value))}
                    type="range"
                    min="1"
                    max="200"
                    step={1}
                    className="ip-range-input w-full"
                  />

                  <span
                    className="absolute top-1/2 left-0 -translate-y-1/2 h-[6px] bg-[#FF4720] rounded-full pointer-events-none"
                    style={{
                      width: `${(numberOfIPs / 200) * 100}%`,
                    }}
                  ></span>

                  <p
                    className="absolute w-[18px] h-[18px] ring-2 ring-white/10 bg-[#FF4720] rounded-[5px] flex justify-center items-center text-white pointer-events-none"
                    style={{
                      top: "50%",
                      left: `calc(${(numberOfIPs / 200) * 100}% - ${
                        (numberOfIPs / 200) * (18 / 1)
                      }px)`,
                      transform: "translateY(-50%)",
                    }}
                  >
                    +
                  </p>
                </div>
              </div>

              <input
                value={numberOfIPs}
                onChange={(e) => {
                  if (parseInt(e.target.value) > 200) {
                    setNumberOfIPs(200);
                  } else if (parseInt(e.target.value) < 1) {
                    setNumberOfIPs(1);
                  } else if (e.target.value === "") {
                    setNumberOfIPs(1);
                  } else {
                    setNumberOfIPs(parseInt(e.target.value));
                  }
                }}
                type="text"
                className="w-[70px] py-1.5 px-3 sm:px-4 border border-dashed border-white/25 bg-gradient-to-b from-white/10 to-[#999]/10 rounded-lg text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-white duration-200"
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
