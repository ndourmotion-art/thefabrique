import { useCallback, useState } from "react";
import { Nav } from "@/components/clever/Nav";
import { Hero } from "@/components/clever/Hero";
import { FeaturedWork } from "@/components/clever/FeaturedWork";
import { Services } from "@/components/clever/Services";
import { Stats } from "@/components/clever/Stats";

import { MadeWithPassion } from "@/components/clever/MadeWithPassion";
import { ContactCTA } from "@/components/clever/ContactCTA";
import { ContactBanner } from "@/components/clever/ContactBanner";
import { Footer } from "@/components/clever/Footer";
import { ScrollTextReveal } from "@/components/clever/ScrollTextReveal";
import { IntroLogo } from "@/components/clever/IntroLogo";

const Index = () => {
  const [introState, setIntroState] = useState<"waiting" | "revealing" | "complete">("waiting");
  const revealHomepage = useCallback(() => setIntroState("revealing"), []);
  const completeIntro = useCallback(() => setIntroState("complete"), []);

  return (
    <>
      {introState !== "complete" && (
        <IntroLogo
          revealing={introState === "revealing"}
          onReveal={revealHomepage}
          onComplete={completeIntro}
        />
      )}
      <main
        className={`home-intro-content min-h-screen bg-background text-foreground ${
          introState !== "waiting" ? "home-intro-content--visible" : ""
        }`}
      >
        <ScrollTextReveal active={introState === "complete"} />
        <Nav />
        <Hero
          mediaVisible={introState !== "waiting"}
          contentVisible={introState === "complete"}
        />
        <FeaturedWork />
        <Services />
        <Stats />
        <MadeWithPassion />
        <ContactCTA />
        <ContactBanner />
        <Footer />
      </main>
    </>
  );
};

export default Index;
