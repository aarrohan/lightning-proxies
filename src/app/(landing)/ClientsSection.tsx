import Image from "next/image";
import Marquee from "react-fast-marquee";
import clientImg1 from "@/assets/images/gologin-logo.svg";
import clientImg2 from "@/assets/images/dolphinanty-logo.svg";
import clientImg3 from "@/assets/images/geelark-logo.png";
import clientImg4 from "@/assets/images/octobrowser-logo.svg";
import clientImg5 from "@/assets/images/incogniton-logo.svg";
import clientImg6 from "@/assets/images/multilogin-logo.svg";
import clientImg7 from "@/assets/images/undetectable-logo.svg";
import clientImg8 from "@/assets/images/capsolver-logo.png";
import Link from "next/link";

export default function ClientsSection() {
  return (
    <section className="-mt-[24.5px] sm:-mt-[37.5px] pt-32 border-t border-dark-white bg-gradient-to-b from-off-white to-transparent">
      <div className="mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
        <p className="mb-7 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center">
          TRUSTED BY TOP PARTNERS IN THE INDUSTRY
        </p>

        <Marquee autoFill={true} speed={40}>
          <Link href={"https://gologin.com/"} target="_blank">
            <Image
              src={clientImg1}
              alt=""
              className="mx-auto w-auto h-[24px]"
            />
          </Link>
          <span className="mx-8 sm:mx-12 w-px h-[15px] bg-primary/25 block"></span>
          <Link
            href={
              "https://dolphin-anty.com/?utm_source=media&utm_medium=partners&utm_campaign=lightningproxies&utm_content=partners-page"
            }
            target="_blank"
          >
            <Image
              src={clientImg2}
              alt=""
              className="mx-auto w-auto h-[24px]"
            />
          </Link>
          <span className="mx-8 sm:mx-12 w-px h-[15px] bg-primary/25 block"></span>
          <Link href={"https://www.geelark.com/"} target="_blank">
            <Image
              src={clientImg3}
              alt=""
              className="mx-auto w-auto h-[24px]"
            />
          </Link>
          <span className="mx-8 sm:mx-12 w-px h-[15px] bg-primary/25 block"></span>
          <Link href={"https://octobrowser.net/"} target="_blank">
            <Image
              src={clientImg4}
              alt=""
              className="mx-auto w-auto h-[24px]"
            />
          </Link>
          <span className="mx-8 sm:mx-12 w-px h-[15px] bg-primary/25 block"></span>
          <Link href={"https://incogniton.com/"}>
            <Image
              src={clientImg5}
              alt=""
              className="mx-auto w-auto h-[24px]"
            />
          </Link>
          <span className="mx-8 sm:mx-12 w-px h-[15px] bg-primary/25 block"></span>
          <Link href={"https://multilogin.com/"}>
            <Image
              src={clientImg6}
              alt=""
              className="mx-auto w-auto h-[24px]"
            />
          </Link>
          <span className="mx-8 sm:mx-12 w-px h-[15px] bg-primary/25 block"></span>
          <Link
            href={
              "https://undetectable.io/?r=ToJma&utm_source=lightningproxies&utm_medium=affiliate"
            }
          >
            <Image
              src={clientImg7}
              alt=""
              className="mx-auto w-auto h-[24px]"
            />
          </Link>
          <span className="mx-8 sm:mx-12 w-px h-[15px] bg-primary/25 block"></span>
          <Link href={"https://www.capsolver.com/"}>
            <Image
              src={clientImg8}
              alt=""
              className="mx-auto w-auto h-[24px]"
            />
          </Link>

          <span className="mx-8 sm:mx-12 w-px h-[15px] bg-primary/25 block"></span>
        </Marquee>

        <div className="relative z-10 -mt-[20px] sm:-mt-[28px] w-full h-[20px] sm:h-[28px] pointer-events-none">
          <div className="absolute top-0 left-0 w-[100px] h-full bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 w-[100px] h-full bg-gradient-to-r from-transparent to-white"></div>
        </div>

        <Link
          href={"/"}
          className="mt-8 py-1.5 px-3.5 border border-primary/25 rounded-full text-[11px] sm:text-sm tracking-[-0.14px] text-center"
        >
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
        </Link>
      </div>
    </section>
  );
}
