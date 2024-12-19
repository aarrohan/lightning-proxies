import Image from "next/image";
import useCase1Img from "@/assets/images/brand-protection-use-case-1.svg";
import useCase2Img from "@/assets/images/brand-protection-use-case-2.svg";
import useCase3Img from "@/assets/images/brand-protection-use-case-3.svg";

interface IInfoCardProps {
  img: JSX.Element;
  title: string;
  description: string;
}

function InfoCard({ img, title, description }: IInfoCardProps) {
  return (
    <div className="p-6 sm:p-7 !pb-0 border border-dark-white bg-off-white rounded-xl flex flex-col">
      <div className="w-full">
        <h3 className="mb-2.5 text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-[#D10975]">
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
      title: "Keep an Eye on Your Brand Everywhere",
      description:
        "Monitor where and how your brand is being used online, and quickly spot counterfeits or bad PR.",
    },
    {
      img: <Image src={useCase2Img} alt="w-full" />,
      title: "Guard Your Intellectual Property",
      description:
        "Investigate potential theft or fraud safely and anonymously with our secure proxies.",
    },
    {
      img: <Image src={useCase3Img} alt="w-full" />,
      title: "Verify Your Brand Across Platforms",
      description:
        "Ensure your brand looks right and complies with regulations no matter where it’s being seen.",
    },
  ];

  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-[#D10975]">
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
