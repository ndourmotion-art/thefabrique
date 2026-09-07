import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";

const videos = [
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantDream.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
];

const posters = [
  "photo-1492144534655-ae79c964c9d7",
  "photo-1517292987719-0369a794ec0f",
  "photo-1504384308090-c894fdcc538d",
  "photo-1496181133206-80ce9b88a853",
  "photo-1518770660439-4636190af475",
  "photo-1526374965328-7f61d4dc18c5",
  "photo-1488972685288-c3fd157d7c7a",
  "photo-1487058792275-0ad4aaf24ca7",
  "photo-1581090464777-f3220bbe1b8b",
  "photo-1531297484001-80022131f5a1",
  "photo-1473091534298-04dcbce3278c",
  "photo-1518770660439-4636190af475",
  "photo-1605810230434-7631ac76ec81",
  "photo-1605810230434-7631ac76ec81",
  "photo-1526374965328-7f61d4dc18c5",
];

const heightClasses = ["h-56", "h-72", "h-80", "h-64", "h-96", "h-60"];

const labels = [
  "Kinetic type", "Motion logo", "Reel edit", "Brand bumper", "Title sequence",
  "Glyph reveal", "Product spot", "Lower third", "Promo loop", "Social format",
  "Stinger", "Identity loop", "Animated poster", "Type morph", "Image study",
  "Liquid type", "Sticker pack", "Bento story", "Editorial cut", "Hero film",
  "Pitch reel", "Launch teaser", "Manifesto film", "Manifesto", "Loop ad",
  "VFX study", "AI render", "3D logo", "Sound design", "Director's cut",
];

const cards = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  video: videos[i % videos.length],
  poster: `https://images.unsplash.com/${posters[i % posters.length]}?auto=format&fit=crop&w=900&q=70`,
  height: heightClasses[i % heightClasses.length],
  label: labels[i],
  number: String(i + 1).padStart(2, "0"),
}));

const Card = ({ card }: { card: (typeof cards)[number] }) => {
  const ref = useReveal<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);

  const onEnter = () => {
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  };
  const onLeave = () => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <div
      ref={ref}
      className={`reveal group relative mb-4 md:mb-6 break-inside-avoid overflow-hidden rounded-2xl bg-muted ${card.height}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <img
        src={card.poster}
        alt={card.label}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
      />
      <video
        ref={videoRef}
        src={card.video}
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-background opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="text-sm font-medium">{card.label}</span>
        <span className="text-xs font-mono opacity-80">{card.number}</span>
      </div>
    </div>
  );
};

export const AnimaIndex = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="anima" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div ref={ref} className="reveal mb-12 md:mb-16">
          <div className="eyebrow text-foreground/60 mb-4">Anima index</div>
          <h2 className="font-display uppercase text-display-md">
            Animation & motion <span className="font-serif-italic normal-case text-primary">index.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-foreground/70">
            A living library of motion experiments — hover a card to play it.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 md:gap-6">
          {cards.map((c) => (
            <Card key={c.id} card={c} />
          ))}
        </div>
      </div>
    </section>
  );
};
