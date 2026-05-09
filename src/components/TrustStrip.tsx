import { SITE } from "../config/site";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    title: "Produits sélectionnés",
    text: "Une carte pensée comme une maison : sushi, wok et thaï avec la même exigence.",
  },
  {
    title: "Sur place & à emporter",
    text: "Installez-vous dans notre cadre ou repartez avec vos commandes soigneusement préparées.",
  },
  {
    title: SITE.district,
    text: `${SITE.city} — repérez-nous vite depuis Maps ou WhatsApp.`,
  },
] as const;

export function TrustStrip() {
  return (
    <section
      className="relative border-y border-kaytori-black/8 bg-white py-10 shadow-[inset_0_1px_0_rgba(212,175,55,0.12)]"
      aria-label="Pourquoi Kaytori"
    >
      <div className="mx-auto grid max-w-[1200px] gap-8 px-[5vw] md:grid-cols-3 md:gap-6">
        {ITEMS.map((item, i) => (
          <Reveal key={item.title}>
            <div className="relative flex gap-4 border-l-2 border-kaytori-gold/70 pl-5">
              <span
                className="font-display text-3xl font-semibold leading-none text-kaytori-gold/35"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-display text-lg font-semibold text-kaytori-black">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-kaytori-muted">{item.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
