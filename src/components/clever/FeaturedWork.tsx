import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { projects, type Project } from "@/data/projects";

const getVimeoId = (link?: string) => {
  if (!link) return null;
  const m = link.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return m ? m[1] : null;
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = useReveal<HTMLAnchorElement>();
  const vimeoId = getVimeoId(project.link);
  const [hovered, setHovered] = useState(false);
  const frameRef = useRef<HTMLIFrameElement | null>(null);
  const timerRef = useRef<number | null>(null);

  // 3-second loop: restart from the beginning every 3s
  useEffect(() => {
    if (!hovered || !vimeoId) return;
    timerRef.current = window.setInterval(() => {
      frameRef.current?.contentWindow?.postMessage(
        JSON.stringify({ method: "setCurrentTime", value: 0 }),
        "*"
      );
    }, 3000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [hovered, vimeoId]);

  return (
    <Link
      ref={ref}
      to={`/work/${project.slug}`}
      className={`reveal work-project group block ${index % 2 ? "work-project--offset" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <article>
        <div className="work-project__media relative overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.title}
            loading={index < 2 ? "eager" : "lazy"}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
          />

          {vimeoId && hovered && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
              <iframe
                ref={frameRef}
                src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&muted=1&loop=1&autopause=0&badge=0&byline=0&title=0&portrait=0&controls=0#t=0s`}
                title=""
                tabIndex={-1}
                allow="autoplay"
                className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 border-0"
                style={{ minWidth: "177.78%", minHeight: "100%" }}
              />
            </div>
          )}

          <div className="work-project__shade absolute inset-0" />
          <span className="work-project__number absolute left-5 top-5 md:left-7 md:top-7">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="work-project__view absolute bottom-5 right-5 md:bottom-7 md:right-7">
            <span>View project</span>
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>

        <div className="work-project__caption mt-5 grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <h3 className="work-project__title font-display uppercase font-sans font-medium">
              {project.title}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/60 md:text-base">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs uppercase text-foreground/60 md:justify-end md:text-sm">
            <span>{project.client}</span>
            <span>{project.year}</span>
            <span>{project.tags.join(" · ")}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};


export const FeaturedWork = () => {
  const heading = useReveal<HTMLDivElement>();
  return (
    <section id="work" className="works-showcase py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div ref={heading} className="reveal mb-16 flex items-end justify-between gap-8 md:mb-24">
          <div>
            <div className="eyebrow text-foreground/60 mb-4">Selected projects</div>
            <h2 className="font-display uppercase text-display-lg text-7xl font-sans font-medium">Our works</h2>
          </div>
          <p className="hidden max-w-sm text-right text-base leading-relaxed text-foreground/60 md:block">
            Advertising, film and motion crafted to make brands impossible to overlook.
          </p>
        </div>

        <div className="work-projects">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
