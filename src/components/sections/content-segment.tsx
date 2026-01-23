'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedSection } from './animated-section';
import { CareSection, InstructionsSection } from '@/lib/types';

type ContentSegmentProps = {
  section: InstructionsSection;
};

export function ContentSegment({ section }: ContentSegmentProps) {
  return (
    <AnimatedSection>
      <Card className="border-none shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl md:text-3xl font-semibold">
            {section.title}
          </CardTitle>
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

type CareContentSegmentProps = {
  section: CareSection;
};

export function CareContentSegment({ section }: CareContentSegmentProps) {
  return (
    <AnimatedSection>
      <Card className="border-none shadow-md">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl md:text-3xl font-semibold">
            {section.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground whitespace-pre-line text-base md:text-lg leading-relaxed">
          {!!section.content && (
            <>
              <p>{section.content}</p>
              <br />
            </>
          )}

          {!!section.list && (
            <div className="flex flex-col gap-2">
              {!!section.listDescription && <p>{section.listDescription}</p>}
              <ul className="list-disc list-inside space-y-2">
                {section.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <br />
            </div>
          )}

          {!!section.note && <p>{section.note}</p>}
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}
