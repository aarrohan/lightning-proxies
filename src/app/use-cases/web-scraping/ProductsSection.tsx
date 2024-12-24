import Image from "next/image";
import product1IconImg from "@/assets/images/product-1-icon.svg";
import product2IconImg from "@/assets/images/product-2-icon.svg";
import product3IconImg from "@/assets/images/product-3-icon.svg";
import product4IconImg from "@/assets/images/product-4-icon.svg";
import product5IconImg from "@/assets/images/product-5-icon.svg";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import Link from "next/link";

interface IProductBigCardProps {
  isBigger?: boolean;
  href: string;
  color: string;
  icon: JSX.Element;
  title: string;
  label?: string;
  description: string;
  price: string;
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

function ProductBigCard({
  isBigger,
  href,
  color,
  icon,
  title,
  label,
  description,
  price,
}: IProductBigCardProps) {
  return (
    <div
      className={`p-8 border border-dark-white bg-off-white rounded-2xl ${
        isBigger
          ? "col-span-2 flex justify-between items-center gap-5"
          : "space-y-5"
      }`}
    >
      <div className={`${isBigger ? "flex items-center gap-5" : "space-y-5"}`}>
        {icon}

        <div>
          <div className="mb-1.5 flex items-center gap-2.5">
            <h3 className="text-2xl font-semibold tracking-[-0.48px]">
              {title}
            </h3>

            {label && (
              <span className="py-1 px-3.5 border border-[#00BB50] bg-[#00BB50]/10 rounded-full text-xs font-semibold text-[#00BB50]">
                {label}
              </span>
            )}
          </div>

          <p className="max-w-[540px] text-base tracking-[-0.16px] text-primary/50">
            {description}
          </p>
        </div>
      </div>

      <Link
        href={href}
        className="active:scale-95 w-fit py-2 px-5 border border-dark-white bg-white rounded-lg text-base font-medium tracking-[-0.16px] flex items-center gap-2.5 duration-300"
        style={{
          color,
        }}
      >
        Starting from {price}
        <svg
          width="13"
          height="11"
          viewBox="0 0 13 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.71967 2.03033C7.42678 1.73744 7.42678 1.26256 7.71967 0.96967C8.01256 0.676777 8.48744 0.676777 8.78033 0.96967L12.7803 4.96967C13.0732 5.26256 13.0732 5.73744 12.7803 6.03033L8.78033 10.0303C8.48744 10.3232 8.01256 10.3232 7.71967 10.0303C7.42678 9.73744 7.42678 9.26256 7.71967 8.96967L10.4393 6.25H0.75C0.335787 6.25 0 5.91421 0 5.5C0 5.08579 0.335787 4.75 0.75 4.75H10.4393L7.71967 2.03033Z"
            fill={color}
          />
        </svg>
      </Link>
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

        <Link href={`${process.env.NEXT_PUBLIC_AUTH_URL}/signup`}>
          <PrimaryBtn extraSmall customClasses="!px-8 !text-xs sm:!text-base">
            Get Started
          </PrimaryBtn>
        </Link>
      </div>
    </div>
  );
}

export default function ProductsSection() {
  const productBigCards: IProductBigCardProps[] = [
    {
      href: "/pricing/residential-proxies",
      color: "#1675FF",
      icon: <Image src={product1IconImg} alt="" className="w-[50px]" />,
      title: "Residential Proxies",
      label: "25% off",
      description:
        "Access 10M+ real home IPs for web scraping, market research, and accessing geo-restricted content with high success rates.",
      price: "$4.5/GB",
    },
    {
      href: "/pricing/datacenter-proxies",
      color: "#12A250",
      icon: <Image src={product2IconImg} alt="" className="w-[50px]" />,
      title: "Datacenter Proxies",
      description:
        "High-speed, cost-effective proxies ideal for bulk data scraping, automation, and general browsing tasks.",
      price: "$2/Day",
    },
    {
      href: "/pricing/isp-proxies",
      color: "#EA7635",
      icon: <Image src={product3IconImg} alt="" className="w-[50px]" />,
      title: "ISP Proxies",
      description:
        "Blending datacenter speed with residential trust, these proxies are perfect for ecommerce, social media management, and competitive analysis.",
      price: " $4/IP",
    },
    {
      href: "/pricing/ipv6-proxies",
      color: "#A400DD",
      icon: <Image src={product4IconImg} alt="" className="w-[50px]" />,
      title: "IPv6 Proxies",
      description:
        "Scalable and affordable proxies with vast IP availability, tailored for large-scale data tasks and web scraping.",
      price: "$10/Day",
    },
    {
      isBigger: true,
      href: "/pricing/mobile-proxies",
      color: "#00C1D1",
      icon: <Image src={product5IconImg} alt="" className="w-[50px]" />,
      title: "Mobile Proxies",
      label: "Newly launched",
      description:
        "Real 4G/LTE mobile IPs designed for bypassing restrictions, social media management, and app testing.",
      price: "$5/GB",
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

        <div className="hidden lg:grid grid-cols-2 gap-4">
          {productBigCards.map((productBigCard, index) => (
            <ProductBigCard key={index} {...productBigCard} />
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
