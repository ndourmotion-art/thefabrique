import { useReveal } from "@/hooks/useReveal";

export const Founder = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-36 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className="reveal grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            <div className="relative aspect-square max-w-md rounded-full overflow-hidden bg-muted">
              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80"
                alt="Founder portrait"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="eyebrow text-foreground/60 mb-4">Fondateur</div>
            <h2 className="font-display uppercase text-display-md">
              Guidés par la vision, <br />
              <span className="font-serif-italic normal-case text-primary">portés par le savoir-faire.</span>
            </h2>
            <div className="mt-8 space-y-5 text-base md:text-lg text-foreground/75 max-w-xl">
              <p>
                Cleverafrica est une petite équipe senior obsédée par les détails qui rendent les marques inoubliables — typographie, motion, narration, rythme.
              </p>
              <p>
                Nous accompagnons fondateurs, responsables marketing et créateurs de culture pour bâtir des systèmes d'identité et des contenus qui voyagent loin, sur le continent et dans le monde.
              </p>
              <p>
                Si vous lancez quelque chose qui compte, nous serions ravis d'en parler.
              </p>
            </div>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-base font-medium hover:bg-primary transition-colors group"
            >
              Travailler avec nous
              <span className="h-9 w-9 rounded-full bg-background text-foreground flex items-center justify-center group-hover:rotate-45 transition-transform">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
