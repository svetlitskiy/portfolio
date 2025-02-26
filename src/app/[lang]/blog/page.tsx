import { JSX } from 'react';
import NextLink from 'next/link';
import { langList } from '@/conf';
import { getI18n } from '@/i18n/i18n';
import { Link, Typography } from '@mui/material';
import './../../globals.css';
import { getSortedMdFiles } from '@/shared/helpers/md-files.helper';

export async function generateStaticParams() {
  return langList.map((lang) => ({
    lang,
  }));
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }): Promise<JSX.Element> {
  const { lang } = await params;
  const t = getI18n(lang);
  const posts = await getSortedMdFiles(`src/posts/${lang}`);
  return (
    <div className="p-4">
      <Typography variant="h1">{t.blog.title}</Typography>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link component={NextLink} href={`/${lang}/blog/${post.id}`}>
              {post.title} ({post.date.toLocaleDateString(lang)})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
