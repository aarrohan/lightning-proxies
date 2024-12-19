import Image from "next/image";
import detailsImg from "@/assets/images/brand-protection-details.svg";

interface IInfoCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

function InfoCard({ icon, title, description }: IInfoCardProps) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2 sm:gap-2.5">
        {icon}

        <h3 className="text-xs sm:text-base font-medium tracking-[-0.16px] text-[#D10975]">
          {title}
        </h3>
      </div>

      <p className="text-[11px] sm:text-base tracking-[-0.11px] sm:tracking-[-0.16px] text-primary">
        {description}
      </p>
    </div>
  );
}

export default function DetailsSection() {
  const infoCards: IInfoCardProps[] = [
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[18px] sm:w-[24px] h-auto"
        >
          <path
            d="M22 12.0352C22 6.51231 17.5228 2.03516 12 2.03516C6.47715 2.03516 2 6.51231 2 12.0352C2 17.558 6.47715 22.0352 12 22.0352"
            stroke="#D10975"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M20 5.73415C19.0653 5.80152 17.8681 6.1634 17.0379 7.23793C15.5385 9.17877 14.039 9.34072 13.0394 8.69377C11.5399 7.72336 12.8 6.15152 11.0401 5.29731C9.89313 4.74058 9.73321 3.22561 10.3716 2.03516"
            stroke="#D10975"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M2 11.0352C2.7625 11.6973 3.83046 12.3034 5.08874 12.3034C7.68843 12.3034 8.20837 12.8001 8.20837 14.787C8.20837 16.7739 8.20837 16.7739 8.72831 18.264C9.06651 19.2333 9.18472 20.2026 8.5106 21.0352"
            stroke="#D10975"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M19.8988 19.964L22 22.0352M21.1083 17.0811C21.1083 19.3157 19.2932 21.1271 17.0541 21.1271C14.8151 21.1271 13 19.3157 13 17.0811C13 14.8466 14.8151 13.0352 17.0541 13.0352C19.2932 13.0352 21.1083 14.8466 21.1083 17.0811Z"
            stroke="#D10975"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Reliable Infrastructure",
      description:
        "Ethically sourced IPs and top-quality data center partners globally.",
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[18px] sm:w-[24px] h-auto"
        >
          <path
            d="M19 20.5352C19.4255 20.3442 19.7894 20.0964 20.1088 19.7747C21.5 18.3731 21.5 16.1173 21.5 11.6057C21.5 7.0941 21.5 4.8383 20.1088 3.43673C18.7175 2.03516 16.4783 2.03516 12 2.03516C7.52166 2.03516 5.28249 2.03516 3.89124 3.43673C2.5 4.8383 2.5 7.0941 2.5 11.6057C2.5 16.1173 2.5 18.3731 3.89124 19.7747C4.21056 20.0964 4.57453 20.3442 5 20.5352"
            stroke="#D10975"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M2.5 8.53516H21.5"
            stroke="#D10975"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M7 5.53516H7.00898"
            stroke="#D10975"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 5.53516H11.009"
            stroke="#D10975"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.2596 16.4131C9.1796 16.4131 8.71714 17.1926 8.59714 17.6724C8.47714 18.1521 8.47714 19.8911 8.54914 20.6106C8.78914 21.5101 9.38914 21.8819 9.97714 22.0018C10.5171 22.0498 12.7971 22.0318 13.4571 22.0318C14.4171 22.0498 15.1371 21.69 15.4371 20.6106C15.4971 20.2508 15.5571 18.272 15.4071 17.6724C15.0891 16.7129 14.36 16.4131 13.76 16.4131M10.2596 16.4131H13.76M10.2596 16.4131C10.2596 16.3531 10.2582 15.5867 10.2596 15.1524C10.2609 14.7555 10.226 14.3729 10.4156 14.0227C11.126 12.6099 13.166 12.7538 13.67 14.193C13.7573 14.4299 13.7626 14.8055 13.76 15.1524C13.7567 15.5956 13.76 16.4131 13.76 16.4131"
            stroke="#D10975"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Geo-location targeting",
      description:
        "Choose from 180+ locations worldwide, by city, state and ASN.",
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[18px] sm:w-[24px] h-auto"
        >
          <path
            d="M15 2.49296C14.053 2.19551 13.0452 2.03516 12 2.03516C6.47715 2.03516 2 6.51231 2 12.0352C2 17.558 6.47715 22.0352 12 22.0352C17.5228 22.0352 22 17.558 22 12.0352C22 10.99 21.8396 9.9822 21.5422 9.03516"
            stroke="#D10975"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8.5 9.53516L12 13.0352L21.0002 3.03516"
            stroke="#D10975"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "High succes rates",
      description:
        "Our Residential proxy network ensures success rates of up to 99%.",
    },
    {
      icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[18px] sm:w-[24px] h-auto"
        >
          <path
            d="M2.5 12.0352C2.5 7.55682 2.5 5.31765 3.89124 3.9264C5.28249 2.53516 7.52166 2.53516 12 2.53516C16.4783 2.53516 18.7175 2.53516 20.1088 3.9264C21.5 5.31765 21.5 7.55682 21.5 12.0352C21.5 16.5135 21.5 18.7527 20.1088 20.144C18.7175 21.5352 16.4783 21.5352 12 21.5352C7.52166 21.5352 5.28249 21.5352 3.89124 20.144C2.5 18.7527 2.5 16.5135 2.5 12.0352Z"
            stroke="#D10975"
            strokeWidth="1.5"
          />
          <path
            d="M16 16.0352C16.6161 16.0352 17.1155 15.5235 17.1155 14.8923V13.6514C17.1155 13.3483 17.233 13.0576 17.4422 12.8433L17.8366 12.4393C18.0545 12.2161 18.0545 11.8543 17.8366 11.6311L17.4422 11.2271C17.233 11.0128 17.1155 10.7221 17.1155 10.419V9.17802C17.1155 8.54683 16.6161 8.03516 16 8.03516"
            stroke="#D10975"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 16.0352C7.38392 16.0352 6.88448 15.5235 6.88448 14.8923V13.6514C6.88448 13.3483 6.76696 13.0576 6.55776 12.8433L6.16336 12.4393C5.94555 12.2161 5.94555 11.8543 6.16336 11.6311L6.55776 11.2271C6.76696 11.0128 6.88448 10.7221 6.88448 10.419V9.17802C6.88448 8.54683 7.38392 8.03516 8 8.03516"
            stroke="#D10975"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 12.0352H10.009M13.991 12.0352H14"
            stroke="#D10975"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Multiple protocols",
      description:
        "We provide proxy support for HTTP, HTTPS and SOCKS5 protocols.",
    },
  ];

  return (
    <section className="sm:pt-44 pb-20 sm:pb-44 bg-gradient-to-b from-transparent to-off-white">
      <div className="mx-auto container max-w-[1320px] px-5">
        <div className="grid lg:grid-cols-2 gap-y-10 gap-x-16 items-center">
          <div className="order-2 sm:order-1 flex">
            <Image
              src={detailsImg}
              alt=""
              className="w-full border border-dark-white rounded-xl"
            />
          </div>

          <div className="order-1 sm:order-2">
            <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-[#D10975]">
              BRAND PROTECTION
            </p>

            <h2 className="mb-6 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
              Secure Your Brand Online with Powerful Proxy Solutions
            </h2>

            <p className="mb-6 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
              Protect your brand from counterfeit websites, unauthorized ads,
              and online fraud with Residential and Datacenter Proxies. Gather
              real-time threat data, monitor global markets, and ensure your
              brand’s reputation stays intact without IP blocks or CAPTCHAs.
            </p>

            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] sm:w-[24px] h-auto"
                >
                  <path
                    d="M22 12.0352C22 6.51231 17.5228 2.03516 12 2.03516C6.47715 2.03516 2 6.51231 2 12.0352C2 17.558 6.47715 22.0352 12 22.0352C17.5228 22.0352 22 17.558 22 12.0352Z"
                    stroke="#D10975"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 12.5352L10.5 15.0352L16 9.03516"
                    stroke="#D10975"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
                  Access Real-Time Threat Data.
                </p>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] sm:w-[24px] h-auto"
                >
                  <path
                    d="M22 12.0352C22 6.51231 17.5228 2.03516 12 2.03516C6.47715 2.03516 2 6.51231 2 12.0352C2 17.558 6.47715 22.0352 12 22.0352C17.5228 22.0352 22 17.558 22 12.0352Z"
                    stroke="#D10975"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 12.5352L10.5 15.0352L16 9.03516"
                    stroke="#D10975"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
                  Monitor and Detect Fake Websites.
                </p>
              </div>

              <div className="flex items-center gap-2 sm:gap-2.5">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] sm:w-[24px] h-auto"
                >
                  <path
                    d="M22 12.0352C22 6.51231 17.5228 2.03516 12 2.03516C6.47715 2.03516 2 6.51231 2 12.0352C2 17.558 6.47715 22.0352 12 22.0352C17.5228 22.0352 22 17.558 22 12.0352Z"
                    stroke="#D10975"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 12.5352L10.5 15.0352L16 9.03516"
                    stroke="#D10975"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
                  Bypass Blocks and CAPTCHAs.
                </p>
              </div>
            </div>

            <button className="active:scale-95 w-full sm:w-fit py-2.5 sm:py-2 px-5 border border-dark-white bg-white rounded-lg flex justify-center items-center gap-2.5 text-xs sm:text-base font-medium tracking-[-0.16px] text-[#D10975] duration-300">
              View all use cases
              <svg
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[10px] sm:w-[13px] h-auto"
              >
                <path
                  d="M7.71967 2.03033C7.42678 1.73744 7.42678 1.26256 7.71967 0.96967C8.01256 0.676777 8.48744 0.676777 8.78033 0.96967L12.7803 4.96967C13.0732 5.26256 13.0732 5.73744 12.7803 6.03033L8.78033 10.0303C8.48744 10.3232 8.01256 10.3232 7.71967 10.0303C7.42678 9.73744 7.42678 9.26256 7.71967 8.96967L10.4393 6.25H0.75C0.335787 6.25 0 5.91421 0 5.5C0 5.08579 0.335787 4.75 0.75 4.75H10.4393L7.71967 2.03033Z"
                  fill="#D10975"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-10 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {infoCards.map((card, index) => (
            <InfoCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
