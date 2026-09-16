import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { projects, type Project } from "@/data/projects";

const layout = [
  { area: "one", cardClass: "aspect-[4/3] md:aspect-[2/1]" },
  { area: "two", cardClass: "aspect-[4/3] md:aspect-square" },
  { area: "three", cardClass: "aspect-[4/3] md:aspect-square" },
  { area: "four", cardClass: "aspect-[4/3] md:aspect-square" },
  { area: "five", cardClass: "aspect-[4/3] md:aspect-square" },
  { area: "six", cardClass: "aspect-[4/3] md:aspect-[3/1]" },
  { area: "seven", cardClass: "aspect-[4/3] md:aspect-square" },
  { area: "eight", cardClass: "aspect-[4/3] md:aspect-square" },
  { area: "nine", cardClass: "aspect-[4/3] md:aspect-square" },
];

const getVimeoId = (link?: string) => {
  if (!link) return null;
  const m = link.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return m ? m[1] : null;
};

const ProjectCard = ({
  project,
  area,
  cardClass,
}: {
  project: Project;
  area: string;
  cardClass: string;
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
      className="reveal group block"
      style={{ gridArea: area }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`relative ${cardClass} overflow-hidden rounded-2xl bg-muted`}>
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />

        {vimeoId && hovered && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <iframe
              ref={frameRef}
              src={`https://player.vimeo.com/video/${vimeoId}?background=1&autoplay=1&muted=1&loop=1&autopause=0&badge=0&byline=0&title=0&portrait=0&controls=0#t=0s`}
              title={project.title}
              allow="autoplay"
              className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 border-0"
              style={{ minWidth: "177.78%", minHeight: "100%" }}
            />
          </div>
        )}

        {!vimeoId && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/95 transition-colors duration-200" />
        )}

        <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3
            className="font-display uppercase text-2xl md:text-3xl font-sans text-white"
            style={vimeoId ? { textShadow: "0 2px 18px rgba(0,0,0,0.65)" } : undefined}
          >
            {project.title}
          </h3>
          <div
            className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-white/80"
            style={vimeoId ? { textShadow: "0 2px 12px rgba(0,0,0,0.65)" } : undefined}
          >
            {project.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};


export const FeaturedWork = () => {
  const heading = useReveal<HTMLDivElement>();
  return (
    <section id="work" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={heading} className="reveal mb-12 md:mb-16">
          <div className="eyebrow text-foreground/60 mb-4">Selection</div>
          <h2 className="font-display uppercase text-display-lg text-7xl font-sans font-medium">Our works</h2>
        </div>

        <div className="portfolio-bento">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              area={layout[i]?.area ?? `area-${i}`}
              cardClass={layout[i]?.cardClass ?? "aspect-[4/3]"}
            />
          ))}
        </div>

        <div className="mt-12 md:mt-16 flex justify-center">
          <a
            href="#work"
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-3 text-sm md:text-base font-medium hover:bg-primary transition-colors"
          >
            All projects
          </a>
        </div>
      </div>
    </section>
  );
};
