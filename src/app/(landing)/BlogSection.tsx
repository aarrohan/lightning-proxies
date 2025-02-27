"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import article1Img from "@/assets/images/articles/1.png";
import article2Img from "@/assets/images/articles/2.png";
import article3Img from "@/assets/images/articles/3.png";
import article4Img from "@/assets/images/articles/4.png";
import article5Img from "@/assets/images/articles/5.png";
import article6Img from "@/assets/images/articles/6.png";

interface IArticleCardProps {
  img: JSX.Element;
  title: string;
  description: string;
  category: string;
  date: string;
}

function ArticleCard({
  img,
  title,
  description,
  category,
  date,
}: IArticleCardProps) {
  return (
    <Link
      href={"/coming-soon"}
      className="w-full min-w-[280px] sm:min-w-[468px] p-3.5 sm:p-5 border border-dark-white bg-off-white rounded-lg sm:rounded-xl"
    >
      {img}

      <div className="mt-3 sm:mt-4 mb-2 sm:mb-3 flex items-center gap-2.5 sm:gap-3">
        <p className="text-[9px] sm:text-sm font-medium tracking-[-0.09px] sm:tracking-[-0.14px] text-primary/50">
          {date}
        </p>

        <div className="w-[2px] sm:w-[3px] aspect-square bg-primary/25 rounded-full"></div>

        <p className="text-[9px] sm:text-sm font-medium tracking-[-0.09px] sm:tracking-[-0.14px] text-primary/50">
          {category}
        </p>
      </div>

      <p className="mb-1.5 sm:mb-2 text-[11px] sm:text-lg font-medium tracking-[-0.11px] sm:tracking-[-0.18px]">
        {title}
      </p>

      <p className="text-[9px] sm:text-base tracking-[-0.09px] sm:tracking-[-0.16px] text-primary/75">
        {description}
      </p>
    </Link>
  );
}

export default function BlogSection() {
  const [widthToScroll, setWidthToScroll] = useState<number>(0);
  const [currentPosition, setCurrentPosition] = useState<number>(1);

  const actualWidthDivRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const actualWidthDiv = actualWidthDivRef.current;

    if (actualWidthDiv) {
      const actualWidth = actualWidthDiv.offsetWidth;

      let cardsWrapperWidth = 468 * 4;
      cardsWrapperWidth += 16 * 3;

      const calculatedWidth = cardsWrapperWidth - actualWidth;

      setWidthToScroll(calculatedWidth / 2);
    }
  }, [actualWidthDivRef]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleNext();
  //   }, 16000);

  //   return () => clearInterval(interval);
  // });

  const handleNext = () => {
    const cardsWrapper = cardsWrapperRef.current;

    if (cardsWrapper) {
      if (currentPosition <= 6) {
        setCurrentPosition(currentPosition + 1);
        cardsWrapper.style.transform = `translateX(-${
          widthToScroll * currentPosition
        }px)`;
      } else {
        setCurrentPosition(1);
        cardsWrapper.style.transform = "translateX(0)";
      }
    }
  };

  const handlePrev = () => {
    const cardsWrapper = cardsWrapperRef.current;

    if (cardsWrapper) {
      if (currentPosition > 1) {
        setCurrentPosition(currentPosition - 1);
        cardsWrapper.style.transform = `translateX(-${
          widthToScroll * (currentPosition - 2)
        }px)`;
      }
    }
  };

  const articleCards: IArticleCardProps[] = [
    {
      img: (
        <Image
          src={article1Img}
          alt=""
          className="w-full border border-dark-white rounded-md sm:rounded-lg"
        />
      ),
      title: "Amplifying YouTube Access",
      description:
        "Explore how YouTube proxies can enhance access and performance.",
      category: "Announcements",
      date: "August 27, 2024",
    },
    {
      img: (
        <Image
          src={article2Img}
          alt=""
          className="w-full border border-dark-white rounded-md sm:rounded-lg"
        />
      ),
      title: "Residential vs Datacenter",
      description:
        "Understand the key differences between residential and datacenter proxies.",
      category: "Announcements",
      date: "August 27, 2024",
    },
    {
      img: (
        <Image
          src={article3Img}
          alt=""
          className="w-full border border-dark-white rounded-md sm:rounded-lg"
        />
      ),
      title: "Proxy vs VPN: The Main Differences",
      description:
        "Learn how proxies and VPNs differ to make the best choice for your needs.",
      category: "Announcements",
      date: "August 27, 2024",
    },
    {
      img: (
        <Image
          src={article4Img}
          alt=""
          className="w-full border border-dark-white rounded-md sm:rounded-lg"
        />
      ),
      title: "Effective Ad Verification Using Residential Proxies",
      description:
        "Use residential proxies to ensure ad campaigns are running as intended.",
      category: "Announcements",
      date: "August 27, 2024",
    },
    {
      img: (
        <Image
          src={article5Img}
          alt=""
          className="w-full border border-dark-white rounded-md sm:rounded-lg"
        />
      ),
      title: "The Ultimate Guide to Proxy IP Types",
      description:
        "A complete guide to understanding the different types of proxy IPs.",
      category: "Announcements",
      date: "August 27, 2024",
    },
    {
      img: (
        <Image
          src={article6Img}
          alt=""
          className="w-full border border-dark-white rounded-md sm:rounded-lg"
        />
      ),
      title: "10 Things to Consider when Selecting a Proxy Provider",
      description:
        "Things you should know before choosing your proxy supplier.",
      category: "Announcements",
      date: "August 27, 2024",
    },
  ];

  return (
    <section className="pt-20 sm:pt-44 overflow-hidden">
      <div className="mx-auto container max-w-[1320px] px-5">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-yellow">
          BLOGS
        </p>

        <h2 className="mb-8 sm:mb-14 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          Get insights about our <br /> proxy network
        </h2>

        <div className="hidden sm:block">
          <div
            ref={cardsWrapperRef}
            className="relative w-it flex gap-4 duration-500 will-change-transform"
          >
            {articleCards.map((articleCard, index) => (
              <ArticleCard key={index} {...articleCard} />
            ))}
          </div>

          <div ref={actualWidthDivRef} className="w-full"></div>

          <div className="mt-6 flex justify-between">
            <div
              onClick={handlePrev}
              className={`active:scale-95 w-[35px] h-[35px] border border-dark-white bg-off-white rounded-full flex justify-center items-center ${
                currentPosition === 1 ? "opacity-50 pointer-events-none" : ""
              } duration-200 cursor-pointer`}
            >
              <svg
                width="9"
                height="14"
                viewBox="0 0 9 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.85449 13.0959L2.18177 7.01802L7.85449 1.3453"
                  stroke="#1D2026"
                  strokeWidth="2.02597"
                />
              </svg>
            </div>

            <div
              onClick={handleNext}
              className="active:scale-95 w-[35px] h-[35px] border border-dark-white bg-off-white rounded-full flex justify-center items-center duration-200 cursor-pointer"
            >
              <svg
                width="9"
                height="14"
                viewBox="0 0 9 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.14551 13.0959L6.81823 7.01802L1.14551 1.3453"
                  stroke="#1D2026"
                  strokeWidth="2.02597"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="hide-scrollbar w-[100vw] px-5 flex sm:hidden gap-5 overflow-x-scroll">
        {articleCards.map((articleCard, index) => (
          <ArticleCard key={index} {...articleCard} />
        ))}
      </div>
    </section>
  );
}
