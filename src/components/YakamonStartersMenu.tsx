import { SITE } from "../config/site";
import { YAKAMON_STARTERS } from "../data/startersYakamon";

function formatPriceDH(priceMAD: string) {
  const parts = priceMAD.split(".");
  const int = parts[0] ?? "0";
  let dec = parts[1] ?? "00";
  if (dec.length === 1) dec = `${dec}0`;
  if (dec.length > 2) dec = dec.slice(0, 2);
  return `${int},${dec}`;
}

/**
 * Starters — rendu sobre : crème, vert discret, or champagne (charte Kaytori).
 */
export function YakamonStartersMenu() {
  return (
    <div className="overflow-hidden rounded-2xl border border-kaytori-green/[0.08] bg-[#f7f6f2] shadow-[0_16px_48px_-28px_rgba(10,15,13,0.1)] md:rounded-[1.65rem] md:shadow-[0_22px_56px_-32px_rgba(10,15,13,0.12)]">
      <header className="border-b border-kaytori-black/[0.05] bg-[#fafaf7] px-5 pb-8 pt-8 md:px-12 md:pb-10 md:pt-10">
        <div className="text-center">
          <p className="font-display text-[1.4rem] font-medium tracking-tight text-kaytori-black sm:text-[1.55rem] md:text-[1.75rem]">
            {SITE.nameAccent}
          </p>
          <p className="mt-2 font-sans text-[0.65rem] font-medium uppercase tracking-[0.28em] text-kaytori-muted">
            Menu
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-md flex-wrap items-center justify-center gap-3">
          <div className="relative flex flex-col items-center">
            <span className="rounded-full border border-kaytori-gold/45 bg-gold-shine px-8 py-2.5 text-center font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-kaytori-black shadow-sm sm:text-[0.72rem]">
              Starters
            </span>
            <span
              className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-kaytori-gold/50 bg-[#fafaf7]"
              aria-hidden
            />
          </div>
          <button
            type="button"
            disabled
            className="cursor-not-allowed rounded-full border border-transparent bg-white/70 px-7 py-2.5 font-sans text-[0.68rem] font-medium uppercase tracking-[0.16em] text-kaytori-muted/70 sm:text-[0.72rem]"
            title="Bientôt"
          >
            Accompagnements
          </button>
        </div>

        <p className="mx-auto mt-7 max-w-md text-center font-sans text-[0.78rem] font-light leading-relaxed text-kaytori-muted">
          Autres catégories bientôt. La carte complète reste disponible en{" "}
          <span className="font-medium text-kaytori-green">PDF</span>.
        </p>
      </header>

      <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-10">
        <ul className="mx-auto grid max-w-3xl list-none grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6">
          {YAKAMON_STARTERS.map((item) => (
            <li key={item.id}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-kaytori-black/[0.05] bg-white shadow-[0_1px_2px_rgba(10,15,13,0.04),0_10px_28px_-14px_rgba(10,15,13,0.07)] transition-shadow duration-500 ease-out hover:shadow-[0_1px_2px_rgba(10,15,13,0.05),0_16px_40px_-16px_rgba(10,15,13,0.1)]">
                <div className="flex aspect-square items-center justify-center bg-[#fafaf8] p-4 sm:p-5">
                  <div className="relative h-[min(100px,36vw)] w-[min(100px,36vw)] max-h-[112px] max-w-[112px] overflow-hidden rounded-full border-2 border-kaytori-green/25 bg-[#f4f2ef] shadow-sm ring-2 ring-white sm:h-[108px] sm:w-[108px]">
                    <img
                      src={item.image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                </div>

                <div className="flex flex-1 flex-col border-t border-kaytori-black/[0.04] bg-[#f2ebe3] px-3 py-3.5 sm:px-3.5 sm:py-4">
                  <h3 className="text-center font-display text-[0.62rem] font-medium uppercase leading-snug tracking-[0.08em] text-kaytori-black sm:text-[0.66rem] md:text-[0.7rem]">
                    {item.name}
                  </h3>
                  <p className="mt-2.5 line-clamp-3 text-center font-sans text-[0.6rem] font-normal leading-relaxed text-kaytori-muted sm:text-[0.63rem] md:line-clamp-4 md:text-[0.65rem]">
                    {item.description}
                  </p>
                </div>

                <div className="flex min-h-[2.85rem] items-stretch border-t border-kaytori-black/[0.05]">
                  <div className="flex flex-1 items-center bg-gold-shine px-3 py-2.5 sm:px-3.5">
                    <p className="flex items-baseline gap-x-1.5 font-sans tabular-nums text-kaytori-black">
                      <span className="text-[0.82rem] font-semibold sm:text-[0.88rem]">{formatPriceDH(item.priceMAD)}</span>
                      <span className="text-[0.58rem] font-medium uppercase tracking-[0.12em] text-kaytori-black/55">DH</span>
                    </p>
                  </div>
                  <button
                    type="button"
                    disabled
                    className="grid w-10 shrink-0 place-items-center bg-[#fffcf9] text-lg font-light leading-none text-kaytori-green shadow-[inset_1px_0_0_rgba(10,15,13,0.06)] transition-colors duration-300 hover:bg-white disabled:cursor-not-allowed sm:w-11 sm:text-[1.2rem]"
                    aria-label="Ajout au panier bientôt disponible"
                    title="Bientôt"
                  >
                    +
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
