import Image from "next/image";
import clientImg1 from "@/assets/images/client-1.svg";
import clientImg2 from "@/assets/images/client-2.svg";
import clientImg3 from "@/assets/images/client-3.svg";
import clientImg4 from "@/assets/images/client-4.svg";
import clientImg5 from "@/assets/images/client-5.svg";
import clientImg6 from "@/assets/images/client-6.svg";

export default function ClientsSection() {
  return (
    <section className="-mt-[24.5px] sm:-mt-[37.5px] pt-24 border-t border-dark-white bg-gradient-to-b from-off-white to-transparent">
      <div className="mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
        <p className="mb-7 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center">
          Trusted by World's Top Leading Web Scraping Companies
        </p>

        <div className="mb-8 grid lg:flex grid-cols-[auto_1px_auto_1px_auto] justify-center items-center gap-5 lg:gap-12">
          <Image src={clientImg1} alt="" className="mx-auto h-[20px] lg:auto" />
          <span className="w-px h-[15px] bg-primary/25"></span>
          <Image src={clientImg2} alt="" className="mx-auto h-[16px] lg:auto" />
          <span className="w-px h-[15px] bg-primary/25"></span>
          <Image src={clientImg3} alt="" className="mx-auto h-[13px] lg:auto" />
          <span className="w-px h-[15px] bg-primary/25 hidden lg:block"></span>
          <Image src={clientImg4} alt="" className="mx-auto h-[15px] lg:auto" />
          <span className="w-px h-[15px] bg-primary/25"></span>
          <Image src={clientImg5} alt="" className="mx-auto h-[17px] lg:auto" />
          <span className="w-px h-[15px] bg-primary/25"></span>
          <Image src={clientImg6} alt="" className="mx-auto h-[18px] lg:auto" />
        </div>

        <p className="py-1.5 px-3.5 border border-primary/25 rounded-full text-[11px] sm:text-sm tracking-[-0.14px] text-center">
          Learn how Lightning Proxies is transforming the proxy landscape
          worldwide
          <svg
            width="13"
            height="10"
            viewBox="0 0 13 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[10px] sm:w-[13px] inline-block ml-2"
          >
            <path
              d="M7.71967 1.53033C7.42678 1.23744 7.42678 0.762563 7.71967 0.46967C8.01256 0.176777 8.48744 0.176777 8.78033 0.46967L12.7803 4.46967C13.0732 4.76256 13.0732 5.23744 12.7803 5.53033L8.78033 9.53033C8.48744 9.82322 8.01256 9.82322 7.71967 9.53033C7.42678 9.23744 7.42678 8.76256 7.71967 8.46967L10.4393 5.75H0.75C0.335787 5.75 0 5.41421 0 5C0 4.58579 0.335787 4.25 0.75 4.25H10.4393L7.71967 1.53033Z"
              className="fill-primary"
            />
          </svg>
        </p>
      </div>
    </section>
  );
}
