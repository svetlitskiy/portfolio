import React, { JSX } from 'react';
import { getI18n } from '@/i18n/i18n';
import { Typography } from '@mui/material';
import RemToPxConverter from '@/components/tools/rem-to-pix-converter';
import { I18nLocaleInterface } from '@/i18n/i18n.interface';
import { buildLanguageAlternates, buildUrl } from '@/shared/helpers/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t: I18nLocaleInterface = getI18n(lang);

  const title = t.tools.remToPixConverter.title;
  const description = t.tools.remToPixConverter.description;
  const url = buildUrl('/tool/rem-to-px-converter', lang);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: buildLanguageAlternates('/tool/rem-to-px-converter'),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Developer Tools',
      locale: lang,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function ToolRemToPixConverterPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<JSX.Element> {
  const { lang } = await params;
  const t = getI18n(lang);

  const url = buildUrl('/tool/rem-to-px-converter', lang);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t.tools.remToPixConverter.title,
    description: t.tools.remToPixConverter.description,
    url: url,
    mainEntity: {
      '@type': 'WebApplication',
      name: t.tools.remToPixConverter.title,
      description: t.tools.remToPixConverter.description,
      applicationCategory: 'DeveloperTool',
      operatingSystem: 'All',
      url: url,
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: ['Convert REM to PX', 'Convert PX to REM', 'Customize the base font size'],
    },
  };

  return (
    <>
      <section className="flex flex-col items-center gap-4 p-4 text-center">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <Typography variant="h1" component="h1">
          {t.tools.remToPixConverter.title}
        </Typography>
        <Typography variant="body1" component="h2">
          {t.tools.remToPixConverter.description}
        </Typography>

        <RemToPxConverter labels={t.tools.remToPixConverter.form} numberFormat={t.numbers} />

        <article className="max-w-3xl text-left flex flex-col gap-4">
          <Typography variant="h2">How to convert REM to PX</Typography>
          <Typography variant="body1">
            Use the formula: pixels = rem × base font size. For example, 1.5rem with a 16px base font size is 24px.
            Change the base value when your project uses a custom root font size.
          </Typography>

          <Typography variant="h2">When to use this tool</Typography>
          <Typography variant="body1">
            REM units are useful for scalable typography and spacing, while pixels are often used in design specs. This
            converter helps developers translate design values into accessible CSS units quickly.
          </Typography>
        </article>
      </section>
    </>
  );
}
