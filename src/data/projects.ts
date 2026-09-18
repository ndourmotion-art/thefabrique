const adsPreview = { url: "/media/ads-preview.jpg" };
const adsShot1 = { url: "/media/ads-mobility-123249.png" };
const adsShot2 = { url: "/media/ads-mobility-123216.png" };
const adsShot3 = { url: "/media/ads-mobility-123316.png" };
const adsShot4 = { url: "/media/ads-mobility-123223.png" };
import lionhheadJ7xAsset from "@/assets/Lionhhead_J7x.jpg.asset.json";
import threeBottlesAsset from "@/assets/3_bottles.jpg.asset.json";
import juiceCupAsset from "@/assets/Juice_Cup.jpg.asset.json";
import juiceFridgeAsset from "@/assets/Juice_Fridge.jpg.asset.json";
import juiceOnlyAsset from "@/assets/Juice_only.jpg.asset.json";
import lionhheadJ7x2Asset from "@/assets/Lionhhead_J7x-2.jpg.asset.json";
const jet7xPreview = { url: lionhheadJ7xAsset.url };
const jet7xShot1 = { url: threeBottlesAsset.url };
const jet7xShot2 = { url: juiceCupAsset.url };
const jet7xShot3 = { url: juiceFridgeAsset.url };
const jet7xShot4 = { url: juiceOnlyAsset.url };
const jet7xShot5 = { url: lionhheadJ7x2Asset.url };
const championsPreview = { url: "/media/les-champions.jpg" };
const noelMadarPreview = { url: "/media/noel-madar.jpg" };
import sinoMaliAsset from "@/assets/sino-africaine-mali.jpg.asset.json";
import dougabougouAsset from "@/assets/dougabougou.jpg.asset.json";
const sinoMaliPreview = { url: dougabougouAsset.url };
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
import unAllPeopleAsset from "@/assets/un-all-people.jpg.asset.json";
import unCallinAsset from "@/assets/un-callin.jpg.asset.json";
import unLybiaAsset from "@/assets/un-lybia.jpg.asset.json";
import unRefugiesAsset from "@/assets/un-refugies.jpg.asset.json";
import unMain2Asset from "@/assets/un-main-2.jpg.asset.json";
const unAllPeople = { url: unAllPeopleAsset.url };
const unCallin = { url: unCallinAsset.url };
const unLybia = { url: unLybiaAsset.url };
const unRefugies = { url: unRefugiesAsset.url };
const unMain2 = { url: unMain2Asset.url };
import madarAirPoster from "@/assets/madar-air-freshener.jpg.asset.json";
import unMainAsset from "@/assets/un-main.jpg.asset.json";

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  image: string;
  video?: string;
  videoAspect?: string; // native aspect ratio of the hover video, e.g. "9 / 16"
  link?: string;
  client: string;
  year: string;
  role: string;
  description: string;
  gallery: string[];
};

export const projects: Project[] = [
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
    gallery: [jet7xShot1.url, jet7xShot2.url, jet7xShot3.url, jet7xShot4.url, jet7xShot5.url],
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
    gallery: [sino1.url, sino2.url, sino3.url, sino4.url, sino5.url, sino6.url, sino7.url, sino8.url, sino9.url],
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
    image: unMainAsset.url,
    link: "https://vimeo.com/995526353?fl=pl&fe=sh",
    client: "UNHCR",
    year: "2025",
    role: "Direction, Production",
    description:
      "A short film produced for UNHCR, telling the stories of refugees with humanity and dignity.",
    gallery: [unAllPeople.url, unCallin.url, unLybia.url, unRefugies.url, unMain2.url],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
