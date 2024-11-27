import Image from "next/image";
import pricingPageHeroSectionGrainImg from "@/assets/images/pricing-page-hero-section-grain.png";
import PrimaryBtn from "@/components/ui/PrimaryBtn";
import SecondaryBtn from "@/components/ui/SecondaryBtn";
import locationImg from "@/assets/images/location-3.svg";

interface IInfoBoxProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

function InfoBox({ icon, title, description }: IInfoBoxProps) {
  return (
    <div className="p-6 sm:p-8 border border-dashed border-[#FFD018]/25 bg-gradient-to-b from-[#FFD018]/10 to-transparent rounded-xl">
      {icon}

      <h3 className="mt-4 mb-2 text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
        {title}
      </h3>

      <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-white/50">
        {description}
      </p>
    </div>
  );
}

export default function HeroSection() {
  const infoBoxes: IInfoBoxProps[] = [
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[26px] sm:w-[32px] h-auto"
        >
          <path
            d="M9.33496 20C7.12583 20 5.33496 21.7908 5.33496 24C5.33496 26.2091 7.12583 28 9.33496 28C11.5441 28 13.335 26.2091 13.335 24C13.335 21.7908 11.5441 20 9.33496 20Z"
            stroke="#FFD018"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.668 20C20.4588 20 18.668 21.7908 18.668 24C18.668 26.2091 20.4588 28 22.668 28C24.8772 28 26.668 26.2091 26.668 24C26.668 21.7908 24.8772 20 22.668 20Z"
            stroke="#FFD018"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.6683 22.667H13.335"
            stroke="#FFD018"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M29.3346 17.3337C26.0592 15.697 21.2992 14.667 16.0013 14.667C10.7034 14.667 5.94342 15.697 2.66797 17.3337"
            stroke="#FFD018"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.3346 15.3334L23.9246 6.28327C23.637 4.43759 21.6322 3.4375 20.0137 4.33226L19.1937 4.78554C17.2038 5.8855 14.7988 5.8855 12.809 4.78554L11.989 4.33226C10.3703 3.4375 8.36554 4.4376 8.07798 6.28327L6.66797 15.3334"
            stroke="#FFD018"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Feature name 01",
      description:
        "Sed varius justo ac sem luctus lobortis. Nunc porta leo nec pretium laoreet.  Quis laoreet ante sed eros auctor gravida.",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[26px] sm:w-[32px] h-auto"
        >
          <path
            d="M2.66699 7.99967C2.66699 6.74259 2.66699 6.11406 3.05751 5.72353C3.44805 5.33301 4.07658 5.33301 5.33366 5.33301C6.59074 5.33301 7.21927 5.33301 7.60981 5.72353C8.00033 6.11406 8.00033 6.74259 8.00033 7.99967V10.6663C8.00033 11.9234 8.00033 12.552 7.60981 12.9425C7.21927 13.333 6.59074 13.333 5.33366 13.333C4.07658 13.333 3.44805 13.333 3.05751 12.9425C2.66699 12.552 2.66699 11.9234 2.66699 10.6663V7.99967Z"
            stroke="#FFD018"
            strokeWidth="2"
          />
          <path
            d="M8.66699 21.3337C8.66699 20.0766 8.66699 19.4481 9.05751 19.0575C9.44805 18.667 10.0766 18.667 11.3337 18.667C12.5907 18.667 13.2193 18.667 13.6098 19.0575C14.0003 19.4481 14.0003 20.0766 14.0003 21.3337V24.0003C14.0003 25.2574 14.0003 25.8859 13.6098 26.2765C13.2193 26.667 12.5907 26.667 11.3337 26.667C10.0766 26.667 9.44805 26.667 9.05751 26.2765C8.66699 25.8859 8.66699 25.2574 8.66699 24.0003V21.3337Z"
            stroke="#FFD018"
            strokeWidth="2"
          />
          <path
            d="M18 7.99967C18 6.74259 18 6.11406 18.3905 5.72353C18.7811 5.33301 19.4096 5.33301 20.6667 5.33301C21.9237 5.33301 22.5523 5.33301 22.9428 5.72353C23.3333 6.11406 23.3333 6.74259 23.3333 7.99967V10.6663C23.3333 11.9234 23.3333 12.552 22.9428 12.9425C22.5523 13.333 21.9237 13.333 20.6667 13.333C19.4096 13.333 18.7811 13.333 18.3905 12.9425C18 12.552 18 11.9234 18 10.6663V7.99967Z"
            stroke="#FFD018"
            strokeWidth="2"
          />
          <path
            d="M18 21.3337C18 20.0766 18 19.4481 18.3905 19.0575C18.7811 18.667 19.4096 18.667 20.6667 18.667C21.9237 18.667 22.5523 18.667 22.9428 19.0575C23.3333 19.4481 23.3333 20.0766 23.3333 21.3337V24.0003C23.3333 25.2574 23.3333 25.8859 22.9428 26.2765C22.5523 26.667 21.9237 26.667 20.6667 26.667C19.4096 26.667 18.7811 26.667 18.3905 26.2765C18 25.8859 18 25.2574 18 24.0003V21.3337Z"
            stroke="#FFD018"
            strokeWidth="2"
          />
          <path
            d="M12 6.66634L14 5.33301V13.333"
            stroke="#FFD018"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66699 20.0003L4.66699 18.667V26.667"
            stroke="#FFD018"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.333 6.66634L29.333 5.33301V13.333"
            stroke="#FFD018"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.333 20.0003L29.333 18.667V26.667"
            stroke="#FFD018"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Feature name 02",
      description:
        "Sed varius justo ac sem luctus lobortis. Nunc porta leo nec pretium laoreet.  Quis laoreet ante sed eros auctor gravida.",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[26px] sm:w-[32px] h-auto"
        >
          <path
            d="M14.6656 10.666C20.5567 10.666 25.3323 8.87515 25.3323 6.66602C25.3323 4.45687 20.5567 2.66602 14.6656 2.66602C8.77465 2.66602 3.99902 4.45687 3.99902 6.66602C3.99902 8.87515 8.77465 10.666 14.6656 10.666Z"
            stroke="#FFD018"
            strokeWidth="2"
          />
          <path
            d="M7.99902 14.4551C8.80113 14.6961 9.69814 14.8948 10.6657 15.0416"
            stroke="#FFD018"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M14.6656 20C8.77464 20 3.99902 18.2092 3.99902 16"
            stroke="#FFD018"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M7.99902 23.7881C8.80113 24.0292 9.69814 24.2278 10.6657 24.3746"
            stroke="#FFD018"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M14.6656 29.3327C8.77464 29.3327 3.99902 27.5419 3.99902 25.3327V6.66602M25.3323 6.66602V13.9994"
            stroke="#FFD018"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.9863 21.8377C20.9863 21.7577 20.9974 20.7377 20.9991 20.1585C21.0008 19.6291 20.9543 19.1189 21.2071 18.6519C22.1543 16.7679 24.8743 16.9598 25.5463 18.879C25.6628 19.195 25.6698 19.6958 25.6663 20.1585C25.662 20.7495 25.6743 21.8377 25.6743 21.8377M20.9863 21.8377C19.5466 21.8377 18.9546 22.8773 18.7946 23.517C18.6346 24.1567 18.6346 26.4757 18.7306 27.4353C19.0504 28.6347 19.8503 29.1306 20.6342 29.2905C21.354 29.3545 24.3935 29.3305 25.2734 29.3305C26.5531 29.3545 27.513 28.8747 27.9128 27.4353C27.9928 26.9555 28.0728 24.3166 27.8728 23.517C27.449 22.2375 26.4742 21.8377 25.6743 21.8377M20.9863 21.8377H25.6743"
            stroke="#FFD018"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Feature name 03",
      description:
        "Sed varius justo ac sem luctus lobortis. Nunc porta leo nec pretium laoreet.  Quis laoreet ante sed eros auctor gravida.",
    },
  ];

  return (
    <section className="relative pt-[70px] bg-[#121118] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#785F00] to-transparent"></div>

      <Image
        src={pricingPageHeroSectionGrainImg}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover opacity-25 sm:opacity-50"
      />

      <div className="relative z-10 mx-auto container max-w-[1320px] pt-12 lg:pt-20 px-5 grid xl:grid-cols-[auto_550px] items-center gap-x-24">
        <div className="flex flex-col items-center xl:items-start">
          <p className="mb-2 sm:mb-6 py-2 px-3.5 bg-white/10 rounded-xl text-[11px] sm:text-sm tracking-[-0.11px] sm:tracking-[-0.14px] text-white">
            Our online referral program is now available.{" "}
            <span className="font-medium">Earn Rewards</span>
          </p>

          <h1 className="mb-8 sm:mb-6 text-4xl sm:text-[64px] sm:leading-[72px] tracking-[-1.08px] sm:tracking-[-1.95px] font-semibold text-center xl:text-left text-white">
            15,000,000+ IPs from Germany
          </h1>

          <p className="max-w-[580px] text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-center xl:text-left text-white">
            Gather data efficiently with the industry-leading proxy network and
            enjoy limitless web scraping solutions on the most intense tasks.
          </p>

          <div className="my-7 flex flex-wrap justify-center items-center gap-y-4 gap-x-6 sm:gap-x-8">
            <p className="flex items-center gap-2 sm:gap-3 text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px] text-white">
              <svg
                width="87"
                height="18"
                viewBox="0 0 87 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[70px] sm:w-[87px] h-auto"
              >
                <path
                  d="M9.24758 13.3479L13.0486 12.3846L14.6367 17.2791L9.24758 13.3479ZM17.9952 7.02153H11.3043L9.24758 0.721191L7.19086 7.02153H0.5L5.91517 10.9267L3.85844 17.227L9.27361 13.3219L12.606 10.9267L17.9952 7.02153Z"
                  className="fill-white"
                />
                <path
                  d="M28.1338 3.5721V14.2332H26.3106V3.5721H28.1338ZM31.4801 3.5721V5.03654H22.9937V3.5721H31.4801Z"
                  className="fill-white"
                />
                <path
                  d="M33.955 7.81897V14.2332H32.1903V6.3106H33.8744L33.955 7.81897ZM36.3786 6.25935L36.364 7.89952C36.2566 7.87999 36.1394 7.86535 36.0125 7.85558C35.8905 7.84582 35.7684 7.84094 35.6464 7.84094C35.3437 7.84094 35.0777 7.88487 34.8483 7.97274C34.6188 8.05572 34.426 8.17776 34.2698 8.33885C34.1185 8.49506 34.0013 8.68543 33.9184 8.90998C33.8354 9.13453 33.7866 9.38592 33.7719 9.66416L33.3692 9.69345C33.3692 9.19554 33.418 8.73425 33.5156 8.30956C33.6133 7.88487 33.7597 7.51144 33.955 7.18926C34.1551 6.86709 34.4041 6.61569 34.7018 6.43508C35.0045 6.25447 35.3535 6.16416 35.7489 6.16416C35.8563 6.16416 35.971 6.17392 36.0931 6.19345C36.22 6.21297 36.3152 6.23494 36.3786 6.25935Z"
                  className="fill-white"
                />
                <path
                  d="M42.251 12.3661V6.3106H44.023V14.2332H42.3535L42.251 12.3661ZM42.5 10.7186L43.0931 10.7039C43.0931 11.236 43.0345 11.7266 42.9173 12.1757C42.8002 12.6199 42.6196 13.008 42.3755 13.3399C42.1314 13.667 41.819 13.9232 41.4382 14.1087C41.0575 14.2893 40.6011 14.3797 40.069 14.3797C39.6834 14.3797 39.3295 14.3235 39.0073 14.2112C38.6851 14.099 38.4069 13.9257 38.1726 13.6914C37.9431 13.4571 37.765 13.152 37.638 12.7761C37.5111 12.4002 37.4477 11.9511 37.4477 11.4288V6.3106H39.2123V11.4435C39.2123 11.7315 39.2465 11.9731 39.3148 12.1684C39.3832 12.3587 39.4759 12.5125 39.5931 12.6297C39.7102 12.7468 39.8469 12.8298 40.0031 12.8786C40.1593 12.9274 40.3253 12.9518 40.501 12.9518C41.0038 12.9518 41.3992 12.8542 41.6872 12.6589C41.9801 12.4588 42.1876 12.1903 42.3096 11.8535C42.4365 11.5167 42.5 11.1384 42.5 10.7186Z"
                  className="fill-white"
                />
                <path
                  d="M50.2761 12.0878C50.2761 11.9121 50.2322 11.7534 50.1443 11.6119C50.0565 11.4654 49.8881 11.3336 49.6391 11.2165C49.395 11.0993 49.0338 10.9919 48.5554 10.8943C48.1356 10.8015 47.75 10.6917 47.3985 10.5648C47.0519 10.433 46.7542 10.2743 46.5052 10.0889C46.2563 9.90336 46.0634 9.68369 45.9268 9.42985C45.7901 9.17602 45.7217 8.88313 45.7217 8.55119C45.7217 8.22902 45.7925 7.92392 45.9341 7.63592C46.0756 7.34791 46.2782 7.09408 46.5418 6.87441C46.8054 6.65475 47.1251 6.48145 47.501 6.35454C47.8818 6.22762 48.3065 6.16416 48.7751 6.16416C49.439 6.16416 50.0077 6.27643 50.4812 6.50098C50.9595 6.72064 51.3256 7.02085 51.5795 7.40161C51.8333 7.77748 51.9602 8.20217 51.9602 8.67567H50.1956C50.1956 8.46577 50.1419 8.27051 50.0345 8.08989C49.932 7.9044 49.7758 7.75551 49.5659 7.64324C49.356 7.52609 49.0924 7.46751 48.7751 7.46751C48.4724 7.46751 48.221 7.51632 48.0209 7.61395C47.8256 7.7067 47.6792 7.82874 47.5816 7.98006C47.4888 8.13139 47.4424 8.29736 47.4424 8.47797C47.4424 8.60977 47.4669 8.72936 47.5157 8.83676C47.5694 8.93927 47.6572 9.03446 47.7793 9.12232C47.9013 9.20531 48.0673 9.28341 48.2772 9.35663C48.492 9.42985 48.7604 9.50064 49.0826 9.56898C49.6879 9.69589 50.2078 9.85942 50.6422 10.0596C51.0816 10.2548 51.4184 10.5087 51.6527 10.8211C51.887 11.1286 52.0042 11.5191 52.0042 11.9926C52.0042 12.3441 51.9285 12.6663 51.7772 12.9591C51.6307 13.2472 51.416 13.4986 51.1328 13.7133C50.8497 13.9232 50.5104 14.0868 50.115 14.2039C49.7245 14.3211 49.2852 14.3797 48.797 14.3797C48.0795 14.3797 47.4717 14.2527 46.9738 13.9989C46.4759 13.7402 46.0976 13.4107 45.8389 13.0104C45.585 12.6052 45.4581 12.1854 45.4581 11.751H47.1642C47.1837 12.078 47.274 12.3392 47.4351 12.5345C47.6011 12.7248 47.8061 12.864 48.0502 12.9518C48.2991 13.0348 48.5554 13.0763 48.819 13.0763C49.1363 13.0763 49.4023 13.0348 49.6171 12.9518C49.8319 12.864 49.9954 12.7468 50.1077 12.6004C50.22 12.449 50.2761 12.2782 50.2761 12.0878Z"
                  className="fill-white"
                />
                <path
                  d="M57.181 6.3106V7.59931H52.7144V6.3106H57.181ZM54.0031 4.37022H55.7678V12.0439C55.7678 12.2879 55.8019 12.4759 55.8703 12.6077C55.9435 12.7346 56.0436 12.82 56.1705 12.864C56.2974 12.9079 56.4463 12.9299 56.6171 12.9299C56.7392 12.9299 56.8563 12.9225 56.9686 12.9079C57.0809 12.8933 57.1712 12.8786 57.2395 12.864L57.2469 14.2112C57.1004 14.2552 56.9296 14.2942 56.7343 14.3284C56.5439 14.3626 56.3243 14.3797 56.0753 14.3797C55.6701 14.3797 55.3114 14.3089 54.9989 14.1673C54.6865 14.0209 54.4425 13.7841 54.2667 13.4571C54.091 13.13 54.0031 12.6956 54.0031 12.1537V4.37022Z"
                  className="fill-white"
                />
                <path
                  d="M60.3149 7.83362V17.2792H58.5502V6.3106H60.1757L60.3149 7.83362ZM65.477 10.1987V10.3525C65.477 10.9285 65.4087 11.463 65.272 11.956C65.1402 12.4442 64.9425 12.8713 64.6789 13.2374C64.4202 13.5986 64.1004 13.8793 63.7197 14.0794C63.3389 14.2796 62.8996 14.3797 62.4017 14.3797C61.9086 14.3797 61.4766 14.2893 61.1057 14.1087C60.7395 13.9232 60.4296 13.6621 60.1757 13.3253C59.9219 12.9884 59.7169 12.593 59.5607 12.1391C59.4093 11.6802 59.302 11.1774 59.2385 10.6307V10.0376C59.302 9.4567 59.4093 8.92951 59.5607 8.456C59.7169 7.9825 59.9219 7.5749 60.1757 7.2332C60.4296 6.8915 60.7395 6.6279 61.1057 6.4424C61.4718 6.25691 61.8989 6.16416 62.387 6.16416C62.8849 6.16416 63.3267 6.26179 63.7123 6.45705C64.098 6.64742 64.4226 6.92078 64.6862 7.27713C64.9498 7.6286 65.1475 8.05328 65.2793 8.55119C65.4111 9.04422 65.477 9.59338 65.477 10.1987ZM63.7123 10.3525V10.1987C63.7123 9.83258 63.6782 9.49331 63.6098 9.1809C63.5415 8.86361 63.4341 8.58536 63.2877 8.34617C63.1412 8.10698 62.9533 7.92148 62.7239 7.78968C62.4993 7.653 62.2284 7.58466 61.9111 7.58466C61.5987 7.58466 61.3302 7.63836 61.1057 7.74575C60.8811 7.84826 60.6932 7.99226 60.5418 8.17776C60.3905 8.36326 60.2734 8.58048 60.1904 8.82943C60.1074 9.07351 60.0488 9.33955 60.0146 9.62755V11.0481C60.0732 11.3995 60.1733 11.7217 60.3149 12.0146C60.4564 12.3075 60.6566 12.5418 60.9153 12.7175C61.1789 12.8884 61.5157 12.9738 61.9257 12.9738C62.243 12.9738 62.514 12.9055 62.7385 12.7688C62.963 12.6321 63.1461 12.4442 63.2877 12.205C63.4341 11.9609 63.5415 11.6802 63.6098 11.3629C63.6782 11.0456 63.7123 10.7088 63.7123 10.3525Z"
                  className="fill-white"
                />
                <path
                  d="M68.8672 6.3106V14.2332H67.0952V6.3106H68.8672ZM66.978 4.2311C66.978 3.96262 67.0659 3.74051 67.2416 3.56478C67.4223 3.38417 67.6712 3.29386 67.9885 3.29386C68.3009 3.29386 68.5474 3.38417 68.7281 3.56478C68.9087 3.74051 68.999 3.96262 68.999 4.2311C68.999 4.4947 68.9087 4.71436 68.7281 4.8901C68.5474 5.06583 68.3009 5.1537 67.9885 5.1537C67.6712 5.1537 67.4223 5.06583 67.2416 4.8901C67.0659 4.71436 66.978 4.4947 66.978 4.2311Z"
                  className="fill-white"
                />
                <path
                  d="M72.6894 2.98633V14.2332H70.9174V2.98633H72.6894Z"
                  className="fill-white"
                />
                <path
                  d="M74.2856 10.3598V10.1914C74.2856 9.62023 74.3686 9.09059 74.5345 8.60245C74.7005 8.10942 74.9397 7.68229 75.2521 7.32106C75.5694 6.95495 75.9551 6.67183 76.409 6.47169C76.8679 6.26667 77.3853 6.16416 77.9613 6.16416C78.5422 6.16416 79.0597 6.26667 79.5136 6.47169C79.9725 6.67183 80.3606 6.95495 80.6779 7.32106C80.9952 7.68229 81.2368 8.10942 81.4028 8.60245C81.5687 9.09059 81.6517 9.62023 81.6517 10.1914V10.3598C81.6517 10.9309 81.5687 11.4605 81.4028 11.9487C81.2368 12.4368 80.9952 12.864 80.6779 13.2301C80.3606 13.5913 79.9749 13.8744 79.521 14.0794C79.067 14.2796 78.552 14.3797 77.976 14.3797C77.3951 14.3797 76.8752 14.2796 76.4164 14.0794C75.9624 13.8744 75.5767 13.5913 75.2594 13.2301C74.9422 12.864 74.7005 12.4368 74.5345 11.9487C74.3686 11.4605 74.2856 10.9309 74.2856 10.3598ZM76.0502 10.1914V10.3598C76.0502 10.7161 76.0869 11.0529 76.1601 11.3702C76.2333 11.6875 76.348 11.9658 76.5042 12.205C76.6604 12.4442 76.8606 12.6321 77.1046 12.7688C77.3487 12.9055 77.6392 12.9738 77.976 12.9738C78.303 12.9738 78.5862 12.9055 78.8254 12.7688C79.0694 12.6321 79.2696 12.4442 79.4258 12.205C79.582 11.9658 79.6967 11.6875 79.7699 11.3702C79.848 11.0529 79.8871 10.7161 79.8871 10.3598V10.1914C79.8871 9.8399 79.848 9.50796 79.7699 9.19554C79.6967 8.87825 79.5795 8.59757 79.4184 8.35349C79.2622 8.10942 79.0621 7.91904 78.818 7.78236C78.5788 7.6408 78.2933 7.57002 77.9613 7.57002C77.6294 7.57002 77.3414 7.6408 77.0973 7.78236C76.8581 7.91904 76.6604 8.10942 76.5042 8.35349C76.348 8.59757 76.2333 8.87825 76.1601 9.19554C76.0869 9.50796 76.0502 9.8399 76.0502 10.1914Z"
                  className="fill-white"
                />
                <path
                  d="M86.7626 6.3106V7.59931H82.2961V6.3106H86.7626ZM83.5848 4.37022H85.3494V12.0439C85.3494 12.2879 85.3836 12.4759 85.4519 12.6077C85.5252 12.7346 85.6252 12.82 85.7521 12.864C85.8791 12.9079 86.0279 12.9299 86.1988 12.9299C86.3208 12.9299 86.438 12.9225 86.5503 12.9079C86.6625 12.8933 86.7528 12.8786 86.8212 12.864L86.8285 14.2112C86.6821 14.2552 86.5112 14.2942 86.316 14.3284C86.1256 14.3626 85.9059 14.3797 85.657 14.3797C85.2518 14.3797 84.893 14.3089 84.5806 14.1673C84.2682 14.0209 84.0241 13.7841 83.8484 13.4571C83.6726 13.13 83.5848 12.6956 83.5848 12.1537V4.37022Z"
                  className="fill-white"
                />
              </svg>
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] sm:w-[19px] h-auto"
              >
                <path
                  d="M9.73725 2.39038C9.75891 2.37562 9.79064 2.36454 9.82841 2.36454C9.86618 2.36454 9.89791 2.37562 9.91958 2.39038C9.93727 2.40244 9.95866 2.4234 9.97388 2.47023L11.0799 5.8743C11.2677 6.45234 11.8064 6.84371 12.4142 6.84371H15.9935C16.0427 6.84371 16.0692 6.85758 16.0862 6.87067C16.1069 6.88671 16.1272 6.91347 16.1389 6.94939C16.1506 6.98532 16.1499 7.01891 16.1425 7.04408C16.1365 7.06463 16.1232 7.09145 16.0834 7.12039L13.1877 9.22422C12.696 9.58147 12.4902 10.2147 12.678 10.7928L13.7841 14.1968C13.7993 14.2437 13.7943 14.2732 13.7871 14.2933C13.7782 14.318 13.7591 14.3456 13.7285 14.3678C13.698 14.39 13.6658 14.3997 13.6396 14.4005C13.6182 14.4012 13.5886 14.3968 13.5487 14.3678L10.653 12.264C10.1613 11.9067 9.49549 11.9068 9.00378 12.264L6.10811 14.3678C6.06827 14.3968 6.03865 14.4012 6.01725 14.4005C5.99105 14.3997 5.95887 14.39 5.92831 14.3678C5.89775 14.3456 5.87859 14.318 5.86974 14.2933C5.86252 14.2732 5.85753 14.2437 5.87275 14.1968L6.97879 10.7928C7.16661 10.2147 6.96086 9.58147 6.46914 9.22422L3.57347 7.12039C3.53363 7.09145 3.52031 7.06463 3.51431 7.04408C3.50696 7.01892 3.50624 6.98532 3.51791 6.94939C3.52958 6.91347 3.54992 6.88671 3.57066 6.87067C3.58759 6.85758 3.61413 6.84371 3.66337 6.84371H7.24262C7.85041 6.84371 8.38908 6.45234 8.5769 5.87429L9.68295 2.47023L9.08854 2.27709L9.68295 2.47023C9.69817 2.42339 9.71956 2.40244 9.73725 2.39038Z"
                  strokeWidth="1.25"
                  className="stroke-white"
                />
              </svg>
              4.9 rating
            </p>

            <p className="flex items-center gap-2 sm:gap-3 text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px] text-white">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] sm:w-[19px] h-auto"
              >
                <path
                  d="M15.8281 8.8125C15.8281 12.3127 3.82812 12.3127 3.82812 8.8125M9.82812 2.25C6.51462 2.25 3.82812 3.2175 3.82812 4.41C3.82812 7.53 15.8281 7.53 15.8281 4.41C15.8281 3.2175 13.1416 2.25 9.82812 2.25Z"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-white"
                />
                <path
                  d="M3.82812 4.5V13.6238C3.82812 16.4588 15.8281 16.4588 15.8281 13.6238V4.5"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-white"
                />
              </svg>
              25M+ Proxy Pool
            </p>

            <p className="flex items-center gap-2 sm:gap-3 text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px] text-white">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] sm:w-[19px] h-auto"
              >
                <path
                  d="M12.8138 5.66406L13.3441 5.13381M10.5931 15.1456L16.0666 9.67206C16.3441 9.39456 16.5016 9.01956 16.5068 8.62806L16.5781 3.01131C16.5794 2.91098 16.5606 2.8114 16.5228 2.71845C16.485 2.6255 16.429 2.54106 16.358 2.47011C16.2871 2.39916 16.2026 2.34313 16.1097 2.30534C16.0167 2.26755 15.9171 2.24875 15.8168 2.25006L10.2001 2.32131C9.80797 2.32633 9.43335 2.48431 9.15606 2.76156L3.68256 8.23506C3.17706 8.73981 2.78856 9.70431 3.36456 10.2803L8.54706 15.4628C9.12381 16.0396 10.0883 15.6503 10.5931 15.1456Z"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-white"
                />
              </svg>
              7 Day Free Trial
            </p>
          </div>

          <div className="w-full sm:w-fit grid sm:flex gap-3">
            <PrimaryBtn customClasses="!py-2.5 !px-12 sm:!text-base sm:!tracking-[-0.16px]">
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

            <SecondaryBtn customClasses="!py-2.5 !px-8 sm:!text-base sm:!tracking-[-0.16px] text-primary">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.75C22.56 11.97 22.49 11.22 22.36 10.5H12V14.76H17.92C17.66 16.13 16.88 17.29 15.71 18.07V20.84H19.28C21.36 18.92 22.56 16.1 22.56 12.75Z"
                  fill="#4285F4"
                />
                <path
                  d="M11.9997 23.4996C14.9697 23.4996 17.4597 22.5196 19.2797 20.8396L15.7097 18.0696C14.7297 18.7296 13.4797 19.1296 11.9997 19.1296C9.13969 19.1296 6.70969 17.1996 5.83969 14.5996H2.17969V17.4396C3.98969 21.0296 7.69969 23.4996 11.9997 23.4996Z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.5903C5.62 13.9303 5.49 13.2303 5.49 12.5003C5.49 11.7703 5.62 11.0703 5.84 10.4103V7.57031H2.18C1.43 9.05031 1 10.7203 1 12.5003C1 14.2803 1.43 15.9503 2.18 17.4303L5.03 15.2103L5.84 14.5903Z"
                  fill="#FBBC05"
                />
                <path
                  d="M11.9997 5.88C13.6197 5.88 15.0597 6.44 16.2097 7.52L19.3597 4.37C17.4497 2.59 14.9697 1.5 11.9997 1.5C7.69969 1.5 3.98969 3.97 2.17969 7.57L5.83969 10.41C6.70969 7.81 9.13969 5.88 11.9997 5.88Z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </SecondaryBtn>
          </div>
        </div>

        <div className="hidden xl:flex justify-center">
          <Image src={locationImg} alt="" className="w-full rounded-xl" />
        </div>
      </div>

      <div className="relative z-10 mx-auto container max-w-[1320px] py-14 lg:py-24 px-5 grid lg:grid-cols-3 gap-y-5 gap-x-10">
        {infoBoxes.map((infoBox, index) => {
          return <InfoBox key={index} {...infoBox} />;
        })}
      </div>
    </section>
  );
}
