import { JSX } from 'react';
import { api } from '@/api/api';
import Image from 'next/image';

export async function generateStaticParams() {
  const pages = await api.project.list();
  return pages.map((page) => ({
    slug: page.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }): Promise<JSX.Element> {
  const { slug } = await params;
  const project = await api.project.get(slug);
  return (
    <div>
      <div>Project Number {project.id}</div>
      {project.images.map((image, i) => (
        <div key={`pr-${project.id}-img-${image}-${i}`}>
          {image}
          <Image width={1200} height={800} src={image} alt={project.title} />
        </div>
      ))}
    </div>
  );
}
