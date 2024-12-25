import { JSX } from 'react';
import { api } from '@/api/api';

export async function generateStaticParams() {
  const pages = await api.post.list();
  return pages.map((page) => ({
    slug: page.id,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }): Promise<JSX.Element> {
  const { slug } = await params;
  const post = await api.post.get(slug);
  return (
    <div>
      <div>{post.id}</div>
      <div>{post.title}</div>
      <div>{post.description}</div>
    </div>
  );
}
