"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import article3Img from "@/assets/images/article-3.png";
import article7Img from "@/assets/images/article-7.png";

interface IFAQ {
  initialState?: boolean;
  question: string;
  answer: string;
}

function FAQ({ initialState = false, question, answer }: IFAQ) {
  const [isActive, setIsActive] = useState<boolean>(initialState);

  return (
    <div className="p-6 border border-dark-white bg-white shadow-[0px_10px_10px_0px_rgba(0,0,0,0.02),0px_1px_0px_0px_rgba(0,0,0,0.02)] rounded-2xl space-y-3.5">
      <p
        onClick={() => setIsActive(!isActive)}
        className="flex items-center gap-2.5 text-lg sm:text-xl font-medium tracking-[-0.18px] sm:tracking-[-0.2px] text-primary/80 cursor-pointer"
      >
        <span
          className={`w-[3px] h-[20px] ${
            isActive ? "bg-accent" : "bg-primary/50"
          } block`}
        ></span>
        {question}
      </p>

      {isActive && (
        <p className="text-sm sm:text-lg tracking-[-0.14px] sm:tracking-[-0.18px] text-primary/75">
          {answer}
        </p>
      )}
    </div>
  );
}

export default function HeroSection() {
  const [currentInfoStep, setCurrentInfoStep] = useState<number>(1);

  const scrollProgressRef = useRef<HTMLSpanElement | null>(null);
  const step1Ref = useRef<HTMLDivElement | null>(null);
  const step2Ref = useRef<HTMLHeadingElement | null>(null);
  const step3Ref = useRef<HTMLHeadingElement | null>(null);
  const step4Ref = useRef<HTMLHeadingElement | null>(null);
  const step5Ref = useRef<HTMLHeadingElement | null>(null);
  const point1Ref = useRef<HTMLDivElement | null>(null);
  const point2Ref = useRef<HTMLDivElement | null>(null);
  const point3Ref = useRef<HTMLDivElement | null>(null);
  const point4Ref = useRef<HTMLDivElement | null>(null);
  const point5Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  useEffect(() => {
    const step2 = step2Ref.current;

    if (step2) {
      gsap.to(step2, {
        scrollTrigger: {
          trigger: step2,
          start: "center center",
          end: "center center",
          onEnter: () => setCurrentInfoStep(2),
          onLeaveBack: () => setCurrentInfoStep(1),
        },
      });
    }

    const step3 = step3Ref.current;

    if (step3) {
      gsap.to(step3, {
        scrollTrigger: {
          trigger: step3,
          start: "center center",
          end: "center center",
          onEnter: () => setCurrentInfoStep(3),
          onLeaveBack: () => setCurrentInfoStep(2),
        },
      });
    }

    const step4 = step4Ref.current;

    if (step4) {
      gsap.to(step4, {
        scrollTrigger: {
          trigger: step4,
          start: "center center",
          end: "center center",
          onEnter: () => setCurrentInfoStep(4),
          onLeaveBack: () => setCurrentInfoStep(3),
        },
      });
    }

    const step5 = step5Ref.current;

    if (step5) {
      gsap.to(step5, {
        scrollTrigger: {
          trigger: step5,
          start: "center center",
          end: "center center",
          onEnter: () => setCurrentInfoStep(5),
          onLeaveBack: () => setCurrentInfoStep(4),
        },
      });
    }
  }, []);

  useEffect(() => {
    const scrollProgress = scrollProgressRef.current;
    const step1 = step1Ref.current;
    const step2 = step2Ref.current;
    const step3 = step3Ref.current;
    const step4 = step4Ref.current;
    const step5 = step5Ref.current;
    const point1 = point1Ref.current;
    const point2 = point2Ref.current;
    const point3 = point3Ref.current;
    const point4 = point4Ref.current;
    const point5 = point5Ref.current;

    if (
      scrollProgress &&
      step1 &&
      step2 &&
      step3 &&
      step4 &&
      step5 &&
      point1 &&
      point2 &&
      point3 &&
      point4 &&
      point5
    ) {
      gsap.to(scrollProgress, {
        height: () => {
          const startingPointTop = point1.getBoundingClientRect().top;
          const endingPointTop = point5.getBoundingClientRect().top;

          return endingPointTop - startingPointTop;
        },
        scrollTrigger: {
          trigger: step1,
          start: "top center",
          end: `+=${step5.offsetTop} bottom`,
          scrub: 1,
        },
      });

      // gsap.to(scrollProgress, {
      //   height: () => {
      //     const point1Top = point1.getBoundingClientRect().top;
      //     const point2Top = point2.getBoundingClientRect().top;
      //     const point3Top = point3.getBoundingClientRect().top;

      //     const newPointTops = point3Top - point2Top;
      //     const oldPointTops = point2Top - point1Top;

      //     return newPointTops + oldPointTops;
      //   },
      //   scrollTrigger: {
      //     trigger: step2,
      //     start: "top center",
      //     end: `+=${step3.getBoundingClientRect().top}`,
      //     scrub: 1,
      //     markers: true,
      //   },
      // });
    }
  }, []);

  const faqs: IFAQ[] = [
    {
      initialState: true,
      question: "How do I use Octo app?",
      answer:
        "Using OctoBrowser app is quite simple. After downloading their app from the official website, you will have to create a profile with a certain name, after that simply check the instructions above and complete with your proxy credential. Once it's all done, press RUN and you are now using OctoBrowser with proxies.",
    },
    {
      initialState: false,
      question: "What is an anti-detect browser?",
      answer:
        "An anti-detect browser is a tool that pretends to be your web browser, changing how it looks and acts online to make you more anonymous.",
    },
  ];

  return (
    <section className="pt-[70px]">
      <div className="relative mx-auto container max-w-[1320px] pt-10 sm:pt-14 px-5">
        <div className="mb-8 sm:mb-10 flex justify-between items-center">
          <p className="flex items-center gap-4 text-xs sm:text-sm font-semibold text-accent tracking-[-0.12px] sm:tracking-[-0.14px]">
            Blog <span className="text-primary/25">/</span> Guide
          </p>

          <Link
            href={"/"}
            className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-accent tracking-[-0.12px] sm:tracking-[-0.14px]"
          >
            Write to Us{" "}
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.21967 0.46967C0.512563 0.176777 0.987437 0.176777 1.28033 0.46967L5.28033 4.46967C5.57322 4.76256 5.57322 5.23744 5.28033 5.53033L1.28033 9.53033C0.987437 9.82322 0.512563 9.82322 0.21967 9.53033C-0.0732233 9.23744 -0.0732233 8.76256 0.21967 8.46967L3.68934 5L0.21967 1.53033C-0.0732233 1.23744 -0.0732233 0.762563 0.21967 0.46967Z"
                fill="#1675FF"
              />
            </svg>
          </Link>
        </div>

        <div className="relative grid lg:grid-cols-[200px_auto] gap-16">
          <div className="sticky top-0 h-fit pt-[138px] hidden lg:block">
            <p className="mb-5 text-sm font-semibold tracking-[-0.14px] uppercase text-accent">
              In this blog
            </p>

            <div className="relative space-y-5">
              <span className="absolute top-5 -left-[25px] w-[2px] h-[calc(100%-30px)] bg-[#C1D8FB] block overflow-hidden">
                <span
                  ref={scrollProgressRef}
                  className="absolute top-0 left-0 w-full bg-accent block"
                ></span>
              </span>

              <p
                onClick={() => {
                  const el = document.querySelector("#part1");

                  if (el) {
                    window.scrollTo({
                      top:
                        el.getBoundingClientRect().top + window.scrollY - 100,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`relative z-10 text-base font-medium tracking-[-0.16px] ${
                  currentInfoStep > 0 ? "text-primary/75" : "text-primary/40"
                } duration-200 cursor-pointer`}
              >
                ​​Setting Up a Proxy in the OctoBrowser
                <span
                  ref={point1Ref}
                  className={`absolute top-1/2 -left-7 -translate-y-1/2 w-[8px] aspect-square ${
                    currentInfoStep > 0 ? "bg-accent" : "bg-[#C1D8FB]"
                  } rounded-full block duration-200`}
                ></span>
              </p>

              <p
                onClick={() => {
                  const el = document.querySelector("#part2");

                  if (el) {
                    window.scrollTo({
                      top:
                        el.getBoundingClientRect().top + window.scrollY - 100,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`relative z-10 text-base font-medium tracking-[-0.16px] ${
                  currentInfoStep > 1 ? "text-primary/75" : "text-primary/40"
                } duration-200 cursor-pointer`}
              >
                How to Integrate Proxies with OctoBrowser?
                <span
                  ref={point2Ref}
                  className={`absolute top-1/2 -left-7 -translate-y-1/2 w-[8px] aspect-square ${
                    currentInfoStep > 1 ? "bg-accent" : "bg-[#C1D8FB]"
                  } rounded-full block duration-200`}
                ></span>
              </p>

              <p
                onClick={() => {
                  const el = document.querySelector("#part3");

                  if (el) {
                    window.scrollTo({
                      top:
                        el.getBoundingClientRect().top + window.scrollY - 100,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`relative z-10 text-base font-medium tracking-[-0.16px] ${
                  currentInfoStep > 2 ? "text-primary/75" : "text-primary/40"
                } duration-200 cursor-pointer`}
              >
                Residential Proxies
                <span
                  ref={point3Ref}
                  className={`absolute top-1/2 -left-7 -translate-y-1/2 w-[8px] aspect-square ${
                    currentInfoStep > 2 ? "bg-accent" : "bg-[#C1D8FB]"
                  } rounded-full block duration-200`}
                ></span>
              </p>

              <p
                onClick={() => {
                  const el = document.querySelector("#part4");

                  if (el) {
                    window.scrollTo({
                      top:
                        el.getBoundingClientRect().top + window.scrollY - 100,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`relative z-10 text-base font-medium tracking-[-0.16px] ${
                  currentInfoStep > 3 ? "text-primary/75" : "text-primary/40"
                } duration-200 cursor-pointer`}
              >
                Rotating Datacenter Proxies
                <span
                  ref={point4Ref}
                  className={`absolute top-1/2 -left-7 -translate-y-1/2 w-[8px] aspect-square ${
                    currentInfoStep > 3 ? "bg-accent" : "bg-[#C1D8FB]"
                  } rounded-full block duration-200`}
                ></span>
              </p>

              <p
                onClick={() => {
                  const el = document.querySelector("#part5");

                  if (el) {
                    window.scrollTo({
                      top:
                        el.getBoundingClientRect().top + window.scrollY - 100,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`relative z-10 text-base font-medium tracking-[-0.16px] ${
                  currentInfoStep > 4 ? "text-primary/75" : "text-primary/40"
                } duration-200 cursor-pointer`}
              >
                Discount Code
                <span
                  ref={point5Ref}
                  className={`absolute top-1/2 -left-7 -translate-y-1/2 w-[8px] aspect-square ${
                    currentInfoStep > 4 ? "bg-accent" : "bg-[#C1D8FB]"
                  } rounded-full block duration-200`}
                ></span>
              </p>
            </div>
          </div>

          <div>
            <h1 className="mb-4 sm:mb-5 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
              Setting Up a Proxy in the OctoBrowser
            </h1>

            <div className="flex items-center gap-2.5 opacity-75">
              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.18px] text-primary/65">
                August 27, 2024
              </p>

              <span className="w-[3px] sm:w-[4px] aspect-square bg bg-primary/50 rounded-full block"></span>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.18px] text-primary/65">
                Announcements
              </p>
            </div>

            <Image
              src={article3Img}
              alt=""
              className="my-12 w-full border border-dark-white rounded-2xl"
            />

            <div ref={step1Ref} className="space-y-8">
              <p
                id="part1"
                className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]"
              >
                Setting Up a Proxy in the OctoBrowser
              </p>

              <p className="text-sm sm:text-lg tracking-[-0.14px] sm:tracking-[-0.18px] text-primary/75">
                ​Pairing Octo anti-detection browser with proxies provides a
                reliable means to safeguard online anonymity, manage numerous
                accounts effortlessly, and fortify defenses against digital
                fingerprinting. This tutorial is designed to guide you through
                seamlessly integrating LightningProxies Residential and
                Datacenter Proxies with Octo.​
              </p>

              <p
                ref={step2Ref}
                id="part2"
                className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]"
              >
                How to Integrate LightningProxies' Proxies with OctoBrowser?
              </p>

              <p className="text-sm sm:text-lg tracking-[-0.14px] sm:tracking-[-0.18px] text-primary/75">
                1. Start by downloading and installing the Octo app from their
                official website. <br />
                2. Create your account and log in. <br />
                3. Once logged in, open the app and click on add new profile.{" "}
                <br />
                4. In the menu, click on Proxy and enter the following details:
              </p>

              <Image src={article7Img} alt="" className="w-full" />

              <p
                ref={step3Ref}
                id="part3"
                className="text-lg sm:text-xl font-medium tracking-[-0.18px] sm:tracking-[-0.2px]"
              >
                Residential Proxies
              </p>

              <div className="py-5 px-6 bg-primary rounded-xl sm:rounded-2xl">
                <p className="font-mono text-[10px] sm:text-sm leading-[20px] sm:leading-[32px] break-all sm:break-normal text-white">
                  Connection type:{" "}
                  <span className="text-[#1675FF]">HTTP or SOCKS5</span> <br />
                  Proxy IP:{" "}
                  <span className="text-[#12A250]">
                    residential-us.lightningproxies.net
                  </span>{" "}
                  <br />
                  Proxy port: <span className="text-[#F7931A]">16666</span>{" "}
                  <br />
                  <br />
                  <span className="text-[#12A250]">
                    {"//"} For country-specific proxies, refer to our proxy
                    generator.
                  </span>
                </p>
              </div>

              <p
                ref={step4Ref}
                id="part4"
                className="text-lg sm:text-xl font-medium tracking-[-0.18px] sm:tracking-[-0.2px]"
              >
                Rotating Datacenter Proxies
              </p>

              <div className="py-5 px-6 bg-primary rounded-xl sm:rounded-2xl">
                <p className="font-mono text-[10px] sm:text-sm leading-[20px] sm:leading-[32px] break-all sm:break-normal text-white">
                  Connection type: <span className="text-[#1675FF]">HTTP</span>{" "}
                  <br />
                  Proxy IP:{" "}
                  <span className="text-[#12A250]">
                    datacenter-ww.lightningproxies.net
                  </span>{" "}
                  <br />
                  Proxy port: <span className="text-[#F7931A]">
                    3500-4000
                  </span>{" "}
                  <br />
                  <br />
                  <span className="text-[#12A250]">
                    {"//"} All are working with same output
                  </span>
                </p>
              </div>

              <p className="text-sm sm:text-lg tracking-[-0.14px] sm:tracking-[-0.18px] text-primary/75">
                That's not all! All LightningProxies users beneficiate 4 days
                free of the Starter subscription while applying the promocode
                below.
              </p>

              <p
                ref={step5Ref}
                id="part5"
                className="py-4 sm:py-6 px-7 sm:px-10 bg-accent/10 rounded-md sm:rounded-lg text-sm sm:text-lg tracking-[-0.14px] sm:tracking-[-0.18px]"
              >
                Use code{" "}
                <span className="font-semibold text-accent">LIGHTNING</span> at
                check out and start browsing efficient and anonymous!
              </p>

              <p className="text-lg sm:text-2xl font-medium tracking-[-0.18px] sm:tracking-[-0.24px]">
                Frequently Asked Questions
              </p>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FAQ key={index} {...faq} />
                ))}
              </div>
            </div>

            <div className="mt-10 pt-5 sm:pt-8 border-t border-dark-white flex justify-between items-center">
              <div className="flex items-center gap-3 sm:gap-3.5">
                <span className="relative w-[38px] sm:w-[48px] aspect-square bg-dark-white rounded-full">
                  <Image
                    src={`https://lightningproxies.net/assets/images/team-02.svg`}
                    alt=""
                    fill
                  />
                </span>

                <div>
                  <h3 className="text-sm sm:text-lg font-medium tracking-[-0.14px] sm:tracking-[-0.18px]">
                    JustWatch
                  </h3>

                  <p className="text-xs sm:text-base tracking-[-0.16px] text-primary/50">
                    Moderator @LightingProxies
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex gap-2.5 sm:gap-3">
                <Link
                  href={"https://x.com/lightningproxi"}
                  aria-label="twitter"
                  target="_blank"
                  className="w-[32px] sm:w-[38px] h-[32px] sm:h-[38px] border border-dark-white bg-white rounded-md flex justify-center items-center duration-200"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[12px] sm:w-[15px] h-auto"
                  >
                    <g clipPath="url(#clip0_10_364)">
                      <path
                        d="M8.82939 6.39608L14.1044 0.396484H12.8548L8.27261 5.60479L4.61554 0.396484H0.396484L5.92791 8.27311L0.396484 14.5638H1.64605L6.48186 9.06252L10.3448 14.5638H14.5639M2.09704 1.31848H4.01673L12.8539 13.6871H10.9337"
                        fill="#121118"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_364">
                        <rect
                          width="14.1674"
                          height="14.1674"
                          fill="#121118"
                          transform="translate(0.396484 0.396484)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>

                <Link
                  href={"https://www.instagram.com/lightningproxy/"}
                  aria-label="instagram"
                  target="_blank"
                  className="w-[32px] sm:w-[38px] h-[32px] sm:h-[38px] border border-dark-white bg-white rounded-md flex justify-center items-center duration-200"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[13px] sm:w-[15px] h-auto"
                  >
                    <g clipPath="url(#clip0_10_368)">
                      <path
                        d="M7.44051 1.67367C9.33306 1.67367 9.55522 1.68211 10.3032 1.71585C10.995 1.74678 11.369 1.86208 11.6193 1.9605C11.9511 2.08986 12.1874 2.24171 12.4348 2.48918C12.6823 2.73665 12.837 2.97286 12.9635 3.30469C13.0591 3.55497 13.1772 3.92898 13.2082 4.62076C13.2419 5.36878 13.2503 5.59093 13.2503 7.48348C13.2503 9.37603 13.2419 9.59819 13.2082 10.3462C13.1772 11.038 13.0619 11.412 12.9635 11.6623C12.8341 11.9941 12.6823 12.2303 12.4348 12.4778C12.1874 12.7253 11.9511 12.8799 11.6193 13.0065C11.369 13.1021 10.995 13.2202 10.3032 13.2511C9.55522 13.2849 9.33306 13.2933 7.44051 13.2933C5.54796 13.2933 5.32581 13.2849 4.57779 13.2511C3.88601 13.2202 3.512 13.1049 3.26172 13.0065C2.92989 12.8771 2.69367 12.7253 2.44621 12.4778C2.19874 12.2303 2.04408 11.9941 1.91753 11.6623C1.82192 11.412 1.70381 11.038 1.67288 10.3462C1.63913 9.59819 1.6307 9.37603 1.6307 7.48348C1.6307 5.59093 1.63913 5.36878 1.67288 4.62076C1.70381 3.92898 1.81911 3.55497 1.91753 3.30469C2.04689 2.97286 2.19874 2.73665 2.44621 2.48918C2.69367 2.24171 2.92989 2.08705 3.26172 1.9605C3.512 1.86489 3.88601 1.74678 4.57779 1.71585C5.32581 1.67929 5.55078 1.67367 7.44051 1.67367ZM7.44051 0.396973C5.51703 0.396973 5.27519 0.405409 4.51873 0.439154C3.76509 0.4729 3.25047 0.59382 2.80053 0.768171C2.33372 0.948146 1.94003 1.1928 1.54633 1.58649C1.15264 1.98019 0.910797 2.3767 0.72801 2.84069C0.553659 3.29063 0.432738 3.80525 0.398993 4.5617C0.365248 5.31535 0.356812 5.55719 0.356812 7.48067C0.356812 9.40415 0.365248 9.64599 0.398993 10.4024C0.432738 11.1561 0.553659 11.6707 0.72801 12.1235C0.907985 12.5903 1.15264 12.984 1.54633 13.3777C1.94003 13.7714 2.33654 14.0132 2.80053 14.196C3.25047 14.3703 3.76509 14.4913 4.52155 14.525C5.278 14.5587 5.51703 14.5672 7.44333 14.5672C9.36962 14.5672 9.60865 14.5587 10.3651 14.525C11.1188 14.4913 11.6334 14.3703 12.0861 14.196C12.5529 14.016 12.9466 13.7714 13.3403 13.3777C13.734 12.984 13.9759 12.5875 14.1586 12.1235C14.333 11.6735 14.4539 11.1589 14.4877 10.4024C14.5214 9.64599 14.5298 9.40696 14.5298 7.48067C14.5298 5.55438 14.5214 5.31535 14.4877 4.55889C14.4539 3.80525 14.333 3.29063 14.1586 2.83788C13.9787 2.37107 13.734 1.97738 13.3403 1.58368C12.9466 1.18999 12.5501 0.948146 12.0861 0.765359C11.6362 0.591008 11.1216 0.470087 10.3651 0.436342C9.60584 0.405409 9.364 0.396973 7.44051 0.396973Z"
                        fill="#121118"
                      />
                      <path
                        d="M7.44051 1.67367C9.33306 1.67367 9.55522 1.68211 10.3032 1.71585C10.995 1.74678 11.369 1.86208 11.6193 1.9605C11.9511 2.08986 12.1874 2.24171 12.4348 2.48918C12.6823 2.73665 12.837 2.97286 12.9635 3.30469C13.0591 3.55497 13.1772 3.92898 13.2082 4.62076C13.2419 5.36878 13.2503 5.59093 13.2503 7.48348C13.2503 9.37603 13.2419 9.59819 13.2082 10.3462C13.1772 11.038 13.0619 11.412 12.9635 11.6623C12.8341 11.9941 12.6823 12.2303 12.4348 12.4778C12.1874 12.7253 11.9511 12.8799 11.6193 13.0065C11.369 13.1021 10.995 13.2202 10.3032 13.2511C9.55522 13.2849 9.33306 13.2933 7.44051 13.2933C5.54796 13.2933 5.32581 13.2849 4.57779 13.2511C3.88601 13.2202 3.512 13.1049 3.26172 13.0065C2.92989 12.8771 2.69367 12.7253 2.44621 12.4778C2.19874 12.2303 2.04408 11.9941 1.91753 11.6623C1.82192 11.412 1.70381 11.038 1.67288 10.3462C1.63913 9.59819 1.6307 9.37603 1.6307 7.48348C1.6307 5.59093 1.63913 5.36878 1.67288 4.62076C1.70381 3.92898 1.81911 3.55497 1.91753 3.30469C2.04689 2.97286 2.19874 2.73665 2.44621 2.48918C2.69367 2.24171 2.92989 2.08705 3.26172 1.9605C3.512 1.86489 3.88601 1.74678 4.57779 1.71585C5.32581 1.67929 5.55078 1.67367 7.44051 1.67367Z"
                        fill="#121118"
                      />
                      <path
                        d="M7.4405 3.84473C5.43266 3.84473 3.80164 5.47294 3.80164 7.48359C3.80164 9.49425 5.42985 11.1225 7.4405 11.1225C9.45116 11.1225 11.0794 9.49425 11.0794 7.48359C11.0794 5.47294 9.45116 3.84473 7.4405 3.84473ZM7.4405 9.84295C6.13568 9.84295 5.07833 8.7856 5.07833 7.48078C5.07833 6.17596 6.13568 5.11861 7.4405 5.11861C8.74532 5.11861 9.80267 6.17596 9.80267 7.48078C9.80267 8.7856 8.74532 9.84295 7.4405 9.84295Z"
                        fill="white"
                      />
                      <path
                        d="M11.2228 4.54763C11.6918 4.54763 12.072 4.16741 12.072 3.69838C12.072 3.22935 11.6918 2.84912 11.2228 2.84912C10.7538 2.84912 10.3735 3.22935 10.3735 3.69838C10.3735 4.16741 10.7538 4.54763 11.2228 4.54763Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_368">
                        <rect
                          width="14.1674"
                          height="14.1674"
                          fill="white"
                          transform="translate(0.356812 0.396973)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>

                <Link
                  href={"https://discord.gg/Pt5Es5xWSS"}
                  aria-label="discord"
                  target="_blank"
                  className="w-[32px] sm:w-[38px] h-[32px] sm:h-[38px] border border-dark-white bg-white rounded-md flex justify-center items-center duration-200"
                >
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[15px] sm:w-[20px] h-auto"
                  >
                    <g clipPath="url(#clip0_10_374)">
                      <path
                        d="M16.9934 5.0301C15.7809 4.47376 14.4807 4.06387 13.1213 3.82911C13.0965 3.82458 13.0718 3.8359 13.059 3.85855C12.8918 4.15596 12.7066 4.54396 12.5769 4.84892C11.1147 4.63002 9.66003 4.63002 8.22783 4.84892C8.09809 4.53718 7.90614 4.15596 7.73818 3.85855C7.72542 3.83666 7.70069 3.82533 7.67593 3.82911C6.31723 4.06312 5.01702 4.47301 3.80378 5.0301C3.79328 5.03463 3.78427 5.04218 3.7783 5.05199C1.31207 8.73648 0.636468 12.3304 0.967897 15.8798C0.969396 15.8971 0.979144 15.9138 0.992641 15.9243C2.61979 17.1193 4.19596 17.8447 5.74286 18.3255C5.76762 18.3331 5.79385 18.324 5.8096 18.3036C6.17552 17.8039 6.50171 17.277 6.78138 16.7229C6.79788 16.6905 6.78213 16.652 6.74839 16.6392C6.23101 16.4429 5.73836 16.2036 5.26446 15.9319C5.22697 15.91 5.22397 15.8564 5.25846 15.8307C5.35818 15.756 5.45794 15.6782 5.55316 15.5997C5.57039 15.5854 5.59439 15.5823 5.61465 15.5914C8.72796 17.0128 12.0985 17.0128 15.1751 15.5914C15.1953 15.5816 15.2193 15.5846 15.2373 15.599C15.3325 15.6775 15.4323 15.756 15.5327 15.8307C15.5672 15.8564 15.565 15.91 15.5275 15.9319C15.0536 16.2089 14.5609 16.4429 14.0428 16.6384C14.0091 16.6512 13.9941 16.6905 14.0106 16.7229C14.2963 17.2763 14.6224 17.8032 14.9816 18.3029C14.9966 18.324 15.0236 18.3331 15.0483 18.3255C16.6027 17.8447 18.1789 17.1193 19.8061 15.9243C19.8203 15.9138 19.8293 15.8979 19.8308 15.8805C20.2275 11.7771 19.1664 8.21261 17.0182 5.05274C17.0129 5.04218 17.0039 5.03463 16.9934 5.0301ZM7.2463 13.7186C6.30898 13.7186 5.53665 12.8581 5.53665 11.8012C5.53665 10.7444 6.294 9.88389 7.2463 9.88389C8.20607 9.88389 8.97092 10.752 8.95592 11.8012C8.95592 12.8581 8.19857 13.7186 7.2463 13.7186ZM13.5674 13.7186C12.6301 13.7186 11.8578 12.8581 11.8578 11.8012C11.8578 10.7444 12.6151 9.88389 13.5674 9.88389C14.5272 9.88389 15.292 10.752 15.2771 11.8012C15.2771 12.8581 14.5272 13.7186 13.5674 13.7186Z"
                        fill="#121118"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_374">
                        <rect
                          width="19.1977"
                          height="19.1977"
                          fill="#121118"
                          transform="translate(0.802124 0.881836)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>

                <Link
                  href={"https://t.me/lightningproxies"}
                  aria-label="telegram"
                  target="_blank"
                  className="w-[32px] sm:w-[38px] h-[32px] sm:h-[38px] border border-dark-white bg-white rounded-md flex justify-center items-center duration-200"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[13px] sm:w-[15px] h-auto"
                  >
                    <g clipPath="url(#clip0_10_378)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.48011 7.06359C5.1409 5.46865 7.582 4.41716 8.80341 3.90914C12.2908 2.45862 13.0154 2.20665 13.4877 2.19833C13.5916 2.1965 13.8239 2.22225 13.9743 2.34433C14.1014 2.44741 14.1363 2.58667 14.1531 2.6844C14.1698 2.78214 14.1906 3.00478 14.1741 3.17875C13.9851 5.1644 13.1674 9.98304 12.7513 12.207C12.5753 13.148 12.2287 13.4636 11.8932 13.4944C11.1639 13.5615 10.6102 13.0125 9.90386 12.5495C8.79863 11.825 8.17424 11.374 7.10142 10.6671C5.8616 9.85003 6.66533 9.40098 7.3719 8.6671C7.55681 8.47504 10.7699 5.55253 10.8321 5.28741C10.8398 5.25425 10.8471 5.13066 10.7736 5.06539C10.7002 5.00013 10.5918 5.02245 10.5136 5.0402C10.4028 5.06536 8.63716 6.23236 5.21677 8.54122C4.71561 8.88536 4.26167 9.05303 3.85495 9.04424C3.40658 9.03456 2.5441 8.79073 1.90293 8.58231C1.11651 8.32668 0.49148 8.19152 0.545906 7.75738C0.574255 7.53125 0.885656 7.29999 1.48011 7.06359Z"
                        fill="#121118"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_378">
                        <rect
                          width="14.1674"
                          height="14.1674"
                          fill="#121118"
                          transform="translate(0.277588 0.396973)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
