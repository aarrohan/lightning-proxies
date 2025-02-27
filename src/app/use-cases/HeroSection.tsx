import Image from "next/image";
import Link from "next/link";
import useCase1Img from "@/assets/images/use-cases/serp-monitoring.png";
import useCase2Img from "@/assets/images/use-cases/web-scraping.png";
import useCase3Img from "@/assets/images/use-cases/market-research.png";
import useCase4Img from "@/assets/images/use-cases/ad-verification.png";
import useCase5Img from "@/assets/images/use-cases/brand-protection.png";

interface IUseCaseCardProps {
  href: string;
  color: string;
  icon: JSX.Element;
  title: string;
  description: string;
  img: JSX.Element;
}

function UseCaseCard({
  href,
  color,
  icon,
  title,
  description,
  img,
}: IUseCaseCardProps) {
  return (
    <div className="w-full min-w-[280px] sm:min-w-[468px] sm:py-6 sm:px-8 sm:border border-dark-white sm:bg-off-white sm:rounded-xl flex flex-col gap-5 sm:gap-0">
      <div className="order-2 sm:order-1">
        <p
          className="mb-3 sm:mb-4 w-fit py-1 sm:py-2 px-2 sm:px-3.5 rounded-md sm:rounded-lg flex items-center gap-1.5 sm:gap-2.5 text-[10px] sm:text-base tracking-[-0.1px] sm:tracking-[-0.16px] font-medium"
          style={{
            backgroundColor: `${color}18`,
            color: color,
          }}
        >
          {icon}
          {title}
        </p>

        <p className="mb-4 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px]">
          {description}
        </p>

        <Link
          href={href}
          className="sm:mb-6 flex items-center gap-2 sm:gap-2.5 text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px] opacity-80 hover:opacity-100 duration-200"
        >
          Learn More{" "}
          <svg
            width="6"
            height="10"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[5px] sm:w-[6px] h-auto"
          >
            <path
              d="M1 8.66138L4.5 4.91138L1 1.41138"
              stroke="#1D2026"
              strokeWidth="1.25"
            />
          </svg>
        </Link>
      </div>

      <div className="order-1 sm:order-2">{img}</div>
    </div>
  );
}

