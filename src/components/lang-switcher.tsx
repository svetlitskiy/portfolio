'use client';

import { usePathname } from 'next/navigation';

export const LangSwitcher = ({ params }: { params: { lang: string; path: string } }) => {
  const pathname = usePathname();
  const { lang } = params;
  const path = pathname.replace(`/${lang}/`, '');
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

  return (
    <div className="flex flex-row gap-2">
      {lang !== 'pt' && (
        <a className="text-2xl" href={`${basePath}/pt/${path}`}>
          🇧🇷
        </a>
      )}
      {lang !== 'en' && (
        <a className="text-2xl" href={`${basePath}/en/${path}`}>
          🇬🇧
        </a>
      )}
      {lang !== 'ru' && (
        <a className="text-2xl" href={`${basePath}/ru/${path}`}>
          🇷🇺
        </a>
      )}
    </div>
  );
};
