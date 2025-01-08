import Image from "next/image";
import fabianTatomirImg from "@/assets/images/team/fabian-tatomir.png";
import kenanYilmazImg from "@/assets/images/team/kenan-yilmaz.png";
import sahilKumarImg from "@/assets/images/team/sahil-kumar.png";
import razvanStanImg from "@/assets/images/team/razvan-stan.png";
import omarHamadinImg from "@/assets/images/team/omar-hamadin.png";
import ngothoNjauImg from "@/assets/images/team/ngotho-njau.png";
import lucianFratiloiuImg from "@/assets/images/team/lucian-fratiloiu.png";
import linkedinIconImg from "@/assets/images/linkedin-icon.png";
import Link from "next/link";

export default function TeamSection() {
  return (
    <section className="pb-20 sm:pb-44">
      <div className="mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-accent">
          Team
        </p>

        <h2 className="mb-6 max-w-[520px] text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          The Family
        </h2>

        <p className="mb-12 sm:mb-16 max-w-[580px] text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/75">
          Meet the LightningProxies team – the people who work tirelessly to
          improve your proxy experience every day.
        </p>

        <div className="mb-12 w-full flex justify-center gap-y-12 gap-x-20 sm:gap-x-44">
          <div className="flex flex-col items-center">
            <Image
              src={fabianTatomirImg}
              alt=""
              className="w-[85px] sm:w-[140px] h-auto"
            />

            <h4 className="mt-4 sm:mt-6 mb-1 text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px] text-center">
              Fabian Tatomir
            </h4>

            <p className="mb-4 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
              CEO, Co-Founder
            </p>

            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href={"/"}
                target="_blank"
                className="flex opacity-50 hover:opacity-100 duration-200"
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] sm:w-[21px] h-auto"
                >
                  <g clipPath="url(#clip0_474_1850)">
                    <path
                      d="M6.7918 18.1256C14.3371 18.1256 18.4652 11.8729 18.4652 6.45216C18.4652 6.27638 18.4613 6.09669 18.4535 5.92091C19.2566 5.34016 19.9496 4.62082 20.5 3.79669C19.7521 4.12944 18.958 4.34676 18.1449 4.44122C19.0011 3.92803 19.6421 3.12184 19.9492 2.17208C19.1438 2.64941 18.263 2.98612 17.3445 3.16779C16.7257 2.51024 15.9075 2.07487 15.0164 1.92899C14.1253 1.7831 13.211 1.93482 12.4148 2.36069C11.6186 2.78656 10.9848 3.46286 10.6115 4.28504C10.2382 5.10721 10.1462 6.02946 10.3496 6.90919C8.71874 6.82735 7.12328 6.4037 5.66665 5.66569C4.21002 4.92769 2.92474 3.89181 1.89414 2.62521C1.37033 3.52831 1.21005 4.59698 1.44586 5.61402C1.68167 6.63106 2.29589 7.52015 3.16367 8.1006C2.51219 8.07991 1.87498 7.90451 1.30469 7.58888V7.63966C1.3041 8.5874 1.63175 9.5061 2.23192 10.2396C2.8321 10.9731 3.66777 11.4761 4.59687 11.6631C3.99338 11.8282 3.35999 11.8523 2.7457 11.7334C3.00788 12.5485 3.51798 13.2614 4.20481 13.7726C4.89164 14.2838 5.72093 14.5678 6.57695 14.585C5.12369 15.7265 3.32848 16.3457 1.48047 16.3428C1.15274 16.3423 0.825333 16.3222 0.5 16.2826C2.37738 17.4871 4.56128 18.1268 6.7918 18.1256Z"
                      fill="#1D2026"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_474_1850">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <Link
                href={"/"}
                target="_blank"
                aria-label="LinkedIn"
                className="flex"
              >
                <Image src={linkedinIconImg} alt="" className="w-[24px]" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={kenanYilmazImg}
              alt=""
              className="w-[85px] sm:w-[140px] h-auto"
            />

            <h4 className="mt-4 sm:mt-6 mb-1 text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px] text-center">
              Kenan Yilmaz
            </h4>

            <p className="mb-4 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
              CTO, Co-Founder
            </p>

            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href={"/"}
                target="_blank"
                className="flex opacity-50 hover:opacity-100 duration-200"
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] sm:w-[21px] h-auto"
                >
                  <g clipPath="url(#clip0_474_1850)">
                    <path
                      d="M6.7918 18.1256C14.3371 18.1256 18.4652 11.8729 18.4652 6.45216C18.4652 6.27638 18.4613 6.09669 18.4535 5.92091C19.2566 5.34016 19.9496 4.62082 20.5 3.79669C19.7521 4.12944 18.958 4.34676 18.1449 4.44122C19.0011 3.92803 19.6421 3.12184 19.9492 2.17208C19.1438 2.64941 18.263 2.98612 17.3445 3.16779C16.7257 2.51024 15.9075 2.07487 15.0164 1.92899C14.1253 1.7831 13.211 1.93482 12.4148 2.36069C11.6186 2.78656 10.9848 3.46286 10.6115 4.28504C10.2382 5.10721 10.1462 6.02946 10.3496 6.90919C8.71874 6.82735 7.12328 6.4037 5.66665 5.66569C4.21002 4.92769 2.92474 3.89181 1.89414 2.62521C1.37033 3.52831 1.21005 4.59698 1.44586 5.61402C1.68167 6.63106 2.29589 7.52015 3.16367 8.1006C2.51219 8.07991 1.87498 7.90451 1.30469 7.58888V7.63966C1.3041 8.5874 1.63175 9.5061 2.23192 10.2396C2.8321 10.9731 3.66777 11.4761 4.59687 11.6631C3.99338 11.8282 3.35999 11.8523 2.7457 11.7334C3.00788 12.5485 3.51798 13.2614 4.20481 13.7726C4.89164 14.2838 5.72093 14.5678 6.57695 14.585C5.12369 15.7265 3.32848 16.3457 1.48047 16.3428C1.15274 16.3423 0.825333 16.3222 0.5 16.2826C2.37738 17.4871 4.56128 18.1268 6.7918 18.1256Z"
                      fill="#1D2026"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_474_1850">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <Link
                href={"/"}
                target="_blank"
                aria-label="LinkedIn"
                className="flex"
              >
                <Image src={linkedinIconImg} alt="" className="w-[24px]" />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-3 lg:grid-cols-5 gap-12">
          <div className="flex flex-col items-center">
            <Image
              src={sahilKumarImg}
              alt=""
              className="w-[58px] sm:w-[96px] h-auto"
            />

            <h4 className="mt-4 sm:mt-6 mb-1 text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px] text-center">
              Sahil Kumar
            </h4>

            <p className="mb-4 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
              Web Developer
            </p>

            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href={"/"}
                target="_blank"
                className="flex opacity-50 hover:opacity-100 duration-200"
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] sm:w-[21px] h-auto"
                >
                  <g clipPath="url(#clip0_474_1850)">
                    <path
                      d="M6.7918 18.1256C14.3371 18.1256 18.4652 11.8729 18.4652 6.45216C18.4652 6.27638 18.4613 6.09669 18.4535 5.92091C19.2566 5.34016 19.9496 4.62082 20.5 3.79669C19.7521 4.12944 18.958 4.34676 18.1449 4.44122C19.0011 3.92803 19.6421 3.12184 19.9492 2.17208C19.1438 2.64941 18.263 2.98612 17.3445 3.16779C16.7257 2.51024 15.9075 2.07487 15.0164 1.92899C14.1253 1.7831 13.211 1.93482 12.4148 2.36069C11.6186 2.78656 10.9848 3.46286 10.6115 4.28504C10.2382 5.10721 10.1462 6.02946 10.3496 6.90919C8.71874 6.82735 7.12328 6.4037 5.66665 5.66569C4.21002 4.92769 2.92474 3.89181 1.89414 2.62521C1.37033 3.52831 1.21005 4.59698 1.44586 5.61402C1.68167 6.63106 2.29589 7.52015 3.16367 8.1006C2.51219 8.07991 1.87498 7.90451 1.30469 7.58888V7.63966C1.3041 8.5874 1.63175 9.5061 2.23192 10.2396C2.8321 10.9731 3.66777 11.4761 4.59687 11.6631C3.99338 11.8282 3.35999 11.8523 2.7457 11.7334C3.00788 12.5485 3.51798 13.2614 4.20481 13.7726C4.89164 14.2838 5.72093 14.5678 6.57695 14.585C5.12369 15.7265 3.32848 16.3457 1.48047 16.3428C1.15274 16.3423 0.825333 16.3222 0.5 16.2826C2.37738 17.4871 4.56128 18.1268 6.7918 18.1256Z"
                      fill="#1D2026"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_474_1850">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <Link
                href={"/"}
                target="_blank"
                aria-label="LinkedIn"
                className="flex"
              >
                <Image src={linkedinIconImg} alt="" className="w-[24px]" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={razvanStanImg}
              alt=""
              className="w-[58px] sm:w-[96px] h-auto"
            />

            <h4 className="mt-4 sm:mt-6 mb-1 text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px] text-center">
              Razvan Stan
            </h4>

            <p className="mb-4 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
              Support Specialist
            </p>

            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href={"/"}
                target="_blank"
                className="flex opacity-50 hover:opacity-100 duration-200"
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] sm:w-[21px] h-auto"
                >
                  <g clipPath="url(#clip0_474_1850)">
                    <path
                      d="M6.7918 18.1256C14.3371 18.1256 18.4652 11.8729 18.4652 6.45216C18.4652 6.27638 18.4613 6.09669 18.4535 5.92091C19.2566 5.34016 19.9496 4.62082 20.5 3.79669C19.7521 4.12944 18.958 4.34676 18.1449 4.44122C19.0011 3.92803 19.6421 3.12184 19.9492 2.17208C19.1438 2.64941 18.263 2.98612 17.3445 3.16779C16.7257 2.51024 15.9075 2.07487 15.0164 1.92899C14.1253 1.7831 13.211 1.93482 12.4148 2.36069C11.6186 2.78656 10.9848 3.46286 10.6115 4.28504C10.2382 5.10721 10.1462 6.02946 10.3496 6.90919C8.71874 6.82735 7.12328 6.4037 5.66665 5.66569C4.21002 4.92769 2.92474 3.89181 1.89414 2.62521C1.37033 3.52831 1.21005 4.59698 1.44586 5.61402C1.68167 6.63106 2.29589 7.52015 3.16367 8.1006C2.51219 8.07991 1.87498 7.90451 1.30469 7.58888V7.63966C1.3041 8.5874 1.63175 9.5061 2.23192 10.2396C2.8321 10.9731 3.66777 11.4761 4.59687 11.6631C3.99338 11.8282 3.35999 11.8523 2.7457 11.7334C3.00788 12.5485 3.51798 13.2614 4.20481 13.7726C4.89164 14.2838 5.72093 14.5678 6.57695 14.585C5.12369 15.7265 3.32848 16.3457 1.48047 16.3428C1.15274 16.3423 0.825333 16.3222 0.5 16.2826C2.37738 17.4871 4.56128 18.1268 6.7918 18.1256Z"
                      fill="#1D2026"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_474_1850">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <Link
                href={"/"}
                target="_blank"
                aria-label="LinkedIn"
                className="flex"
              >
                <Image src={linkedinIconImg} alt="" className="w-[24px]" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={omarHamadinImg}
              alt=""
              className="w-[58px] sm:w-[96px] h-auto"
            />

            <h4 className="mt-4 sm:mt-6 mb-1 text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px] text-center">
              Omar Hamadin
            </h4>

            <p className="mb-4 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
              Support Specialist, Editor
            </p>

            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href={"/"}
                target="_blank"
                className="flex opacity-50 hover:opacity-100 duration-200"
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] sm:w-[21px] h-auto"
                >
                  <g clipPath="url(#clip0_474_1850)">
                    <path
                      d="M6.7918 18.1256C14.3371 18.1256 18.4652 11.8729 18.4652 6.45216C18.4652 6.27638 18.4613 6.09669 18.4535 5.92091C19.2566 5.34016 19.9496 4.62082 20.5 3.79669C19.7521 4.12944 18.958 4.34676 18.1449 4.44122C19.0011 3.92803 19.6421 3.12184 19.9492 2.17208C19.1438 2.64941 18.263 2.98612 17.3445 3.16779C16.7257 2.51024 15.9075 2.07487 15.0164 1.92899C14.1253 1.7831 13.211 1.93482 12.4148 2.36069C11.6186 2.78656 10.9848 3.46286 10.6115 4.28504C10.2382 5.10721 10.1462 6.02946 10.3496 6.90919C8.71874 6.82735 7.12328 6.4037 5.66665 5.66569C4.21002 4.92769 2.92474 3.89181 1.89414 2.62521C1.37033 3.52831 1.21005 4.59698 1.44586 5.61402C1.68167 6.63106 2.29589 7.52015 3.16367 8.1006C2.51219 8.07991 1.87498 7.90451 1.30469 7.58888V7.63966C1.3041 8.5874 1.63175 9.5061 2.23192 10.2396C2.8321 10.9731 3.66777 11.4761 4.59687 11.6631C3.99338 11.8282 3.35999 11.8523 2.7457 11.7334C3.00788 12.5485 3.51798 13.2614 4.20481 13.7726C4.89164 14.2838 5.72093 14.5678 6.57695 14.585C5.12369 15.7265 3.32848 16.3457 1.48047 16.3428C1.15274 16.3423 0.825333 16.3222 0.5 16.2826C2.37738 17.4871 4.56128 18.1268 6.7918 18.1256Z"
                      fill="#1D2026"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_474_1850">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <Link
                href={"/"}
                target="_blank"
                aria-label="LinkedIn"
                className="flex"
              >
                <Image src={linkedinIconImg} alt="" className="w-[24px]" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={ngothoNjauImg}
              alt=""
              className="w-[58px] sm:w-[96px] h-auto"
            />

            <h4 className="mt-4 sm:mt-6 mb-1 text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px] text-center">
              Ngotho Njau
            </h4>

            <p className="mb-4 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
              Support Specialist
            </p>

            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href={"/"}
                target="_blank"
                className="flex opacity-50 hover:opacity-100 duration-200"
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] sm:w-[21px] h-auto"
                >
                  <g clipPath="url(#clip0_474_1850)">
                    <path
                      d="M6.7918 18.1256C14.3371 18.1256 18.4652 11.8729 18.4652 6.45216C18.4652 6.27638 18.4613 6.09669 18.4535 5.92091C19.2566 5.34016 19.9496 4.62082 20.5 3.79669C19.7521 4.12944 18.958 4.34676 18.1449 4.44122C19.0011 3.92803 19.6421 3.12184 19.9492 2.17208C19.1438 2.64941 18.263 2.98612 17.3445 3.16779C16.7257 2.51024 15.9075 2.07487 15.0164 1.92899C14.1253 1.7831 13.211 1.93482 12.4148 2.36069C11.6186 2.78656 10.9848 3.46286 10.6115 4.28504C10.2382 5.10721 10.1462 6.02946 10.3496 6.90919C8.71874 6.82735 7.12328 6.4037 5.66665 5.66569C4.21002 4.92769 2.92474 3.89181 1.89414 2.62521C1.37033 3.52831 1.21005 4.59698 1.44586 5.61402C1.68167 6.63106 2.29589 7.52015 3.16367 8.1006C2.51219 8.07991 1.87498 7.90451 1.30469 7.58888V7.63966C1.3041 8.5874 1.63175 9.5061 2.23192 10.2396C2.8321 10.9731 3.66777 11.4761 4.59687 11.6631C3.99338 11.8282 3.35999 11.8523 2.7457 11.7334C3.00788 12.5485 3.51798 13.2614 4.20481 13.7726C4.89164 14.2838 5.72093 14.5678 6.57695 14.585C5.12369 15.7265 3.32848 16.3457 1.48047 16.3428C1.15274 16.3423 0.825333 16.3222 0.5 16.2826C2.37738 17.4871 4.56128 18.1268 6.7918 18.1256Z"
                      fill="#1D2026"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_474_1850">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <Link
                href={"/"}
                target="_blank"
                aria-label="LinkedIn"
                className="flex"
              >
                <Image src={linkedinIconImg} alt="" className="w-[24px]" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={lucianFratiloiuImg}
              alt=""
              className="w-[58px] sm:w-[96px] h-auto"
            />

            <h4 className="mt-4 sm:mt-6 mb-1 text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px] text-center">
              Lucian Fratiloiu
            </h4>

            <p className="mb-4 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
              Support Specialist
            </p>

            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href={"/"}
                target="_blank"
                className="flex opacity-50 hover:opacity-100 duration-200"
              >
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] sm:w-[21px] h-auto"
                >
                  <g clipPath="url(#clip0_474_1850)">
                    <path
                      d="M6.7918 18.1256C14.3371 18.1256 18.4652 11.8729 18.4652 6.45216C18.4652 6.27638 18.4613 6.09669 18.4535 5.92091C19.2566 5.34016 19.9496 4.62082 20.5 3.79669C19.7521 4.12944 18.958 4.34676 18.1449 4.44122C19.0011 3.92803 19.6421 3.12184 19.9492 2.17208C19.1438 2.64941 18.263 2.98612 17.3445 3.16779C16.7257 2.51024 15.9075 2.07487 15.0164 1.92899C14.1253 1.7831 13.211 1.93482 12.4148 2.36069C11.6186 2.78656 10.9848 3.46286 10.6115 4.28504C10.2382 5.10721 10.1462 6.02946 10.3496 6.90919C8.71874 6.82735 7.12328 6.4037 5.66665 5.66569C4.21002 4.92769 2.92474 3.89181 1.89414 2.62521C1.37033 3.52831 1.21005 4.59698 1.44586 5.61402C1.68167 6.63106 2.29589 7.52015 3.16367 8.1006C2.51219 8.07991 1.87498 7.90451 1.30469 7.58888V7.63966C1.3041 8.5874 1.63175 9.5061 2.23192 10.2396C2.8321 10.9731 3.66777 11.4761 4.59687 11.6631C3.99338 11.8282 3.35999 11.8523 2.7457 11.7334C3.00788 12.5485 3.51798 13.2614 4.20481 13.7726C4.89164 14.2838 5.72093 14.5678 6.57695 14.585C5.12369 15.7265 3.32848 16.3457 1.48047 16.3428C1.15274 16.3423 0.825333 16.3222 0.5 16.2826C2.37738 17.4871 4.56128 18.1268 6.7918 18.1256Z"
                      fill="#1D2026"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_474_1850">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>

              <Link
                href={"/"}
                target="_blank"
                aria-label="LinkedIn"
                className="flex"
              >
                <Image src={linkedinIconImg} alt="" className="w-[24px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
