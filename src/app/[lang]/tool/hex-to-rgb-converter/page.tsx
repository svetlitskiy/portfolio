import React, { JSX } from 'react';
import { getI18n } from '@/i18n/i18n';
import { Typography } from '@mui/material';

import { projectUrl } from '@/conf';
import { I18nLocaleInterface } from '@/i18n/i18n.interface';
import HexToRgbConverter from '@/components/tools/hex-to-rgb-converter';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t: I18nLocaleInterface = getI18n(lang);

  const title = t.tools.hexToRgbConverter.title;
  const description = t.tools.hexToRgbConverter.description;
  const url = `${projectUrl}/${lang}/tool/rem-to-px-converter/`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
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

export default async function ToolHexToRgbConverterPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<JSX.Element> {
  const { lang } = await params;
  const t = getI18n(lang);

  const url = `${projectUrl}/${lang}/tool/hex-to-rgb-converter/`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t.tools.hexToRgbConverter.title,
    description: t.tools.hexToRgbConverter.description,
    url: url,
    mainEntity: {
      '@type': 'WebApplication',
      name: t.tools.hexToRgbConverter.title,
      description: t.tools.hexToRgbConverter.description,
      applicationCategory: 'DeveloperTool',
      operatingSystem: 'All',
      url: url,
    },
  };

  return (
    <>
      <section className="flex flex-col items-center gap-4 p-4 text-center">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <Typography variant="h1" component="h1">
          {t.tools.hexToRgbConverter.title}
        </Typography>
        <Typography variant="body1" component="h2">
          {t.tools.hexToRgbConverter.description}
        </Typography>

        <HexToRgbConverter labels={t.tools.hexToRgbConverter.form} numberFormat={t.numbers} />
      </section>
    </>
  );
}
