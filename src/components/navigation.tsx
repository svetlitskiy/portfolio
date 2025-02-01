import Link from 'next/link';
import { getI18n } from '@/i18n/i18n';

export const Navigation = async ({ params }: { params: Promise<{ lang: string }> | { lang: string } }) => {
  const { lang } = await params;
  const t = getI18n(lang);
  return (
    <nav className="flex flex-row gap-5">
      {/*<Link href={`/${lang}`}>{t.home.title}</Link>*/}
      {/*<Link href={`/${lang}/blog`}>{t.blog.title}</Link>*/}
      {/*<Link href={`/${lang}/portfolio`}>{t.portfolio.title}</Link>*/}
      <Link href={`/${lang}/tool`}>{t.tools.title}</Link>
      <Link href={`/${lang}/resume`}>{t.resume.title}</Link>
    </nav>
  );
};
