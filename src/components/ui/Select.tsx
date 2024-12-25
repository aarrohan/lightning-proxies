"use client";
import { useState, useEffect, useRef } from "react";

export interface IOption {
  icon?: JSX.Element;
  title: string;
  value: string;
}

interface IProps {
  customClasses?: string;
  options: IOption[];
  selectedOptionIndex: number;
  setSelectedOptionIndex: (value: number) => void;
  dropdownBgColor?: string;
}

export default function Select({
  customClasses,
  options,
  selectedOptionIndex,
  setSelectedOptionIndex,
  dropdownBgColor,
}: IProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative z-10">
      <div
        onClick={() => setIsOpen(true)}
        className={`active:scale-95 min-w-[175px] sm:min-w-[272px] py-[8px] px-2.5 sm:px-5 border border-white/15 bg-white/5 rounded-[9px] flex justify-between items-center gap-6 sm:gap-16 duration-200 cursor-pointer ${customClasses}`}
      >
        <div className="flex items-center gap-2.5">
          {options[selectedOptionIndex].icon &&
            options[selectedOptionIndex].icon}
          <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            {options[selectedOptionIndex].title}
          </p>
        </div>

        <svg
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${isOpen ? "rotate-180" : ""} duration-200`}
        >
          <path
            d="M0.75 1.25024L4.5 4.75024L8 1.25024"
            stroke="white"
            strokeWidth="1.25"
          />
        </svg>
      </div>

      <div
        ref={ref}
        className={`hide-scrollbar ${
          !isOpen ? "scale-75 opacity-0 pointer-events-none" : ""
        } absolute z-20 top-[calc(100%+10px)] left-0 origin-center w-full max-h-[250px] border border-white/15 ${
          dropdownBgColor ? "" : "bg-white/5 backdrop-blur-3xl"
        } rounded-[9px] duration-200 overflow-auto`}
        style={{ backgroundColor: dropdownBgColor }}
      >
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedOptionIndex(index);

              setIsOpen(false);
            }}
            className={`py-2 sm:py-3 px-3 sm:px-4 ${
              options.length - 1 !== index ? "border-b border-white/10" : ""
            } hover:bg-primary/15 duration-200 cursor-pointer`}
          >
            <div className="flex items-center gap-2.5">
              {option.icon}
              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
                {option.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
