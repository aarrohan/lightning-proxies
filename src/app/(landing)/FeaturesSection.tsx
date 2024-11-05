import Image from "next/image";
import feature1Img from "@/assets/images/feature-1.png";
import feature2Img from "@/assets/images/feature-2.webp";
import feature3Img from "@/assets/images/feature-3.webp";
import feature4Img from "@/assets/images/feature-4.svg";
import feature5Img from "@/assets/images/feature-5.svg";

interface IContentBoxProps {
  title: string;
  description: string;
  img: JSX.Element;
}

function BigBox() {
  return (
    <div className="px-6 sm:px-8 border border-dark-white bg-off-white rounded-xl grid md:grid-cols-[auto_375px] items-center gap-y-3 gap-x-14">
      <div className="pt-8 sm:pt-10 pb-0 sm:pb-10">
        <p className="mb-2.5 text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-accent">
          Ethical IP Resources
        </p>

        <p className="mb-7 text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
          Become the identity of someone else on the web with the help of our
          proxies, jump from country to country with one simple click.
        </p>

        <div className="border border-dark-white bg-white/25 rounded-lg grid grid-cols-3">
          <div className="p-3 sm:p-4 flex flex-col items-center gap-2.5">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] sm:w-[34px] h-auto"
            >
              <circle
                opacity="0.35"
                cx="14.1667"
                cy="19.8334"
                r="14.1667"
                fill="url(#paint0_linear_1_3881)"
              />
              <path
                d="M31.1667 16.9999C31.1667 9.17588 24.824 2.83325 17 2.83325C9.176 2.83325 2.83337 9.17588 2.83337 16.9999C2.83337 24.8239 9.176 31.1666 17 31.1666C24.824 31.1666 31.1667 24.8239 31.1667 16.9999Z"
                stroke="#1675FF"
                strokeWidth="2.125"
              />
              <path
                d="M28.3333 8.07349C27.0091 8.16893 25.3131 8.68159 24.137 10.2038C22.0128 12.9534 19.8885 13.1828 18.4724 12.2663C16.3481 10.8915 18.1333 8.66476 15.6401 7.45463C14.0152 6.66593 13.7887 4.51972 14.6931 2.83325"
                stroke="#1675FF"
                strokeWidth="2.125"
                strokeLinejoin="round"
              />
              <path
                d="M2.83337 15.5833C3.91358 16.5212 5.42653 17.3799 7.20909 17.3799C10.892 17.3799 11.6286 18.0835 11.6286 20.8983C11.6286 23.7131 11.6286 23.7131 12.3651 25.8241C12.8443 27.1972 13.0117 28.5704 12.0567 29.7499"
                stroke="#1675FF"
                strokeWidth="2.125"
                strokeLinejoin="round"
              />
              <path
                d="M31.1667 19.0575C29.91 18.3333 28.3334 18.0354 26.7374 19.1824C23.6834 21.3773 21.5779 19.5586 20.6294 21.376C19.2334 24.0515 24.2189 24.8925 19.8334 31.1667"
                stroke="#1675FF"
                strokeWidth="2.125"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_3881"
                  x1="14.1667"
                  y1="5.66675"
                  x2="14.1667"
                  y2="34.0001"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="#1675FF" />
                </linearGradient>
              </defs>
            </svg>

            <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
              Worldwide
            </p>
          </div>

          <div className="p-3 sm:p-4 border-x border-dark-white flex flex-col items-center gap-2.5">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] sm:w-[34px] h-auto"
            >
              <path
                opacity="0.35"
                d="M24.9811 25.5001C22.5971 29.4714 18.568 32.0475 16.1584 33.3192C15.2983 33.7731 14.8684 34.0001 14.1665 34.0001C13.4647 34.0001 13.0348 33.7731 12.1747 33.3192C9.76505 32.0475 5.73599 29.4714 3.35201 25.5001M24.9811 25.5001C27.6249 17.0001 26.883 11.0344 26.3441 10.3209C25.7716 9.56299 24.4772 9.19504 21.8884 8.45914C20.1197 7.95636 18.5605 7.35064 17.3148 6.79766C15.6164 6.04372 14.7672 5.66675 14.1665 5.66675C13.5659 5.66675 12.7167 6.04372 11.0183 6.79766C9.7726 7.35064 8.21349 7.95635 6.44477 8.45914C3.85595 9.19504 2.56153 9.56299 1.98904 10.3209C1.45014 11.0344 0.708282 14.8751 3.35201 25.5001"
                fill="url(#paint0_linear_1_3888)"
              />
              <path
                d="M12.0416 15.5833L13.4583 16.9999M13.4583 16.9999L14.875 18.4166M13.4583 16.9999L14.875 15.5833M13.4583 16.9999L12.0416 18.4166"
                stroke="#1675FF"
                strokeWidth="2.125"
                strokeLinecap="round"
              />
              <path
                d="M4.95837 15.5833L6.37504 16.9999M6.37504 16.9999L7.79171 18.4166M6.37504 16.9999L7.79171 15.5833M6.37504 16.9999L4.95837 18.4166"
                stroke="#1675FF"
                strokeWidth="2.125"
                strokeLinecap="round"
              />
              <path
                d="M19.125 15.5833L20.5417 16.9999M20.5417 16.9999L21.9583 18.4166M20.5417 16.9999L21.9583 15.5833M20.5417 16.9999L19.125 18.4166"
                stroke="#1675FF"
                strokeWidth="2.125"
                strokeLinecap="round"
              />
              <path
                d="M26.2084 15.5833L27.625 16.9999M27.625 16.9999L29.0417 18.4166M27.625 16.9999L29.0417 15.5833M27.625 16.9999L26.2084 18.4166"
                stroke="#1675FF"
                strokeWidth="2.125"
                strokeLinecap="round"
              />
              <path
                d="M27.8146 22.6666C25.4306 26.6379 21.4014 29.214 18.9918 30.4857C18.1318 30.9396 17.7018 31.1666 17 31.1666C16.2982 31.1666 15.8682 30.9396 15.0082 30.4857C12.5985 29.214 8.56945 26.6379 6.18547 22.6666M29.7499 11.3333C29.748 9.27207 29.7164 8.20086 29.1775 7.48741C28.6051 6.7295 27.3107 6.36155 24.7218 5.62564C22.9531 5.12287 21.3939 4.51714 20.1483 3.96416C18.4498 3.21023 17.6007 2.83325 17 2.83325C16.3993 2.83325 15.5502 3.21023 13.8518 3.96416C12.6061 4.51714 11.0469 5.12285 9.27823 5.62564C6.68941 6.36155 5.39499 6.7295 4.8225 7.48741C4.2836 8.20086 4.25198 9.27207 4.25012 11.3333"
                stroke="#1675FF"
                strokeWidth="2.125"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_3888"
                  x1="14.1666"
                  y1="5.66675"
                  x2="14.1666"
                  y2="34.0001"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="#1675FF" />
                </linearGradient>
              </defs>
            </svg>

            <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
              Reliable
            </p>
          </div>

          <div className="p-3 sm:p-4 flex flex-col items-center gap-2.5">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] sm:w-[34px] h-auto"
            >
              <path
                opacity="0.35"
                d="M0.708374 19.8334C0.708374 13.489 0.708374 10.3169 2.6793 8.34592C4.65023 6.375 7.82239 6.375 14.1668 6.375C20.511 6.375 23.6832 6.375 25.6541 8.34592C27.6251 10.3169 27.6251 13.489 27.6251 19.8334C27.6251 26.1776 27.6251 29.3498 25.6541 31.3207C23.6832 33.2917 20.511 33.2917 14.1668 33.2917C7.82239 33.2917 4.65023 33.2917 2.6793 31.3207C0.708374 29.3498 0.708374 26.1776 0.708374 19.8334Z"
                fill="url(#paint0_linear_1_3895)"
              />
              <path
                d="M19.125 18.4167L24.0833 12.75M19.8333 21.25C19.8333 22.8149 18.5648 24.0833 17 24.0833C15.4351 24.0833 14.1666 22.8149 14.1666 21.25C14.1666 19.6852 15.4351 18.4167 17 18.4167C18.5648 18.4167 19.8333 19.6852 19.8333 21.25Z"
                stroke="#1675FF"
                strokeWidth="2.125"
                strokeLinecap="round"
              />
              <path
                d="M8.5 17C8.5 12.3056 12.3056 8.5 17 8.5C18.5483 8.5 19.9998 8.91392 21.25 9.63714"
                stroke="#1675FF"
                strokeWidth="2.125"
                strokeLinecap="round"
              />
              <path
                d="M3.54175 16.9999C3.54175 10.6555 3.54175 7.48336 5.51267 5.51243C7.48361 3.5415 10.6558 3.5415 17.0001 3.5415C23.3444 3.5415 26.5166 3.5415 28.4875 5.51243C30.4585 7.48336 30.4585 10.6555 30.4585 16.9999C30.4585 23.3442 30.4585 26.5164 28.4875 28.4872C26.5166 30.4582 23.3444 30.4582 17.0001 30.4582C10.6558 30.4582 7.48361 30.4582 5.51267 28.4872C3.54175 26.5164 3.54175 23.3442 3.54175 16.9999Z"
                stroke="#1675FF"
                strokeWidth="2.125"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_3895"
                  x1="14.1667"
                  y1="6.375"
                  x2="14.1667"
                  y2="33.2917"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="#1675FF" />
                </linearGradient>
              </defs>
            </svg>

            <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
              Fast
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Image src={feature1Img} alt="" className="w-full max-w-[375px]" />
      </div>
    </div>
  );
}

