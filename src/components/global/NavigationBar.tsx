"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logoWhiteImg from "@/assets/images/branding/logo-white.svg";
import logoImg from "@/assets/images/branding/logo.svg";
import PrimaryBtn from "../ui/PrimaryBtn";
import MenuProducts from "./MenuProducts";
import MenuLocations from "./MenuLocations";
import MenuUseCases from "./MenuUseCases";
import MenuResources from "./MenuResources";
import MenuPricing from "./MenuPricing";
import SecondaryBtn from "../ui/SecondaryBtn";

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(true);

  const [linksActiveLineValues, setLinksActiveLineValues] = useState({
    top: 70,
    left: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed z-[1000] top-0 left-0 w-full ${
        isScrolled && !isHovered
          ? "bg-primary"
          : "border-b border-dark-white bg-white"
      } duration-200`}
    >
      <div className="mx-auto container max-w-[1320px] h-[70px] px-5 flex justify-between items-center">
        <Link href={"/"} aria-label="logo">
          {isScrolled && !isHovered ? (
            <Image src={logoWhiteImg} alt="logo" className="w-[130px]" />
          ) : (
            <Image src={logoImg} alt="logo" className="w-[130px]" />
          )}
        </Link>

        <ul
          onMouseLeave={() => {
            setLinksActiveLineValues({
              top: 70,
              left: 0,
              width: 0,
              height: 0,
            });
          }}
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-full hidden lg:flex items-center gap-10"
        >
          <li className="group h-full">
            <Link
              onMouseEnter={handleLinkMouseEnter}
              href={"/"}
              className={`h-full flex items-center gap-2 text-sm font-medium tracking-[-0.14px] ${
                isScrolled && !isHovered ? "text-white" : "text-primary"
              } duration-200`}
            >
              Products{" "}
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none"
              >
                <path
                  d="M1 1.25L4.75 4.75L8.25 1.25"
                  strokeWidth="1.25"
                  className={`${
                    isScrolled && !isHovered ? "stroke-white" : "stroke-primary"
                  } duration-200`}
                />
              </svg>
            </Link>

            <MenuProducts />
          </li>

          <li className="group h-full">
            <Link
              onMouseEnter={handleLinkMouseEnter}
              href={"/"}
              className={`h-full flex items-center gap-2 text-sm font-medium tracking-[-0.14px] ${
                isScrolled && !isHovered ? "text-white" : "text-primary"
              } duration-200`}
            >
              Locations{" "}
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none"
              >
                <path
                  d="M1 1.25L4.75 4.75L8.25 1.25"
                  strokeWidth="1.25"
                  className={`${
                    isScrolled && !isHovered ? "stroke-white" : "stroke-primary"
                  } duration-200`}
                />
              </svg>
            </Link>

            <MenuLocations />
          </li>

          <li className="group h-full">
            <Link
              onMouseEnter={handleLinkMouseEnter}
              href={"/"}
              className={`h-full flex items-center gap-2 text-sm font-medium tracking-[-0.14px] ${
                isScrolled && !isHovered ? "text-white" : "text-primary"
              } duration-200`}
            >
              Use Cases{" "}
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none"
              >
                <path
                  d="M1 1.25L4.75 4.75L8.25 1.25"
                  strokeWidth="1.25"
                  className={`${
                    isScrolled && !isHovered ? "stroke-white" : "stroke-primary"
                  } duration-200`}
                />
              </svg>
            </Link>

            <MenuUseCases />
          </li>

          <li className="group h-full">
            <Link
              onMouseEnter={handleLinkMouseEnter}
              href={"/"}
              className={`h-full flex items-center gap-2 text-sm font-medium tracking-[-0.14px] ${
                isScrolled && !isHovered ? "text-white" : "text-primary"
              } duration-200`}
            >
              Resources{" "}
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none"
              >
                <path
                  d="M1 1.25L4.75 4.75L8.25 1.25"
                  strokeWidth="1.25"
                  className={`${
                    isScrolled && !isHovered ? "stroke-white" : "stroke-primary"
                  } duration-200`}
                />
              </svg>
            </Link>

            <MenuResources />
          </li>

          <li className="group h-full">
            <Link
              onMouseEnter={handleLinkMouseEnter}
              href={"/"}
              className={`h-full flex items-center gap-2 text-sm font-medium tracking-[-0.14px] ${
                isScrolled && !isHovered ? "text-white" : "text-primary"
              } duration-200`}
            >
              Pricing{" "}
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none"
              >
                <path
                  d="M1 1.25L4.75 4.75L8.25 1.25"
                  strokeWidth="1.25"
                  className={`${
                    isScrolled && !isHovered ? "stroke-white" : "stroke-primary"
                  } duration-200`}
                />
              </svg>
            </Link>

            <MenuPricing />
          </li>
        </ul>

        <div
          className={`absolute w-[40px] h-[2px] bg-accent ${
            linksActiveLineValues.width === 0 ? "opacity-0" : ""
          } duration-300`}
          style={{
            top: linksActiveLineValues.top,
            left: linksActiveLineValues.left,
          }}
        ></div>

        <div className="flex items-center gap-4">
          <Link
            href={"/"}
            className={`hidden sm:block text-sm font-medium tracking-[-0.14px] ${
              isScrolled && !isHovered ? "text-white" : "text-primary"
            } duration-200`}
          >
            Login
          </Link>

          <div className="hidden sm:block">
            {isScrolled && !isHovered ? (
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
            ) : (
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
              </PrimaryBtn>
            )}
          </div>

          <div className="flex lg:hidden cursor-pointer">
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
                fill="#1D2026"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 13H9V11.5H21V13Z"
                fill="#1D2026"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 19.5H3V18H21V19.5Z"
                fill="#1D2026"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
}
