import { HeroSection } from "@/components/landing/hero-section";
import { AboutSection } from "@/components/landing/about-section";
import { ArtistsSection } from "@/components/landing/artists-section";
import { PageLayout } from "@/components/layout/page-layout";

export default function Page() {
  return (
    <PageLayout showLogo={true}>
      <main className="relative min-h-screen text-foreground">
        <HeroSection />
        <AboutSection />
        <ArtistsSection />
      </main>
    </PageLayout>
  );
}
