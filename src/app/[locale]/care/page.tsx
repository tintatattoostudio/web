'use client';

import { useCareData } from '@/lib/hooks/use-care-data';
import { ContentSegment } from '@/components/sections/content-segment';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { AnimatedSection } from '@/components/sections/animated-section';
import { PageLayout } from '@/components/layout/page-layout';

export default function CarePage() {
  const { data, isLoading } = useCareData();

  if (isLoading) {
    return (
      <PageLayout>
        <main className="container mx-auto px-4 py-20 min-h-screen">
          <Skeleton className="h-16 w-96 mb-12" />
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
            <h1 className="text-4xl md:text-6xl font-semibold mb-16">{data.title}</h1>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-6">
          {data.sections.map((section, index) => (
            <div key={index}>
              <ContentSegment segment={section} />
              {index < data.sections.length - 1 && (
                <Separator className="my-10" />
              )}
            </div>
          ))}
        </div>
      </main>
    </PageLayout>
  );
}
