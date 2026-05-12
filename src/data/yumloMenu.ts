/** Données issues de la page publique Yumlo (snapshot) — vérifier prix / dispos sur place. */
export const YUMLO_MENU_URL = "https://yumlo.ma/fr/casablanca/kaytori-cas" as const;

/** Visuel boutique (Yumlo CDN) — bannière menu */
export const YUMLO_STORE_COVER =
  "https://media.yumlo.ma/stores/f8c65915-9001-48c9-afe6-b8195dbe5fe4.jpg?width=1080" as const;

export type YumloMenuItem = {
  id: string;
  category: string;
  name: string;
  description: string;
  priceMAD: string;
  currency: string;
  image: string;
};

export const YUMLO_MENU = [
  {
    "id": "66073a8aee",
    "category": "Bentos",
    "name": "Bento D",
    "description": "4 Fry Ebi Fry, 4 Shake Yaki, salade gambas, yakitori Bœuf fromage.",
    "priceMAD": "146.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/deabdcf6-b2b2-44d7-a454-a83390963214.jpg"
  },
  {
    "id": "6a0c00190c",
    "category": "Bentos",
    "name": "Bento F",
    "description": "4 Croquette saumon, 4 ébi fry, 2 bœuf fromage, 1 ébi tempura, 1 nems poulet.",
    "priceMAD": "146.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/b8f05155-358a-4861-b960-07db32b01bb4.jpg"
  },
  {
    "id": "bd099ce53c",
    "category": "Bentos",
    "name": "Bento B",
    "description": "6 Aromaki saumon, salade viet, 4 ébi fry, 4 croquettes saumon.",
    "priceMAD": "142.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/3035eea6-1c85-4be2-b65f-7d8f1cf8d3b7.jpg"
  },
  {
    "id": "d2ba4b91b8",
    "category": "Bentos",
    "name": "Bento G",
    "description": "1 Nem poulet, 1 gambas pané, salade viet, 4 fry eby fry, riz cantonais crevettes.",
    "priceMAD": "142.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/5aafc80b-5aac-4c96-9ce5-170544eb5747.jpg"
  },
  {
    "id": "d570740bae",
    "category": "Bentos",
    "name": "Bento H",
    "description": "Salade veggie, 4 gambas dynamite, 4 California eby fry, wok poulet.",
    "priceMAD": "142.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/73cb2975-e143-4c70-a1f3-78f097ab7a2d.jpg"
  },
  {
    "id": "b6fe11da37",
    "category": "Starters",
    "name": "Saumon Wakamé Avocat",
    "description": "Saumon",
    "priceMAD": "65.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/d3f3991b-45ed-4121-84c6-7eeae42b9935.jpg"
  },
  {
    "id": "2a41bacc9f",
    "category": "Starters",
    "name": "Crevettes Tempura 5 pcs",
    "description": "Crevettes",
    "priceMAD": "54.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/db159afa-5adc-4990-b7f6-26bc9ca02aaf.jpg"
  },
  {
    "id": "4bb9d46122",
    "category": "Starters",
    "name": "Crevettes Dynamite",
    "description": "Crevettes",
    "priceMAD": "54.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/56324ae5-b2bf-4dec-830f-fd85eb30ea20.jpg"
  },
  {
    "id": "3f0f832948",
    "category": "Starters",
    "name": "Saumon Sweet & Sour",
    "description": "Saumon",
    "priceMAD": "54.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/636198c0-5573-452f-97fa-28a061e0f031.jpg"
  },
  {
    "id": "c4b4c870b0",
    "category": "Starters",
    "name": "Poulet Sweet & Sour",
    "description": "Poulet",
    "priceMAD": "44.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/d1c6606b-4789-41da-af7d-5e632be42983.jpg"
  },
  {
    "id": "a1aee64eaf",
    "category": "Nems & Gyoza",
    "name": "Gyoza",
    "description": "4 Pièces",
    "priceMAD": "54.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/b2502916-9e15-4308-8d34-9cc0c42b392f.jpg"
  },
  {
    "id": "a720b7b300",
    "category": "Nems & Gyoza",
    "name": "Nems",
    "description": "4 pièces",
    "priceMAD": "49.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/b821d00e-e31e-40c6-bfe5-8b4af9bafe43.jpg"
  },
  {
    "id": "1842edff6e",
    "category": "Sushi Gratiné",
    "name": "Sushi Gratiné",
    "description": "Sushis Gratiné",
    "priceMAD": "84.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/ea795785-b78a-43b4-9931-379532799b7f.jpg"
  },
  {
    "id": "da6c1fe793",
    "category": "Sushi Pizza",
    "name": "Pizza Saumon Crabe",
    "description": "Saumon, surimi, crabe, avocat, mozzarelle, tobiko 8 Pièces",
    "priceMAD": "75.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/dcd0c896-3a7d-4bd6-9891-850792a1fc04.jpg"
  },
  {
    "id": "f6cb920bcd",
    "category": "Sushi Pizza",
    "name": "Pizza Tropicale",
    "description": "Crevettes, mangue, surimi, mozzarelle, tobiko 8 Pièces",
    "priceMAD": "69.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/2af8f301-5b92-4ea8-8256-0d54b02f3855.jpg"
  },
  {
    "id": "0ba6c99141",
    "category": "Sushi Pizza",
    "name": "Pizza Saumon Mozza",
    "description": "Saumon, surimi, mozzarelle, tobiko 8 Pièces",
    "priceMAD": "69.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/55aa0c8e-6ae5-4389-8b71-1bc02a724269.jpg"
  },
  {
    "id": "79bda10a6e",
    "category": "Sushi Burger & Burrito",
    "name": "Burger",
    "description": "Avocat, surimi épicé, goma wakamé, tobiko, sauce japonaise, cheese, riz croustillant",
    "priceMAD": "99.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/436f3667-cff9-4fc2-8470-a010f33c35b8.jpg"
  },
  {
    "id": "b6220c2315",
    "category": "Sushi Burger & Burrito",
    "name": "Crunchy Burrito",
    "description": "Avocat, surimi épicé, goma wakamé, tobiko, sauce japonaise, cheese, riz croustillant",
    "priceMAD": "99.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/a74f17de-2eb0-402f-99bc-8b7e93a7f92f.jpg"
  },
  {
    "id": "5a7a6c1ff9",
    "category": "Sushi Burger & Burrito",
    "name": "Sushi Burrito",
    "description": "Avocat, surimi épicé, goma wakamé, tobiko, sauce japonaise, cheese, riz",
    "priceMAD": "94.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/3a576a9e-8fe2-46d2-af89-f65f77c6f562.jpg"
  },
  {
    "id": "76d7875ff7",
    "category": "Rouleau de Printemps",
    "name": "Rouleau de Printemps",
    "description": "8 Pcs",
    "priceMAD": "39.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/86a6abe7-b47b-4196-83dd-a4873e8057b5.jpg"
  },
  {
    "id": "a043965b0e",
    "category": "Yakitori",
    "name": "Boeuf Fromage Pané 2 pcs",
    "description": "Servi avec du riz",
    "priceMAD": "67.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/0297fbba-ce6a-4f1c-b691-9617976c6969.jpg"
  },
  {
    "id": "99671b537e",
    "category": "Yakitori",
    "name": "Yakitori Bœuf Fromage 2 pcs",
    "description": "Servi avec du riz",
    "priceMAD": "64.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/af48dbd0-175d-4be2-af4f-905141a5b2a3.jpg"
  },
  {
    "id": "1dfecb937d",
    "category": "Yakitori",
    "name": "Yakitori Poulet Pané 2 pcs",
    "description": "Servi avec du riz",
    "priceMAD": "54.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/ac3277e6-55bf-4140-80ba-73d6ae2fdff5.jpg"
  },
  {
    "id": "7cb2b13500",
    "category": "Yakitori",
    "name": "Yakitori Poulet Tsukun 2 pcs",
    "description": "Servi avec du riz",
    "priceMAD": "44.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/061105f1-c18c-47ab-84b8-2b9ddbfd4f78.jpg"
  },
  {
    "id": "261985956b",
    "category": "Soupes",
    "name": "Soupe Tom Kha Kaï",
    "description": "Poulet, lait de coco, tomate cerise, citronnelle, champignon",
    "priceMAD": "69.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/3e1761fc-27fe-4025-9ee1-d49863cdf04f.jpg"
  },
  {
    "id": "fb33c65f0c",
    "category": "Soupes",
    "name": "Soupe Royale",
    "description": "Crevettes, calamar, saumon, boulettes de poulet, surimi, champignon noir, vermicelle, ciboulette",
    "priceMAD": "69.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/038c986b-ef87-47e4-b0c8-bb27fa096d93.jpg"
  },
  {
    "id": "a03e0a6aff",
    "category": "Soupes",
    "name": "Soupe Tom Yum",
    "description": "Crevettes, pate tom yum, champignon, citronnelle",
    "priceMAD": "69.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/5ba10c11-9c7b-47b1-90e6-9a7da9f4797c.jpg"
  },
  {
    "id": "1714470567",
    "category": "Soupes",
    "name": "Soupe Fruits de Mer",
    "description": "Crevettes, saumon, calamar, surimi, champignon noir, ciboulette, citronelle",
    "priceMAD": "69.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/10e3b55d-0ae9-4c13-b346-ebe6782c57ee.jpg"
  },
  {
    "id": "58ab2c54d0",
    "category": "Soupes",
    "name": "Soupe Pékinoise",
    "description": "Crevettes, poulet, champignon noir, vermicelle",
    "priceMAD": "64.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/be048428-cc61-4b4b-b80c-61ade5e4a935.jpg"
  },
  {
    "id": "4240ad621c",
    "category": "Salades",
    "name": "Salade Royale",
    "description": "Crabe, crevettes, poulet, mangue, avocat, mais, tomate cerise, laitue",
    "priceMAD": "79.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/94056289-254b-4614-b72e-53e3bdea62d0.jpg"
  },
  {
    "id": "2c80cdd361",
    "category": "Salades",
    "name": "Salade Fruits de Mer",
    "description": "Calamar, crevettes, crabe, surimi, mangue, choux, carottes, laitue",
    "priceMAD": "79.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/ca2dc27c-5701-4095-85b7-f911ac9e034b.jpg"
  },
  {
    "id": "c2651f806f",
    "category": "Salades",
    "name": "Salade Tropicale",
    "description": "Crevettes, avocat, surimi, pomme, concombre, mais, tomates cerise, gouda pané",
    "priceMAD": "77.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/797dfc28-3b93-493f-82ce-dfcc9ff7883a.jpg"
  },
  {
    "id": "b446a7355a",
    "category": "Salades",
    "name": "Salade Exotic Chicken",
    "description": "Poulet pané, avocat, mangue, surimi, épis de mais, tomate cerise, choux, carottes, tobiko",
    "priceMAD": "69.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/7dfe2889-9b90-4c75-9606-edd016acd101.jpg"
  },
  {
    "id": "fb89c84798",
    "category": "Salades",
    "name": "Salade Vietnamienne",
    "description": "Poulet, crevettes, choux, carottes, cacahuète, germe de soja, concombre, laitue, sauce viet",
    "priceMAD": "69.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/2d0b0a65-0a8f-4033-b5f5-da5fada91224.jpg"
  },
  {
    "id": "743455af94",
    "category": "Poké Bowl",
    "name": "Poké Saumon",
    "description": "Saumon, mangue, avocat, goma wakamé, carottes, tomate cerise, edamame, riz vinaigré",
    "priceMAD": "89.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/5f254327-bf56-4db5-922c-6e745736d3dc.jpg"
  },
  {
    "id": "bd77948103",
    "category": "Poké Bowl",
    "name": "Poké Crevettes",
    "description": "Crevettes, mangue, avocat, goma wakamé, carottes, tomate cerise, edamame, riz vinaigré",
    "priceMAD": "85.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/db3a10b9-15ba-4556-8a3c-efdab6534b86.jpg"
  },
  {
    "id": "5034601de3",
    "category": "Poké Bowl",
    "name": "Poké Poulet",
    "description": "Poulet, mangue, avocat, goma wakamé, carottes, tomate cerise, edamame, riz vinaigré",
    "priceMAD": "79.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/6dcd2132-1ce8-432d-9032-6963c3c3d819.jpg"
  },
  {
    "id": "d4d9f53292",
    "category": "Tartare",
    "name": "Tartare Tropical",
    "description": "Saumon, mangue, avocat, tobiko, ciboulette",
    "priceMAD": "79.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/291c7ef0-d911-4189-ae6f-e26feb138b41.jpg"
  },
  {
    "id": "1eef119afb",
    "category": "Tartare",
    "name": "Tartare Saumon Avocat",
    "description": "Saumon, avocat, tobiko, kunafa, ciboulette",
    "priceMAD": "79.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/d8a8b920-ec0b-436e-a92e-170ad850470e.jpg"
  },
  {
    "id": "a2118c7dd7",
    "category": "Chirashi",
    "name": "Chirashi Saumon Avocat",
    "description": "Saumon, avocat",
    "priceMAD": "86.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/bb69ede3-5092-4089-b2bf-fbc2bca8b1bf.jpg"
  },
  {
    "id": "3a8fb1f6ad",
    "category": "Chirashi",
    "name": "Chirashi Mixte",
    "description": "Saumon, thon",
    "priceMAD": "86.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/303dda6e-ea12-4d02-a2c9-6c69156a7b06.jpg"
  },
  {
    "id": "dbca86e5a4",
    "category": "Sashimi",
    "name": "Sashimi Saumon 4 pcs",
    "description": "Saumon",
    "priceMAD": "60.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/2a978058-3d64-4e6f-83d3-364dd6b2bca5.jpg"
  },
  {
    "id": "eaa53cd6d3",
    "category": "Sashimi",
    "name": "Sashimi Thon 4 pcs",
    "description": "Thon",
    "priceMAD": "60.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/d3c4e1f3-6cab-436b-9810-bcd205a18fc7.jpg"
  },
  {
    "id": "5206f52f84",
    "category": "Carpaccio",
    "name": "Carpaccio Saumon 8 pcs",
    "description": "Saumon",
    "priceMAD": "84.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/6cff4c11-66cb-4d8b-9fd5-aa4bd3f96961.jpg"
  },
  {
    "id": "eee25cf62b",
    "category": "Carpaccio",
    "name": "Carpaccio Thon 8 pcs",
    "description": "Thon",
    "priceMAD": "84.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/619e090f-372e-43b1-b7e8-db92b843a1cf.jpg"
  },
  {
    "id": "2505b93cd8",
    "category": "Tacos",
    "name": "Tacos Saumon Avocat 2 pcs",
    "description": "Saumon, avocat, tobiko",
    "priceMAD": "54.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/ba649f63-fd5a-4220-bf74-c061d0d65865.jpg"
  },
  {
    "id": "8101c52f8c",
    "category": "Tacos",
    "name": "Tacos Saumon Epicé 2 pcs",
    "description": "Saumon épicé, poireaux, guacamole, sésame",
    "priceMAD": "54.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/7baccd8b-96d6-41fa-b9d8-976dd5f4a804.jpg"
  },
  {
    "id": "b5131a7c46",
    "category": "Tacos",
    "name": "Tacos Gambas Shitaké 2 pcs",
    "description": "Gambas, champignon shitaké, sauce chili",
    "priceMAD": "49.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/bf67a606-df95-464d-a909-f2362f61d36c.jpg"
  },
  {
    "id": "0d86283322",
    "category": "Tacos",
    "name": "Tacos Chicken Garlic 2 pcs",
    "description": "Chicken, sauce chili",
    "priceMAD": "44.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/dbb44b0a-705a-4c44-af03-40cd3055bcd3.jpg"
  },
  {
    "id": "f1773a150f",
    "category": "Crispy Rice",
    "name": "Crispy Rice Saumon Avocat 2 pcs",
    "description": "Saumon, avocat",
    "priceMAD": "45.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/56ad8873-a8a1-4d32-95a9-bf993993053b.jpg"
  },
  {
    "id": "e624eac353",
    "category": "Crispy Rice",
    "name": "Crispy Rice Ebi Avocat 2 pcs",
    "description": "Crevettes, avocat",
    "priceMAD": "45.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/30983118-1223-453e-b106-9804313e2ae4.jpg"
  },
  {
    "id": "b276b0ceb2",
    "category": "Crispy Rice",
    "name": "Crispy Rice Mangue Avocat 2 pcs",
    "description": "Mangue, avocat",
    "priceMAD": "39.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/b08b18dc-87b4-4300-a491-9ef75224d5d7.jpg"
  },
  {
    "id": "d56e6ad4c1",
    "category": "Crispy Rice",
    "name": "Crispy Rice Crunchy Poulet 2 pcs",
    "description": "Poulet",
    "priceMAD": "39.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/193b8afe-b08a-4ae9-9c24-4ad9691b70b1.jpg"
  },
  {
    "id": "4cac8d8b4e",
    "category": "Nigiri",
    "name": "Nigiri Saumon Avocat 2 pcs",
    "description": "Saumon, avocat",
    "priceMAD": "45.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/69c17a26-6084-4259-803e-0e099327da56.jpg"
  },
  {
    "id": "0055351351",
    "category": "Nigiri",
    "name": "Nigiri Saumon 2 pcs",
    "description": "Saumon",
    "priceMAD": "44.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/0f62272a-888c-4dc9-9202-76aafcdc7491.jpg"
  },
  {
    "id": "9467aea043",
    "category": "Nigiri",
    "name": "Nigiri Saumon Braisé 2 pcs",
    "description": "Saumon",
    "priceMAD": "44.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/168d011a-14e7-4592-a35b-b2a27ca2cf0d.jpg"
  },
  {
    "id": "742209d9f7",
    "category": "Nigiri",
    "name": "Nigiri Thon 2 pcs",
    "description": "Thon",
    "priceMAD": "44.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/ccbe9f58-a12c-4659-8fff-a398990b1c22.jpg"
  },
  {
    "id": "a134dbcb8f",
    "category": "Maki",
    "name": "Maki Saumon Cheese",
    "description": "6 Pièces",
    "priceMAD": "42.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/25e976ac-72c8-4590-9455-7407fc38e545.jpg"
  },
  {
    "id": "07f5e99819",
    "category": "Maki",
    "name": "Maki Saumon Avocat",
    "description": "6 Pièces",
    "priceMAD": "42.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/31ddfaad-af62-428e-9057-ce4b74ba0e9e.jpg"
  },
  {
    "id": "2594bcb7b0",
    "category": "Maki",
    "name": "Maki Eby Fry",
    "description": "6 Pièces",
    "priceMAD": "39.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/1c44e7ce-1fa4-4d8e-b89f-714abeb4b9d9.jpg"
  },
  {
    "id": "6be7c32896",
    "category": "Maki",
    "name": "Maki Saumon",
    "description": "6 Pièces",
    "priceMAD": "39.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/750541ab-311c-4798-a744-a5a698bcd113.jpg"
  },
  {
    "id": "78b88fbc91",
    "category": "Maki",
    "name": "Maki Avocat Cheese",
    "description": "6 Pièces",
    "priceMAD": "34.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/1780d251-0abc-41c3-900e-ca36e9a9d690.jpg"
  },
  {
    "id": "48d9b28c3c",
    "category": "Futomaki",
    "name": "Futomaki Crabe Mango",
    "description": "Crevettes poché, mangue, saumon, crabe, tobiko, cheese 5 Pièces",
    "priceMAD": "74.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/55c546d1-490f-413e-99dd-a1cbabf72ae1.jpg"
  },
  {
    "id": "f5de1461f2",
    "category": "Futomaki",
    "name": "Futomaki Salmon Eby",
    "description": "Saumon, avocat, crevette pané, surimi, tobiko, cheese 5 Pièces",
    "priceMAD": "64.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/9e6f7eb2-e6f4-4828-b40c-9122897ec74a.jpg"
  },
  {
    "id": "a1051484c6",
    "category": "Futomaki",
    "name": "Futomaki Eby Mango",
    "description": "Crevette pané, avocat, mangue, concombre ciselé, carottes, tobiko, cheese 5 Pièces",
    "priceMAD": "64.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/f187765d-d28f-487d-9ec3-a597e9e383e2.jpg"
  },
  {
    "id": "5f48df3cac",
    "category": "Futomaki",
    "name": "Futomaki Eby Roll",
    "description": "Crevette pochée, surimi, ebi tempura, avocat, cheese 5 Pièces",
    "priceMAD": "64.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/7f6b2b98-4ab7-44ff-af64-408fd768fd7d.jpg"
  },
  {
    "id": "ecc7c8cd38",
    "category": "Futomaki",
    "name": "Futomaki Tobiko Roll",
    "description": "Saumon, avocat, surimi, tobiko, cheese 5 Pièces",
    "priceMAD": "64.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/bc2a95a4-bc12-4c4a-8398-132ea2df9154.jpg"
  },
  {
    "id": "302c4c0e8a",
    "category": "California Roll",
    "name": "California Nara",
    "description": "Saumon, crevette pané, avocat, cheese 4 Pièces",
    "priceMAD": "59.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/727cc40f-dc89-429e-ab06-d10f3ecd208f.jpg"
  },
  {
    "id": "566b2be815",
    "category": "California Roll",
    "name": "California Eby Avocado",
    "description": "Crevette pané, surimi, saumon, cheese, avocat 4 Pièces",
    "priceMAD": "59.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/c6c982c2-7977-44c4-84f5-36e042884e41.jpg"
  },
  {
    "id": "79e57587e9",
    "category": "California Roll",
    "name": "California Rainbow",
    "description": "Saumon, avocat, cheese, tobiko 4 Pièces",
    "priceMAD": "57.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/854e32ab-b347-4a20-bdc3-35c1097dd594.jpg"
  },
  {
    "id": "84f445e743",
    "category": "California Roll",
    "name": "California Chicken Eby",
    "description": "Poulet pané, crevette pané, cheese, tobiko 4 Pièces",
    "priceMAD": "54.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/d95b3d5b-eb79-4de3-8981-37e946f7b32a.jpg"
  },
  {
    "id": "cc76387393",
    "category": "California Roll",
    "name": "California Saumon Avocat",
    "description": "Saumon, avocat, cheese, sésame 4 Pièces",
    "priceMAD": "46.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/7ff9deb1-8fc8-4e16-866c-20ef4913bd7c.jpg"
  },
  {
    "id": "712e0027e2",
    "category": "Special Roll",
    "name": "Okinawa Saumon 4 pcs",
    "description": "Saumon, crème d’anguille",
    "priceMAD": "75.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/39d781ec-c672-4b19-80d6-96398788e661.jpg"
  },
  {
    "id": "5ee8246804",
    "category": "Special Roll",
    "name": "Special Unagui Roll",
    "description": "Anguilles, crevettes pané, avocat, cheese 4 Pièces",
    "priceMAD": "74.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/bf739f41-67ed-448e-823f-4c65ef950cbf.jpg"
  },
  {
    "id": "7412fc4ec3",
    "category": "Special Roll",
    "name": "Special Triangle Roll",
    "description": "Saumon, crevettes pané, crabe, surimi, avocat, tobiko 4 Pièces",
    "priceMAD": "73.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/263eb257-f0c7-44c5-9b89-c631baa6aebb.jpg"
  },
  {
    "id": "f46b03f169",
    "category": "Special Roll",
    "name": "Special Pink Tuna",
    "description": "Thon, surimi pané, crabe, avocat, saumon, tobiko 4 Pièces",
    "priceMAD": "73.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/899b1f36-ed8b-4d00-b331-234c6ccb39c1.jpg"
  },
  {
    "id": "7eeb7d6f83",
    "category": "Special Roll",
    "name": "Special Havana Roll",
    "description": "Saumon, crevettes pané, mangue, surimi, cheese, tobiko 4 Pièces",
    "priceMAD": "69.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/b3605f69-d95c-44e9-bd01-61ff1b393ce0.jpg"
  },
  {
    "id": "11b8f36cb5",
    "category": "Aromaki",
    "name": "Aromaki Ibiza",
    "description": "Saumon, surimi, crevettes pané, avocat, crabe, cheese, tobiko 6 Pièces",
    "priceMAD": "79.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/0db7c80b-2fe5-4413-81ca-b1fa6c81972b.jpg"
  },
  {
    "id": "4da542fb7e",
    "category": "Aromaki",
    "name": "Aromaki Kyoto",
    "description": "Saumon, crabe, surimi, mangue, cheese, tobiko 6 Pièces",
    "priceMAD": "74.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/e63a8cd8-873f-439c-b2e9-be51dcfce039.jpg"
  },
  {
    "id": "be681d7f41",
    "category": "Aromaki",
    "name": "Aromaki Rio",
    "description": "Saumon, surimi, crevettes pané, cheese, tobiko 6 Pièces",
    "priceMAD": "74.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/f0703b7b-e1b3-479f-9c8f-7175442cf567.jpg"
  },
  {
    "id": "dabf870bd3",
    "category": "Aromaki",
    "name": "Aromaki Tropicale",
    "description": "Crabe, crevettes pané, avocat, mangue, cheese, tobiko 6 Pièces",
    "priceMAD": "74.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/8b03e379-69c0-4e5d-be79-5774c52103d7.jpg"
  },
  {
    "id": "4646423648",
    "category": "Aromaki",
    "name": "Aromaki Honolulu",
    "description": "Saumon, surimi, avocat, saumon mariné, cheese, tobiko 6 Pièces",
    "priceMAD": "74.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/3271d516-3a78-4b75-90c9-b6aa050a3845.jpg"
  },
  {
    "id": "e41a8a69ca",
    "category": "Blossom",
    "name": "Blossom Ceviché Roll",
    "description": "Saumon, mangue, avocat, surimi tobiko, sésame 4 pièces",
    "priceMAD": "84.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/866307f7-d654-4f59-8035-4d65e7239395.jpg"
  },
  {
    "id": "5347977dbc",
    "category": "Blossom",
    "name": "Blossom Hawai",
    "description": "Crevettes pané, crabe, avocat, mangue, cheese, tobiko 4 pièces",
    "priceMAD": "79.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/1762c487-aa92-4e50-9e20-c0474baa4205.jpg"
  },
  {
    "id": "2d6c4738f9",
    "category": "Blossom",
    "name": "Blossom New York",
    "description": "Saumon pané, crevettes, cheese, tobiko 4 Pièces",
    "priceMAD": "79.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/057160ea-8aa9-4715-9ed9-4b206c52c36a.jpg"
  },
  {
    "id": "f84280a0f7",
    "category": "Blossom",
    "name": "Blossom Boston",
    "description": "Crevettes pané, avocat, cheese, crabe, poireaux, tobiko 4 Pièces",
    "priceMAD": "79.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/11db7b07-2bb6-4392-8eae-f0af7ed313ee.jpg"
  },
  {
    "id": "12117b00b9",
    "category": "Blossom",
    "name": "Blossom Eby Roll",
    "description": "Crevettes, saumon, avocat, cheese 4 Pièces",
    "priceMAD": "79.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/2a93d5da-9d25-42d3-aed4-b2b8930603cc.jpg"
  },
  {
    "id": "6c2ba70a6f",
    "category": "Premium",
    "name": "Premium Krabi Roll",
    "description": "Saumon, crevettes pané, surimi crabe, avocat, goma wakamé, cheese 4 Pièces",
    "priceMAD": "85.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/d7f03d4c-92dd-4acd-83df-48df55d5c5c3.jpg"
  },
  {
    "id": "c6bf1f1759",
    "category": "Premium",
    "name": "Premium Fuji Roll",
    "description": "Saumon, crevettes pané, saumon cuit, mangue, cheese 4 Pièces",
    "priceMAD": "85.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/c9754c3b-ea09-4c59-80c0-7ac58e445401.jpg"
  },
  {
    "id": "b1b1b0e1ba",
    "category": "Premium",
    "name": "Premium Pink Salmon",
    "description": "Crevette poché, saumon, surimi crevette pané 4 Pièces",
    "priceMAD": "85.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/d29c716d-41c5-49d8-877c-eab138fdf2e7.jpg"
  },
  {
    "id": "82bc3899c0",
    "category": "Premium",
    "name": "Premium Exotica Roll",
    "description": "Double crevette pané, saumon, surimi, avocat, goma wakamé 4 Pièces",
    "priceMAD": "85.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/3405a41f-edd6-4429-a3d5-a6bef2ff72e6.jpg"
  },
  {
    "id": "2aacef48a6",
    "category": "Premium",
    "name": "Premium Pataya",
    "description": "Double crevette pané, surimi, saumon, mangue, tobiko, ciboulette 4 Pièces",
    "priceMAD": "85.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/0b20f263-c6f7-4677-bb9e-e3ee8536a360.jpg"
  },
  {
    "id": "df7dc34617",
    "category": "Makito Fry",
    "name": "Makito Saumon Epicé",
    "description": "Saumon épicé, fondu de gouda 6 Pièces",
    "priceMAD": "64.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/d1b82f08-bf9b-4f21-b847-b28d9cd4b5d2.jpg"
  },
  {
    "id": "e6820a6ec3",
    "category": "Makito Fry",
    "name": "Makito Crevettes",
    "description": "Crevette mariné, gambas, fondu de gouda 6 Pièces",
    "priceMAD": "59.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/111cba55-8312-4d68-ac19-4ed1c4df2948.jpg"
  },
  {
    "id": "6dd2877aea",
    "category": "Makito Fry",
    "name": "Makito Thon",
    "description": "Thon, fondu de gouda 6 Pièces",
    "priceMAD": "59.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/34a33540-835f-4e06-89a5-15caa30da7b6.jpg"
  },
  {
    "id": "df8e4b755c",
    "category": "Crispy Roll",
    "name": "Crispy Red White",
    "description": "Saumon, crevette, poisson, cheese, tobiko 6 Pièces",
    "priceMAD": "75.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/aee9fd4b-b9dd-43fc-be01-92a3148209c4.jpg"
  },
  {
    "id": "007985588c",
    "category": "Crispy Roll",
    "name": "Crispy Sakura",
    "description": "Saumon, surimi, tobiko, avocat 6 Pièces",
    "priceMAD": "69.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/cc05bc35-0a90-4c0d-ac65-7d047edbfa5a.jpg"
  },
  {
    "id": "f0b86623a1",
    "category": "Crispy Roll",
    "name": "Crispy Eby Chicken Fry",
    "description": "Poluet pané, crevette pané avocat, surimi 6 Pièces",
    "priceMAD": "69.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/7de571a3-d215-43b1-8afe-dfbfa9b3a395.jpg"
  },
  {
    "id": "deb56ea325",
    "category": "Crispy Roll",
    "name": "Crispy Cheesy Fish",
    "description": "Poisson pané, surimi pané, fondu de gouda 6 pièces",
    "priceMAD": "66.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/82f0eaef-2f7e-40d1-9372-0e7c8412e001.jpg"
  },
  {
    "id": "9f730f7289",
    "category": "Crispy Roll",
    "name": "Crispy Saumon Tempura",
    "description": "Saumon tempura, avocat, surimi, cheese, tobiko 6 Pièces",
    "priceMAD": "64.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/39efd373-3540-4e15-a918-b3dded59787d.jpg"
  },
  {
    "id": "5ec25676a2",
    "category": "Crunchy Roll",
    "name": "Crunchy Saumon Avocat",
    "description": "saumon, surimi, avocat, tobiko, cheese 6 Pièces",
    "priceMAD": "69.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/2ac01699-366c-48d7-a8ad-a4316a44a043.jpg"
  },
  {
    "id": "fc97991608",
    "category": "Crunchy Roll",
    "name": "Crunchy Eby Tempura",
    "description": "Crevette pané, saumon, concombre, tobiko, cheese 6 Pièces",
    "priceMAD": "69.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/6680aee3-ad19-4577-92e5-642a6f4262ff.jpg"
  },
  {
    "id": "b2336232f7",
    "category": "Crunchy Roll",
    "name": "Crunchy Casablanca",
    "description": "Crevettes pané, crabe, mangue, cheese, tobiko 6 Pièces",
    "priceMAD": "69.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/ac038d87-212e-4e36-b1c2-d3d25a3a14f3.jpg"
  },
  {
    "id": "b6bb8210a3",
    "category": "Crunchy Roll",
    "name": "Crunchy Tiger Fry",
    "description": "Crevette pané, surimi, avocat, cheese, tobiko 6 Pièces",
    "priceMAD": "69.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/c412f99e-97e1-4d32-9671-c4919fe6d8ba.jpg"
  },
  {
    "id": "e8077d2295",
    "category": "Crunchy Roll",
    "name": "Crunchy Dragon Eyes",
    "description": "Saumon, poireaux, carottes, ciboulette, cheese, tobiko 6 Pièces",
    "priceMAD": "65.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/27bd72ff-9f4d-4476-9827-03a8f15829d3.jpg"
  },
  {
    "id": "083ac320dd",
    "category": "Wok & Thaï",
    "name": "Wok",
    "description": "Nouilles",
    "priceMAD": "64.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/e2d5f6c9-d61a-4f01-8ecf-02f5fd44e6ce.jpg"
  },
  {
    "id": "0c48c8093e",
    "category": "Wok & Thaï",
    "name": "Vermicelle",
    "description": "Vermicelle",
    "priceMAD": "64.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/19de959b-dc51-4d87-b938-75fabd948f03.jpg"
  },
  {
    "id": "5c227884f6",
    "category": "Wok & Thaï",
    "name": "Riz Cantonais",
    "description": "Riz Cantonais",
    "priceMAD": "54.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/39520ba6-3f4f-4034-9773-9ba0e6e9eddd.jpg"
  },
  {
    "id": "cd6fcbb51e",
    "category": "Plats Thaï",
    "name": "Boeuf Bulgogi",
    "description": "Boeuf, gingembre, huile de sésame, Ail, sauce cacahuète, cacahuètes (servi avec du riz)",
    "priceMAD": "99.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/d2de7903-51fa-4fad-8f34-08338310a867.jpg"
  },
  {
    "id": "36987b1e67",
    "category": "Plats Thaï",
    "name": "Red Curry Thaï",
    "description": "Lait de coco, sauce curry thaï poivrons, champignon, brocolis, carottes, courgettes, échalotes (servi avec du riz)",
    "priceMAD": "89.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/d42ddaad-5269-40c0-93dc-4d0134b6c7df.jpg"
  },
  {
    "id": "9eba998f82",
    "category": "Plats Thaï",
    "name": "Ananas Aigre Doux",
    "description": "Ananas, poivrons, champignon noir, champignon paris, noix de cajou, sauce aigre doux (servi avec du riz)",
    "priceMAD": "89.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/ff5c7a70-b0bc-44f2-8082-e79e8b6e2611.jpg"
  },
  {
    "id": "0755e5b16d",
    "category": "Plats Thaï",
    "name": "Corean Chicken",
    "description": "Poulet caramélisé , servi avec nouilles ou riz sauté aux légumes",
    "priceMAD": "89.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/e18c554b-fa94-42ab-9217-cb4e18c2a7e6.jpg"
  },
  {
    "id": "9443eb67b5",
    "category": "Saté",
    "name": "Saté",
    "description": "servi avec du riz",
    "priceMAD": "89.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/61318452-1cdf-484e-8071-eaf2e86da0a6.jpg"
  },
  {
    "id": "d99671dda4",
    "category": "Assortiments 16 pcs",
    "name": "Prime Box 16 pcs",
    "description": "6 aromaki saumon, 4 cream cheese, 6 maki saumon.",
    "priceMAD": "159.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/e517db96-2938-488b-a407-f724a3706e34.jpg"
  },
  {
    "id": "f7e59011ae",
    "category": "Assortiments 16 pcs",
    "name": "Funny 16 pcs",
    "description": "4 cream cheese, 4 eby fry, 6 maki saumon, 2 nigiri saumon.",
    "priceMAD": "159.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/2c93b259-b3f8-47b9-949f-6b90aafb5907.jpg"
  },
  {
    "id": "794bc29deb",
    "category": "Assortiments 16 pcs",
    "name": "Eby Lovers 16 pcs",
    "description": "6 pacific, 4 ebi fry, 6 aromaki crevettes.",
    "priceMAD": "159.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/efb3a5e9-b7da-43f6-be1e-9acb257b0a41.jpg"
  },
  {
    "id": "5e0ccaac41",
    "category": "Assortiments 16 pcs",
    "name": "Crunchy Box 16 pcs",
    "description": "4 fry salmon fry, 4 fry ebi fry, 4 croquette poulet, 4 pacific.",
    "priceMAD": "159.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/2ca3eaa7-b7de-4d07-97ab-0334eabb65e9.jpg"
  },
  {
    "id": "6515d6b542",
    "category": "Assortiments 16 pcs",
    "name": "California Box 16 pcs",
    "description": "4 classic, 4 chicken crispy, 4 ebi fry, 4 cream cheese.",
    "priceMAD": "159.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/390125d1-8fd2-4275-bb28-db5ebd78be49.jpg"
  },
  {
    "id": "8827d5820f",
    "category": "Assortiments 24 pcs",
    "name": "Aromaki Lovers 24 pcs",
    "description": "6 aromaki saumon, 6 aromaki crevettes, 6 sunchine, 6 spring roll crevettes.",
    "priceMAD": "255.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/a5dce248-f71b-4b5a-8622-b9eb4604029a.jpg"
  },
  {
    "id": "c9b4e3431d",
    "category": "Assortiments 24 pcs",
    "name": "California Lovers 24 pcs",
    "description": "4 classic, 4 ebi fry, 4 cream cheese, 4 shake yaki, 4 saumon avocat, 4 chicken crispy.",
    "priceMAD": "255.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/34feeb1d-808a-4b05-b96d-01439a6c80fa.jpg"
  },
  {
    "id": "58c0a31b31",
    "category": "Assortiments 24 pcs",
    "name": "Summer 20 pcs",
    "description": "4 ebi salmon, 4 green tiger, 4 spider, 6 aromaki crevettes, 2 nigiri saumon.",
    "priceMAD": "255.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/78616e84-98db-41ee-bb01-82698ebc9f53.jpg"
  },
  {
    "id": "d2212cb6f2",
    "category": "Assortiments 24 pcs",
    "name": "Crunchy Lovers 24 pcs",
    "description": "8 pizza saumon mozza, 4 crunchy crevettes, 4 croquette poulet, 4 fry salmon fry, 4 pacific.",
    "priceMAD": "255.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/3c26ac30-2d26-4dc1-8c2e-dbc82d52cdd9.jpg"
  },
  {
    "id": "941fda2c02",
    "category": "Assortiments 24 pcs",
    "name": "Deluxe 24 pcs",
    "description": "4 classic, 4 ebi fry, 4 maki saumon, 4 fry ebi fry, 4 fry salmon fry, 4 makito saumon épicé.",
    "priceMAD": "255.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/9843963d-d921-42b4-afe2-2769fc85ceb5.jpg"
  },
  {
    "id": "a39d62353c",
    "category": "Assortiments 30 pcs",
    "name": "Delice 30 pcs",
    "description": "4 classic, 4 ebi fry, 4 shake yaki, 4 cream cheese, 6 maki saumon, 6 aromaki saumon, 2 nigiri saumon.",
    "priceMAD": "309.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/dbc0af6a-596f-4a4e-b3cd-bca817a19e11.jpg"
  },
  {
    "id": "0679c0f898",
    "category": "Assortiments 30 pcs",
    "name": "Enjoy Box 30 pcs",
    "description": "4 classic, 4 ebi fry, 4 pacific, 4 fry salmon fry, 6 aromaki crevette, 6 aromaki saumon, 2 nigiri saumon.",
    "priceMAD": "309.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/a41153f4-0b36-4e45-8fca-b3cb7514d0b2.jpg"
  },
  {
    "id": "267463ea64",
    "category": "Assortiments 30 pcs",
    "name": "Jocker 30 pcs",
    "description": "4 classic, 4 ebi fry, 4 cream cheese, 4 pacific, 8 fry salmon fry, 6 aromaki crevettes.",
    "priceMAD": "309.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/205b2546-315b-4234-b807-f496af9e64bd.jpg"
  },
  {
    "id": "59108b5a10",
    "category": "Assortiments 36 pcs",
    "name": "Gourmet 36 pcs",
    "description": "4 classic, 4 ebi fry, 4 cream cheese, 4 saumon avocat, 4 nara, 4 green tiger, 4 naruto, 4 tahiti, 4 spider.",
    "priceMAD": "399.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/6dc03088-01f5-4a66-a33b-b1cd65c015d5.jpg"
  },
  {
    "id": "c800597832",
    "category": "Assortiments 36 pcs",
    "name": "Dream 36 pcs",
    "description": "4 green tiger, 4 Tahiti, 4 naruto, 4 goma roll, 4 spider, 4 eby salmon, 6 aromaki saumon,",
    "priceMAD": "399.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/f45db1ee-0da1-4b96-a88d-ad2403ab6a87.jpg"
  },
  {
    "id": "b5dd505e6f",
    "category": "Assortiments 36 pcs",
    "name": "Extasy 40",
    "description": "4 classic, 4 ebi fry, 4 cream cheese, 4 shake yaki, 4 saumon avocat, 4 chicken crispy, 8 fry salmon fry, 8 pacific. (40 pcs)",
    "priceMAD": "399.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/8eb86afe-dcd6-433a-b83c-c97c2291c7dc.jpg"
  },
  {
    "id": "b4a12d5c8c",
    "category": "Assortiments 48 pcs",
    "name": "Fiesta 48 pcs",
    "description": "4 classic, 4 ebi fry, 4 shake yaki, 4 cream cheese, 4 saumon avocat, 4 chicken crispy, 4 pacific, 4 fry salmon fry, 4 fry ebi fry, 6 aromaki saumon, 6 aromaki crevettes.",
    "priceMAD": "489.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/7552c00c-567c-4502-a02d-597cd75c08aa.jpg"
  },
  {
    "id": "a4fdedb9b3",
    "category": "Assortiments 48 pcs",
    "name": "Festival 48 pcs",
    "description": "4 classic, 4 ebi fry, 4 shake yaki, 4 cream cheese, 4 saumon avocat, 8 fry salmon fry, 8 fry ebi fry, 4 chicken crispy, 8 makito saumon epicé.",
    "priceMAD": "489.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/3586f629-1659-4956-89b5-12d1b3fcc336.jpg"
  },
  {
    "id": "225dc32819",
    "category": "Assortiments 48 pcs",
    "name": "Happy Box 44 pcs",
    "description": "4 goma roll, 4 Tahiti, 4 green tiger, 4 ebi salmon, 4 bali, 4 spider, 4 makito surimi, 4 naruto, 6 aromaki crevettes, 6 aromaki saumon.",
    "priceMAD": "489.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/7d0e4466-1498-467e-84ff-e9f40707a7a7.jpg"
  },
  {
    "id": "4a3cdf3348",
    "category": "Assortiments 60 pcs",
    "name": "Carnaval 60 pcs",
    "description": "4 classic, 4 ebi fry, 4 cream cheese, 4 saumon avocat, 4 green tiger, 4 tahiti, 4 naruto, 4 eby salmon, 8 fry salmon fry, 8 pacific, 6 aromaki saumon, 6 aromaki crevettes.",
    "priceMAD": "629.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/1207c53a-4f2e-40ec-9b8c-bd752a9b7b85.jpg"
  },
  {
    "id": "10fc49f9b4",
    "category": "Assortiments 60 pcs",
    "name": "Family Box 60 pcs",
    "description": "4 classic, 4 ebi fry, 4 cream cheese, 4 shake yaki, 4 saumon avocat, 4 chicken crispy, 4 green tiger, 6 aromaki saumon, 4 eby salmon, 6 aromaki crevettes, 4 tahiti, 4 naruto, 4 goma roll, 4 spider.",
    "priceMAD": "629.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/69b121bf-bccf-4f43-86f4-ff2c91dfc840.jpg"
  },
  {
    "id": "5c15472d24",
    "category": "Desserts",
    "name": "Cheese Cake Speculos",
    "description": "Cheese Cake Speculos",
    "priceMAD": "47.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/b5c0bdbd-4df5-46fe-ab13-769519d3a65a.jpg"
  },
  {
    "id": "6038f3931e",
    "category": "Desserts",
    "name": "Cheese Cake Citron",
    "description": "Cheese Cake Citron",
    "priceMAD": "47.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/182a591b-9a7e-492f-955b-88b1a60e5d78.jpg"
  },
  {
    "id": "6bfd43d617",
    "category": "Desserts",
    "name": "Banoffee Pie",
    "description": "Banoffee Pie",
    "priceMAD": "44.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/afa9e217-63bf-47f1-aee2-d577c22f2d81.jpg"
  },
  {
    "id": "787c236c7b",
    "category": "Jus",
    "name": "Jus Exotique",
    "description": "Exotique",
    "priceMAD": "44.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/20609f29-0287-4326-83a0-c9d8e19146b2.jpg"
  },
  {
    "id": "fde993538f",
    "category": "Jus",
    "name": "Jus Fraise",
    "description": "Fraise",
    "priceMAD": "44.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/adc08d08-d099-4666-938b-18c56e83a073.jpg"
  },
  {
    "id": "2b9993080d",
    "category": "Jus",
    "name": "Jus Ananas",
    "description": "Ananas",
    "priceMAD": "42.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/57ffb200-ea33-4817-a2a0-ba674c9e7521.jpg"
  },
  {
    "id": "a2b893eb78",
    "category": "Jus",
    "name": "Jus Mangue",
    "description": "Mangue",
    "priceMAD": "42.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/0e1098e5-50f4-48e8-8428-482fbf79b4bb.jpg"
  },
  {
    "id": "cb223847c5",
    "category": "Jus",
    "name": "Jus Kiwi",
    "description": "Kiwi",
    "priceMAD": "42.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/78eb53cc-af15-4c9c-a42b-c8b7e4b8baa9.jpg"
  },
  {
    "id": "0229f0431e",
    "category": "Boissons",
    "name": "Coca Cola",
    "description": "33 cl",
    "priceMAD": "18.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/84104093-2d96-4716-9660-3e7d0f42531d.jpg"
  },
  {
    "id": "8e12069c86",
    "category": "Boissons",
    "name": "Coca Cola Zéro",
    "description": "33 cl",
    "priceMAD": "18.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/a771a7f5-ba6b-49c1-84eb-7ec20cd9d54e.jpg"
  },
  {
    "id": "4750e9d01c",
    "category": "Boissons",
    "name": "Sprite",
    "description": "33 cl",
    "priceMAD": "18.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/0eefb745-398f-4d36-b2d0-797c5e7dabb9.jpg"
  },
  {
    "id": "cf01bd2066",
    "category": "Boissons",
    "name": "Hawai",
    "description": "33 cl",
    "priceMAD": "18.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/e131a74b-4a86-4641-9fb6-decbf5834d79.jpg"
  },
  {
    "id": "5b62bf8e93",
    "category": "Boissons",
    "name": "Poms",
    "description": "33 cl",
    "priceMAD": "18.00",
    "currency": "MAD",
    "image": "https://media.yumlo.ma/products/83034889-32e0-4ea7-a2bd-9112f0fd1bf9.jpg"
  }
] as const satisfies readonly YumloMenuItem[];

export const YUMLO_CATEGORIES = [
  "Bentos",
  "Starters",
  "Nems & Gyoza",
  "Sushi Gratiné",
  "Sushi Pizza",
  "Sushi Burger & Burrito",
  "Rouleau de Printemps",
  "Yakitori",
  "Soupes",
  "Salades",
  "Poké Bowl",
  "Tartare",
  "Chirashi",
  "Sashimi",
  "Carpaccio",
  "Tacos",
  "Crispy Rice",
  "Nigiri",
  "Maki",
  "Futomaki",
  "California Roll",
  "Special Roll",
  "Aromaki",
  "Blossom",
  "Premium",
  "Makito Fry",
  "Crispy Roll",
  "Crunchy Roll",
  "Wok & Thaï",
  "Plats Thaï",
  "Saté",
  "Assortiments 16 pcs",
  "Assortiments 24 pcs",
  "Assortiments 30 pcs",
  "Assortiments 36 pcs",
  "Assortiments 48 pcs",
  "Assortiments 60 pcs",
  "Desserts",
  "Jus",
  "Boissons",
] as const;
