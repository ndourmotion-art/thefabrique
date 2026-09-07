import { Nav } from "@/components/clever/Nav";
import { Hero } from "@/components/clever/Hero";
import { FeaturedWork } from "@/components/clever/FeaturedWork";
import { Services } from "@/components/clever/Services";
import { Solutions } from "@/components/clever/Solutions";
import { Stats } from "@/components/clever/Stats";

import { MadeWithPassion } from "@/components/clever/MadeWithPassion";
import { ContactCTA } from "@/components/clever/ContactCTA";
import { ContactBanner } from "@/components/clever/ContactBanner";
import { Footer } from "@/components/clever/Footer";
import { ScrollTextReveal } from "@/components/clever/ScrollTextReveal";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ScrollTextReveal />
      <Nav />
      <Hero />
      <FeaturedWork />
      <Services />
      <Solutions />
      <Stats />
      
      
      <MadeWithPassion />
      <ContactCTA />
      <ContactBanner />
      <Footer />
    </main>
  );
};

export default Index;
