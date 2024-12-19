"use client";
import { useState } from "react";
import Image from "next/image";
import dolphinAntyImg from "@/assets/images/dolphin-anty.png";
import vmloginImg from "@/assets/images/vmlogin.png";
import gologinImg from "@/assets/images/gologin.png";
import adspowerImg from "@/assets/images/adspower.png";
import bitbrowserImg from "@/assets/images/bitbrowser.png";
import octobrowserImg from "@/assets/images/octobrowser.png";
import browserscanImg from "@/assets/images/browserscan.png";
import hidemiumImg from "@/assets/images/hidemium.jpg";
import hidemyaccImg from "@/assets/images/hidemyacc.png";
import incognitionBrowserImg from "@/assets/images/incognition-browser.svg";
import nstBrowserImg from "@/assets/images/nstbrowser.jpg";
import undetectableBrowserImg from "@/assets/images/undetectable-browser.svg";
import xLoginImg from "@/assets/images/xlogin.png";
import capsolverImg from "@/assets/images/capsolver.png";
import captchaAIImg from "@/assets/images/captcha-ai.png";
import scrappeyImg from "@/assets/images/scrappey.jpg";
import dolphinCloudImg from "@/assets/images/dolphin-cloud.png";
import Link from "next/link";

interface ICategory {
  title: string;
  partners: string;
}

interface IPartnerCardProps {
  href: string;
  bgColor: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

function PartnerCard({
  href,
  bgColor,
  icon,
  title,
  description,
}: IPartnerCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="hover:-translate-y-1 border border-dark-white bg-white rounded-xl overflow-hidden duration-200"
    >
      <div
        className="relative w-full aspect-[2/1] border-b border-dark-white"
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
    </Link>
  );
}

