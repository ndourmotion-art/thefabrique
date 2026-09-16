import { useEffect } from "react";

const logo = "/media/fabrique-logo.png";

type IntroLogoProps = {
  revealing: boolean;
  onReveal: () => void;
  onComplete: () => void;
};

export const IntroLogo = ({ revealing, onReveal, onComplete }: IntroLogoProps) => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTimer = window.setTimeout(onReveal, prefersReducedMotion ? 50 : 2800);
    const completeTimer = window.setTimeout(onComplete, prefersReducedMotion ? 100 : 5000);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(completeTimer);
      document.body.style.overflow = previousOverflow;
    };
  }, [onComplete, onReveal]);

  return (
    <div
      className={`site-intro ${revealing ? "site-intro--leaving" : ""}`}
      aria-hidden="true"
    >
      <img src={logo} alt="" className="site-intro__logo" />
    </div>
  );
};