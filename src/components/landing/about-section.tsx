'use client';

import { AnimatedSection } from '@/components/sections/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fadeInLeft } from '@/lib/animations/variants';

export function AboutSection() {

  return (
    <AnimatedSection variants={fadeInLeft} className="container mx-auto px-4 py-24 md:py-32">
      <Card className="max-w-4xl mx-auto border-none shadow-lg">
        <CardHeader className="pb-6">
          <CardTitle className="text-3xl md:text-5xl font-semibold">
            {"about"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg md:text-xl text-muted-foreground whitespace-pre-line leading-relaxed">
            {"about"}
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
