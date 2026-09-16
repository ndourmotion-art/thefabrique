import { useEffect } from "react";

/**
 * Scroll-triggered "self-writing" text motion.
 * Headings reveal letter by letter, body copy word by word,
 * each piece drawing in with a staggered rise + unblur.
 */
const HEADINGS = ["H1", "H2", "H3", "H4"];

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

function splitInto(el: HTMLElement, mode: "letter" | "word") {
  const text = el.textContent ?? "";
  const pieces = mode === "letter" ? Array.from(text) : text.split(/(\s+)/);
  const frag = document.createDocumentFragment();
  let index = 0;

  pieces.forEach((piece) => {
    if (piece.trim() === "") {
      frag.appendChild(document.createTextNode(piece === "" ? " " : piece));
      return;
    }
    const span = document.createElement("span");
    span.className = mode === "letter" ? "text-draw-letter" : "text-draw-word";
    span.textContent = piece;
    span.style.setProperty("--draw-delay", `${Math.min(index * (mode === "letter" ? 26 : 55), 1400)}ms`);
    frag.appendChild(span);
    index += 1;
  });

  el.textContent = "";
  el.appendChild(frag);
}

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
        if (el.closest("nav, header[data-no-reveal]")) return;
        if (el.dataset.drawReady === "true") return;
        if (!el.textContent?.trim()) return;

        el.dataset.drawReady = "true";

        // Opt-out elements (and anything with markup inside) just slide in whole.
        const skipSplit =
          el.closest("[data-no-reveal]") !== null || el.children.length > 0;

        if (skipSplit) {
          el.classList.add("slide-reveal");
        } else {
          splitInto(el, HEADINGS.includes(el.tagName) ? "letter" : "word");
          el.classList.add("text-draw");
        }
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
