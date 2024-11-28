import Link from "next/link";

export interface IProps {
  img: JSX.Element;
  category: string;
  title: string;
  description: string;
  timestamp: string;
}

export default function ArticleCard({
  img,
  category,
  title,
  description,
  timestamp,
}: IProps) {
  return (
    <Link
      href={"/"}
      className="hover:-translate-y-1 p-3 pb-6 border border-dark-white bg-white shadow-[0px_10px_10px_0px_rgba(0,0,0,0.02),0px_1px_0px_0px_rgba(0,0,0,0.02)] rounded-2xl duration-200"
    >
      {img}

      <div className="px-3">
        <div className="mt-6 flex items-center gap-2.5 opacity-75">
          <p className="text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px]">
            {timestamp}
          </p>

          <span className="w-[3px] sm:w-[4px] aspect-square bg bg-primary/50 rounded-full block"></span>

          <p className="text-xs sm:text-sm font-medium tracking-[-0.12px] sm:tracking-[-0.14px]">
            {category}
          </p>
        </div>

        <h3 className="mt-2.5 sm:mt-3 mb-2 sm:mb-2.5 text-sm sm:text-lg font-medium tracking-[-0.14px] sm:tracking-[-0.18px]">
          {title}
        </h3>

        <p className="text-xs sm:text-base tracking-[-0.12px] sm:tracking-[-0.16px] text-primary/75">
          {description}
        </p>
      </div>
    </Link>
  );
}
