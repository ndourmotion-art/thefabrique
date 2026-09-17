import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { projects, type Project } from "@/data/projects";
import { Button } from "@/components/ui/button";

const getVimeoId = (link?: string) => {
  if (!link) return null;
  const m = link.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return m ? m[1] : null;
};

const ProjectCard = ({
  project,
  index,
  featured = false,
}: {
  project: Project;
  index: number;
  featured?: boolean;
}) => {
  const ref = useReveal<HTMLAnchorElement>();
  const vimeoId = getVimeoId(project.link);
  const [hovered, setHovered] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
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
      id={`project-${index}`}
      to={`/work/${project.slug}`}
      className="reveal work-project group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setCursor((current) => ({ ...current, visible: false }));
      }}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        setCursor({
          x: event.clientX - bounds.left,
          y: event.clientY - bounds.top,
          visible: true,
        });
      }}
    >
      <article>
        <div className={`work-project__media ${featured ? "work-project__media--featured" : ""} relative overflow-hidden bg-muted`}>
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

          {project.video && hovered && (
            <video
              src={project.video}
              poster={project.image}
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            />
          )}

          <div className="work-project__shade absolute inset-0" />
          <div className="work-project__overlay absolute inset-0 flex flex-col justify-center px-6 md:px-14">
            <h3 data-no-reveal className="work-project__title whitespace-pre-line font-display uppercase font-sans font-black text-primary-foreground">
              {project.title}
            </h3>
          </div>
          <span
            className={`work-project__view ${cursor.visible ? "is-visible" : ""}`}
            style={{ left: cursor.x, top: cursor.y }}
          >
            <span>View project</span>
            <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
      </article>
    </Link>
  );
};


export const FeaturedWork = () => {
  const heading = useReveal<HTMLDivElement>();
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const projectElements = projects
      .map((_, index) => document.getElementById(`project-${index}`))
      .filter((element): element is HTMLElement => Boolean(element));
    if (!projectElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number(visible.target.id.replace("project-", ""));
        if (Number.isFinite(index)) setActiveProject(index);
      },
      { threshold: [0.3, 0.55, 0.75] },
    );

    projectElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const scrollToProject = (index: number) => {
    document.getElementById(`project-${index}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="work" className="works-showcase py-24 md:py-36">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div ref={heading} className="reveal mb-16 flex items-end justify-between gap-8 md:mb-24">
          <div>
            <div className="eyebrow text-foreground/60 mb-4">Selected projects</div>
            <h2 className="font-display uppercase text-display-lg text-7xl font-sans font-medium">Featured works</h2>
          </div>
          <p className="hidden max-w-sm text-right text-base leading-relaxed text-foreground/60 md:block">
            Advertising, film and motion crafted to make brands impossible to overlook.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[1600px] px-2 md:px-4">
        <div className="work-projects">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              index={i}
              featured={i === projects.length - 1}
            />
          ))}
        </div>

        <div className="mt-14 flex justify-center md:mt-20">
          <Button
            asChild
            className="rounded-full bg-foreground px-8 py-6 text-sm font-extrabold uppercase tracking-wide text-background hover:bg-accent hover:text-accent-foreground md:px-10 md:text-base"
          >
            <Link to="/works">
              View all works
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>

      <nav className="work-project-nav" aria-label="Jump between projects">
        {projects.map((project, index) => (
          <Button
            key={project.slug}
            type="button"
            variant="ghost"
            size="icon"
            aria-label={`Go to ${project.title}`}
            aria-current={index === activeProject ? "true" : undefined}
            onClick={() => scrollToProject(index)}
            className="work-project-nav__button"
          >
            <span className="work-project-nav__line" />
          </Button>
        ))}
      </nav>
    </section>
  );
};
