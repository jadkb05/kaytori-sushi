import { ContactSection } from "./components/ContactSection";
import { GallerySection } from "./components/GallerySection";
import { HeroSection } from "./components/HeroSection";
import { MenuSection } from "./components/MenuSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { TrustStrip } from "./components/TrustStrip";

export function App() {
  return (
    <>
      <SiteHeader />
      <main id="contenu-principal">
        <HeroSection />
        <TrustStrip />
        <GallerySection />
        <ReviewsSection />
        <MenuSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
