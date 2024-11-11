"use client";
import { useState } from "react";
import Image from "next/image";
import product1IconImg from "@/assets/images/menu-product-1-icon.svg";
import product2IconImg from "@/assets/images/menu-product-2-icon.svg";
import product3IconImg from "@/assets/images/menu-product-3-icon.svg";
import product4IconImg from "@/assets/images/menu-product-4-icon.svg";
import product5IconImg from "@/assets/images/menu-product-5-icon.svg";
import Link from "next/link";

interface IProductCard {
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
  productsCardBgValues,
  setProductsCardBgValues,
  isNew,
  isComingSoon,
  icon,
  title,
  href,
  description,
}: IProductCard) {
  return (
    <Link
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
      className="group/product-card group relative z-10 p-2.5 lg:p-5 border lg:!border-0 border-transparent hover:border-dark-white bg-transparent hover:bg-white lg:!bg-transparent rounded-xl flex flex-col lg:flex-row justify-between items-start gap-4"
    >
      <div className="grid grid-cols-[38px_auto] lg:grid-cols-[48px_auto] items-start gap-2.5 lg:gap-4 pointer-events-none">
        <div className="flex">{icon}</div>

        <div>
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
      </div>

      <div className="pointer-events-none">
        <p className="text-[10px] sm:text-xs font-medium tracking-[-0.1px] sm:tracking-[-0.12px] text-primary/50">
          From
        </p>

        <h4 className="mb-1">
          <span className="text-sm sm:text-lg font-semibold tracking-[-0.18px]">
            $2.99
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-[-0.1px] sm:tracking-[-0.12px] text-primary/50">
            /GB
          </span>
        </h4>

        <p className="py-[2px] px-2 bg-accent/10 rounded-full text-[10px] sm:text-xs font-medium text-accent">
          Pay as you go
        </p>
      </div>
    </Link>
  );
}

export default function MenuPricing() {
  const [productsCardBgValues, setProductsCardBgValues] =
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
      href: "/",
      description:
        "Sed varius justo ac sem luctus lobortis. Nunc porta leo nec pretium laoreet.",
    },
    {
      icon: <Image src={product2IconImg} alt="" className="w-[48px]" />,
      title: "Datacenter Proxies",
      href: "/",
      description:
        "Sed varius justo ac sem luctus lobortis. Nunc porta leo nec pretium laoreet.",
    },
    {
      icon: <Image src={product3IconImg} alt="" className="w-[48px]" />,
      title: "ISP Proxies",
      href: "/",
      description:
        "Sed varius justo ac sem luctus lobortis. Nunc porta leo nec pretium laoreet.",
    },
    {
      icon: <Image src={product4IconImg} alt="" className="w-[48px]" />,
      title: "IPv6 Proxies",
      href: "/",
      description:
        "Sed varius justo ac sem luctus lobortis. Nunc porta leo nec pretium laoreet.",
    },
    {
      isNew: true,
      icon: <Image src={product5IconImg} alt="" className="w-[48px]" />,
      title: "Mobile Proxies",
      href: "/",
      description:
        "Sed varius justo ac sem luctus lobortis. Nunc porta leo nec pretium laoreet.",
    },
  ];

  return (
    <div className="lg:fixed top-[70px] left-1/2 lg:-translate-x-1/2 mt-4 lg:mt-0 lg:w-[100vw] border-y border-dashed lg:border-solid border-dark-white lg:bg-white lg:opacity-0 group-hover:opacity-100 lg:pointer-events-none group-hover:pointer-events-auto duration-200">
      <div className="mx-auto container max-w-[1320px] py-4 lg:py-8 lg:px-5">
        <div>
          <p className="mb-4 lg:pb-3 lg:border-b border-dashed border-dark-white text-xs lg:text-sm font-semibold tracking-[-0.12px] lg:tracking-[-0.14px] lg:uppercase text-primary/50">
            Proxy solutions
          </p>

          <div
            onMouseLeave={() => {
              setProductsCardBgValues({
                top: 0,
                left: 0,
                width: 0,
                height: 0,
              });
            }}
            className="grid lg:grid-cols-2 gap-2.5 lg:gap-0"
          >
            {products.map((product, index) => (
              <ProductCard
                key={index}
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
      </div>
    </div>
  );
}
