export default function TopicsSection() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="mx-auto container max-w-[1320px] px-5">
        <h2 className="mb-10 text-xl sm:text-3xl font-semibold tracking-[-0.2px] sm:tracking-[-0.56px]">
          Popular Topics
        </h2>

        <div className="grid lg:grid-cols-2 gap-3.5">
          <div className="py-5 px-7 sm:px-10 border border-dark-white rounded-xl flex items-start gap-3.5 sm:gap-5">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] sm:w-[32px] min-w-[24px] sm:min-w-[32px] h-auto"
            >
              <path
                d="M11.499 16.8981H10.887C8.90872 16.8981 7.91956 16.8981 7.49794 16.2459C7.07631 15.5937 7.47804 14.6851 8.28151 12.8678L10.697 7.40431C11.4275 5.752 11.7928 4.92584 12.5014 4.46292C13.21 4 14.1093 4 15.9081 4H18.694C20.8791 4 21.9716 4 22.3836 4.7138C22.7957 5.4276 22.2537 6.38117 21.1696 8.28831L19.7404 10.8025C19.2015 11.7506 18.932 12.2247 18.9357 12.6127C18.9407 13.117 19.2088 13.5816 19.642 13.836C19.9753 14.0319 20.5184 14.0319 21.6047 14.0319C22.9779 14.0319 23.6645 14.0319 24.0221 14.2696C24.4867 14.5784 24.7299 15.1309 24.6447 15.6843C24.5791 16.1101 24.1172 16.6208 23.1935 17.6423L15.8133 25.8031C14.3637 27.406 13.6389 28.2075 13.1522 27.9539C12.6655 27.7001 12.8992 26.6429 13.3667 24.5283L14.2824 20.3861C14.6383 18.776 14.8163 17.9709 14.3883 17.4345C13.9603 16.8981 13.1398 16.8981 11.499 16.8981Z"
                stroke="#1675FF"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>

            <div>
              <h3 className="mb-1 text-base sm:text-lg font-medium tracking-[-0.16px] sm:tracking-[-0.18px]">
                Most Popular Questions{" "}
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1.5 inline-block align-middle"
                >
                  <path
                    d="M0.21967 1.53033C-0.0732234 1.23744 -0.0732234 0.762563 0.21967 0.46967C0.512563 0.176777 0.987437 0.176777 1.28033 0.46967L5.28033 4.46967C5.57322 4.76256 5.57322 5.23744 5.28033 5.53033L1.28033 9.53033C0.987437 9.82322 0.512563 9.82322 0.21967 9.53033C-0.0732234 9.23744 -0.0732234 8.76256 0.21967 8.46967L2.93934 5.75L3.5 5L2.93934 4.25L0.21967 1.53033Z"
                    fill="#1D2026"
                  />
                </svg>
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/75">
                Find answers to most common questions products and setup
              </p>
            </div>
          </div>

          <div className="py-5 px-7 sm:px-10 border border-dark-white rounded-xl flex items-start gap-3.5 sm:gap-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] sm:w-[32px] min-w-[24px] sm:min-w-[32px] h-auto"
            >
              <path
                d="M12 19.5C10.6675 20.1224 8.91707 20.5 7 20.5C5.93408 20.5 4.91969 20.3833 4 20.1726C2.41828 19.8103 2 18.8796 2 17.386V6.61397C2 5.62914 3.04003 4.95273 4 5.1726C4.91969 5.38325 5.93408 5.5 7 5.5C8.91707 5.5 10.6675 5.12236 12 4.5C13.3325 3.87764 15.0829 3.5 17 3.5C18.0659 3.5 19.0803 3.61675 20 3.8274C21.5817 4.18968 22 5.12036 22 6.61397V17.386C22 18.3709 20.96 19.0473 20 18.8274C19.0803 18.6167 18.0659 18.5 17 18.5C15.0829 18.5 13.3325 18.8776 12 19.5Z"
                stroke="#1675FF"
                strokeWidth="1.5"
              />
              <path
                d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
                stroke="#1675FF"
                strokeWidth="1.5"
              />
              <path
                d="M5.5 13V13.0093"
                stroke="#1675FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.5 10.9922V11.0015"
                stroke="#1675FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div>
              <h3 className="mb-1 text-base sm:text-lg font-medium tracking-[-0.16px] sm:tracking-[-0.18px]">
                Refunds and Exchange{" "}
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1.5 inline-block align-middle"
                >
                  <path
                    d="M0.21967 1.53033C-0.0732234 1.23744 -0.0732234 0.762563 0.21967 0.46967C0.512563 0.176777 0.987437 0.176777 1.28033 0.46967L5.28033 4.46967C5.57322 4.76256 5.57322 5.23744 5.28033 5.53033L1.28033 9.53033C0.987437 9.82322 0.512563 9.82322 0.21967 9.53033C-0.0732234 9.23744 -0.0732234 8.76256 0.21967 8.46967L2.93934 5.75L3.5 5L2.93934 4.25L0.21967 1.53033Z"
                    fill="#1D2026"
                  />
                </svg>
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/75">
                Find answers to most common questions products and setup{" "}
              </p>
            </div>
          </div>

          <div className="py-5 px-7 sm:px-10 border border-dark-white rounded-xl flex items-start gap-3.5 sm:gap-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] sm:w-[32px] min-w-[24px] sm:min-w-[32px] h-auto"
            >
              <path
                d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z"
                stroke="#1675FF"
                strokeWidth="1.5"
              />
              <path
                d="M21.011 14.0968C21.5329 13.9561 21.7939 13.8857 21.8969 13.7511C22 13.6166 22 13.4001 22 12.9672V11.0335C22 10.6006 22 10.3841 21.8969 10.2496C21.7938 10.115 21.5329 10.0446 21.011 9.90389C19.0606 9.3779 17.8399 7.33882 18.3433 5.40118C18.4817 4.8683 18.5509 4.60187 18.4848 4.4456C18.4187 4.28933 18.2291 4.18165 17.8497 3.96627L16.125 2.98704C15.7528 2.7757 15.5667 2.67003 15.3997 2.69253C15.2326 2.71503 15.0442 2.90304 14.6672 3.27904C13.208 4.73479 10.7936 4.73473 9.33434 3.27895C8.95743 2.90294 8.76898 2.71494 8.60193 2.69243C8.43489 2.66993 8.24877 2.7756 7.87653 2.98694L6.15184 3.96618C5.77253 4.18154 5.58287 4.28922 5.51678 4.44546C5.45068 4.60171 5.51987 4.86818 5.65825 5.40111C6.16137 7.33881 4.93972 9.37794 2.98902 9.90391C2.46712 10.0446 2.20617 10.115 2.10308 10.2495C2 10.3841 2 10.6006 2 11.0335V12.9672C2 13.4001 2 13.6166 2.10308 13.7511C2.20615 13.8857 2.46711 13.9561 2.98902 14.0968C4.9394 14.6228 6.16008 16.6619 5.65672 18.5995C5.51829 19.1324 5.44907 19.3988 5.51516 19.5551C5.58126 19.7114 5.77092 19.8191 6.15025 20.0344L7.87495 21.0137C8.24721 21.225 8.43334 21.3307 8.6004 21.3082C8.76746 21.2857 8.95588 21.0976 9.33271 20.7216C10.7927 19.2647 13.2088 19.2646 14.6689 20.7215C15.0457 21.0976 15.2341 21.2856 15.4012 21.3081C15.5682 21.3306 15.7544 21.2249 16.1266 21.0136L17.8513 20.0343C18.2307 19.819 18.4204 19.7113 18.4864 19.555C18.5525 19.3987 18.4833 19.1323 18.3448 18.5994C17.8412 16.6619 19.0609 14.6229 21.011 14.0968Z"
                stroke="#1675FF"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            <div>
              <h3 className="mb-1 text-base sm:text-lg font-medium tracking-[-0.16px] sm:tracking-[-0.18px]">
                Setting up proxies{" "}
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1.5 inline-block align-middle"
                >
                  <path
                    d="M0.21967 1.53033C-0.0732234 1.23744 -0.0732234 0.762563 0.21967 0.46967C0.512563 0.176777 0.987437 0.176777 1.28033 0.46967L5.28033 4.46967C5.57322 4.76256 5.57322 5.23744 5.28033 5.53033L1.28033 9.53033C0.987437 9.82322 0.512563 9.82322 0.21967 9.53033C-0.0732234 9.23744 -0.0732234 8.76256 0.21967 8.46967L2.93934 5.75L3.5 5L2.93934 4.25L0.21967 1.53033Z"
                    fill="#1D2026"
                  />
                </svg>
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/75">
                Find answers to most common questions products and setup{" "}
              </p>
            </div>
          </div>

          <div className="py-5 px-7 sm:px-10 border border-dark-white rounded-xl flex items-start gap-3.5 sm:gap-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] sm:w-[32px] min-w-[24px] sm:min-w-[32px] h-auto"
            >
              <path
                d="M3.012 6.59766C2.89208 7.65696 3.65834 10.1953 5.87687 10.2552"
                stroke="#1675FF"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M18.2891 10.1952C19.3684 10.2552 20.9873 8.99607 20.9873 6.59766"
                stroke="#1675FF"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20.0861 20.9878C20.1461 19.6087 19.2467 17.4741 17.5078 17.4141"
                stroke="#1675FF"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3.90131 20.9882C3.84002 19.5999 4.75933 17.451 6.53668 17.3906"
                stroke="#1675FF"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3.01562 13.793H5.22092"
                stroke="#1675FF"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M20.9999 13.793H18.8281"
                stroke="#1675FF"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M11.9971 13.7928V10.8548M16.4941 3L14.6952 4.7988M7.5 3L9.29881 4.7988"
                stroke="#1675FF"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6.96094 8.61133C8.57986 9.77456 12.5972 11.4534 16.9743 8.68328"
                stroke="#1675FF"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M16.8318 7.67737C13.2581 2.70067 8.70116 5.09908 7.08224 7.82127C6.02673 9.59609 4.38403 13.8893 7.50196 18.5662C10.8597 22.6674 14.8171 20.8087 16.436 18.6501C17.995 16.7913 19.53 11.9945 16.8318 7.67737Z"
                stroke="#1675FF"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            <div>
              <h3 className="mb-1 text-base sm:text-lg font-medium tracking-[-0.16px] sm:tracking-[-0.18px]">
                Troubleshooting Guides{" "}
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1.5 inline-block align-middle"
                >
                  <path
                    d="M0.21967 1.53033C-0.0732234 1.23744 -0.0732234 0.762563 0.21967 0.46967C0.512563 0.176777 0.987437 0.176777 1.28033 0.46967L5.28033 4.46967C5.57322 4.76256 5.57322 5.23744 5.28033 5.53033L1.28033 9.53033C0.987437 9.82322 0.512563 9.82322 0.21967 9.53033C-0.0732234 9.23744 -0.0732234 8.76256 0.21967 8.46967L2.93934 5.75L3.5 5L2.93934 4.25L0.21967 1.53033Z"
                    fill="#1D2026"
                  />
                </svg>
              </h3>

              <p className="text-sm sm:text-base tracking-[-0.14px] sm:tracking-[-0.16px] text-primary/75">
                Find answers to most common questions products and setup{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
