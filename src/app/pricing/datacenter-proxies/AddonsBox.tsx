interface IProps {
  totalPrice: number;
  selectedAddonsIndexes: number[];
  setSelectedAddonsIndexes: (value: number[]) => void;
}

interface IAddonBox {
  index: number;
  totalPrice?: number;
  selectedAddonsIndexes?: number[];
  setSelectedAddonsIndexes?: (value: number[]) => void;
  icon: JSX.Element;
  title: string;
  description: string;
}

function AddonBox({
  index,
  totalPrice,
  selectedAddonsIndexes,
  setSelectedAddonsIndexes,
  icon,
  title,
  description,
}: IAddonBox) {
  return (
    <div className="addon-box">
      <div className="mb-4 flex justify-between items-center">
        <div className="w-[36px] sm:w-[44px] aspect-square border border-[#00C153]/25 bg-[#00C153]/10 rounded-full flex justify-center items-center">
          {icon}
        </div>

        <p className="py-[2px] px-3 border border-[#16D857] rounded-full text-xs sm:text-sm font-medium tracking-[-0.14px] text-[#16D857]">
          {totalPrice && totalPrice > 0
            ? `$${(totalPrice * 0.25).toFixed(2)}`
            : "Not available"}
        </p>
      </div>

      <div className="mb-4 flex justify-between items-center">
        <h3 className="text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
          {title}
        </h3>

        <button
          onClick={() => {
            if (selectedAddonsIndexes && setSelectedAddonsIndexes) {
              if (selectedAddonsIndexes.includes(index)) {
                setSelectedAddonsIndexes(
                  selectedAddonsIndexes.filter((i) => i !== index)
                );
              } else {
                setSelectedAddonsIndexes([...selectedAddonsIndexes, index]);
              }
            }
          }}
          className={`active:scale-95 py-[2px] px-2 border ${
            selectedAddonsIndexes && selectedAddonsIndexes.includes(index)
              ? "border-[#16D857]"
              : "border-transparent"
          } bg-gradient-to-b from-white/10 to-[#999]/10 rounded-full flex items-center gap-1 text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-[#16D857] duration-200`}
        >
          {selectedAddonsIndexes && selectedAddonsIndexes.includes(index) ? (
            <>
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[14px] h-auto"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Added
            </>
          ) : (
            "+Add"
          )}
        </button>
      </div>

      <p className="text-xs sm:text-sm leading-[20px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75">
        {description}
      </p>
    </div>
  );
}

export default function AddonsBox({
  totalPrice,
  selectedAddonsIndexes,
  setSelectedAddonsIndexes,
}: IProps) {
  const addons: IAddonBox[] = [
    {
      index: 0,
      icon: (
        <svg
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] sm:w-[26px] h-auto"
        >
          <path
            d="M14.1791 13.5199L17.8191 9.35986M14.6991 15.5999C14.6991 16.7486 13.7678 17.6799 12.6191 17.6799C11.4703 17.6799 10.5391 16.7486 10.5391 15.5999C10.5391 14.4511 11.4703 13.5199 12.6191 13.5199C13.7678 13.5199 14.6991 14.4511 14.6991 15.5999Z"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6.37891 12.4802C6.37891 9.03398 9.17265 6.24023 12.6189 6.24023C13.7555 6.24023 14.8211 6.5441 15.7389 7.07503"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M2.73828 12.4801C2.73828 7.82262 2.73828 5.49389 4.18517 4.04699C5.63207 2.6001 7.96081 2.6001 12.6183 2.6001C17.2758 2.6001 19.6045 2.6001 21.0514 4.04699C22.4983 5.49389 22.4983 7.82262 22.4983 12.4801C22.4983 17.1376 22.4983 19.4663 21.0514 20.9132C19.6045 22.3601 17.2758 22.3601 12.6183 22.3601C7.96081 22.3601 5.63207 22.3601 4.18517 20.9132C2.73828 19.4663 2.73828 17.1376 2.73828 12.4801Z"
            stroke="#00C153"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "High Concurrency",
      description:
        "By default, concurrency is capped at 1000. This increases it to 2500.",
    },
    {
      index: 1,
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] sm:w-[26px] h-auto"
        >
          <path
            d="M20.8016 13.5198V8.31982H15.6016"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.8002 8.31982L15.6002 13.5198C14.6823 14.4377 14.2234 14.8966 13.6601 14.9473C13.567 14.9558 13.4734 14.9558 13.3802 14.9473C12.8169 14.8966 12.3581 14.4377 11.4402 13.5198C10.5223 12.6019 10.0634 12.1431 9.50011 12.0923C9.407 12.0839 9.31331 12.0839 9.2202 12.0923C8.65696 12.1431 8.19802 12.6019 7.28016 13.5198L4.16016 16.6398"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "High Priority Network",
      description:
        "Perfect for latency - sensitive applications, sets high priority.",
    },
    {
      index: 2,
      icon: (
        <svg
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] sm:w-[26px] h-auto"
        >
          <path
            d="M12.3418 5.24023H19.6218"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.2988 10.4399L15.9788 15.1199"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.09961 11.48V18.76"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.60073 11.3646C10.1535 11.3646 12.223 9.29512 12.223 6.74233C12.223 4.18955 10.1535 2.12012 7.60073 2.12012C5.04795 2.12012 2.97852 4.18955 2.97852 6.74233C2.97852 9.29512 5.04795 11.3646 7.60073 11.3646Z"
            stroke="#00C153"
            strokeWidth="1.5"
          />
          <path
            d="M6.10148 22.9198C7.25024 22.9198 8.18148 21.9885 8.18148 20.8398C8.18148 19.691 7.25024 18.7598 6.10148 18.7598C4.95273 18.7598 4.02148 19.691 4.02148 20.8398C4.02148 21.9885 4.95273 22.9198 6.10148 22.9198Z"
            stroke="#00C153"
            strokeWidth="1.5"
          />
          <path
            d="M17.539 18.7601C18.6877 18.7601 19.619 17.8288 19.619 16.6801C19.619 15.5313 18.6877 14.6001 17.539 14.6001C16.3902 14.6001 15.459 15.5313 15.459 16.6801C15.459 17.8288 16.3902 18.7601 17.539 18.7601Z"
            stroke="#00C153"
            strokeWidth="1.5"
          />
          <path
            d="M21.6991 7.32016C22.8479 7.32016 23.7791 6.38891 23.7791 5.24016C23.7791 4.0914 22.8479 3.16016 21.6991 3.16016C20.5504 3.16016 19.6191 4.0914 19.6191 5.24016C19.6191 6.38891 20.5504 7.32016 21.6991 7.32016Z"
            stroke="#00C153"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "3 IP Connections",
      description: "Enable up to 3 IP addresses to connect simulataneously.",
    },
  ];

  return (
    <div className="addon-boxes-wrapper p-5 border border-white/10 bg-white/5 rounded-xl grid sm:grid-cols-3">
      {addons.map((addon, index) => (
        <AddonBox
          key={index}
          totalPrice={totalPrice}
          selectedAddonsIndexes={selectedAddonsIndexes}
          setSelectedAddonsIndexes={setSelectedAddonsIndexes}
          {...addon}
        />
      ))}
    </div>
  );
}
