import React, { JSX } from 'react';
import { getI18n } from '@/i18n/i18n';
import { Typography } from '@mui/material';
import RemToPxConverter from '@/components/tools/rem-to-pix-converter';
import { projectUrl } from '@/conf';
import { I18nLocaleInterface } from '@/i18n/i18n.interface';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t: I18nLocaleInterface = getI18n(lang);

  console.log('t', t.home.title);

  const title = 'REM to PX Converter | Developer Tools';
  const description =
    'Convert REM units to PX and PX to REM effortlessly with our tool. Perfect for web developers to adjust font sizes with ease.';
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

export default async function ToolRemToPixConverterPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<JSX.Element> {
  const { lang } = await params;
  const t = getI18n(lang);

  const title = 'REM to PX Converter | Developer Tools';
  const description =
    'Convert REM units to PX and PX to REM effortlessly with our tool. Perfect for web developers to adjust font sizes with ease.';
  const url = `${projectUrl}/${lang}/tool/rem-to-px-converter/`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    mainEntity: {
      '@type': 'WebApplication',
      name: 'REM to PX Converter',
      description: 'A tool to convert REM units to PX and PX to REM with customizable base font size.',
      applicationCategory: 'DeveloperTool',
      operatingSystem: 'All',
      url: url,
    },
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4 p-4 text-center">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

        <Typography variant="h1" component="h1">
          REM to PX Converter
        </Typography>
        <Typography variant="body1" component="p">
          Easily convert REM units to PX based on your base font size.
        </Typography>

        <RemToPxConverter numberFormat={t.numbers} />

        <Typography variant="body2" component="p" className="mt-6">
          Tip: Adjust the base font size in your CSS to customize conversions for your project.
        </Typography>
      </div>
    </>
  );
}
