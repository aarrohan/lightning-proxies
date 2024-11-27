import Image from "next/image";
import Link from "next/link";
import location1Img from "@/assets/images/menu-location-1.svg";
import location2Img from "@/assets/images/menu-location-2.svg";
import location3Img from "@/assets/images/menu-location-3.svg";
import location4Img from "@/assets/images/menu-location-4.svg";
import location5Img from "@/assets/images/menu-location-5.svg";
import location6Img from "@/assets/images/menu-location-6.svg";
import location1BgImg from "@/assets/images/location-1-bg.png";
import location2BgImg from "@/assets/images/location-2-bg.png";
import location3BgImg from "@/assets/images/location-3-bg.png";
import location4BgImg from "@/assets/images/location-4-bg.png";
import location5BgImg from "@/assets/images/location-5-bg.png";
import location6BgImg from "@/assets/images/location-6-bg.png";

interface ILocationCard {
  img: JSX.Element;
  bgImg: JSX.Element;
  title: string;
  href: string;
  ips: string;
}

function LocationCard({ img, bgImg, title, href, ips }: ILocationCard) {
  return (
    <Link
      href={href}
      className="relative hover:-translate-y-1 py-4 sm:py-6 px-6 sm:px-8 border border-dark-white bg-white rounded-xl overflow-hidden duration-200"
    >
      {bgImg}

      <div className="relative z-10">
        {img}

        <h3 className="mt-3 mb-1 text-sm sm:text-lg font-semibold tracking-[-0.14px] sm:tracking-[-0.2px]">
          {title}
        </h3>

        <p className="flex items-center gap-2 text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.18px] text-primary/75">
          {ips}{" "}
          <svg
            width="6"
            height="11"
            viewBox="0 0 6 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[4px] sm:w-[6px] h-auto"
          >
            <path
              opacity="0.75"
              d="M0.21967 2.19635C-0.0732234 1.90345 -0.0732234 1.42858 0.21967 1.13569C0.512563 0.842792 0.987437 0.842792 1.28033 1.13569L5.28033 5.13569C5.57322 5.42858 5.57322 5.90345 5.28033 6.19635L1.28033 10.1963C0.987437 10.4892 0.512563 10.4892 0.21967 10.1963C-0.0732234 9.90345 -0.0732234 9.42858 0.21967 9.13569L2.93934 6.41602L3.5 5.66602L2.93934 4.91602L0.21967 2.19635Z"
              fill="#1D2026"
            />
          </svg>
        </p>
      </div>
    </Link>
  );
}

export default function LocationsSection() {
  const locations: ILocationCard[] = [
    {
      img: (
        <Image
          src={location1Img}
          alt=""
          className="w-[48px] sm:w-[64px] border border-dark-white rounded-md"
        />
      ),
      bgImg: (
        <Image
          src={location1BgImg}
          alt=""
          className="absolute top-0 right-0 w-auto h-full"
        />
      ),
      title: "United States",
      href: "/locations/usa",
      ips: "1,200,505 IPs",
    },
    {
      img: (
        <Image
          src={location2Img}
          alt=""
          className="w-[48px] sm:w-[64px] border border-dark-white rounded-md"
        />
      ),
      bgImg: (
        <Image
          src={location2BgImg}
          alt=""
          className="absolute top-0 right-0 w-auto h-full"
        />
      ),
      title: "United Kingdom",
      href: "/locations/usa",
      ips: "1,200,505 IPs",
    },
    {
      img: (
        <Image
          src={location3Img}
          alt=""
          className="w-[48px] sm:w-[64px] border border-dark-white rounded-md"
        />
      ),
      bgImg: (
        <Image
          src={location3BgImg}
          alt=""
          className="absolute top-0 right-0 w-auto h-full"
        />
      ),
      title: "Germany",
      href: "/locations/usa",
      ips: "1,200,505 IPs",
    },
    {
      img: (
        <Image
          src={location4Img}
          alt=""
          className="w-[48px] sm:w-[64px] border border-dark-white rounded-md"
        />
      ),
      bgImg: (
        <Image
          src={location4BgImg}
          alt=""
          className="absolute top-0 right-0 w-auto h-full"
        />
      ),
      title: "France",
      href: "/locations/usa",
      ips: "1,200,505 IPs",
    },
    {
      img: (
        <Image
          src={location5Img}
          alt=""
          className="w-[48px] sm:w-[64px] border border-dark-white rounded-md"
        />
      ),
      bgImg: (
        <Image
          src={location5BgImg}
          alt=""
          className="absolute top-0 right-0 w-auto h-full"
        />
      ),
      title: "Canada",
      href: "/locations/usa",
      ips: "1,200,505 IPs",
    },
    {
      img: (
        <Image
          src={location6Img}
          alt=""
          className="w-[48px] sm:w-[64px] border border-dark-white rounded-md"
        />
      ),
      bgImg: (
        <Image
          src={location6BgImg}
          alt=""
          className="absolute top-0 right-0 w-auto h-full"
        />
      ),
      title: "China",
      href: "/locations/usa",
      ips: "1,200,505 IPs",
    },
  ];

  return (
    <section className="py-20 sm:py-44">
      <div className="mx-auto container max-w-[1320px] px-5">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-accent">
          LOCATIONS
        </p>

        <h2 className="mb-8 sm:mb-14 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          Browse more locations worldwide
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {locations.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </div>

        <div className="mt-10 mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
          <Link
            href={"/"}
            className="py-1.5 px-3.5 border border-dark-white rounded-full text-[11px] sm:text-sm tracking-[-0.14px] text-center"
          >
            LightningProxies offers 250+ Locations worldwide.{" "}
            <span className="font-semibold text-accent">
              View all locations
            </span>
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
          </Link>
        </div>
      </div>
    </section>
  );
}
