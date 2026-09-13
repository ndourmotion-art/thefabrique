const adsPreview = { url: "/media/ads-preview.jpg" };
const adsShot1 = { url: "/media/ads-mobility-123249.png" };
const adsShot2 = { url: "/media/ads-mobility-123216.png" };
const adsShot3 = { url: "/media/ads-mobility-123316.png" };
const adsShot4 = { url: "/media/ads-mobility-123223.png" };
const jet7xPreview = { url: "/media/jet7x.jpg" };
const championsPreview = { url: "/media/les-champions.jpg" };
const noelMadarPreview = { url: "/media/noel-madar.jpg" };
const sinoMaliPreview = { url: "/media/sino-africaine-mali.jpg" };
const muna1 = { url: "/media/muna1.jpg" };
const muna2 = { url: "/media/muna2.jpg" };
const muna3 = { url: "/media/muna3.jpg" };
const muna4 = { url: "/media/muna4.jpg" };
const ads3 = { url: "/media/ads3.jpg" };
const can2023 = { url: "/media/can2023.jpg" };
const sococim = { url: "/media/sococim.jpg" };

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  image: string;
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
    slug: "ads-centre-appel",
    title: "ADS Call Center",
    tags: ["Advertising", "Film"],
    image: ads3.url,
    link: "https://vimeo.com/1206991529?fl=pl&fe=sh",
    client: "ADS",
    year: "2025",
    role: "Direction, Production",
    description:
      "A commercial film for ADS highlighting the call center service and the team's commitment on the ground.",
    gallery: [ads3.url],
  },
  {
    slug: "madar-can-2023",
    title: "Madar CAN 2023 — Ivory Coast",
    tags: ["Advertising", "3D Animation"],
    image: can2023.url,
    link: "https://vimeo.com/941250347?fl=pl&fe=sh",
    client: "Madar",
    year: "2024",
    role: "Direction, 3D Animation",
    description:
      "A Madar campaign for CAN 2023 in Ivory Coast, blending football and brand world in a dynamic 3D animation.",
    gallery: [can2023.url],
  },
  {
    slug: "sococim-ramadan",
    title: "SOCOCIM Ramadan",
    tags: ["Advertising", "Art Direction"],
    image: sococim.url,
    link: "https://vimeo.com/341352395?fl=pl&fe=sh",
    client: "SOCOCIM Industries",
    year: "2023",
    role: "Art Direction, Production",
    description:
      "A warm visual campaign for SOCOCIM Industries for Ramadan, celebrating the brand through a luminous, festive atmosphere.",
    gallery: [sococim.url],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
