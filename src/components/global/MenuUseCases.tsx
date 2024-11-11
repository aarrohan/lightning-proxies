"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useCase1Img from "@/assets/images/use-case-1.svg";
import useCase2Img from "@/assets/images/use-case-2.svg";
import useCase3Img from "@/assets/images/use-case-3.svg";
import Link from "next/link";

interface IUseCaseCard {
  index?: number;
  firstItemRef?: React.MutableRefObject<HTMLAnchorElement | null>;
  useCasesCardBgValues?: IUseCasesCardBgValues;
  setUseCasesCardBgValues?: (values: IUseCasesCardBgValues) => void;
  img: JSX.Element;
  title: string;
  href: string;
  description: string;
}

interface IUseCasesCardBgValues {
  index: number;
  top: number;
  left: number;
  width: number;
  height: number;
}

function UseCaseCard({
  index = 0,
  firstItemRef,
  useCasesCardBgValues,
  setUseCasesCardBgValues,
  title,
  href,
  description,
}: IUseCaseCard) {
  useEffect(() => {
    if (firstItemRef) {
      const firstItem = firstItemRef.current;

      if (firstItem) {
        const { top, left, width, height } = firstItem.getBoundingClientRect();

        if (useCasesCardBgValues && setUseCasesCardBgValues) {
          setUseCasesCardBgValues({
            index: 0,
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

        if (index >= 0 && useCasesCardBgValues && setUseCasesCardBgValues) {
          setUseCasesCardBgValues({
            index,
            top: top - 70,
            left: left + 10,
            width,
            height,
          });
        }
      }}
      className="group/menu-use-case-card group relative z-10 p-2.5 lg:p-5 border lg:!border-0 border-transparent hover:border-dark-white bg-transparent hover:bg-white lg:!bg-transparent rounded-lg lg:rounded-xl"
    >
      <div className="pointer-events-none">
        <p className="flex items-center text-xs lg:text-base font-medium tracking-[-0.12px] lg:tracking-[-0.16px]">
          {title}{" "}
          <svg
            width="4"
            height="7"
            viewBox="0 0 4 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 group-hover/menu-use-case-card:ml-2 opacity-0 group-hover/menu-use-case-card:opacity-100 duration-200"
          >
            <path
              d="M0.15976 0.97662C-0.0532533 0.763607 -0.0532533 0.418244 0.15976 0.205231C0.372773 -0.00778212 0.718136 -0.00778212 0.93115 0.205231L3.84024 3.11432C4.05325 3.32733 4.05325 3.6727 3.84024 3.88571L0.93115 6.7948C0.718136 7.00782 0.372773 7.00782 0.15976 6.7948C-0.0532533 6.58179 -0.0532533 6.23643 0.15976 6.02341L2.1377 4.04547L2.54545 3.50002L2.1377 2.95456L0.15976 0.97662Z"
              fill="#1D2026"
            />
          </svg>
        </p>

        <p className="mt-1 max-w-[320px] text-[10px] lg:text-sm tracking-[-0.1px] lg:tracking-[-0.14px] text-primary/75">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default function MenuUseCases() {
  const useCasesFirstItemRef = useRef<HTMLAnchorElement>(null);
  const [useCasesCardBgValues, setUseCasesCardBgValues] =
    useState<IUseCasesCardBgValues>({
      index: 0,
      top: 0,
      left: 0,
      width: 0,
      height: 0,
    });

  const useCases: IUseCaseCard[] = [
    {
      img: <Image src={useCase1Img} alt="" className="w-full rounded-xl" />,
      title: "SERP Monitoring",
      href: "/",
      description:
        "Sed varius justo ac sem luctus lobortis. Nunc porta leo nec pretium laoreet.",
    },
    {
      img: <Image src={useCase2Img} alt="" className="w-full rounded-xl" />,
      title: "Web Scraping",
      href: "/",
      description:
        "Sed varius justo ac sem luctus lobortis. Nunc porta leo nec pretium laoreet.",
    },
    {
      img: <Image src={useCase3Img} alt="" className="w-full rounded-xl" />,
      title: "Market Research",
      href: "/",
      description:
        "Sed varius justo ac sem luctus lobortis. Nunc porta leo nec pretium laoreet.",
    },
    {
      img: <Image src={useCase1Img} alt="" className="w-full rounded-xl" />,
      title: "Ad Verification",
      href: "/",
      description:
        "Sed varius justo ac sem luctus lobortis. Nunc porta leo nec pretium laoreet.",
    },
    {
      img: <Image src={useCase2Img} alt="" className="w-full rounded-xl" />,
      title: "Brand Protection",
      href: "/",
      description:
        "Sed varius justo ac sem luctus lobortis. Nunc porta leo nec pretium laoreet.",
    },
  ];

  return (
    <div className="lg:fixed top-[70px] left-1/2 lg:-translate-x-1/2 lg:w-[100vw] border-b lg:border-y border-dashed lg:border-solid border-dark-white lg:bg-white lg:opacity-0 group-hover:opacity-100 lg:pointer-events-none group-hover:pointer-events-auto duration-200">
      <div className="mx-auto container max-w-[1320px] py-4 lg:px-5">
        <div>
          <div className="mb-4 lg:pb-3 lg:border-b border-dashed border-dark-white flex justify-between items-center">
            <p className="text-xs lg:text-sm font-semibold tracking-[-0.12px] lg:tracking-[-0.14px] lg:uppercase text-primary/50">
              Use cases
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

          <div className="grid lg:grid-cols-3 gap-4">
            <div
              onMouseLeave={() => {
                if (useCasesFirstItemRef.current) {
                  const { top, left, width, height } =
                    useCasesFirstItemRef.current.getBoundingClientRect();

                  setUseCasesCardBgValues({
                    index: 0,
                    top: top - 70,
                    left: left + 10,
                    width,
                    height,
                  });
                }
              }}
              className="col-span-2 grid lg:grid-cols-2"
            >
              {useCases.map((useCase, index) => (
                <UseCaseCard
                  key={index}
                  index={index}
                  firstItemRef={useCasesFirstItemRef}
                  useCasesCardBgValues={useCasesCardBgValues}
                  setUseCasesCardBgValues={setUseCasesCardBgValues}
                  {...useCase}
                />
              ))}

              <div
                className={`absolute bg-off-white rounded-xl hidden lg:block ${
                  useCasesCardBgValues.width === 0 ? "opacity-0" : ""
                } duration-300`}
                style={{
                  top: useCasesCardBgValues.top,
                  left: useCasesCardBgValues.left,
                  width: useCasesCardBgValues.width,
                  height: useCasesCardBgValues.height,
                }}
              ></div>
            </div>

            <div className="pl-4 border-l border-dashed border-dark-white hidden lg:block">
              <div className="relative">
                {useCases.map((useCase, index) => {
                  return (
                    <div
                      key={index}
                      className={`absolute top-0 left-0 w-full ${
                        useCasesCardBgValues.index !== index ? "opacity-0" : ""
                      } duration-1000`}
                    >
                      {useCase.img}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
