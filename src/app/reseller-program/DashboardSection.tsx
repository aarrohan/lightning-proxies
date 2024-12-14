export default function DashboardSection() {
  return (
    <section className="bg-gradient-to-b from-transparent to-[#F0F0F0]">
      <div className="mx-auto container max-w-[1320px] px-5 flex flex-col items-center">
        <p className="mb-3 text-[11px] sm:text-sm font-semibold tracking-[-0.11px] sm:tracking-[-0.14px] uppercase text-center text-accent">
          RESELLER PANEL
        </p>

        <h2 className="mb-6 max-w-[420px] text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          Dedicated dashboard for Resellers
        </h2>

        <p className="mb-16 max-w-[580px] text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-center text-primary/75">
          Dedicated dashboard for Resellers With our reseller-exclusive
          dashboard, you can effortlessly track invoices, manage user plans, and
          access a wide range of additional features.
        </p>

        <div className="w-full aspect-[3/2] sm:aspect-[2/1] border border-dark-white bg-white rounded-t-3xl"></div>
      </div>
    </section>
  );
}
