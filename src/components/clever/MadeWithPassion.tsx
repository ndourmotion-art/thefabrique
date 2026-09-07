import { useReveal } from "@/hooks/useReveal";

export const MadeWithPassion = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-40">
      <div ref={ref} className="reveal mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <h2 className="font-display uppercase font-bold leading-[0.9] tracking-tight text-[18vw] md:text-[14vw]">
          Made with <span className="font-serif-italic normal-case text-primary">passion</span>
        </h2>
      </div>
    </section>
  );
};
