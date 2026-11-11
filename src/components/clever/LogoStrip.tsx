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

const logoNames = ["ADEMAS", "ADS Autoroutes du Sénégal", "Embassy of the People's Republic of China", "Epiroc", "H&D Industries", "k2o.com", "Mali Ministry of Justice and Human Rights", "Pandorama", "AG Partners Publicis Africa", "European Union Delegation in Senegal"];

export const LogoStrip = () => {
  const row = [...logos, ...logos];
  return (
    <section className="overflow-hidden py-10 md:py-14">
      <div className="flex items-center gap-12 md:gap-20 whitespace-nowrap animate-marquee-slow will-change-transform">
        {row.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={i < logos.length ? `${logoNames[i]} logo` : ""}
            className="h-10 md:h-14 w-auto opacity-60 grayscale transition-opacity duration-300 hover:opacity-100 hover:grayscale-0 flex-shrink-0"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};
