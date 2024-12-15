"use client";
import { useState } from "react";
import Image from "next/image";
import product1IconImg from "@/assets/images/product-1-icon.svg";
import product2IconImg from "@/assets/images/product-2-icon.svg";
import product3IconImg from "@/assets/images/product-3-icon.svg";
import product4IconImg from "@/assets/images/product-4-icon.svg";
import product5IconImg from "@/assets/images/product-5-icon.svg";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import product1Img from "@/assets/images/product-1.png";
import product2Img from "@/assets/images/product-2.png";
import product3Img from "@/assets/images/product-3.png";
import product4Img from "@/assets/images/product-4.png";
import product5Img from "@/assets/images/product-5.png";

interface IProductTabProps {
  isActive?: boolean;
  handleClick?: () => void;
  color: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

interface IProductTabDataProps {
  isActive?: boolean;
  color: string;
  title: string;
  subTitle: string;
  description: string;
  statement1: string;
  statement2: string;
  img: JSX.Element;
}

interface IProductCardProps {
  color: string;
  icon: JSX.Element;
  title: string;
  description: string;
  statement1: string;
  statement2: string;
  price: string;
}

function ProductTab({
  isActive,
  handleClick,
  color,
  icon,
  title,
  description,
}: IProductTabProps) {
  return (
    <div
      onClick={handleClick}
      className="relative py-6 flex flex-col items-center cursor-pointer"
    >
      {icon}

      <h3 className="text-lg font-medium tracking-[-0.18px] text-center">
        {title}
      </h3>

      <p className="text-sm font-medium tracking-[-0.14px] text-primary/60">
        {description}
      </p>

      <div
        className={`absolute bottom-0 left-0 w-full h-[4px] rounded-t-full ${
          !isActive ? "opacity-0" : ""
        } duration-200`}
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}

function ProductTabData({
  isActive,
  color,
  title,
  subTitle,
  description,
  statement1,
  statement2,
  img,
}: IProductTabDataProps) {
  if (!isActive) return;

  return (
    <div className="p-14 bg-gradient-to-b from-transparent to-off-white grid grid-cols-[auto_650px] items-center gap-16">
      <div className="flex flex-col items-start">
        <p
          className="mb-5 py-2 px-3.5 rounded-lg flex items-center gap-2.5 text-sm tracking-[-0.14px] font-medium"
          style={{
            backgroundColor: `${color}18`,
            color: color,
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.49865 2.3814C8.53799 2.04607 8.14399 1.8634 7.94199 2.12274L2.73999 8.79807C2.56799 9.01807 2.71465 9.35274 2.98265 9.35274H7.64132C7.83132 9.35274 7.97865 9.53074 7.95465 9.73274L7.50132 13.6194C7.46132 13.9541 7.85465 14.1367 8.05732 13.8774L13.2587 7.20207C13.4307 6.98207 13.284 6.6474 13.016 6.6474H8.35732C8.16732 6.6474 8.01999 6.4694 8.04399 6.2674L8.49865 2.3814Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {subTitle}
        </p>

        <h3 className="mb-5 text-[34px] font-semibold leading-[42px] tracking-[-0.68px]">
          {title}
        </h3>

        <p className="mb-6 tracking-[-0.16px]">{description}</p>

        <div className="mb-6 space-y-3.5">
          <div className="flex items-center gap-3.5">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[38px] min-w-[38px] h-auto"
            >
              <rect
                width="38"
                height="38"
                rx="10"
                fill={color}
                fillOpacity="0.1"
              />
              <path
                d="M15 17L19 19M15 17V21L19 23M15 17L19 15L23 17M19 19L23 17M19 19V23M19 23L23 21V17M16.4 28C14.16 28 13.04 28 12.184 27.564C11.4314 27.1805 10.8195 26.5686 10.436 25.816C10 24.96 10 23.84 10 21.6M28 21.6C28 23.84 28 24.96 27.564 25.816C27.1805 26.5686 26.5686 27.1805 25.816 27.564C24.96 28 23.84 28 21.6 28M21.6 10C23.84 10 24.96 10 25.816 10.436C26.5686 10.8195 27.1805 11.4314 27.564 12.184C28 13.04 28 14.16 28 16.4M16.4 10C14.16 10 13.04 10 12.184 10.436C11.4314 10.8195 10.8195 11.4314 10.436 12.184C10 13.04 10 14.16 10 16.4"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="tracking-[-0.16px]">{statement1}</p>
          </div>

          <div className="flex items-center gap-3.5">
            <svg
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[38px] min-w-[38px] h-auto"
            >
              <rect
                width="38"
                height="38"
                rx="10"
                fill={color}
                fillOpacity="0.1"
              />
              <path
                d="M28 18.9999H25.038C24.828 18.9999 24.722 18.9999 24.633 19.0419C24.5519 19.0808 24.4826 19.1405 24.432 19.2149C24.371 19.3029 24.34 19.4199 24.277 19.6549L22.46 26.5009C22.227 27.3759 22.111 27.8139 21.936 27.9269C21.8641 27.9747 21.7796 28.0001 21.6932 27.9997C21.6068 27.9994 21.5225 27.9733 21.451 27.9249C21.276 27.8099 21.163 27.3709 20.937 26.4949L17.064 11.5049C16.837 10.6289 16.724 10.1899 16.549 10.0749C16.4775 10.0264 16.3932 10.0004 16.3068 10C16.2204 9.99965 16.1359 10.025 16.064 10.0729C15.889 10.1859 15.773 10.6229 15.54 11.4989L13.723 18.3439C13.66 18.5799 13.629 18.6969 13.569 18.7839C13.5183 18.8588 13.4486 18.9188 13.367 18.9579C13.278 18.9999 13.173 18.9999 12.962 18.9999H10"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="tracking-[-0.16px]">{statement2}</p>
          </div>
        </div>

        <PrimaryBtn customClasses="!py-2.5 !px-12 !text-base !tracking-[-0.16px]">
          Get Started{" "}
          <svg
            width="14"
            height="11"
            viewBox="0 0 14 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.21967 2.03033C7.92678 1.73744 7.92678 1.26256 8.21967 0.96967C8.51256 0.676777 8.98744 0.676777 9.28033 0.96967L13.2803 4.96967C13.5732 5.26256 13.5732 5.73744 13.2803 6.03033L9.28033 10.0303C8.98744 10.3232 8.51256 10.3232 8.21967 10.0303C7.92678 9.73744 7.92678 9.26256 8.21967 8.96967L10.9393 6.25H1.25C0.835787 6.25 0.5 5.91421 0.5 5.5C0.5 5.08579 0.835787 4.75 1.25 4.75H10.9393L8.21967 2.03033Z"
              className="fill-white"
            />
          </svg>
        </PrimaryBtn>
      </div>

      <div className="flex justify-center">{img}</div>
    </div>
  );
}

function ProductCard({
  color,
  icon,
  title,
  description,
  statement1,
  statement2,
  price,
}: IProductCardProps) {
  return (
    <div className="p-5 border border-dark-white rounded-xl">
      <div className="relative mb-4 flex items-center gap-2.5 sm:gap-3">
        <span
          className="absolute top-1/2 -left-5 -translate-y-1/2 w-[4px] h-[32px] rounded-e-full"
          style={{ background: color }}
        ></span>

        {icon}

        <h3 className="text-base sm:text-xl font-semibold tracking-[-0.16px]">
          {title}
        </h3>
      </div>

      <p className="mb-5 text-[11px] sm:text-base !leading-[15px] tracking-[-0.11px] sm:tracking-[-0.15px]">
        {description}
      </p>

      <div className="mb-5 space-y-2.5">
        <div className="flex items-center gap-2.5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[24px] sm:w-[32px] h-auto"
          >
            <rect
              width="38"
              height="38"
              rx="10"
              fill={color}
              fillOpacity="0.1"
            />
            <path
              d="M15 17L19 19M15 17V21L19 23M15 17L19 15L23 17M19 19L23 17M19 19V23M19 23L23 21V17M16.4 28C14.16 28 13.04 28 12.184 27.564C11.4314 27.1805 10.8195 26.5686 10.436 25.816C10 24.96 10 23.84 10 21.6M28 21.6C28 23.84 28 24.96 27.564 25.816C27.1805 26.5686 26.5686 27.1805 25.816 27.564C24.96 28 23.84 28 21.6 28M21.6 10C23.84 10 24.96 10 25.816 10.436C26.5686 10.8195 27.1805 11.4314 27.564 12.184C28 13.04 28 14.16 28 16.4M16.4 10C14.16 10 13.04 10 12.184 10.436C11.4314 10.8195 10.8195 11.4314 10.436 12.184C10 13.04 10 14.16 10 16.4"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-[11px] sm:text-base tracking-[-0.11px] sm:tracking-[-0.15px]">
            {statement1}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <svg
            width="24"
            height="24"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[24px] sm:w-[32px] h-auto"
          >
            <rect
              width="38"
              height="38"
              rx="10"
              fill={color}
              fillOpacity="0.1"
            />
            <path
              d="M28 18.9999H25.038C24.828 18.9999 24.722 18.9999 24.633 19.0419C24.5519 19.0808 24.4826 19.1405 24.432 19.2149C24.371 19.3029 24.34 19.4199 24.277 19.6549L22.46 26.5009C22.227 27.3759 22.111 27.8139 21.936 27.9269C21.8641 27.9747 21.7796 28.0001 21.6932 27.9997C21.6068 27.9994 21.5225 27.9733 21.451 27.9249C21.276 27.8099 21.163 27.3709 20.937 26.4949L17.064 11.5049C16.837 10.6289 16.724 10.1899 16.549 10.0749C16.4775 10.0264 16.3932 10.0004 16.3068 10C16.2204 9.99965 16.1359 10.025 16.064 10.0729C15.889 10.1859 15.773 10.6229 15.54 11.4989L13.723 18.3439C13.66 18.5799 13.629 18.6969 13.569 18.7839C13.5183 18.8588 13.4486 18.9188 13.367 18.9579C13.278 18.9999 13.173 18.9999 12.962 18.9999H10"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-[11px] sm:text-base tracking-[-0.11px] sm:tracking-[-0.15px]">
            {statement2}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <p className="text-[9px] sm:text-sm font-medium tracking-[-0.09px] text-primary/60">
            Starting from
          </p>

          <p className="text-sm sm:text-lg font-semibold tracking-[-0.14px]">
            {price}
          </p>
        </div>

        <PrimaryBtn extraSmall customClasses="!px-8 !text-xs sm:!text-base">
          Get Started
        </PrimaryBtn>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const [activeProductTabIndex, setActiveProductTabIndex] = useState<number>(0);

  const productTabs: IProductTabProps[] = [
    {
      color: "#1675FF",
      icon: <Image src={product1IconImg} alt="" className="mb-2.5 w-[53px]" />,
      title: "Residential Proxies",
      description: "Starting from 4.5$/GB",
    },
    {
      color: "#12A250",
      icon: <Image src={product2IconImg} alt="" className="mb-2.5 w-[53px]" />,
      title: "Datacenter Proxies",
      description: "Starting from 2$/Day",
    },
    {
      color: "#EA7635",
      icon: <Image src={product3IconImg} alt="" className="mb-2.5 w-[53px]" />,
      title: "ISP Proxies",
      description: "Starting from 4$/IP",
    },
    {
      color: "#A400DD",
      icon: <Image src={product4IconImg} alt="" className="mb-2.5 w-[53px]" />,
      title: "IPv6 Proxies",
      description: "Starting from 10$/Day",
    },
    {
      color: "#00C1D1",
      icon: <Image src={product5IconImg} alt="" className="mb-2.5 w-[53px]" />,
      title: "Mobile Proxies",
      description: "Starting from 5$/GB",
    },
  ];

  const productTabDatas: IProductTabDataProps[] = [
    {
      color: "#1675FF",
      title: "High-Speed, Reliable Residential Proxies",
      subTitle: "Guaranteed High Speeds",
      description:
        "Efficient, affordable, and built to deliver fast, secure connections.",
      statement1: "Multiple global locations with guaranteed high performance.",
      statement2:
        "Flexible plans starting from just $4.5/GB, catering to various use cases.",
      img: (
        <Image
          src={product1Img}
          alt=""
          className="w-full border border-primary/10 rounded-2xl"
        />
      ),
    },
    {
      color: "#12A250",
      title: "Reliable Datacenter Proxy Servers",
      subTitle: "Guaranteed High Speeds",
      description:
        "The most affordable proxy solution, perfect for public data scraping and a wide range of use cases.",
      statement1:
        "Five global datacenter locations with over 15.000 IPs available.",
      statement2:
        "Strong performance with speeds of up to 1 Gbps for both download and upload.",
      img: (
        <Image
          src={product2Img}
          alt=""
          className="w-full border border-primary/10 rounded-2xl"
        />
      ),
    },
    {
      color: "#EA7635",
      title: "Static ISP Proxies",
      subTitle: "Guaranteed High Speeds",
      description:
        "Combined Datacenter Speeds with Residential IPs in One Package.",
      statement1: "Worldwide ISP Locations with over 20 countries available.",
      statement2:
        "Customized IP quantities and durations to suit your specific needs.",
      img: (
        <Image
          src={product3Img}
          alt=""
          className="w-full border border-primary/10 rounded-2xl"
        />
      ),
    },
    {
      color: "#A400DD",
      title: "Rotating IPv6 Proxies",
      subTitle: "Guaranteed High Speeds",
      description:
        "Optimized for high-speed scraping on IPv6-enabled targets with unmatched efficiency.",
      statement1:
        "Global coverage with availability in 20+ countries worldwide.",
      statement2:
        "Cost-effective solution with abundant IPv6 IPs and extensive subnet diversity, perfect for efficient scraping.",
      img: (
        <Image
          src={product4Img}
          alt=""
          className="w-full border border-primary/10 rounded-2xl"
        />
      ),
    },
    {
      color: "#00C1D1",
      title: "Real Mobile IP Proxies",
      subTitle: "Guaranteed High Speeds",
      description:
        "Access the largest pool of 500k+ Mobile IPs and easily bypass blocks. Filter by country and ASN - no extra costs.",
      statement1: "3G/4G/5G/LTE cellular networks.",
      statement2: "Accurate geo-location targeting.",
      img: (
        <Image
          src={product5Img}
          alt=""
          className="w-full border border-primary/10 rounded-2xl"
        />
      ),
    },
  ];

  const productCards: IProductCardProps[] = [
    {
      color: "#1675FF",
      icon: (
        <Image src={product1IconImg} alt="" className="w-[35px] sm:w-[45px]" />
      ),
      title: "Residential Proxies",
      description:
        "Efficient, affordable, and built to deliver fast, secure connections.",
      statement1: "Multiple global locations with guaranteed high performance.",
      statement2:
        "Flexible plans starting from just $4.5/GB, catering to various use cases.",
      price: "4.5$/GB",
    },
    {
      color: "#12A250",
      icon: (
        <Image src={product2IconImg} alt="" className="w-[35px] sm:w-[45px]" />
      ),
      title: "Residential Proxies",
      description:
        "The most affordable proxy solution, perfect for public data scraping and a wide range of use cases.",
      statement1:
        "Five global datacenter locations with over 15.000 IPs available.",
      statement2:
        "Strong performance with speeds of up to 1 Gbps for both download and upload.",
      price: "2$/Day",
    },
    {
      color: "#EA7635",
      icon: (
        <Image src={product3IconImg} alt="" className="w-[35px] sm:w-[45px]" />
      ),
      title: "ISP Proxies",
      description:
        "Combined Datacenter Speeds with Residential IPs in One Package.",
      statement1: "Worldwide ISP Locations with over 20 countries available.",
      statement2:
        "Customized IP quantities and durations to suit your specific needs.",
      price: "4$/IP",
    },
    {
      color: "#A400DD",
      icon: (
        <Image src={product4IconImg} alt="" className="w-[35px] sm:w-[45px]" />
      ),
      title: "IPv6 Proxies",
      description:
        "Optimized for high-speed scraping on IPv6-enabled targets with unmatched efficiency.",
      statement1:
        "Global coverage with availability in 20+ countries worldwide.",
      statement2:
        "Cost-effective solution with abundant IPv6 IPs and extensive subnet diversity, perfect for efficient scraping.",
      price: "10$/Day",
    },
    {
      color: "#00C1D1",
      icon: (
        <Image src={product5IconImg} alt="" className="w-[35px] sm:w-[45px]" />
      ),
      title: "Mobile Proxies",
      description:
        "Access the largest pool of 500k+ Mobile IPs and easily bypass blocks. Filter by country and ASN - no extra costs.",
      statement1: "3G/4G/5G/LTE cellular networks.",
      statement2: "Accurate geo-location targeting.",
      price: "5$/GB",
    },
  ];

  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-accent">
          Products
        </p>

        <h2 className="mb-8 sm:mb-14 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          Proxy products to power <br /> your web scraping projects
        </h2>

        <div className="border border-primary/15 rounded-xl hidden lg:block overflow-hidden">
          <div className="border-b border-primary/15 px-8 grid grid-cols-5">
            {productTabs.map((productTab, index) => (
              <ProductTab
                key={index}
                isActive={activeProductTabIndex === index}
                handleClick={() => setActiveProductTabIndex(index)}
                {...productTab}
              />
            ))}
          </div>

          {productTabDatas.map((productTabData, index) => (
            <ProductTabData
              key={index}
              isActive={activeProductTabIndex === index}
              {...productTabData}
            />
          ))}
        </div>

        <div className="block lg:hidden space-y-4">
          {productCards.map((productCard, index) => (
            <ProductCard key={index} {...productCard} />
          ))}
        </div>
      </div>
    </section>
  );
}
