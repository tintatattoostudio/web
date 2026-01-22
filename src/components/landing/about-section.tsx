'use client';

import { AnimatedSection } from '@/components/sections/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLandingData } from '@/lib/hooks/use-landing-data';
import { Skeleton } from '@/components/ui/skeleton';
import { fadeInLeft } from '@/lib/animations/variants';

export function AboutSection() {
  const { data, isLoading } = useLandingData();

  if (isLoading) {
    return (
      <section className="container mx-auto px-4 py-20">
        <Skeleton className="h-12 w-64 mb-6" />
        <Skeleton className="h-32 w-full" />
      </section>
    );
  }

  if (!data) return null;

  return (
    <AnimatedSection variants={fadeInLeft} className="container mx-auto px-4 py-24 md:py-32">
      <Card className="max-w-4xl mx-auto border-none shadow-lg">
        <CardHeader className="pb-6">
          <CardTitle className="text-3xl md:text-5xl font-semibold">
            {data.aboutTitle}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg md:text-xl text-muted-foreground whitespace-pre-line leading-relaxed">
            {data.aboutContent}
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
