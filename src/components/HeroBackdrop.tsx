/**
 * Fond hero sans YouTube (évite les blocages cookies / iframes tiers).
 * Grande image Unsplash en plein écran (voir SITE.heroHeroBgImage).
 */
export function HeroBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-kaytori-greenDark">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full 
                object-cover opacity-40"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
