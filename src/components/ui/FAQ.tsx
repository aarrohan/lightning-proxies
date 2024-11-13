"use client";
import { useRef, useState } from "react";

export interface IProps {
  color?: string;
  question: string;
  answer: string;
}

export default function FAQ({ color, question, answer }: IProps) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className="py-4 sm:py-6 px-5 sm:px-8 border border-dark-white bg-off-white rounded-lg cursor-pointer"
    >
      <div className="flex justify-between items-center gap-4">
        <p className="text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px]">
          {question}
        </p>

        <button>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              isActive ? "rotate-45" : ""
            } w-[12px] sm:w-[16px] h-auto duration-200`}
          >
            <path
              d="M8 0L8 16M16 8L0 8"
              stroke={color ?? "#1675FF"}
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>

      <div
        ref={contentRef}
        className={`${
          isActive ? "pt-[15px]" : ""
        } duration-300 overflow-hidden`}
        style={{
          maxHeight: isActive
            ? `${
                contentRef.current?.scrollHeight
                  ? contentRef.current?.scrollHeight + 15
                  : "0"
              }px`
            : "0px",
        }}
      >
        <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/75">
          {answer}
        </p>
      </div>
    </div>
  );
}
