import { HeroSection } from "@/components/landing/hero-section";
import { AboutSection } from "@/components/landing/about-section";
import { ArtistsSection } from "@/components/landing/artists-section";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <ArtistsSection />
    </main>
  );
}
