import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/700.css";
import { ArrowUpRight, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nav } from "@/components/clever/Nav";
import { Footer } from "@/components/clever/Footer";
import { ScrollTextReveal } from "@/components/clever/ScrollTextReveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useReveal } from "@/hooks/useReveal";
import { useLenis } from "@/hooks/useLenis";

const gallery = [
  { src: "/media/portfolio/ads-mobility-01.jpg", title: "ADS Mobility", type: "Campaign design" },
  { src: "/media/portfolio/micha-glace-01.jpg", title: "Micha Glace", type: "Character campaign" },
  { src: "/media/portfolio/ads-mobility-02.jpg", title: "Zero Traffic", type: "Campaign design" },
  { src: "/media/portfolio/micha-glace-02.jpg", title: "ChocoVanille", type: "Visual identity" },
  { src: "/media/portfolio/micha-glace-03.jpg", title: "Micha at School", type: "Social campaign" },
  { src: "/media/portfolio/micha-glace-04.jpg", title: "Strawberry Micha", type: "Character campaign" },
  { src: "/media/portfolio/patissiere-01.jpg", title: "La Pâtissière", type: "Packaging campaign" },
  { src: "/media/portfolio/patissiere-02.jpg", title: "Fati", type: "Packaging campaign" },
];

const WorksPage = () => {
  const heading = useReveal<HTMLDivElement>();
  const galleryHeading = useReveal<HTMLDivElement>();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  useLenis(true);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    const frame = window.requestAnimationFrame(() => window.scrollTo(0, 0));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (selectedImage === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
      if (event.key === "ArrowRight") setSelectedImage((current) => current === null ? null : (current + 1) % gallery.length);
      if (event.key === "ArrowLeft") setSelectedImage((current) => current === null ? null : (current - 1 + gallery.length) % gallery.length);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedImage]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollTextReveal />
      <Nav />

      <section className="pt-36 md:pt-44 pb-16 md:pb-24">
        <div ref={heading} className="reveal mx-auto max-w-[1600px] px-6 lg:px-10">
          <div className="eyebrow mb-4 text-foreground/70">All projects</div>
          <h1 className="font-display uppercase text-[clamp(3rem,10vw,10rem)] font-black leading-[0.88]">
            All works
          </h1>
          <p className="mt-8 max-w-2xl text-xl font-semibold leading-relaxed text-foreground/70 md:text-2xl">
            Advertising, film, identity and motion projects made for brands across Africa and beyond.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-2 pb-24 md:px-4 md:pb-36">
        <div className="grid gap-5 md:grid-cols-2 md:gap-8 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className={`group block ${index === projects.length - 1 ? "md:col-span-2 xl:col-span-2" : ""}`}
            >
              <article className="h-full">
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-muted md:aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading={index < 3 || index === projects.length - 1 ? "eager" : "lazy"}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/20" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-6 px-2">
                  <div>
                    <h2 data-no-reveal className="whitespace-pre-line font-display text-2xl font-black uppercase leading-[0.95] md:text-4xl">
                      {project.title}
                    </h2>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    size="icon"
                    className="shrink-0 rounded-full border border-foreground/15 bg-background text-foreground group-hover:bg-accent group-hover:text-accent-foreground"
                    aria-label={`View ${project.title.replace("\n", " ")}`}
                  >
                    <span>
                      <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </Button>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="portfolio-gallery bg-secondary py-24 md:py-36" aria-labelledby="visual-work-title">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
          <div ref={galleryHeading} className="reveal mb-14 flex flex-col gap-8 border-b border-foreground/10 pb-10 md:mb-20 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="portfolio-body text-xs font-semibold uppercase text-primary">Image archive / 01—08</div>
              <h2 id="visual-work-title" data-no-reveal className="portfolio-display mt-4 max-w-4xl text-[clamp(3rem,8vw,8rem)] font-bold uppercase leading-[0.86]">
                Visual works
              </h2>
            </div>
            <p className="portfolio-body max-w-sm text-base leading-relaxed text-muted-foreground md:text-right md:text-lg">
              Campaign visuals, character design and graphic worlds created for brands with something to say.
            </p>
          </div>

          <div className="columns-1 gap-6 md:columns-2 md:gap-8 xl:columns-3">
            {gallery.map((item, index) => (
              <article key={item.src} className="mb-6 break-inside-avoid md:mb-8">
                <button
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className="group block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
                  aria-label={`Open ${item.title}`}
                >
                  <span className="relative block overflow-hidden rounded-[1.5rem] bg-card shadow-sm ring-1 ring-foreground/5 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-2xl md:rounded-[2rem]">
                    <img
                      src={item.src}
                      alt={`${item.title} — ${item.type}`}
                      loading={index < 3 ? "eager" : "lazy"}
                      className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                    />
                    <span className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />
                    <span className="absolute right-4 top-4 grid h-11 w-11 translate-y-2 place-items-center rounded-full bg-background text-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:right-6 md:top-6">
                      <Expand className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </span>
                  <span className="portfolio-body mt-4 flex items-baseline justify-between gap-4 px-1">
                    <span className="text-base font-semibold text-foreground md:text-lg">{item.title}</span>
                    <span className="text-xs uppercase text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                  </span>
                  <span className="portfolio-body mt-1 block px-1 text-sm text-muted-foreground">{item.type}</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`${gallery[selectedImage].title} image viewer`}
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={gallery[selectedImage].src}
            alt={`${gallery[selectedImage].title} — ${gallery[selectedImage].type}`}
            className="max-h-[88vh] max-w-[90vw] object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="absolute right-4 top-4 rounded-full md:right-8 md:top-8"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image viewer"
          >
            <X className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full md:left-8"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage((selectedImage - 1 + gallery.length) % gallery.length);
            }}
            aria-label="Previous artwork"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full md:right-8"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedImage((selectedImage + 1) % gallery.length);
            }}
            aria-label="Next artwork"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          <div className="portfolio-body absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-sm text-background md:bottom-7">
            <span className="font-semibold">{gallery[selectedImage].title}</span>
            <span className="mx-2 text-background/50">/</span>
            <span className="text-background/70">{String(selectedImage + 1).padStart(2, "0")} of {String(gallery.length).padStart(2, "0")}</span>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default WorksPage;