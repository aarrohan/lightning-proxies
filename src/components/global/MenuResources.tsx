"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import article2Img from "@/assets/images/article-2.png";

interface ILinkCard {
  index?: number;
  firstItemRef?: React.MutableRefObject<HTMLAnchorElement | null>;
  linksCardBgValues?: ILinkCardBgValues;
  setLinksCardBgValues?: (values: ILinkCardBgValues) => void;
  isNew?: boolean;
  isComingSoon?: boolean;
  icon: JSX.Element;
  title: string;
  href: string;
}

interface ILinkCardBgValues {
  top: number;
  left: number;
  width: number;
  height: number;
}

function LinkCard({
  index,
  firstItemRef,
  linksCardBgValues,
  setLinksCardBgValues,
  isNew,
  isComingSoon,
  icon,
  title,
  href,
}: ILinkCard) {
  useEffect(() => {
    if (firstItemRef) {
      const firstItem = firstItemRef.current;

      if (firstItem) {
        const { top, left, width, height } = firstItem.getBoundingClientRect();

        if (linksCardBgValues && setLinksCardBgValues) {
          setLinksCardBgValues({
            top: top - 70,
            left: left + 10,
            width,
            height,
          });
        }
      }
    }
  }, [firstItemRef]);

  return (
    <Link
      ref={index === 0 ? firstItemRef : null}
      href={href}
      onMouseEnter={(e) => {
        const target = e.target as HTMLAnchorElement;
        const { top, left, width, height } = target.getBoundingClientRect();

        if (linksCardBgValues && setLinksCardBgValues) {
          setLinksCardBgValues({
            top: top - 70,
            left: left + 10,
            width,
            height,
          });
        }
      }}
      className="group/link-card group relative z-10 p-2 lg:p-4 border lg:!border-0 border-transparent hover:border-dark-white bg-transparent hover:bg-white lg:!bg-transparent rounded-lg lg:rounded-xl"
    >
      <div className="grid grid-cols-[20px_auto] items-center gap-2 pointer-events-none">
        <div className="flex">{icon}</div>

        <p className="flex items-center text-xs lg:text-base font-medium tracking-[-0.12px] lg:tracking-[-0.16px]">
          {title}{" "}
          {!isNew && !isComingSoon && (
            <svg
              width="4"
              height="7"
              viewBox="0 0 4 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 group-hover/link-card:ml-2 opacity-0 group-hover/link-card:opacity-100 duration-200"
            >
              <path
                d="M0.15976 0.97662C-0.0532533 0.763607 -0.0532533 0.418244 0.15976 0.205231C0.372773 -0.00778212 0.718136 -0.00778212 0.93115 0.205231L3.84024 3.11432C4.05325 3.32733 4.05325 3.6727 3.84024 3.88571L0.93115 6.7948C0.718136 7.00782 0.372773 7.00782 0.15976 6.7948C-0.0532533 6.58179 -0.0532533 6.23643 0.15976 6.02341L2.1377 4.04547L2.54545 3.50002L2.1377 2.95456L0.15976 0.97662Z"
                fill="#1D2026"
              />
            </svg>
          )}
          {isNew && (
            <span className="ml-2 py-[2px] px-2 bg-accent/10 rounded-full text-[9px] lg:text-xs font-medium uppercase text-accent">
              New
            </span>
          )}
          {isComingSoon && (
            <span className="ml-2 py-[2px] px-2 bg-green/10 rounded-full text-[9px] lg:text-xs font-medium uppercase text-green">
              Coming soon
            </span>
          )}
        </p>
      </div>
    </Link>
  );
}

