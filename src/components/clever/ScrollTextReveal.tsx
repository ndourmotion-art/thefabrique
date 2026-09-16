import { useEffect } from "react";

/**
 * Reveals section copy with one smooth slide as it enters the viewport.
 * No letter/word splitting — the whole block glides into place.
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
          el.classList.add("is-visible");
          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    const attach = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (el.closest("nav, header[data-no-reveal], [data-no-reveal]")) return;
        if (el.dataset.slideReady === "true") return;
        if (!el.textContent?.trim()) return;
        el.dataset.slideReady = "true";
        el.classList.add("slide-reveal");
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
