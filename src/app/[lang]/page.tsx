import { JSX } from 'react';
import { langList } from '@/conf';

export async function generateStaticParams() {
  return langList.map((lang) => ({
    lang,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ lang: string }> }): Promise<JSX.Element> {
  const { lang } = await params;

  return <div>Empty page {lang}</div>;
}
