import { CareContentSegment } from '@/components/sections/content-segment';
import { Separator } from '@/components/ui/separator';
import { AnimatedSection } from '@/components/sections/animated-section';
import { PageLayout } from '@/components/layout/page-layout';
import { CareSection } from '@/lib/types';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'care' });

  return {
    title: t('title'),
    description: t('sections.cleaning.list.description'),
    openGraph: {
      title: t('title'),
      description: t('sections.cleaning.list.description')
    }
  };
}

export default async function CarePage() {
  const t = await getTranslations('care');
  const sections: Array<CareSection> = [
    {
      title: t("sections.removingFoil.title"),
      content: t("sections.removingFoil.content"),
    },
    {
      title: t("sections.cleaning.title"),
      content: t("sections.cleaning.content"),
      listDescription: t("sections.cleaning.list.description"),
      list: Array.from({ length: 4 }, (_, i) => t(`sections.cleaning.list.${i + 1}`)),
    },
    {
      title: t("sections.sunbathing.title"),
      content: t("sections.sunbathing.content"),
    },
    {
      title: t("sections.recreation.title"),
      content: t("sections.recreation.content"),
    },
    {
      title: t("sections.others.title"),
      list: Array.from({ length: 3 }, (_, i) => t(`sections.others.list.${i + 1}`)),
      note: t("sections.others.note"),
    },
  ];
  return (
    <PageLayout>
      <main className="container mx-auto px-4 py-24 md:py-32 min-h-screen">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-semibold mb-16">{t("title")}</h1>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((section, index) => (
            <div key={index}>
              <CareContentSegment section={section} />
              {index < sections.length - 1 && (
                <Separator className="my-10" />
              )}
            </div>
          ))}
        </div>
      </main>
    </PageLayout>
  );
}
