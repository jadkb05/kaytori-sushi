import { SITE, whatsappHref } from "../config/site";
import { BrandLogo } from "./BrandLogo";
import { Reveal } from "./Reveal";

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-white py-24">
      <div className="mx-auto w-[min(1200px,92vw)]">
        <Reveal>
          <div className="mb-14 flex flex-col items-center gap-4 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-kaytori-gold">
                Visites & réservations
              </span>
              <h2 className="mt-3 font-display text-[clamp(2.1rem,4vw,3.4rem)] font-semibold tracking-tight text-kaytori-black">
                Contact &amp; réservation
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-lg font-light text-kaytori-muted lg:mx-0">
                Une table, un événement, une question — nous vous répondons avec la même attention
                qu&apos;au service.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-kaytori-black/8 bg-kaytori-cream px-5 py-4 shadow-card">
              <BrandLogo size={40} />
              <div className="text-left">
                <div className="text-xs font-bold uppercase tracking-wider text-kaytori-muted">
                  Maison Kaytori
                </div>
                <div className="font-display text-lg font-semibold text-kaytori-black">
                  {SITE.city}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal>
            <article className="flex h-full flex-col rounded-2xl border border-kaytori-black/8 bg-kaytori-cream p-8 shadow-card">
              <h3 className="font-display text-xl font-semibold text-kaytori-black">Coordonnées</h3>
              <p className="mt-3 leading-relaxed text-kaytori-muted">{SITE.address}</p>
              <ul className="mt-6 grid list-none gap-3 text-kaytori-muted">
                <li>
                  <span className="font-semibold text-kaytori-black">Téléphone</span> —{" "}
                  <a href="tel:+212520026824" className="hover:text-kaytori-green hover:underline">
                    {SITE.phoneFixeDisplay}
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-kaytori-black">WhatsApp</span> —{" "}
                  <a
                    href={whatsappHref()}
                    className="text-kaytori-green underline-offset-4 hover:underline"
                  >
                    Écrire un message
                  </a>
                </li>
                <li>
                  <span className="font-semibold text-kaytori-black">Instagram</span> —{" "}
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-kaytori-green underline-offset-4 hover:underline"
                  >
                    @kaytorisushi
                  </a>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex items-center justify-center rounded-xl bg-kaytori-black px-6 py-3 text-sm font-semibold text-white shadow-green transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:bg-kaytori-green"
                >
                  Itinéraire Maps
                </a>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex items-center justify-center rounded-xl border-2 border-kaytori-black bg-transparent px-6 py-3 text-sm font-semibold text-kaytori-black transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-kaytori-gold hover:bg-kaytori-gold/10"
                >
                  WhatsApp
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal>
            <article className="rounded-2xl border border-kaytori-black/8 bg-white p-8 shadow-lift">
              <h3 className="font-display text-xl font-semibold text-kaytori-black">Horaires</h3>
              <ul className="mt-4 grid list-none gap-2 border-b border-kaytori-line pb-6 text-kaytori-muted">
                <li className="flex justify-between gap-4">
                  <span>Lundi – jeudi</span>
                  <span className="font-medium text-kaytori-black">12h – 23h</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Vendredi – dimanche</span>
                  <span className="font-medium text-kaytori-black">12h – minuit</span>
                </li>
                <li className="text-sm italic text-kaytori-muted">Réservation recommandée le week-end.</li>
              </ul>

              <div className="mt-8 flex flex-col gap-4">
                <a
                  href="tel:+212520026824"
                  className="btn-shine flex flex-col items-center justify-center gap-1 rounded-xl bg-gold-shine px-6 py-4 text-center text-kaytori-black shadow-card transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kaytori-gold focus-visible:ring-offset-2"
                  aria-label={`Réserver ou commander — appeler le ${SITE.phoneFixeDisplay}`}
                >
                  <span className="font-display text-base font-semibold tracking-tight sm:text-[1.05rem]">
                    Réserver ou commander
                  </span>
                  <span className="text-[0.85rem] font-medium opacity-[0.92]">
                    Appel fixe · {SITE.phoneFixeDisplay}
                  </span>
                </a>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine flex flex-col items-center justify-center gap-1 rounded-xl border-2 border-kaytori-black bg-transparent px-6 py-4 text-center transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-kaytori-gold hover:bg-kaytori-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kaytori-green focus-visible:ring-offset-2"
                  aria-label="WhatsApp — nous écrire"
                >
                  <span className="font-display text-base font-semibold tracking-tight text-kaytori-black sm:text-[1.05rem]">
                    WhatsApp
                  </span>
                  <span className="text-[0.85rem] font-semibold text-kaytori-green">Écrivez-nous</span>
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
