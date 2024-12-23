import {JSX} from 'react';

export async function generateStaticParams() {
  const langList = ['en', 'ru', 'pt'];
  return langList.map((lang) => ({
    lang,
  }));
}



export default async function BlogPostPage({ params }: {params: Promise<{lang: string}>}): Promise<JSX.Element> {
  const { lang } = await params;

  return (
    <div>
      <div>{ lang }</div>
    </div>

  );
}
