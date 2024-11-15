import Image from "next/image";
import benefit1Img from "@/assets/images/ipv6-proxies-benefit-1.svg";
import benefit2Img from "@/assets/images/ipv6-proxies-benefit-2.svg";
import benefit3Img from "@/assets/images/ipv6-proxies-benefit-3.svg";
import benefit4Img from "@/assets/images/ipv6-proxies-benefit-4.svg";
import benefit5Img from "@/assets/images/ipv6-proxies-benefit-5.svg";
import benefit6Img from "@/assets/images/ipv6-proxies-benefit-6.svg";

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
          <p className="text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-[#A400DD]">
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
            stroke="#A400DD"
            strokeWidth="1.5"
          />
          <path
            d="M6 10.8411C6.60158 11.0219 7.27434 11.1709 8 11.281"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M11 14.9993C6.58171 14.9993 3 13.6562 3 11.9993"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 17.8411C6.60158 18.0219 7.27434 18.1709 8 18.281"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M11 21.9993C6.58171 21.9993 3 20.6562 3 18.9993V4.99927M19 4.99927V10.4993"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.7409 16.3778C15.7409 16.3178 15.7492 15.5528 15.7505 15.1184C15.7518 14.7214 15.7169 14.3387 15.9065 13.9885C16.6169 12.5755 18.6569 12.7194 19.1609 14.1588C19.2483 14.3958 19.2535 14.7714 19.2509 15.1184C19.2477 15.5617 19.2569 16.3778 19.2569 16.3778M15.7409 16.3778C14.6611 16.3778 14.2171 17.1575 14.0971 17.6373C13.9771 18.1171 13.9771 19.8563 14.0491 20.576C14.289 21.4756 14.8889 21.8475 15.4768 21.9674C16.0167 22.0154 18.2963 21.9974 18.9562 21.9974C19.916 22.0154 20.6359 21.6556 20.9358 20.576C20.9958 20.2162 21.0558 18.237 20.9058 17.6373C20.5879 16.6777 19.8568 16.3778 19.2569 16.3778M15.7409 16.3778H19.2569"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      img: <Image src={benefit1Img} alt="" className="-mb-px w-full" />,
      title: "Billions of IPs",
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
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z"
            stroke="#A400DD"
            strokeWidth="1.5"
          />
          <path
            d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z"
            stroke="#A400DD"
            strokeWidth="1.5"
          />
        </svg>
      ),
      img: <Image src={benefit2Img} alt="" className="w-full" />,
      title: "20+ locations worldwide",
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
            d="M20.3068 15.3302C16.7859 18.8511 11.1336 18.907 7.61276 15.3862C4.09192 11.8653 4.14799 6.2131 7.66883 2.69225M20.3068 15.3302C21.9837 13.6533 20.5139 9.46486 17.0241 5.97498C13.5342 2.4851 9.34571 1.01537 7.66883 2.69225M20.3068 15.3302C18.6299 17.0071 14.4414 15.5374 10.9516 12.0475M7.66883 2.69225C5.99196 4.36913 7.46169 8.55761 10.9516 12.0475M10.9516 12.0475L14 8.99902"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.48804 14.999L4.75106 17.4874C3.3523 19.4913 2.65291 20.4932 3.17039 21.2461C3.68787 21.999 5.07589 21.999 7.85193 21.999H12.1481C14.9241 21.999 16.3121 21.999 16.8296 21.2461C17.301 20.5602 16.7625 19.6676 15.6053 17.999"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      img: <Image src={benefit3Img} alt="" className="-mb-px w-full" />,
      title: "10GBps up-link connection speed",
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
            d="M2 11.999C2 9.17059 2 7.75638 2.87868 6.8777C3.75736 5.99902 5.17157 5.99902 8 5.99902H13C15.8284 5.99902 17.2426 5.99902 18.1213 6.8777C19 7.75638 19 9.17059 19 11.999C19 14.8274 19 16.2416 18.1213 17.1203C17.2426 17.999 15.8284 17.999 13 17.999H8C5.17157 17.999 3.75736 17.999 2.87868 17.1203C2 16.2416 2 14.8274 2 11.999Z"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M19 9.49902L20.0272 9.67022C20.7085 9.78377 21.0491 9.84054 21.3076 10.0057C21.5618 10.1681 21.7612 10.4034 21.8796 10.6809C22 10.963 22 11.3083 22 11.999C22 12.6897 22 13.035 21.8796 13.3171C21.7612 13.5946 21.5618 13.8299 21.3076 13.9923C21.0491 14.1575 20.7085 14.2143 20.0272 14.3278L19 14.499"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 9.99902V13.999"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M9 9.99902V13.999"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 9.99902V13.999"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M15 9.99902V13.999"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
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
            d="M13.5 12.999L17 8.99902M14 14.999C14 16.1036 13.1046 16.999 12 16.999C10.8954 16.999 10 16.1036 10 14.999C10 13.8944 10.8954 12.999 12 12.999C13.1046 12.999 14 13.8944 14 14.999Z"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 11.999C6 8.68531 8.68629 5.99902 12 5.99902C13.0929 5.99902 14.1175 6.2912 15 6.80171"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M2.5 11.9991C2.5 7.52068 2.5 5.28151 3.89124 3.89026C5.28249 2.49902 7.52166 2.49902 12 2.49902C16.4783 2.49902 18.7175 2.49902 20.1087 3.89026C21.5 5.28151 21.5 7.52068 21.5 11.9991C21.5 16.4774 21.5 18.7166 20.1087 20.1078C18.7175 21.4991 16.4783 21.4991 12 21.4991C7.52166 21.4991 5.28249 21.4991 3.89124 20.1078C2.5 18.7166 2.5 16.4774 2.5 11.9991Z"
            stroke="#A400DD"
            strokeWidth="1.5"
          />
        </svg>
      ),
      img: <Image src={benefit5Img} alt="" className="-mb-px w-full" />,
      title: "Unlimited Bandwidth",
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
            d="M20.5 5.49902H9.5C5.78672 5.49902 3 8.18405 3 11.999"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 18.499H14.5C18.2133 18.499 21 15.814 21 11.999"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 2.99902C18.5 2.99902 21 4.84024 21 5.49904C21 6.15784 18.5 7.99902 18.5 7.99902"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.49998 15.999C5.49998 15.999 3.00001 17.8402 3 18.499C2.99999 19.1578 5.5 20.999 5.5 20.999"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      img: <Image src={benefit6Img} alt="" className="-mb-px w-full" />,
      title: "Rotating/Sticky sessions",
      description:
        "Zero boundaries, send an unlimited amount of concurrent sessions.",
    },
  ];

  return (
    <section className="pt-20 sm:pt-44 overflow-hidden">
      <div className="mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-[#A400DD]">
          Ipv6 PROXIES
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
