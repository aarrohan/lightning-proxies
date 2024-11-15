import usaFlagImg from "@/assets/images/flags/usa.svg";
import ukFlagImg from "@/assets/images/flags/uk.svg";
import canadaFlagImg from "@/assets/images/flags/canada.svg";
import chinaFlagImg from "@/assets/images/flags/china.svg";
import franceFlagImg from "@/assets/images/flags/france.svg";
import germanyFlagImg from "@/assets/images/flags/germany.svg";
import Image from "next/image";

export default function CountryBox() {
  return (
    <div className="mt-3 w-full p-4 sm:p-10 border border-white/10 bg-white/5 rounded-xl flex flex-col items-center">
      <p className="mb-6 w-full text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] sm:text-center text-white">
        Included Countries in Datacenter Proxies
      </p>

      <div className="w-full grid sm:flex flex-wrap grid-cols-2 justify-center gap-6 sm:gap-8">
        <div className="flex items-center gap-2 5">
          <Image
            src={usaFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            United States
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={ukFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            United Kingdom
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={canadaFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Canada
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={chinaFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            China
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={franceFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            France
          </p>
        </div>

        <div className="flex items-center gap-2 5">
          <Image
            src={germanyFlagImg}
            alt=""
            className="w-[28px] sm:w-[32px] h-auto"
          />

          <p className="text-xs sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
            Germany
          </p>
        </div>
      </div>
    </div>
  );
}
