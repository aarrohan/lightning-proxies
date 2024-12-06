import Image from "next/image";
import aboutPageHeroSectionImg from "@/assets/images/about-page-hero-section-1.png";

export default function HeroSection() {
  return (
    <section className="relative pt-[70px]">
      <div className="absolute top-[70px] left-0 w-full h-[80%] bg-gradient-to-b from-[#1675FF] to-transparent"></div>

      <div className="relative z-10 mx-auto container max-w-[1320px] py-20 sm:py-28 px-5 flex flex-col items-center">
        <p className="mb-3 text-sm font-semibold tracking-[-0.14px] uppercase text-center text-white">
          About us
        </p>

        <h1 className="mb-5 text-4xl sm:text-[64px] leading-[42px] sm:leading-[72px] tracking-[-1.08px] sm:tracking-[-1.95px] font-semibold text-center text-white">
          Global Proxy Network
        </h1>

        <p className="mb-12 max-w-[580px] text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-white">
          Morbi venenatis odio non dolor iaculis, bibendum ornare nisl luctus.
          Phasellus eget laoreet elit. Sed quis accumsan quam.
        </p>

        <Image
          src={aboutPageHeroSectionImg}
          alt=""
          className="w-full max-w-[250px] sm:max-w-[350px]"
        />

        <div className="mt-12 w-full max-w-[950px] p-1 rounded-t-3xl bg-gradient-to-b from-accent to-transparent">
          <div className="p-7 sm:p-12 bg-white rounded-t-[20px]">
            <p className="mb-3 text-sm font-semibold tracking-[-0.14px] uppercase text-accent">
              MANIFESTO
            </p>

            <p className="mb-4 text-lg sm:text-3xl leading-[24px] sm:leading-[36px] font-semibold tracking-[-0.32px] sm:tracking-[-0.6px]">
              Duis ac ligula ligula. Fusce ut varius est, nec vulputate odio.
              Nam fringilla, justo non convallis convallis.
            </p>

            <p className="mb-8 text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/50">
              Fusce malesuada enim odio, nec condimentum urna viverra a. Integer
              porttitor ultricies ligula, quis semper dui accumsan eu. Curabitur
              at faucibus diam, vitae imperdiet nulla. Vestibulum maximus,
              ligula eget eleifend fringilla, nibh ante tristique dolor, nec
              tristique lectus nulla ultricies sem. <br />
              <br />
              Quisque vel fringilla augue. Mauris fringilla, libero sed iaculis
              vehicula, lectus turpis egestas sapien, ac pretium lectus quam
              eget risus. Mauris sed ipsum non arcu malesuada ultrices. Vivamus
              ac mauris at lorem interdum consectetur.
            </p>

            <p className="mb-2 text-xs sm:text-base leading-[18px] sm:leading-[24px] tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
              Our founder
            </p>

            <svg
              width="115"
              height="56"
              viewBox="0 0 115 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[75px] sm:w-[115px] h-auto"
            >
              <path
                d="M12.264 14.672C12.264 13.328 17.808 5.152 22.232 5.152C23.688 5.152 24.64 6.328 24.64 7.616C24.64 7.672 24.64 7.672 24.64 7.672C24.64 10.36 19.656 14.112 17.136 22.008C22.064 21.392 28.168 20.944 32.256 20.832C35.112 13.496 40.6 0.392002 42.616 0.392002C44.016 0.392002 45.864 1.344 45.864 2.912C45.864 3.304 45.752 3.864 45.36 4.144C42.28 10.136 40.488 12.656 37.128 20.776C39.816 20.832 43.68 20.832 43.68 23.408C43.68 24.808 42.448 25.872 41.216 25.872C40.376 25.872 39.76 25.312 39.592 24.64C38.64 24.136 37.24 24.08 35.504 24.08C31.64 32.088 27.888 42.84 27.888 47.32C27.832 48.496 26.88 49.56 25.704 49.56C25.704 49.56 25.648 49.56 25.592 49.56C23.912 49.56 23.352 48.16 23.352 46.424C23.352 41.608 28.448 28.728 30.632 24.136C26.6 24.248 20.608 24.472 15.904 25.2C15.176 27.216 14.56 29.456 13.944 31.584C14.112 32.2 14.28 32.816 14.28 33.6C14.28 35.56 13.328 40.488 10.528 40.488C9.464 40.488 8.12 39.816 8.12 38.024C8.12 35.952 8.848 33.824 9.688 31.304C8.008 30.016 0 30.352 0 28.728C0 24.472 9.408 23.072 12.936 22.512C14.112 19.712 15.176 16.744 16.184 14.168C15.176 15.624 14.448 16.744 13.944 16.744C12.88 16.744 12.264 15.288 12.264 14.672ZM7.392 26.992C8.456 27.216 9.632 27.552 10.752 28.112C10.976 27.384 11.256 26.656 11.536 25.928C9.856 26.264 8.456 26.656 7.392 26.992Z"
                fill="#1675FF"
              />
              <path
                d="M43.5606 30.24C43.5606 30.24 43.5046 30.184 43.4486 30.184C42.5526 30.184 39.7526 33.712 39.5846 36.008C40.1446 35.28 43.0006 30.912 43.5606 30.24ZM55.6566 32.032C55.6566 34.944 49.6646 40.152 46.4726 40.152C44.4006 40.152 43.0566 38.752 42.8326 36.96C41.6566 38.248 39.9766 40.152 37.9606 40.152C36.0566 40.152 34.9926 38.752 34.9926 36.96C34.9926 33.04 40.3126 25.2 45.1286 25.2C46.4726 25.2 48.0966 26.208 48.0966 27.72C48.0966 28.168 47.9846 28.56 47.7606 28.896C48.0966 29.288 48.3766 29.792 48.3766 30.352V30.408C48.3766 32.704 46.6406 35.56 46.6406 36.568C46.6406 36.792 46.6406 36.904 46.6966 37.016C48.5446 36.344 51.9046 33.656 53.0806 31.36C53.3606 30.8 53.8086 30.576 54.2566 30.576C54.9286 30.576 55.6566 31.136 55.6566 32.032Z"
                fill="#1675FF"
              />
              <path
                d="M59.8277 30.968C56.4677 30.968 56.2997 41.944 52.3797 41.944C52.3237 41.944 52.3237 41.944 52.2677 41.944C50.9797 41.944 49.9717 40.88 49.9717 39.648V39.088C49.9717 35.896 52.0437 30.688 52.9397 27.832V27.776C52.9397 26.824 54.3397 26.096 55.2357 26.096C56.4117 26.096 57.6997 26.936 57.6997 28.224C57.6997 28.28 57.6997 28.28 57.6997 28.336C58.2037 28.112 59.4357 26.88 60.2757 26.88C63.5237 26.88 62.2357 31.864 64.6997 32.592C65.8197 32.256 67.3877 30.072 68.1157 30.072C69.2357 30.072 69.8517 31.192 69.8517 32.088C69.8517 33.88 66.4917 35.392 65.0917 35.392C64.9237 35.392 64.6997 35.392 64.5317 35.392C60.5557 35.392 61.0597 30.968 59.8277 30.968Z"
                fill="#1675FF"
              />
              <path
                d="M72.576 30.8C70.896 31.36 67.704 35.056 67.704 36.68C67.704 37.072 67.872 37.352 68.32 37.408C69.496 36.792 70.728 35.616 71.68 34.44C71.904 33.432 72.24 31.864 72.576 30.8ZM70.224 41.216C69.272 41.888 68.208 42.168 67.256 42.168C64.96 42.168 63.728 40.488 63.728 37.688C63.728 32.48 67.704 26.768 73.864 26.544C76.328 18.704 84.112 0 89.264 0C90.888 0 91.896 1.456 91.896 2.968C91.896 10.304 78.736 30.632 74.648 36.288C73.192 42.168 71.456 46.928 71.456 50.96C71.456 52.192 71.848 52.304 71.848 52.92C71.848 52.976 71.848 52.976 71.848 52.976C71.904 53.088 71.904 53.2 71.904 53.368C71.904 54.544 71.008 55.496 69.832 55.496C68.264 55.496 67.704 54.208 67.704 52.36C67.704 48.776 69.664 43.288 70.224 41.216Z"
                fill="#1675FF"
              />
              <path
                d="M83.8018 27.44C84.9218 27.44 85.8738 28.28 85.8738 29.512C85.8738 32.704 83.0738 34.384 82.9618 37.464C85.7058 35.952 91.7538 29.848 94.4418 27.216C95.0018 26.488 95.6178 26.04 96.3458 26.04C97.8018 26.04 98.9218 27.664 98.9218 29.064C98.9218 29.512 98.8658 29.96 98.6418 30.24C100.882 28 102.394 27.104 103.458 27.104C106.706 27.104 105.642 35.112 106.818 35.112C109.058 35.112 111.41 30.296 113.202 30.296C113.818 30.296 114.098 31.136 114.098 31.584C114.098 34.16 107.658 38.64 105.978 38.64C102.954 38.64 102.114 35.168 101.946 32.312C100.266 33.768 96.1218 39.984 93.5458 39.984C92.0338 39.984 91.4178 38.64 91.4178 37.24C91.4178 37.24 91.5298 36.12 91.8658 34.552C88.5058 37.632 84.4178 40.432 82.5138 40.432C80.6098 40.432 78.9858 39.032 78.9858 36.96C78.9858 34.384 80.3858 32.256 80.8898 29.96C81.1138 28.672 82.3458 27.44 83.8018 27.44ZM84.6418 22.344C84.6418 19.768 84.9218 17.584 87.2738 17.584C88.8418 17.584 90.0178 19.152 90.0178 20.608C90.0178 22.456 87.7218 24.08 86.0418 24.08C85.0898 24.08 84.6418 23.184 84.6418 22.4V22.344Z"
                fill="#1675FF"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
