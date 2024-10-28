interface IProps {
  extraSmall?: boolean;
  customClasses?: string;
  children: React.ReactNode;
}

export default function PrimaryBtn({
  extraSmall,
  customClasses,
  children,
}: IProps) {
  return (
    <div
      className={`group active:scale-95 ${
        extraSmall ? "p-[4px]" : "p-[5px]"
      } bg-accent-dark/15 ${
        extraSmall ? "rounded-[10px]" : "rounded-[16px]"
      } duration-200`}
    >
      <div
        className={`p-[2px] bg-accent-dark ${
          extraSmall ? "rounded-[8px]" : "rounded-[11px]"
        }`}
      >
        <button
          className={`relative py-[7px] px-4 bg-accent-dark ${
            extraSmall ? "rounded-[6px]" : "rounded-[9px]"
          } text-sm font-medium tracking-[-0.14px] text-white overflow-hidden ${customClasses}`}
        >
          <span className="relative z-10 flex items-center gap-3">
            {children}
          </span>

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/25 to-white/5 opacity-0 group-hover:opacity-100 duration-200"></div>
        </button>
      </div>
    </div>
  );
}
