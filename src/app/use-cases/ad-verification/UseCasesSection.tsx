import Image from "next/image";
import useCase1Img from "@/assets/images/ad-verification-use-case-1.svg";
import useCase2Img from "@/assets/images/ad-verification-use-case-2.svg";
import useCase3Img from "@/assets/images/ad-verification-use-case-3.svg";

interface IInfoCardProps {
  img: JSX.Element;
  title: string;
  description: string;
}

function InfoCard({ img, title, description }: IInfoCardProps) {
  return (
    <div className="p-6 sm:p-7 !pb-0 border border-dark-white bg-off-white rounded-xl flex flex-col">
      <div className="w-full">
        <h3 className="mb-2.5 text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-[#A400DD]">
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
      title: "Make Sure Your Ads Show Up Right",
      description:
        "Check that your ads appear exactly where and how they should by seeing them just like your audience does.",
    },
    {
      img: <Image src={useCase2Img} alt="w-full" />,
      title: "Spot and Stop Ad Fraud",
      description:
        "Catch fraudulent activities and unauthorized placements before they hurt your campaigns.",
    },
    {
      img: <Image src={useCase3Img} alt="w-full" />,
      title: "Test Ads in Any Location",
      description:
        "View geo-targeted ads anywhere in the world to ensure they perform as intended.",
    },
  ];

  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-[#A400DD]">
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
