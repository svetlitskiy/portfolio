import {api} from '@/api/api';
import {JSX} from 'react';
import Link from 'next/link';
import {langList} from '@/conf';
import {getI18n} from '@/i18n/i18n';
import {Typography} from '@mui/material';

export async function generateStaticParams() {
  return langList.map((lang) => ({
    lang,
  }));
}

export default async function BlogPage({params}: { params: Promise<{ lang: string }> }): Promise<JSX.Element> {
  const {lang} = await params;
  const t = getI18n(lang);
  const posts = await api.post.list();
  return (
    <div>
      <Typography variant="h1">{t.blog.title}</Typography>
      {posts.map((post) => (<div key={post.id}>
        <div>{post.id}</div>
        <div><Link href={`/src/app/%5Blang%5D/blog/${post.id}`}>{post.title}</Link></div>
      </div>))}
    </div>

  );
}
