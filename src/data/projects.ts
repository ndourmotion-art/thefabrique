const adsPreview = { url: "/media/ads-preview.jpg" };
const adsShot1 = { url: "/media/ads-mobility-123249.png" };
const adsShot2 = { url: "/media/ads-mobility-123216.png" };
const adsShot3 = { url: "/media/ads-mobility-123316.png" };
const adsShot4 = { url: "/media/ads-mobility-123223.png" };
const jet7xPreview = { url: "/media/jet7x.jpg" };
const championsPreview = { url: "/media/les-champions.jpg" };
const noelMadarPreview = { url: "/media/noel-madar.jpg" };
import sinoMaliAsset from "@/assets/sino-africaine-mali.jpg.asset.json";
const sinoMaliPreview = { url: sinoMaliAsset.url };
import sino1Asset from "@/assets/sino-1.jpg.asset.json";
import sino2Asset from "@/assets/sino-2.jpg.asset.json";
import sino3Asset from "@/assets/sino-3.jpg.asset.json";
import sino4Asset from "@/assets/sino-4.jpg.asset.json";
import sino5Asset from "@/assets/sino-5.jpg.asset.json";
import sino6Asset from "@/assets/sino-6.jpg.asset.json";
import sino7Asset from "@/assets/sino-7.jpg.asset.json";
import sino8Asset from "@/assets/sino-8.jpg.asset.json";
import sino9Asset from "@/assets/sino-9.jpg.asset.json";
const sino1 = { url: sino1Asset.url };
const sino2 = { url: sino2Asset.url };
const sino3 = { url: sino3Asset.url };
const sino4 = { url: sino4Asset.url };
const sino5 = { url: sino5Asset.url };
const sino6 = { url: sino6Asset.url };
const sino7 = { url: sino7Asset.url };
const sino8 = { url: sino8Asset.url };
const sino9 = { url: sino9Asset.url };
const muna1 = { url: "/media/muna1.jpg" };
const muna2 = { url: "/media/muna2.jpg" };
const muna3 = { url: "/media/muna3.jpg" };
const muna4 = { url: "/media/muna4.jpg" };
import un1Asset from "@/assets/un1.jpg.asset.json";
import un3Asset from "@/assets/un3.jpg.asset.json";
import un4Asset from "@/assets/un4.jpg.asset.json";
import un5Asset from "@/assets/un5.jpg.asset.json";
import un6Asset from "@/assets/un6.jpg.asset.json";
const un1 = { url: un1Asset.url };
const un3 = { url: un3Asset.url };
const un4 = { url: un4Asset.url };
const un5 = { url: un5Asset.url };
const un6 = { url: un6Asset.url };
import buizAiVideo from "@/assets/buiz-ai.mp4.asset.json";
import madarAirPoster from "@/assets/madar-air-freshener.jpg.asset.json";
const buizAi01 = { url: "/media/buiz-ai-01.png" };
const buizAi02 = { url: "/media/buiz-ai-02.png" };
const buizAi03 = { url: "/media/buiz-ai-03.png" };
const buizAi04 = { url: "/media/buiz-ai-04.png" };
const buizAi05 = { url: "/media/buiz-ai-05.png" };

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  image: string;
  video?: string;
  link?: string;
  client: string;
  year: string;
  role: string;
  description: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "buiz-ai-experimental",
    title: "Buiz Ai\nEXPERIMENTAL",
    tags: ["Motion Design", "Experimental"],
    image: buizAi01.url,
    video: buizAiVideo.url,
    client: "Buiz.ai",
    year: "2026",
    role: "Art Direction, Motion Design",
    description:
      "An experimental motion design project created for the Buiz.ai experience.",
    gallery: [buizAi01.url, buizAi02.url, buizAi03.url, buizAi04.url, buizAi05.url],
  },
  {
    slug: "project-a",
    title: "ADS Mobility",
    tags: ["Advertising", "Art Direction"],
    image: adsPreview.url,
    link: "https://vimeo.com/1205898492",
    client: "ADS",
    year: "2025",
    role: "Art Direction, Production",
    description:
      "A commercial film for ADS Mobility showcasing the mobility app: route calculation, Xeweul cards, and QR code access on Senegal's highways.",
    gallery: [
      adsShot1.url,
      adsShot2.url,
      adsShot3.url,
      adsShot4.url,
    ],
  },
  {
    slug: "jet7x-doundeul",
    title: "Jet7x \"Doundeul sa katan\"",
    tags: ["Advertising", "Motion"],
    image: jet7xPreview.url,
    link: "https://vimeo.com/1130287469?fl=pl&fe=sh",
    client: "Jet7x",
    year: "2025",
    role: "Direction, Production",
    description:
      "An advertising campaign for Jet7x, an energetic staging around the iconic drink.",
    gallery: [jet7xPreview.url],
  },
  {
    slug: "champions-proprete",
    title: "The Cleanliness Champions",
    tags: ["3D Animation", "Advertising"],
    image: championsPreview.url,
    link: "https://vimeo.com/779602628?fl=pl&fe=sh",
    client: "Confidential",
    year: "2024",
    role: "Direction, 3D Animation",
    description:
      "A vibrant 3D animation celebrating team spirit and on-field performance.",
    gallery: [championsPreview.url],
  },
  {
    slug: "noel-chez-madar",
    title: "Christmas at Madar",
    tags: ["Advertising", "3D"],
    image: noelMadarPreview.url,
    link: "https://vimeo.com/1066685587?fl=pl&fe=sh",
    client: "Madar",
    year: "2024",
    role: "Direction, Production",
    description:
      "A festive campaign for Madar blending light, sparkle, and the magic of Christmas.",
    gallery: [noelMadarPreview.url],
  },
  {
    slug: "madar-air-freshener",
    title: "Madar\nAIR FRESHENER",
    tags: ["Advertising", "Motion"],
    image: madarAirPoster.url,
    link: "https://vimeo.com/1227731457",
    client: "Madar",
    year: "2026",
    role: "Direction, Production",
    description:
      "A campaign for Madar's air freshener line, bringing freshness and motion to the brand.",
    gallery: [madarAirPoster.url],
  },
  {
    slug: "cooperation-sino-africaine-mali",
    title: "Sino-African Cooperation in Mali",
    tags: ["Documentary", "Motion Design"],
    image: sinoMaliPreview.url,
    link: "https://vimeo.com/924594743?fl=pl&fe=sh",
    client: "Confidential",
    year: "2024",
    role: "Direction, Motion",
    description:
      "A documentary film tracing Sino-African economic cooperation in Mali.",
    gallery: [sinoMaliPreview.url],
  },
  {
    slug: "le-jardin-muna",
    title: "Le Jardin Muna",
    tags: ["Advertising", "Art Direction"],
    image: muna4.url,
    client: "Le Jardin Muna",
    year: "2025",
    role: "Art Direction, Production",
    description:
      "A vibrant visual campaign for Le Jardin Muna, celebrating 100% natural juices through colorful, immersive visuals.",
    gallery: [muna1.url, muna2.url, muna3.url, muna4.url],
  },
  {
    slug: "unhcr-refugees-short-film",
    title: "UNHCR\nRefugees short film",
    tags: ["Documentary", "Film"],
    image: un1.url,
    link: "https://vimeo.com/995526353?fl=pl&fe=sh",
    client: "UNHCR",
    year: "2025",
    role: "Direction, Production",
    description:
      "A short film produced for UNHCR, telling the stories of refugees with humanity and dignity.",
    gallery: [un1.url, un3.url, un4.url, un5.url, un6.url],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
