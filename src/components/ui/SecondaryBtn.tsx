interface IProps {
  customClasses?: string;
  containerClasses?: string;
  children: React.ReactNode;
}

export default function SecondaryBtn({
  customClasses,
  containerClasses,
  children,
}: IProps) {
  return (
    <div className="group active:scale-95 p-[5px] bg-white/15 rounded-[16px] duration-200">
      <div className={`p-[2px] bg-white rounded-[11px] ${containerClasses}`}>
        <button
          className={`relative w-full py-[7px] px-4 bg-white rounded-[9px] text-sm font-semibold tracking-[-0.14px] text-accent overflow-hidden ${customClasses}`}
        >
          <span className="relative z-10 w-full flex justify-center items-center gap-3">
            {children}
          </span>

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent/25 to-accent/5 opacity-0 group-hover:opacity-100 duration-200"></div>
        </button>
      </div>
    </div>
  );
}
