import { useReveal } from "@/hooks/useReveal";

const stats = [
  { value: "150+", label: "Projets livrés avec succès" },
  { value: "14+", label: "Années d'expérience" },
  { value: "6+", label: "Pays atteints" },
  { value: "98%", label: "Taux de satisfaction client" },
];

const testimonials = [
  { quote: "Une équipe créative, réactive et à l'écoute.", author: "Awa D." },
  { quote: "Un rendu au-delà de nos attentes.", author: "Moussa S." },
  { quote: "Des idées fraîches qui font la différence.", author: "Fatou N." },
];

export const Stats = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className="reveal">
          <div className="eyebrow text-foreground/60 mb-5">À propos du studio</div>
          <h2 className="font-display uppercase text-display-lg text-7xl font-sans font-medium max-w-4xl">
            Des nombres en <span className="font-serif-italic normal-case text-primary">mouvement</span>.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 border-y border-foreground/15 py-14">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-6xl md:text-7xl text-primary">{s.value}</div>
              <div className="mt-3 eyebrow text-foreground/60">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-2xl border border-foreground/15 p-6">
              <p className="font-display normal-case text-xl leading-snug">"{t.quote}"</p>
              <div className="mt-4 eyebrow text-foreground/60">— {t.author}</div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};
