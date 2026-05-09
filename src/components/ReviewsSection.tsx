import { SITE } from "../config/site";
import { REVIEWS } from "../data/reviews";
import { Reveal } from "./Reveal";

function Stars({ n }: { n: number }) {
  return (
    <div className="mb-3 tracking-[0.2em] text-kaytori-goldLight drop-shadow-sm" aria-hidden>
      {"★".repeat(n)}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section
      id="avis"
      className="relative overflow-hidden bg-gradient-to-br from-kaytori-black via-[#0f1815] to-kaytori-green py-24 text-white"
    >
      <div className="noise-overlay !opacity-[0.07]" aria-hidden />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-kaytori-gold/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-kaytori-greenSoft/25 blur-[80px]" />

      <div className="relative z-[1] mx-auto w-[min(1200px,92vw)]">
        <Reveal>
          <div className="mb-14 text-center lg:mx-auto lg:max-w-2xl">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-kaytori-goldLight">
              Réputation
            </span>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.8rem] font-semibold backdrop-blur-md">
              <span
                className="h-5 w-5 shrink-0 rounded-full shadow-inner shadow-black/30"
                style={{
                  background:
                    "conic-gradient(#4285F4 0 25%, #34A853 25% 50%, #FBBC05 50% 75%, #EA4335 75% 100%)",
                }}
              />
              Avis Google
            </div>
            <h2 className="mt-6 font-display text-[clamp(2.1rem,4vw,3.4rem)] font-semibold tracking-tight">
              Ce que disent nos convives
            </h2>
            <p className="mt-3 text-lg font-light text-white/65">
              La parole à celles et ceux qui ont vécu l&apos;expérience Kaytori.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <Reveal key={r.id}>
              <article className="flex h-full flex-col rounded-2xl border border-white/12 bg-white/[0.06] p-6 shadow-lift backdrop-blur-md transition-transform duration-500 ease-smooth hover:-translate-y-1 hover:border-kaytori-gold/35 hover:bg-white/[0.09]">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-[0.85rem] font-bold text-white shadow-lg ring-2 ring-white/15"
                      style={{ background: r.avatarColor }}
                    >
                      {r.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{r.name}</div>
                      <div className="text-[0.78rem] text-white/45">{r.dateLabel}</div>
                    </div>
                  </div>
                  <span className="rounded-full bg-black/25 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white/70">
                    Google
                  </span>
                </div>
                <Stars n={r.rating} />
                <p className="flex-1 text-[0.95rem] leading-relaxed text-white/78">
                  &quot;{r.body}&quot;
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 text-center">
            <a
              href={SITE.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center justify-center rounded-xl bg-gold-shine px-8 py-3.5 text-sm font-semibold text-kaytori-black shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-gold"
            >
              Voir tous les avis Google
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
