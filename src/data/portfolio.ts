// Portfolio gallery items. `seed` maps to one of the SCENES in PhotoScene.
// Replace with real image paths/URLs (and switch PhotoScene -> next/image) when ready.

export type PortfolioCategory =
  | "Portrait"
  | "Travel"
  | "Documentary"
  | "Events"
  | "Landscape"
  | "Street";

export interface PortfolioItem {
  id: number;
  category: PortfolioCategory;
  title: string;
  desc: string;
  seed: number;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, category: "Portrait", title: "Soulful Silence", desc: "Capturing raw expression", seed: 0 },
  { id: 2, category: "Travel", title: "Mountain Reverie", desc: "Where clouds kiss peaks", seed: 1 },
  { id: 3, category: "Documentary", title: "Urban Pulse", desc: "Stories in motion", seed: 2 },
  { id: 4, category: "Events", title: "Stage Lights", desc: "Moments that electrify", seed: 3 },
  { id: 5, category: "Landscape", title: "Golden Hour", desc: "Nature's daily masterpiece", seed: 4 },
  { id: 6, category: "Street", title: "City Veins", desc: "Life between the lines", seed: 5 },
  { id: 7, category: "Portrait", title: "Inner Light", desc: "Identity through the lens", seed: 6 },
  { id: 8, category: "Travel", title: "Coastal Drift", desc: "Endless horizons", seed: 7 },
  { id: 9, category: "Documentary", title: "The Craftsmen", desc: "Hands that shape the world", seed: 0 },
];

export const PORTFOLIO_CATEGORIES: ("All" | PortfolioCategory)[] = [
  "All",
  ...Array.from(new Set(PORTFOLIO_ITEMS.map((p) => p.category))),
];
