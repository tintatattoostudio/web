'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from './animated-section';
import { InstructionsSection } from '@/lib/types';

type ContentSegmentProps = {
  section: InstructionsSection;
};

export function ContentSegment({ section }: ContentSegmentProps) {
  return (
    <AnimatedSection>
      <Card className="border-none shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl md:text-3xl font-semibold">{section.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground whitespace-pre-line text-base md:text-lg leading-relaxed">
            {section.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
