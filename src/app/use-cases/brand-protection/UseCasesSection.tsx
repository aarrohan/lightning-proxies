interface IInfoCardProps {
  title: string;
  description: string;
}

function InfoCard({ title, description }: IInfoCardProps) {
  return (
    <div className="p-6 sm:p-7 border border-dark-white bg-off-white rounded-xl">
      <h3 className="mb-2.5 text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-[#D10975]">
        {title}
      </h3>

      <p className="mb-6 sm:mb-8 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px]">
        {description}
      </p>

      <div className="w-full aspect-[2/1.25] rounded-xl bg-[#D10975]/5"></div>
    </div>
  );
}

export default function UseCasesSection() {
  const infoCards: IInfoCardProps[] = [
    {
      title: "Feature 01 goes here",
      description:
        "In ultrices lorem leo, sed luctus ligula congue in. Morbi vel lectus in nunc faucibus lacinia vel ac nunc.",
    },
    {
      title: "Feature 02 goes here",
      description:
        "In ultrices lorem leo, sed luctus ligula congue in. Morbi vel lectus in nunc faucibus lacinia vel ac nunc.",
    },
    {
      title: "Feature 03 goes here",
      description:
        "In ultrices lorem leo, sed luctus ligula congue in. Morbi vel lectus in nunc faucibus lacinia vel ac nunc.",
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
