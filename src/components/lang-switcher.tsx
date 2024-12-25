'use client';

import { usePathname } from 'next/navigation';

export const LangSwitcher = ({ params }: { params: { lang: string; path: string } }) => {
  const pathname = usePathname();
  const { lang } = params;
  const path = pathname.replace(`/${lang}/`, '');

  console.log('pathname', pathname)
  console.log('path', path)
  return (
    <div className="flex flex-row gap-2">
      {lang !== 'pt' && (
        <a className="text-2xl" href={`/pt/${path}`}>
          🇧🇷
        </a>
      )}
      {lang !== 'en' && (
        <a className="text-2xl" href={`/en/${path}`}>
          🇬🇧
        </a>
      )}
      {lang !== 'ru' && (
        <a className="text-2xl" href={`/ru/${path}`}>
          🇷🇺
        </a>
      )}
    </div>
  );
};
