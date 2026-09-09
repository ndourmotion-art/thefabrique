import logoAsset from "@/assets/fabrique-logo.png.asset.json";
const logo = logoAsset.url;

export const Footer = () => {
  return (
    <footer className="bg-background text-foreground border-t border-foreground/10">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-10 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <img src={logo} alt="The FABRIQUE" className="h-12 w-auto" />
          <div className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Cleverafrica. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
