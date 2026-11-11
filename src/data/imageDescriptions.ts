const descriptions: Record<string, string> = {
  "/media/ads-preview.jpg": "ADS Mobility app advertising campaign cover",
  "/media/ads-mobility-123249.png": "ADS Mobility commercial film still showcasing the highway mobility app",
  "/media/ads-mobility-123216.png": "ADS Mobility advertising film still for Senegal's highways",
  "/media/ads-mobility-123316.png": "ADS Mobility app campaign film still",
  "/media/ads-mobility-123223.png": "ADS Mobility highway app commercial film still",
  "/media/Lionhhead_J7x.jpg": "Lionhead artwork for the Jet7x drink advertising campaign",
  "/media/Lionhhead_J7x-2.jpg": "Lionhead visual from the Jet7x drink campaign",
  "/media/3_bottles.jpg": "Three Jet7x juice bottles in a product campaign composition",
  "/media/Juice_Cup.jpg": "Juice cup visual for the Jet7x drink campaign",
  "/media/Juice_Fridge.jpg": "Refrigerator product visual for the Jet7x juice campaign",
  "/media/Juice_only.jpg": "Juice product visual from the Jet7x advertising campaign",
  "/media/les-champions.jpg": "The Cleanliness Champions 3D animated advertising campaign cover",
  "/media/noel-madar.jpg": "Festive Christmas at Madar advertising campaign cover",
  "/media/noura-party-cover.jpeg": "Noura Party cleaning product advertising film cover",
  "/media/madar-air-freshener.png": "Woman in profile in the Madar Air Freshener advertising film",
  "/media/dougabougou.jpg": "Aerial view of green fields in Dougabougou for the Sino-African Cooperation documentary",
  "/media/un-main.jpg": "Illustrated world map with people and communities for the UNHCR refugee film",
  "/media/un-all-people.jpg": "People illustration from the UNHCR refugee awareness film",
  "/media/un-callin.jpg": "UNHCR contact information illustration for refugee awareness",
  "/media/un-lybia.jpg": "Libya infographic illustration from the UNHCR refugee film",
  "/media/un-refugies.jpg": "Refugee infographic illustration from the UNHCR short film",
  "/media/un-main-2.jpg": "Illustrated world map and communities from the UNHCR refugee film",
};

export const imageDescription = (src: string, context: string) =>
  descriptions[src] ?? `${context.replace(/\s+/g, " ").trim()} — campaign visual`;