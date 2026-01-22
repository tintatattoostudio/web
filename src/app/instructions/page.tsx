'use client';

import { useInstructionsData } from '@/lib/hooks/use-instructions-data';
import { ContentSegment } from '@/components/sections/content-segment';
import { Skeleton } from '@/components/ui/skeleton';
import { AnimatedSection } from '@/components/sections/animated-section';
import { PageLayout } from '@/components/layout/page-layout';

export default function InstructionsPage() {
  const { data, isLoading } = useInstructionsData();

  if (isLoading) {
    return (
      <PageLayout>
        <main className="container mx-auto px-4 py-20 min-h-screen">
          <Skeleton className="h-16 w-96 mb-8" />
          <Skeleton className="h-32 w-full mb-8" />
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-48 w-full" />
            ))}
          </div>
        </main>
      </PageLayout>
    );
  }

  if (!data) return null;

  return (
    <PageLayout>
      <main className="container mx-auto px-4 py-24 md:py-32 min-h-screen">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-semibold mb-6">{data.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-16 whitespace-pre-line leading-relaxed">
              {data.content}
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-6">
          {data.segments.map((segment, index) => (
            <ContentSegment key={index} segment={segment} />
          ))}
        </div>
      </main>
    </PageLayout>
  );
}
