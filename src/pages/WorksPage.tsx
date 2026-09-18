import { ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav } from "@/components/clever/Nav";
import { Footer } from "@/components/clever/Footer";
import { ScrollTextReveal } from "@/components/clever/ScrollTextReveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useReveal } from "@/hooks/useReveal";
import { useLenis } from "@/hooks/useLenis";

const WorksPage = () => {
  const heading = useReveal<HTMLDivElement>();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    const frame = window.requestAnimationFrame(() => window.scrollTo(0, 0));
    return () => window.cancelAnimationFrame(frame);
  }, []);

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

      <Footer />
    </main>
  );
};

export default WorksPage;