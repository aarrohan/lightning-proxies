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
      <div className="w-[34px] sm:w-[44px] aspect-square border border-[#A400DD]/25 bg-[#A400DD]/10 rounded-full flex justify-center items-center">
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
          width="27"
          height="26"
          viewBox="0 0 27 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] sm:w-[26px] h-auto"
        >
          <path
            d="M11.0812 20.4194L13.5 15.1667L15.9189 20.4194C16.6204 21.9429 16.9712 22.7046 16.5996 23.2545C16.5894 23.2695 16.5789 23.2844 16.5681 23.299C16.1714 23.8334 15.2809 23.8334 13.5 23.8334C11.7191 23.8334 10.8286 23.8334 10.4319 23.299C10.4211 23.2844 10.4106 23.2695 10.4004 23.2545C10.0288 22.7046 10.3796 21.9429 11.0812 20.4194Z"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.4987 15.1663C14.6953 15.1663 15.6654 14.1963 15.6654 12.9997C15.6654 11.8031 14.6953 10.833 13.4987 10.833C12.3021 10.833 11.332 11.8031 11.332 12.9997C11.332 14.1963 12.3021 15.1663 13.4987 15.1663Z"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M4.83464 19.5019C3.47416 17.6911 2.66797 15.44 2.66797 13.0008C2.66797 7.01773 7.51821 2.16748 13.5013 2.16748C19.4843 2.16748 24.3346 7.01773 24.3346 13.0008C24.3346 15.44 23.5284 17.6911 22.168 19.5019"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8.65511 17.3338C7.62585 16.1839 7 14.6652 7 13.0005C7 9.41064 9.91015 6.50049 13.5 6.50049C17.0898 6.50049 20 9.41064 20 13.0005C20 14.6652 19.3742 16.1839 18.3449 17.3338"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "2x /29 Subnets",
      subTitle: "IPs included",
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
            d="M9.20898 11.9165L10.2923 12.9998M10.2923 12.9998L11.3757 14.0832M10.2923 12.9998L11.3757 11.9165M10.2923 12.9998L9.20898 14.0832"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M3.79102 11.9165L4.87435 12.9998M4.87435 12.9998L5.95768 14.0832M4.87435 12.9998L5.95768 11.9165M4.87435 12.9998L3.79102 14.0832"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M14.625 11.9167L15.7083 13.0001M15.7083 13.0001L16.7917 14.0834M15.7083 13.0001L16.7917 11.9167M15.7083 13.0001L14.625 14.0834"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M20.041 11.9165L21.1243 12.9998M21.1243 12.9998L22.2077 14.0832M21.1243 12.9998L22.2077 11.9165M21.1243 12.9998L20.041 14.0832"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M21.27 17.3334C19.4469 20.3703 16.3658 22.3403 14.5232 23.3128C13.8655 23.6599 13.5367 23.8334 13 23.8334C12.4633 23.8334 12.1345 23.6599 11.4768 23.3128C9.63415 22.3403 6.55311 20.3703 4.73007 17.3334M22.7499 8.66675C22.7485 7.09055 22.7243 6.27139 22.3122 5.72581C21.8745 5.14623 20.8846 4.86485 18.9049 4.30211C17.5524 3.91763 16.3601 3.45443 15.4075 3.03156C14.1087 2.45502 13.4593 2.16675 13 2.16675C12.5407 2.16675 11.8913 2.45502 10.5925 3.03156C9.63993 3.45443 8.44767 3.91762 7.09511 4.30211C5.11543 4.86485 4.12558 5.14623 3.68779 5.72581C3.27569 6.27139 3.25151 7.09055 3.25009 8.66675"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "User-pass / IP Whitelist",
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
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M15.7077 9.74984C15.7077 11.2456 14.4951 12.4582 12.9993 12.4582C11.5036 12.4582 10.291 11.2456 10.291 9.74984C10.291 8.25407 11.5036 7.0415 12.9993 7.0415C14.4951 7.0415 15.7077 8.25407 15.7077 9.74984Z"
            stroke="#A400DD"
            strokeWidth="1.5"
          />
          <path
            d="M14.3615 18.9512C13.9961 19.3031 13.5078 19.4998 12.9996 19.4998C12.4913 19.4998 12.0029 19.3031 11.6375 18.9512C8.29151 15.709 3.80747 12.0871 5.9942 6.82888C7.17654 3.98577 10.0147 2.1665 12.9996 2.1665C15.9844 2.1665 18.8225 3.98578 20.0048 6.82888C22.1888 12.0805 17.7157 15.7202 14.3615 18.9512Z"
            stroke="#A400DD"
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
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Sticky / Rotating",
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
            d="M22.75 5.95825H11.9167"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M5.85065 18.3005C7.00624 19.0744 7.58398 19.4614 7.58398 20.0418C7.58398 20.6223 7.00624 21.0093 5.85065 21.7832C4.69506 22.5571 4.11732 22.944 3.68398 22.6539C3.25065 22.3636 3.25065 21.5897 3.25065 20.0418C3.25065 18.494 3.25065 17.72 3.68398 17.4298C4.11732 17.1397 4.69506 17.5266 5.85065 18.3005Z"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M5.85065 4.21701C7.00624 4.99094 7.58398 5.37789 7.58398 5.95833C7.58398 6.53877 7.00624 6.92573 5.85065 7.69965C4.69506 8.47357 4.11732 8.86053 3.68398 8.5703C3.25065 8.28009 3.25065 7.50617 3.25065 5.95833C3.25065 4.4105 3.25065 3.63657 3.68398 3.34636C4.11732 3.05614 4.69506 3.44309 5.85065 4.21701Z"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M22.75 13H11.9167"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M22.75 20.0417H11.9167"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Proxy list",
      subTitle: "Unlimited quantity",
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
            d="M2.70898 5.95841C2.70898 4.171 2.70898 3.27731 3.26426 2.72202C3.81954 2.16675 4.71324 2.16675 6.50065 2.16675C8.28806 2.16675 9.18176 2.16675 9.73704 2.72202C10.2923 3.27731 10.2923 4.171 10.2923 5.95841C10.2923 7.74583 10.2923 8.63952 9.73704 9.19481C9.18176 9.75008 8.28806 9.75008 6.50065 9.75008C4.71324 9.75008 3.81954 9.75008 3.26426 9.19481C2.70898 8.63952 2.70898 7.74583 2.70898 5.95841Z"
            stroke="#A400DD"
            strokeWidth="1.5"
          />
          <path
            d="M3.96094 16.9617C5.15755 15.7651 5.75587 15.1667 6.49935 15.1667C7.24283 15.1667 7.84114 15.7651 9.03776 16.9617C10.2344 18.1583 10.8327 18.7566 10.8327 19.5001C10.8327 20.2436 10.2344 20.8419 9.03776 22.0384C7.84114 23.2351 7.24283 23.8334 6.49935 23.8334C5.75587 23.8334 5.15755 23.2351 3.96094 22.0384C2.76432 20.8419 2.16602 20.2436 2.16602 19.5001C2.16602 18.7566 2.76432 18.1583 3.96094 16.9617Z"
            stroke="#A400DD"
            strokeWidth="1.5"
          />
          <path
            d="M6.5 9.75024V15.1669M10.8333 19.5002H16.25"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.25 19.5002C16.25 17.7128 16.25 16.819 16.8053 16.2638C17.3605 15.7085 18.2543 15.7085 20.0417 15.7085C21.8291 15.7085 22.7228 15.7085 23.278 16.2638C23.8333 16.819 23.8333 17.7128 23.8333 19.5002C23.8333 21.2876 23.8333 22.1813 23.278 22.7365C22.7228 23.2918 21.8291 23.2918 20.0417 23.2918C18.2543 23.2918 17.3605 23.2918 16.8053 22.7365C16.25 22.1813 16.25 21.2876 16.25 19.5002Z"
            stroke="#A400DD"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Up to 10.000",
      subTitle: "Threads",
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
            d="M23.8327 12.5307C23.8327 18.2541 18.9817 22.8946 12.9993 22.8946C12.2959 22.8956 11.5945 22.8305 10.9035 22.7008C10.4062 22.6073 10.1575 22.5606 9.98392 22.5871C9.81031 22.6137 9.56429 22.7446 9.07225 23.0062C7.68033 23.7464 6.05729 24.0078 4.49638 23.7175C5.08965 22.9878 5.49483 22.1122 5.67361 21.1736C5.78194 20.5994 5.51352 20.0417 5.11148 19.6334C3.28546 17.7792 2.16602 15.2806 2.16602 12.5307C2.16602 6.80728 7.01694 2.16675 12.9993 2.16675C13.7413 2.16675 14.466 2.23814 15.166 2.37412"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.9173 5.95841C24.9173 8.0525 23.2197 9.75008 21.1257 9.75008C19.0316 9.75008 17.334 8.0525 17.334 5.95841C17.334 3.86433 19.0316 2.16675 21.1257 2.16675C23.2197 2.16675 24.9173 3.86433 24.9173 5.95841Z"
            stroke="#A400DD"
            strokeWidth="1.5"
          />
          <path
            d="M12.9945 13.0002H13.0042M17.3229 13.0002H17.3327M8.66602 13.0002H8.67573"
            stroke="#A400DD"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "24/7 Live Chat Support",
      subTitle: "Help",
    },
  ];

  return (
    <div className="h-full p-5 border border-white/10 bg-white/5 rounded-xl flex flex-col justify-between">
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
