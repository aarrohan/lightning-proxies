interface IInfoBoxProps {
  index?: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

function InfoBox({ index, icon, title, description }: IInfoBoxProps) {
  if (!index) index = 0;

  return (
    <div
      className={`${
        index <= 2 ? "p-6 sm:p-10 sm:pt-0" : "p-6 sm:p-10 sm:pb-0"
      } ${index !== 5 ? "border-b sm:border-b-0 border-primary/5" : ""} ${
        index === 1 || index === 4 ? "sm:border-x border-primary/5" : ""
      }`}
    >
      <div
        className="mb-3.5 w-[32px] sm:w-[42px] aspect-square border border-dark-white rounded-md sm:rounded-lg flex justify-center items-center"
        style={{
          background:
            "radial-gradient(100% 100% at 50% 0%, #D6EFFF 0%, #FFF 100%)",
        }}
      >
        {icon}
      </div>

      <h3 className="relative mb-1.5 text-xs sm:text-base font-medium tracking-[-0.12px] sm:tracking-[-0.16px]">
        {title}
        <span className="absolute top-0 -left-[24px] sm:-left-[41px] w-[2px] h-full bg-accent"></span>
      </h3>

      <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/50">
        {description}
      </p>
    </div>
  );
}

export default function FeaturesSection() {
  const infoBoxes: IInfoBoxProps[] = [
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] sm:w-[20px] h-auto"
        >
          <path
            d="M3 8.20433C3 6.13117 3 5.0946 3.35762 4.25273C3.65634 3.54951 4.1278 2.94591 4.7219 2.50609C5.43314 1.97955 6.38764 1.79413 8.29665 1.42327C10.2817 1.03763 11.2743 0.844805 12.0467 1.15208C12.6884 1.40734 13.229 1.88945 13.5789 2.51834C14 3.27539 14 4.35328 14 6.50907V15.4909C14 17.6467 14 18.7246 13.5789 19.4816C13.229 20.1105 12.6884 20.5926 12.0467 20.8479C11.2743 21.1552 10.2817 20.9623 8.29665 20.5767C6.38764 20.2058 5.43314 20.0204 4.7219 19.4939C4.1278 19.0541 3.65634 18.4505 3.35762 17.7472C3 16.9054 3 15.8688 3 13.7956V8.20433Z"
            stroke="#1675FF"
            strokeWidth="1.5"
          />
          <path
            d="M14 18.7982C15.4473 18.9487 17.3999 19.4116 18.4375 18.0884C19 17.3712 19 16.2786 19 14.0933V7.90664C19 5.72139 19 4.62876 18.4375 3.91153C17.3999 2.58841 15.4473 3.05129 14 3.20177"
            stroke="#1675FF"
            strokeWidth="1.5"
          />
          <path
            d="M11 12V10"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 18.7266H21"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 19H4"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Multiple gateways worldwide",
      description:
        "Praesent fringilla, lectus ut efficitur iaculis, nisl ante tristique odio.",
    },
    {
      icon: (
        <svg
          width="19"
          height="22"
          viewBox="0 0 19 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[14px] sm:w-[20px] h-auto"
        >
          <path
            d="M10 18V21"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 21H12"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 15C7.13401 15 4 11.866 4 8C4 4.13401 7.13401 1 11 1C14.866 1 18 4.13401 18 8C18 11.866 14.866 15 11 15Z"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M6 3C6.65431 3.0385 6.99236 3.35899 7.5735 3.97301C8.6231 5.08206 9.6727 5.1746 10.3724 4.80492C11.422 4.2504 10.54 3.35221 11.7719 2.86409C12.5748 2.54595 12.6868 1.68026 12.2399 1"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M17.5 9C16 9 15.7338 10.2468 14.5 10C12 9.5 11.2916 10.0589 11.2916 11.2511C11.2916 12.4432 11.2916 12.4432 10.7717 13.3373C10.4335 13.9189 10.3153 14.5004 10.9894 15"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M4 1C2.14864 2.79995 1 5.3082 1 8.08251C1 13.5598 5.47715 18 11 18C13.7255 18 16.1962 16.9187 18 15.165"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "ASN/ISP Targeting",
      description:
        "Praesent fringilla, lectus ut efficitur iaculis, nisl ante tristique odio.",
    },
    {
      icon: (
        <svg
          width="18"
          height="22"
          viewBox="0 0 18 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[14px] sm:w-[20px] h-auto"
        >
          <path
            d="M4 17C2.17107 17.4117 1 18.0443 1 18.7537C1 19.9943 4.58172 21 9 21C13.4183 21 17 19.9943 17 18.7537C17 18.0443 15.8289 17.4117 14 17"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M11.5 8C11.5 9.3807 10.3807 10.5 9 10.5C7.6193 10.5 6.5 9.3807 6.5 8C6.5 6.61929 7.6193 5.5 9 5.5C10.3807 5.5 11.5 6.61929 11.5 8Z"
            stroke="#1675FF"
            strokeWidth="1.5"
          />
          <path
            d="M10.2574 16.4936C9.9201 16.8184 9.4693 17 9.0002 17C8.531 17 8.0802 16.8184 7.7429 16.4936C4.6543 13.5008 0.51519 10.1575 2.53371 5.30373C3.6251 2.67932 6.24494 1 9.0002 1C11.7554 1 14.3752 2.67933 15.4666 5.30373C17.4826 10.1514 13.3536 13.5111 10.2574 16.4936Z"
            stroke="#1675FF"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "Target over 40 US states",
      description:
        "Praesent fringilla, lectus ut efficitur iaculis, nisl ante tristique odio.",
    },
    {
      icon: (
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[14px] sm:w-[20px] h-auto"
        >
          <path
            d="M8.99996 7C13.4183 7 17 5.65685 17 4C17 2.34314 13.4183 1 8.99996 1C4.58172 1 1 2.34314 1 4C1 5.65685 4.58172 7 8.99996 7Z"
            stroke="#1675FF"
            strokeWidth="1.5"
          />
          <path
            d="M4 9.8418C4.60158 10.0226 5.27434 10.1716 6 10.2817"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8.99996 14C4.58171 14 1 12.6569 1 11"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M4 16.8418C4.60158 17.0226 5.27434 17.1716 6 17.2817"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8.99996 21C4.58171 21 1 19.6569 1 18V4M17 4V9.50003"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.7439 15.379C13.7439 15.319 13.7522 14.554 13.7535 14.1196C13.7548 13.7226 13.7199 13.3399 13.9095 12.9897C14.6199 11.5767 16.6599 11.7206 17.1639 13.16C17.2513 13.397 17.2565 13.7726 17.2539 14.1196C17.2507 14.5629 17.2599 15.379 17.2599 15.379M13.7439 15.379C12.6641 15.379 12.2201 16.1587 12.1001 16.6385C11.9801 17.1183 11.9801 18.8575 12.0521 19.5772C12.292 20.4768 12.8919 20.8487 13.4798 20.9686C14.0197 21.0166 16.2993 20.9986 16.9592 20.9986C17.919 21.0166 18.6389 20.6568 18.9388 19.5772C18.9988 19.2174 19.0588 17.2382 18.9088 16.6385C18.5909 15.6789 17.8598 15.379 17.2599 15.379M13.7439 15.379H17.2599"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Five datacenters worldwide",
      description:
        "Praesent fringilla, lectus ut efficitur iaculis, nisl ante tristique odio.",
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[14px] sm:w-[20px] h-auto"
        >
          <path
            d="M11.2504 11.0007C11.2504 11.0007 9.52078 13.6323 7.77668 13.6323C6.03262 13.6323 4.93457 12.4541 4.93457 11.0007C4.93457 9.54735 6.03262 8.36914 7.77668 8.36914C9.52078 8.36914 11.2504 11.0007 11.2504 11.0007ZM11.2504 11.0007C11.2504 11.0007 12.9799 13.6323 14.724 13.6323C16.4681 13.6323 17.5661 12.4541 17.5661 11.0007C17.5661 9.54735 16.4681 8.36914 14.724 8.36914C12.9799 8.36914 11.2504 11.0007 11.2504 11.0007Z"
            stroke="#1675FF"
            strokeWidth="1.5"
          />
          <path
            d="M1.25 11C1.25 6.28596 1.25 3.92894 2.71446 2.46446C4.17894 1 6.53596 1 11.25 1C15.964 1 18.3211 1 19.7856 2.46446C21.25 3.92894 21.25 6.28596 21.25 11C21.25 15.714 21.25 18.0711 19.7856 19.5356C18.3211 21 15.964 21 11.25 21C6.53596 21 4.17894 21 2.71446 19.5356C1.25 18.0711 1.25 15.714 1.25 11Z"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Unlimited bandwidth",
      description:
        "Praesent fringilla, lectus ut efficitur iaculis, nisl ante tristique odio.",
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[16px] sm:w-[20px] h-auto"
        >
          <path
            d="M6.69171 18.6161C7.28274 18.6161 7.57825 18.6161 7.84747 18.716C7.88486 18.7298 7.92172 18.7451 7.95797 18.7617C8.21897 18.8815 8.42793 19.0904 8.84585 19.5083C9.8078 20.4702 10.2887 20.9512 10.8805 20.9955C10.96 21.0015 11.04 21.0015 11.1195 20.9955C11.7113 20.9512 12.1923 20.4702 13.1541 19.5083C13.5721 19.0904 13.781 18.8815 14.042 18.7617C14.0783 18.7451 14.1151 18.7298 14.1525 18.716C14.4218 18.6161 14.7173 18.6161 15.3083 18.6161H15.4173C16.9252 18.6161 17.6792 18.6161 18.1476 18.1476C18.6161 17.6792 18.6161 16.9252 18.6161 15.4173V15.3083C18.6161 14.7173 18.6161 14.4218 18.716 14.1525C18.7298 14.1151 18.7451 14.0783 18.7617 14.042C18.8815 13.781 19.0904 13.5721 19.5083 13.1541C20.4702 12.1923 20.9512 11.7113 20.9955 11.1195C21.0015 11.04 21.0015 10.96 20.9955 10.8805C20.9512 10.2887 20.4702 9.8078 19.5083 8.84585C19.0904 8.42793 18.8815 8.21897 18.7617 7.95797C18.7451 7.92172 18.7298 7.88486 18.716 7.84747C18.6161 7.57825 18.6161 7.28274 18.6161 6.69171V6.58269C18.6161 5.07479 18.6161 4.32083 18.1476 3.85239C17.6792 3.38394 16.9252 3.38394 15.4173 3.38394H15.3083C14.7173 3.38394 14.4218 3.38394 14.1525 3.28405C14.1151 3.27018 14.0783 3.25491 14.042 3.23828C13.781 3.11855 13.5721 2.90959 13.1541 2.49167C12.1923 1.52977 11.7113 1.04882 11.1195 1.00447C11.04 0.99851 10.96 0.99851 10.8805 1.00447C10.2887 1.04882 9.8078 1.52977 8.84585 2.49167C8.42793 2.90959 8.21897 3.11855 7.95797 3.23828C7.92172 3.25491 7.88486 3.27018 7.84747 3.28405C7.57825 3.38394 7.28274 3.38394 6.69171 3.38394H6.58269C5.07479 3.38394 4.32083 3.38394 3.85239 3.85239C3.38394 4.32083 3.38394 5.07479 3.38394 6.58269V6.69171C3.38394 7.28274 3.38394 7.57825 3.28405 7.84747C3.27018 7.88486 3.25491 7.92172 3.23828 7.95797C3.11855 8.21897 2.90959 8.42793 2.49167 8.84585C1.52977 9.8078 1.04882 10.2887 1.00447 10.8805C0.99851 10.96 0.99851 11.04 1.00447 11.1195C1.04882 11.7113 1.52977 12.1923 2.49167 13.1541C2.90959 13.5721 3.11855 13.781 3.23828 14.042C3.25491 14.0783 3.27018 14.1151 3.28405 14.1525C3.38394 14.4218 3.38394 14.7173 3.38394 15.3083V15.4173C3.38394 16.9252 3.38394 17.6792 3.85239 18.1476C4.32083 18.6161 5.07479 18.6161 6.58269 18.6161H6.69171Z"
            stroke="#1675FF"
            strokeWidth="1.5"
          />
          <path
            d="M14 8L8 14"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 14H13.9892M8.01076 8H8"
            stroke="#1675FF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Cheap US proxy solution",
      description:
        "Praesent fringilla, lectus ut efficitur iaculis, nisl ante tristique odio.",
    },
  ];

  return (
    <section className="pt-20 sm:pt-44 bg-gradient-to-b from-transparent to-off-white">
      <div className="mx-auto container max-w-[1320px] px-5">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-accent">
          Features
        </p>

        <h2 className="mb-8 sm:mb-20 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          Why our customers choose <br /> our United States proxies
        </h2>

        <div className="relative grid sm:grid-cols-3">
          <div className="absolute top-1/2 left-0 w-full h-px bg-primary/5 hidden sm:block"></div>
          <div className="absolute top-0 left-0 w-px h-full bg-primary/5"></div>
          <div className="absolute top-0 right-0 w-px h-full bg-primary/5"></div>

          {infoBoxes.map((infoBox, index) => (
            <InfoBox key={index} index={index} {...infoBox} />
          ))}
        </div>
      </div>
    </section>
  );
}
