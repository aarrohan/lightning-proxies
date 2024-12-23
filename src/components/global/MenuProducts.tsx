"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import product1IconImg from "@/assets/images/menu-product-1-icon.svg";
import product2IconImg from "@/assets/images/menu-product-2-icon.svg";
import product3IconImg from "@/assets/images/menu-product-3-icon.svg";
import product4IconImg from "@/assets/images/menu-product-4-icon.svg";
import product5IconImg from "@/assets/images/menu-product-5-icon.svg";
import product6IconImg from "@/assets/images/menu-product-6-icon.svg";
import product7IconImg from "@/assets/images/menu-product-7-icon.svg";
import product8IconImg from "@/assets/images/menu-product-8-icon.svg";
import product9IconImg from "@/assets/images/menu-product-9-icon.svg";
import Link from "next/link";

interface IProductCard {
  index?: number;
  firstItemRef?: React.MutableRefObject<HTMLAnchorElement | null>;
  productsCardBgValues?: IProductsCardBgValues;
  setProductsCardBgValues?: (values: IProductsCardBgValues) => void;
  isNew?: boolean;
  isComingSoon?: boolean;
  icon: JSX.Element;
  title: string;
  href: string;
  description: string;
}

interface IProductsCardBgValues {
  top: number;
  left: number;
  width: number;
  height: number;
}

