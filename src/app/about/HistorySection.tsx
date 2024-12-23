export default function HistorySection() {
  return (
    <section className="pb-20 sm:pb-44">
      <div className="mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-accent">
          HISTORY
        </p>

        <h2 className="mb-6 max-w-[520px] text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          From Day 1 to now
        </h2>

        <p className="mb-12 sm:mb-16 max-w-[580px] text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/75">
          Discover the steps LightningProxies took to get where we are today.
        </p>

        <div className="w-full">
          <div className="p-2.5 border border-dark-white bg-off-white rounded-xl">
            <div className="mb-3 flex items-center gap-4">
              <div className="w-[20px] sm:w-[28px] aspect-square border border-dark-white bg-white rounded-full flex justify-center items-center">
                <p className="text-xs sm:text-base font-semibold tracking-[-0.12px] sm:tracking-[-0.16px]">
                  1
                </p>
              </div>

              <p className="text-xs sm:text-base font-semibold tracking-[-0.12px] sm:tracking-[-0.16px]">
                January 2023
              </p>

              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/50">
                LightningProxies was established
              </p>
            </div>

            <div className="py-5 sm:py-6 px-5 sm:px-8 border border-dark-white bg-white rounded-lg space-y-4">
              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/50">
                The LightningProxies website was launched with limited products
                and features, but that didn’t stop us from achieving rapid
                growth within the first 6–12 months.
              </p>

              <p className="flex items-center gap-3 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] sm:w-[24px] min-w-[18px] sm:min-w-[24px] h-auto"
                >
                  <path
                    d="M8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65083L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H14.0244C15.6632 3 16.4826 3 16.7916 3.53535C17.1007 4.0707 16.6942 4.78588 15.8811 6.21623L14.8092 8.10188C14.405 8.81295 14.2029 9.16849 14.2057 9.45952C14.2094 9.83775 14.4105 10.1862 14.7354 10.377C14.9854 10.5239 15.3927 10.5239 16.2074 10.5239C17.2373 10.5239 17.7523 10.5239 18.0205 10.7022C18.3689 10.9338 18.5513 11.3482 18.4874 11.7632C18.4382 12.0826 18.0918 12.4656 17.399 13.2317L11.8639 19.3523C10.7767 20.5545 10.2331 21.1556 9.86807 20.9654C9.50303 20.7751 9.67833 19.9822 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4782 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736Z"
                    stroke="#1675FF"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                Regular software and network updates to consistently improve
                proxy speeds.
              </p>

              <p className="flex items-center gap-3 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] sm:w-[24px] min-w-[18px] sm:min-w-[24px] h-auto"
                >
                  <path
                    d="M9 16.5C8.38635 16.5 7.80015 16.2524 6.6277 15.7571C3.70923 14.5243 2.25 13.9079 2.25 12.871C2.25 12.5807 2.25 7.54838 2.25 5.25M9 16.5C9.61365 16.5 10.1999 16.2524 11.3723 15.7571C14.2908 14.5243 15.75 13.9079 15.75 12.871V5.25M9 16.5V8.5161"
                    stroke="#1675FF"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.24444 7.26853L4.05354 6.20839C2.85118 5.62658 2.25 5.33567 2.25 4.875C2.25 4.41433 2.85118 4.12342 4.05354 3.54161L6.24444 2.48146C7.5966 1.82716 8.27273 1.5 9 1.5C9.72727 1.5 10.4034 1.82715 11.7556 2.48146L13.9465 3.54161C15.1488 4.12342 15.75 4.41433 15.75 4.875C15.75 5.33567 15.1488 5.62658 13.9465 6.20839L11.7556 7.26853C10.4034 7.92285 9.72727 8.25 9 8.25C8.27273 8.25 7.5966 7.92285 6.24444 7.26853Z"
                    stroke="#1675FF"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 9L6 9.75"
                    stroke="#1675FF"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.75 3L5.25 6.75"
                    stroke="#1675FF"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                In just 6 months, our USA Residential pool has tripled in size.
              </p>
            </div>
          </div>

          <div className="ml-6 w-px h-[40px] border border-dashed"></div>

          <div className="p-2.5 border border-dark-white bg-off-white rounded-xl">
            <div className="mb-3 flex items-center gap-4">
              <div className="w-[20px] sm:w-[28px] aspect-square border border-dark-white bg-white rounded-full flex justify-center items-center">
                <p className="text-xs sm:text-base font-semibold tracking-[-0.12px] sm:tracking-[-0.16px]">
                  2
                </p>
              </div>

              <p className="text-xs sm:text-base font-semibold tracking-[-0.12px] sm:tracking-[-0.16px]">
                Sept 2023
              </p>

              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/50">
                5000 Active Subscribers
              </p>
            </div>

            <div className="py-5 sm:py-6 px-5 sm:px-8 border border-dark-white bg-white rounded-lg space-y-4">
              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/50">
                After months of hard work, we proudly reached the milestone of
                5,000 active customers—a significant and promising achievement
                for LightningProxies at the time.
              </p>

              <p className="flex items-center gap-3 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] sm:w-[24px] min-w-[18px] sm:min-w-[24px] h-auto"
                >
                  <path
                    d="M8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65083L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H14.0244C15.6632 3 16.4826 3 16.7916 3.53535C17.1007 4.0707 16.6942 4.78588 15.8811 6.21623L14.8092 8.10188C14.405 8.81295 14.2029 9.16849 14.2057 9.45952C14.2094 9.83775 14.4105 10.1862 14.7354 10.377C14.9854 10.5239 15.3927 10.5239 16.2074 10.5239C17.2373 10.5239 17.7523 10.5239 18.0205 10.7022C18.3689 10.9338 18.5513 11.3482 18.4874 11.7632C18.4382 12.0826 18.0918 12.4656 17.399 13.2317L11.8639 19.3523C10.7767 20.5545 10.2331 21.1556 9.86807 20.9654C9.50303 20.7751 9.67833 19.9822 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4782 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736Z"
                    stroke="#1675FF"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                Proxy Usage Logs Release.
              </p>

              <p className="flex items-center gap-3 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] sm:w-[24px] min-w-[18px] sm:min-w-[24px] h-auto"
                >
                  <path
                    d="M9 16.5C8.38635 16.5 7.80015 16.2524 6.6277 15.7571C3.70923 14.5243 2.25 13.9079 2.25 12.871C2.25 12.5807 2.25 7.54838 2.25 5.25M9 16.5C9.61365 16.5 10.1999 16.2524 11.3723 15.7571C14.2908 14.5243 15.75 13.9079 15.75 12.871V5.25M9 16.5V8.5161"
                    stroke="#1675FF"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.24444 7.26853L4.05354 6.20839C2.85118 5.62658 2.25 5.33567 2.25 4.875C2.25 4.41433 2.85118 4.12342 4.05354 3.54161L6.24444 2.48146C7.5966 1.82716 8.27273 1.5 9 1.5C9.72727 1.5 10.4034 1.82715 11.7556 2.48146L13.9465 3.54161C15.1488 4.12342 15.75 4.41433 15.75 4.875C15.75 5.33567 15.1488 5.62658 13.9465 6.20839L11.7556 7.26853C10.4034 7.92285 9.72727 8.25 9 8.25C8.27273 8.25 7.5966 7.92285 6.24444 7.26853Z"
                    stroke="#1675FF"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 9L6 9.75"
                    stroke="#1675FF"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.75 3L5.25 6.75"
                    stroke="#1675FF"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Sub-User Management Release.
              </p>
            </div>
          </div>

          <div className="ml-6 w-px h-[40px] border border-dashed"></div>

          <div className="p-2.5 border border-dark-white bg-off-white rounded-xl">
            <div className="mb-3 flex items-center gap-4">
              <div className="w-[20px] sm:w-[28px] aspect-square border border-dark-white bg-white rounded-full flex justify-center items-center">
                <p className="text-xs sm:text-base font-semibold tracking-[-0.12px] sm:tracking-[-0.16px]">
                  3
                </p>
              </div>

              <p className="text-xs sm:text-base font-semibold tracking-[-0.12px] sm:tracking-[-0.16px]">
                April 2024
              </p>

              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/50">
                Revamping the brand with Static ISP and Unlimited Residential
                Proxies Release
              </p>
            </div>

            <div className="py-5 sm:py-6 px-5 sm:px-8 border border-dark-white bg-white rounded-lg space-y-4">
              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/50">
                April 2024 was a milestone month for LightningProxies, with the
                release of two highly demanded products, packed with versatile
                options and powerful features.
              </p>

              <p className="flex items-center gap-3 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] sm:w-[24px] min-w-[18px] sm:min-w-[24px] h-auto"
                >
                  <path
                    d="M8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65083L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H14.0244C15.6632 3 16.4826 3 16.7916 3.53535C17.1007 4.0707 16.6942 4.78588 15.8811 6.21623L14.8092 8.10188C14.405 8.81295 14.2029 9.16849 14.2057 9.45952C14.2094 9.83775 14.4105 10.1862 14.7354 10.377C14.9854 10.5239 15.3927 10.5239 16.2074 10.5239C17.2373 10.5239 17.7523 10.5239 18.0205 10.7022C18.3689 10.9338 18.5513 11.3482 18.4874 11.7632C18.4382 12.0826 18.0918 12.4656 17.399 13.2317L11.8639 19.3523C10.7767 20.5545 10.2331 21.1556 9.86807 20.9654C9.50303 20.7751 9.67833 19.9822 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4782 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736Z"
                    stroke="#1675FF"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                Static ISP Proxies Release with 15+ locations and 100ms average
                speeds.
              </p>

              <p className="flex items-center gap-3 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] sm:w-[24px] min-w-[18px] sm:min-w-[24px] h-auto"
                >
                  <path
                    d="M9 16.5C8.38635 16.5 7.80015 16.2524 6.6277 15.7571C3.70923 14.5243 2.25 13.9079 2.25 12.871C2.25 12.5807 2.25 7.54838 2.25 5.25M9 16.5C9.61365 16.5 10.1999 16.2524 11.3723 15.7571C14.2908 14.5243 15.75 13.9079 15.75 12.871V5.25M9 16.5V8.5161"
                    stroke="#1675FF"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.24444 7.26853L4.05354 6.20839C2.85118 5.62658 2.25 5.33567 2.25 4.875C2.25 4.41433 2.85118 4.12342 4.05354 3.54161L6.24444 2.48146C7.5966 1.82716 8.27273 1.5 9 1.5C9.72727 1.5 10.4034 1.82715 11.7556 2.48146L13.9465 3.54161C15.1488 4.12342 15.75 4.41433 15.75 4.875C15.75 5.33567 15.1488 5.62658 13.9465 6.20839L11.7556 7.26853C10.4034 7.92285 9.72727 8.25 9 8.25C8.27273 8.25 7.5966 7.92285 6.24444 7.26853Z"
                    stroke="#1675FF"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 9L6 9.75"
                    stroke="#1675FF"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.75 3L5.25 6.75"
                    stroke="#1675FF"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Unlimited Residential Proxies Release with over 800k active IPs
                in real-time.
              </p>
            </div>
          </div>

          <div className="ml-6 w-px h-[40px] border border-dashed"></div>

          <div className="p-2.5 border border-dark-white bg-off-white rounded-xl">
            <div className="mb-3 flex items-center gap-4">
              <div className="w-[20px] sm:w-[28px] aspect-square border border-dark-white bg-white rounded-full flex justify-center items-center">
                <p className="text-xs sm:text-base font-semibold tracking-[-0.12px] sm:tracking-[-0.16px]">
                  4
                </p>
              </div>

              <p className="text-xs sm:text-base font-semibold tracking-[-0.12px] sm:tracking-[-0.16px]">
                Dec 2024
              </p>

              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/50">
                Our biggest redesign ever and a brand new product.
              </p>
            </div>

            <div className="py-5 sm:py-6 px-5 sm:px-8 border border-dark-white bg-white rounded-lg space-y-4">
              <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/50">
                LightningProxies undergoes its biggest redesign ever—a sleek,
                modern update to enhance the user experience. Alongside this,
                we’re excited to launch our new datacenter proxies, packed with
                features and flexible options to suit every budget and need.
              </p>

              <p className="flex items-center gap-3 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] sm:w-[24px] min-w-[18px] sm:min-w-[24px] h-auto"
                >
                  <path
                    d="M8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65083L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H14.0244C15.6632 3 16.4826 3 16.7916 3.53535C17.1007 4.0707 16.6942 4.78588 15.8811 6.21623L14.8092 8.10188C14.405 8.81295 14.2029 9.16849 14.2057 9.45952C14.2094 9.83775 14.4105 10.1862 14.7354 10.377C14.9854 10.5239 15.3927 10.5239 16.2074 10.5239C17.2373 10.5239 17.7523 10.5239 18.0205 10.7022C18.3689 10.9338 18.5513 11.3482 18.4874 11.7632C18.4382 12.0826 18.0918 12.4656 17.399 13.2317L11.8639 19.3523C10.7767 20.5545 10.2331 21.1556 9.86807 20.9654C9.50303 20.7751 9.67833 19.9822 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4782 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736Z"
                    stroke="#1675FF"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
                Residential Proxies reach 3Mil+ active IPs in real-time
                globally.
              </p>

              <p className="flex items-center gap-3 text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] sm:w-[24px] min-w-[18px] sm:min-w-[24px] h-auto"
                >
                  <path
                    d="M9 16.5C8.38635 16.5 7.80015 16.2524 6.6277 15.7571C3.70923 14.5243 2.25 13.9079 2.25 12.871C2.25 12.5807 2.25 7.54838 2.25 5.25M9 16.5C9.61365 16.5 10.1999 16.2524 11.3723 15.7571C14.2908 14.5243 15.75 13.9079 15.75 12.871V5.25M9 16.5V8.5161"
                    stroke="#1675FF"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.24444 7.26853L4.05354 6.20839C2.85118 5.62658 2.25 5.33567 2.25 4.875C2.25 4.41433 2.85118 4.12342 4.05354 3.54161L6.24444 2.48146C7.5966 1.82716 8.27273 1.5 9 1.5C9.72727 1.5 10.4034 1.82715 11.7556 2.48146L13.9465 3.54161C15.1488 4.12342 15.75 4.41433 15.75 4.875C15.75 5.33567 15.1488 5.62658 13.9465 6.20839L11.7556 7.26853C10.4034 7.92285 9.72727 8.25 9 8.25C8.27273 8.25 7.5966 7.92285 6.24444 7.26853Z"
                    stroke="#1675FF"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 9L6 9.75"
                    stroke="#1675FF"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.75 3L5.25 6.75"
                    stroke="#1675FF"
                    strokeWidth="1.125"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                New Datacenter Proxies Release.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