function ContentBox({ title, description, img }: IContentBoxProps) {
  return (
    <div className="py-8 sm:py-10 px-6 sm:px-8 pb-4 border border-dark-white bg-off-white rounded-xl">
      <p className="mb-2.5 text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-accent">
        {title}
      </p>

      <p className="mb-7 text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
        {description}
      </p>

      <div className="flex justify-center">{img}</div>
    </div>
  );
}

function CodeBox() {
  return (
    <div className="border border-dark-white bg-off-white rounded-xl flex flex-col justify-between">
      <div className="pt-8 sm:pt-10 pb-6 lg:pb-0 px-6 sm:px-8">
        <p className="mb-2.5 text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-accent">
          Effortless Integration with Any Language
        </p>

        <p className="mb-2 text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
          Simplify proxy implementation with our quick and easy demonstration
          codes. No hassle, just fast integration.
        </p>
      </div>

      <div className="pb-8 sm:pb-10 lg:pb-0 lg:pl-8 px-6 sm:px-8 lg:px-0 flex justify-center lg:justify-end">
        <Image src={feature4Img} alt="" className="w-full hidden lg:block" />
        <Image
          src={feature5Img}
          alt=""
          className="w-full max-w-[395px] rounded-lg block lg:hidden"
        />
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  const contentBoxes: IContentBoxProps[] = [
    {
      title: "Detailed Proxy Guide for Everyone",
      description:
        "We offer a comprehensive library of step-by-step videos, designed to help you configure our proxies in any tool you can think of.",
      img: <Image src={feature2Img} alt="" className="w-full max-w-[344px]" />,
    },
    {
      title: "Customer Support Around the Clock",
      description:
        "We're here for you every step of the way. Our support team is available 24/7 on live chat to assist with any issues you may encounter.",
      img: <Image src={feature3Img} alt="" className="w-full max-w-[344px]" />,
    },
  ];

  return (
    <section className="pt-20 sm:pt-44">
      <div className="mx-auto container max-w-[1320px] px-5">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-orange">
          Features
        </p>

        <h2 className="mb-8 sm:mb-14 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          Everything you would expect from <br className="hidden sm:block" /> a
          proxy service, and much more
        </h2>

        <div className="grid lg:grid-cols-[auto_428px] gap-4">
          <div>
            <BigBox />

            <div className="mt-4 grid md:grid-cols-2 gap-4">
              {contentBoxes.map((box, index) => (
                <ContentBox key={index} {...box} />
              ))}
            </div>
          </div>

          <CodeBox />
        </div>
      </div>
    </section>
  );
}
