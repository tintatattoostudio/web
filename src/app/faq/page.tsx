'use client';

import { useFAQData } from '@/lib/hooks/use-faq-data';
import { FAQAccordion } from '@/components/faq/faq-accordion';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { AnimatedSection } from '@/components/sections/animated-section';
import { PageLayout } from '@/components/layout/page-layout';

export default function FAQPage() {
  const { data, isLoading } = useFAQData();

  if (isLoading) {
    return (
      <PageLayout>
        <main className="container mx-auto px-4 py-20 min-h-screen">
          <Skeleton className="h-16 w-96 mb-12" />
          <div className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-24 w-full" />
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
            <h1 className="text-4xl md:text-6xl font-semibold mb-16">
              Frequently Asked Questions
            </h1>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-16">
          {data.map((section, index) => (
            <AnimatedSection key={index}>
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold mb-3">
                  {section.title}
                </h2>
                {section.content && (
                  <p className="text-muted-foreground mb-8 whitespace-pre-line text-base md:text-lg leading-relaxed">
                    {section.content}
                  </p>
                )}
                <FAQAccordion items={section.qa} />
                {index < data.length - 1 && <Separator className="mt-16" />}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </main>
    </PageLayout>
  );
}
