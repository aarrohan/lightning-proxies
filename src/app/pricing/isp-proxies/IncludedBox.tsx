interface IInfoBoxProps {
  index?: number;
  totalBoxes?: number;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

function InfoBox({ index, totalBoxes, icon, title, subTitle }: IInfoBoxProps) {
  return (
    <div
      className={`${
        index === 0
          ? "pb-4"
          : index === totalBoxes! - 1
          ? "pt-4 border-t border-dashed border-white/15"
          : "py-4 border-t border-dashed border-white/15"
      } flex items-center gap-3.5`}
    >
      <div className="w-[34px] sm:w-[44px] aspect-square border border-[#FF792E]/25 bg-[#FF792E]/10 rounded-full flex justify-center items-center">
        {icon}
      </div>

      <div>
        <p className="mb-[2px] text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white/75">
          {subTitle}
        </p>

        <p className="font-medium text-sm sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-white">
          {title}
        </p>
      </div>
    </div>
  );
}

export default function IncludedBox() {
  const infos: IInfoBoxProps[] = [
    {
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] sm:w-[26px] h-auto"
        >
          <path
            d="M9.20898 11.9165L10.2923 12.9998M10.2923 12.9998L11.3757 14.0832M10.2923 12.9998L11.3757 11.9165M10.2923 12.9998L9.20898 14.0832"
            stroke="#FF792E"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M3.79102 11.9165L4.87435 12.9998M4.87435 12.9998L5.95768 14.0832M4.87435 12.9998L5.95768 11.9165M4.87435 12.9998L3.79102 14.0832"
            stroke="#FF792E"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14.625 11.9167L15.7083 13.0001M15.7083 13.0001L16.7917 14.0834M15.7083 13.0001L16.7917 11.9167M15.7083 13.0001L14.625 14.0834"
            stroke="#FF792E"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M20.041 11.9165L21.1243 12.9998M21.1243 12.9998L22.2077 14.0832M21.1243 12.9998L22.2077 11.9165M21.1243 12.9998L20.041 14.0832"
            stroke="#FF792E"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M21.27 17.3334C19.4469 20.3703 16.3658 22.3403 14.5232 23.3128C13.8655 23.6599 13.5367 23.8334 13 23.8334C12.4633 23.8334 12.1345 23.6599 11.4768 23.3128C9.63415 22.3403 6.55311 20.3703 4.73007 17.3334M22.7499 8.66675C22.7485 7.09055 22.7243 6.27139 22.3122 5.72581C21.8745 5.14623 20.8846 4.86485 18.9049 4.30211C17.5524 3.91763 16.3601 3.45443 15.4075 3.03156C14.1087 2.45502 13.4593 2.16675 13 2.16675C12.5407 2.16675 11.8913 2.45502 10.5925 3.03156C9.63993 3.45443 8.44767 3.91762 7.09511 4.30211C5.11543 4.86485 4.12558 5.14623 3.68779 5.72581C3.27569 6.27139 3.25151 7.09055 3.25009 8.66675"
            stroke="#FF792E"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "User-pass",
      subTitle: "Authorization",
    },
    {
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] sm:w-[26px] h-auto"
        >
          <path
            d="M7.58398 19.5C5.60264 19.946 4.33398 20.6313 4.33398 21.3998C4.33398 22.7438 8.21418 23.8333 13.0007 23.8333C17.7871 23.8333 21.6673 22.7438 21.6673 21.3998C21.6673 20.6313 20.3986 19.946 18.4173 19.5"
            stroke="#FF792E"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M15.7077 9.74984C15.7077 11.2456 14.4951 12.4582 12.9993 12.4582C11.5036 12.4582 10.291 11.2456 10.291 9.74984C10.291 8.25407 11.5036 7.0415 12.9993 7.0415C14.4951 7.0415 15.7077 8.25407 15.7077 9.74984Z"
            stroke="#FF792E"
            strokeWidth="1.5"
          />
          <path
            d="M14.3615 18.9512C13.9961 19.3031 13.5078 19.4998 12.9996 19.4998C12.4913 19.4998 12.0029 19.3031 11.6375 18.9512C8.29151 15.709 3.80747 12.0871 5.9942 6.82888C7.17654 3.98577 10.0147 2.1665 12.9996 2.1665C15.9844 2.1665 18.8225 3.98578 20.0048 6.82888C22.1888 12.0805 17.7157 15.7202 14.3615 18.9512Z"
            stroke="#FF792E"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Country",
      subTitle: "Targeting",
    },
    {
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] sm:w-[26px] h-auto"
        >
          <path
            d="M16.4312 1.08301L17.079 2.29393C17.517 3.11259 17.7359 3.52193 17.5912 3.69724C17.4463 3.87254 16.9694 3.73096 16.0157 3.4478C15.0621 3.16469 14.0498 3.01237 13.0007 3.01237C7.31672 3.01237 2.70898 7.48384 2.70898 12.9997C2.70898 14.8187 3.21016 16.5243 4.08583 17.9933M9.57009 24.9164L8.92229 23.7054C8.48432 22.8868 8.26534 22.4774 8.41013 22.3021C8.55494 22.1268 9.03185 22.2684 9.98562 22.5516C10.9392 22.8347 11.9516 22.987 13.0007 22.987C18.6846 22.987 23.2923 18.5155 23.2923 12.9997C23.2923 11.1806 22.7912 9.47502 21.9155 8.00602"
            stroke="#FF792E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Static",
      subTitle: "Rotation interval",
    },
    {
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] sm:w-[26px] h-auto"
        >
          <path
            d="M12.9993 23.8333C18.9824 23.8333 23.8327 18.983 23.8327 13C23.8327 7.01687 18.9824 2.16663 12.9993 2.16663C7.01626 2.16663 2.16602 7.01687 2.16602 13C2.16602 18.983 7.01626 23.8333 12.9993 23.8333Z"
            stroke="#FF792E"
            strokeWidth="1.5"
          />
          <path
            d="M17.334 10.8336L18.6627 11.9789C19.2214 12.4604 19.5007 12.7012 19.5007 13.0003C19.5007 13.2994 19.2214 13.5402 18.6627 14.0217L17.334 15.167"
            stroke="#FF792E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.66667 10.8335L7.33791 11.9788C6.7793 12.4602 6.5 12.7011 6.5 13.0002C6.5 13.2993 6.7793 13.5401 7.33791 14.0215L8.66667 15.1668"
            stroke="#FF792E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.0827 9.75012L11.916 16.2501"
            stroke="#FF792E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Protocol",
      subTitle: "HTTP & SOCKS5",
    },
  ];

  return (
    <div className="p-5 border border-white/10 bg-white/5 rounded-xl flex flex-col justify-between">
      <p className="mb-6 w-fit py-1.5 px-2.5 border border-white/25 bg-white/10 rounded-lg text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-white">
        Included in all plans
      </p>

      <div>
        {infos.map((info, index) => (
          <InfoBox
            key={index}
            index={index}
            totalBoxes={infos.length}
            {...info}
          />
        ))}
      </div>
    </div>
  );
}
