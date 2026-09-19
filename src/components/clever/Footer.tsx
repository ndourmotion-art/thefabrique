import { Link } from "react-router-dom";

const logo = "/media/fabrique-logo.png";

const socials = [
  { label: "LinkedIn", abbr: "LI", href: "https://www.linkedin.com" },
  { label: "Facebook", abbr: "FB", href: "https://www.facebook.com" },
  { label: "Instagram", abbr: "IG", href: "https://www.instagram.com" },
];

const legalLinks = [
  { label: "Terms and Policies", to: "/terms-and-policies" },
  { label: "Privacy Policy", to: "/privacy-policy" },
];

export const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-12 md:py-16">
        {/* Top Divider */}
        <div className="h-px w-full bg-foreground mb-10 md:mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          {/* Left: Logo Section */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <img
              src={logo}
              alt="The FABRIQUE"
              className="h-14 md:h-16 w-auto object-contain"
            />
            <p className="mt-6 text-sm text-foreground/50 max-w-xs leading-relaxed">
              A creative powerhouse for brands, organizations, and startups of
              all sizes.
            </p>
          </div>

          {/* Middle: Legal */}
          <div className="md:col-span-3 md:border-l md:border-foreground/10 md:pl-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              {legalLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm font-medium text-foreground transition-colors duration-200 border-b border-transparent hover:border-[hsl(var(--accent))] hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Socials */}
          <div className="md:col-span-4 md:border-l md:border-foreground/10 md:pl-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
              Connect
            </h4>
            <div className="flex flex-col space-y-4">
              {socials.map(({ label, abbr, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between text-sm font-medium text-foreground"
                >
                  <span className="group-hover:text-primary transition-colors">
                    {label}
                  </span>
                  <span className="h-px flex-grow mx-4 bg-foreground/10 group-hover:bg-[hsl(var(--accent))] transition-colors" />
                  <span className="text-[10px] font-bold text-foreground/40 group-hover:text-primary transition-colors">
                    {abbr}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-medium text-foreground/40 uppercase tracking-widest">
            © 2026 The Fabrique. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
