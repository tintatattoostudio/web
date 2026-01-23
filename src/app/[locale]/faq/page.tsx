import { FAQAccordion } from '@/components/faq/faq-accordion';
import { Separator } from '@/components/ui/separator';
import { AnimatedSection } from '@/components/sections/animated-section';
import { PageLayout } from '@/components/layout/page-layout';
import { FAQSection } from '@/lib/types';
import { getTranslations } from 'next-intl/server';

export default async function FAQPage() {
  const t = await getTranslations('faq');

  const sections: Array<FAQSection> = [
    {
      title: t("sections.common.title"),
      qa: Array.from({ length: 6 }, (_, i) => {
        const keyRoot = `sections.common.qa.${i + 1}`;

        return {
          question: t(`${keyRoot}.question`),
          answer: t.raw(`${keyRoot}.answer`),
          type: "html",
        }
      })
    },
    {
      title: t("sections.risks.title"),
      qa: Array.from({ length: 4 }, (_, i) => {
        const keyRoot = `sections.risks.qa.${i + 1}`;

        const note = (() => t.has(`${keyRoot}.note`) ? t(`${keyRoot}.note`) : undefined)()

        return {
          question: t(`${keyRoot}.question`),
          answer: !!note ? t(`${keyRoot}.answer`) : t.raw(`${keyRoot}.answer`),
          note,
          type: !!note ? "list" : "html"
        }
      })
    },
    {
      title: t("sections.ageRestrictions.title"),
      qa: Array.from({ length: 3 }, (_, i) => {
        const keyRoot = `sections.ageRestrictions.qa.${i + 1}`;

        return {
          question: t(`${keyRoot}.question`),
          answer: t.raw(`${keyRoot}.answer`),
          type: "html",
        }
      })
    },
    {
      title: t("sections.booking.title"),
      qa: Array.from({ length: 5 }, (_, i) => {
        const keyRoot = `sections.booking.qa.${i + 1}`;

        return {
          question: t(`${keyRoot}.question`),
          answer: t.raw(`${keyRoot}.answer`),
          type: "html",
        }
      })
    },
    {
      title: t("sections.fixes.title"),
      qa: [{
        question: t("sections.fixes.qa.question"),
        answer: t("sections.fixes.qa.answer"),
        type: "text",
      }]
    },
  ];

  return (
    <PageLayout>
      <main className="container mx-auto px-4 py-24 md:py-32 min-h-screen">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-semibold mb-16">
              {t('title')}
            </h1>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((section, index) => (
            <AnimatedSection key={index}>
              <div>
                <h2 className="text-2xl md:text-4xl font-semibold mb-3">
                  {section.title}
                </h2>
                {section.description && (
                  <p className="text-muted-foreground mb-8 whitespace-pre-line text-base md:text-lg leading-relaxed">
                    {section.description}
                  </p>
                )}
                <FAQAccordion items={section.qa} />
                {index < sections.length - 1 && <Separator className="mt-16" />}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </main>
    </PageLayout>
  );
}
