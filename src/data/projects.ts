import adsPreview from "@/assets/ads-preview.jpg.asset.json";
import adsShot1 from "@/assets/ads-mobility-123249.png.asset.json";
import adsShot2 from "@/assets/ads-mobility-123216.png.asset.json";
import adsShot3 from "@/assets/ads-mobility-123316.png.asset.json";
import adsShot4 from "@/assets/ads-mobility-123223.png.asset.json";
import jet7xPreview from "@/assets/jet7x.jpg.asset.json";
import championsPreview from "@/assets/les-champions.jpg.asset.json";
import noelMadarPreview from "@/assets/noel-madar.jpg.asset.json";
import sinoMaliPreview from "@/assets/sino-africaine-mali.jpg.asset.json";
import muna1 from "@/assets/muna1.jpg.asset.json";
import muna2 from "@/assets/muna2.jpg.asset.json";
import muna3 from "@/assets/muna3.jpg.asset.json";
import muna4 from "@/assets/muna4.jpg.asset.json";
import ads3 from "@/assets/ads3.jpg.asset.json";
import can2023 from "@/assets/can2023.jpg.asset.json";
import sococim from "@/assets/sococim.jpg.asset.json";

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
    tags: ["Publicité", "Direction Artistique"],
    image: adsPreview.url,
    link: "https://vimeo.com/1205898492",
    client: "ADS",
    year: "2025",
    role: "Direction Artistique, Production",
    description:
      "Un film publicitaire pour ADS Mobility mettant en avant l'application de mobilité : calcul de trajet, cartes Xeweul et accès par QR code sur les autoroutes du Sénégal.",
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
    tags: ["Publicité", "Motion"],
    image: jet7xPreview.url,
    link: "https://vimeo.com/1130287469?fl=pl&fe=sh",
    client: "Jet7x",
    year: "2025",
    role: "Direction, Production",
    description:
      "Campagne publicitaire pour Jet7x, mise en scène énergique autour de la boisson iconique.",
    gallery: [jet7xPreview.url],
  },
  {
    slug: "champions-proprete",
    title: "Les champions de la propreté",
    tags: ["Animation 3D", "Publicité"],
    image: championsPreview.url,
    link: "https://vimeo.com/779602628?fl=pl&fe=sh",
    client: "Confidentiel",
    year: "2024",
    role: "Direction, Animation 3D",
    description:
      "Une animation 3D vibrante célébrant l'esprit d'équipe et la performance sur le terrain.",
    gallery: [championsPreview.url],
  },
  {
    slug: "noel-chez-madar",
    title: "Noël chez Madar",
    tags: ["Publicité", "3D"],
    image: noelMadarPreview.url,
    link: "https://vimeo.com/1066685587?fl=pl&fe=sh",
    client: "Madar",
    year: "2024",
    role: "Direction, Production",
    description:
      "Une campagne festive pour Madar mêlant lumière, éclat et magie de Noël.",
    gallery: [noelMadarPreview.url],
  },
  {
    slug: "cooperation-sino-africaine-mali",
    title: "La coopération Sino-Africaine au Mali",
    tags: ["Documentaire", "Motion Design"],
    image: sinoMaliPreview.url,
    link: "https://vimeo.com/924594743?fl=pl&fe=sh",
    client: "Confidentiel",
    year: "2024",
    role: "Direction, Motion",
    description:
      "Un film documentaire retraçant la coopération économique Sino-Africaine au Mali.",
    gallery: [sinoMaliPreview.url],
  },
  {
    slug: "le-jardin-muna",
    title: "Le Jardin Muna",
    tags: ["Publicité", "Direction Artistique"],
    image: muna4.url,
    client: "Le Jardin Muna",
    year: "2025",
    role: "Direction Artistique, Production",
    description:
      "Une campagne visuelle vibrante pour Le Jardin Muna, célébrant les jus 100% naturels à travers des visuels colorés et immersifs.",
    gallery: [muna1.url, muna2.url, muna3.url, muna4.url],
  },
  {
    slug: "ads-centre-appel",
    title: "ADS Centre d'Appel",
    tags: ["Publicité", "Film"],
    image: ads3.url,
    link: "https://vimeo.com/1206991529?fl=pl&fe=sh",
    client: "ADS",
    year: "2025",
    role: "Direction, Production",
    description:
      "Un film publicitaire pour ADS mettant en lumière le service du centre d'appel et l'engagement des équipes sur le terrain.",
    gallery: [ads3.url],
  },
  {
    slug: "madar-can-2023",
    title: "Madar CAN 2023 — Côte d'Ivoire",
    tags: ["Publicité", "Animation 3D"],
    image: can2023.url,
    link: "https://vimeo.com/941250347?fl=pl&fe=sh",
    client: "Madar",
    year: "2024",
    role: "Direction, Animation 3D",
    description:
      "Campagne Madar à l'occasion de la CAN 2023 en Côte d'Ivoire, mêlant football et univers de marque dans une animation 3D dynamique.",
    gallery: [can2023.url],
  },
  {
    slug: "sococim-ramadan",
    title: "SOCOCIM Ramadan",
    tags: ["Publicité", "Direction Artistique"],
    image: sococim.url,
    link: "https://vimeo.com/341352395?fl=pl&fe=sh",
    client: "SOCOCIM Industries",
    year: "2023",
    role: "Direction Artistique, Production",
    description:
      "Une campagne visuelle chaleureuse pour SOCOCIM Industries à l'occasion du Ramadan, célébrant la marque à travers une atmosphère lumineuse et festive.",
    gallery: [sococim.url],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
