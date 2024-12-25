import { JSX } from 'react';
import { api } from '@/api/api';

export async function generateStaticParams() {
  const pages = await api.post.list();
  return pages.map((page) => ({
    slug: page.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }): Promise<JSX.Element> {
  const { slug } = await params;
  const project = await api.post.get(slug);
  return (
    <div>
      <div>Project Number {project.id}</div>
    </div>
  );
}
