import Image from "next/image";
import affiliateProgramPayments1Img from "@/assets/images/affiliate-program-payments-1.png";
import affiliateProgramPayments2Img from "@/assets/images/affiliate-program-payments-2.png";

export default function PaymentsSection() {
  return (
    <section className="pb-20 sm:pb-44">
      <div className="mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-accent">
          Payments
        </p>

        <h2 className="mb-8 sm:mb-12 max-w-[550px] text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          Get paid instantly
        </h2>

        <Image
          src={affiliateProgramPayments1Img}
          alt=""
          className="w-full max-w-[670px] hidden sm:block"
        />

        <Image
          src={affiliateProgramPayments2Img}
          alt=""
          className="w-full max-w-[290px] block sm:hidden"
        />
      </div>
    </section>
  );
}
