import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import activationMarque from "@/assets/activation-marque.jpg.asset.json";
import productionRealisation from "@/assets/production-realisation.jpg.asset.json";
import conceptionRedaction from "@/assets/conception-redaction.jpg.asset.json";
import brandingDeMarque from "@/assets/branding-de-marque.jpg.asset.json";
import designDynamique from "@/assets/design-dynamique.jpg.asset.json";
import designStatique from "@/assets/design-statique.jpg.asset.json";

const services = [
  { title: "ACTIVATION DE MARQUE", image: activationMarque.url },
  { title: "BRANDING DE MARQUE", image: brandingDeMarque.url },
  { title: "PRODUCTION & RÉALISATION", image: productionRealisation.url },
  { title: "DESIGN DYNAMIQUE", image: designDynamique.url },
  { title: "DESIGN STATIQUE", image: designStatique.url },
  { title: "CONCEPTION & RÉDACTION", image: conceptionRedaction.url },
];

// Durée d'un cycle "lumière" : fondu lent d'entrée + maintien + fondu de sortie.
const FADE_MS = 1800;   // durée du fondu in/out
const HOLD_MS = 1400;   // maintien à pleine luminosité
const CYCLE_MS = FADE_MS * 2 + HOLD_MS;

const Card = ({
  s,
  i,
  active,
  hovered,
}: {
  s: typeof services[number];
  i: number;
  active: boolean;
  hovered: boolean;
}) => {
  const ref = useReveal<HTMLDivElement>();
  const on = active || hovered;
  return (
    <div
      ref={ref}
      className="reveal group relative aspect-square flex items-center justify-center p-5 md:p-6 overflow-hidden transition-colors border border-white/20"
      style={{ transitionDelay: `${i * 60}ms` }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity ease-in-out"
        style={{
          backgroundImage: `url(${s.image})`,
          opacity: on ? 1 : 0,
          transitionDuration: `${FADE_MS}ms`,
        }}
      />
      <div
        className="absolute inset-0 bg-black/40 transition-opacity ease-in-out"
        style={{
          opacity: on ? 1 : 0,
          transitionDuration: `${FADE_MS}ms`,
        }}
      />

      <h3 className="relative z-10 text-center font-display uppercase text-2xl md:text-3xl leading-[0.95] transition-colors duration-700"
          style={{ color: on ? "#fff" : undefined }}>
        {s.title}
      </h3>
    </div>
  );
};


export const Services = () => {
  const head = useReveal<HTMLDivElement>();
  const [activeIndex, setActiveIndex] = useState<number>(() =>
    Math.floor(Math.random() * services.length)
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const tick = () => {
      setActiveIndex((prev) => {
        const count = services.length;
        if (count <= 1) return prev;
        let idx = Math.floor(Math.random() * count);
        while (idx === prev) {
          idx = Math.floor(Math.random() * count);
        }
        return idx;
      });
    };

    const id = window.setInterval(tick, CYCLE_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="services" className="bg-surface-dark text-surface-dark-foreground py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={head} className="reveal max-w-3xl mb-16 md:mb-24">
          <div className="eyebrow text-surface-dark-foreground/60 mb-5">Services & Expertises</div>
          <h2 className="font-display uppercase text-display-lg text-7xl font-sans font-medium">
            Expertises
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card s={s} i={i} active={activeIndex === i} hovered={hoveredIndex === i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
