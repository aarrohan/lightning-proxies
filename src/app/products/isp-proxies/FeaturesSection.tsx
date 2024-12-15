export default function FeaturesSection() {
  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-accent">
          FEATURES
        </p>

        <h2 className="mb-16 sm:mb-20 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          Fit for all your requirements{" "}
        </h2>

        <div className="w-full grid sm:grid-cols-3 gap-12 sm:gap-20">
          <div className="flex items-start gap-3 sm:gap-5">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] sm:w-[32px] min-w-[24px] sm:min-w-[32px] h-auto"
            >
              <path
                d="M24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4181 9.33333 23.3333 11.9998 26.6667"
                stroke="#00C153"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 28C12.6667 23.3333 12 18.2091 12 16C12 13.7908 13.7908 12 16 12C18.2092 12 20 13.7908 20 16C20 18.2092 21.7908 20 24 20C26.2092 20 28 18.2092 28 16C28 9.37256 22.6275 4 16 4C9.37256 4 4 9.37256 4 16C4 16.9165 4.10276 17.8091 4.29737 18.6667"
                stroke="#00C153"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 16C16.6667 22.6667 23.3333 25.3333 23.3333 25.3333"
                stroke="#00C153"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="space-y-2 sm:space-y-2.5">
              <h3 className="text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px]">
                User:pass Authentication
              </h3>

              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/65">
                Enhanced security, requiring a valid username and password for
                proxy access, preventing unauthorized entry and safeguarding
                sensitive data.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-5">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] sm:w-[32px] min-w-[24px] sm:min-w-[32px] h-auto"
            >
              <path
                d="M21.3359 13.333L22.9713 14.7426C23.6589 15.3351 24.0026 15.6315 24.0026 15.9997C24.0026 16.3678 23.6589 16.6642 22.9713 17.2567L21.3359 18.6663"
                stroke="#1675FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6667 13.333L9.03128 14.7426C8.34376 15.3351 8 15.6315 8 15.9997C8 16.3678 8.34376 16.6642 9.03128 17.2567L10.6667 18.6663"
                stroke="#1675FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.3307 12L14.6641 20"
                stroke="#1675FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.33594 15.9997C3.33594 10.0286 3.33594 7.04299 5.19092 5.18799C7.04592 3.33301 10.0315 3.33301 16.0026 3.33301C21.9737 3.33301 24.9593 3.33301 26.8143 5.18799C28.6693 7.04299 28.6693 10.0286 28.6693 15.9997C28.6693 21.9707 28.6693 24.9563 26.8143 26.8114C24.9593 28.6663 21.9737 28.6663 16.0026 28.6663C10.0315 28.6663 7.04592 28.6663 5.19092 26.8114C3.33594 24.9563 3.33594 21.9707 3.33594 15.9997Z"
                stroke="#1675FF"
                strokeWidth="2"
              />
            </svg>

            <div className="space-y-2 sm:space-y-2.5">
              <h3 className="text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px]">
                SOCKS5 Protocol
              </h3>

              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/65">
                Every purchase automatically comes with the ability to switch
                protocols between all 3 protocol types which are HTTP, HTTPS,
                SOCKS5.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-5">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] sm:w-[32px] min-w-[24px] sm:min-w-[32px] h-auto"
            >
              <path
                d="M29.3307 13.3337V12.2903C29.3307 9.70415 29.3307 8.41109 28.5497 7.60766C27.7686 6.80425 26.5115 6.80425 23.9974 6.80425H21.2259C20.0027 6.80425 19.9926 6.80187 18.8927 6.25145L14.4506 4.02851C12.5958 3.10038 11.6685 2.63631 10.6806 2.66857C9.69263 2.70082 8.79576 3.22443 7.002 4.27167L5.36484 5.22749C4.04725 5.99671 3.38845 6.38134 3.02625 7.02118C2.66406 7.66103 2.66406 8.44023 2.66406 9.99863V20.9546C2.66406 23.0022 2.66406 24.0261 3.12041 24.5959C3.42408 24.975 3.84961 25.2299 4.32006 25.3145C5.02708 25.4414 5.8927 24.9361 7.62389 23.9253C8.79948 23.239 9.93088 22.5262 11.3372 22.7195C12.5156 22.8814 13.6107 23.625 14.6641 24.1521"
                stroke="#FFD018"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6641 2.66699V22.667"
                stroke="#FFD018"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M20 6.66699V12.667"
                stroke="#FFD018"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M24.4137 28.9113C24.1246 29.182 23.7382 29.3333 23.3361 29.3333C22.9339 29.3333 22.5475 29.182 22.2585 28.9113C19.611 26.4173 16.0633 23.6313 17.7934 19.5864C18.7289 17.3995 20.9745 16 23.3361 16C25.6977 16 27.9433 17.3995 28.8787 19.5864C30.6067 23.6261 27.0677 26.4259 24.4137 28.9113Z"
                stroke="#FFD018"
                strokeWidth="2"
              />
              <path
                d="M23.3359 22H23.3472"
                stroke="#FFD018"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="space-y-2 sm:space-y-2.5">
              <h3 className="text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px]">
                Multiple Countries
              </h3>

              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/65">
                Select from a range of countries—US, UK, DE, AU—and maintain the
                same IPs for as long as needed with a wide range of proxies from
                Lightning Proxies.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-5">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] sm:w-[32px] min-w-[24px] sm:min-w-[32px] h-auto"
            >
              <path
                d="M29.3307 16.0003C29.3307 8.63653 23.3611 2.66699 15.9974 2.66699C8.6336 2.66699 2.66406 8.63653 2.66406 16.0003C2.66406 23.3641 8.6336 29.3337 15.9974 29.3337C23.3611 29.3337 29.3307 23.3641 29.3307 16.0003Z"
                stroke="#A400DD"
                strokeWidth="2"
              />
              <path
                d="M15.9922 16H16.0046"
                stroke="#A400DD"
                strokeWidth="2.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2.66699V8.00033"
                stroke="#A400DD"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M29.3333 16H24"
                stroke="#A400DD"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16 24V29.3333"
                stroke="#A400DD"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M7.9974 16H2.66406"
                stroke="#A400DD"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <div className="space-y-2 sm:space-y-2.5">
              <h3 className="text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px]">
                Unlimited number of targets
              </h3>

              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/65">
                LightningProxies' static IP proxies remove all limits and
                restrictions on your targets, ensuring a smoother scraping
                process for any job.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-5">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] sm:w-[32px] min-w-[24px] sm:min-w-[32px] h-auto"
            >
              <path
                d="M16.6693 10.667L13.3359 16.0003H18.6693L15.3359 21.3337"
                stroke="#FF4720"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28.0121 18.8518C28.7079 18.6603 29.0559 18.5646 29.1933 18.3815C29.3307 18.1985 29.3307 17.9039 29.3307 17.315V14.6845C29.3307 14.0955 29.3307 13.801 29.1933 13.6179C29.0558 13.4349 28.7079 13.3391 28.0121 13.1477C25.4115 12.4321 23.7839 9.6581 24.4551 7.02209C24.6397 6.29715 24.7319 5.93469 24.6438 5.7221C24.5557 5.50951 24.3029 5.36301 23.797 5.07001L21.4974 3.73785C21.0011 3.45034 20.753 3.30658 20.5303 3.33719C20.3075 3.36781 20.0563 3.62357 19.5537 4.1351C17.6081 6.11553 14.3889 6.11545 12.4432 4.13497C11.9406 3.62343 11.6894 3.36767 11.4666 3.33706C11.2439 3.30645 10.9958 3.45021 10.4994 3.73771L8.19985 5.06989C7.6941 5.36286 7.44122 5.50935 7.3531 5.72191C7.26497 5.93447 7.35722 6.29698 7.54173 7.02199C8.21256 9.65807 6.58369 12.4321 3.98276 13.1477C3.28689 13.3391 2.93896 13.4349 2.8015 13.6179C2.66406 13.801 2.66406 14.0954 2.66406 14.6845V17.315C2.66406 17.9039 2.66406 18.1985 2.8015 18.3815C2.93893 18.5646 3.28688 18.6603 3.98276 18.8518C6.58326 19.5674 8.21084 22.3414 7.53969 24.9774C7.35512 25.7023 7.26282 26.0647 7.35094 26.2774C7.43908 26.4899 7.69196 26.6365 8.19773 26.9294L10.4973 28.2617C10.9937 28.5491 11.2418 28.6929 11.4646 28.6623C11.6873 28.6317 11.9386 28.3758 12.441 27.8643C14.3877 25.8822 17.6091 25.8822 19.5559 27.8642C20.0583 28.3758 20.3095 28.6315 20.5323 28.6622C20.755 28.6927 21.0033 28.549 21.4995 28.2615L23.7991 26.9293C24.305 26.6363 24.5579 26.4898 24.6459 26.2771C24.7341 26.0646 24.6418 25.7021 24.4571 24.9773C23.7857 22.3414 25.4119 19.5674 28.0121 18.8518Z"
                stroke="#FF4720"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <div className="space-y-2 sm:space-y-2.5">
              <h3 className="text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px]">
                High Performance Proxies
              </h3>

              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/65">
                Datacenter IPs hosted on ISP infrastructure provide high speeds
                compared to residential connections, successfully avoiding
                captchas.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 sm:gap-5">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] sm:w-[32px] min-w-[24px] sm:min-w-[32px] h-auto"
            >
              <path
                d="M16 16.0003C16 16.0003 13.8092 19.3337 11.6 19.3337C9.39087 19.3337 8 17.8413 8 16.0003C8 14.1594 9.39087 12.667 11.6 12.667C13.8092 12.667 16 16.0003 16 16.0003ZM16 16.0003C16 16.0003 18.1908 19.3337 20.4 19.3337C22.6092 19.3337 24 17.8413 24 16.0003C24 14.1594 22.6092 12.667 20.4 12.667C18.1908 12.667 16 16.0003 16 16.0003Z"
                stroke="#A400DD"
                strokeWidth="2"
              />
              <path
                d="M3.33594 15.9997C3.33594 10.0286 3.33594 7.04299 5.19092 5.18799C7.04592 3.33301 10.0315 3.33301 16.0026 3.33301C21.9737 3.33301 24.9593 3.33301 26.8143 5.18799C28.6693 7.04299 28.6693 10.0286 28.6693 15.9997C28.6693 21.9707 28.6693 24.9563 26.8143 26.8114C24.9593 28.6663 21.9737 28.6663 16.0026 28.6663C10.0315 28.6663 7.04592 28.6663 5.19092 26.8114C3.33594 24.9563 3.33594 21.9707 3.33594 15.9997Z"
                stroke="#A400DD"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>

            <div className="space-y-2 sm:space-y-2.5">
              <h3 className="text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px]">
                Unlimited Bandwidth & Threads{" "}
              </h3>

              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/65">
                No limits on bandwidth or threads; all IPs are exclusively
                dedicated to you, ensuring seamless proxy activity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
