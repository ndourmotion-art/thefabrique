const items = Array.from({ length: 12 }, () => "SOYEZ VISIBLE");

export const LogoMarquee = () => {
  const row = [...items, ...items];
  return (
    <section className="border-y border-foreground/10 overflow-hidden bg-stone-200 py-2">
      <div className="flex items-center gap-8 whitespace-nowrap animate-marquee will-change-transform">
        {row.map((name, i) => (
          <span
            key={i}
            className="font-sans uppercase text-sm md:text-base font-semibold text-accent"
          >
            {name}
            <span className="mx-4 text-accent">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
};
