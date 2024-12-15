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
                d="M6 13.6871V8H26V13.6871C26 17.9201 26 20.0367 24.6983 21.3516C23.3965 22.6667 21.3013 22.6667 17.1111 22.6667H14.8889C10.6986 22.6667 8.60349 22.6667 7.30175 21.3516C6 20.0367 6 17.9201 6 13.6871Z"
                stroke="#1675FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 8.00033L6.96153 5.94905C7.70727 4.35817 8.08012 3.56273 8.83589 3.11486C9.59167 2.66699 10.5611 2.66699 12.5 2.66699H19.5C21.4389 2.66699 22.4083 2.66699 23.1641 3.11486C23.9199 3.56273 24.2928 4.35817 25.0384 5.94905L26 8.00033"
                stroke="#1675FF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M14 12H18"
                stroke="#1675FF"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M5.33594 29.3333H16.0026M16.0026 29.3333H26.6693M16.0026 29.3333V26"
                stroke="#1675FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="space-y-2 sm:space-y-2.5">
              <h3 className="text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px]">
                IP Whitelisting
              </h3>

              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/65">
                Lightning's Mobile Proxies provide the flexibility to use
                IP-whitelisted proxies, enabling you to target specific
                countries with ease and precision.
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
                strokeOpacity="0.93"
                strokeWidth="2"
              />
              <path
                d="M3.33594 15.9997C3.33594 10.0286 3.33594 7.04299 5.19092 5.18799C7.04592 3.33301 10.0315 3.33301 16.0026 3.33301C21.9737 3.33301 24.9593 3.33301 26.8143 5.18799C28.6693 7.04299 28.6693 10.0286 28.6693 15.9997C28.6693 21.9707 28.6693 24.9563 26.8143 26.8114C24.9593 28.6663 21.9737 28.6663 16.0026 28.6663C10.0315 28.6663 7.04592 28.6663 5.19092 26.8114C3.33594 24.9563 3.33594 21.9707 3.33594 15.9997Z"
                stroke="#A400DD"
                strokeOpacity="0.93"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>

            <div className="space-y-2 sm:space-y-2.5">
              <h3 className="text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px]">
                Unlimited Connections
              </h3>

              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/65">
                No restrictions on the number of concurrent connections,
                allowing you to scale your operations effortlessly and handle
                even the most demanding tasks.
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
                d="M2.66406 20C2.85442 20.5699 3.0777 21.1241 3.33156 21.6603M5.49802 24.9951C5.9195 25.4849 6.37206 25.9461 6.85256 26.3752M11.9974 29.3333C11.4004 29.1409 10.8201 28.9099 10.2593 28.6429"
                stroke="#F9A000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 18C17.1045 18 18 17.1045 18 16C18 14.8955 17.1045 14 16 14C14.8955 14 14 14.8955 14 16M16 18C14.8955 18 14 17.1045 14 16M16 18V21.3333M14 16H8"
                stroke="#F9A000"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M15.9974 29.3337C23.3611 29.3337 29.3307 23.3641 29.3307 16.0003C29.3307 8.63653 23.3611 2.66699 15.9974 2.66699C8.6336 2.66699 2.66406 8.63653 2.66406 16.0003"
                stroke="#F9A000"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <div className="space-y-2 sm:space-y-2.5">
              <h3 className="text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px]">
                Up to 24Hrs Sticky Time
              </h3>

              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/65">
                Maintain the same outgoing IP for up to 24 hours within the same
                session, ensuring consistent connections for uninterrupted
                activities.
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
                d="M6.01397 25.9822C9.36388 29.1726 13.3519 27.8965 14.9471 26.6043C15.7724 25.9358 16.1435 25.5037 16.4624 25.1846C17.5791 24.1477 17.5074 23.1109 16.7815 22.2814C16.4911 21.9494 14.628 20.1598 12.8414 18.3253C11.9162 17.3999 11.2781 16.7461 10.7326 16.2197C10.002 15.4914 9.36389 14.6563 8.40677 14.6802C7.52941 14.6802 6.89133 15.4539 6.09373 16.2515C5.1762 17.169 4.49854 18.3253 4.25926 19.3622C3.54142 22.393 4.65806 24.5465 6.01397 25.9822ZM6.01397 25.9822L2.66406 29.3321"
                stroke="#7794FC"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M25.9827 6.01946C22.6319 2.82754 18.6576 4.12774 17.062 5.42048C16.2364 6.08933 15.8654 6.52168 15.5462 6.84088C14.4292 7.87825 14.5011 8.91561 15.2271 9.74552C15.3315 9.86492 15.6394 10.1728 16.0738 10.6036M25.9827 6.01946C27.3391 7.45582 28.4708 9.6338 27.7527 12.6661C27.5134 13.7034 26.8356 14.8602 25.9178 15.7782C25.12 16.5762 24.4818 17.3502 23.6042 17.3502C22.6467 17.3742 22.1499 16.6818 21.4191 15.9533M25.9827 6.01946L29.3336 2.66797M16.0738 10.6036C16.8478 11.3709 18.0238 12.528 19.1683 13.7034C20.0938 14.6293 20.8734 15.4266 21.4191 15.9533M16.0738 10.6036L14.0156 12.6746M21.4191 15.9533L19.337 17.986"
                stroke="#7794FC"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <div className="space-y-2 sm:space-y-2.5">
              <h3 className="text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px]">
                Backconnect Proxies
              </h3>

              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/65">
                Our offer includes rotating backconnect ports, where each port
                automatically assigns a new IP with every request, powered by
                our advanced in-house technology.
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
                d="M9.33594 24C6.89736 24.5489 5.33594 25.3924 5.33594 26.3383C5.33594 27.9924 10.1116 29.3333 16.0026 29.3333C21.8937 29.3333 26.6693 27.9924 26.6693 26.3383C26.6693 25.3924 25.1078 24.5489 22.6693 24"
                stroke="#FF4720"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M19.3307 12.0003C19.3307 13.8413 17.8383 15.3337 15.9974 15.3337C14.1565 15.3337 12.6641 13.8413 12.6641 12.0003C12.6641 10.1594 14.1565 8.66699 15.9974 8.66699C17.8383 8.66699 19.3307 10.1594 19.3307 12.0003Z"
                stroke="#FF4720"
                strokeWidth="2"
              />
              <path
                d="M17.6739 23.3251C17.2242 23.7582 16.6231 24.0003 15.9977 24.0003C15.3721 24.0003 14.771 23.7582 14.3213 23.3251C10.2031 19.3347 4.68432 14.877 7.37568 8.4053C8.83086 4.90609 12.324 2.66699 15.9977 2.66699C19.6713 2.66699 23.1643 4.9061 24.6195 8.4053C27.3075 14.8689 21.8022 19.3485 17.6739 23.3251Z"
                stroke="#FF4720"
                strokeWidth="2"
              />
            </svg>

            <div className="space-y-2 sm:space-y-2.5">
              <h3 className="text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px]">
                Location Selection
              </h3>

              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/65">
                Access proxies from over 40 countries worldwide, ensuring
                seamless web scraping and global coverage for your needs.
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
                d="M28.6693 5.99967C28.6693 7.47243 27.4754 8.66634 26.0026 8.66634C24.5298 8.66634 23.3359 7.47243 23.3359 5.99967C23.3359 4.52691 24.5298 3.33301 26.0026 3.33301C27.4754 3.33301 28.6693 4.52691 28.6693 5.99967Z"
                stroke="#00C153"
                strokeWidth="2"
              />
              <path
                d="M27.2974 12.5414C27.3359 13.7205 27.3359 15.0829 27.3359 16.667C27.3359 22.3238 27.3359 25.1523 25.5786 26.9097C23.8213 28.667 20.9927 28.667 15.3359 28.667C9.67908 28.667 6.85066 28.667 5.0933 26.9097C3.33594 25.1523 3.33594 22.3238 3.33594 16.667C3.33594 11.0101 3.33594 8.18171 5.0933 6.42435C6.85066 4.66699 9.67908 4.66699 15.3359 4.66699C16.9201 4.66699 18.2825 4.66699 19.4615 4.70559"
                stroke="#00C153"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.33594 16.6663H10.6693L13.3359 11.333L17.3359 21.9997L20.0026 16.6663H23.3359"
                stroke="#00C153"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="space-y-2 sm:space-y-2.5">
              <h3 className="text-xs sm:text-xl font-medium tracking-[-0.12px] sm:tracking-[-0.2px]">
                99.7% Network Uptime
              </h3>

              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/65">
                Our market-leading uptime ensures a reliable proxy network
                infrastructure, supporting and guaranteeing seamless scraping
                operations even at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
