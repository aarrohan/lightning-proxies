"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoFullWhiteImg from "@/assets/images/branding/logo-full-white.svg";
import logoImg from "@/assets/images/branding/logo.svg";
import PrimaryBtn from "../ui/PrimaryBtn";
import MenuProducts from "./MenuProducts";
import MenuLocations from "./MenuLocations";
import MenuUseCases from "./MenuUseCases";
import MenuResources from "./MenuResources";
import MenuPricing from "./MenuPricing";
import SecondaryBtn from "../ui/SecondaryBtn";

export default function NavigationBar() {
  const [isTransparent, setIsTransparent] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(true);

  const [showGroup, setShowGroup] = useState<boolean>(true);

  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] =
    useState<boolean>(false);

  const [isProductsDropdownOpen, setIsProductsDropdownOpen] =
    useState<boolean>(false);
  const [isLocationsDropdownOpen, setIsLocationsDropdownOpen] =
    useState<boolean>(false);
  const [isUseCasesDropdownOpen, setIsUseCasesDropdownOpen] =
    useState<boolean>(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] =
    useState<boolean>(false);
  const [isPricingDropdownOpen, setIsPricingDropdownOpen] =
    useState<boolean>(false);

  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const [linksActiveLineValues, setLinksActiveLineValues] = useState({
    top: 70,
    left: 0,
    width: 0,
    height: 0,
  });

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (isTransparent) {
        if (window.scrollY > 0) {
          setIsHovered(true);
        } else {
          setIsHovered(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    if (isHamburgerMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isHamburgerMenuOpen]);

  useEffect(() => {
    if (firstLinkRef.current) {
      const { left, width, height } =
        firstLinkRef.current.getBoundingClientRect();

      setLinksActiveLineValues({
        top: height,
        left: left + width / 2 - width / 4,
        width: 0,
        height: 0,
      });
    }
  }, [firstLinkRef]);

  useEffect(() => {
    if (
      pathname.includes("/products/residential-proxies") ||
      pathname.includes("/products/datacenter-proxies") ||
      pathname.includes("/products/isp-proxies") ||
      pathname.includes("/products/ipv6-proxies") ||
      pathname.includes("/products/mobile-proxies") ||
      pathname.includes("/products/unlimited-residential-proxies") ||
      pathname.includes("/locations") ||
      pathname.includes("/locations/usa") ||
      pathname.includes("/locations/uk") ||
      pathname.includes("/locations/germany") ||
      pathname.includes("/locations/france") ||
      pathname.includes("/locations/canada") ||
      pathname.includes("/locations/china") ||
      pathname.includes("/locations/brazil") ||
      pathname.includes("/use-cases/serp-monitoring") ||
      pathname.includes("/use-cases/web-scraping") ||
      pathname.includes("/use-cases/market-research") ||
      pathname.includes("/use-cases/ad-verification") ||
      pathname.includes("/use-cases/brand-protection") ||
      pathname.includes("/pricing/residential-proxies") ||
      pathname.includes("/pricing/datacenter-proxies") ||
      pathname.includes("/pricing/isp-proxies") ||
      pathname.includes("/pricing/ipv6-proxies") ||
      pathname.includes("/pricing/mobile-proxies") ||
      pathname.includes("/pricing/unlimited-residential-proxies") ||
      pathname.includes("/coming-soon")
    ) {
      setIsTransparent(true);
      setIsHovered(false);
    } else {
      setIsTransparent(false);
      setIsHovered(false);
    }
  }, [pathname]);

  useEffect(() => {
    document.querySelectorAll("nav ul li div a").forEach((a) => {
      a.addEventListener("click", () => {
        setIsTransparent(false);
        setIsHovered(false);

        setShowGroup(false);

        setIsHamburgerMenuOpen(false);

        setIsProductsDropdownOpen(false);
        setIsLocationsDropdownOpen(false);
        setIsUseCasesDropdownOpen(false);
        setIsResourcesDropdownOpen(false);
        setIsPricingDropdownOpen(false);

        document.body.style.overflow = "auto";
      });
    });
  }, []);

  useEffect(() => {
    if (!showGroup) {
      setTimeout(() => {
        setShowGroup(true);
      }, 1000);
    }
  }, [showGroup]);

  const handleLinkMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;
    const { left, width, height } = target.getBoundingClientRect();

    setLinksActiveLineValues({
      top: height,
      left: left + width / 2 - width / 4,
      width,
      height,
    });
  };

  return (
    <nav
      onMouseEnter={() => {
        if (isTransparent) {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        if (isTransparent && window.scrollY === 0) {
          setIsHovered(false);
        }
      }}
      className={`fixed z-[1000] top-0 left-0 w-full border-b ${
        isTransparent && !isHovered
          ? "border-transparent bg-transparent"
          : "border-dark-white bg-white"
      } duration-200`}
    >
      <div className="mx-auto container max-w-[1320px] h-[70px] px-5 flex justify-between items-center">
        <Link href={"/"} aria-label="logo">
          {isTransparent && !isHovered ? (
            <Image src={logoFullWhiteImg} alt="logo" className="w-[130px]" />
          ) : (
            <Image src={logoImg} alt="logo" className="w-[130px]" />
          )}
        </Link>

        <div
          className={`hamburger-menu ${
            isHamburgerMenuOpen ? "active" : ""
          } fixed lg:static top-[70px] left-0 w-full lg:w-fit h-[calc(100svh-70px)] lg:h-fit border-t border-dark-white lg:border-transparent bg-off-white flex flex-col items-center overflow-y-auto duration-300`}
        >
          <ul
            onMouseLeave={() => {
              setLinksActiveLineValues({
                ...linksActiveLineValues,
                width: 0,
                height: 0,
              });
            }}
            className="lg:absolute top-1/2 left-1/2 lg:-translate-y-1/2 lg:-translate-x-1/2 w-full lg:w-fit lg:h-full py-8 lg:py-0 px-5 lg:px-0 flex flex-col lg:flex-row items-center lg:gap-10"
          >
            {/* Products */}
            <li
              className={`${
                showGroup ? "group" : ""
              } w-full lg:w-fit h-fit lg:h-full`}
            >
              <a
                ref={firstLinkRef}
                onMouseEnter={handleLinkMouseEnter}
                onClick={(e) => {
                  e.preventDefault();
                  setIsProductsDropdownOpen(!isProductsDropdownOpen);
                }}
                href={"/"}
                className={`w-full lg:w-fit h-fit lg:h-full pb-4 lg:pb-0 border-b lg:border-b-0 border-dashed border-dark-white flex justify-between items-center gap-2 text-sm font-medium tracking-[-0.14px] ${
                  isTransparent && !isHovered ? "sm:text-white" : "text-primary"
                } duration-200`}
              >
                Products{" "}
                <svg
                  width="9"
                  height="6"
                  viewBox="0 0 9 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    isProductsDropdownOpen ? "rotate-180" : ""
                  } lg:!rotate-0 pointer-events-none duration-200`}
                >
                  <path
                    d="M1 1.25L4.75 4.75L8.25 1.25"
                    strokeWidth="1.25"
                    className={`${
                      isTransparent && !isHovered
                        ? "stroke-primary sm:stroke-white"
                        : "stroke-primary"
                    } duration-200`}
                  />
                </svg>
              </a>

              <div
                className={`${
                  !isProductsDropdownOpen ? "hidden" : ""
                } lg:!block`}
              >
                <MenuProducts />
              </div>
            </li>

            {/* Locations */}
            <li
              className={`${
                showGroup ? "group" : ""
              } w-full lg:w-fit h-fit lg:h-full`}
            >
              <Link
                onMouseEnter={handleLinkMouseEnter}
                onClick={(e) => {
                  e.preventDefault();
                  setIsLocationsDropdownOpen(!isLocationsDropdownOpen);
                }}
                href={"/"}
                className={`w-full lg:w-fit h-fit lg:h-full py-4 lg:py-0 border-b lg:border-b-0 border-dashed border-dark-white flex justify-between items-center gap-2 text-sm font-medium tracking-[-0.14px] ${
                  isTransparent && !isHovered ? "sm:text-white" : "text-primary"
                } duration-200`}
              >
                Locations{" "}
                <svg
                  width="9"
                  height="6"
                  viewBox="0 0 9 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    isLocationsDropdownOpen ? "rotate-180" : ""
                  } lg:!rotate-0 pointer-events-none duration-200`}
                >
                  <path
                    d="M1 1.25L4.75 4.75L8.25 1.25"
                    strokeWidth="1.25"
                    className={`${
                      isTransparent && !isHovered
                        ? "stroke-primary sm:stroke-white"
                        : "stroke-primary"
                    } duration-200`}
                  />
                </svg>
              </Link>

              <div
                className={`${
                  !isLocationsDropdownOpen ? "hidden" : ""
                } lg:!block`}
              >
                <MenuLocations />
              </div>
            </li>

            {/* Use cases */}
            <li
              className={`${
                showGroup ? "group" : ""
              } w-full lg:w-fit h-fit lg:h-full`}
            >
              <Link
                onMouseEnter={handleLinkMouseEnter}
                onClick={(e) => {
                  e.preventDefault();
                  setIsUseCasesDropdownOpen(!isUseCasesDropdownOpen);
                }}
                href={"/"}
                className={`w-full lg:w-fit h-fit lg:h-full py-4 lg:py-0 border-b lg:border-b-0 border-dashed border-dark-white flex justify-between items-center gap-2 text-sm font-medium tracking-[-0.14px] ${
                  isTransparent && !isHovered ? "sm:text-white" : "text-primary"
                } duration-200`}
              >
                Use cases{" "}
                <svg
                  width="9"
                  height="6"
                  viewBox="0 0 9 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    isUseCasesDropdownOpen ? "rotate-180" : ""
                  } lg:!rotate-0 pointer-events-none duration-200`}
                >
                  <path
                    d="M1 1.25L4.75 4.75L8.25 1.25"
                    strokeWidth="1.25"
                    className={`${
                      isTransparent && !isHovered
                        ? "stroke-primary sm:stroke-white"
                        : "stroke-primary"
                    } duration-200`}
                  />
                </svg>
              </Link>

              <div
                className={`${
                  !isUseCasesDropdownOpen ? "hidden" : ""
                } lg:!block`}
              >
                <MenuUseCases />
              </div>
            </li>

            {/* Resources */}
            <li
              className={`${
                showGroup ? "group" : ""
              } w-full lg:w-fit h-fit lg:h-full`}
            >
              <Link
                onMouseEnter={handleLinkMouseEnter}
                onClick={(e) => {
                  e.preventDefault();
                  setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
                }}
                href={"/"}
                className={`w-full lg:w-fit h-fit lg:h-full py-4 lg:py-0 border-b lg:border-b-0 border-dashed border-dark-white flex justify-between items-center gap-2 text-sm font-medium tracking-[-0.14px] ${
                  isTransparent && !isHovered ? "sm:text-white" : "text-primary"
                } duration-200`}
              >
                Resources{" "}
                <svg
                  width="9"
                  height="6"
                  viewBox="0 0 9 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    isResourcesDropdownOpen ? "rotate-180" : ""
                  } lg:!rotate-0 pointer-events-none duration-200`}
                >
                  <path
                    d="M1 1.25L4.75 4.75L8.25 1.25"
                    strokeWidth="1.25"
                    className={`${
                      isTransparent && !isHovered
                        ? "stroke-primary sm:stroke-white"
                        : "stroke-primary"
                    } duration-200`}
                  />
                </svg>
              </Link>

              <div
                className={`${
                  !isResourcesDropdownOpen ? "hidden" : ""
                } lg:!block`}
              >
                <MenuResources />
              </div>
            </li>

            {/* Pricing */}
            <li
              className={`${
                showGroup ? "group" : ""
              } w-full lg:w-fit h-fit lg:h-full`}
            >
              <Link
                onMouseEnter={handleLinkMouseEnter}
                onClick={(e) => {
                  e.preventDefault();
                  setIsPricingDropdownOpen(!isPricingDropdownOpen);
                }}
                href={"/"}
                className={`w-full lg:w-fit h-fit lg:h-full pt-4 lg:pt-0 flex justify-between items-center gap-2 text-sm font-medium tracking-[-0.14px] ${
                  isTransparent && !isHovered ? "sm:text-white" : "text-primary"
                } duration-200`}
              >
                Pricing{" "}
                <svg
                  width="9"
                  height="6"
                  viewBox="0 0 9 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${
                    isPricingDropdownOpen ? "rotate-180" : ""
                  } lg:!rotate-0 pointer-events-none duration-200`}
                >
                  <path
                    d="M1 1.25L4.75 4.75L8.25 1.25"
                    strokeWidth="1.25"
                    className={`${
                      isTransparent && !isHovered
                        ? "stroke-primary sm:stroke-white"
                        : "stroke-primary"
                    } duration-200`}
                  />
                </svg>
              </Link>

              <div
                className={`${
                  !isPricingDropdownOpen ? "hidden" : ""
                } lg:!block`}
              >
                <MenuPricing />
              </div>
            </li>
          </ul>

          <div className="w-full h-[65px] min-h-[65px] lg:hidden"></div>
        </div>

        <div
          className={`hamburger-menu ${
            isHamburgerMenuOpen ? "active" : ""
          } fixed z-10 bottom-0 left-0 w-full py-2.5 px-5 border-t border-dark-white bg-white grid lg:hidden grid-cols-2 items-center gap-2 duration-300`}
        >
          <Link href={`${process.env.NEXT_PUBLIC_AUTH_URL}/login`}>
            <button className="active:scale-95 w-full py-[7px] px-4 border-2 border-dark-white rounded-[9px] text-sm font-medium tracking-[-0.14px] duration-200">
              Login
            </button>
          </Link>

          <Link href={`${process.env.NEXT_PUBLIC_AUTH_URL}/signup`}>
            <PrimaryBtn>
              Get Started{" "}
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
            </PrimaryBtn>{" "}
          </Link>
        </div>

        <div
          className={`absolute w-[40px] h-[2px] bg-accent hidden lg:block ${
            linksActiveLineValues.width === 0 ? "opacity-0" : ""
          } pointer-events-none duration-300`}
          style={{
            top: linksActiveLineValues.top,
            left: linksActiveLineValues.left,
          }}
        ></div>

        <div className="flex items-center gap-4">
          <Link
            href={`${process.env.NEXT_PUBLIC_AUTH_URL}/login`}
            className={`hidden lg:block text-sm font-medium tracking-[-0.14px] ${
              isTransparent && !isHovered ? "sm:text-white" : "text-primary"
            } duration-200`}
          >
            Login
          </Link>

          <div className="hidden lg:block">
            {isTransparent && !isHovered ? (
              <Link href={`${process.env.NEXT_PUBLIC_AUTH_URL}/signup`}>
                <SecondaryBtn>
                  Get Started{" "}
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.21967 2.03033C7.92678 1.73744 7.92678 1.26256 8.21967 0.96967C8.51256 0.676777 8.98744 0.676777 9.28033 0.96967L13.2803 4.96967C13.5732 5.26256 13.5732 5.73744 13.2803 6.03033L9.28033 10.0303C8.98744 10.3232 8.51256 10.3232 8.21967 10.0303C7.92678 9.73744 7.92678 9.26256 8.21967 8.96967L10.9393 6.25H1.25C0.835787 6.25 0.5 5.91421 0.5 5.5C0.5 5.08579 0.835787 4.75 1.25 4.75H10.9393L8.21967 2.03033Z"
                      className="fill-accent"
                    />
                  </svg>
                </SecondaryBtn>
              </Link>
            ) : (
              <Link href={`${process.env.NEXT_PUBLIC_AUTH_URL}/signup`}>
                <PrimaryBtn>
                  Get Started{" "}
                  <span className="relative">
                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="relative -left-[4px] group-hover:-left-0 duration-200"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.21967 0.21967C3.51256 -0.0732232 3.98744 -0.0732232 4.28033 0.21967L8.28033 4.21967C8.57322 4.51256 8.57322 4.98744 8.28033 5.28033L4.28033 9.2803C3.98744 9.5732 3.51256 9.5732 3.21967 9.2803C2.92678 8.98744 2.92678 8.51256 3.21967 8.21967L6.68934 4.75L3.21967 1.28033C2.92678 0.98744 2.92678 0.51256 3.21967 0.21967Z"
                        className="fill-white/75 group-hover:fill-white duration-200"
                      />
                    </svg>

                    <svg
                      width="9"
                      height="10"
                      viewBox="0 0 9 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-0 left-0"
                    >
                      <rect
                        y="4"
                        height="1.5"
                        rx="0.75"
                        className="w-[7px] fill-white opacity-0 group-hover:opacity-100 duration-200"
                      />
                    </svg>
                  </span>
                </PrimaryBtn>
              </Link>
            )}
          </div>

          <div
            onClick={() => {
              setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
            }}
            className="flex lg:hidden cursor-pointer"
          >
            {isHamburgerMenuOpen ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3333 1.66632L1.66663 12.333"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  className={`${
                    isTransparent && !isHovered
                      ? "stroke-white"
                      : "stroke-primary"
                  } duration-200`}
                />
                <path
                  d="M12.3333 12.333L1.66663 1.66632"
                  strokeWidth="2"
                  strokeLinecap="square"
                  strokeLinejoin="round"
                  className={`${
                    isTransparent && !isHovered
                      ? "stroke-white"
                      : "stroke-primary"
                  } duration-200`}
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 6.5H13V5H21V6.5Z"
                  className={`${
                    isTransparent && !isHovered ? "fill-white" : "fill-primary"
                  } duration-200`}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 13H9V11.5H21V13Z"
                  className={`${
                    isTransparent && !isHovered ? "fill-white" : "fill-primary"
                  } duration-200`}
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 19.5H3V18H21V19.5Z"
                  className={`${
                    isTransparent && !isHovered ? "fill-white" : "fill-primary"
                  } duration-200`}
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