export default function PartnersSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  const categories: ICategory[] = [
    {
      title: "All Partners",
      partners: "17",
    },
    {
      title: "Browser",
      partners: "13",
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
                href="https://dolphin-anty.com/?utm_source=media&utm_medium=partners&utm_campaign=lightningproxies&utm_content=partners-page"
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
                href="https://gologin.com/"
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
                href="https://www.adspower.com/"
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
                href="https://www.vmlogin.us/?ref=lightning"
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
                href="https://www.bitbrowser.net/?code=ab0cdb"
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
                href="https://octobrowser.net/"
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

              <PartnerCard
                href="https://www.browserscan.net/"
                bgColor="#070d2d"
                icon={
                  <Image
                    src={browserscanImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[140px]"
                  />
                }
                title="BrowserScan"
                description="BrowserScan offers comprehensive browser fingerprint analysis, capturing details like UserAgent, device specifics, IP address with geolocation, Canvas fingerprinting, and checks for WebRTC and DNS leaks to help users assess their online privacy."
              />

              <PartnerCard
                href="https://hidemium.io/"
                bgColor="#ffffff"
                icon={
                  <Image
                    src={hidemiumImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="Hidemium"
                description="Hidemium, an anti-detect solution, ensures a highly secure environment for managing numerous accounts. It shields your device and real IP effectively, preventing WebRTC leaks. With automated functions, simply drag and drop buttons to execute browser tasks, mimicking real user behavior effortlessly."
              />

              <PartnerCard
                href="https://hidemyacc.com/"
                bgColor="#dbedff"
                icon={
                  <Image
                    src={hidemyaccImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[140px]"
                  />
                }
                title="Hidemyacc"
                description="Hidemyacc is a professional antidetect browser for anyone who wants to make money online (MMO). This software will protect you from tracked browser fingerprints as well as avoid getting your account suspended and banned from many websites. HIDEMYLIGHT (10% off for any purchase)"
              />

              <PartnerCard
                href="https://incogniton.com/"
                bgColor="#fbceff"
                icon={
                  <Image
                    src={incognitionBrowserImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[140px]"
                  />
                }
                title="Incogniton Browser"
                description="Incogniton: a user-friendly tool for online entrepreneurs. Replace multiple computers with virtual browser profiles, ensuring data safety and privacy. Each profile has a unique digital fingerprint, allowing multiple users on the same browser!"
              />

              <PartnerCard
                href="https://nstbrowser.io/"
                bgColor="#ffffff"
                icon={
                  <Image
                    src={nstBrowserImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="NstBrowser"
                description="Nstbrowser: a professional account management tool with independent fingerprint browser isolation for each account, reducing costs. Features include batch management, automated settings, synchronization, scripting, marketing, API integration, employee management, team collaboration, and proxy support."
              />

              <PartnerCard
                href="https://undetectable.io/?r=ToJma&utm_source=lightningproxies&utm_medium=affiliate"
                bgColor="#e1e6ff"
                icon={
                  <Image
                    src={undetectableBrowserImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="Undetectable Browser"
                description="A professional anti-detect browser for real fingerprints with high trust. Uptime 99,99%. Has API, mass extension installation, profile creation, cookie-bot. An ideal tool for comfortable work with a large number of profiles and increased anonymity, for multi-accounting, crypto wallets, and parsing."
              />

              <PartnerCard
                href="https://xlogin.us/?sub=lightning"
                bgColor="#ffffff"
                icon={
                  <Image
                    src={xLoginImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="XLogin Browser"
                description="XLogin is a business-focused Antidetect Browser designed for multi-account businesses like e-commerce, affiliate marketing, social media, web crawlers, ad verification, price comparison, and more. Guaranteeing 100% account security and anti-detection."
              />

              <PartnerCard
                href="https://www.capsolver.com/"
                bgColor="#dcffdf"
                icon={
                  <Image
                    src={capsolverImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="Capsolver"
                description="CapSolver, an advanced captcha recognition solution using machine learning, delivers stable, fast, and flexible services for independent developers at a cost-effective rate. We also offer image recognition and customization services for enterprise clients."
              />

              <PartnerCard
                href="https://captchaai.com/lp/partners"
                bgColor="#ffdce1"
                icon={
                  <Image
                    src={captchaAIImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[120px]"
                  />
                }
                title="Captcha AI"
                description="The Best Automated Captcha Solving Solution with AI-powered. Experience high-speed, high-accuracy captcha solving like never before! Give it a shot today and see the difference! Special Deals for Lightning Proxies Users: Up 15% off"
              />

              <PartnerCard
                href="https://scrappey.com"
                bgColor="#e5fffd"
                icon={
                  <Image
                    src={scrappeyImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="Scrappey"
                description="Scrappey.com simplifies web scraping with a robust API that handles anti-bot measures and CAPTCHAs, along with features like rotating proxies and headless browsing for seamless extraction."
              />

              <PartnerCard
                href="https://cloud.dolphin.tech/en/?utm_source=media&utm_medium=partners&utm_campaign=lightningproxies&utm_content=partners-page"
                bgColor="#d9efff"
                icon={
                  <Image
                    src={dolphinCloudImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="Dolphin Cloud"
                description="Powerful multitool for Facebook ADS. Automate advertising on hundreds of accounts in one window. Free trial for three days!"
              />
            </div>
          )}

          {activeCategoryIndex === 1 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <PartnerCard
                href="https://dolphin-anty.com/?utm_source=media&utm_medium=partners&utm_campaign=lightningproxies&utm_content=partners-page"
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
                href="https://gologin.com/"
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
                href="https://www.adspower.com/"
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
                href="https://www.vmlogin.us/?ref=lightning"
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
                href="https://www.bitbrowser.net/?code=ab0cdb"
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
                href="https://octobrowser.net/"
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

              <PartnerCard
                href="https://www.browserscan.net/"
                bgColor="#070d2d"
                icon={
                  <Image
                    src={browserscanImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[140px]"
                  />
                }
                title="BrowserScan"
                description="BrowserScan offers comprehensive browser fingerprint analysis, capturing details like UserAgent, device specifics, IP address with geolocation, Canvas fingerprinting, and checks for WebRTC and DNS leaks to help users assess their online privacy."
              />

              <PartnerCard
                href="https://hidemium.io/"
                bgColor="#ffffff"
                icon={
                  <Image
                    src={hidemiumImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="Hidemium"
                description="Hidemium, an anti-detect solution, ensures a highly secure environment for managing numerous accounts. It shields your device and real IP effectively, preventing WebRTC leaks. With automated functions, simply drag and drop buttons to execute browser tasks, mimicking real user behavior effortlessly."
              />

              <PartnerCard
                href="https://hidemyacc.com/"
                bgColor="#dbedff"
                icon={
                  <Image
                    src={hidemyaccImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[140px]"
                  />
                }
                title="Hidemyacc"
                description="Hidemyacc is a professional antidetect browser for anyone who wants to make money online (MMO). This software will protect you from tracked browser fingerprints as well as avoid getting your account suspended and banned from many websites. HIDEMYLIGHT (10% off for any purchase)"
              />

              <PartnerCard
                href="https://incogniton.com/"
                bgColor="#fbceff"
                icon={
                  <Image
                    src={incognitionBrowserImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[140px]"
                  />
                }
                title="Incogniton Browser"
                description="Incogniton: a user-friendly tool for online entrepreneurs. Replace multiple computers with virtual browser profiles, ensuring data safety and privacy. Each profile has a unique digital fingerprint, allowing multiple users on the same browser!"
              />

              <PartnerCard
                href="https://nstbrowser.io/"
                bgColor="#ffffff"
                icon={
                  <Image
                    src={nstBrowserImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="NstBrowser"
                description="Nstbrowser: a professional account management tool with independent fingerprint browser isolation for each account, reducing costs. Features include batch management, automated settings, synchronization, scripting, marketing, API integration, employee management, team collaboration, and proxy support."
              />

              <PartnerCard
                href="https://undetectable.io/?r=ToJma&utm_source=lightningproxies&utm_medium=affiliate"
                bgColor="#e1e6ff"
                icon={
                  <Image
                    src={undetectableBrowserImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="Undetectable Browser"
                description="A professional anti-detect browser for real fingerprints with high trust. Uptime 99,99%. Has API, mass extension installation, profile creation, cookie-bot. An ideal tool for comfortable work with a large number of profiles and increased anonymity, for multi-accounting, crypto wallets, and parsing."
              />

              <PartnerCard
                href="https://xlogin.us/?sub=lightning"
                bgColor="#ffffff"
                icon={
                  <Image
                    src={xLoginImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="XLogin Browser"
                description="XLogin is a business-focused Antidetect Browser designed for multi-account businesses like e-commerce, affiliate marketing, social media, web crawlers, ad verification, price comparison, and more. Guaranteeing 100% account security and anti-detection."
              />
            </div>
          )}

          {activeCategoryIndex === 2 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <PartnerCard
                href="https://www.capsolver.com/"
                bgColor="#dcffdf"
                icon={
                  <Image
                    src={capsolverImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="Capsolver"
                description="CapSolver, an advanced captcha recognition solution using machine learning, delivers stable, fast, and flexible services for independent developers at a cost-effective rate. We also offer image recognition and customization services for enterprise clients."
              />

              <PartnerCard
                href="https://captchaai.com/lp/partners"
                bgColor="#ffdce1"
                icon={
                  <Image
                    src={captchaAIImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[120px]"
                  />
                }
                title="Captcha AI"
                description="The Best Automated Captcha Solving Solution with AI-powered. Experience high-speed, high-accuracy captcha solving like never before! Give it a shot today and see the difference! Special Deals for Lightning Proxies Users: Up 15% off"
              />

              <PartnerCard
                href="https://scrappey.com"
                bgColor="#e5fffd"
                icon={
                  <Image
                    src={scrappeyImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="Scrappey"
                description="Scrappey.com simplifies web scraping with a robust API that handles anti-bot measures and CAPTCHAs, along with features like rotating proxies and headless browsing for seamless extraction."
              />
            </div>
          )}

          {activeCategoryIndex === 3 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <PartnerCard
                href="https://cloud.dolphin.tech/en/?utm_source=media&utm_medium=partners&utm_campaign=lightningproxies&utm_content=partners-page"
                bgColor="#d9efff"
                icon={
                  <Image
                    src={dolphinCloudImg}
                    alt=""
                    className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[74px]"
                  />
                }
                title="Dolphin Cloud"
                description="Powerful multitool for Facebook ADS. Automate advertising on hundreds of accounts in one window. Free trial for three days!"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
