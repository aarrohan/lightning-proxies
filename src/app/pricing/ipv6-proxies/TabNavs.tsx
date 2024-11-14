interface IProps {
  activeTabIndex: number;
  setActiveTabIndex: (index: number) => void;
}

export default function TabNavs({ activeTabIndex, setActiveTabIndex }: IProps) {
  return (
    <div className="mb-8 p-1.5 sm:p-2 bg-white/5 rounded-xl flex gap-1">
      <button
        onClick={() => setActiveTabIndex(0)}
        className={`py-2 px-6 ${
          activeTabIndex === 0
            ? "bg-gradient-to-b from-[#A400DD] to-[#700097]"
            : ""
        } rounded-lg flex items-center gap-2 text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px] text-white`}
        style={{
          boxShadow:
            activeTabIndex === 0
              ? "0px -4px 4px 0px rgba(255, 255, 255, 0.25) inset"
              : "",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] sm:w-[20px] h-auto"
        >
          <path
            d="M11.1549 10.7708L13.8529 7.6875M11.5404 12.3125C11.5404 13.164 10.8502 13.8542 9.9987 13.8542C9.14724 13.8542 8.45703 13.164 8.45703 12.3125C8.45703 11.461 9.14724 10.7708 9.9987 10.7708C10.8502 10.7708 11.5404 11.461 11.5404 12.3125Z"
            stroke="white"
            strokeLinecap="round"
          />
          <path
            d="M5.375 10C5.375 7.44568 7.44568 5.375 10 5.375C10.8424 5.375 11.6322 5.60022 12.3125 5.99374"
            stroke="white"
            strokeLinecap="round"
          />
          <path
            d="M2.67578 10.0002C2.67578 6.54811 2.67578 4.82208 3.7482 3.74966C4.82062 2.67725 6.54664 2.67725 9.99873 2.67725C13.4508 2.67725 15.1768 2.67725 16.2492 3.74966C17.3216 4.82208 17.3216 6.54811 17.3216 10.0002C17.3216 13.4522 17.3216 15.1783 16.2492 16.2507C15.1768 17.3231 13.4508 17.3231 9.99873 17.3231C6.54664 17.3231 4.82062 17.3231 3.7482 16.2507C2.67578 15.1783 2.67578 13.4522 2.67578 10.0002Z"
            stroke="white"
          />
        </svg>
        Bandwidth
      </button>

      <button
        onClick={() => setActiveTabIndex(1)}
        className={`py-2 px-6 ${
          activeTabIndex === 1
            ? "bg-gradient-to-b from-[#A400DD] to-[#700097]"
            : ""
        } rounded-lg flex items-center gap-2 text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px] text-white`}
        style={{
          boxShadow:
            activeTabIndex === 1
              ? "0px -4px 4px 0px rgba(255, 255, 255, 0.25) inset"
              : "",
        }}
      >
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] sm:w-[20px] h-auto"
        >
          <path
            d="M9.5 9C9.5 9 7.44607 12.75 5.375 12.75C3.30393 12.75 2 11.071 2 9C2 6.92893 3.30393 5.25 5.375 5.25C7.44607 5.25 9.5 9 9.5 9ZM9.5 9C9.5 9 11.554 12.75 13.625 12.75C15.696 12.75 17 11.071 17 9C17 6.92893 15.696 5.25 13.625 5.25C11.554 5.25 9.5 9 9.5 9Z"
            stroke="white"
          />
        </svg>
        Unlimited
      </button>
    </div>
  );
}
