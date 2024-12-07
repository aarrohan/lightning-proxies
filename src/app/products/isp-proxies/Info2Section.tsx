import Image from "next/image";
import infoImg from "@/assets/images/product-3-info-2.png";

export default function Info2Section() {
  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <div className="flex flex-col items-start">
          <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-[#FF6B4B]">
            WHY CHOOSE OUR PROXIES
          </p>

          <h2 className="mb-5 sm:mb-8 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
            ISP proxies that support the SOCKS5 protocol entirely{" "}
          </h2>

          <p className="mb-6 sm:mb-8 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
            We are offering you the ability to switch between HTTP and SOCKS5
            within seconds using our advanced proxy generator. Use the protocol
            that suits your activity best and stop worrying about unsupported
            tasks.
          </p>

          <div className="flex flex-wrap gap-3">
            <div className="min-w-[100px] sm:min-w-[175px] py-1 sm:py-1.5 px-3 border border-dark-white bg-gradient-to-b from-transparent to-off-white rounded-lg flex items-center gap-2.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] sm:w-[24px] min-w-[20px] sm:min-w-[24px] h-auto"
              >
                <path
                  d="M20.3584 13.3567C19.1689 14.546 16.9308 14.4998 13.4992 14.4998C11.2914 14.4998 9.50138 12.7071 9.50024 10.4993C9.50024 7.07001 9.454 4.83065 10.6435 3.64138C11.8329 2.45212 12.3583 2.50027 17.6274 2.50027C18.1366 2.49809 18.3929 3.11389 18.0329 3.47394L15.3199 6.18714C14.6313 6.87582 14.6294 7.99233 15.3181 8.68092C16.0068 9.36952 17.1234 9.36959 17.8122 8.68109L20.5259 5.96855C20.886 5.60859 21.5019 5.86483 21.4997 6.37395C21.4997 11.6422 21.5479 12.1675 20.3584 13.3567Z"
                  stroke="#FF4720"
                  strokeWidth="1.5"
                />
                <path
                  d="M13.5 14.5L7.32842 20.6716C6.22386 21.7761 4.433 21.7761 3.32843 20.6716C2.22386 19.567 2.22386 17.7761 3.32843 16.6716L9.5 10.5"
                  stroke="#FF4720"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M5.50896 18.5H5.5"
                  stroke="#FF4720"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                Hassle-free integration
              </p>
            </div>

            <div className="min-w-[100px] sm:min-w-[175px] py-1 sm:py-1.5 px-3 border border-dark-white bg-gradient-to-b from-transparent to-off-white rounded-lg flex items-center gap-2.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] sm:w-[24px] min-w-[20px] sm:min-w-[24px] h-auto"
              >
                <path
                  d="M7.5 4.94531H16C16.8284 4.94531 17.5 5.61688 17.5 6.44531V7.94531"
                  stroke="#FF4720"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 12.9453H9"
                  stroke="#FF4720"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 16.9453H9"
                  stroke="#FF4720"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.497 2L6.30767 2.00002C5.81071 2.00002 5.30241 2.07294 4.9007 2.36782C3.62698 3.30279 2.64539 5.38801 4.62764 7.2706C5.18421 7.7992 5.96217 7.99082 6.72692 7.99082H18.2835C19.077 7.99082 20.5 8.10439 20.5 10.5273V17.9812C20.5 20.2007 18.7103 22 16.5026 22H7.47246C5.26886 22 3.66619 20.4426 3.53959 18.0713L3.5061 5.16638"
                  stroke="#FF4720"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                Top languages supported
              </p>
            </div>

            <div className="min-w-[100px] sm:min-w-[175px] py-1 sm:py-1.5 px-3 border border-dark-white bg-gradient-to-b from-transparent to-off-white rounded-lg flex items-center gap-2.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] sm:w-[24px] min-w-[20px] sm:min-w-[24px] h-auto"
              >
                <path
                  d="M7 21V18"
                  stroke="#FF4720"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 21V15"
                  stroke="#FF4720"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 6V3"
                  stroke="#FF4720"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 9V3"
                  stroke="#FF4720"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 18C6.06812 18 5.60218 18 5.23463 17.8478C4.74458 17.6448 4.35523 17.2554 4.15224 16.7654C4 16.3978 4 15.9319 4 15C4 14.0681 4 13.6022 4.15224 13.2346C4.35523 12.7446 4.74458 12.3552 5.23463 12.1522C5.60218 12 6.06812 12 7 12C7.93188 12 8.39782 12 8.76537 12.1522C9.25542 12.3552 9.64477 12.7446 9.84776 13.2346C10 13.6022 10 14.0681 10 15C10 15.9319 10 16.3978 9.84776 16.7654C9.64477 17.2554 9.25542 17.6448 8.76537 17.8478C8.39782 18 7.93188 18 7 18Z"
                  stroke="#FF4720"
                  strokeWidth="1.5"
                />
                <path
                  d="M17 12C16.0681 12 15.6022 12 15.2346 11.8478C14.7446 11.6448 14.3552 11.2554 14.1522 10.7654C14 10.3978 14 9.93188 14 9C14 8.06812 14 7.60218 14.1522 7.23463C14.3552 6.74458 14.7446 6.35523 15.2346 6.15224C15.6022 6 16.0681 6 17 6C17.9319 6 18.3978 6 18.7654 6.15224C19.2554 6.35523 19.6448 6.74458 19.8478 7.23463C20 7.60218 20 8.06812 20 9C20 9.93188 20 10.3978 19.8478 10.7654C19.6448 11.2554 19.2554 11.6448 18.7654 11.8478C18.3978 12 17.9319 12 17 12Z"
                  stroke="#FF4720"
                  strokeWidth="1.5"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                Flexible features
              </p>
            </div>

            <div className="min-w-[100px] sm:min-w-[175px] py-1 sm:py-1.5 px-3 border border-dark-white bg-gradient-to-b from-transparent to-off-white rounded-lg flex items-center gap-2.5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] sm:w-[24px] min-w-[20px] sm:min-w-[24px] h-auto"
              >
                <path
                  d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                  stroke="#FF4720"
                  strokeWidth="1.5"
                />
                <path
                  d="M16 16C16.6161 16 17.1155 15.4883 17.1155 14.8571V13.6162C17.1155 13.3131 17.233 13.0224 17.4422 12.8081L17.8366 12.4041C18.0545 12.1809 18.0545 11.8191 17.8366 11.5959L17.4422 11.1919C17.233 10.9776 17.1155 10.6869 17.1155 10.3838V9.14286C17.1155 8.51167 16.6161 8 16 8"
                  stroke="#FF4720"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 16C7.38392 16 6.88448 15.4883 6.88448 14.8571V13.6162C6.88448 13.3131 6.76696 13.0224 6.55776 12.8081L6.16336 12.4041C5.94555 12.1809 5.94555 11.8191 6.16336 11.5959L6.55776 11.1919C6.76696 10.9776 6.88448 10.6869 6.88448 10.3838V9.14286C6.88448 8.51167 7.38392 8 8 8"
                  stroke="#FF4720"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 12H10.009M13.991 12H14"
                  stroke="#FF4720"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/75">
                Developer friendly
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex">
          <Image src={infoImg} alt="" className="w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
