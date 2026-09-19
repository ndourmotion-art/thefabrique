import { Link } from "react-router-dom";

const logo = "/media/fabrique-logo.png";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
];

const legalLinks = [
  { label: "Terms and Policies", to: "/terms-and-policies" },
  { label: "Privacy Policy", to: "/privacy-policy" },
];

export const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-foreground/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <img src={logo} alt="The FABRIQUE" className="h-16 w-auto" />

          <nav className="flex flex-col items-center gap-2" aria-label="Legal">
            {legalLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="text-base font-bold text-foreground underline underline-offset-4 transition-colors hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-2 md:items-end">
            <nav className="flex flex-col items-start gap-2 md:items-end" aria-label="Social media">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="text-base font-bold text-foreground transition-colors hover:text-primary"
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="text-sm font-medium text-foreground/60">
              © 2026 The Fabrique. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
