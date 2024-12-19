import Image from "next/image";
import useCase1Img from "@/assets/images/market-research-use-case-1.svg";
import useCase2Img from "@/assets/images/market-research-use-case-2.svg";
import useCase3Img from "@/assets/images/market-research-use-case-3.svg";

interface IInfoCardProps {
  img: JSX.Element;
  title: string;
  description: string;
}

function InfoCard({ img, title, description }: IInfoCardProps) {
  return (
    <div className="p-6 sm:p-7 !pb-0 border border-dark-white bg-off-white rounded-xl flex flex-col">
      <div className="w-full">
        <h3 className="mb-2.5 text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-[#FC721A]">
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
      title: "Get Fresh Market Insights Anytime",
      description:
        "Keep tabs on competitors, prices, and customer trends without hitting any online barriers.",
    },
    {
      img: <Image src={useCase2Img} alt="w-full" />,
      title: "Research Across Borders Effortlessly",
      description:
        "Dive into global markets with proxies that let you explore region-specific websites with ease.",
    },
    {
      img: <Image src={useCase3Img} alt="w-full" />,
      title: "Stay Private and Secure",
      description:
        "Do your research discreetly with proxies that keep your identity and data safe.",
    },
  ];

  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-[#FC721A]">
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
