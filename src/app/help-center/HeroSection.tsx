import Image from "next/image";
import helpAndSupportBgImg from "@/assets/images/help-and-support-bg.png";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="pt-[70px]">
      <div className="relative mx-auto container max-w-[1320px] py-20 sm:py-28 px-5">
        <div className="mb-10 flex flex-col sm:flex-row justify-between sm:items-end gap-5">
          <h2 className="text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px]">
            Help & Support
          </h2>

          <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/50">
            Guides, articles and support to learn about LightningProxies.
          </p>
        </div>

        <div className="relative mb-8 p-12 rounded-3xl hidden sm:flex justify-center overflow-hidden">
          <Image
            src={helpAndSupportBgImg}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          <div className="relative z-10 flex flex-col items-center">
            <h3 className="mb-5 text-2xl font-semibold tracking-[-0.5px] text-center text-white">
              Find all the answers to all your queries
            </h3>

            <div className="w-full max-w-[350px] h-[44px] px-3 bg-white/25 rounded-full flex items-center gap-2.5">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 14.5C11.0376 14.5 13.5 12.0376 13.5 9C13.5 5.96243 11.0376 3.5 8 3.5C4.96243 3.5 2.5 5.96243 2.5 9C2.5 12.0376 4.96243 14.5 8 14.5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.9688 17.0294C15.2616 17.3223 15.7365 17.3223 16.0294 17.0294C16.3223 16.7365 16.3223 16.2616 16.0294 15.9688L14.9688 17.0294ZM16.0294 15.9688L12.0294 11.9688L10.9688 13.0294L14.9688 17.0294L16.0294 15.9688Z"
                  fill="white"
                />
              </svg>

              <input
                type="text"
                placeholder="Search for your query"
                className="text-sm font-medium tracking-[-0.14px] text-white placeholder:text-white"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <div className="relative py-5 sm:py-7 px-7 sm:px-10 border border-dark-white rounded-xl">
            <h3 className="mb-3.5 sm:mb-5 text-lg sm:text-3xl font-semibold tracking-[-0.56px]">
              FAQs
            </h3>

            <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/50">
              View answers to all your frequently asked questions.
            </p>

            <Link
              href={"/help-center/faqs"}
              className="active:scale-95 absolute top-5 sm:top-7 right-7 sm:right-10 w-[24px] sm:w-[34px] aspect-square border border-dark-white rounded-full flex justify-center items-center duration-200"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[8px] sm:w-[11px] h-auto"
              >
                <path
                  d="M3.75327 1.65059C3.29897 1.65059 2.93068 1.28231 2.93069 0.828008C2.93068 0.373709 3.29897 0.00542673 3.75327 0.0054266L9.95756 0.00542725C10.4119 0.00542689 10.7801 0.373709 10.7801 0.828008L10.7801 7.0323C10.7801 7.4866 10.4119 7.85488 9.95756 7.85488C9.50326 7.85488 9.13498 7.4866 9.13498 7.0323L9.13498 2.81389L1.62054 10.3283C1.2993 10.6496 0.778474 10.6496 0.457236 10.3283C0.135998 10.0071 0.135998 9.48626 0.457236 9.16502L7.97167 1.65059L3.75327 1.65059Z"
                  fill="#1D2026"
                />
              </svg>
            </Link>
          </div>

          <div className="relative py-5 sm:py-7 px-7 sm:px-10 border border-dark-white rounded-xl">
            <h3 className="mb-3.5 sm:mb-5 text-lg sm:text-3xl font-semibold tracking-[-0.56px]">
              Blogs
            </h3>

            <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/50">
              Read all articles about LightningProxies latest updates and
              guides.
            </p>

            <Link
              href={"/blog"}
              className="active:scale-95 absolute top-5 sm:top-7 right-7 sm:right-10 w-[24px] sm:w-[34px] aspect-square border border-dark-white rounded-full flex justify-center items-center duration-200"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[8px] sm:w-[11px] h-auto"
              >
                <path
                  d="M3.75327 1.65059C3.29897 1.65059 2.93068 1.28231 2.93069 0.828008C2.93068 0.373709 3.29897 0.00542673 3.75327 0.0054266L9.95756 0.00542725C10.4119 0.00542689 10.7801 0.373709 10.7801 0.828008L10.7801 7.0323C10.7801 7.4866 10.4119 7.85488 9.95756 7.85488C9.50326 7.85488 9.13498 7.4866 9.13498 7.0323L9.13498 2.81389L1.62054 10.3283C1.2993 10.6496 0.778474 10.6496 0.457236 10.3283C0.135998 10.0071 0.135998 9.48626 0.457236 9.16502L7.97167 1.65059L3.75327 1.65059Z"
                  fill="#1D2026"
                />
              </svg>
            </Link>
          </div>

          <div className="relative py-5 sm:py-7 px-7 sm:px-10 border border-dark-white rounded-xl">
            <h3 className="mb-3.5 sm:mb-5 text-lg sm:text-3xl font-semibold tracking-[-0.56px]">
              Legal
            </h3>

            <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/50">
              Get details on our terms of service, privacy policy and related
            </p>

            <Link
              href={"/legal/terms-of-service"}
              className="active:scale-95 absolute top-5 sm:top-7 right-7 sm:right-10 w-[24px] sm:w-[34px] aspect-square border border-dark-white rounded-full flex justify-center items-center duration-200"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[8px] sm:w-[11px] h-auto"
              >
                <path
                  d="M3.75327 1.65059C3.29897 1.65059 2.93068 1.28231 2.93069 0.828008C2.93068 0.373709 3.29897 0.00542673 3.75327 0.0054266L9.95756 0.00542725C10.4119 0.00542689 10.7801 0.373709 10.7801 0.828008L10.7801 7.0323C10.7801 7.4866 10.4119 7.85488 9.95756 7.85488C9.50326 7.85488 9.13498 7.4866 9.13498 7.0323L9.13498 2.81389L1.62054 10.3283C1.2993 10.6496 0.778474 10.6496 0.457236 10.3283C0.135998 10.0071 0.135998 9.48626 0.457236 9.16502L7.97167 1.65059L3.75327 1.65059Z"
                  fill="#1D2026"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
