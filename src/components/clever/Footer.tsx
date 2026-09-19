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
    <footer className="bg-background text-foreground">
      <div className="mx-auto max-w-[1600px] px-6 py-5 md:px-10 lg:px-16">
        <div className="h-px w-full bg-foreground" />

        <div className="grid grid-cols-1 gap-12 py-12 md:min-h-[270px] md:grid-cols-12 md:gap-0 md:py-11">
          <div className="flex flex-col items-start md:col-span-5">
            <img
              src={logo}
              alt="The FABRIQUE"
              className="h-auto w-[165px] object-contain object-left"
            />
            <p className="mt-8 max-w-[320px] text-sm font-normal leading-relaxed text-foreground/45">
              A creative powerhouse for brands, organizations, and startups of
              all sizes.
            </p>
          </div>

          <div className="md:col-span-5 md:pl-8">
            <h4 className="mb-7 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Legal
            </h4>
            <ul className="space-y-5">
              {legalLinks.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm font-normal text-foreground transition-colors duration-200 hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 md:justify-self-end md:pr-4">
            <h4 className="mb-7 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              Connect
            </h4>
            <ul className="space-y-5">
              {socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block border-b border-foreground/20 text-sm font-normal text-foreground transition-colors duration-200 hover:border-accent hover:text-primary"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/10 py-7">
          <p className="text-[10px] font-medium uppercase tracking-widest text-foreground/35">
            © 2026 The Fabrique. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
