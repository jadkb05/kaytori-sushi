import { GALLERY } from "../data/gallery";
import { Reveal } from "./Reveal";
import { GalleryImage } from "./GalleryImage";

function cellClass(index: number): string {
  const shell =
    "group relative overflow-hidden rounded-2xl border border-kaytori-black/10 bg-kaytori-creamDark shadow-card ring-1 ring-black/[0.03]";

  if (index === 0) {
    return `${shell} min-h-[300px] lg:col-span-2 lg:row-span-2 lg:min-h-[480px]`;
  }
  if (index === GALLERY.length - 1) {
    return `${shell} min-h-[240px] lg:col-span-2 lg:min-h-[280px]`;
  }
  return `${shell} min-h-[240px] lg:min-h-[240px]`;
}

export function GallerySection() {
  return (
    <section id="galerie" className="relative bg-gradient-to-b from-kaytori-cream via-white to-white py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-kaytori-gold/40 to-transparent" />

      <div className="mx-auto w-[min(1200px,92vw)]">
        <Reveal>
          <div className="mb-14 flex flex-col gap-4 text-center lg:mb-16 lg:text-left">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-kaytori-gold">
              Galerie
            </span>
            <h2 className="font-display text-[clamp(2.1rem,4vw,3.4rem)] font-semibold tracking-tight text-kaytori-black">
              L&apos;univers Kaytori, en images
            </h2>
            <p className="mx-auto max-w-xl text-lg font-light text-kaytori-muted lg:mx-0">
              Des textures, des couleurs et une présentation digne d&apos;une maison fine — avant votre
              première bouchée.
            </p>
          </div>
        </Reveal>

        {/*
          Grille 3 colonnes : grand bloc 2×2 en haut à gauche, bandeau large en bas.
          Placement automatique stable (pas de cellules vides / pas de min-h-0).
        */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {GALLERY.map((photo, index) => (
            <div key={photo.id} className={cellClass(index)}>
              <figure className="relative m-0 h-full min-h-[inherit]">
                <GalleryImage
                  src={photo.src}
                  alt={photo.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-kaytori-black/75 via-kaytori-black/20 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95"
                  aria-hidden
                />
                <figcaption className="absolute bottom-0 left-0 right-0 z-[1] p-4 text-sm font-semibold text-white drop-shadow-md transition-all duration-300 sm:translate-y-1 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                  {photo.alt}
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
