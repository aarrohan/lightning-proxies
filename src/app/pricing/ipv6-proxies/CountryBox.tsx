import usaFlagImg from "@/assets/images/flags/usa.svg";
import ukFlagImg from "@/assets/images/flags/uk.svg";
import canadaFlagImg from "@/assets/images/flags/canada.svg";
import chinaFlagImg from "@/assets/images/flags/china.svg";
import franceFlagImg from "@/assets/images/flags/france.svg";
import germanyFlagImg from "@/assets/images/flags/germany.svg";
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
            src={germanyFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-sm font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Germany
          </p>
        </div>
      </div>
    </div>
  );
}
