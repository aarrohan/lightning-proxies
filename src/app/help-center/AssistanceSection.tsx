import Image from "next/image";
import helpCenterImg1 from "@/assets/images/help-center-1.png";

export default function AssistanceSection() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="mx-auto container max-w-[1320px] px-5">
        <div className="mb-16 sm:mb-24 w-full h-px bg-dark-white"></div>

        <div className="grid lg:grid-cols-[500px_auto] items-center gap-12">
          <div>
            <h2 className="mb-5 text-xl sm:text-3xl font-semibold tracking-[-0.2px] sm:tracking-[-0.56px]">
              Need more assistance?
            </h2>

            <p className="mb-6  text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/75">
              If you're looking for any more questions or guides, feel free to
              contact us for more details.{" "}
            </p>

            <button className="active:scale-95 py-1.5 px-3.5 border border-dark-white rounded-full flex items-center gap-2 text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] duration-200">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.6693 7.71081C14.6693 11.2329 11.6841 14.0886 8.0026 14.0886C7.56974 14.0892 7.13807 14.0491 6.71287 13.9693C6.40682 13.9118 6.25379 13.8831 6.14696 13.8994C6.04012 13.9157 5.88872 13.9963 5.58593 14.1573C4.72936 14.6128 3.73057 14.7737 2.77001 14.595C3.1351 14.1459 3.38444 13.6071 3.49446 13.0295C3.56112 12.6762 3.39594 12.333 3.14853 12.0817C2.02482 10.9407 1.33594 9.40307 1.33594 7.71081C1.33594 4.18872 4.32112 1.33301 8.0026 1.33301C8.4592 1.33301 8.90514 1.37694 9.33594 1.46062"
                  stroke="#1D2026"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.3307 3.66634C15.3307 4.95501 14.2861 5.99967 12.9974 5.99967C11.7087 5.99967 10.6641 4.95501 10.6641 3.66634C10.6641 2.37767 11.7087 1.33301 12.9974 1.33301C14.2861 1.33301 15.3307 2.37767 15.3307 3.66634Z"
                  stroke="#1D2026"
                />
                <path
                  d="M7.9996 8H8.0056M10.6633 8H10.6693M5.33594 8H5.34192"
                  stroke="#1D2026"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Ask chat support
            </button>
          </div>

          <div className="hidden lg:flex">
            <Image src={helpCenterImg1} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
