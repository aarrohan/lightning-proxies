"use client";
import { useEffect, useState } from "react";

interface IColorPart {
  colors: string[];
}

function ColorPart({ colors }: IColorPart) {
  const [copiedColorIndex, setCopiedColorIndex] = useState<number | null>(null);

  useEffect(() => {
    if (copiedColorIndex !== null) {
      setTimeout(() => {
        setCopiedColorIndex(null);
      }, 2000);
    }
  }, [copiedColorIndex]);

  return (
    <div>
      <div className="mb-2.5 grid grid-cols-3 border border-dark-white rounded-lg overflow-hidden">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => {
              navigator.clipboard.writeText(color);
              setCopiedColorIndex(index);
            }}
            className="w-full aspect-[3/2] cursor-pointer"
            style={{
              backgroundColor: color,
            }}
          ></div>
        ))}
      </div>

      <div className="grid grid-cols-3">
        {colors.map((color, index) => (
          <p
            key={index}
            className={`text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] ${
              copiedColorIndex !== index ? "uppercase" : ""
            } text-primary/50`}
          >
            {copiedColorIndex === index ? "Copied" : color}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function ColorsSection() {
  const blueColors: IColorPart[] = [
    {
      colors: ["#1675FF", "#3493FF", "#52B1FF"],
    },
    {
      colors: ["#ffffff", "#f5f5f5", "#ebebeb"],
    },
    {
      colors: ["#1d2026", "#31343a", "#45484e"],
    },
    {
      colors: ["#00b643", "#00ca57", "#14de6b"],
    },
    {
      colors: ["#eb651a", "#ff792e", "#ff8d42"],
    },
    {
      colors: ["#9000c9", "#a400dd", "#b814f1"],
    },
    {
      colors: ["#00adbd", "#00c1d1", "#14d5e5"],
    },
    {
      colors: ["#bd0061", "#d10975", "#e51d89"],
    },
    {
      colors: ["#bd000a", "#d1091e", "#e51d32"],
    },
  ];

  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
        <h2 className="mb-3 sm:mb-4 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          Brand Colors
        </h2>

        <p className="mb-14 text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
          The primary color palette which forms the color scheme for the brand.
        </p>

        <div className="w-full max-w-[300px] sm:max-w-full grid sm:grid-cols-3 gap-y-14 gap-x-3">
          {blueColors.map((colorPart, index) => (
            <ColorPart key={index} colors={colorPart.colors} />
          ))}
        </div>
      </div>
    </section>
  );
}
