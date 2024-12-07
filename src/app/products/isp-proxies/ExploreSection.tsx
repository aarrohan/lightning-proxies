import Image from "next/image";
import product1IconImg from "@/assets/images/menu-product-1-icon.svg";
import product2IconImg from "@/assets/images/menu-product-2-icon.svg";
import product4IconImg from "@/assets/images/menu-product-4-icon.svg";
import product5IconImg from "@/assets/images/menu-product-5-icon.svg";
import Link from "next/link";

export default function ExploreSection() {
  return (
    <section className="py-20 sm:py-44">
      <div className="mx-auto container max-w-[1320px] px-5">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-green">
          PRODUCTS
        </p>

        <h2 className="mb-8 sm:mb-14 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          Explore more products
        </h2>

        <div className="relative border border-dark-white bg-white grid lg:grid-cols-2">
          <div className="relative z-10 py-8 px-5 border-b lg:border-r border-dark-white flex flex-col items-center gap-3">
            <div className="absolute z-20 -bottom-[9px] sm:-bottom-[16px] -left-[9px] sm:-left-[16px] w-fit h-fit border-4 sm:border-8 border-white rounded-full">
              <div className="w-[10px] sm:w-[16px] aspect-square border border-white-dark bg-white rounded-full"></div>
            </div>

            <div className="absolute z-20 -bottom-[9px] sm:-bottom-[16px] -right-[9px] sm:-right-[16px] w-fit h-fit border-4 sm:border-8 border-white rounded-full lg:hidden">
              <div className="w-[10px] sm:w-[16px] aspect-square border border-white-dark bg-white rounded-full"></div>
            </div>

            <Image
              src={product1IconImg}
              alt=""
              className="mb-2 sm:mb-5 w-[64px]"
            />

            <h3 className="text-sm sm:text-2xl font-semibold tracking-[-0.28px] sm:tracking-[-0.48px] text-center">
              Residential Proxies
            </h3>

            <p className="max-w-[420px] text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
              Sed tortor est, volutpat id bibendum eu, convallis non magna. Cras
              accumsan lobortis odio in finibus.
            </p>

            <Link
              href={"/products/residential-proxies"}
              className="py-1 sm:py-1.5 px-2.5 sm:px-3.5 bg-accent/10 rounded-lg sm:rounded-xl flex items-center gap-1.5 text-[11px] sm:text-base font-medium tracking-[-0.11px] sm:tracking-[-0.16px] text-accent"
            >
              From $2.99{" "}
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 8.625L4.75 4.875L1.25 1.375"
                  strokeWidth="1.25"
                  className="stroke-accent"
                />
              </svg>
            </Link>
          </div>

          <div className="relative z-10 py-8 px-5 border-b border-dark-white flex flex-col items-center gap-3">
            <div className="absolute z-20 -bottom-[9px] sm:-bottom-[16px] -right-[9px] sm:-right-[16px] w-fit h-fit border-4 sm:border-8 border-white rounded-full hidden lg:block">
              <div className="w-[10px] sm:w-[16px] aspect-square border border-white-dark bg-white rounded-full"></div>
            </div>

            <Image
              src={product2IconImg}
              alt=""
              className="mb-2 sm:mb-5 w-[64px]"
            />

            <h3 className="text-sm sm:text-2xl font-semibold tracking-[-0.28px] sm:tracking-[-0.48px] text-center">
              Datacenter Proxies
            </h3>

            <p className="max-w-[420px] text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
              Sed tortor est, volutpat id bibendum eu, convallis non magna. Cras
              accumsan lobortis odio in finibus.
            </p>

            <Link
              href={"/products/datacenter-proxies"}
              className="py-1 sm:py-1.5 px-2.5 sm:px-3.5 bg-green/10 rounded-lg sm:rounded-xl flex items-center gap-1.5 text-[11px] sm:text-base font-medium tracking-[-0.11px] sm:tracking-[-0.16px] text-green"
            >
              From $2.99{" "}
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 8.625L4.75 4.875L1.25 1.375"
                  strokeWidth="1.25"
                  className="stroke-green"
                />
              </svg>
            </Link>
          </div>

          <div className="relative z-10 py-8 px-5 border-b lg:border-b-0 lg:border-r border-dark-white flex flex-col items-center gap-3">
            <div className="absolute z-20 -bottom-[9px] sm:-bottom-[16px] -left-[9px] sm:-left-[16px] w-fit h-fit border-4 sm:border-8 border-white rounded-full lg:hidden">
              <div className="w-[10px] sm:w-[16px] aspect-square border border-white-dark bg-white rounded-full"></div>
            </div>

            <div className="absolute z-20 -bottom-[9px] sm:-bottom-[16px] -right-[9px] sm:-right-[16px] w-fit h-fit border-4 sm:border-8 border-white rounded-full lg:hidden">
              <div className="w-[10px] sm:w-[16px] aspect-square border border-white-dark bg-white rounded-full"></div>
            </div>

            <Image
              src={product4IconImg}
              alt=""
              className="mb-2 sm:mb-5 w-[64px]"
            />

            <h3 className="text-sm sm:text-2xl font-semibold tracking-[-0.28px] sm:tracking-[-0.48px] text-center">
              IPv6 Proxies
            </h3>

            <p className="max-w-[420px] text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
              Sed tortor est, volutpat id bibendum eu, convallis non magna. Cras
              accumsan lobortis odio in finibus.
            </p>

            <Link
              href={"/products/ipv6-proxies"}
              className="py-1 sm:py-1.5 px-2.5 sm:px-3.5 bg-purple/10 rounded-lg sm:rounded-xl flex items-center gap-1.5 text-[11px] sm:text-base font-medium tracking-[-0.11px] sm:tracking-[-0.16px] text-purple"
            >
              From $2.99{" "}
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 8.625L4.75 4.875L1.25 1.375"
                  strokeWidth="1.25"
                  className="stroke-purple"
                />
              </svg>
            </Link>
          </div>

          <div className="relative z-10 py-8 px-5 flex flex-col items-center gap-3">
            <Image
              src={product5IconImg}
              alt=""
              className="mb-2 sm:mb-5 w-[64px]"
            />

            <h3 className="text-sm sm:text-2xl font-semibold tracking-[-0.28px] sm:tracking-[-0.48px] text-center">
              Mobile Proxies
            </h3>

            <p className="max-w-[420px] text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/50">
              Sed tortor est, volutpat id bibendum eu, convallis non magna. Cras
              accumsan lobortis odio in finibus.
            </p>

            <Link
              href={"/products/mobile-proxies"}
              className="py-1 sm:py-1.5 px-2.5 sm:px-3.5 bg-blue/10 rounded-lg sm:rounded-xl flex items-center gap-1.5 text-[11px] sm:text-base font-medium tracking-[-0.11px] sm:tracking-[-0.16px] text-blue"
            >
              From $2.99{" "}
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 8.625L4.75 4.875L1.25 1.375"
                  strokeWidth="1.25"
                  className="stroke-blue"
                />
              </svg>
            </Link>
          </div>

          <Image
            src={"/images/grain-2.png"}
            alt=""
            fill
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          <div className="absolute z-20 -top-[9px] sm:-top-[16px] -left-[9px] sm:-left-[16px] w-fit h-fit border-4 sm:border-8 border-white rounded-full">
            <div className="w-[10px] sm:w-[16px] aspect-square border border-white-dark bg-white rounded-full"></div>
          </div>

          <div className="absolute z-20 -bottom-[9px] sm:-bottom-[16px] -left-[9px] sm:-left-[16px] w-fit h-fit border-4 sm:border-8 border-white rounded-full">
            <div className="w-[10px] sm:w-[16px] aspect-square border border-white-dark bg-white rounded-full"></div>
          </div>

          <div className="absolute z-20 top-1/2 sm:-top-[16px] -left-[9px] sm:left-1/2 -translate-y-1/2 sm:-translate-y-0 sm:-translate-x-1/2 w-fit h-fit border-4 sm:border-8 border-white rounded-full">
            <div className="w-[10px] sm:w-[16px] aspect-square border border-white-dark bg-white rounded-full"></div>
          </div>

          <div className="absolute z-20 top-1/2 sm:top-[auto] sm:-bottom-[16px] sm:left-1/2 -right-[9px] sm:-right-0 -translate-y-1/2 sm:-translate-y-0 sm:-translate-x-1/2 w-fit h-fit border-4 sm:border-8 border-white rounded-full">
            <div className="w-[10px] sm:w-[16px] aspect-square border border-white-dark bg-white rounded-full"></div>
          </div>

          <div className="absolute z-20 -top-[9px] sm:-top-[16px] -right-[9px] sm:-right-[16px] w-fit h-fit border-4 sm:border-8 border-white rounded-full">
            <div className="w-[10px] sm:w-[16px] aspect-square border border-white-dark bg-white rounded-full"></div>
          </div>

          <div className="absolute z-20 -bottom-[9px] sm:-bottom-[16px] -right-[9px] sm:-right-[16px] w-fit h-fit border-4 sm:border-8 border-white rounded-full">
            <div className="w-[10px] sm:w-[16px] aspect-square border border-white-dark bg-white rounded-full"></div>
          </div>

          <div className="absolute z-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-fit h-fit border-8 border-white rounded-full hidden lg:block">
            <div className="w-[16px] aspect-square border border-white-dark bg-white rounded-full"></div>
          </div>

          {/* other */}

          <div className="absolute top-[18%] -left-[3px] w-[6px] h-[26px] border border-dark-white bg-white rounded-full hidden lg:block"></div>
          <div className="absolute -top-[3px] left-[32%] w-[26px] h-[6px] border border-dark-white bg-white rounded-full hidden lg:block"></div>
          <div className="absolute -bottom-[3px] right-[25%] w-[26px] h-[6px] border border-dark-white bg-white rounded-full hidden lg:block"></div>
          <div className="absolute -bottom-[3px] left-[42%] w-[26px] h-[6px] border border-dark-white bg-white rounded-full hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
