'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from './animated-section';
import type { WebSegment } from '@/lib/api/types';

type ContentSegmentProps = {
  segment: WebSegment;
};

export function ContentSegment({ segment }: ContentSegmentProps) {
  return (
    <AnimatedSection>
      <Card className="border-none shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl md:text-3xl font-semibold">{segment.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground whitespace-pre-line text-base md:text-lg leading-relaxed">
            {segment.content}
          </p>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
