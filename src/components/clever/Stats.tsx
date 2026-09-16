import { useReveal } from "@/hooks/useReveal";

const stats = [
  { value: "150+", label: "Projects delivered successfully" },
  { value: "14+", label: "Years of experience" },
  { value: "6+", label: "Countries reached" },
  { value: "98%", label: "Client satisfaction rate" },
];

const testimonials = [
  { quote: "A creative, responsive, and attentive team.", author: "Awa D." },
  { quote: "A result beyond our expectations.", author: "Moussa S." },
  { quote: "Fresh ideas that make a difference.", author: "Fatou N." },
];

export const Stats = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-4 lg:px-6">
        <div ref={ref} className="reveal">
          <div className="eyebrow text-foreground/80 mb-5">About the studio</div>
          <h2 className="font-display uppercase text-display-lg font-bold max-w-4xl">
            <span className="block">Numbers in</span>
            <span className="block">motion.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 border-y border-foreground/20 py-16 md:py-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display font-extrabold text-6xl md:text-8xl text-primary">{s.value}</div>
              <div className="mt-4 text-sm md:text-base uppercase font-semibold text-foreground/80">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-2xl border border-foreground/15 p-6">
              <p className="font-display normal-case font-semibold text-xl md:text-2xl leading-snug">"{t.quote}"</p>
              <div className="mt-4 eyebrow text-foreground/80">— {t.author}</div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};
