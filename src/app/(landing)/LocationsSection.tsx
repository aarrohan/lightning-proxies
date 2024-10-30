import Image from "next/image";
import usaImg from "@/assets/images/flags/usa.svg";
import ukImg from "@/assets/images/flags/uk.svg";
import canadaImg from "@/assets/images/flags/canada.svg";
import chinaImg from "@/assets/images/flags/china.svg";
import franceImg from "@/assets/images/flags/france.svg";
import germanyImg from "@/assets/images/flags/germany.svg";
import globeImg from "@/assets/images/globe.svg";
import Link from "next/link";

interface ILocationCardProps {
  img: JSX.Element;
  title: string;
  description: string;
}

function LocationCard({ img, title, description }: ILocationCardProps) {
  return (
    <Link
      href={"/"}
      className="hover:-translate-y-1 py-2 sm:py-3 px-3.5 sm:px-5 border border-dark-white bg-white rounded-lg flex items-center gap-2.5 sm:gap-3.5 duration-200"
      style={{
        boxShadow: `0px 2px 6px -2px rgba(0, 0, 0, 0.05)`,
      }}
    >
      {img}

      <div>
        <h4 className="text-[10px] sm:text-base font-medium tracking-[-0.1px] sm:tracking-[-0.16px]">
          {title}
        </h4>
        <p className="text-[9px] sm:text-sm font-medium tracking-[-0.18px] sm:tracking-[-0.28px] text-primary/50">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default function LocationsSection() {
  const locations: ILocationCardProps[] = [
    {
      img: (
        <Image src={usaImg} alt="" className="w-[28px] sm:w-[42px] h-auto" />
      ),
      title: "United States",
      description: "2,505,230 IPs",
    },
    {
      img: <Image src={ukImg} alt="" className="w-[28px] sm:w-[42px] h-auto" />,
      title: "United Kingdom",
      description: "1,200,505 IPs",
    },
    {
      img: (
        <Image src={canadaImg} alt="" className="w-[28px] sm:w-[42px] h-auto" />
      ),
      title: "Canada",
      description: "353,627 IPs",
    },
    {
      img: (
        <Image src={chinaImg} alt="" className="w-[28px] sm:w-[42px] h-auto" />
      ),
      title: "China",
      description: "353,627 IPs",
    },
    {
      img: (
        <Image src={franceImg} alt="" className="w-[28px] sm:w-[42px] h-auto" />
      ),
      title: "France",
      description: "353,627 IPs",
    },
    {
      img: (
        <Image
          src={germanyImg}
          alt=""
          className="w-[28px] sm:w-[42px] h-auto"
        />
      ),
      title: "Germany",
      description: "353,627 IPs",
    },
  ];

  return (
    <section className="-mt-60 sm:-mt-72">
      <div className="mx-auto container max-w-[1320px] px-5">
        <div className="relative border border-dark-white bg-white rounded-xl sm:rounded-2xl overflow-hidden">
          <div className="relative z-10 p-6 py-8 sm:p-14 sm:pr-0 flex flex-col items-start">
            <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-accent">
              250+ LOCATIONS WORLDWIDE
            </p>

            <h2 className="mb-4 sm:mb-5 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
              Global proxies for scraping <br className="hidden sm:block" />{" "}
              public data and overcoming <br className="hidden sm:block" />{" "}
              <span className="inline-block">geo-restrictions</span>
            </h2>

            <p className="mb-6 sm:mb-8 max-w-[590px] text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/50">
              Get access to 10M+ unique IPs ethically sourced from peer-to-peer
              users fully aware and consented, subscribed to our in-house made
              reward system for participating and sharing internet bandwidth in
              our residential proxy pool.
            </p>

            <div className="mb-6 sm:mb-8 w-full max-w-[700px] grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3.5">
              {locations.map((location, index) => (
                <LocationCard key={index} {...location} />
              ))}
            </div>

            <Link
              href={"/"}
              className="py-3 sm:py-4 px-5 sm:px-6 bg-accent/10 hover:bg-accent/15 rounded-lg sm:rounded-xl flex items-center gap-2.5 sm:gap-3 text-xs sm:text-base font-semibold tracking-[-0.12px] sm:tracking-[-0.16px] text-accent duration-200"
            >
              View All Locations
              <svg
                width="13"
                height="11"
                viewBox="0 0 13 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[11px] sm:w-[13px] h-auto"
              >
                <path
                  d="M7.71967 2.03033C7.42678 1.73744 7.42678 1.26256 7.71967 0.96967C8.01256 0.676777 8.48744 0.676777 8.78033 0.96967L12.7803 4.96967C13.0732 5.26256 13.0732 5.73744 12.7803 6.03033L8.78033 10.0303C8.48744 10.3232 8.01256 10.3232 7.71967 10.0303C7.42678 9.73744 7.42678 9.26256 7.71967 8.96967L10.4393 6.25H0.75C0.335787 6.25 0 5.91421 0 5.5C0 5.08579 0.335787 4.75 0.75 4.75H10.4393L7.71967 2.03033Z"
                  fill="#1675FF"
                />
              </svg>
            </Link>
          </div>

          <Image
            src={"/images/grain.png"}
            alt=""
            fill
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          <Image
            src={globeImg}
            alt=""
            className="absolute -top-[30px] -right-[220px] w-[708px] hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}
