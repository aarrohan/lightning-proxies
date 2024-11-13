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
            ? "bg-gradient-to-b from-accent to-accent-dark"
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
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] sm:w-[19px] h-auto"
        >
          <path
            d="M9.49935 17.7082C13.7565 17.7082 17.2077 14.257 17.2077 9.99984C17.2077 5.74264 13.7565 2.2915 9.49935 2.2915C5.24215 2.2915 1.79102 5.74264 1.79102 9.99984C1.79102 14.257 5.24215 17.7082 9.49935 17.7082Z"
            stroke="white"
          />
          <path
            d="M6.03125 13.8541C7.8286 11.9716 11.152 11.8829 12.9687 13.8541M11.4233 8.07284C11.4233 9.13713 10.5593 9.99992 9.49345 9.99992C8.42769 9.99992 7.56364 9.13713 7.56364 8.07284C7.56364 7.00854 8.42769 6.14575 9.49345 6.14575C10.5593 6.14575 11.4233 7.00854 11.4233 8.07284Z"
            stroke="white"
            strokeLinecap="round"
          />
        </svg>
        Regular
      </button>

      <button
        onClick={() => setActiveTabIndex(1)}
        className={`py-2 px-6 ${
          activeTabIndex === 1
            ? "bg-gradient-to-b from-accent to-accent-dark"
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
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] sm:w-[19px] h-auto"
        >
          <path
            d="M12.584 8.4585L14.2408 8.95553C15.2993 9.27311 15.8286 9.4319 16.1334 9.84153C16.4382 10.2511 16.4382 10.8038 16.4382 11.9088V17.7085"
            stroke="white"
            strokeLinejoin="round"
          />
          <path
            d="M6.41602 7.6875H8.72852M6.41602 10.7708H8.72852"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.50065 17.7082V15.3957C9.50065 14.6689 9.50065 14.3056 9.27487 14.0798C9.0491 13.854 8.68573 13.854 7.95898 13.854H7.18815C6.4614 13.854 6.09803 13.854 5.87225 14.0798C5.64648 14.3056 5.64648 14.6689 5.64648 15.3957V17.7082"
            stroke="white"
            strokeLinejoin="round"
          />
          <path
            d="M1.79102 17.7085H17.2077"
            stroke="white"
            strokeLinecap="round"
          />
          <path
            d="M2.5625 17.7084V5.92796C2.5625 3.99259 2.5625 3.0249 3.17237 2.54477C3.78224 2.06464 4.6803 2.32532 6.47642 2.84667L10.3306 3.9654C11.4144 4.28001 11.9564 4.43732 12.2698 4.86606C12.5833 5.29482 12.5833 5.87878 12.5833 7.04669V17.7084"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Enterprise
      </button>
    </div>
  );
}
