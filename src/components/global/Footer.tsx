"use client";
import { useState } from "react";
import Image from "next/image";
import paymentMethodsImg from "@/assets/images/payment-methods.svg";
import Link from "next/link";
import logoWhiteImg from "@/assets/images/branding/logo-white.svg";
import footerIconImg from "@/assets/images/branding/footer-icon.svg";
import { usePathname } from "next/navigation";

export default function Footer() {
  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  const pathname = usePathname();

  if (pathname === "/email-subscription/cancel") return null;

  return (
    <footer
      className="relative pt-20 sm:pt-14 pb-10 sm:pb-14"
      style={{
        background: `linear-gradient(180deg, #121118 34.42%, #000 100%)`,
      }}
    >
      {pathname !== "/coming-soon" && (
        <Image
          src={footerIconImg}
          alt=""
          className="absolute -top-[27.5px] sm:-top-[31px] left-1/2 -translate-x-1/2 w-[55px] sm:w-[62px]"
        />
      )}

      <div className="mx-auto container max-w-[1320px] px-5">
        <div className="mb-8 sm:mb-12 grid lg:grid-cols-[auto_580px] gap-8 sm:gap-12">
          <div>
            <h3 className="mb-3 sm:mb-5 text-[26px] sm:text-3xl font-semibold leading-[30px] sm:leading-[38px] tracking-[-0.52px] sm:tracking-[-0.9px] text-white">
              <span className="hidden sm:inline-block">
                Want insights from Lightning Proxies <br /> delivered straight
                to your mailbox
              </span>

              <span className="inline-block sm:hidden">
                Get insights delivered straight to your mailbox
              </span>
            </h3>

            <p className="text-xs sm:text-sm leading-[22px] tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75">
              Stay updated with the latest insights, tips, and proxy solutions
              from Lightning Proxies. Delivered straight to your inbox.
            </p>
          </div>

          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();

                setIsSubmited(true);
              }}
              className="mb-4 sm:mb-5 p-1.5 sm:p-2.5 pl-4 sm:pl-6 bg-white rounded-lg sm:rounded-xl flex items-center gap-5"
            >
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] placeholder:text-primary/50"
              />

              <button className="py-2 px-4 bg-primary rounded-md sm:rounded-lg text-xs sm:text-sm font-medium tracking-[-0.14px] text-white">
                Submit
              </button>
            </form>

            <p className="text-xs sm:text-sm leading-[22px] tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75">
              By clicking submit, you'll receive updates from Lightning Proxies.{" "}
              <br className="hidden sm:block" />
              We promise not to spam.
            </p>

            {isSubmited && (
              <p
                className={`mt-5 sm:mt-8 sm:mb-6 w-fit py-3 px-4 bg-[#16D857]/25 rounded-xl flex items-center gap-2.5 text-[11px] sm:text-sm tracking-[-0.11px] sm:tracking-[-0.14px] text-[#16D857] ${
                  !isSubmited ? "opacity-0 pointer-events-none" : ""
                } duration-200`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5C13.1421 16.5 16.5 13.1421 16.5 9Z"
                    stroke="#16D857"
                    strokeWidth="1.125"
                  />
                  <path
                    d="M6 9.375L7.875 11.25L12 6.75"
                    stroke="#16D857"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Thank you for your interest
              </p>
            )}
          </div>
        </div>

        <div className="pt-8 sm:pt-12 pb-12 sm:pb-20 border-t border-white/10 flex flex-wrap justify-between sm:justify-start lg:justify-between gap-12">
          <div className="w-full lg:w-fit">
            <Image src={logoWhiteImg} alt="" className="mb-5 w-[165px]" />

            <p className="mb-8 sm:mb-12 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-white/75">
              Faster, Stronger, Reliable.
            </p>

            <div>
              <p className="mb-4 sm:mb-5 text-xs sm:text-sm font-semibold tracking-[-0.14px] text-white">
                Connect with us
              </p>

              <div className="flex gap-2.5 sm:gap-3">
                <Link
                  href={"https://x.com/lightningproxi"}
                  aria-label="twitter"
                  target="_blank"
                  className="w-[32px] sm:w-[38px] h-[32px] sm:h-[38px] bg-white/10 hover:bg-white/15 rounded-md flex justify-center items-center duration-200"
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
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_364">
                        <rect
                          width="14.1674"
                          height="14.1674"
                          fill="white"
                          transform="translate(0.396484 0.396484)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>

                <Link
                  href={"https://www.instagram.com/lightningproxy"}
                  aria-label="instagram"
                  target="_blank"
                  className="w-[32px] sm:w-[38px] h-[32px] sm:h-[38px] bg-white/10 hover:bg-white/15 rounded-md flex justify-center items-center duration-200"
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
                        fill="white"
                      />
                      <path
                        d="M7.44051 1.67367C9.33306 1.67367 9.55522 1.68211 10.3032 1.71585C10.995 1.74678 11.369 1.86208 11.6193 1.9605C11.9511 2.08986 12.1874 2.24171 12.4348 2.48918C12.6823 2.73665 12.837 2.97286 12.9635 3.30469C13.0591 3.55497 13.1772 3.92898 13.2082 4.62076C13.2419 5.36878 13.2503 5.59093 13.2503 7.48348C13.2503 9.37603 13.2419 9.59819 13.2082 10.3462C13.1772 11.038 13.0619 11.412 12.9635 11.6623C12.8341 11.9941 12.6823 12.2303 12.4348 12.4778C12.1874 12.7253 11.9511 12.8799 11.6193 13.0065C11.369 13.1021 10.995 13.2202 10.3032 13.2511C9.55522 13.2849 9.33306 13.2933 7.44051 13.2933C5.54796 13.2933 5.32581 13.2849 4.57779 13.2511C3.88601 13.2202 3.512 13.1049 3.26172 13.0065C2.92989 12.8771 2.69367 12.7253 2.44621 12.4778C2.19874 12.2303 2.04408 11.9941 1.91753 11.6623C1.82192 11.412 1.70381 11.038 1.67288 10.3462C1.63913 9.59819 1.6307 9.37603 1.6307 7.48348C1.6307 5.59093 1.63913 5.36878 1.67288 4.62076C1.70381 3.92898 1.81911 3.55497 1.91753 3.30469C2.04689 2.97286 2.19874 2.73665 2.44621 2.48918C2.69367 2.24171 2.92989 2.08705 3.26172 1.9605C3.512 1.86489 3.88601 1.74678 4.57779 1.71585C5.32581 1.67929 5.55078 1.67367 7.44051 1.67367Z"
                        fill="white"
                      />
                      <path
                        d="M7.4405 3.84473C5.43266 3.84473 3.80164 5.47294 3.80164 7.48359C3.80164 9.49425 5.42985 11.1225 7.4405 11.1225C9.45116 11.1225 11.0794 9.49425 11.0794 7.48359C11.0794 5.47294 9.45116 3.84473 7.4405 3.84473ZM7.4405 9.84295C6.13568 9.84295 5.07833 8.7856 5.07833 7.48078C5.07833 6.17596 6.13568 5.11861 7.4405 5.11861C8.74532 5.11861 9.80267 6.17596 9.80267 7.48078C9.80267 8.7856 8.74532 9.84295 7.4405 9.84295Z"
                        fill="#121118"
                      />
                      <path
                        d="M11.2228 4.54763C11.6918 4.54763 12.072 4.16741 12.072 3.69838C12.072 3.22935 11.6918 2.84912 11.2228 2.84912C10.7538 2.84912 10.3735 3.22935 10.3735 3.69838C10.3735 4.16741 10.7538 4.54763 11.2228 4.54763Z"
                        fill="#121118"
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
                  className="w-[32px] sm:w-[38px] h-[32px] sm:h-[38px] bg-white/10 hover:bg-white/15 rounded-md flex justify-center items-center duration-200"
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
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_374">
                        <rect
                          width="19.1977"
                          height="19.1977"
                          fill="white"
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
                  className="w-[32px] sm:w-[38px] h-[32px] sm:h-[38px] bg-white/10 hover:bg-white/15 rounded-md flex justify-center items-center duration-200"
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
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_10_378">
                        <rect
                          width="14.1674"
                          height="14.1674"
                          fill="white"
                          transform="translate(0.277588 0.396973)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="min-w-[150px] sm:min-w-fit">
            <p className="mb-6 text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-white">
              Company
            </p>

            <div className="flex flex-col gap-y-5">
              <Link
                href={"/about"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                About Us
              </Link>

              <Link
                href={"/blog"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                Blogs
              </Link>

              <Link
                href={"/coming-soon"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                API
              </Link>

              <Link
                href={"/reseller-program"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                Reseller Program
              </Link>

              <Link
                href={"/coming-soon"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                Affiliate Program
              </Link>
            </div>
          </div>

          <div className="min-w-[150px] sm:min-w-fit">
            <p className="mb-6 text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-white">
              Proxies
            </p>

            <div className="flex flex-col gap-y-5">
              <Link
                href={"/products/residential-proxies"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                Residential Proxies
              </Link>

              <Link
                href={"/products/datacenter-proxies"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                Datacenter Proxies
              </Link>

              <Link
                href={"/products/isp-proxies"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                ISP Proxies
              </Link>

              <Link
                href={"/products/ipv6-proxies"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                IPv6 Proxies
              </Link>

              <Link
                href={"/products/mobile-proxies"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                Mobile Proxies
              </Link>
            </div>
          </div>

          <div className="order-6 sm:order-[initial] min-w-[150px] sm:min-w-fit">
            <p className="mb-6 text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-white">
              Resources
            </p>

            <div className="flex flex-col gap-y-5">
              <Link
                href={"/help-center"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                Help Center
              </Link>

              <Link
                href={"/coming-soon"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                Proxy Checker
              </Link>

              <Link
                href={"/coming-soon"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                Free Proxy List
              </Link>
            </div>
          </div>

          <div className="min-w-[150px] sm:min-w-fit">
            <p className="mb-6 text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-white">
              Use Cases
            </p>

            <div className="flex flex-col gap-y-5">
              <Link
                href={"/use-cases/ad-verification"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                Ad Verification
              </Link>

              <Link
                href={"/use-cases/brand-protection"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                Brand Protection
              </Link>

              <Link
                href={"/use-cases/market-research"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                Market Research
              </Link>

              <Link
                href={"/use-cases/serp-monitoring"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                SERP Monitoring
              </Link>

              <Link
                href={"/use-cases"}
                className="group flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                View All{" "}
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
              </Link>
            </div>
          </div>

          <div className="min-w-[150px] sm:min-w-fit">
            <p className="mb-6 text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px] text-white">
              Locations
            </p>

            <div className="flex flex-col gap-y-5">
              <Link
                href={"/locations/usa"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                United States
              </Link>

              <Link
                href={"/locations/uk"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                United Kingdom
              </Link>

              <Link
                href={"/locations/germany"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                Germany
              </Link>

              <Link
                href={"/locations/canada"}
                className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                Canada
              </Link>

              <Link
                href={"/locations"}
                className="group flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
              >
                View All{" "}
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
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-8 py-5 border-y border-white/10 flex flex-wrap justify-center md:justify-between items-center gap-y-6 gap-x-12">
          <div className="flex items-center gap-5 sm:gap-6">
            <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75">
              <span className="font-light">&copy;</span>{" "}
              <span>2024 Lightning Proxies</span>
            </p>

            <svg
              width="8"
              height="7"
              viewBox="0 0 8 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[6px] sm:w-[8px] h-auto"
            >
              <path
                d="M4 5.5L4 1.5M4 5.5L2 3.5M4 5.5L6 3.5M4 1.5L2 3.5M4 1.5L6 3.5M6 3.5L2 3.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                className="opacity-75"
              />
            </svg>

            <Link
              href={`/legal/terms-of-service`}
              className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
            >
              Terms
            </Link>

            <svg
              width="2"
              height="5"
              viewBox="0 0 2 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden sm:block"
            >
              <path d="M1 0.5V4.5" stroke="white" strokeLinecap="round" />
            </svg>

            <Link
              href={"/legal/privacy-policy"}
              className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
            >
              Privacy
            </Link>

            <svg
              width="2"
              height="5"
              viewBox="0 0 2 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden sm:block"
            >
              <path d="M1 0.5V4.5" stroke="white" strokeLinecap="round" />
            </svg>

            <Link
              href={"/legal/cookie-policy"}
              className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75 hover:text-white duration-200"
            >
              Cookies
            </Link>
          </div>

          <Image
            src={paymentMethodsImg}
            alt=""
            className="w-[295px] sm:w-[318px]"
          />
        </div>

        <div>
          <p className="mb-3 sm:mb-4 text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white">
            Disclaimer:
          </p>

          <p className="text-xs sm:text-sm leading-[18px] sm:leading-[20px] tracking-[-0.12px] sm:tracking-[-0.14px] text-white/50">
            All services provided by Lightning Proxies comply with local laws
            and regulations. Users are responsible for adhering to applicable
            rules when utilizing our proxies.
          </p>
        </div>
      </div>
    </footer>
  );
}
