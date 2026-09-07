import { useEffect } from "react";

/**
 * Anime tous les textes des sections lorsqu'ils apparaissent au scroll.
 * Aucun markup à modifier : les éléments de texte sont détectés puis observés.
 */
const SELECTOR = [
  "main section h1",
  "main section h2",
  "main section h3",
  "main section h4",
  "main section p",
  "main section li",
  "main section blockquote",
  "main section span[data-reveal-text]",
].join(",");

export function ScrollTextReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const siblings = Array.from(
            el.parentElement?.querySelectorAll<HTMLElement>(".text-reveal") ?? []
          );
          const index = Math.max(0, siblings.indexOf(el));
          el.style.transitionDelay = `${Math.min(index * 90, 450)}ms`;
          el.classList.add("is-visible");
          observer.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    const attach = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (el.closest("nav, header[data-no-reveal], [data-no-reveal]")) return;
        if (el.classList.contains("text-reveal")) return;
        if (!el.textContent?.trim()) return;
        el.classList.add("text-reveal");
        observer.observe(el);
      });
    };

    attach();
    const mo = new MutationObserver(() => attach());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      observer.disconnect();
    };
  }, []);

  return null;
}
