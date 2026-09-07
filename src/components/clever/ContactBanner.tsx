import banniereAsset from "@/assets/banniere.jpg.asset.json";

export const ContactBanner = () => {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <img
          src={banniereAsset.url}
          alt="Cleverafrica - Soyez visible pour exister"
          className="w-full h-auto rounded-2xl"
          loading="lazy"
        />
      </div>
    </section>
  );
};
