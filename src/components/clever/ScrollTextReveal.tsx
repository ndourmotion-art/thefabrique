import { useEffect } from "react";

/**
 * Animates section copy as it appears on scroll.
 * Headings draw in letter-by-letter; supporting copy follows word-by-word.
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

    const wrapTextNode = (node: Text, mode: "letter" | "word", startIndex: number) => {
      const text = node.textContent ?? "";
      const parts = mode === "letter" ? Array.from(text) : text.split(/(\s+)/);
      const fragment = document.createDocumentFragment();
      let index = startIndex;

      parts.forEach((part) => {
        if (!part || /^\s+$/.test(part)) {
          fragment.appendChild(document.createTextNode(part));
          return;
        }

        const span = document.createElement("span");
        span.className = mode === "letter" ? "text-draw-letter" : "text-draw-word";
        span.textContent = part;
        span.style.setProperty("--draw-index", String(index));
        fragment.appendChild(span);
        index += 1;
      });

      node.replaceWith(fragment);
      return index;
    };

    const prepare = (el: HTMLElement) => {
      if (el.dataset.textDrawReady === "true") return;
      el.dataset.textDrawReady = "true";

      const isHeading = /^H[1-4]$/.test(el.tagName);
      const mode = isHeading ? "letter" : "word";
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      const nodes: Text[] = [];
      let current = walker.nextNode();

      while (current) {
        if (current.textContent?.trim()) nodes.push(current as Text);
        current = walker.nextNode();
      }

      let index = 0;
      nodes.forEach((node) => {
        index = wrapTextNode(node, mode, index);
      });
      el.classList.add("text-draw");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("is-visible");
          observer.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    const attach = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (el.closest("nav, header[data-no-reveal], [data-no-reveal]")) return;
        if (el.dataset.textDrawReady === "true") return;
        if (!el.textContent?.trim()) return;
        prepare(el);
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
