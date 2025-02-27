import Link from "next/link";

export default function Links() {
  return (
    <div className="sticky top-[100px] h-fit hidden lg:flex flex-col items-start gap-y-5">
      <p className="text-sm font-semibold tracking-[-0.14px] uppercase text-accent">
        Legal
      </p>

      <Link
        href={"/legal/terms-of-service"}
        className="text-base font-medium tracking-[-0.16px] text-primary/50 hover:text-primary duration-200"
      >
        Terms of Service
      </Link>

      <Link
        href={"/legal/privacy-policy"}
        className="text-base font-medium tracking-[-0.16px] text-primary"
      >
        Privacy Policy
      </Link>

      <Link
        href={"/legal/cookie-policy"}
        className="text-base font-medium tracking-[-0.16px] text-primary/50 hover:text-primary duration-200"
      >
        Cookie Policy
      </Link>

      <Link
        href={"/coming-soon"}
        className="text-base font-medium tracking-[-0.16px] text-primary/50 hover:text-primary duration-200"
      >
        Extension Policy
      </Link>

      <Link
        href={"/coming-soon"}
        className="text-base font-medium tracking-[-0.16px] text-primary/50 hover:text-primary duration-200"
      >
        Vulnerability Policy
      </Link>

      <Link
        href={"/coming-soon"}
        className="text-base font-medium tracking-[-0.16px] text-primary/50 hover:text-primary duration-200"
      >
        GDPR Policy
      </Link>

      <Link
        href={"/coming-soon"}
        className="text-base font-medium tracking-[-0.16px] text-primary/50 hover:text-primary duration-200"
      >
        Information Policy
      </Link>
    </div>
  );
}
