import { useReveal } from "@/hooks/useReveal";
import { Check, X } from "lucide-react";

const formulas = ["Starter", "Growth", "Professional", "Corporate"];

type Cell = string | boolean;

const rows: { label: string; values: [Cell, Cell, Cell] }[] = [
  { label: "Objective", values: ["Build brand awareness", "Generate more leads", "Accelerate your growth"] },
  { label: "Audit & Strategy", values: [true, true, true] },
  { label: "Campaign duration", values: ["2 months", "2 months", "3 months"] },
  { label: "Graphic design", values: ["2 visuals", "4 visuals", "6 visuals"] },
  { label: "Video production", values: ["1 video", "2 videos", "3 videos"] },
  { label: "Motion Design / AI", values: [false, "1 animation", "2 animations"] },
  { label: "Concept & Copywriting", values: [true, true, true] },
  { label: "Social Ads (Facebook, Instagram Ads)", values: ["Setup", "Management", "Management"] },
  { label: "Google Ads", values: [false, "Optional", true] },
  { label: "Media Distribution (TV, Radio...)", values: ["Optional", "Optional", true] },
  { label: "Campaign report", values: [true, true, true] },
  { label: "Revisions", values: ["2", "4", "6"] },
];

const CellContent = ({ value }: { value: Cell }) => {
  if (value === true) return <Check className="w-4 h-4 text-primary" />;
  if (value === false) return <X className="w-4 h-4 text-foreground/40" />;
  return <span>{value}</span>;
};

export const Solutions = () => {
  const head = useReveal<HTMLDivElement>();
  const table = useReveal<HTMLDivElement>();

  return (
    <section id="solutions" className="bg-background text-foreground py-24 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div ref={head} className="reveal max-w-3xl mb-16 md:mb-24">
          <div className="eyebrow text-foreground/60 mb-5">Custom packages</div>
          <h2 className="font-display uppercase text-display-lg text-7xl font-sans font-medium">
            Custom solutions
          </h2>
        </div>

        <div ref={table} className="reveal overflow-x-auto">
          <div className="min-w-[900px] border border-foreground/10">
            {/* Header */}
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
              <div className="p-3 md:p-3.5 border-r border-foreground/10" />
              {formulas.map((f, i) => (
                <div
                  key={f}
                  className={[
                    "p-3 md:p-3.5 border-r border-foreground/10 last:border-r-0 font-display uppercase text-sm md:text-base leading-tight bg-accent text-accent-foreground",
                    i === 3 ? "flex items-center justify-center" : "",
                  ].join(" ")}
                >
                  {f}
                </div>
              ))}
            </div>

            {/* Body: 3 data columns + a Corporate column that spans all rows */}
            <div className="grid grid-cols-[1.2fr_1fr_1fr_1fr_1fr]">
              {/* Left columns: label + 3 formula values, one grid row per data row */}
              {rows.map((row) => (
                <div key={row.label} className="contents">
                  <div className="p-2.5 md:p-3 border-r border-t border-foreground/10 text-xs md:text-sm font-medium">
                    {row.label}
                  </div>
                  {row.values.map((value, i) => (
                    <div
                      key={i}
                      className="p-2.5 md:p-3 border-r border-t border-foreground/10 last:border-r-0 text-xs md:text-sm text-foreground/80 flex items-start bg-accent/10"
                    >
                      <CellContent value={value} />
                    </div>
                  ))}
                </div>
              ))}

              {/* CTA row for the first 3 formulas */}
              <div className="p-2.5 md:p-3 border-r border-t border-foreground/10" />
              {["Starter", "Growth", "Professional"].map((f) => (
                <div
                  key={f}
                  className="p-2.5 md:p-3 border-r border-t border-foreground/10 bg-accent/10"
                >
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-full bg-foreground text-background py-2 text-xs md:text-sm font-medium hover:bg-primary transition-colors"
                  >
                    Choose
                  </a>
                </div>
              ))}

              {/* Corporate column: single cell spanning all data rows + CTA row, centered button */}
              <div
                className="border-t border-l border-foreground/10 bg-accent/10 flex items-center justify-center p-4"
                style={{ gridRow: `1 / span ${rows.length + 1}`, gridColumn: 5 }}
              >
                <a
                  href="#contact"
                  className="text-sm md:text-base font-medium underline underline-offset-4 hover:text-primary transition-colors"
                >
                  Request a quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
