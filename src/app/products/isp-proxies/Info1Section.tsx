import Image from "next/image";
import infoImg from "@/assets/images/product-3-info-1.png";
import SecondaryBtn from "@/components/ui/SecondaryBtn";

export default function Info1Section() {
  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <div className="order-2 lg:order-1 w-full flex">
          <Image src={infoImg} alt="" className="w-full" />
        </div>

        <div className="order-1 lg:order-2 flex flex-col items-start">
          <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-[#FF6B4B]">
            WHY CHOOSE OUR PROXIES
          </p>

          <h2 className="mb-8 sm:mb-10 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
            Combined Datacenter Speeds with Residential IPs in One Package{" "}
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
                  d="M26.3056 15.867C26.6804 13.2799 26.8531 11.9497 26.3764 10.7662C25.8841 9.54434 24.7921 8.70831 22.608 7.03627L20.9763 5.78699C18.2593 3.70699 16.9008 2.66699 15.3333 2.66699C13.7659 2.66699 12.4074 3.70699 9.69045 5.78699L8.05863 7.03627C5.87456 8.70831 4.78253 9.54434 4.29032 10.7662C3.79811 11.9882 3.99816 13.3665 4.39824 16.1231L4.73941 18.4739C5.30659 22.3817 5.59017 24.3357 6.9138 25.5013C8.23743 26.667 10.1725 26.667 14.0427 26.667H14.6667"
                  stroke="#FF4720"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.3359 21.9704C18.8677 20.7241 20.6971 20 22.6621 20C24.6331 20 26.4679 20.7288 28.0026 21.9821M25.5683 25.3333C24.6935 24.7879 23.7065 24.4809 22.6621 24.4809C21.6229 24.4809 20.6405 24.7848 19.769 25.3251"
                  stroke="#FF4720"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M22.6641 29.333H22.6726"
                  stroke="#FF4720"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                ISP Proxies blend the speed of a datacenter proxy with the
                connection of a residential IP, ensuring captcha-free requests.
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
                  d="M21.3359 13.333L22.9713 14.7426C23.6589 15.3351 24.0026 15.6315 24.0026 15.9997C24.0026 16.3678 23.6589 16.6642 22.9713 17.2567L21.3359 18.6663"
                  stroke="#FF4720"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.6667 13.333L9.03128 14.7426C8.34376 15.3351 8 15.6315 8 15.9997C8 16.3678 8.34376 16.6642 9.03128 17.2567L10.6667 18.6663"
                  stroke="#FF4720"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.3307 12L14.6641 20"
                  stroke="#FF4720"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.33594 15.9997C3.33594 10.0286 3.33594 7.04299 5.19092 5.18799C7.04592 3.33301 10.0315 3.33301 16.0026 3.33301C21.9737 3.33301 24.9593 3.33301 26.8143 5.18799C28.6693 7.04299 28.6693 10.0286 28.6693 15.9997C28.6693 21.9707 28.6693 24.9563 26.8143 26.8114C24.9593 28.6663 21.9737 28.6663 16.0026 28.6663C10.0315 28.6663 7.04592 28.6663 5.19092 26.8114C3.33594 24.9563 3.33594 21.9707 3.33594 15.9997Z"
                  stroke="#FF4720"
                  strokeWidth="2"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                In addition to these great features, our ISP Proxies support
                HTTP and SOCKS5 protocols in any country you choose.
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
