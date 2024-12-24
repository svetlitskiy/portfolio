import Link from 'next/link';
import {getI18n} from '@/i18n/i18n';

export const Navigation = async ({params}: { params: Promise<{ lang: string }> }) => {
  const {lang} = await params;
  const t = getI18n(lang);
  return (
    <nav className="flex flex-row gap-3">
      <Link href="/en">Home</Link>
      <Link href="/en/blog">{t.blog.title}</Link>
      <Link href="/en/resume">Resume / CV</Link>
    </nav>
  )
};
