import Image from "next/image";
import trustPilotStarsImg from "@/assets/images/trustpilot-stars.svg";
import trustPilotImg from "@/assets/images/trustpilot.svg";
import reviewCardBgImg from "@/assets/images/review-card-bg.svg";
import Link from "next/link";

interface IReviewCardProps {
  title: string;
  description: JSX.Element;
  username: string;
}

function ReviewCard({ title, description, username }: IReviewCardProps) {
  return (
    <Link
      href={"/"}
      className="relative hover:-translate-y-1 w-full min-w-[280px] p-6 sm:p-8 border border-dark-white hover:shadow-xl hover:shadow-primary/5 rounded-lg sm:rounded-xl overflow-hidden duration-300"
    >
      <div className="relative z-10">
        <Image
          src={trustPilotStarsImg}
          alt=""
          className="mb-5 w-auto h-[16px] sm:h-[25px]"
        />

        <h4 className="text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px]">
          {title}
        </h4>

        <p className="mt-3 mb-4 text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.16px] text-primary/50">
          {description}
        </p>

        <p className="text-xs sm:text-base font-medium tracking-[-0.16px] text-primary">
          @{username}
        </p>
      </div>

      <Image
        src={reviewCardBgImg}
        alt=""
        className="absolute top-0 left-0 w-full"
      />

      <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-[#16D857]/15 to-transparent"></div>
    </Link>
  );
}

export default function ReviewsSection() {
  const reviews: IReviewCardProps[] = [
    {
      title: "If you need Mobile proxies in the USA",
      description: (
        <>
          If you need mobile proxies in USA, go for it! I'm using them for app
          testing, and the results are super accurate. Plus, they offer new IPs
          with each request, which has been amazing for my work.
        </>
      ),
      username: "Xiaobo",
    },
    {
      title: "We’ve been using the Residential....",
      description: (
        <>
          We've been using the Residential Proxies for Bing scraping and they
          perform as we expected, success rate is great considering we use over
          50GB per day. Keep up with the good work!
        </>
      ),
      username: "Audrius Norkus",
    },
    {
      title: "I’m based in Spain but needed UK...",
      description: (
        <>
          I'm based in Spain but needed UK proxies for my work, and these guys
          delivered big time! Proxies are fast and reliable, and customer
          support was fast, especially Dre, helped me quick with some questions
          I had.
        </>
      ),
      username: "Alvaro Rubio",
    },
  ];

  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5">
        <div className="mb-8 sm:mb-14 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4">
          <div>
            <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-green">
              BENEFITS
            </p>

            <h2 className="text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
              What our customers say
            </h2>
          </div>

          <Link
            href={"/"}
            className="py-[2px] sm:py-1 px-3 sm:px-5 border border-dark-white bg-gradient-to-b from-white to-off-white rounded-md sm:rounded-lg flex items-center gap-4"
          >
            <p className="text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px]">
              Excellent
            </p>

            <Image
              src={trustPilotStarsImg}
              alt=""
              className="w-auto h-[16px] sm:h-[25px]"
            />

            <Image
              src={trustPilotImg}
              alt=""
              className="w-auto h-[28px] sm:h-[35px]"
            />
          </Link>
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>

      <div className="hide-scrollbar w-[100vw] px-5 flex lg:hidden gap-5 overflow-x-scroll">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>

      <div className="mt-8 mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
        <Link
          href={"/"}
          className="py-1.5 px-3.5 border border-dark-white rounded-full text-[11px] sm:text-sm tracking-[-0.14px] text-center"
        >
          View all reviews on Trustpilot.{" "}
          <span className="font-semibold text-green">Read more</span>
          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[10px] sm:w-[13px] inline-block ml-2"
          >
            <path
              d="M7.71967 1.53033C7.42678 1.23744 7.42678 0.762563 7.71967 0.46967C8.01256 0.176777 8.48744 0.176777 8.78033 0.46967L12.7803 4.46967C13.0732 4.76256 13.0732 5.23744 12.7803 5.53033L8.78033 9.53033C8.48744 9.82322 8.01256 9.82322 7.71967 9.53033C7.42678 9.23744 7.42678 8.76256 7.71967 8.46967L10.4393 5.75H0.75C0.335787 5.75 0 5.41421 0 5C0 4.58579 0.335787 4.25 0.75 4.25H10.4393L7.71967 1.53033Z"
              className="fill-green"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
