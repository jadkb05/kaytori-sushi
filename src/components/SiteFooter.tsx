import { SITE } from "../config/site";
import { BrandLogo } from "./BrandLogo";
import { Reveal } from "./Reveal";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-kaytori-black px-4 py-14 text-white/75">
      <div className="mx-auto w-[min(1200px,92vw)]">
        <Reveal>
          <div className="flex flex-col items-center gap-6 border-b border-white/10 pb-12 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-start lg:gap-5">
              <BrandLogo size={52} className="shadow-[0_12px_40px_rgba(201,168,76,0.25)]" />
              <div>
                <div className="font-display text-2xl font-semibold text-white">{SITE.name}</div>
                <div className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#f2c94c]">
                  Sushi • Wok • Thaï • {SITE.city}
                </div>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/55">
              Signature culinaire entre traditions nippones, wok et accents thaï — le tout orchestré
              dans un esprit maison, précis et chaleureux.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto mb-10 mt-10 max-w-[640px] rounded-2xl border border-kaytori-gold/35 bg-gradient-to-br from-white/[0.07] to-transparent px-6 py-6 text-center backdrop-blur-sm md:px-8 md:py-7">
            <p className="m-0 font-display text-[1rem] italic leading-relaxed text-white/88 md:text-[1.05rem]">
              « Chaque bouchée chez Kaytôri est une histoire.
              <br />
              Merci de la partager avec nous. »
            </p>
          </div>
        </Reveal>

        <div className="text-center text-sm text-white/45 md:text-left">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
