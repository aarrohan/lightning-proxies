import Image from "next/image";
import infoImg from "@/assets/images/product-1-info-1.png";
import SecondaryBtn from "@/components/ui/SecondaryBtn";

export default function Info1Section() {
  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <div className="order-2 lg:order-1 w-full flex">
          <Image src={infoImg} alt="" className="w-full" />
        </div>

        <div className="order-1 lg:order-2 flex flex-col items-start">
          <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-accent">
            WHY CHOOSE OUR PROXIES
          </p>

          <h2 className="mb-8 sm:mb-10 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
            Powerful Residential Proxies fueled by high end speed ISPs all over
            the world.
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
                  d="M21.5693 24.608C21.9701 24.8004 22.4672 25.2974 22.7077 25.6982C22.7879 26.2594 23.1888 24.0949 25.1448 22.8122M28.6667 24.0013C28.6667 26.9469 26.2788 29.3346 23.3333 29.3346C20.3879 29.3346 18 26.9469 18 24.0013C18 21.0558 20.3879 18.668 23.3333 18.668C26.2788 18.668 28.6667 21.0558 28.6667 24.0013Z"
                  stroke="#1675FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M14.6823 18.6683C16.1551 18.6683 17.349 17.4744 17.349 16.0016C17.349 14.5289 16.1551 13.335 14.6823 13.335C13.2095 13.335 12.0156 14.5289 12.0156 16.0016C12.0156 17.4744 13.2095 18.6683 14.6823 18.6683Z"
                  stroke="#1675FF"
                  strokeWidth="2"
                />
                <path
                  d="M10.005 24.0016C11.2717 22.8016 12.3383 22.1349 14.7051 22.0016M26.0051 15.3349C26.0051 14.2682 26.0384 11.0016 25.8717 9.66829C25.7717 8.56829 25.4717 7.06829 24.1051 6.20163C23.2717 5.76829 22.4717 5.36829 18.6384 5.33496M10.605 5.33496C7.73833 5.33496 5.505 5.56829 4.40501 6.93496C3.47168 8.21051 3.52722 9.66829 3.43833 10.135C3.23833 12.635 3.37166 21.3682 3.37166 22.8349C3.37166 24.3682 3.27166 27.4849 5.37166 28.5349C7.17166 29.4349 9.03833 29.3016 15.3717 29.3349"
                  stroke="#1675FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M14.4776 2.66806C13.6776 2.66806 13.0109 2.66806 12.3442 3.36806C11.7775 3.9014 11.8654 4.37237 11.6442 5.2014C11.3328 6.36806 11.1772 6.98337 11.6109 7.46806C12.0084 7.98846 12.6766 7.99016 13.2666 7.99164L13.2775 7.99168C13.8442 8.0318 15.7489 8.01342 16.3109 7.99168C16.9147 7.96829 17.4007 7.93473 17.8109 7.4014C18.1776 6.92473 17.9601 6.13148 17.7443 5.3014C17.5312 4.48241 17.6109 4.06806 17.0442 3.36806C16.2442 2.56806 15.2776 2.66806 14.4776 2.66806Z"
                  stroke="#1675FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                Using Residential IP addresses that support SOCKS5 & HTTPs
                protocols along with IP authentication are the key to secure
                activities.
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
                  d="M28.0021 17.3337C28.0052 16.7069 28.0052 16.0413 28.0052 15.3337C28.0052 9.36254 28.0052 6.37698 26.1503 4.52198C24.2952 2.66699 21.3096 2.66699 15.3385 2.66699C9.36742 2.66699 6.38186 2.66699 4.52686 4.52198C2.67187 6.37698 2.67188 9.36254 2.67188 15.3337C2.67188 21.3047 2.67187 24.2903 4.52686 26.1454C6.38186 28.0003 9.36742 28.0003 15.3385 28.0003C16.0461 28.0003 16.7117 28.0003 17.3385 27.9973"
                  stroke="#1675FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M24.6667 20L25.0105 20.9293C25.4615 22.148 25.6869 22.7573 26.1315 23.2019C26.576 23.6464 27.1853 23.8719 28.404 24.3228L29.3333 24.6667L28.404 25.0105C27.1853 25.4615 26.576 25.6869 26.1315 26.1315C25.6869 26.576 25.4615 27.1853 25.0105 28.404L24.6667 29.3333L24.3228 28.404C23.8719 27.1853 23.6464 26.576 23.2019 26.1315C22.7573 25.6869 22.148 25.4615 20.9293 25.0105L20 24.6667L20.9293 24.3228C22.148 23.8719 22.7573 23.6464 23.2019 23.2019C23.6464 22.7573 23.8719 22.148 24.3228 20.9293L24.6667 20Z"
                  stroke="#1675FF"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.67188 12H28.0052"
                  stroke="#1675FF"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.67188 7.33301H8.68385"
                  stroke="#1675FF"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 7.33301H14.012"
                  stroke="#1675FF"
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                Over 10 Million IPs active daily to fuel your web scraping
                projects to the next level.
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
