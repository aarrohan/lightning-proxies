"use client";
import { useState } from "react";
import Image from "next/image";
import dolphinAntyImg from "@/assets/images/dolphin-anty.png";
import vmloginImg from "@/assets/images/vmlogin.png";
import gologinImg from "@/assets/images/gologin.png";
import adspowerImg from "@/assets/images/adspower.png";
import bitbrowserImg from "@/assets/images/bitbrowser.png";
import octobrowserImg from "@/assets/images/octobrowser.png";

interface ICategory {
  title: string;
  partners: string;
}

interface IPartnerCardProps {
  bgColor: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

function PartnerCard({ bgColor, icon, title, description }: IPartnerCardProps) {
  return (
    <div className="border border-dark-white bg-white rounded-xl overflow-hidden">
      <div
        className="relative w-full aspect-[2/1]"
        style={{
          backgroundColor: bgColor,
        }}
      >
        {icon}
      </div>

      <div className="p-5">
        <h3 className="mb-1.5 text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px]">
          {title}
        </h3>

        <p className="text-xs sm:text-sm tracking-[-0.12px] sm:tracking-[-0.14px] text-primary/50">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function PartnersSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const categories: ICategory[] = [
    {
      title: "All Partners",
      partners: "16",
    },
    {
      title: "Browser",
      partners: "12",
    },
    {
      title: "Captcha Solvers",
      partners: "03",
    },
    {
      title: "Cloud",
      partners: "01",
    },
  ];

  return (
    <section className="py-16 sm:py-28">
      <div className="mx-auto container max-w-[1320px] px-5 grid lg:grid-cols-[270px_auto] gap-16">
        <div className="hidden lg:block">
          <p className="mb-3.5 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-accent">
            CATEGORIES
          </p>

          <div className="space-y-1.5">
            {categories.map((category, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setActiveCategoryIndex(index)}
                  className={`py-2.5 px-4 ${
                    activeCategoryIndex === index
                      ? "bg-accent/15"
                      : "opacity-75"
                  } rounded-md flex justify-between cursor-pointer duration-200`}
                >
                  <p className="tracking-[-0.16px]">{category.title}</p>
                  <p className="text-sm tracking-[-0.14px]">
                    {category.partners}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-[26px] sm:text-[28px] font-semibold tracking-[-0.52px] sm:tracking-[-0.56px]">
            All Partners
          </h2>

          {activeCategoryIndex === 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <PartnerCard
                bgColor="#F5DCFF"
                icon={
                  <Image
                    src={dolphinAntyImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="Dolphin Anty"
                description="Anti-detect browser for safe and effective multi-accounting. It provides the best on the market!"
              />

              <PartnerCard
                bgColor="#D4E3FF"
                icon={
                  <Image
                    src={vmloginImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="VMLogin Antidetect Browser"
                description="Replace multiple computers or vps with virtual browser profiles, login and manage multiple accounts."
              />

              <PartnerCard
                bgColor="#DDFFF8"
                icon={
                  <Image
                    src={gologinImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="GoLogin"
                description="A trusted secure browser offering unrivaled data protection technology with fingerprint management engine."
              />

              <PartnerCard
                bgColor="#D8E0FF"
                icon={
                  <Image
                    src={adspowerImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="AdsPower"
                description="Antidetect browser for managing multiple accounts with maximum online anonymity protection."
              />

              <PartnerCard
                bgColor="#E2E3FF"
                icon={
                  <Image
                    src={bitbrowserImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="BitBrowser"
                description="Serves as an effective anti-detection browser, ensuring complete immunity from detection."
              />

              <PartnerCard
                bgColor="#C3E1FF"
                icon={
                  <Image
                    src={octobrowserImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="Octo Browser"
                description="A universal, fast, and feature-rich multi-accounting browser suitable for teamwork and marketing strategy."
              />
            </div>
          )}

          {activeCategoryIndex === 1 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <PartnerCard
                bgColor="#E2E3FF"
                icon={
                  <Image
                    src={bitbrowserImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="BitBrowser"
                description="Serves as an effective anti-detection browser, ensuring complete immunity from detection."
              />

              <PartnerCard
                bgColor="#C3E1FF"
                icon={
                  <Image
                    src={octobrowserImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="Octo Browser"
                description="A universal, fast, and feature-rich multi-accounting browser suitable for teamwork and marketing strategy."
              />
            </div>
          )}

          {activeCategoryIndex === 2 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <PartnerCard
                bgColor="#F5DCFF"
                icon={
                  <Image
                    src={dolphinAntyImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="Dolphin Anty"
                description="Anti-detect browser for safe and effective multi-accounting. It provides the best on the market!"
              />

              <PartnerCard
                bgColor="#D4E3FF"
                icon={
                  <Image
                    src={vmloginImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="VMLogin Antidetect Browser"
                description="Replace multiple computers or vps with virtual browser profiles, login and manage multiple accounts."
              />
            </div>
          )}

          {activeCategoryIndex === 3 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <PartnerCard
                bgColor="#DDFFF8"
                icon={
                  <Image
                    src={gologinImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="GoLogin"
                description="A trusted secure browser offering unrivaled data protection technology with fingerprint management engine."
              />

              <PartnerCard
                bgColor="#D8E0FF"
                icon={
                  <Image
                    src={adspowerImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="AdsPower"
                description="Antidetect browser for managing multiple accounts with maximum online anonymity protection."
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
