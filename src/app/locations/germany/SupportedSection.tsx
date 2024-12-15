export default function SupportedSection() {
  const locations: string[] = [
    "Aachen",
    "Augsburg",
    "Berlin",
    "Bielefeld",
    "Bochum",
    "Bonn",
    "Bremen",
    "Chemnitz",
    "Cologne",
    "Cottbus",
    "Darmstadt",
    "Dortmund",
    "Dresden",
    "Duisburg",
    "Düsseldorf",
    "Erfurt",
    "Essen",
    "Flensburg",
    "Frankfurt am Main",
    "Freiburg",
    "Fürth",
    "Gelsenkirchen",
    "Göttingen",
    "Hagen",
    "Hamburg",
    "Hamm",
    "Hanover",
    "Heidelberg",
    "Heilbronn",
    "Ingolstadt",
    "Jena",
    "Karlsruhe",
    "Kassel",
    "Kiel",
    "Koblenz",
    "Leipzig",
    "Lübeck",
    "Ludwigshafen",
    "Magdeburg",
    "Mainz",
    "Mannheim",
    "Mönchengladbach",
    "Mülheim",
    "Munich",
    "Münster",
    "Nuremberg",
    "Oldenburg",
    "Potsdam",
    "Stuttgart",
  ];

  return (
    <section className="py-20 sm:py-44 bg-off-white">
      <div className="mx-auto container max-w-[1320px] px-5">
        <div className="mb-6 flex items-center gap-2">
          <span className="flex-1 h-px bg-primary/5"></span>

          <p
            className="py-1.5 sm:py-2 px-4 border border-dark-white bg-white rounded-lg text-[10px] sm:text-sm font-medium uppercase tracking-[0.7px]"
            style={{
              boxShadow: `0px -1px 1px 0px rgba(0, 0, 0, 0.10) inset, 0px 1px 1px 0px rgba(0, 0, 0, 0.10)`,
            }}
          >
            Locations
          </p>

          <span className="flex-1 h-px bg-primary/5"></span>
        </div>

        <h2 className="mb-8 sm:mb-14 text-[26px] sm:text-[42px] font-semibold leading-[30px] sm:leading-[46px] tracking-[-0.84px] text-center">
          All locations supported in <br /> Germany
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-7 gap-3.5 sm:gap-4">
          {locations.map((location, index) => {
            return (
              <p
                key={index}
                className="relative hover:-translate-y-[2px] py-2.5 border border-dark-white bg-white rounded-lg text-xs sm:text-sm font-medium tracking-[-0.14px] text-center duration-200"
                style={{
                  boxShadow: `0px -1px 1px 0px rgba(0, 0, 0, 0.10) inset, 0px 1px 1px 0px rgba(0, 0, 0, 0.10)`,
                }}
              >
                {location}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
