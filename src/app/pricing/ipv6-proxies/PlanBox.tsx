"use client";
import Link from "next/link";

interface IPlanBox {
  isMostValue?: boolean;
  title: string;
  price: string;
}

export default function PlanBox() {
  const plans: IPlanBox[] = [
    {
      title: "100 GB",
      price: "$20",
    },
    {
      title: "250 GB",
      price: "$40",
    },
    {
      title: "500 GB",
      price: "$70",
    },
    {
      title: "1000 GB",
      price: "$110",
    },
    {
      isMostValue: true,
      title: "3000 GB",
      price: "$250",
    },
    {
      title: "5000 GB",
      price: "$350",
    },
    {
      title: "10000 GB",
      price: "$550",
    },
  ];

  return (
    <div className="flex-1 p-5 pb-1.5 border border-white/10 bg-white/5 rounded-xl flex flex-col justify-between">
      <div>
        <h3 className="mb-5 text-lg sm:text-[24px] font-semibold tracking-[-0.54px] sm:tracking-[-0.84px] text-white">
          Select your plan
        </h3>

        <div>
          {plans.map((plan, index) => {
            return (
              <div
                key={index}
                className="py-3.5 border-t border-dashed border-white/15 flex justify-between items-center gap-3.5"
              >
                <div className="flex items-center gap-3">
                  <p
                    className={`py-1 px-4 sm:px-5 ${
                      plan.isMostValue ? "border border-[#A400DD]" : ""
                    } bg-gradient-to-b from-white/10 to-[#999]/10 rounded-lg text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px] text-white`}
                  >
                    {plan.title}
                  </p>

                  {plan.isMostValue && (
                    <p className="py-1 px-3.5 sm:px-5 border border-green bg-green/10 rounded-full hidden lg:block text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-white">
                      Most Value
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 sm:gap-5">
                  <h4 className="text-base sm:text-[24px] font-semibold tracking-[-0.44px] sm:tracking-[-0.84px] text-white">
                    {plan.price}{" "}
                    <span className="text-xs sm:text-sm font-normal tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75">
                      / mo
                    </span>
                  </h4>

                  <Link href={`${process.env.NEXT_PUBLIC_AUTH_URL}/signup`}>
                    <button className="group active:scale-95 py-[8px] px-4 sm:px-8 border border-white/15 bg-white/5 hover:bg-white rounded-[9px] flex justify-center items-center gap-3 text-sm font-medium tracking-[-0.14px] text-white hover:text-primary duration-200">
                      Purchase{" "}
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
          })}
        </div>
      </div>
    </div>
  );
}
