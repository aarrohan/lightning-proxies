export default function PointsBox() {
  return (
    <div className="mb-10 w-full p-4 sm:p-10 border border-white/10 bg-gradient-to-b from-[#999]/10 to-white/10 rounded-xl flex flex-col lg:flex-row justify-between gap-6">
      <div>
        <h3 className="mb-2 sm:mb-3 text-lg sm:text-[32px] font-semibold sm:leading-[42px] tracking-[-0.16px] sm:tracking-[-0.96px] text-white">
          Get amazing perks with <br /> all our datacenter proxy plans
        </h3>

        <p className="max-w-[424px] text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-white/75">
          * Valid for all residential proxy plans regular or enterprise
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-y-2 sm:gap-y-0 gap-x-14">
        <div className="flex items-center gap-1.5">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px] sm:w-[24px] h-auto"
          >
            <path
              d="M6 13.25L9.75 17L18 8"
              stroke="#00C153"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-white">
            99.9% success rate
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px] sm:w-[24px] h-auto"
          >
            <path
              d="M6 13.25L9.75 17L18 8"
              stroke="#00C153"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-white">
            Static sessions
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px] sm:w-[24px] h-auto"
          >
            <path
              d="M6 13.25L9.75 17L18 8"
              stroke="#00C153"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-white">
            Largest IP pool
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px] sm:w-[24px] h-auto"
          >
            <path
              d="M6 13.25L9.75 17L18 8"
              stroke="#00C153"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-white">
            99.9% uptime
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px] sm:w-[24px] h-auto"
          >
            <path
              d="M6 13.25L9.75 17L18 8"
              stroke="#00C153"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-white">
            Automatic proxy rotation
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px] sm:w-[24px] h-auto"
          >
            <path
              d="M6 13.25L9.75 17L18 8"
              stroke="#00C153"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-white">
            Developer-focused docs
          </p>
        </div>
      </div>
    </div>
  );
}
