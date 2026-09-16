import { useReveal } from "@/hooks/useReveal";

export const MadeWithPassion = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-16 md:py-24">
      <div ref={ref} className="reveal mx-auto max-w-[1600px] px-2 md:px-4 text-center overflow-hidden">
        <h2 className="font-display uppercase font-bold leading-[0.9] tracking-normal text-[14vw] md:text-[10vw] whitespace-nowrap">
          <span className="block">Made with passion</span>
        </h2>
      </div>
    </section>
  );
};
