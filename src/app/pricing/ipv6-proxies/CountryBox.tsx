import usaFlagImg from "@/assets/images/flags/usa.svg";
import ukFlagImg from "@/assets/images/flags/uk.svg";
import germanyFlagImg from "@/assets/images/flags/germany.svg";
import canadaFlagImg from "@/assets/images/flags/canada.svg";
import netherlandsFlagImg from "@/assets/images/flags/netherlands.svg";
import franceFlagImg from "@/assets/images/flags/france.svg";
import russiaFlagImg from "@/assets/images/flags/russian-federation.svg";
import indiaFlagImg from "@/assets/images/flags/india.svg";
import japanFlagImg from "@/assets/images/flags/japan.svg";
import italyFlagImg from "@/assets/images/flags/italy.svg";
import spainFlagImg from "@/assets/images/flags/spain.svg";
import brazilFlagImg from "@/assets/images/flags/brazil.svg";
import romaniaFlagImg from "@/assets/images/flags/romania.svg";
import austriaFlagImg from "@/assets/images/flags/austria.svg";
import chinaFlagImg from "@/assets/images/flags/china.svg";
import polandFlagImg from "@/assets/images/flags/poland.svg";
import singaporeFlagImg from "@/assets/images/flags/singapore.svg";
import australiaFlagImg from "@/assets/images/flags/australia.svg";
import vietnamFlagImg from "@/assets/images/flags/viet-nam.svg";
import switzerlandFlagImg from "@/assets/images/flags/switzerland.svg";
import ukraineFlagImg from "@/assets/images/flags/ukraine.svg";
import pakistanFlagImg from "@/assets/images/flags/pakistan.svg";
import denmarkFlagImg from "@/assets/images/flags/denmark.svg";
import swedenFlagImg from "@/assets/images/flags/sweden.svg";
import Image from "next/image";

export default function CountryBox({ isUnlimited }: { isUnlimited?: boolean }) {
  return (
    <div
      className={`${
        !isUnlimited ? "mt-3" : ""
      } w-full p-4 sm:p-10 border border-white/10 bg-white/5 rounded-xl flex flex-col items-center`}
    >
      <p className="mb-8 w-full text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] sm:text-center text-white">
        Included Countries in IPv6 Proxies
      </p>

      <div
        className={`w-full max-w-full ${
          !isUnlimited ? "sm:max-w-[95%]" : ""
        } grid grid-cols-2 sm:grid-cols-3 ${
          isUnlimited ? "lg:grid-cols-5" : "lg:grid-cols-6"
        } gap-6`}
      >
        <div className="flex items-center gap-2 5">
          <Image
            src={usaFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            United States
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={ukFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            United Kingdom
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={germanyFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Germany
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={canadaFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Canada
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={netherlandsFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Netherlands
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={franceFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            France
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={russiaFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Russia
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={indiaFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            India
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={japanFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Japan
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={italyFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Italy
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={spainFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Spain
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={brazilFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Brazil
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={romaniaFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Romania
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={austriaFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Austria
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={chinaFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            China
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={polandFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Poland
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={singaporeFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Singapore
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={australiaFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Australia
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={vietnamFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Vietnam
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={switzerlandFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Switzerland
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={ukraineFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Ukraine
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={pakistanFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Pakistan
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={denmarkFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Denmark
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={swedenFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Sweden
          </p>
        </div>
      </div>
    </div>
  );
}
