import Image from "next/image";
import benefit1Img from "@/assets/images/isp-proxies-benefit-1.svg";
import benefit2Img from "@/assets/images/isp-proxies-benefit-2.svg";
import benefit3Img from "@/assets/images/isp-proxies-benefit-3.svg";

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
          <p className="text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-[#FF792E]">
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
            d="M8.62814 12.6738H8.16918C6.68545 12.6738 5.94358 12.6738 5.62736 12.1846C5.31114 11.6955 5.61244 11.014 6.21504 9.65107L8.02668 5.55347C8.57457 4.31424 8.84852 3.69462 9.37997 3.34743C9.91142 3.00024 10.5859 3.00024 11.935 3.00024H14.0244C15.6632 3.00024 16.4826 3.00024 16.7916 3.53559C17.1007 4.07094 16.6942 4.78612 15.8811 6.21647L14.8092 8.10212C14.405 8.81319 14.2029 9.16873 14.2057 9.45976C14.2094 9.83799 14.4105 10.1864 14.7354 10.3772C14.9854 10.5241 15.3927 10.5241 16.2074 10.5241C17.2373 10.5241 17.7523 10.5241 18.0205 10.7024C18.3689 10.934 18.5513 11.3484 18.4874 11.7634C18.4382 12.0828 18.0918 12.4658 17.399 13.2319L11.8639 19.3525C10.7767 20.5547 10.2331 21.1558 9.86807 20.9656C9.50303 20.7753 9.67833 19.9824 10.0289 18.3964L10.7157 15.2898C10.9826 14.0822 11.1161 13.4784 10.7951 13.0761C10.4741 12.6738 9.85877 12.6738 8.62814 12.6738Z"
            stroke="#FF792E"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ),
      img: <Image src={benefit1Img} alt="" className="-mb-px w-full" />,
      title: "Lightning fast",
      description:
        "Well-suited for heavy traffic loads and time-sensitive tasks with exceptional response times.",
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
            d="M3.51819 10.306C3.13013 9.232 2.9361 8.695 3.01884 8.35089C3.10933 7.97451 3.377 7.68108 3.71913 7.5832C4.03193 7.4937 4.51853 7.70997 5.49173 8.14251C6.35253 8.5251 6.78293 8.71639 7.18732 8.70575C7.63257 8.69403 8.06088 8.51548 8.4016 8.19955C8.71105 7.91261 8.91861 7.45537 9.33373 6.54088L10.2486 4.52549C11.0128 2.84199 11.3949 2.00024 12 2.00024C12.6051 2.00024 12.9872 2.84199 13.7514 4.52549L14.6663 6.54088C15.0814 7.45537 15.289 7.91261 15.5984 8.19955C15.9391 8.51548 16.3674 8.69403 16.8127 8.70575C17.2171 8.71639 17.6475 8.5251 18.5083 8.14251C19.4815 7.70997 19.9681 7.4937 20.2809 7.5832C20.623 7.68108 20.8907 7.97451 20.9812 8.35089C21.0639 8.695 20.8699 9.232 20.4818 10.3059L18.8138 14.9224C18.1002 16.8972 17.7435 17.8846 16.9968 18.4424C16.2502 19.0002 15.2854 19.0002 13.3558 19.0002H10.6442C8.71459 19.0002 7.74977 19.0002 7.00315 18.4424C6.25654 17.8846 5.89977 16.8972 5.18622 14.9224L3.51819 10.306Z"
            stroke="#FF792E"
            strokeWidth="1.5"
          />
          <path
            d="M12 14.0002H12.009"
            stroke="#FF792E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 22.0002H17"
            stroke="#FF792E"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      img: <Image src={benefit2Img} alt="" className="w-full" />,
      title: "Premium ISPs",
      description:
        "Residential-like IPs sourced from top-tier ASN providers: AT&T, Comcast, Lumen, Frontier, and more.",
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
            d="M13.5 13.0002L17 9.00024M14 15.0002C14 16.1048 13.1046 17.0002 12 17.0002C10.8954 17.0002 10 16.1048 10 15.0002C10 13.8956 10.8954 13.0002 12 13.0002C13.1046 13.0002 14 13.8956 14 15.0002Z"
            stroke="#FF792E"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 12.0002C6 8.68653 8.68629 6.00024 12 6.00024C13.0929 6.00024 14.1175 6.29242 15 6.80293"
            stroke="#FF792E"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M2.5 12.0003C2.5 7.52197 2.5 5.2828 3.89124 3.89155C5.28249 2.50031 7.52166 2.50031 12 2.50031C16.4783 2.50031 18.7175 2.50031 20.1087 3.89155C21.5 5.2828 21.5 7.52197 21.5 12.0003C21.5 16.4786 21.5 18.7178 20.1087 20.109C18.7175 21.5003 16.4783 21.5003 12 21.5003C7.52166 21.5003 5.28249 21.5003 3.89124 20.109C2.5 18.7178 2.5 16.4786 2.5 12.0003Z"
            stroke="#FF792E"
            strokeWidth="1.5"
          />
        </svg>
      ),
      img: <Image src={benefit3Img} alt="" className="-mb-px w-full" />,
      title: "Unlimited bandwidth",
      description:
        "No additional charges on traffic expenditure with the Pay-per-IP pricing model.",
    },
  ];

  return (
    <section className="pt-20 sm:pt-44 overflow-hidden">
      <div className="mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-[#FF792E]">
          ISP PROXIES
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
