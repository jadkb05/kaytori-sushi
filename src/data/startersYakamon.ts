import crevettesDynamite from "../assets/starters/crevettes-dynamite.png?url";
import crevettesTempura from "../assets/starters/crevettes-tempura.png?url";
import pouletSweetSour from "../assets/starters/poulet-sweet-sour.png?url";
import saumonSweetSour from "../assets/starters/saumon-sweet-sour.png?url";
import saumonWakameAvocat from "../assets/starters/saumon-wakame-avocat.png?url";

/** Starters Kaytori — tarifs alignés sur le snapshot Yumlo ; visuels type Yakamon. */
export type YakamonStarter = {
  id: string;
  name: string;
  description: string;
  priceMAD: string;
  currency: "MAD";
  image: string;
};

export const YAKAMON_STARTERS = [
  {
    id: "b6fe11da37",
    name: "Saumon Wakamé Avocat",
    description: "Saumon frais, salade wakamé, avocat, graines de sésame.",
    priceMAD: "65.00",
    currency: "MAD" as const,
    image: saumonWakameAvocat,
  },
  {
    id: "2a41bacc9f",
    name: "Crevettes Tempura 5 pcs",
    description: "Cinq crevettes en tempura croustillantes, légumes de saison.",
    priceMAD: "54.00",
    currency: "MAD" as const,
    image: crevettesTempura,
  },
  {
    id: "4bb9d46122",
    name: "Crevettes Dynamite",
    description: "Crevettes frites, sauce dynamite maison, oignons frits.",
    priceMAD: "54.00",
    currency: "MAD" as const,
    image: crevettesDynamite,
  },
  {
    id: "3f0f832948",
    name: "Saumon Sweet & Sour",
    description: "Morceaux de saumon croustillants, sauce aigre-douce, légumes.",
    priceMAD: "54.00",
    currency: "MAD" as const,
    image: saumonSweetSour,
  },
  {
    id: "c4b4c870b0",
    name: "Poulet Sweet & Sour",
    description: "Poulet pané, sauce sweet & sour, poivrons et germes de soja.",
    priceMAD: "44.00",
    currency: "MAD" as const,
    image: pouletSweetSour,
  },
] as const satisfies readonly YakamonStarter[];
