import { useReveal } from "@/hooks/useReveal";

export const MadeWithPassion = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-16 md:py-24">
      <div ref={ref} className="reveal mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <h2 className="font-display uppercase font-bold leading-[0.9] tracking-tight text-[14vw] md:text-[10vw]">
          Made with <span className="font-bold">passion</span>
        </h2>
      </div>
    </section>
  );
};
