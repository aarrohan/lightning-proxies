import PrimaryBtn from "@/components/ui/PrimaryBtn";

export interface IProps {
  isHighlighted?: boolean;
  isMostValue?: boolean;
  title: string;
  options: {
    title: string;
    value: string;
  }[];
  price: string;
  btn: "primary" | "secondary";
}

export default function PriceBox({
  isHighlighted,
  isMostValue,
  title,
  options,
  price,
  btn,
}: IProps) {
  return (
    <div
      className={`p-5 border ${
        isHighlighted ? "border-accent" : "border-white/10"
      } bg-white/5 rounded-xl flex flex-col justify-between duration-200`}
    >
      <div>
        <div className="mb-5 flex justify-between items-center">
          <h3 className="text-lg sm:text-[24px] font-semibold tracking-[-0.54px] sm:tracking-[-0.84px] text-white">
            {title}
          </h3>

          {isMostValue && (
            <p className="py-1 px-3.5 sm:px-5 border border-green bg-green/10 rounded-full text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-white">
              Most Value
            </p>
          )}
        </div>

        <div className="border-b border-dashed border-white/15">
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className="py-3.5 border-t border-dashed border-white/15 flex justify-between items-center gap-3.5"
              >
                <p className="text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px] text-white/75">
                  {option.title}
                </p>

                <p className="py-1 px-4 sm:px-5 bg-gradient-to-b from-white/10 to-[#999]/10 rounded-lg text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px] text-white">
                  {option.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 flex justify-between items-center">
        <h4 className="text-lg sm:text-[24px] font-semibold tracking-[-0.54px] sm:tracking-[-0.84px] text-white">
          {price}{" "}
          <span className="text-xs sm:text-sm font-normal tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75">
            / monthly
          </span>
        </h4>

        {btn === "primary" ? (
          <PrimaryBtn customClasses="px-6 sm:px-10">
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
                fill="white"
              />
            </svg>
          </PrimaryBtn>
        ) : (
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
        )}
      </div>
    </div>
  );
}
