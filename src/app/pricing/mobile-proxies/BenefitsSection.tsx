import Image from "next/image";
import benefit1Img from "@/assets/images/mobile-proxies-benefit-1.svg";
import benefit2Img from "@/assets/images/mobile-proxies-benefit-2.svg";
import benefit3Img from "@/assets/images/mobile-proxies-benefit-3.svg";
import benefit4Img from "@/assets/images/mobile-proxies-benefit-4.svg";
import benefit5Img from "@/assets/images/mobile-proxies-benefit-5.svg";
import benefit6Img from "@/assets/images/mobile-proxies-benefit-6.svg";

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
          <p className="text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-[#00C1D1]">
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
            d="M2.5 12C2.5 7.52165 2.5 5.28248 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28248 21.5 7.52165 21.5 12C21.5 16.4784 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4784 2.5 12Z"
            stroke="#00C1D1"
            strokeWidth="1.5"
          />
          <path
            d="M2.5 9H21.5"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M7 6H7.00898"
            stroke="#00C1D1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 6H11.009"
            stroke="#00C1D1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 17C17 14.2386 14.7614 12 12 12C9.23858 12 7 14.2386 7 17"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12.7072 15.293L11.293 16.7072"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      img: <Image src={benefit1Img} alt="" className="-mb-px w-full" />,
      title: "Usage stats dashboard",
      description:
        "See detailed Mobile Proxy usage statistics, whitelist your IPs, and manage your account in one dashboard.",
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
            d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M20 5.69899C19.0653 5.76636 17.8681 6.12824 17.0379 7.20277C15.5385 9.14361 14.039 9.30556 13.0394 8.65861C11.5399 7.6882 12.8 6.11636 11.0401 5.26215C9.89313 4.70542 9.73321 3.19045 10.3716 2"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M2 11C2.7625 11.6621 3.83046 12.2682 5.08874 12.2682C7.68843 12.2682 8.20837 12.7649 8.20837 14.7518C8.20837 16.7387 8.20837 16.7387 8.72831 18.2288C9.06651 19.1981 9.18472 20.1674 8.5106 21"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M19.8988 19.9288L22 22M21.1083 17.0459C21.1083 19.2805 19.2932 21.0919 17.0541 21.0919C14.8151 21.0919 13 19.2805 13 17.0459C13 14.8114 14.8151 13 17.0541 13C19.2932 13 21.1083 14.8114 21.1083 17.0459Z"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      img: <Image src={benefit2Img} alt="" className="w-full" />,
      title: "Advanced geo-targeting",
      description:
        "Efficiently filter mobile IPs by country and ASN with no hidden or extra fees.",
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
            d="M2 22H13C17.9706 22 22 17.9706 22 13C22 8.02944 17.9706 4 13 4C8.36745 4 4.49744 7.50005 4 12"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M18.5 5.5L19.5 4.5M5.5 4.5L6.5 5.5"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.5 9L13.5607 11.9394M13.5607 11.9394C13.2892 11.6679 12.9142 11.5 12.5 11.5C11.6716 11.5 11 12.1716 11 13C11 13.8285 11.6716 14.5 12.5 14.5C13.3284 14.5 14 13.8285 14 13C14 12.5858 13.8321 12.2108 13.5607 11.9394Z"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12.5 3.5V2"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 2H14.5"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 15H5"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 19H7"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      img: <Image src={benefit3Img} alt="" className="-mb-px w-full" />,
      title: "Leading response time",
      description:
        "With an average of 0.5s response time, our Mobile Proxies are leaders in the market.",
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
            d="M7 18V16M12 18V15M17 18V13M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.99219 11.4863C8.14729 11.5581 13.0341 11.2328 15.8137 6.82132M13.9923 6.28835L15.8678 5.98649C16.0964 5.95738 16.432 6.13785 16.5145 6.35298L17.0104 7.99142"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      img: <Image src={benefit4Img} alt="" className="mt-4 w-full" />,
      title: "Proxy pool growth",
      description:
        "We continuously work on expanding the current Mobile Proxy pool to fit every customer's needs.",
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
            d="M11.0809 13.152L8 7L13.4196 11.2796C14.1901 11.888 14.1941 13.0472 13.4277 13.6607C12.6614 14.2743 11.5189 14.0266 11.0809 13.152Z"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 4.81998C3.14864 6.639 2 9.17383 2 11.9776C2 17.5129 6.47715 22.0001 12 22.0001C17.5228 22.0001 22 17.5129 22 11.9776C22 7.12418 18.5581 3.07654 13.9872 2.15286C13.1512 1.98392 12.7332 1.89945 12.3666 2.2002C12 2.50095 12 2.98712 12 3.95947V4.96173"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      img: <Image src={benefit5Img} alt="" className="mt-4 w-full" />,
      title: "Avg. 99.9% uptime",
      description:
        "No limits and restrictions, send unlimited amount of concurrent sessions.",
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
            d="M22 11.5667C22 16.8499 17.5222 21.1334 12 21.1334C11.3507 21.1343 10.7032 21.0742 10.0654 20.9545C9.60633 20.8682 9.37678 20.8251 9.21653 20.8496C9.05627 20.8741 8.82918 20.9949 8.37499 21.2364C7.09014 21.9197 5.59195 22.161 4.15111 21.893C4.69874 21.2194 5.07275 20.4112 5.23778 19.5448C5.33778 19.0148 5.09 18.5 4.71889 18.1231C3.03333 16.4115 2 14.1051 2 11.5667C2 6.28357 6.47778 2 12 2C12.6849 2 13.3538 2.0659 14 2.19142"
            stroke="#00C1D1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 5.5C23 7.433 21.433 9 19.5 9C17.567 9 16 7.433 16 5.5C16 3.567 17.567 2 19.5 2C21.433 2 23 3.567 23 5.5Z"
            stroke="#00C1D1"
            strokeWidth="1.5"
          />
          <path
            d="M11.9955 12H12.0045M15.991 12H16M8 12H8.00897"
            stroke="#00C1D1"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      img: <Image src={benefit6Img} alt="" className="mt-4 w-full" />,
      title: "24/7 live support",
      description:
        "Our clients can reach out to us at any given moment, and we’ll respond to their urgent needs.",
    },
  ];

  return (
    <section className="pt-20 sm:pt-44 overflow-hidden">
      <div className="mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-[#00C1D1]">
          MOBILE PROXIES
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
