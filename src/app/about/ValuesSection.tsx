import Image from "next/image";
import ethic1Img from "@/assets/images/ethic-1.svg";
import ethic2Img from "@/assets/images/ethic-2.svg";
import ethic3Img from "@/assets/images/ethic-3.svg";

export default function ValuesSection() {
  return (
    <section className="pb-20 sm:pb-44">
      <div className="mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-accent">
          VALUES
        </p>

        <h2 className="mb-6 max-w-[520px] text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          Ethics first, and second
        </h2>

        <p className="mb-12 sm:mb-16 max-w-[580px] text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/75">
          Integer ac erat at mauris aliquet consectetur vel et ex. Donec vel
          ante in urna molestie luctus id sed ipsum.
        </p>

        <div className="w-full grid sm:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <Image
              src={ethic1Img}
              alt=""
              className="w-[48px] sm:w-[80px] aspect-square"
            />

            <h4 className="mt-5 sm:mt-6 mb-2 text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px] text-center">
              Ethical Sourcing
            </h4>

            <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
              At LightningProxies, we are committed to ethical practices in
              everything we do. Our IP sourcing is conducted with integrity,
              collaborating exclusively with trusted data center and ISP
              partners worldwide to ensure reliability and responsibility.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={ethic2Img}
              alt=""
              className="w-[48px] sm:w-[80px] aspect-square"
            />

            <h4 className="mt-5 sm:mt-6 mb-2 text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px] text-center">
              Desire to Serve
            </h4>

            <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
              LightningProxies was founded on a simple yet powerful mission: to
              serve. We are dedicated to empowering users by providing
              high-quality proxies tailored to support their diverse online
              needs with efficiency and care.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={ethic3Img}
              alt=""
              className="w-[48px] sm:w-[80px] aspect-square"
            />

            <h4 className="mt-5 sm:mt-6 mb-2 text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px] text-center">
              The Yardstick of Quality
            </h4>

            <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
              Quality isn’t just a standard—it’s our cornerstone. We go beyond
              delivering exceptional products; provide a premium experience.
              From our top-tier offerings to our 24/7 support team of
              specialists, excellence is embedded in every interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
