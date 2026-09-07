import { useReveal } from "@/hooks/useReveal";
import { Check, X } from "lucide-react";

const formulas = ["Starter", "Growth", "Professionnel", "Corporate"];

type Cell = string | boolean;

const rows: { label: string; values: [Cell, Cell, Cell] }[] = [
  { label: "Objectif", values: ["Faire connaître votre entreprise", "Générer plus de prospects", "Accélérer votre croissance"] },
  { label: "Audit & stratégie", values: [true, true, true] },
  { label: "Durée de campagne", values: ["2 mois", "2 mois", "3 mois"] },
  { label: "Conception graphique", values: ["2 visuels", "4 visuels", "6 visuels"] },
  { label: "Production vidéo", values: ["1 vidéo", "2 vidéos", "3 vidéos"] },
  { label: "Motion Design / IA", values: [false, "1 animation", "2 animations"] },
  { label: "Conception & Rédaction", values: [true, true, true] },
  { label: "Social Ads (Facebook, Instagram Ads)", values: ["Mise en place", "Gestion", "Gestion"] },
  { label: "Google Ads", values: [false, "Optionel", true] },
  { label: "Diffusion Média (TV, Radio...)", values: ["Optionel", "Optionel", true] },
  { label: "Rapport de campagne", values: [true, true, true] },
  { label: "Révisions", values: ["2", "4", "6"] },
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
          <div className="eyebrow text-foreground/60 mb-5">Packs sur mesure</div>
          <h2 className="font-display uppercase text-display-lg text-7xl font-sans font-medium">
            Solutions sur mesure
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
              {["Starter", "Growth", "Professionnel"].map((f) => (
                <div
                  key={f}
                  className="p-2.5 md:p-3 border-r border-t border-foreground/10 bg-accent/10"
                >
                  <a
                    href="#contact"
                    className="inline-flex w-full items-center justify-center rounded-full bg-foreground text-background py-2 text-xs md:text-sm font-medium hover:bg-primary transition-colors"
                  >
                    Choisir
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
                  Demandez un devis
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
