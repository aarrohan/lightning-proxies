import Image from "next/image";
import benefit1Img from "@/assets/images/benefit-1.svg";
import benefit2Img from "@/assets/images/benefit-2.svg";
import benefit3Img from "@/assets/images/benefit-3.svg";
import benefitsSectionShapeImg from "@/assets/images/benefits-section-shape.svg";

interface ISubHeadingProps {
  icon: JSX.Element;
  title: string;
}

interface IContentBoxProps {
  subHeadingIcon: JSX.Element;
  subHeadingTitle: string;
  title: string;
  description: string;
  img: JSX.Element;
}

function SubHeading({ icon, title }: ISubHeadingProps) {
  return (
    <div className="group w-fit h-fit bg-dark-white rounded-lg">
      <div className="relative -top-[3px] group-hover:-top-0 py-1.5 sm:py-2 px-2.5 sm:px-3 border border-dark-white bg-white rounded-lg flex items-center gap-2 duration-200">
        {icon}

        <p className="text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px]">
          {title}
        </p>
      </div>
    </div>
  );
}

function BigBox() {
  return (
    <div className="relative pt-6 sm:pt-10 px-6 sm:px-8 border border-dark-white bg-off-white rounded-xl overflow-hidden">
      <div className="relative z-10 mb-8 flex flex-col items-start lg:items-center">
        <SubHeading
          icon={
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.25 8.85337C13.25 8.5941 13.25 8.4645 13.289 8.349C13.4024 8.0133 13.7014 7.8831 14.0008 7.74668C14.3375 7.5933 14.5058 7.51665 14.6726 7.50315C14.862 7.48783 15.0517 7.52865 15.2135 7.61947C15.4281 7.73985 15.5777 7.96867 15.7309 8.15475C16.4385 9.0141 16.7922 9.44385 16.9216 9.9177C17.0261 10.3001 17.0261 10.6999 16.9216 11.0823C16.7329 11.7734 16.1364 12.3528 15.6948 12.8891C15.469 13.1633 15.3561 13.3005 15.2135 13.3805C15.0517 13.4714 14.862 13.5122 14.6726 13.4969C14.5058 13.4834 14.3375 13.4067 14.0008 13.2533C13.7014 13.1169 13.4024 12.9867 13.289 12.651C13.25 12.5355 13.25 12.4059 13.25 12.1466V8.85337Z"
                stroke="#1D2026"
                strokeWidth="1.125"
              />
              <path
                d="M5.75 8.85343C5.75 8.52703 5.74084 8.23363 5.47693 8.00413C5.38095 7.92065 5.25369 7.86268 4.99918 7.74673C4.66251 7.59343 4.49417 7.51678 4.32737 7.50328C3.82693 7.46278 3.55769 7.80433 3.2691 8.15488C2.56156 9.01423 2.2078 9.4439 2.07835 9.91775C1.97388 10.3002 1.97388 10.7001 2.07835 11.0824C2.26715 11.7736 2.86364 12.3529 3.30516 12.8892C3.58347 13.2272 3.84933 13.5356 4.32737 13.497C4.49417 13.4835 4.66251 13.4068 4.99918 13.2535C5.25369 13.1375 5.38095 13.0795 5.47693 12.9961C5.74084 12.7666 5.75 12.4732 5.75 12.1468V8.85343Z"
                stroke="#1D2026"
                strokeWidth="1.125"
              />
              <path
                d="M15.5 7.875V6.75C15.5 3.85051 12.8137 1.5 9.5 1.5C6.18629 1.5 3.5 3.85051 3.5 6.75V7.875"
                stroke="#1D2026"
                strokeWidth="1.125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.5 13.125C15.5 16.5 12.5 16.5 9.5 16.5"
                stroke="#1D2026"
                strokeWidth="1.125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          title="24/7 Assistance"
        />

        <h3 className="mt-3.5 mb-2 sm:mb-3 text-base sm:text-[28px] font-semibold sm:leading-[34px] tracking-[-0.16px] sm:tracking-[-0.56px] lg:text-center">
          Professional tech support team
        </h3>

        <p className="max-w-[560px] text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] lg:text-center text-primary/50">
          Our dedicated team stands ready 24/7 across all platforms to assist
          you with any technical issues or queries.
        </p>
      </div>

      <div className="relative z-10 flex justify-center">
        <Image
          src={benefit3Img}
          alt=""
          className="-mb-[1px] w-full max-w-[712px] min-w-[310px]"
        />
      </div>

      <Image
        src={benefitsSectionShapeImg}
        alt=""
        className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-[1210px]"
      />
    </div>
  );
}

function ContentBox({
  subHeadingIcon,
  subHeadingTitle,
  title,
  description,
  img,
}: IContentBoxProps) {
  return (
    <div className="pt-6 sm:pt-10 border border-dark-white bg-off-white rounded-xl overflow-hidden">
      <div className="mb-5 px-6 sm:px-8 flex flex-col items-start">
        <SubHeading icon={subHeadingIcon} title={subHeadingTitle} />

        <h3 className="mt-3.5 mb-2 sm:mb-3 text-base sm:text-[28px] font-semibold sm:leading-[34px] tracking-[-0.16px] sm:tracking-[-0.56px]">
          {title}
        </h3>

        <p className="max-w-[560px] text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/50">
          {description}
        </p>
      </div>

      <div className="flex justify-center">{img}</div>
    </div>
  );
}

export default function BenefitsSection() {
  const contentBoxes: IContentBoxProps[] = [
    {
      subHeadingIcon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.99994 9C2.99994 6.17157 2.99994 4.75736 3.87862 3.87868C4.7573 3 6.17151 3 8.99994 3C11.8283 3 13.2426 3 14.1212 3.87868C14.9999 4.75736 14.9999 6.17157 14.9999 9C14.9999 11.8284 14.9999 13.2427 14.1212 14.1213C13.2426 15 11.8283 15 8.99994 15C6.17151 15 4.7573 15 3.87862 14.1213C2.99994 13.2427 2.99994 11.8284 2.99994 9Z"
            stroke="#1D2026"
            strokeWidth="1.125"
            strokeLinejoin="round"
          />
          <path
            d="M7.12506 1.5V3"
            stroke="#1D2026"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.8749 1.5V3"
            stroke="#1D2026"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.12506 15V16.5"
            stroke="#1D2026"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.8749 15V16.5"
            stroke="#1D2026"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.75 6.75L6.75 9.75"
            stroke="#1D2026"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.2499 9.75L9.74994 11.25"
            stroke="#1D2026"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5001 10.875H15.0001"
            stroke="#1D2026"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.00006 7.125H1.50006"
            stroke="#1D2026"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.00006 10.875H1.50006"
            stroke="#1D2026"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5001 7.125H15.0001"
            stroke="#1D2026"
            strokeWidth="1.125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      subHeadingTitle: "Guranteed Uptime",
      title: "Reliable Infrastructure",
      description:
        "Global datacenters across Europe, North America, and Asia guarantee 99% uptime and the fastest response times for any proxy IP.",
      img: <Image src={benefit1Img} alt="" className="w-full max-w-[630px]" />,
    },
    {
      subHeadingIcon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.125 9.75L12.75 6.75M10.5 11.25C10.5 12.0784 9.82845 12.75 9 12.75C8.17155 12.75 7.5 12.0784 7.5 11.25C7.5 10.4216 8.17155 9.75 9 9.75C9.82845 9.75 10.5 10.4216 10.5 11.25Z"
            stroke="#1D2026"
            strokeWidth="1.125"
            strokeLinecap="round"
          />
          <path
            d="M4.5 9C4.5 6.51472 6.51472 4.5 9 4.5C9.81968 4.5 10.5881 4.71914 11.25 5.10202"
            stroke="#1D2026"
            strokeWidth="1.125"
            strokeLinecap="round"
          />
          <path
            d="M1.875 9.00003C1.875 5.64124 1.875 3.96187 2.91843 2.91843C3.96187 1.875 5.64124 1.875 9.00003 1.875C12.3588 1.875 14.0382 1.875 15.0816 2.91843C16.125 3.96187 16.125 5.64124 16.125 9.00003C16.125 12.3588 16.125 14.0382 15.0816 15.0816C14.0382 16.125 12.3588 16.125 9.00003 16.125C5.64124 16.125 3.96187 16.125 2.91843 15.0816C1.875 14.0382 1.875 12.3588 1.875 9.00003Z"
            stroke="#1D2026"
            strokeWidth="1.125"
          />
        </svg>
      ),
      subHeadingTitle: "Powerful Network",
      title: "Proxy solutions you can rely on",
      description:
        "Choose from our range of proxy products that best suit your use case. Unsure which one to select? No worries — contact sales team.",
      img: (
        <Image
          src={benefit2Img}
          alt=""
          className="w-full max-w-[630px] min-w-[380px]"
        />
      ),
    },
  ];

  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-orange">
          BENEFITS
        </p>

        <h2 className="mb-8 sm:mb-14 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          Super-charge your proxy operations <br className="hidden sm:block" />{" "}
          with our proxy network
        </h2>

        <div className="mb-4 grid lg:grid-cols-2 gap-4">
          {contentBoxes.map((box, index) => (
            <ContentBox key={index} {...box} />
          ))}
        </div>

        <BigBox />
      </div>
    </section>
  );
}
