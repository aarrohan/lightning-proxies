"use client";
import { useState } from "react";
import Image from "next/image";
import article1Img from "@/assets/images/articles/1.png";
import article2Img from "@/assets/images/articles/2.png";
import article3Img from "@/assets/images/articles/3.png";
import article4Img from "@/assets/images/article-4.png";
import article5Img from "@/assets/images/article-5.png";
import article6Img from "@/assets/images/article-6.png";
import ArticleCard, {
  IProps as IArticleCard,
} from "@/components/ui/ArticleCard";

export default function ArticlesSection() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [activePage, setActivePage] = useState<number>(1);

  const articles: IArticleCard[] = [
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
      timestamp: "August 27, 2024",
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
      timestamp: "August 27, 2024",
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
      timestamp: "August 27, 2024",
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
      timestamp: "August 27, 2024",
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
      timestamp: "August 27, 2024",
    },
    {
      img: (
        <Image
          src={article6Img}
          alt=""
          className="w-full border border-dark-white rounded-md sm:rounded-lg"
        />
      ),
      title: "Curl with a Proxy and Its 4 Unique Benefits",
      description:
        "Discover the advantages of using cURL with a proxy for your tasks.",
      category: "Announcements",
      timestamp: "August 27, 2024",
    },
  ];

  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto container max-w-[1320px] px-5">
        <div className="relative mb-10 flex justify-center sm:gap-5">
          {["All", "Guide", "Network", "Tutorial", "Learning", "News"].map(
            (tab, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setTabIndex(index)}
                  className={`relative z-10 px-2 sm:px-3 pb-2 border-b text-xs sm:text-base font-medium ${
                    tabIndex === index
                      ? "border-accent text-accent"
                      : "border-transparent text-primary/50"
                  } duration-200`}
                >
                  {tab}
                </button>
              );
            }
          )}

          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dark-white to-transparent"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {articles.map((article, index) => {
            return <ArticleCard key={index} {...article} />;
          })}
        </div>

        <div className="mt-14 flex justify-center gap-2">
          <button
            onClick={() => {
              if (activePage > 1) {
                setActivePage(activePage - 1);
              }
            }}
            className={`w-[30px] sm:w-[44px] aspect-square border border-dark-white bg-white rounded-md flex justify-center items-center text-xs sm:text-base font-medium ${
              activePage <= 1 ? "opacity-50" : ""
            } duration-200`}
          >
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.03033 0.46967C5.73744 0.176777 5.26256 0.176777 4.96967 0.46967L0.96967 4.46967C0.676777 4.76256 0.676777 5.23744 0.96967 5.53033L4.96967 9.53033C5.26256 9.82322 5.73744 9.82322 6.03033 9.53033C6.32322 9.23744 6.32322 8.76256 6.03033 8.46967L2.56066 5L6.03033 1.53033C6.32322 1.23744 6.32322 0.762563 6.03033 0.46967Z"
                fill="#1D2026"
              />
            </svg>
          </button>

          <button
            onClick={() => setActivePage(1)}
            className={`w-[30px] sm:w-[44px] aspect-square border ${
              activePage === 1
                ? "border-dark-white bg-white"
                : "border-transparent"
            } rounded-md flex justify-center items-center text-xs sm:text-base font-medium duration-200`}
          >
            1
          </button>

          <button
            onClick={() => setActivePage(2)}
            className={`w-[30px] sm:w-[44px] aspect-square border ${
              activePage === 2
                ? "border-dark-white bg-white"
                : "border-transparent"
            } rounded-md flex justify-center items-center text-xs sm:text-base font-medium duration-200`}
          >
            2
          </button>

          <button
            onClick={() => setActivePage(3)}
            className={`w-[30px] sm:w-[44px] aspect-square border ${
              activePage === 3
                ? "border-dark-white bg-white"
                : "border-transparent"
            } rounded-md flex justify-center items-center text-xs sm:text-base font-medium duration-200`}
          >
            3
          </button>

          <button
            onClick={() => {
              if (activePage < 3) {
                setActivePage(activePage + 1);
              }
            }}
            className={`w-[30px] sm:w-[44px] aspect-square border border-dark-white bg-white rounded-md flex justify-center items-center text-xs sm:text-base font-medium ${
              activePage >= 3 ? "opacity-50" : ""
            } duration-200`}
          >
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.96967 0.46967C1.26256 0.176777 1.73744 0.176777 2.03033 0.46967L6.03033 4.46967C6.32322 4.76256 6.32322 5.23744 6.03033 5.53033L2.03033 9.53033C1.73744 9.82322 1.26256 9.82322 0.96967 9.53033C0.676777 9.23744 0.676777 8.76256 0.96967 8.46967L4.43934 5L0.96967 1.53033C0.676777 1.23744 0.676777 0.762563 0.96967 0.46967Z"
                fill="#1D2026"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
