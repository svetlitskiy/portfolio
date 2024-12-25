import { api } from '@/api/api';
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

export default async function PortfolioPage({ params }: { params: Promise<{ lang: string }> }): Promise<JSX.Element> {
  const { lang } = await params;
  const t = getI18n(lang);
  const projects = await api.project.list();
  return (
    <div>
      <Typography variant="h1">{t.portfolio.title}</Typography>
      {projects.map((project) => (
        <article key={project.id}>
          <Typography variant="h1">{project.title}</Typography>
          <Typography variant="body1">{project.description}</Typography>
          <div>
            <Link component={NextLink} href={`/${lang}/project/${project.id}`}>
              Project {project.id}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
