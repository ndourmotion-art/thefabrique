import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  title: string;
};

export const GalleryCarousel = ({ images, title }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", dragFree: false });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!images.length) return null;

  return (
    <div className="relative">
      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {images.map((src, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%] px-2">
              <div className="flex items-center justify-center rounded-2xl bg-muted overflow-hidden">
                <img
                  src={src}
                  alt={`${title} ${i + 1}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  draggable={false}
                  className="w-auto max-w-full max-h-[80vh] object-contain select-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous image"
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur border border-border p-3 hover:bg-background transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur border border-border p-3 hover:bg-background transition-colors"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to image ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === selected ? "w-8 bg-foreground" : "w-2 bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