function ProductCard({
  index,
  firstItemRef,
  productsCardBgValues,
  setProductsCardBgValues,
  isNew,
  isComingSoon,
  icon,
  title,
  href,
  description,
}: IProductCard) {
  useEffect(() => {
    if (firstItemRef) {
      const firstItem = firstItemRef.current;

      if (firstItem) {
        const { top, left, width, height } = firstItem.getBoundingClientRect();

        if (productsCardBgValues && setProductsCardBgValues) {
          setProductsCardBgValues({
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

        if (productsCardBgValues && setProductsCardBgValues) {
          setProductsCardBgValues({
            top: top - 70,
            left: left + 10,
            width,
            height,
          });
        }
      }}
      className="group/product-card group relative z-10 p-2.5 lg:p-5 border lg:!border-0 border-transparent hover:border-dark-white bg-transparent hover:bg-white lg:!bg-transparent rounded-lg lg:rounded-xl grid grid-cols-[38px_auto] lg:grid-cols-[48px_auto] items-start gap-2.5 lg:gap-4"
    >
      <div className="flex pointer-events-none">{icon}</div>

      <div className="pointer-events-none">
        <p className="flex items-center text-xs lg:text-base font-medium tracking-[-0.12px] lg:tracking-[-0.16px]">
          {title}{" "}
          {!isNew && !isComingSoon && (
            <svg
              width="4"
              height="7"
              viewBox="0 0 4 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-1 group-hover/product-card:ml-2 opacity-0 group-hover/product-card:opacity-100 duration-200"
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

        <p className="mt-1 text-[10px] lg:text-sm tracking-[-0.1px] lg:tracking-[-0.14px] text-primary/75">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default function MenuProducts() {
  const productsFirstItemRef = useRef<HTMLAnchorElement>(null);
  const [productsCardBgValues, setProductsCardBgValues] =
    useState<IProductsCardBgValues>({
      top: 0,
      left: 0,
      width: 0,
      height: 0,
    });

  useState<IProductsCardBgValues>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const products: IProductCard[] = [
    {
      icon: <Image src={product1IconImg} alt="" className="w-[48px]" />,
      title: "Residential Proxies",
      href: "/products/residential-proxies",
      description:
        "Reliable proxies with access to over 10M+ home IPs for privacy, web scraping, and geo-restricted content.",
    },
    {
      icon: <Image src={product2IconImg} alt="" className="w-[48px]" />,
      title: "Datacenter Proxies",
      href: "/products/datacenter-proxies",
      description:
        "High-speed, affordable proxies for bulk scraping and automation.",
    },
    {
      icon: <Image src={product3IconImg} alt="" className="w-[48px]" />,
      title: "ISP Proxies",
      href: "/products/isp-proxies",
      description:
        "Trusted IPs with datacenter speeds, ideal for social media and botting.",
    },
    {
      icon: <Image src={product4IconImg} alt="" className="w-[48px]" />,
      title: "IPv6 Proxies",
      href: "/products/ipv6-proxies",
      description:
        "Affordable proxies with a massive IP pool for large-scale tasks.",
    },
    {
      isNew: true,
      icon: <Image src={product5IconImg} alt="" className="w-[48px]" />,
      title: "Mobile Proxies",
      href: "/products/mobile-proxies",
      description:
        "Real 4G/LTE IPs for social media, app testing, and tough restrictions.",
    },
    {
      isNew: true,
      icon: <Image src={product9IconImg} alt="" className="w-[48px]" />,
      title: "Unlimited Residential Proxies",
      href: "/pricing/unlimited-residential-proxies",
      description: "No bandwidth limits; perfect for heavy data users.",
    },
  ];

  const toolsAndAddons: IProductCard[] = [
    {
      isNew: true,
      icon: <Image src={product6IconImg} alt="" className="w-[48px]" />,
      title: "Chrome Extension",
      href: "https://chromewebstore.google.com/detail/lightningproxies-extensio/bgejnhbjikhldeggjhdojncghbfgopjn",
      description: "Quickly manage proxies directly from your browser.",
    },
    {
      isComingSoon: true,
      icon: <Image src={product7IconImg} alt="" className="w-[48px]" />,
      title: "Web Scraper API",
      href: "/coming-soon",
      description: "Easily automate large-scale data extraction.",
    },
    {
      isComingSoon: true,
      icon: <Image src={product8IconImg} alt="" className="w-[48px]" />,
      title: "SERP Scraper API",
      href: "/coming-soon",
      description: "Scrape search engine results for SEO and analysis.",
    },
  ];

  return (
    <div className="lg:fixed top-[70px] left-1/2 lg:-translate-x-1/2 lg:w-[100vw] border-b lg:border-y border-dashed lg:border-solid border-dark-white lg:bg-white lg:opacity-0 group-hover:opacity-100 lg:pointer-events-none group-hover:pointer-events-auto duration-200">
      <div className="mx-auto container max-w-[1320px] py-4 lg:px-5 grid lg:grid-cols-[auto_410px] gap-4">
        <div>
          <p className="mb-4 lg:pb-3 lg:border-b border-dashed border-dark-white text-xs lg:text-sm font-semibold tracking-[-0.12px] lg:tracking-[-0.14px] lg:uppercase text-primary/50">
            Products
          </p>

          <div
            onMouseLeave={() => {
              if (productsFirstItemRef.current) {
                const { top, left, width, height } =
                  productsFirstItemRef.current.getBoundingClientRect();
                setProductsCardBgValues({
                  top: top - 70,
                  left: left + 10,
                  width,
                  height,
                });
              }
            }}
            className="grid lg:grid-cols-2"
          >
            {products.map((product, index) => (
              <ProductCard
                key={index}
                index={index}
                firstItemRef={productsFirstItemRef}
                productsCardBgValues={productsCardBgValues}
                setProductsCardBgValues={setProductsCardBgValues}
                {...product}
              />
            ))}

            <div
              className={`absolute bg-off-white rounded-xl hidden lg:block ${
                productsCardBgValues.width === 0 ? "opacity-0" : ""
              } duration-300`}
              style={{
                top: productsCardBgValues.top,
                left: productsCardBgValues.left,
                width: productsCardBgValues.width,
                height: productsCardBgValues.height,
              }}
            ></div>
          </div>
        </div>

        <div>
          <p className="mb-4 lg:pb-3 lg:border-b border-dashed border-dark-white text-xs lg:text-sm font-semibold tracking-[-0.12px] lg:tracking-[-0.14px] lg:uppercase text-primary/50">
            Tools & addons
          </p>

          <div
            onMouseLeave={() => {
              if (productsFirstItemRef.current) {
                const { top, left, width, height } =
                  productsFirstItemRef.current.getBoundingClientRect();
                setProductsCardBgValues({
                  top: top - 70,
                  left: left + 10,
                  width,
                  height,
                });
              }
            }}
            className="grid"
          >
            {toolsAndAddons.map((product, index) => (
              <ProductCard
                key={index}
                index={index}
                productsCardBgValues={productsCardBgValues}
                setProductsCardBgValues={setProductsCardBgValues}
                {...product}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
