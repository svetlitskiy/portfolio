import React, { JSX } from 'react';
import { getI18n } from '@/i18n/i18n';
import { Typography } from '@mui/material';

import { I18nLocaleInterface } from '@/i18n/i18n.interface';
import HexToRgbConverter from '@/components/tools/hex-to-rgb-converter';
import { buildLanguageAlternates, buildUrl } from '@/shared/helpers/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t: I18nLocaleInterface = getI18n(lang);

  const title = t.tools.hexToRgbConverter.title;
  const description = t.tools.hexToRgbConverter.description;
  const url = buildUrl('/tool/hex-to-rgb-converter', lang);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: buildLanguageAlternates('/tool/hex-to-rgb-converter'),
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

  const url = buildUrl('/tool/hex-to-rgb-converter', lang);

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
      isAccessibleForFree: true,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      featureList: ['Convert HEX colors to RGB', 'Convert RGB colors to HEX', 'Adjust opacity for RGBA colors'],
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

        <article className="max-w-3xl text-left flex flex-col gap-4">
          <Typography variant="h2">How to use the HEX to RGB converter</Typography>
          <Typography variant="body1">
            Paste a HEX color value, such as #ffffff or #0f172a, and the tool calculates the matching red, green, and
            blue channels. You can also edit RGB values to generate a HEX color for CSS, design systems, and UI
            documentation.
          </Typography>

          <Typography variant="h2">Why this is useful</Typography>
          <Typography variant="body1">
            HEX is compact and common in CSS, while RGB and RGBA are easier to adjust when you need channel values or
            opacity. Keeping both formats on the same page makes it faster to copy the exact value your implementation
            needs.
          </Typography>
        </article>
      </section>
    </>
  );
}
