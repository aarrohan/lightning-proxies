"use client";
import { useState } from "react";
import Link from "next/link";
import IncludedBox from "./IncludedBox";
import PaymentMethodsBox from "./PaymentMethodsBox";
import ExtraDataBox from "./ExtraDataBox";
import PointsBox from "./PointsBox";
import TabNavs from "./TabNavs";
import CountryBox from "./CountryBox";
import PlanBox from "./PlanBox";
import PlanBoxUnlimited from "./PlanBoxUnlimited";

export default function PricingPart() {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  return (
    <>
      <TabNavs
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
      />

      <div className="w-full grid lg:grid-cols-[350px_auto] gap-3">
        <div className="order-2 lg:order-1">
          <IncludedBox />
        </div>

        <div className="order-1 lg:order-2 flex flex-col gap-3">
          {activeTabIndex === 0 && <PlanBox />}
          {activeTabIndex === 1 && <PlanBoxUnlimited />}
          {activeTabIndex === 1 && <CountryBox isUnlimited={true} />}
        </div>
      </div>

      {activeTabIndex === 0 && <CountryBox />}

      <div className="my-4 sm:my-8 w-full sm:pt-8 sm:border-t border-dashed border-white/15 grid lg:grid-cols-2 gap-4">
        <ExtraDataBox />
        <PaymentMethodsBox />
      </div>

      <PointsBox />

      <Link
        href={`${process.env.NEXT_PUBLIC_AUTH_URL}/signup`}
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
    </>
  );
}
