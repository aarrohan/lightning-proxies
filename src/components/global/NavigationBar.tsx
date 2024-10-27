import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/images/branding/logo.svg";
import PrimaryBtn from "../ui/PrimaryBtn";

export default function NavigationBar() {
  return (
    <nav className="fixed z-[1000] top-0 left-0 w-full bg-white border-b border-dark-white">
      <div className="mx-auto container max-w-[1320px] h-[70px] flex justify-between items-center">
        <Link href={"/"}>
          <Image src={logoImg} alt="" className="w-[130px]" />
        </Link>

        <ul className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center gap-10">
          <li>
            <Link
              href={"/"}
              className="flex items-center gap-2 text-sm font-medium tracking-[-0.14px]"
            >
              Products{" "}
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.25L4.75 4.75L8.25 1.25"
                  stroke="#1D2026"
                  strokeWidth="1.25"
                />
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href={"/"}
              className="flex items-center gap-2 text-sm font-medium tracking-[-0.14px]"
            >
              Locations{" "}
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.25L4.75 4.75L8.25 1.25"
                  stroke="#1D2026"
                  strokeWidth="1.25"
                />
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href={"/"}
              className="flex items-center gap-2 text-sm font-medium tracking-[-0.14px]"
            >
              Use Cases{" "}
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.25L4.75 4.75L8.25 1.25"
                  stroke="#1D2026"
                  strokeWidth="1.25"
                />
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href={"/"}
              className="flex items-center gap-2 text-sm font-medium tracking-[-0.14px]"
            >
              Resources{" "}
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.25L4.75 4.75L8.25 1.25"
                  stroke="#1D2026"
                  strokeWidth="1.25"
                />
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href={"/"}
              className="flex items-center gap-2 text-sm font-medium tracking-[-0.14px]"
            >
              Pricing{" "}
              <svg
                width="9"
                height="6"
                viewBox="0 0 9 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.25L4.75 4.75L8.25 1.25"
                  stroke="#1D2026"
                  strokeWidth="1.25"
                />
              </svg>
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Link href={"/"} className="text-sm font-medium tracking-[-0.14px]">
            Login
          </Link>

          <PrimaryBtn>
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
                className="fill-white"
              />
            </svg>
          </PrimaryBtn>
        </div>
      </div>
    </nav>
  );
}
