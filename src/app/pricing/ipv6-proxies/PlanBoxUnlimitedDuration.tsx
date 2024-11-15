"use client";
import { useState } from "react";

export default function PlanBoxUnlimitedDuration() {
  const [selectedDurationIndex, setSelectedDurationIndex] = useState<number>(0);

  const durations: string[] = ["1 Day", "7 Days", "30 Days"];

  return (
    <div className="py-3.5 border-t border-dashed border-white/15 flex flex-col sm:flex-row justify-between sm:items-center gap-3.5">
      <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-white/75">
        Duration
      </p>

      <div className="flex flex-wrap gap-1.5 sm:gap-3">
        {durations.map((duration, index) => {
          return (
            <button
              key={index}
              onClick={() => setSelectedDurationIndex(index)}
              className={`py-1 px-3 sm:px-4 border ${
                selectedDurationIndex === index
                  ? "border-[#A400DD]"
                  : "border-transparent"
              } bg-gradient-to-b from-white/10 to-[#999]/10 rounded-lg text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px] text-white duration-200`}
            >
              {duration}
            </button>
          );
        })}
      </div>
    </div>
  );
}
