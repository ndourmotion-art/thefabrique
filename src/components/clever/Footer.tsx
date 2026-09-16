import { Facebook, Instagram, Linkedin } from "lucide-react";

const logo = "/media/fabrique-logo.png";

const VimeoIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
    <path d="M21.2 7.1c-.1 2.7-2 6.3-5.7 10.9-3.8 4.9-7 7.4-9.6 7.4-1.6 0-3-1.5-4.1-4.5L-.5 12.7C-1.3 9.7-2.2 8.2-3 8.2c-.2 0-.9.4-2.1 1.3L-6.4 7.8c1.3-1.1 2.7-2.3 4-3.4C-.6 2.9.8 2.1 1.8 2c2.4-.2 3.9 1.4 4.5 4.8.6 3.7 1.1 6 1.3 6.9.7 3.1 1.4 4.6 2.2 4.6.6 0 1.6-1 2.9-3 1.3-2 2-3.5 2.1-4.5.2-1.7-.5-2.5-2.1-2.5-.7 0-1.5.2-2.3.5 1.5-5 4.4-7.4 8.7-7.3 3.2.1 4.7 1.9 4.5 5.6h-2.4Z" transform="translate(5 0) scale(.82)" />
  </svg>
);

const socials = [
  { label: "Vimeo", href: "https://vimeo.com", icon: VimeoIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { label: "Facebook", href: "https://www.facebook.com", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
];

export const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-foreground/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <img src={logo} alt="The FABRIQUE" className="h-16 w-auto" />
          <div className="flex flex-col items-start gap-5 md:items-end">
            <nav className="flex items-center gap-2" aria-label="Social media">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon />
                </a>
              ))}
            </nav>
            <div className="text-sm text-foreground/60">
              © 2026 The Fabrique. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};