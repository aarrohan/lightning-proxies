import SecondaryBtn from "@/components/ui/SecondaryBtn";
import Link from "next/link";

export default function ExtraDataBox() {
  return (
    <div className="p-4 border border-white/10 rounded-xl flex flex-col sm:flex-row justify-between sm:items-center gap-5">
      <div className="flex items-center gap-3">
        <div className="w-[38px] sm:w-[44px] aspect-square border border-white/25 bg-white/10 rounded-full flex justify-center items-center">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[22px] sm:w-[26px] h-auto"
          >
            <path
              d="M12.9987 8.6665C17.7852 8.6665 21.6654 7.21143 21.6654 5.4165C21.6654 3.62158 17.7852 2.1665 12.9987 2.1665C8.21223 2.1665 4.33203 3.62158 4.33203 5.4165C4.33203 7.21143 8.21223 8.6665 12.9987 8.6665Z"
              stroke="white"
            />
            <path
              d="M7.58203 11.7454C8.23374 11.9413 8.96257 12.1026 9.7487 12.222"
              stroke="white"
              strokeLinecap="round"
            />
            <path
              d="M21.6654 13C21.6654 14.795 17.7852 16.25 12.9987 16.25C8.21223 16.25 4.33203 14.795 4.33203 13"
              stroke="white"
            />
            <path
              d="M7.58203 19.3289C8.23374 19.5248 8.96257 19.6861 9.7487 19.8055"
              stroke="white"
              strokeLinecap="round"
            />
            <path
              d="M21.6654 5.4165V20.5832C21.6654 22.3781 17.7852 23.8332 12.9987 23.8332C8.21223 23.8332 4.33203 22.3781 4.33203 20.5832V5.4165"
              stroke="white"
            />
          </svg>
        </div>

        <div>
          <p className="mb-[2px] text-xs sm:text-sm font-medium tracking-[-0.14px] text-white/75">
            Require extra data
          </p>

          <p className="text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Contact our team for custom plans
          </p>
        </div>
      </div>

      <div>
        <Link href={"mailto:support@lightningproxies.net"}>
          <SecondaryBtn customClasses="text-primary">
            Contact Us{" "}
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.96967 1.53033C0.676777 1.23744 0.676777 0.762563 0.96967 0.46967C1.26256 0.176777 1.73744 0.176777 2.03033 0.46967L6.03033 4.46967C6.32322 4.76256 6.32322 5.23744 6.03033 5.53033L2.03033 9.53033C1.73744 9.82322 1.26256 9.82322 0.96967 9.53033C0.676777 9.23744 0.676777 8.76256 0.96967 8.46967L3.68934 5.75L4.25 5L3.68934 4.25L0.96967 1.53033Z"
                fill="#121118"
              />
            </svg>
          </SecondaryBtn>
        </Link>
      </div>
    </div>
  );
}
