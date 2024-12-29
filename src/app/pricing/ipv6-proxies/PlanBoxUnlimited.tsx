"use client";
import { useState } from "react";
import Select, { IOption } from "@/components/ui/Select";
import PlanBoxDuration from "./PlanBoxUnlimitedDuration";
import Link from "next/link";

export default function PlanBoxUnlimited() {
  const [
    numberOfProxiesSelectedOptionIndex,
    setNumberOfProxiesSelectedOptionIndex,
  ] = useState<number>(0);
  const [selectedDurationIndex, setSelectedDurationIndex] = useState<number>(0);

  const numberofProxies: IOption[] = [
    {
      title: "30 MBps",
      value: "30",
    },
    {
      title: "60 MBps",
      value: "60",
    },
    {
      title: "120 MBps",
      value: "120",
    },
    {
      title: "200 MBps",
      value: "200",
    },
  ];

  return (
    <div className="flex-1 p-5 border border-white/10 bg-white/5 rounded-xl flex flex-col justify-between">
      <div>
        <h3 className="mb-5 text-lg sm:text-[24px] font-semibold tracking-[-0.54px] sm:tracking-[-0.84px] text-white">
          Select your plan
        </h3>

        <div className="border-b border-dashed border-white/15">
          <div className="py-3.5 border-t border-dashed border-white/15 flex justify-between items-center gap-3.5">
            <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-white/75">
              Select Throughput
            </p>

            <Select
              dropdownBgColor="#3f274e"
              options={numberofProxies}
              selectedOptionIndex={numberOfProxiesSelectedOptionIndex}
              setSelectedOptionIndex={setNumberOfProxiesSelectedOptionIndex}
            />
          </div>

          <PlanBoxDuration
            selectedDurationIndex={selectedDurationIndex}
            setSelectedDurationIndex={setSelectedDurationIndex}
          />
        </div>
      </div>

      <div className="mt-5 flex justify-between items-center">
        <h4 className="text-lg sm:text-[24px] font-semibold tracking-[-0.54px] sm:tracking-[-0.84px] text-white">
          {/* 30 MBps */}
          {selectedDurationIndex === 0 &&
            numberOfProxiesSelectedOptionIndex === 0 &&
            "10$"}
          {selectedDurationIndex === 1 &&
            numberOfProxiesSelectedOptionIndex === 0 &&
            "45$"}
          {selectedDurationIndex === 2 &&
            numberOfProxiesSelectedOptionIndex === 0 &&
            "110$"}
          {/* 50 MBps */}
          {selectedDurationIndex === 0 &&
            numberOfProxiesSelectedOptionIndex === 1 &&
            "15$"}
          {selectedDurationIndex === 1 &&
            numberOfProxiesSelectedOptionIndex === 1 &&
            "60$"}
          {selectedDurationIndex === 2 &&
            numberOfProxiesSelectedOptionIndex === 1 &&
            "150$"}
          {/* 120 MBps */}
          {selectedDurationIndex === 0 &&
            numberOfProxiesSelectedOptionIndex === 2 &&
            "20$"}
          {selectedDurationIndex === 1 &&
            numberOfProxiesSelectedOptionIndex === 2 &&
            "90$"}
          {selectedDurationIndex === 2 &&
            numberOfProxiesSelectedOptionIndex === 2 &&
            "250$"}
          {/* 200 MBps */}
          {selectedDurationIndex === 0 &&
            numberOfProxiesSelectedOptionIndex === 3 &&
            "25$"}
          {selectedDurationIndex === 1 &&
            numberOfProxiesSelectedOptionIndex === 3 &&
            "120$"}
          {selectedDurationIndex === 2 &&
            numberOfProxiesSelectedOptionIndex === 3 &&
            "350$"}
          &nbsp;
          <span className="text-xs sm:text-sm font-normal tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75">
            / one-time
          </span>
        </h4>

        <Link href={`${process.env.NEXT_PUBLIC_AUTH_URL}/signup`}>
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
        </Link>
      </div>
    </div>
  );
}
