import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const logoAsset = { url: "/media/fabrique-logo.png" };
const logo = logoAsset.url;
import { cn } from "@/lib/utils";

const links = [
  { label: "Works", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [fading, setFading] = useState(false);
  const location = useLocation();
  

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTarget = (href: string) => {
    if (!href.startsWith("#")) return;
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    const targetY = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo(0, targetY);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setFading(true);
      setTimeout(() => {
        scrollToTarget(href);
        history.replaceState(null, "", href);
        setTimeout(() => setFading(false), 50);
      }, 350);
    }
  };


  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "backdrop-blur-md bg-background/75 py-[18px] border-b border-foreground/10" : "py-6 bg-transparent"
      )}
    >
      <div className="w-full px-6 lg:px-10 flex items-center justify-between">
        <Link
          to="/"
          onClick={(e) => {
            if (location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-2 shrink-0"
          aria-label="Cleverafrica home"
        >
          <img src={logo} alt="The FABRIQUE" className="h-14 md:h-16 w-auto" />
        </Link>

        <div className="hidden md:flex">
          <nav className="flex items-center gap-1 rounded-full border border-foreground/10 bg-background/50 backdrop-blur px-2 py-1.5 opacity-85">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                className="menu-link px-4 py-1.5 text-lg font-semibold text-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/15"
              >
                <span className="menu-link-text">
                  <span className="menu-link-label menu-link-label-top">{l.label}</span>
                  <span className="menu-link-label menu-link-label-bottom" aria-hidden="true">{l.label}</span>
                </span>
              </a>
            ))}
          </nav>
        </div>



        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={cn("h-0.5 bg-foreground transition-transform", open && "translate-y-2 rotate-45")} />
            <span className={cn("h-0.5 bg-foreground transition-opacity", open && "opacity-0")} />
            <span className={cn("h-0.5 bg-foreground transition-transform", open && "-translate-y-2 -rotate-45")} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-6 mt-3 rounded-2xl bg-background border border-foreground/10 p-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { setOpen(false); handleClick(e, l.href); }}
              className="menu-link px-4 py-3 rounded-xl text-lg font-medium hover:bg-accent/10"
            >
              <span className="menu-link-text">
                <span className="menu-link-label menu-link-label-top">{l.label}</span>
                <span className="menu-link-label menu-link-label-bottom" aria-hidden="true">{l.label}</span>
              </span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { setOpen(false); handleClick(e, "#contact"); }}
            className="mt-2 inline-flex items-center justify-between rounded-xl bg-foreground text-background px-4 py-3 text-base font-medium"
          >
            Request a quote <span>→</span>
          </a>

        </div>
      )}
      <div
        className={cn(
          "fixed inset-0 z-40 pointer-events-none bg-background transition-opacity duration-300",
          fading ? "opacity-95" : "opacity-0"
        )}
        aria-hidden="true"
      />

    </header>
  );
};
