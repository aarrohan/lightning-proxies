import Image from "next/image";
import benefit1Img from "@/assets/images/datacenter-proxies-benefit-1.svg";
import benefit2Img from "@/assets/images/datacenter-proxies-benefit-2.svg";
import benefit3Img from "@/assets/images/datacenter-proxies-benefit-3.svg";
import benefit4Img from "@/assets/images/datacenter-proxies-benefit-4.svg";
import benefit5Img from "@/assets/images/datacenter-proxies-benefit-5.svg";
import benefit6Img from "@/assets/images/datacenter-proxies-benefit-6.svg";

interface IBenefitBox {
  icon: JSX.Element;
  img: JSX.Element;
  title: string;
  description: string;
}

function BenefitBox({ icon, img, title, description }: IBenefitBox) {
  return (
    <div className="pt-8 sm:pt-10 px-6 sm:px-8 border border-dark-white bg-off-white rounded-xl flex flex-col justify-between">
      <div>
        <div className="mb-2.5 flex items-center gap-2.5">
          {icon}
          <p className="text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-[#00C153]">
            {title}
          </p>
        </div>

        <p className="text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
          {description}
        </p>
      </div>

      <div className="flex justify-center items-end">{img}</div>
    </div>
  );
}

export default function BenefitsSection() {
  const benefits: IBenefitBox[] = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] sm:w-[24px] h-auto"
        >
          <path
            d="M11 7.99927C15.4183 7.99927 19 6.65612 19 4.99927C19 3.34241 15.4183 1.99927 11 1.99927C6.58172 1.99927 3 3.34241 3 4.99927C3 6.65612 6.58172 7.99927 11 7.99927Z"
            stroke="#00C153"
            strokeWidth="1.5"
          />
          <path
            d="M6 10.8411C6.60158 11.0219 7.27434 11.1709 8 11.281"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M11 14.9993C6.58171 14.9993 3 13.6562 3 11.9993"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 17.8411C6.60158 18.0219 7.27434 18.1709 8 18.281"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M11 21.9993C6.58171 21.9993 3 20.6562 3 18.9993V4.99927M19 4.99927V10.4993"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.7409 16.3778C15.7409 16.3178 15.7492 15.5528 15.7505 15.1184C15.7518 14.7214 15.7169 14.3387 15.9065 13.9885C16.6169 12.5755 18.6569 12.7194 19.1609 14.1588C19.2483 14.3958 19.2535 14.7714 19.2509 15.1184C19.2477 15.5617 19.2569 16.3778 19.2569 16.3778M15.7409 16.3778C14.6611 16.3778 14.2171 17.1575 14.0971 17.6373C13.9771 18.1171 13.9771 19.8563 14.0491 20.576C14.289 21.4756 14.8889 21.8475 15.4768 21.9674C16.0167 22.0154 18.2963 21.9974 18.9562 21.9974C19.916 22.0154 20.6359 21.6556 20.9358 20.576C20.9958 20.2162 21.0558 18.237 20.9058 17.6373C20.5879 16.6777 19.8568 16.3778 19.2569 16.3778M15.7409 16.3778H19.2569"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      img: <Image src={benefit1Img} alt="" className="-mb-px w-full" />,
      title: "15k+ Available IPs",
      description: "The highest number of datacenter proxies on the market.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] sm:w-[24px] h-auto"
        >
          <path
            d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z"
            stroke="#00C153"
            strokeWidth="1.5"
          />
          <path
            d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z"
            stroke="#00C153"
            strokeWidth="1.5"
          />
        </svg>
      ),
      img: <Image src={benefit2Img} alt="" className="w-full" />,
      title: "5 Locations with more coming",
      description:
        "Extensive and unbeatable list of datacenter proxy server locations to suit any business' needs.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] sm:w-[24px] h-auto"
        >
          <path
            d="M2 12C2 9.17157 2 7.75736 2.87868 6.87868C3.75736 6 5.17157 6 8 6H13C15.8284 6 17.2426 6 18.1213 6.87868C19 7.75736 19 9.17157 19 12C19 14.8284 19 16.2426 18.1213 17.1213C17.2426 18 15.8284 18 13 18H8C5.17157 18 3.75736 18 2.87868 17.1213C2 16.2426 2 14.8284 2 12Z"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M19 9.5L20.0272 9.6712C20.7085 9.78475 21.0491 9.84152 21.3076 10.0067C21.5618 10.1691 21.7612 10.4044 21.8796 10.6819C22 10.964 22 11.3093 22 12C22 12.6907 22 13.036 21.8796 13.3181C21.7612 13.5956 21.5618 13.8309 21.3076 13.9933C21.0491 14.1585 20.7085 14.2153 20.0272 14.3288L19 14.5"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 10V14"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M9 10V14"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 10V14"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M15 10V14"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      img: <Image src={benefit3Img} alt="" className="-mb-px w-full" />,
      title: "99.9% uptime",
      description:
        "The most stable and reliable datacenter proxies with high uptime.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] sm:w-[24px] h-auto"
        >
          <path
            d="M13.5 13L17 9M14 15C14 16.1046 13.1046 17 12 17C10.8954 17 10 16.1046 10 15C10 13.8954 10.8954 13 12 13C13.1046 13 14 13.8954 14 15Z"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 12C6 8.68629 8.68629 6 12 6C13.0929 6 14.1175 6.29218 15 6.80269"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1087 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1087 20.1087C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1087C2.5 18.7175 2.5 16.4783 2.5 12Z"
            stroke="#00C153"
            strokeWidth="1.5"
          />
        </svg>
      ),
      img: <Image src={benefit4Img} alt="" className="-mb-px w-full" />,
      title: "Unlimited bandwidth",
      description:
        "No limits for requests or traffic, pay only per datacenter IP.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] sm:w-[24px] h-auto"
        >
          <path
            d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
            stroke="#00C153"
            strokeWidth="1.5"
          />
          <path
            d="M11.9961 12H12.0051"
            stroke="#00C153"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2V6"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M22 12H18"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 18V22"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 12H2"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      img: <Image src={benefit5Img} alt="" className="-mb-px w-full" />,
      title: "Premium IPs working on most targets",
      description: "No limits or restrictions for a number of targets.",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] sm:w-[24px] h-auto"
        >
          <path
            d="M4 5.00024L10 5"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M13 5H20"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M16 9V15"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M10 2V8"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 16V22"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M16 12L20 12.0002"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M4 12.0002L13 12"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 19H20"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M4 19.0002L9 19"
            stroke="#00C153"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      img: <Image src={benefit6Img} alt="" className="-mb-px w-full" />,
      title: "Customized Conncurrency",
      description:
        "Zero boundaries, send an unlimited amount of concurrent sessions.",
    },
  ];

  return (
    <section className="pt-20 sm:pt-44 overflow-hidden">
      <div className="mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-[#00C153]">
          DATACENTER PROXIES
        </p>

        <h2 className="mb-8 sm:mb-14 max-w-[500px] text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          Why our proxies beat the competition by a mile
        </h2>

        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <BenefitBox key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
