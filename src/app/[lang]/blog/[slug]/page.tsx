import { JSX } from 'react';
import { getMdFilesById, getSortedMdFiles } from '@/shared/helpers/md-files.helper';
import { remark } from 'remark';
import html from 'remark-html';

export async function generateStaticParams({ params }: { params: { lang: string } }) {
  const pages = await getSortedMdFiles(`src/posts/${params.lang}`);
  return pages.map((page) => ({
    slug: page.id,
    lang: params.lang,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; lang: string }>;
}): Promise<JSX.Element> {
  const { slug, lang } = await params;

  const post = await getMdFilesById(`src/posts/${lang}`, slug);

  const htmlContent = (await remark().use(html).process(post.content)).toString();

  return (
    <div className="p-4">
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
