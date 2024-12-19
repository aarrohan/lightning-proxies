import Image from "next/image";
import useCase1Img from "@/assets/images/web-scraping-use-case-1.svg";
import useCase2Img from "@/assets/images/web-scraping-use-case-2.svg";
import useCase3Img from "@/assets/images/web-scraping-use-case-3.svg";

interface IInfoCardProps {
  img: JSX.Element;
  title: string;
  description: string;
}

function InfoCard({ img, title, description }: IInfoCardProps) {
  return (
    <div className="p-6 sm:p-7 !pb-0 border border-dark-white bg-off-white rounded-xl flex flex-col">
      <div className="w-full">
        <h3 className="mb-2.5 text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-accent">
          {title}
        </h3>

        <p className="mb-6 sm:mb-8 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px]">
          {description}
        </p>
      </div>

      <div className="flex-1 flex justify-center items-end">{img}</div>
    </div>
  );
}

export default function UseCasesSection() {
  const infoCards: IInfoCardProps[] = [
    {
      img: <Image src={useCase1Img} alt="w-full" />,
      title: "Scrape Data Smoothly and Reliably",
      description:
        "Easily gather all the data you need, no matter the volume, without worrying about getting blocked or interrupted.",
    },
    {
      img: <Image src={useCase2Img} alt="w-full" />,
      title: "See the Web Like a Local",
      description:
        "Access region-specific websites just like a local user to make sure you get the most accurate data from anywhere.",
    },
    {
      img: <Image src={useCase3Img} alt="w-full" />,
      title: "Dodge Scraping Roadblocks",
      description:
        "Forget CAPTCHAs and IP bans—our proxies keep your web scraping seamless and hassle-free.",
    },
  ];

  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-accent">
          Use Cases
        </p>

        <h2 className="mb-8 sm:mb-14 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          Data collection at scale
        </h2>

        <div className="grid lg:grid-cols-3 gap-y-4 gap-x-6">
          {infoCards.map((infoCard, index) => (
            <InfoCard key={index} {...infoCard} />
          ))}
        </div>
      </div>
    </section>
  );
}
