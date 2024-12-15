import Image from "next/image";
import infoImg from "@/assets/images/product-5-info-1.png";
import SecondaryBtn from "@/components/ui/SecondaryBtn";

export default function Info1Section() {
  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <div className="order-2 lg:order-1 w-full flex">
          <Image src={infoImg} alt="" className="w-full" />
        </div>

        <div className="order-1 lg:order-2 flex flex-col items-start">
          <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-[#00CEDF]">
            WHY CHOOSE OUR PROXIES
          </p>

          <h2 className="mb-8 sm:mb-10 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
            Real Mobile IPs, Real Mobile Devices
          </h2>

          <div className="mb-4 w-full space-y-3">
            <div className="py-3.5 sm:py-5 px-4 sm:px-6 border border-dark-white bg-gradient-to-b from-transparent to-off-white rounded-lg flex items-start gap-3.5">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] sm:w-[28px] min-w-[20px] sm:min-w-[28px] h-auto"
              >
                <path
                  d="M14.6667 20C8.77563 20 4 18.2092 4 16"
                  stroke="#00CEDF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M25.3333 6.66699V15.3337M4 6.66699V25.3337C4 27.5429 8.77563 29.3337 14.6667 29.3337C14.8905 29.3337 15.1128 29.3311 15.3333 29.3259"
                  stroke="#00CEDF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M14.6667 10.667C20.5577 10.667 25.3333 8.87613 25.3333 6.66699C25.3333 4.45785 20.5577 2.66699 14.6667 2.66699C8.77563 2.66699 4 4.45785 4 6.66699C4 8.87613 8.77563 10.667 14.6667 10.667Z"
                  stroke="#00CEDF"
                  strokeWidth="2"
                />
                <path
                  d="M9.33594 10.667V13.3337"
                  stroke="#00CEDF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M9.33594 20V22.6667"
                  stroke="#00CEDF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M22.6693 22.2226V24.0003M22.6693 24.0003V25.7781M22.6693 24.0003H24.447M22.6693 24.0003H20.8915M28.0026 24.0003C28.0026 26.9458 25.6147 29.3337 22.6693 29.3337C19.7238 29.3337 17.3359 26.9458 17.3359 24.0003C17.3359 21.0549 19.7238 18.667 22.6693 18.667C25.6147 18.667 28.0026 21.0549 28.0026 24.0003Z"
                  stroke="#00CEDF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                Access the most extensive Mobile Proxy network, with over 100k
                IPs active in real-time and enjoy country & ISP targeting in 50+
                regions.
              </p>
            </div>

            <div className="py-3.5 sm:py-5 px-4 sm:px-6 border border-dark-white bg-gradient-to-b from-transparent to-off-white rounded-lg flex items-start gap-3.5">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] sm:w-[28px] min-w-[20px] sm:min-w-[28px] h-auto"
              >
                <path
                  d="M13.4385 2.66699C7.29104 3.91486 2.66406 9.3499 2.66406 15.8657C2.66406 23.3038 8.6939 29.3337 16.1321 29.3337C22.6478 29.3337 28.0829 24.7067 29.3307 18.5593"
                  stroke="#00CEDF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M25.25 23.9997C25.7621 23.8885 26.2361 23.7117 26.6667 23.4703M19.5833 23.1205C20.3775 23.4683 21.1435 23.7261 21.8735 23.8954M14.4728 19.9299C15.0241 20.317 15.6133 20.7811 16.1871 21.1817M4 18.433C4.42979 18.223 4.89375 17.9821 5.41667 17.7758M8.6014 17.333C9.35057 17.4162 10.1907 17.6298 11.1432 18.0306"
                  stroke="#00CEDF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.6641 9.33301C24.6641 8.22843 23.7686 7.33301 22.6641 7.33301C21.5595 7.33301 20.6641 8.22843 20.6641 9.33301C20.6641 10.4376 21.5595 11.333 22.6641 11.333C23.7686 11.333 24.6641 10.4376 24.6641 9.33301Z"
                  stroke="#00CEDF"
                  strokeWidth="2"
                />
                <path
                  d="M22.6667 2.66699C26.2745 2.66699 29.3333 5.62451 29.3333 9.21255C29.3333 12.8577 26.2247 15.4158 23.3533 17.1553C23.1441 17.2722 22.9075 17.3337 22.6667 17.3337C22.4259 17.3337 22.1892 17.2722 21.98 17.1553C19.114 15.3989 16 12.8703 16 9.21255C16 5.62451 19.0588 2.66699 22.6667 2.66699Z"
                  stroke="#00CEDF"
                  strokeWidth="2"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                Less captchas, less blocks using IPs sourced from mobile devices
                all over the globe.
              </p>
            </div>
          </div>

          <div className="-ml-2">
            <SecondaryBtn customClasses="sm:!py-2 !px-8 !border-2 !border-dark-white sm:!text-base sm:!tracking-[-0.16px]">
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
          </div>
        </div>
      </div>
    </section>
  );
}
