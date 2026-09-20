const adsPreview = { url: "/media/ads-preview.jpg" };
const adsShot1 = { url: "/media/ads-mobility-123249.png" };
const adsShot2 = { url: "/media/ads-mobility-123216.png" };
const adsShot3 = { url: "/media/ads-mobility-123316.png" };
const adsShot4 = { url: "/media/ads-mobility-123223.png" };
const jet7xPreview = { url: "/media/Lionhhead_J7x.jpg" };
const jet7xShot1 = { url: "/media/3_bottles.jpg" };
const jet7xShot2 = { url: "/media/Juice_Cup.jpg" };
const jet7xShot3 = { url: "/media/Juice_Fridge.jpg" };
const jet7xShot4 = { url: "/media/Juice_only.jpg" };
const jet7xShot5 = { url: "/media/Lionhhead_J7x-2.jpg" };
const championsPreview = { url: "/media/les-champions.jpg" };
const noelMadarPreview = { url: "/media/noel-madar.jpg" };
const nouraPartyPreview = { url: "/media/noura-party-cover.jpeg" };
const sinoMaliPreview = { url: "/media/dougabougou.jpg" };
const sino1 = { url: "/media/sino-1.jpg" };
const sino2 = { url: "/media/sino-2.jpg" };
const sino3 = { url: "/media/sino-3.jpg" };
const sino4 = { url: "/media/sino-4.jpg" };
const sino5 = { url: "/media/sino-5.jpg" };
const sino6 = { url: "/media/sino-6.jpg" };
const sino7 = { url: "/media/sino-7.jpg" };
const sino8 = { url: "/media/sino-8.jpg" };
const sino9 = { url: "/media/sino-9.jpg" };
const muna1 = { url: "/media/muna1.jpg" };
const muna2 = { url: "/media/muna2.jpg" };
const muna3 = { url: "/media/muna3.jpg" };
const muna4 = { url: "/media/muna4.jpg" };
const unAllPeople = { url: "/media/un-all-people.jpg" };
const unCallin = { url: "/media/un-callin.jpg" };
const unLybia = { url: "/media/un-lybia.jpg" };
const unRefugies = { url: "/media/un-refugies.jpg" };
const unMain2 = { url: "/media/un-main-2.jpg" };
const madarAirPoster = { url: "/media/madar-air-freshener.png" };
const unMainAsset = { url: "/media/un-main.jpg" };

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
    videoAspect: "9 / 16",
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
    slug: "noura-party",
    title: "Noura Party",
    tags: ["Advertising", "Production"],
    image: nouraPartyPreview.url,
    link: "https://vimeo.com/221851137",
    client: "Noura",
    year: "2017",
    role: "Direction, Production",
    description:
      "A colorful product film for Noura, bringing energy and playful motion to an everyday cleaning moment.",
    gallery: [nouraPartyPreview.url],
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
