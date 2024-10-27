"use client";
import { useState } from "react";
import Image from "next/image";
import dashboard1Img from "@/assets/images/dashboard-1.png";
import dashboard2Img from "@/assets/images/dashboard-2.png";
import dashboard3Img from "@/assets/images/dashboard-3.png";
import dashboard4Img from "@/assets/images/dashboard-4.png";

export default function DashboardSection() {
  const [activeTabIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="pt-44 overflow-hidden">
      <div className="mx-auto container max-w-[1320px]">
        <p className="mb-3 text-sm font-semibold tracking-[-0.14px] uppercase text-center text-accent">
          DASHBOARD
        </p>

        <h2 className="mb-12 text-[42px] font-semibold leading-[46px] tracking-[-0.84px] text-center">
          Easy to use, well structured, and <br /> modern designed dashboard
        </h2>

        <div className="flex flex-col items-center">
          <div className="relative z-10 -mb-[33px] w-fit p-2 border border-dark-white bg-white rounded-xl flex">
            <div
              onClick={() => setActiveIndex(0)}
              className={`py-3 px-4 ${
                activeTabIndex === 0 ? "bg-off-white" : "opacity-75"
              } rounded-lg flex items-center gap-2.5 cursor-pointer duration-200`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.49976 12C9.32818 12 9.99976 11.3284 9.99976 10.5C9.99976 9.67157 9.32818 9 8.49976 9C7.67133 9 6.99976 9.67157 6.99976 10.5C6.99976 11.3284 7.67133 12 8.49976 12Z"
                  strokeWidth="1.5"
                  className={`
                    ${
                      activeTabIndex === 0 ? "stroke-accent" : "stroke-primary"
                    } duration-200
                  `}
                />
                <path
                  d="M14.4998 17C15.3282 17 15.9998 16.3284 15.9998 15.5C15.9998 14.6716 15.3282 14 14.4998 14C13.6713 14 12.9998 14.6716 12.9998 15.5C12.9998 16.3284 13.6713 17 14.4998 17Z"
                  strokeWidth="1.5"
                  className={`
                    ${
                      activeTabIndex === 0 ? "stroke-accent" : "stroke-primary"
                    } duration-200
                  `}
                />
                <path
                  d="M18.5002 9C19.3287 9 20.0002 8.32843 20.0002 7.5C20.0002 6.67157 19.3287 6 18.5002 6C17.6718 6 17.0002 6.67157 17.0002 7.5C17.0002 8.32843 17.6718 9 18.5002 9Z"
                  strokeWidth="1.5"
                  className={`
                    ${
                      activeTabIndex === 0 ? "stroke-accent" : "stroke-primary"
                    } duration-200
                  `}
                />
                <path
                  d="M15.4341 14.2963L18 9M9.58251 11.5684L13.2038 14.2963M3 19L7.58957 11.8792"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`
                    ${
                      activeTabIndex === 0 ? "stroke-accent" : "stroke-primary"
                    } duration-200
                  `}
                />
                <path
                  d="M20.0002 21H9.00024C5.70041 21 4.05049 21 3.02537 19.9749C2.00024 18.9497 2.00024 17.2998 2.00024 14V3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className={`
                    ${
                      activeTabIndex === 0 ? "stroke-accent" : "stroke-primary"
                    } duration-200
                  `}
                />
              </svg>

              <p className="font-medium tracking-[-0.16px]">Analytics</p>
            </div>

            <div
              onClick={() => setActiveIndex(1)}
              className={`py-3 px-4 ${
                activeTabIndex === 1 ? "bg-off-white" : "opacity-75"
              } rounded-lg flex items-center gap-2.5 cursor-pointer duration-200`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0002 12C22.0002 17.5228 17.523 22 12.0002 22C6.47739 22 2.00024 17.5228 2.00024 12C2.00024 6.47715 6.47739 2 12.0002 2C17.523 2 22.0002 6.47715 22.0002 12Z"
                  strokeWidth="1.5"
                  className={`
                    ${
                      activeTabIndex === 1 ? "stroke-accent" : "stroke-primary"
                    } duration-200
                  `}
                />
                <path
                  d="M14.7104 10.0611C14.6113 9.29844 13.7356 8.06622 12.161 8.06619C10.3314 8.06616 9.5616 9.07946 9.40539 9.58611C9.16169 10.2638 9.21043 11.6571 11.3549 11.809C14.0356 11.999 15.1095 12.3154 14.9729 13.956C14.8362 15.5965 13.3419 15.951 12.161 15.9129C10.98 15.875 9.04788 15.3325 8.9729 13.8733M11.9736 6.99805V8.06982M11.9736 15.9031V16.998"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className={`
                    ${
                      activeTabIndex === 1 ? "stroke-accent" : "stroke-primary"
                    } duration-200
                  `}
                />
              </svg>

              <p className="font-medium tracking-[-0.16px]">Balance</p>
            </div>

            <div
              onClick={() => setActiveIndex(2)}
              className={`py-3 px-4 ${
                activeTabIndex === 2 ? "bg-off-white" : "opacity-75"
              } rounded-lg flex items-center gap-2.5 cursor-pointer duration-200`}
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.4998 16C17.1159 16 17.6153 15.4883 17.6153 14.8571V13.6162C17.6153 13.3131 17.7328 13.0224 17.942 12.8081L18.3364 12.4041C18.5543 12.1809 18.5543 11.8191 18.3364 11.5959L17.942 11.1919C17.7328 10.9776 17.6153 10.6869 17.6153 10.3838V9.14286C17.6153 8.51167 17.1159 8 16.4998 8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`
                    ${
                      activeTabIndex === 2 ? "stroke-accent" : "stroke-primary"
                    } duration-200
                  `}
                />
                <path
                  d="M8.5 16C7.88392 16 7.38448 15.4883 7.38448 14.8571V13.6162C7.38448 13.3131 7.26696 13.0224 7.05776 12.8081L6.66336 12.4041C6.44555 12.1809 6.44555 11.8191 6.66336 11.5959L7.05776 11.1919C7.26696 10.9776 7.38448 10.6869 7.38448 10.3838V9.14286C7.38448 8.51167 7.88392 8 8.5 8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`
                    ${
                      activeTabIndex === 2 ? "stroke-accent" : "stroke-primary"
                    } duration-200
                  `}
                />
                <path
                  d="M10.4998 12H10.5087M14.4908 12H14.4997"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`
                    ${
                      activeTabIndex === 2 ? "stroke-accent" : "stroke-primary"
                    } duration-200
                  `}
                />
                <path
                  d="M12.5002 22C18.0231 22 22.5002 17.5228 22.5002 12C22.5002 6.47715 18.0231 2 12.5002 2C6.9774 2 2.50024 6.47715 2.50024 12C2.50024 17.5228 6.9774 22 12.5002 22Z"
                  strokeWidth="1.5"
                  className={`
                    ${
                      activeTabIndex === 2 ? "stroke-accent" : "stroke-primary"
                    } duration-200
                  `}
                />
              </svg>

              <p className="font-medium tracking-[-0.16px]">Purchase</p>
            </div>

            <div
              onClick={() => setActiveIndex(3)}
              className={`py-3 px-4 ${
                activeTabIndex === 3 ? "bg-off-white" : "opacity-75"
              } rounded-lg flex items-center gap-2.5 cursor-pointer duration-200`}
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.4998 14C13.6043 14 14.4998 13.1046 14.4998 12C14.4998 10.8954 13.6043 10 12.4998 10C11.3952 10 10.4998 10.8954 10.4998 12C10.4998 13.1046 11.3952 14 12.4998 14Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className={`
                    ${
                      activeTabIndex === 3 ? "stroke-accent" : "stroke-primary"
                    } duration-200
                  `}
                />
                <path
                  d="M4.50024 18.001C3.24442 16.3295 2.50024 14.2516 2.50024 12C2.50024 6.47715 6.97739 2 12.5002 2C18.023 2 22.5002 6.47715 22.5002 12C22.5002 14.2516 21.756 16.3295 20.5002 18.001"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className={`
                    ${
                      activeTabIndex === 3 ? "stroke-accent" : "stroke-primary"
                    } duration-200
                  `}
                />
                <path
                  d="M8.02779 16C7.07771 14.9385 6.5 13.5367 6.5 12C6.5 8.68629 9.18629 6 12.5 6C15.8137 6 18.5 8.68629 18.5 12C18.5 13.5367 17.9223 14.9385 16.9722 16"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className={`
                    ${
                      activeTabIndex === 3 ? "stroke-accent" : "stroke-primary"
                    } duration-200
                  `}
                />
                <path
                  d="M12.5 14V19"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className={`
                    ${
                      activeTabIndex === 3 ? "stroke-accent" : "stroke-primary"
                    } duration-200
                  `}
                />
                <path
                  d="M13.7625 19H11.2379C10.9669 19 10.8314 19 10.7021 19.0183C10.4403 19.0552 10.192 19.1474 9.97765 19.2873C9.87181 19.3564 9.77599 19.4423 9.58436 19.614C8.95406 20.1791 8.63891 20.4616 8.55596 20.6884C8.38424 21.1577 8.62056 21.6692 9.11222 21.8923C9.34971 22 9.7954 22 10.6867 22H14.3137C15.2051 22 15.6507 22 15.8882 21.8923C16.3799 21.6692 16.6162 21.1577 16.4445 20.6884C16.3615 20.4616 16.0464 20.1791 15.4161 19.614C15.2245 19.4423 15.1286 19.3564 15.0228 19.2873C14.8085 19.1474 14.5602 19.0552 14.2983 19.0183C14.169 19 14.0335 19 13.7625 19Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className={`
                    ${
                      activeTabIndex === 3 ? "stroke-accent" : "stroke-primary"
                    } duration-200
                  `}
                />
              </svg>

              <p className="font-medium tracking-[-0.16px]">Generator</p>
            </div>
          </div>

          <Image
            src={
              activeTabIndex === 0
                ? dashboard1Img
                : activeTabIndex === 1
                ? dashboard2Img
                : activeTabIndex === 2
                ? dashboard3Img
                : dashboard4Img
            }
            alt=""
            className="w-full border-[8px] border-b-0 border-dark-white rounded-t-3xl"
          />
        </div>
      </div>
    </section>
  );
}
