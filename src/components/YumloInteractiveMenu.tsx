import { useMemo, useState } from "react";
import { SITE } from "../config/site";
import {
  YUMLO_CATEGORIES,
  YUMLO_MENU,
  YUMLO_MENU_URL,
  YUMLO_STORE_COVER,
  type YumloMenuItem,
} from "../data/yumloMenu";
import { BrandLogo } from "./BrandLogo";

function norm(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export function YumloInteractiveMenu() {
  const [category, setCategory] = useState<string>(YUMLO_CATEGORIES[0]);
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const m = new Map<string, number>();
    for (const it of YUMLO_MENU) {
      m.set(it.category, (m.get(it.category) ?? 0) + 1);
    }
    return m;
  }, []);

  const categories = useMemo(
    () => YUMLO_CATEGORIES.filter((c) => (counts.get(c) ?? 0) > 0),
    [counts],
  );

  const items = useMemo(() => {
    const q = norm(query.trim());
    return YUMLO_MENU.filter((it) => {
      if (it.category !== category) return false;
      if (!q) return true;
      return norm(it.name).includes(q) || norm(it.description).includes(q);
    });
  }, [category, query]);

  return (
    <div className="rounded-[28px] border border-kaytori-black/10 bg-white shadow-[0_24px_80px_-32px_rgba(10,15,13,0.35)] ring-1 ring-kaytori-black/5">
      <div className="relative h-[min(220px,42vw)] overflow-hidden rounded-t-[26px] bg-kaytori-black md:h-[260px]">
        <img
          src={YUMLO_STORE_COVER}
          alt=""
          className="h-full w-full object-cover opacity-95"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kaytori-black/75 via-kaytori-black/15 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-end gap-4 md:bottom-6 md:left-8">
          <div className="-mb-1 rounded-2xl border border-white/25 bg-white/10 p-1 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
            <BrandLogo size={72} className="shadow-lg" />
          </div>
          <div className="pb-1 text-white drop-shadow-md">
            <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{SITE.nameAccent}</h3>
            <p className="mt-1 max-w-xl text-[0.78rem] font-medium leading-snug text-white/85 md:text-sm">
              {SITE.address}
            </p>
          </div>
        </div>
        <div className="absolute right-4 top-4 max-w-[min(100%,320px)] md:right-8 md:top-6">
          <label className="sr-only" htmlFor="yumlo-menu-search">
            Rechercher dans le menu
          </label>
          <div className="flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-3 py-2 text-sm text-white shadow-lg backdrop-blur-md md:px-4 md:py-2.5">
            <span className="select-none text-white/70" aria-hidden>
              🔍
            </span>
            <input
              id="yumlo-menu-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Rechercher dans ${SITE.name}…`}
              className="min-w-0 flex-1 bg-transparent text-[0.82rem] text-white placeholder:text-white/45 outline-none md:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-0 border-t border-kaytori-black/8 lg:grid-cols-[minmax(220px,260px)_1fr]">
        <aside className="border-b border-kaytori-black/8 bg-kaytori-cream/40 lg:border-b-0 lg:border-r">
          <div className="sticky top-20 max-h-[60vh] overflow-x-auto overflow-y-auto px-3 py-4 md:max-h-[calc(100vh-8rem)] lg:px-4 lg:py-6">
            <p className="px-2 pb-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-kaytori-muted">Menu</p>
            <nav className="flex gap-1 lg:flex-col" aria-label="Catégories du menu">
              {categories.map((c) => {
                const active = c === category;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    className={`whitespace-nowrap rounded-xl px-3 py-2 text-left text-[0.85rem] font-medium transition-colors lg:whitespace-normal lg:px-3 lg:py-2.5 lg:text-[0.9rem] ${
                      active
                        ? "bg-white text-kaytori-black shadow-sm ring-1 ring-kaytori-black/10"
                        : "text-kaytori-black/70 hover:bg-white/70 hover:text-kaytori-black"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        <div className="bg-white px-4 py-6 sm:px-6 md:px-8 md:py-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h4 className="font-display text-2xl font-semibold tracking-tight text-kaytori-black md:text-3xl">
              {category}
            </h4>
            <p className="text-[0.72rem] text-kaytori-muted">
              Tarifs indicatifs (MAD) —{" "}
              <a
                href={YUMLO_MENU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-kaytori-green underline-offset-2 hover:underline"
              >
                Source Yumlo
              </a>
            </p>
          </div>

          <ul className="mt-6 grid list-none gap-4 sm:grid-cols-2 sm:gap-5">
            {items.map((it) => (
              <YumloDishCard key={it.id} item={it} />
            ))}
          </ul>

          {items.length === 0 ? (
            <p className="mt-10 text-center text-sm text-kaytori-muted">
              Aucun plat ne correspond à ta recherche dans cette catégorie.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function YumloDishCard({ item }: { item: YumloMenuItem }) {
  return (
    <li className="flex gap-4 rounded-2xl border border-kaytori-black/8 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="min-w-0 flex-1">
        <p className="font-display text-base font-semibold text-kaytori-black md:text-lg">{item.name}</p>
        <p className="mt-1 text-sm font-semibold text-kaytori-black">
          {item.priceMAD} {item.currency}
        </p>
        <p className="mt-2 text-[0.82rem] leading-relaxed text-kaytori-muted md:text-[0.88rem]">{item.description}</p>
      </div>
      <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-xl bg-kaytori-green md:h-[104px] md:w-[104px]">
        <img
          src={item.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    </li>
  );
}
