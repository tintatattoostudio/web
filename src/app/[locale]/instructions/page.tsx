import { ContentSegment } from '@/components/sections/content-segment';
import { AnimatedSection } from '@/components/sections/animated-section';
import { PageLayout } from '@/components/layout/page-layout';
import { getTranslations } from 'next-intl/server';
import { InstructionsSection } from '@/lib/types';
import { Metadata } from 'next';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'instructions' });

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description')
    }
  };
}

export default async function InstructionsPage() {
  const t = await getTranslations("instructions");

  const sections: Array<InstructionsSection> = [
    {
      title: t("sections.month.title"),
      items: Array.from({ length: 1 }, (_, i) => t(`sections.month.items.${i + 1}`)),
    },
    {
      title: t("sections.week.title"),
      items: Array.from({ length: 5 }, (_, i) => t(`sections.week.items.${i + 1}`)),
    },
    {
      title: t("sections.day.title"),
      items: Array.from({ length: 6 }, (_, i) => t(`sections.day.items.${i + 1}`)),
      note: t("sections.day.note"),
    },
    {
      title: t("sections.instructions.title"),
      items: Array.from({ length: 8 }, (_, i) => t(`sections.instructions.items.${i + 1}`)),
    },
  ]

  return (
    <PageLayout>
      <main className="container mx-auto px-4 py-24 md:py-32 min-h-screen">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-semibold mb-6">{t("title")}</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-16 whitespace-pre-line leading-relaxed">
              {t("description")}
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((section, index) => (
            <ContentSegment key={index} section={section} />
          ))}
        </div>
      </main>
    </PageLayout>
  );
}
