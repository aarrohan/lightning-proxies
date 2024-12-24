"use client";
import { useEffect, useState } from "react";
import Select, { IOption } from "@/components/ui/Select";
import AddonsBox from "./AddonsBox";
import Link from "next/link";

export default function PlanBox() {
  const [
    numberOfProxiesSelectedOptionIndex,
    setNumberOfProxiesSelectedOptionIndex,
  ] = useState<number>(0);
  const [selectedBandwidthIndex, setSelectedBandwidthIndex] =
    useState<number>(0);
  const [selectedDurationIndex, setSelectedDurationIndex] = useState<number>(2);

  const [selectedAddonsIndexes, setSelectedAddonsIndexes] = useState<number[]>(
    []
  );

  const [totalPrice, setTotalPrice] = useState<number>(2);
  const [totalPriceWithAddons, setTotalPriceWithAddons] = useState<number>(0);

  const dailyNumberofProxies: IOption[] = [
    {
      title: "1000 Proxies",
      value: "1000",
    },
    {
      title: "2500 Proxies",
      value: "2500",
    },
    {
      title: "5000 Proxies",
      value: "5000",
    },
    {
      title: "7500 Proxies",
      value: "7500",
    },
    {
      title: "10000 Proxies",
      value: "10000",
    },
    {
      title: "15000 Proxies",
      value: "15000",
    },
  ];

  const weeklyNumberofProxies: IOption[] = [
    {
      title: "250 Proxies",
      value: "250",
    },
    {
      title: "500 Proxies",
      value: "500",
    },
    {
      title: "1000 Proxies",
      value: "1000",
    },
    {
      title: "2500 Proxies",
      value: "2500",
    },
    {
      title: "5000 Proxies",
      value: "5000",
    },
    {
      title: "7500 Proxies",
      value: "7500",
    },
    {
      title: "10000 Proxies",
      value: "10000",
    },
    {
      title: "15000 Proxies",
      value: "15000",
    },
  ];

  const monthlyNumberofProxies: IOption[] = [
    {
      title: "100 Proxies",
      value: "100",
    },
    {
      title: "250 Proxies",
      value: "250",
    },
    {
      title: "500 Proxies",
      value: "500",
    },
    {
      title: "1000 Proxies",
      value: "1000",
    },
    {
      title: "2500 Proxies",
      value: "2500",
    },
    {
      title: "5000 Proxies",
      value: "5000",
    },
    {
      title: "7500 Proxies",
      value: "7500",
    },
    {
      title: "10000 Proxies",
      value: "10000",
    },
    {
      title: "15000 Proxies",
      value: "15000",
    },
  ];

  const bandwidths: string[] = ["250 GB", "1000 GB", "5000 GB", "Unlimited GB"];

  const durations: string[] = ["Daily", "Weekly", "Monthly"];

  useEffect(() => {
    // Daily
    if (selectedDurationIndex === 0) {
      const dailyPrices = [
        [1.14, 1.54, 2.0, 2.86],
        [2.29, 3.09, 4.0, 5.71],
        [4.57, 6.17, 8.0, 11.43],
        [5.71, 7.71, 10.0, 14.29],
        [6.86, 9.26, 12.0, 17.14],
        [11.43, 15.43, 20.0, 28.57],
      ];

      setTotalPrice(
        dailyPrices[numberOfProxiesSelectedOptionIndex][selectedBandwidthIndex]
      );
    }

    // Weekly
    if (selectedDurationIndex === 1) {
      const weeklyPrices = [
        [1.67, 2.25, 2.92, 0],
        [3.33, 4.5, 5.83, 0],
        [6.67, 9.0, 11.67, 16.67],
        [13.33, 18.0, 23.33, 33.33],
        [26.67, 36.0, 46.67, 66.67],
        [33.33, 45.0, 58.33, 83.33],
        [40.0, 54.0, 70.0, 100.0],
        [66.67, 90.0, 116.67, 166.67],
      ];

      setTotalPrice(
        weeklyPrices[numberOfProxiesSelectedOptionIndex][selectedBandwidthIndex]
      );
    }

    // Monthly
    if (selectedDurationIndex === 2) {
      const monthlyPrices = [
        [2.0, 2.7, 3.5, 0],
        [5.0, 6.75, 8.75, 0],
        [10.0, 13.5, 17.5, 0],
        [20.0, 27.0, 35.0, 50.0],
        [40.0, 54.0, 70.0, 100.0],
        [80.0, 108.0, 140.0, 200.0],
        [100.0, 135.0, 175.0, 250.0],
        [120.0, 162.0, 210.0, 300.0],
        [200.0, 270.0, 350.0, 500.0],
      ];

      setTotalPrice(
        monthlyPrices[numberOfProxiesSelectedOptionIndex][
          selectedBandwidthIndex
        ]
      );
    }

    // Addons
    if (selectedAddonsIndexes.length > 0) {
      const addonsPrice = selectedAddonsIndexes.length * 0.25 * totalPrice;
      setTotalPriceWithAddons(totalPrice + addonsPrice);
    }
  }, [
    numberOfProxiesSelectedOptionIndex,
    selectedBandwidthIndex,
    selectedDurationIndex,
    selectedAddonsIndexes,
  ]);

  return (
    <>
      <div className="flex-1 p-5 border border-white/10 bg-white/5 rounded-xl flex flex-col justify-between">
        <div>
          <h3 className="mb-5 text-lg sm:text-[24px] font-semibold tracking-[-0.54px] sm:tracking-[-0.84px] text-white">
            Select your plan
          </h3>

          <div className="border-b border-dashed border-white/15">
            <div className="py-3.5 border-t border-dashed border-white/15 flex flex-col sm:flex-row justify-between sm:items-center gap-3.5">
              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-white/75">
                Duration
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-3">
                {durations.map((duration, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setNumberOfProxiesSelectedOptionIndex(0);
                        setSelectedDurationIndex(index);
                      }}
                      className={`py-1 px-3 sm:px-4 border ${
                        selectedDurationIndex === index
                          ? "border-[#16D857]"
                          : "border-transparent"
                      } bg-gradient-to-b from-white/10 to-[#999]/10 rounded-lg text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px] text-white duration-200`}
                    >
                      {duration}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="py-3.5 border-t border-dashed border-white/15 flex justify-between items-center gap-3.5">
              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-white/75">
                Select Proxy Number
              </p>

              {durations[selectedDurationIndex] === "Daily" ? (
                <Select
                  options={dailyNumberofProxies}
                  selectedOptionIndex={numberOfProxiesSelectedOptionIndex}
                  setSelectedOptionIndex={setNumberOfProxiesSelectedOptionIndex}
                  dropdownBgColor="#2d5743"
                />
              ) : durations[selectedDurationIndex] === "Weekly" ? (
                <Select
                  options={weeklyNumberofProxies}
                  selectedOptionIndex={numberOfProxiesSelectedOptionIndex}
                  setSelectedOptionIndex={setNumberOfProxiesSelectedOptionIndex}
                  dropdownBgColor="#2d5743"
                />
              ) : (
                <Select
                  options={monthlyNumberofProxies}
                  selectedOptionIndex={numberOfProxiesSelectedOptionIndex}
                  setSelectedOptionIndex={setNumberOfProxiesSelectedOptionIndex}
                  dropdownBgColor="#2d5743"
                />
              )}
            </div>

            <div className="py-3.5 border-t border-dashed border-white/15 flex flex-col sm:flex-row justify-between sm:items-center gap-3.5">
              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-white/75">
                Bandwidth
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-3">
                {bandwidths.map((duration, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedBandwidthIndex(index)}
                      className={`py-1 px-3 sm:px-4 border ${
                        selectedBandwidthIndex === index
                          ? "border-[#16D857]"
                          : "border-transparent"
                      } bg-gradient-to-b from-white/10 to-[#999]/10 rounded-lg text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px] text-white duration-200`}
                    >
                      {duration}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-between items-center">
          <h4 className="text-lg sm:text-[24px] font-semibold tracking-[-0.54px] sm:tracking-[-0.84px] text-white">
            {totalPrice > 0 ? (
              <>
                $
                {selectedAddonsIndexes.length > 0
                  ? totalPriceWithAddons.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  : totalPrice.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                <span className="text-xs sm:text-sm font-normal tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75">
                  /{" "}
                  {selectedDurationIndex === 0
                    ? "daily"
                    : selectedDurationIndex === 1
                    ? "weekly"
                    : "monthly"}
                </span>
              </>
            ) : (
              "Not Available"
            )}
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

      <AddonsBox
        totalPrice={totalPrice}
        selectedAddonsIndexes={selectedAddonsIndexes}
        setSelectedAddonsIndexes={setSelectedAddonsIndexes}
      />
    </>
  );
}