export default function HeroSection() {
  const useCaseCards: IUseCaseCardProps[] = [
    {
      href: "/use-cases/serp-monitoring",
      color: "#12A250",
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[14px] sm:w-[20px] h-auto"
        >
          <path
            d="M5 7.53638C5.66304 7.53638 6.29893 7.27299 6.76777 6.80414C7.23661 6.3353 7.5 5.69942 7.5 5.03638C7.5 4.37334 7.23661 3.73745 6.76777 3.26861C6.29893 2.79977 5.66304 2.53638 5 2.53638C4.33696 2.53638 3.70107 2.79977 3.23223 3.26861C2.76339 3.73745 2.5 4.37334 2.5 5.03638C2.5 5.69942 2.76339 6.3353 3.23223 6.80414C3.70107 7.27299 4.33696 7.53638 5 7.53638ZM5 7.53638V17.5364M15 12.5364C15.663 12.5364 16.2989 12.7998 16.7678 13.2686C17.2366 13.7375 17.5 14.3733 17.5 15.0364C17.5 15.6994 17.2366 16.3353 16.7678 16.8041C16.2989 17.273 15.663 17.5364 15 17.5364C14.337 17.5364 13.7011 17.273 13.2322 16.8041C12.7634 16.3353 12.5 15.6994 12.5 15.0364C12.5 14.3733 12.7634 13.7375 13.2322 13.2686C13.7011 12.7998 14.337 12.5364 15 12.5364ZM15 12.5364V6.28638C15 5.84435 14.8244 5.42043 14.5118 5.10787C14.1993 4.7953 13.7754 4.61971 13.3333 4.61971H11.25"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-green"
          />
          <path
            d="M12.0833 6.70304L10 4.61971L12.0833 2.53638"
            strokeWidth="0.833333"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-green"
          />
        </svg>
      ),
      title: "SERP Monitoring",
      description:
        "SERP data collection made easy with SERP Scraper API and SEO Proxies.",
      img: <Image src={useCase1Img} alt="" className="w-full rounded-lg" />,
    },
    {
      href: "/use-cases/web-scraping",
      color: "#1675FF",
      icon: (
        <svg
          width="21"
          height="22"
          viewBox="0 0 21 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[14px] sm:w-[21px] h-auto"
        >
          <path
            d="M10.25 18.7239C11.2595 18.7239 12.2592 18.525 13.1919 18.1387C14.1246 17.7524 14.972 17.1861 15.6859 16.4723C16.3997 15.7584 16.966 14.9109 17.3523 13.9783C17.7387 13.0456 17.9375 12.0459 17.9375 11.0364C17.9375 10.0268 17.7387 9.02719 17.3523 8.0945C16.966 7.16181 16.3997 6.31434 15.6859 5.60049C14.972 4.88664 14.1246 4.32039 13.1919 3.93405C12.2592 3.54772 11.2595 3.34888 10.25 3.34888M10.25 18.7239C9.24046 18.7239 8.24081 18.525 7.30812 18.1387C6.37543 17.7524 5.52797 17.1861 4.81412 16.4723C4.10027 15.7584 3.53401 14.9109 3.14768 13.9783C2.76134 13.0456 2.5625 12.0459 2.5625 11.0364C2.5625 10.0268 2.76134 9.02719 3.14768 8.0945C3.53401 7.16181 4.10027 6.31434 4.81412 5.60049C5.52797 4.88664 6.37543 4.32039 7.30812 3.93405C8.24081 3.54772 9.24046 3.34888 10.25 3.34888M10.25 18.7239C12.6084 18.7239 13.6163 14.3138 13.6163 11.0364C13.6163 7.75894 12.6084 3.34888 10.25 3.34888M10.25 18.7239C7.89165 18.7239 6.88373 14.3138 6.88373 11.0364C6.88373 7.75894 7.89165 3.34888 10.25 3.34888M2.98958 8.47388H17.5104M2.98958 13.5989H17.5104"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-accent"
          />
        </svg>
      ),
      title: "Web Scraping",
      description:
        "Initiate your web scraping projects with powerful proxy solutions.",
      img: <Image src={useCase2Img} alt="" className="w-full rounded-lg" />,
    },
    {
      href: "/use-cases/market-research",
      color: "#FC721A",
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[14px] sm:w-[20px] h-auto"
        >
          <path
            d="M9.16732 8.5713L10.029 9.55546C10.1082 9.6463 10.2507 9.6388 10.3207 9.54213L12.0707 7.11963M13.7507 17.5363C14.0822 17.5363 14.4001 17.4046 14.6345 17.1702C14.869 16.9358 15.0007 16.6178 15.0007 16.2863C15.0007 15.9548 14.869 15.6368 14.6345 15.4024C14.4001 15.168 14.0822 15.0363 13.7507 15.0363C13.4191 15.0363 13.1012 15.168 12.8668 15.4024C12.6323 15.6368 12.5007 15.9548 12.5007 16.2863C12.5007 16.6178 12.6323 16.9358 12.8668 17.1702C13.1012 17.4046 13.4191 17.5363 13.7507 17.5363ZM7.08398 17.5363C7.41551 17.5363 7.73345 17.4046 7.96787 17.1702C8.20229 16.9358 8.33398 16.6178 8.33398 16.2863C8.33398 15.9548 8.20229 15.6368 7.96787 15.4024C7.73345 15.168 7.41551 15.0363 7.08398 15.0363C6.75246 15.0363 6.43452 15.168 6.2001 15.4024C5.96568 15.6368 5.83398 15.9548 5.83398 16.2863C5.83398 16.6178 5.96568 16.9358 6.2001 17.1702C6.43452 17.4046 6.75246 17.5363 7.08398 17.5363Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-orange"
          />
          <path
            d="M3.09191 4.53638H15.7702C16.9186 4.53638 17.7477 5.59471 17.4327 6.65971L16.0544 11.3264C15.8419 12.043 15.1636 12.5364 14.3919 12.5364H6.76024C5.98774 12.5364 5.30858 12.0422 5.09691 11.3264L3.09191 4.53638ZM3.09191 4.53638L2.50024 2.53638"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-orange"
          />
        </svg>
      ),
      title: "Market Research",
      description:
        "Empower your large-scale market research and data collection with our high-performance proxies.",
      img: <Image src={useCase3Img} alt="" className="w-full rounded-lg" />,
    },
    {
      href: "/use-cases/ad-verification",
      color: "#A400DD",
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[14px] sm:w-[20px] h-auto"
        >
          <path
            d="M8.09311 3.06945C8.57727 2.65695 8.81977 2.45029 9.07311 2.32945C9.3622 2.19132 9.67854 2.11963 9.99894 2.11963C10.3193 2.11963 10.6357 2.19132 10.9248 2.32945C11.1781 2.45029 11.4206 2.65695 11.9048 3.06945C12.4039 3.49445 12.9106 3.70945 13.5773 3.76195C14.2114 3.81279 14.5289 3.83862 14.7939 3.93195C15.4056 4.14862 15.8873 4.62945 16.1031 5.24195C16.1964 5.50612 16.2223 5.82362 16.2731 6.45862C16.3256 7.12529 16.5398 7.63112 16.9648 8.13029C17.3781 8.61445 17.5848 8.85695 17.7056 9.11029C17.9856 9.69612 17.9856 10.377 17.7056 10.962C17.5848 11.2153 17.3781 11.4578 16.9656 11.942C16.553 12.4055 16.309 12.9949 16.2731 13.6145C16.2223 14.2486 16.1964 14.5661 16.1031 14.8311C15.9963 15.1333 15.8232 15.4076 15.5965 15.6342C15.3698 15.8607 15.0953 16.0336 14.7931 16.1403C14.5289 16.2336 14.2114 16.2595 13.5764 16.3103C12.9098 16.3628 12.4039 16.577 11.9048 17.002C11.4206 17.4153 11.1781 17.622 10.9248 17.7428C10.6357 17.8809 10.3193 17.9526 9.99894 17.9526C9.67854 17.9526 9.3622 17.8809 9.07311 17.7428C8.81977 17.622 8.57727 17.4153 8.09311 17.0028C7.62952 16.5902 7.04019 16.3461 6.42061 16.3103C5.78644 16.2595 5.46894 16.2336 5.20394 16.1403C4.9018 16.0334 4.62741 15.8603 4.40088 15.6337C4.17435 15.407 4.00142 15.1325 3.89477 14.8303C3.80144 14.5661 3.77561 14.2486 3.72477 13.6136C3.68902 12.9944 3.44531 12.4054 3.03311 11.942C2.61977 11.4578 2.41311 11.2153 2.29144 10.962C2.15344 10.6728 2.08189 10.3564 2.08203 10.036C2.08218 9.71562 2.15401 9.39932 2.29227 9.11029C2.41311 8.85695 2.61977 8.61445 3.03227 8.13029C3.46561 7.62112 3.67311 7.11112 3.72477 6.45779C3.77561 5.82362 3.80144 5.50612 3.89477 5.24112C4.00161 4.93898 4.17471 4.66459 4.40139 4.43806C4.62807 4.21153 4.90257 4.0386 5.20477 3.93195C5.46894 3.83862 5.78644 3.81279 6.42144 3.76195C7.04065 3.7262 7.62966 3.48166 8.09311 3.06945Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-purple"
          />
          <path
            d="M7.22266 10.5639L8.47682 11.998C8.55935 12.0925 8.66214 12.1671 8.77752 12.2163C8.89289 12.2655 9.01788 12.288 9.14317 12.2821C9.26845 12.2763 9.3908 12.2422 9.5011 12.1825C9.61139 12.1228 9.70678 12.0389 9.78016 11.9372L12.7777 7.78638"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-purple"
          />
        </svg>
      ),
      title: "Ad Verification",
      description:
        "Improve your ad verification projects with our specialized proxy solutions.",
      img: <Image src={useCase4Img} alt="" className="w-full rounded-lg" />,
    },
    {
      href: "/use-cases/brand-protection",
      color: "#D10975",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[14px] sm:w-[20px] h-auto"
        >
          <path
            d="M11.6673 7.08366C11.6673 8.0041 10.9212 8.75033 10.0007 8.75033C9.08015 8.75033 8.33398 8.0041 8.33398 7.08366C8.33398 6.16318 9.08015 5.41699 10.0007 5.41699C10.9212 5.41699 11.6673 6.16318 11.6673 7.08366Z"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-[#D10975]"
          />
          <path
            d="M7.99104 11.3732C7.46705 11.6803 6.09319 12.3074 6.92996 13.0922C7.33872 13.4755 7.79397 13.7497 8.36635 13.7497H11.6323C12.2047 13.7497 12.66 13.4755 13.0688 13.0922C13.9055 12.3074 12.5317 11.6803 12.0077 11.3732C10.7789 10.6529 9.21976 10.6529 7.99104 11.3732Z"
            strokeWidth="1.25"
            strokeLinejoin="round"
            className="stroke-[#D10975]"
          />
          <path
            d="M17.5 9.31974V6.90057C17.5 5.5339 17.5 4.85056 17.1632 4.40473C16.8265 3.9589 16.0651 3.74246 14.5423 3.30958C13.5018 3.01383 12.5847 2.65752 11.8519 2.33223C10.8528 1.88874 10.3533 1.66699 10 1.66699C9.64667 1.66699 9.14717 1.88874 8.14809 2.33223C7.41532 2.65752 6.4982 3.01382 5.45778 3.30958C3.93494 3.74246 3.17352 3.9589 2.83676 4.40473C2.5 4.85056 2.5 5.5339 2.5 6.90057V9.31974C2.5 14.0074 6.71897 16.8199 8.82833 17.9332C9.33425 18.2002 9.58717 18.3337 10 18.3337C10.4128 18.3337 10.6657 18.2002 11.1717 17.9332C13.281 16.8199 17.5 14.0074 17.5 9.31974Z"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-[#D10975]"
          />
        </svg>
      ),
      title: "Brand Protection",
      description:
        "Leverage our advanced proxy technology to safeguard your brand from counterfeiters at all times.",
      img: <Image src={useCase5Img} alt="" className="w-full rounded-lg" />,
    },
  ];

  return (
    <section className="pt-[70px]">
      <div className="mx-auto container max-w-[1080px] pt-20 px-5 flex flex-col items-center">
        <p className="mb-6 py-2 px-3.5 bg-accent/10 rounded-xl text-[11px] sm:text-sm tracking-[-0.11px] sm:tracking-[-0.14px] text-accent">
          Our online referral program is now available.{" "}
          <span className="font-medium">Earn Rewards</span>
        </p>

        <h1 className="mb-6 text-4xl sm:text-[64px] leading-[42px] sm:leading-[72px] tracking-[-1.08px] sm:tracking-[-1.95px] font-semibold text-center">
          Explore Use Cases
        </h1>

        <p className="mb-12 sm:mb-16 max-w-[580px] text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
          Gather data efficiently with the industry-leading proxy network and
          enjoy limitless web scraping solutions on the most intense tasks.
        </p>

        <div className="grid sm:grid-cols-2 gap-y-5 gap-x-4">
          {useCaseCards.map((useCaseCard, index) => (
            <UseCaseCard key={index} {...useCaseCard} />
          ))}
        </div>
      </div>
    </section>
  );
}
