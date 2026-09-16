const heroAsset = { url: "/media/hero-car.jpg" };

const heroImage = heroAsset.url;

const WrittenLine = ({ text, start }: { text: string; start: number }) => (
  <>
    {Array.from(text).map((character, index) => (
      <span
        key={`${character}-${index}`}
        className="hero-opening__glyph"
        style={{ "--hero-write-delay": `${start + index * 42}ms` } as React.CSSProperties}
      >
        {character === " " ? "\u00A0" : character}
      </span>
    ))}
  </>
);

type HeroProps = {
  introVisible?: boolean;
};

export const Hero = ({ introVisible = true }: HeroProps) => {
  return (
    <section id="top" className={`hero-opening relative pt-20 md:pt-24 pb-16 md:pb-24 overflow-hidden ${introVisible ? "hero-opening--visible" : ""}`}>
      <div className="mx-auto max-w-[1600px] px-2 md:px-4">
        <div className="hero-opening__media relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-2xl bg-muted">
          <img
            src={heroImage}
            alt="Clever Africa hero"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-14">
            <h1 className="hero-opening__title font-display uppercase tracking-tight leading-[0.9]" data-no-reveal>
              <span className="hero-opening__line block font-sans font-black text-background text-[clamp(2.6rem,8vw,6.5rem)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                <WrittenLine text="Creative" start={390} />
              </span>
              <span className="hero-opening__line hero-opening__line--second block font-sans font-black text-accent text-[clamp(2.6rem,8vw,6.5rem)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                <WrittenLine text="Powerhouse" start={730} />
              </span>
            </h1>

            <div className="hero-opening__support eyebrow text-background/90 mt-6 md:mt-8 text-[0.7rem] md:text-sm tracking-[0.18em]" data-no-reveal>
              For brands, organizations, and startups of all sizes.
            </div>

            <div className="hero-opening__actions mt-8 md:mt-10 flex flex-wrap items-center gap-4" data-no-reveal>
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-base font-medium hover:bg-primary transition-colors"
              >
                View work
                <span className="h-9 w-9 rounded-full bg-background text-foreground flex items-center justify-center group-hover:rotate-45 transition-transform">
                  ↗
                </span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-base font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                Request a quote
              </a>
            </div>
          </div>
        </div>

      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 w-[36rem] h-[36rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 60%)" }}
      />
    </section>
  );
};
