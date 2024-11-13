import Image from "next/image";
import benefit1Img from "@/assets/images/residential-proxies-benefit-1.svg";
import benefit2Img from "@/assets/images/residential-proxies-benefit-2.svg";
import benefit3Img from "@/assets/images/residential-proxies-benefit-3.svg";
import benefit4Img from "@/assets/images/residential-proxies-benefit-4.svg";
import benefit5Img from "@/assets/images/residential-proxies-benefit-5.svg";
import benefit6Img from "@/assets/images/residential-proxies-benefit-6.svg";

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
          <p className="text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-accent">
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
            d="M9.76722 18.8486L12 14L14.2328 18.8486C14.8804 20.2549 15.2042 20.958 14.8612 21.4656C14.8518 21.4795 14.8421 21.4932 14.8321 21.5067C14.4659 22 13.6439 22 12 22C10.3561 22 9.53409 22 9.16795 21.5067C9.15792 21.4932 9.14821 21.4795 9.13882 21.4656C8.79585 20.958 9.11964 20.2549 9.76722 18.8486Z"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M4 18.001C2.74418 16.3295 2 14.2516 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.2516 21.2558 16.3295 20 18.001"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M7.52779 16C6.57771 14.9385 6 13.5367 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 13.5367 17.4223 14.9385 16.4722 16"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      img: <Image src={benefit1Img} alt="" className="-mb-px w-full" />,
      title: "100M+ residential IPs for sale",
      description: "We provide the most stable residential proxy IP pool.",
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
            d="M19 16V14C19 11.1716 19 9.75736 18.1213 8.87868C17.2426 8 15.8284 8 13 8H11C8.17157 8 6.75736 8 5.87868 8.87868C5 9.75736 5 11.1716 5 14V16C5 18.8284 5 20.2426 5.87868 21.1213C6.75736 22 8.17157 22 11 22H13C15.8284 22 17.2426 22 18.1213 21.1213C19 20.2426 19 18.8284 19 16Z"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M19 18C20.4142 18 21.1213 18 21.5607 17.5607C22 17.1213 22 16.4142 22 15C22 13.5858 22 12.8787 21.5607 12.4393C21.1213 12 20.4142 12 19 12"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M5 18C3.58579 18 2.87868 18 2.43934 17.5607C2 17.1213 2 16.4142 2 15C2 13.5858 2 12.8787 2.43934 12.4393C2.87868 12 3.58579 12 5 12"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 3.5C13.5 4.32843 12.8284 5 12 5C11.1716 5 10.5 4.32843 10.5 3.5C10.5 2.67157 11.1716 2 12 2C12.8284 2 13.5 2.67157 13.5 3.5Z"
            stroke="#1675FF"
            strokeWidth="1.5"
          />
          <path
            d="M12 5V8"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 13V14"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 13V14"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 17.5C10 17.5 10.6667 18 12 18C13.3333 18 14 17.5 14 17.5"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      img: <Image src={benefit2Img} alt="" className="w-full" />,
      title: "Zero CAPTCHAs",
      description:
        "Optimize business’ resources as there is no need to deal with CAPTCHAs.",
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
            d="M2 2L22 22"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.7687 15.7687C20.5144 14.452 21 12.9256 21 11.1834V8.28041C21 6.6404 21 5.8204 20.5959 5.28541C20.1918 4.75041 19.2781 4.49068 17.4507 3.97122C16.2022 3.61631 15.1016 3.18874 14.2223 2.79841C13.0234 2.26621 12.424 2.00012 12 2.00012C11.576 2.00012 10.9766 2.26621 9.77771 2.79841C9.16296 3.0713 8.44008 3.36239 7.63411 3.63412M4.57329 4.5734C3.9913 4.78666 3.62297 4.99566 3.40411 5.28541C3 5.8204 3 6.6404 3 8.28041V11.1834C3 16.8086 8.06277 20.1836 10.594 21.5195C11.2011 21.8399 11.5046 22.0001 12 22.0001C12.4954 22.0001 12.7989 21.8399 13.406 21.5195C14.647 20.8646 16.4964 19.7195 18.0594 18.0595"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      img: <Image src={benefit3Img} alt="" className="-mb-px w-full" />,
      title: "Zero IP blocking",
      description:
        "Forget wasting time on IP blocks, buy residential IPs and focus on the insights.",
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
            d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 10C7.67157 10 7 9.32843 7 8.5C7 7.67157 7.67157 7 8.5 7C9.32843 7 10 7.67157 10 8.5C10 9.32843 9.32843 10 8.5 10Z"
            stroke="#1675FF"
            strokeWidth="1.5"
          />
          <path
            d="M15.5 17C16.3284 17 17 16.3284 17 15.5C17 14.6716 16.3284 14 15.5 14C14.6716 14 14 14.6716 14 15.5C14 16.3284 14.6716 17 15.5 17Z"
            stroke="#1675FF"
            strokeWidth="1.5"
          />
          <path
            d="M10 8.5H17"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14 15.5H7"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      img: <Image src={benefit4Img} alt="" className="mt-4 w-full" />,
      title: "Session control",
      description:
        "Residential Proxies for sale at LP have flexible and adjustable session control feature to meet your needs.",
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
            d="M12 12C12 12 10.3569 14.5 8.7 14.5C7.04315 14.5 6 13.3807 6 12C6 10.6193 7.04315 9.5 8.7 9.5C10.3569 9.5 12 12 12 12ZM12 12C12 12 13.6431 14.5 15.3 14.5C16.9569 14.5 18 13.3807 18 12C18 10.6193 16.9569 9.5 15.3 9.5C13.6431 9.5 12 12 12 12Z"
            stroke="#1675FF"
            strokeWidth="1.5"
          />
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#1675FF"
            strokeWidth="1.5"
          />
        </svg>
      ),
      img: <Image src={benefit5Img} alt="" className="mt-4 w-full" />,
      title: "Unlimited concurrent sessions",
      description:
        "No limits and restrictions, buy residential IPs, and send an unlimited amount of concurrent sessions.",
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
            d="M10.0808 2C5.47023 2.9359 2 7.01218 2 11.899C2 17.4776 6.52238 22 12.101 22C16.9878 22 21.0641 18.5298 22 13.9192"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M18.9375 18C19.3216 17.9166 19.6771 17.784 20 17.603M14.6875 17.3406C15.2831 17.6015 15.8576 17.7948 16.4051 17.9218M10.8546 14.9477C11.2681 15.238 11.71 15.5861 12.1403 15.8865M3 13.825C3.32234 13.6675 3.67031 13.4868 4.0625 13.3321M6.45105 13C7.01293 13.0624 7.64301 13.2226 8.35743 13.5232"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.5 7C18.5 6.17157 17.8284 5.5 17 5.5C16.1716 5.5 15.5 6.17157 15.5 7C15.5 7.82843 16.1716 8.5 17 8.5C17.8284 8.5 18.5 7.82843 18.5 7Z"
            stroke="#1675FF"
            strokeWidth="1.5"
          />
          <path
            d="M17 2C19.7059 2 22 4.21814 22 6.90917C22 9.64306 19.6685 11.5616 17.515 12.8662C17.3581 12.9539 17.1806 13 17 13C16.8194 13 16.6419 12.9539 16.485 12.8662C14.3355 11.5489 12 9.65251 12 6.90917C12 4.21814 14.2941 2 17 2Z"
            stroke="#1675FF"
            strokeWidth="1.5"
          />
        </svg>
      ),
      img: <Image src={benefit6Img} alt="" className="mt-4 w-full" />,
      title: "Global coverage",
      description:
        "Buy residential IPs that cover 195 locations and offer continent, country, city, state-level, and ZIP code geo-location targeting.",
    },
  ];

  return (
    <section className="pt-20 sm:pt-44 overflow-hidden">
      <div className="mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-accent">
          Residential Proxies
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
