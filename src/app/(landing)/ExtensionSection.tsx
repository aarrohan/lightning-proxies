import Image from "next/image";
import extensionImg from "@/assets/images/extension.svg";
import SecondaryBtn from "@/components/ui/SecondaryBtn";
import chromeImg from "@/assets/images/chrome.svg";

export default function ExtensionSection() {
  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5">
        <div className="relative bg-gradient-to-b from-accent to-accent-dark rounded-2xl sm:rounded-3xl grid md:grid-cols-[auto_580px] items-center overflow-hidden">
          <div className="relative z-10 p-6 pt-10 pb-4 sm:p-14 sm:pr-0 flex flex-col items-start">
            <p className="mb-3 text-[11px] sm:text-sm font-medium tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-white">
              CHROME EXTENSION
            </p>

            <h2 className="mb-4 sm:mb-5 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-white">
              Introducing LightningProxies Free Chrome Extension
            </h2>

            <p className="mb-6 sm:mb-8 max-w-[590px] text-xs sm:text-base font-light leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-white/75">
              The LightningProxies Chrome Extension makes managing proxies
              effortless. You can quickly switch between different proxy
              profiles with just a click, keeping everything smooth and
              hassle-free. It even clears your cache automatically to protect
              your privacy and keep things running cleanly. Plus, the interface
              is simple and easy to use, so you can focus on what matters
              without getting bogged down by complicated settings.
            </p>

            <SecondaryBtn
              customClasses="sm:!py-2.5 !px-10 sm:!text-base sm:!tracking-[-0.16px]"
              containerClasses="!bg-white"
            >
              <Image
                src={chromeImg}
                alt=""
                className="w-[16px] sm:w-[24px] h-auto"
              />
              Get Chrome Extension
            </SecondaryBtn>
          </div>

          <div className="relative z-10 pt-4 flex justify-end">
            <Image
              src={extensionImg}
              alt=""
              className="-ml-[90px] w-full max-w-[480px] md:max-w-[580px] min-w-[400px] sm:min-w-[auto]"
            />
          </div>

          <Image
            src={"/images/grain.png"}
            alt=""
            fill
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