function ArticleCard() {
  return (
    <Link href={"/"} className="group/article-card group">
      <Image
        src={article2Img}
        alt=""
        className="group-hover/article-card:-translate-y-1 w-full rounded-xl duration-200"
      />

      <h3 className="mt-4 mb-1 lg:mb-2 text-xs lg:text-base font-medium tracking-[-0.12px] lg:tracking-[-0.16px]">
        Proxy vs VPN: The Difference
      </h3>

      <p className="text-[10px] lg:text-sm tracking-[-0.1px] lg:tracking-[-0.14px] text-primary/75">
        Sed varius justo ac sem luctus lobortis. Nunc porta leo nec pretium
        laoreet.
      </p>
    </Link>
  );
}

export default function MenuResources() {
  const resourcesFirstItemRef = useRef<HTMLAnchorElement>(null);
  const [resourcesCardBgValues, setResourcesCardBgValues] =
    useState<ILinkCardBgValues>({
      top: 0,
      left: 0,
      width: 0,
      height: 0,
    });

  const resourcesLinks: ILinkCard[] = [
    {
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] lg:w-[20px] h-auto"
        >
          <path
            d="M8.75 7.16663H15.4167M8.75 10.5H10.8333M15.4167 10.5H13.3333M8.75 13.8333H10.8333M15.4167 13.8333H13.3333"
            stroke="#1D2026"
            strokeWidth="1.3125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.83341 6.75H5.00008C3.42873 6.75 2.64306 6.75 2.15491 7.23816C1.66675 7.72631 1.66675 8.51198 1.66675 10.0833V15.5C1.66675 16.6506 2.59949 17.5833 3.75008 17.5833C4.90067 17.5833 5.83341 16.6506 5.83341 15.5V6.75Z"
            stroke="#1D2026"
            strokeWidth="1.3125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.3333 3.41663H9.16667C8.39167 3.41663 8.0042 3.41663 7.68628 3.50181C6.82356 3.73298 6.14968 4.40685 5.91852 5.26958C5.83333 5.58749 5.83333 5.97498 5.83333 6.74996V15.5C5.83333 16.6505 4.90059 17.5833 3.75 17.5833H13.3333C15.6903 17.5833 16.8688 17.5833 17.6011 16.851C18.3333 16.1188 18.3333 14.9403 18.3333 12.5833V8.41663C18.3333 6.0596 18.3333 4.88109 17.6011 4.14886C16.8688 3.41663 15.6903 3.41663 13.3333 3.41663Z"
            stroke="#1D2026"
            strokeWidth="1.3125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Blogs",
      href: "/blog",
    },
    {
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] lg:w-[20px] h-auto"
        >
          <path
            d="M14.1667 9.50375C14.1667 9.21567 14.1667 9.07167 14.2101 8.94333C14.3361 8.57037 14.6682 8.42563 15.001 8.27407C15.3751 8.10368 15.5621 8.01849 15.7474 8.0035C15.9578 7.98648 16.1686 8.03182 16.3484 8.13274C16.5868 8.26653 16.7531 8.52078 16.9233 8.72752C17.7095 9.68233 18.1025 10.1598 18.2463 10.6863C18.3624 11.1112 18.3624 11.5555 18.2463 11.9803C18.0366 12.7482 17.3738 13.392 16.8832 13.9878C16.6323 14.2926 16.5068 14.445 16.3484 14.5339C16.1686 14.6348 15.9578 14.6802 15.7474 14.6632C15.5621 14.6482 15.3751 14.563 15.001 14.3926C14.6682 14.241 14.3361 14.0963 14.2101 13.7233C14.1667 13.595 14.1667 13.451 14.1667 13.1629V9.50375Z"
            stroke="#1D2026"
            strokeWidth="1.3125"
          />
          <path
            d="M5.83341 9.50384C5.83341 9.14117 5.82323 8.81518 5.53001 8.56017C5.42336 8.46742 5.28196 8.40301 4.99917 8.27421C4.62509 8.10382 4.43805 8.01863 4.25271 8.00364C3.69667 7.95867 3.39751 8.33818 3.07686 8.72765C2.29071 9.6825 1.89763 10.1599 1.7538 10.6864C1.63773 11.1113 1.63773 11.5557 1.7538 11.9805C1.96358 12.7484 2.62635 13.3921 3.11692 13.988C3.42616 14.3636 3.72156 14.7063 4.25271 14.6633C4.43805 14.6483 4.62509 14.5631 4.99917 14.3928C5.28196 14.2639 5.42336 14.1995 5.53001 14.1068C5.82323 13.8518 5.83341 13.5258 5.83341 13.1631V9.50384Z"
            stroke="#1D2026"
            strokeWidth="1.3125"
          />
          <path
            d="M4.16675 8C4.16675 5.23857 6.77842 3 10.0001 3C13.2217 3 15.8334 5.23857 15.8334 8"
            stroke="#1D2026"
            strokeWidth="1.3125"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M15.8333 14.6664V15.333C15.8333 16.8058 14.3408 17.9997 12.4999 17.9997H10.8333"
            stroke="#1D2026"
            strokeWidth="1.3125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Help Center",
      href: "/help-center",
    },
    {
      isNew: true,
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] lg:w-[20px] h-auto"
        >
          <path
            d="M14.1667 9.50375C14.1667 9.21567 14.1667 9.07167 14.2101 8.94333C14.3361 8.57037 14.6682 8.42563 15.001 8.27407C15.3751 8.10368 15.5621 8.01849 15.7474 8.0035C15.9578 7.98648 16.1686 8.03182 16.3484 8.13274C16.5868 8.26653 16.7531 8.52078 16.9233 8.72752C17.7095 9.68233 18.1025 10.1598 18.2463 10.6863C18.3624 11.1112 18.3624 11.5555 18.2463 11.9803C18.0366 12.7482 17.3738 13.392 16.8832 13.9878C16.6323 14.2926 16.5068 14.445 16.3484 14.5339C16.1686 14.6348 15.9578 14.6802 15.7474 14.6632C15.5621 14.6482 15.3751 14.563 15.001 14.3926C14.6682 14.241 14.3361 14.0963 14.2101 13.7233C14.1667 13.595 14.1667 13.451 14.1667 13.1629V9.50375Z"
            stroke="#1D2026"
            strokeWidth="1.3125"
          />
          <path
            d="M5.83341 9.50384C5.83341 9.14117 5.82323 8.81518 5.53001 8.56017C5.42336 8.46742 5.28196 8.40301 4.99917 8.27421C4.62509 8.10382 4.43805 8.01863 4.25271 8.00364C3.69667 7.95867 3.39751 8.33818 3.07686 8.72765C2.29071 9.6825 1.89763 10.1599 1.7538 10.6864C1.63773 11.1113 1.63773 11.5557 1.7538 11.9805C1.96358 12.7484 2.62635 13.3921 3.11692 13.988C3.42616 14.3636 3.72156 14.7063 4.25271 14.6633C4.43805 14.6483 4.62509 14.5631 4.99917 14.3928C5.28196 14.2639 5.42336 14.1995 5.53001 14.1068C5.82323 13.8518 5.83341 13.5258 5.83341 13.1631V9.50384Z"
            stroke="#1D2026"
            strokeWidth="1.3125"
          />
          <path
            d="M4.16675 8C4.16675 5.23857 6.77842 3 10.0001 3C13.2217 3 15.8334 5.23857 15.8334 8"
            stroke="#1D2026"
            strokeWidth="1.3125"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M15.8333 14.6664V15.333C15.8333 16.8058 14.3408 17.9997 12.4999 17.9997H10.8333"
            stroke="#1D2026"
            strokeWidth="1.3125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Reseller Program",
      href: "/referral-program",
    },
    {
      isComingSoon: true,
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] lg:w-[20px] h-auto"
        >
          <path
            d="M12.0834 10.5C12.0834 11.6505 11.1507 12.5833 10.0001 12.5833C8.8495 12.5833 7.91675 11.6505 7.91675 10.5C7.91675 9.34938 8.8495 8.41663 10.0001 8.41663C11.1507 8.41663 12.0834 9.34938 12.0834 10.5Z"
            stroke="#1D2026"
            strokeWidth="1.3125"
          />
          <path
            d="M15.8334 9.78492C15.5625 9.74567 15.2842 9.71584 15.0001 9.69592M5.00008 11.3048C4.71589 11.2849 4.43767 11.255 4.16675 11.2158"
            stroke="#1D2026"
            strokeWidth="1.3125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.0001 16.75C8.88966 17.2686 7.43097 17.5833 5.83341 17.5833C4.94515 17.5833 4.09982 17.486 3.33341 17.3105C2.08306 17.024 1.66675 16.272 1.66675 14.9883V6.0116C1.66675 5.19091 2.53344 4.62723 3.33341 4.81046C4.09982 4.986 4.94515 5.08329 5.83341 5.08329C7.43097 5.08329 8.88966 4.76859 10.0001 4.24996C11.1105 3.73133 12.5692 3.41663 14.1667 3.41663C15.055 3.41663 15.9003 3.51392 16.6667 3.68946C17.9848 3.99136 18.3334 4.76693 18.3334 6.0116V14.9883C18.3334 15.809 17.4667 16.3727 16.6667 16.1895C15.9003 16.0139 15.055 15.9166 14.1667 15.9166C12.5692 15.9166 11.1105 16.2313 10.0001 16.75Z"
            stroke="#1D2026"
            strokeWidth="1.3125"
          />
        </svg>
      ),
      title: "Affiliate Program",
      href: "/affiliate-program",
    },
    {
      isComingSoon: true,
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] lg:w-[20px] h-auto"
        >
          <path
            d="M9.16675 5.5H17.5001"
            stroke="#1D2026"
            strokeWidth="1.3125"
            strokeLinecap="round"
          />
          <path
            d="M9.16675 10.5H17.5001"
            stroke="#1D2026"
            strokeWidth="1.3125"
            strokeLinecap="round"
          />
          <path
            d="M9.16675 15.5H17.5001"
            stroke="#1D2026"
            strokeWidth="1.3125"
            strokeLinecap="round"
          />
          <path
            d="M2.5 6.661C2.5 6.661 3.33333 7.20417 3.75 8.00028C3.75 8.00028 5 4.87528 6.66667 3.83362"
            stroke="#1D2026"
            strokeWidth="1.3125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.5 15.8274C2.5 15.8274 3.33333 16.3706 3.75 17.1667C3.75 17.1667 5 14.0417 6.66667 13"
            stroke="#1D2026"
            strokeWidth="1.3125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Free Proxy List",
      href: "/",
    },
    {
      isComingSoon: true,
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] lg:w-[20px] h-auto"
        >
          <path
            d="M18.3334 10.5C18.3334 5.89758 14.6024 2.16663 10.0001 2.16663C5.39771 2.16663 1.66675 5.89758 1.66675 10.5C1.66675 15.1023 5.39771 18.8333 10.0001 18.8333C14.6024 18.8333 18.3334 15.1023 18.3334 10.5Z"
            stroke="#1D2026"
            strokeWidth="1.3125"
          />
          <path
            d="M6.66675 10.9167L8.75008 13L13.3334 8"
            stroke="#1D2026"
            strokeWidth="1.3125"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Free Proxy Checker",
      href: "/",
    },
  ];

  const companyLinks: ILinkCard[] = [
    {
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] lg:w-[20px] h-auto"
        >
          <path
            d="M10.0001 18.8333V5.49996C10.0001 3.92861 10.0001 3.14293 9.51191 2.65478C9.02375 2.16663 8.2381 2.16663 6.66675 2.16663H5.00008C3.42873 2.16663 2.64306 2.16663 2.15491 2.65478C1.66675 3.14293 1.66675 3.92861 1.66675 5.49996V15.5C1.66675 17.0713 1.66675 17.857 2.15491 18.3451C2.64306 18.8333 3.42873 18.8333 5.00008 18.8333H10.0001Z"
            stroke="#1D2026"
            strokeWidth="1.25"
          />
          <path
            d="M10 18.8333H15C16.5713 18.8333 17.357 18.8333 17.8452 18.3451C18.3333 17.857 18.3333 17.0713 18.3333 15.5V10.5C18.3333 8.92863 18.3333 8.14293 17.8452 7.65478C17.357 7.16663 16.5713 7.16663 15 7.16663H10"
            stroke="#1D2026"
            strokeWidth="1.25"
          />
          <path
            d="M15.4167 13.8333H12.9167M15.4167 10.5H12.9167"
            stroke="#1D2026"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <path
            d="M7.08325 12.1667H4.58325M7.08325 8.83333H4.58325M7.08325 5.5H4.58325"
            stroke="#1D2026"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "About Us",
      href: "/about",
    },
    {
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] lg:w-[20px] h-auto"
        >
          <path
            d="M18.3334 6.12504H16.0093C15.5084 6.12504 15.2579 6.12504 15.0217 6.05352C14.7856 5.98202 14.5772 5.84308 14.1603 5.56521C13.5352 5.1484 12.8219 4.67292 12.4676 4.56564C12.1133 4.45837 11.7376 4.45837 10.9862 4.45837C9.96433 4.45837 9.30566 4.45837 8.84625 4.64867C8.38683 4.83897 8.02555 5.20027 7.30297 5.92284L6.66707 6.55874C6.50423 6.72158 6.42281 6.80301 6.37254 6.88339C6.18621 7.18138 6.20686 7.56425 6.42416 7.84047C6.48278 7.91498 6.57249 7.98717 6.7519 8.13156C7.41505 8.66524 8.37108 8.61197 8.97158 8.00789L10.0001 6.97326H10.8334L15.8334 12.003C16.2937 12.466 16.2937 13.2166 15.8334 13.6796C15.3732 14.1426 14.627 14.1426 14.1667 13.6796L13.7501 13.2604M13.7501 13.2604L11.2501 10.7456M13.7501 13.2604C14.2103 13.7234 14.2103 14.4741 13.7501 14.937C13.2898 15.4 12.5437 15.4 12.0834 14.937L11.2501 14.0988M11.2501 14.0988C11.7103 14.5617 11.7103 15.3123 11.2501 15.7753C10.7898 16.2383 10.0437 16.2383 9.58341 15.7753L8.33341 14.5178M11.2501 14.0988L9.58341 12.4321M8.33341 14.5178L7.91675 14.0988M8.33341 14.5178C8.79366 14.9808 8.79366 15.7315 8.33341 16.1945C7.87318 16.6574 7.12699 16.6574 6.66675 16.1945L4.31372 13.7924C3.83021 13.2988 3.58845 13.0521 3.27871 12.9218C2.96896 12.7917 2.62348 12.7917 1.93253 12.7917H1.66675"
            stroke="#1D2026"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.3333 12.7916H16.25"
            stroke="#1D2026"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <path
            d="M7.08341 6.125H1.66675"
            stroke="#1D2026"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Our Partners",
      href: "/partners",
    },
    {
      icon: (
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] lg:w-[20px] h-auto"
        >
          <path
            d="M6.24565 11.9609C8.81942 8.97037 14.649 3.12902 17.1156 3.00375C18.6416 2.85759 15.6015 8.27126 8.39875 14.195M9.54842 8.87079L11.4298 10.7708M2.5 17.8789C3.09123 15.7894 2.71823 16.8162 2.92006 14.41C3.02755 14.0537 3.24382 12.9481 4.59465 12.3971C6.13015 11.7708 7.25582 12.7176 7.54677 13.1625C8.40392 14.0919 8.50325 15.246 7.54677 16.5645C6.59025 17.883 3.75293 18.2106 2.5 17.8789Z"
            stroke="#1D2026"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Brand Assets",
      href: "/brand-assets",
    },
  ];

  return (
    <div className="lg:fixed top-[70px] left-1/2 lg:-translate-x-1/2 lg:w-[100vw] border-b lg:border-y border-dashed lg:border-solid border-dark-white lg:bg-white lg:opacity-0 group-hover:opacity-100 lg:pointer-events-none group-hover:pointer-events-auto duration-200">
      <div className="mx-auto container max-w-[1320px] py-4 lg:px-5 grid lg:grid-cols-3 gap-4">
        <div>
          <p className="mb-4 lg:pb-3 lg:border-b border-dashed border-dark-white text-xs lg:text-sm font-semibold tracking-[-0.12px] lg:tracking-[-0.14px] lg:uppercase text-primary/50">
            Resources
          </p>

          <div
            onMouseLeave={() => {
              if (resourcesFirstItemRef.current) {
                const { top, left, width, height } =
                  resourcesFirstItemRef.current.getBoundingClientRect();
                setResourcesCardBgValues({
                  top: top - 70,
                  left: left + 10,
                  width,
                  height,
                });
              }
            }}
            className="grid"
          >
            {resourcesLinks.map((link, index) => (
              <LinkCard
                key={index}
                index={index}
                firstItemRef={resourcesFirstItemRef}
                linksCardBgValues={resourcesCardBgValues}
                setLinksCardBgValues={setResourcesCardBgValues}
                {...link}
              />
            ))}

            <div
              className={`absolute bg-off-white rounded-xl hidden lg:block ${
                resourcesCardBgValues.width === 0 ? "opacity-0" : ""
              } duration-300`}
              style={{
                top: resourcesCardBgValues.top,
                left: resourcesCardBgValues.left,
                width: resourcesCardBgValues.width,
                height: resourcesCardBgValues.height,
              }}
            ></div>
          </div>
        </div>

        <div>
          <p className="mb-4 lg:pb-3 lg:border-b border-dashed border-dark-white text-xs lg:text-sm font-semibold tracking-[-0.12px] lg:tracking-[-0.14px] lg:uppercase text-primary/50">
            Company
          </p>

          <div
            onMouseLeave={() => {
              if (resourcesFirstItemRef.current) {
                const { top, left, width, height } =
                  resourcesFirstItemRef.current.getBoundingClientRect();
                setResourcesCardBgValues({
                  top: top - 70,
                  left: left + 10,
                  width,
                  height,
                });
              }
            }}
            className="grid"
          >
            {companyLinks.map((link, index) => (
              <LinkCard
                key={index}
                index={index}
                linksCardBgValues={resourcesCardBgValues}
                setLinksCardBgValues={setResourcesCardBgValues}
                {...link}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 lg:pb-3 lg:border-b border-dashed border-dark-white flex justify-between items-center">
            <p className="text-xs lg:text-sm font-semibold tracking-[-0.12px] lg:tracking-[-0.14px] lg:uppercase text-primary/50">
              Latest article
            </p>

            <Link
              href={"/"}
              className="hidden lg:flex items-center gap-1.5 text-sm tracking-[-0.14px] opacity-50 hover:opacity-100 duration-200"
            >
              View all
              <svg
                width="4"
                height="8"
                viewBox="0 0 4 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.15976 1.47656C-0.0532533 1.26355 -0.0532533 0.918183 0.15976 0.70517C0.372773 0.492157 0.718136 0.492157 0.93115 0.70517L3.84024 3.61426C4.05325 3.82727 4.05325 4.17264 3.84024 4.38565L0.93115 7.29474C0.718136 7.50775 0.372773 7.50775 0.15976 7.29474C-0.0532533 7.08173 -0.0532533 6.73637 0.15976 6.52335L2.1377 4.54541L2.54545 3.99996L2.1377 3.4545L0.15976 1.47656Z"
                  fill="#1D2026"
                />
              </svg>
            </Link>
          </div>

          <ArticleCard />
        </div>
      </div>
    </div>
  );
}
