import { SITE, whatsappHref } from "../config/site";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroTitleCinematic } from "./HeroTitleCinematic";
import { TypewriterTagline } from "./TypewriterTagline";

export function HeroSection() {
  return (
    <section id="accueil" className="relative min-h-[88svh] overflow-hidden bg-kaytori-black md:min-h-[90svh]">
      <HeroBackdrop />

      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-kaytori-black/55 via-[#141210]/82 to-kaytori-black/94"
        aria-hidden
      />
      <div className="noise-overlay z-[1] !opacity-[0.06]" aria-hidden />

      <div className="relative z-[2] mx-auto flex min-h-[88svh] w-[min(1120px,92vw)] flex-col justify-center px-[5vw] pb-16 pt-24 md:min-h-[90svh] md:pb-20 md:pt-28">
        <div className="hero-stagger mx-auto w-full max-w-[580px] text-center lg:mx-0 lg:max-w-[520px] lg:text-left">
          <TypewriterTagline text={SITE.tagline} />

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-kaytori-gold/40 bg-kaytori-gold/[0.09] px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#f5edd8] backdrop-blur-sm md:px-4">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-kaytori-gold shadow-[0_0_12px_rgba(212,175,55,0.85)]" />
            Ouvert aujourd&apos;hui • 12h – 00h
          </div>

          <HeroTitleCinematic nameAccent={SITE.nameAccent} city={SITE.city} />

          <div className="mx-auto mt-5 max-w-full px-1 text-center text-[0.94rem] font-light leading-relaxed text-[#e8dfd2]/95 sm:px-0 md:text-[0.97rem] lg:mx-0 lg:text-left">
            <p>
              Bienvenue chez Kaytôri, un restaurant où l&apos;art culinaire rencontre la philosophie
              japonaise. Ici, nous embrassons la beauté de l&apos;imperfection et la simplicité
              élégante.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
            <a
              href="#menu"
              className="btn-shine inline-flex items-center justify-center gap-2 rounded-xl bg-gold-shine px-6 py-3 text-[0.8125rem] font-semibold text-kaytori-black shadow-card transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-gold md:px-7"
            >
              Voir le menu
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-kaytori-gold/45 bg-transparent px-6 py-3 text-[0.8125rem] font-semibold text-[#f2ebe3] transition-all duration-300 ease-smooth hover:border-kaytori-gold hover:bg-kaytori-gold/10 md:px-7"
            >
              Nous contacter
            </a>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#f5edd8]/55 bg-transparent px-6 py-3 text-[0.8125rem] font-semibold text-kaytori-goldLight transition-all duration-300 ease-smooth hover:border-kaytori-gold hover:bg-kaytori-gold hover:text-kaytori-black md:px-7"
              aria-label="Nous trouver — ouvrir Google Maps"
            >
              Nous trouver <span aria-hidden>📍</span>
            </a>
          </div>

          <div className="mx-auto mt-8 grid max-w-lg grid-cols-1 gap-2.5 border-t border-kaytori-gold/20 pt-6 sm:grid-cols-3 lg:mx-0">
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-kaytori-gold/25 bg-black/35 px-3 py-2.5 backdrop-blur-sm transition-all duration-300 ease-smooth hover:border-kaytori-gold/45 hover:bg-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kaytori-gold/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141210]"
              aria-label={`Voir ${SITE.district} sur Google Maps`}
            >
              <span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-kaytori-gold/55">
                Quartier
              </span>
              <span className="mt-0.5 block font-display text-base font-semibold leading-tight text-[#f4eee6] underline-offset-2 group-hover:underline">
                {SITE.district}
              </span>
            </a>
            <a
              href="tel:+212520026824"
              className="group block rounded-xl border border-kaytori-gold/25 bg-black/35 px-3 py-2.5 backdrop-blur-sm transition-all duration-300 ease-smooth hover:border-kaytori-gold/45 hover:bg-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kaytori-gold/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141210]"
              aria-label={`Appeler pour réserver au ${SITE.phoneFixeDisplay}`}
            >
              <span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-kaytori-gold/55">
                Réservation
              </span>
              <span className="mt-0.5 block font-display text-base font-semibold text-kaytori-goldLight underline-offset-2 group-hover:underline">
                {SITE.phoneFixeDisplay}
              </span>
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-kaytori-gold/25 bg-black/35 px-3 py-2.5 backdrop-blur-sm transition-all duration-300 ease-smooth hover:border-kaytori-gold/45 hover:bg-black/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kaytori-gold/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141210]"
              aria-label={`Écrire sur WhatsApp au ${SITE.phoneMobileDisplay}`}
            >
              <span className="block text-[0.6rem] font-bold uppercase tracking-[0.14em] text-kaytori-gold/55">
                WhatsApp
              </span>
              <span className="mt-0.5 block font-display text-base font-semibold text-[#f4eee6] underline-offset-2 group-hover:underline">
                {SITE.phoneMobileDisplay}
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-[3] flex -translate-x-1/2 animate-scrollhint flex-col items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-kaytori-gold/45 md:left-auto md:right-[max(1.5rem,4vw)] md:translate-x-0 md:flex-row">
        <span className="hidden h-8 w-px bg-gradient-to-b from-kaytori-gold/70 to-transparent md:block" />
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-kaytori-gold/60 md:hidden" />
        Scroll
      </div>
    </section>
  );
}
