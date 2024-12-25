import { api } from '@/api/api';
import { JSX } from 'react';
import NextLink from 'next/link';
import { langList } from '@/conf';
import { getI18n } from '@/i18n/i18n';
import { Alert, Link, Typography, Button } from '@mui/material';
import './../../globals.css';

export async function generateStaticParams() {
  return langList.map((lang) => ({
    lang,
  }));
}

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }): Promise<JSX.Element> {
  const { lang } = await params;
  const t = getI18n(lang);
  const posts = await api.post.list();
  return (
    <div>
      <Typography variant="h1">{t.blog.title}</Typography>
      <Alert color="success">Hello</Alert>
      <Button variant="outlined">Some button text</Button>
      <Button variant="contained">Some button text</Button>
      {posts.map((post) => (
        <div key={post.id}>
          <div>{post.id}</div>
          <div>
            <Link component={NextLink} href={`/${lang}/blog/${post.id}`}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
