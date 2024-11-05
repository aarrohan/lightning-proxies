"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import PrimaryBtn from "../ui/PrimaryBtn";

export default function CookiePopup() {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 2000);
  }, []);

  return (
    <div
      className={`fixed z-50 bottom-5 left-0 px-5 origin-bottom-left ${
        !isActive ? "scale-95 opacity-0 pointer-events-none" : ""
      } duration-300`}
    >
      <div className="w-full max-w-[350px] p-5 sm:p-6 border border-dark-white bg-white rounded-xl">
        <div className="mb-3 flex items-center gap-2">
          {/* <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.04343 17C12.7294 17 15.7979 14.3703 16.4562 10.8939C16.6497 9.87252 16.1948 9.92645 15.2326 9.75785C14.5497 9.6383 13.9123 9.17502 13.675 8.441C13.5133 7.9412 13.4532 7.92106 12.9264 7.89915C11.8396 7.85396 10.9688 6.70167 11.4024 5.76951C11.5643 5.42177 11.559 5.38169 11.2559 5.14586C10.7254 4.73322 10.478 3.96245 10.5734 3.21953C10.676 2.41932 10.736 2.13102 9.88905 2.04091C5.59243 1.58375 1.5 5.0147 1.5 9.4961C1.5 13.6404 4.87731 17 9.04343 17Z"
              stroke="#1675FF"
              strokeWidth="1.25"
            />
            <path
              d="M8.25652 9.5H8.24902"
              stroke="#1675FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.50663 8H4.49915"
              stroke="#1675FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.00652 14H8.99902"
              stroke="#1675FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.5 5L6.75 5.75"
              stroke="#1675FF"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.75 11L12 11.75"
              stroke="#1675FF"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.25 11.75L6 12.5"
              stroke="#1675FF"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}

          <p className="text-sm sm:text-base font-semibold -tracking-[-0.3px] sm:-tracking-[-0.32px]">
            Cookie Settings
          </p>
        </div>

        <p className="text-xs sm:text-sm -tracking-[-0.12px] sm:-tracking-[-0.14px] text-primary/80">
          We use cookies to enhance your browsing experience, analyze site
          traffic and deliver personalized content. For more information, please
          read our{" "}
          <Link href={"/"} className="font-medium text-accent">
            Cookie Policy.
          </Link>
        </p>

        <div className="mt-7 grid grid-cols-2 items-center gap-2.5">
          <button
            onClick={() => setIsActive(false)}
            className="active:scale-95 w-full py-[7px] px-4 border-2 border-dark-white rounded-[9px] text-sm font-medium tracking-[-0.14px] duration-200"
          >
            Reject
          </button>

          <PrimaryBtn handleClick={() => setIsActive(false)}>Accept</PrimaryBtn>
        </div>
      </div>
    </div>
  );
}
