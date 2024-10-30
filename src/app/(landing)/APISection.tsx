import Image from "next/image";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import apiSectionImg1 from "@/assets/images/api-section-1.svg";
import apiSectionImg2 from "@/assets/images/api-section-2.png";
import apiSectionImg3 from "@/assets/images/api-section-3.png";
import apiSectionImg4 from "@/assets/images/api-section-4.png";
import apiSectionCard1BgImg from "@/assets/images/api-section-card-1-bg.png";
import apiSectionCard2BgImg from "@/assets/images/api-section-card-2-bg.png";
import apiSectionCard3BgImg from "@/assets/images/api-section-card-3-bg.png";
import apiSectionBgImg from "@/assets/images/api-section-bg.svg";

interface IAPICardProps {
  img: JSX.Element;
  bgImg: JSX.Element;
  title: string;
  description: string;
}

function ApiCard({ img, bgImg, title, description }: IAPICardProps) {
  return (
    <div className="relative p-6 border border-white/5 bg-[#020D1D] rounded-xl overflow-hidden">
      <div className="relative z-10">
        <div className="flex justify-center">{img}</div>

        <h4 className="mt-2 mb-2 text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
          {title}
        </h4>

        <p className="text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-white/75">
          {description}
        </p>
      </div>

      {bgImg}
    </div>
  );
}

export default function APISection() {
  const apiCards: IAPICardProps[] = [
    {
      img: (
        <Image src={apiSectionImg2} alt="" className="w-full max-w-[366px]" />
      ),
      bgImg: (
        <Image
          src={apiSectionCard1BgImg}
          alt=""
          className="absolute top-0 left-0 w-full object-right-top hidden lg:block"
        />
      ),
      title: "Hassle-free onboarding experience",
      description:
        "Praesent fringilla, lectus ut efficitur iaculis, nisl ante tristique odio.",
    },
    {
      img: (
        <Image src={apiSectionImg3} alt="" className="w-full max-w-[366px]" />
      ),
      bgImg: (
        <Image
          src={apiSectionCard2BgImg}
          alt=""
          className="absolute top-0 left-0 w-full object-center hidden lg:block"
        />
      ),
      title: "Proxy plan management with API",
      description:
        "Praesent fringilla, lectus ut efficitur iaculis, nisl ante tristique odio.",
    },
    {
      img: (
        <Image src={apiSectionImg4} alt="" className="w-full max-w-[366px]" />
      ),
      bgImg: (
        <Image
          src={apiSectionCard3BgImg}
          alt=""
          className="absolute top-0 left-0 w-full object-left-top hidden lg:block"
        />
      ),
      title: "Developer-friendly documentation",
      description:
        "Praesent fringilla, lectus ut efficitur iaculis, nisl ante tristique odio.",
    },
  ];

  return (
    <section
      className="relative pt-20 sm:pt-44 pb-80 sm:pb-96 overflow-hidden"
      style={{
        background: `linear-gradient(180deg, #001430 0%, #000 100%)`,
      }}
    >
      <div className="relative z-10 mx-auto container max-w-[1320px] px-5">
        <div className="mb-16 sm:mb-24 grid lg:grid-cols-[auto_665px] items-center gap-14 sm:gap-20">
          <div className="flex flex-col items-start">
            <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-accent">
              FULL API ACCESS
            </p>

            <h2 className="mb-4 sm:mb-5 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-white">
              Easy integration and seamless management with any language
            </h2>

            <p className="mb-6 sm:mb-8 max-w-[590px] text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-white/80">
              Get access to 10M+ unique IPs ethically sourced from peer-to-peer
              users fully aware and consented, subscribed to our in-house made
              reward system for participating and sharing internet bandwidth in
              our residential proxy pool. <br />
              <br />
              Check out the ready-to-use codes supporting multiple coding
              languages along with examples for an easier integration.
            </p>

            <PrimaryBtn customClasses="!py-2.5 !px-12 !text-xs sm:!text-base !tracking-[-0.12px] sm:!tracking-[-0.16px]">
              Get API Access{" "}
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

          <div className="flex justify-center">
            <Image
              src={apiSectionImg1}
              alt=""
              className="w-full max-w-[665px]"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {apiCards.map((apiCard, index) => {
            return <ApiCard key={index} {...apiCard} />;
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <p className="py-1.5 px-3.5 border border-white/25 rounded-full text-[11px] sm:text-sm tracking-[-0.14px] text-center text-white">
            Looking for the Reseller API?{" "}
            <span className="font-semibold text-accent">Here it is</span>
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
                className="fill-accent"
              />
            </svg>
          </p>
        </div>
      </div>

      <Image
        src={apiSectionBgImg}
        alt=""
        className="absolute -top-[45%] sm:-top-1/2 left-1/2 -translate-x-1/2 w-[1500px] min-w-[1500px] h-auto"
      />
    </section>
  );
}
