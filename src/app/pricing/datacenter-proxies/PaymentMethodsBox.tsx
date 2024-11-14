import Image from "next/image";
import pricingPageHeroSectionPaymentMethodsImg from "@/assets/images/pricing-page-hero-section-payment-methods.svg";

export default function PaymentMethodsBox() {
  return (
    <div className="p-4 px-5 border border-white/10 rounded-xl flex flex-col sm:flex-row justify-between sm:items-center gap-y-3 gap-x-12">
      <p className="text-sm sm:text-base font-medium tracking-[-0.14px] sm:tracking-[-0.16px] text-white">
        Accepted payment methods
      </p>

      <Image
        src={pricingPageHeroSectionPaymentMethodsImg}
        alt=""
        className="w-full max-w-[420px] sm:max-w-[280px] h-auto"
      />
    </div>
  );
}
