export type GalleryPhoto = {
  id: string;
  src: string;
  alt: string;
  layout: "hero-tall" | "wide" | "square";
};

/** URLs Unsplash fixes (w=800) — remplacez par vos photos locales pour la prod. */
export const GALLERY: GalleryPhoto[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1534482421-64566f976cfa?auto=format&fit=crop&w=800&q=85",
    alt: "Assiette de sushi et sashimi",
    layout: "hero-tall",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=800",
    alt: "Sushi et présentation artisanale",
    layout: "wide",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800",
    alt: "Plateau et maki",
    layout: "square",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=800",
    alt: "Tapas et starters",
    layout: "square",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800",
    alt: "Sashimi et fraîcheur",
    layout: "square",
  },
];
