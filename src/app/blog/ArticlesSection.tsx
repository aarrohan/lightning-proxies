"use client";
import { useState } from "react";
import Image from "next/image";
import article4Img from "@/assets/images/article-4.png";
import article5Img from "@/assets/images/article-5.png";
import article6Img from "@/assets/images/article-6.png";
import ArticleCard, {
  IProps as IArticleCard,
} from "@/components/ui/ArticleCard";

export default function ArticlesSection() {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const articles: IArticleCard[] = [
    {
      img: (
        <Image
          src={article4Img}
          alt=""
          className="w-full border border-dark-white rounded-xl"
        />
      ),
      category: "Announcements",
      title: "Proxy vs VPN: The Differences",
      description:
        "Sed varius justo ac sem luctus lobortis. Nunc porta leo nec pretium laoreet.",
      timestamp: "August 27, 2024",
    },
    {
      img: (
        <Image
          src={article5Img}
          alt=""
          className="w-full border border-dark-white rounded-xl"
        />
      ),
      category: "Announcements",
      title: "Differences Between Various Proxy Types",
      description:
        "Sed varius justo ac sem luctus lobortis. Nunc porta leo nec pretium laoreet.",
      timestamp: "August 27, 2024",
    },
    {
      img: (
        <Image
          src={article6Img}
          alt=""
          className="w-full border border-dark-white rounded-xl"
        />
      ),
      category: "Announcements",
      title: "Buy Residential Rotating IPv6 Proxies",
      description:
        "Sed varius justo ac sem luctus lobortis. Nunc porta leo nec pretium laoreet.",
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
      </div>
    </section>
  );
}
