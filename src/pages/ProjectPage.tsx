import { Link, useParams } from "react-router-dom";
import { Nav } from "@/components/clever/Nav";
import { Footer } from "@/components/clever/Footer";
import { useReveal } from "@/hooks/useReveal";
import { ScrollTextReveal } from "@/components/clever/ScrollTextReveal";
import { getProject, projects } from "@/data/projects";

const ProjectPage = () => {
  const { slug = "" } = useParams();
  const project = getProject(slug);
  const heading = useReveal<HTMLDivElement>();

  if (!project) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Nav />
        <section className="pt-40 pb-24 mx-auto max-w-[1000px] px-6 lg:px-10 text-center">
          <h1 className="font-display uppercase text-5xl md:text-6xl">Project not found</h1>
          <Link to="/" className="inline-block mt-8 underline">← Back home</Link>
        </section>
        <Footer />
      </main>
    );
  }

  

  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollTextReveal />
      <Nav />

      <article>
        <header ref={heading} className="reveal pt-36 md:pt-44 pb-12 md:pb-16 mx-auto max-w-[1400px] px-6 lg:px-10">
          <Link to="/#work" className="text-sm text-foreground/60 hover:text-foreground">← All work</Link>
          <h1 className="font-display uppercase text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] mt-6">
            {project.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/70">
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </header>


        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {project.link ? (
            (() => {
              const match = project.link.match(/vimeo\.com\/(\d+)/);
              const vid = match?.[1];
              return vid ? (
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
                  <iframe
                    src={`https://player.vimeo.com/video/${vid}`}
                    className="absolute inset-0 h-full w-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title={project.title}
                  />
                </div>
              ) : (
                <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted">
                  <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
                </div>
              );
            })()
          ) : (
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-muted">
              <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
            </div>
          )}
        </div>

        <section className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-10 md:pt-12 pb-14 md:pb-20 text-left">
          <div className="eyebrow font-bold text-base md:text-lg text-foreground mb-4">LE PROJET</div>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/80 max-w-4xl">{project.description}</p>
        </section>


        <section className="mx-auto max-w-[1600px] px-6 lg:px-10 pb-24 md:pb-36 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {project.gallery.map((src, i) => (
            <div key={i} className="rounded-2xl bg-muted overflow-hidden">
              <img
                src={src}
                alt={`${project.title} ${i + 1}`}
                loading="lazy"
                className="w-full h-full aspect-video object-cover"
              />
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-[1600px] px-6 lg:px-10 pb-20 md:pb-28">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-foreground text-background font-bold text-sm md:text-base uppercase tracking-wide px-5 py-2">
              Autres projets
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
            {projects
              .filter((p) => p.slug !== project.slug)
              .map((p) => (
                <Link key={p.slug} to={`/work/${p.slug}`} className="group block">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200" />
                  </div>
                  <h3 className="mt-3 font-display uppercase text-sm md:text-base leading-tight group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-foreground/60">{p.tags.join(" • ")}</p>
                </Link>
              ))}
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
};

export default ProjectPage;
