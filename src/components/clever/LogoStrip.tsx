const logos = [
  "/logos/adms.png",
  "/logos/ads.png",
  "/logos/Calque_1.png",
  "/logos/epi.png",
  "/logos/hd.png",
  "/logos/k2.png",
  "/logos/mali.png",
  "/logos/Pando.png",
  "/logos/publs.png",
  "/logos/ue.png",
];

export const LogoStrip = () => {
  const row = [...logos, ...logos];
  return (
    <section className="overflow-hidden py-10 md:py-14">
      <div className="flex items-center gap-12 md:gap-20 whitespace-nowrap animate-marquee-slow will-change-transform">
        {row.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-10 md:h-14 w-auto opacity-60 grayscale transition-opacity duration-300 hover:opacity-100 hover:grayscale-0 flex-shrink-0"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};
