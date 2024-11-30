"use client";
import Image from "next/image";
import article4Img from "@/assets/images/article-4.png";
import article5Img from "@/assets/images/article-5.png";
import article6Img from "@/assets/images/article-6.png";
import ArticleCard, {
  IProps as IArticleCard,
} from "@/components/ui/ArticleCard";

export default function ArticlesSection() {
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
    <section className="pt-5 sm:pt-8 pb-20 sm:pb-32">
      <div className="mx-auto container max-w-[1320px] px-5">
        <div className="mb-12 sm:mb-16 w-full h-px bg-dark-white"></div>

        <div className="grid lg:grid-cols-3 gap-5">
          {articles.map((article, index) => {
            return <ArticleCard key={index} {...article} />;
          })}
        </div>
      </div>
    </section>
  );
}
