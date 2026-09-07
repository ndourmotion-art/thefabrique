const tools = [
  "Figma", "After Effects", "Cinema 4D", "Blender", "Spline", "Premiere",
  "Photoshop", "Illustrator", "Runway", "Midjourney", "Webflow", "Notion",
];

export const Toolbox = () => {
  const row = [...tools, ...tools];
  return (
    <section className="py-20 md:py-28 border-y border-foreground/10 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mb-10">
        <div className="eyebrow text-foreground/60">Notre boîte à outils</div>
      </div>
      <div className="flex items-center gap-12 whitespace-nowrap animate-marquee-fast will-change-transform">
        {row.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-12 text-2xl md:text-3xl font-display uppercase text-foreground/70">
            {t}
            <span className="h-3 w-3 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </section>
  );
};
