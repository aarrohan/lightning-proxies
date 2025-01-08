"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function FloatingItems() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `window.$crisp=[];window.CRISP_WEBSITE_ID="f226ecbb-f148-41ab-b240-0b9c1016dba6";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();`;
    document.head.appendChild(script);
  }, []);

  return (
    <Link
      href={"https://t.me/lightningproxies"}
      target="_blank"
      aria-label="Telegram"
      className="fixed z-[999] bottom-20 sm:bottom-24 right-3 sm:right-6 w-[54px] sm:w-[60px] aspect-square flex"
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
        alt=""
        fill
      />
    </Link>
  );
}
