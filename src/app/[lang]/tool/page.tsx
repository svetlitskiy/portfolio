import { JSX } from 'react';
import NextLink from 'next/link';
import { langList } from '@/conf';
import { getI18n } from '@/i18n/i18n';
import { Link, Typography } from '@mui/material';

export async function generateStaticParams() {
  return langList.map((lang) => ({
    lang,
  }));
}

export default async function ToolsPage({ params }: { params: Promise<{ lang: string }> }): Promise<JSX.Element> {
  const { lang } = await params;
  const t = getI18n(lang);

  return (
    <div className="p-4">
      <Typography variant="h1">{t.tools.title}</Typography>
      <ul>
        <li>
          <Link component={NextLink} href={`/${lang}/tool/rem-to-px-converter`}>
            {t.tools.remToPixConverter.title}
          </Link>
        </li>
      </ul>
    </div>
  );
}
