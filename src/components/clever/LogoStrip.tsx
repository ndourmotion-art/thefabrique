import adms from "@/assets/logo-adms.png.asset.json";
import ads from "@/assets/logo-ads.png.asset.json";
import calque from "@/assets/logo-Calque_1.png.asset.json";
import epi from "@/assets/logo-epi.png.asset.json";
import hd from "@/assets/logo-hd.png.asset.json";
import k2 from "@/assets/logo-k2.png.asset.json";
import mali from "@/assets/logo-mali.png.asset.json";
import pando from "@/assets/logo-Pando.png.asset.json";
import publs from "@/assets/logo-publs.png.asset.json";
import ue from "@/assets/logo-ue.png.asset.json";

const logos = [adms, ads, calque, epi, hd, k2, mali, pando, publs, ue];

export const LogoStrip = () => {
  const row = [...logos, ...logos];
  return (
    <section className="overflow-hidden py-10 md:py-14">
      <div className="flex items-center gap-12 md:gap-20 whitespace-nowrap animate-marquee-slow will-change-transform">
        {row.map((logo, i) => (
          <img
            key={i}
            src={logo.url}
            alt=""
            className="h-10 md:h-14 w-auto opacity-60 grayscale transition-opacity duration-300 hover:opacity-100 hover:grayscale-0 flex-shrink-0"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};
