import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
const activationMarque = { url: "/media/activation-marque.jpg" };
const productionRealisation = { url: "/media/production-realisation.jpg" };
const conceptionRedaction = { url: "/media/conception-redaction.jpg" };
const brandingDeMarque = { url: "/media/branding-de-marque.jpg" };
const designDynamique = { url: "/media/design-dynamique.jpg" };
const designStatique = { url: "/media/design-statique.jpg" };

const services = [
  { title: "BRAND ACTIVATION", image: activationMarque.url },
  { title: "BRAND IDENTITY", image: brandingDeMarque.url },
  { title: "PRODUCTION & DIRECTION", image: productionRealisation.url },
  { title: "DYNAMIC DESIGN", image: designDynamique.url },
  { title: "STATIC DESIGN", image: designStatique.url },
  { title: "CONCEPT & COPYWRITING", image: conceptionRedaction.url },
];

// Duration of a "light" cycle: slow fade in + hold + fade out.
const FADE_MS = 1800;   // fade in/out duration
const HOLD_MS = 1400;   // hold at full brightness
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
      className="reveal group relative aspect-square flex items-center justify-center p-6 md:p-8 overflow-hidden transition-colors border border-surface-dark-foreground/30"
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

      <h3 data-no-reveal
          className="relative z-10 text-center font-display font-bold uppercase text-xl md:text-3xl leading-[1.1] transition-colors duration-700"
          style={{ color: on ? "#fff" : undefined, wordBreak: "keep-all", overflowWrap: "normal", hyphens: "none" }}>
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
      <div className="mx-auto max-w-[1600px] px-4 lg:px-6">
        <div ref={head} className="reveal max-w-3xl mb-16 md:mb-24">
          <div className="eyebrow text-surface-dark-foreground/80 mb-5">Services & Expertise</div>
          <h2 className="font-display uppercase text-display-lg text-7xl font-sans font-medium">
            Expertise
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
