'use client';

import { usePathname, useRouter } from 'next/navigation';
import { MouseEvent } from 'react';

export const LangSwitcher = ({ params }: { params: { lang: string } }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { lang } = params;
  const path = pathname.replace(`/${lang}/`, '');
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const navigate = (e: MouseEvent, lang: string) => {
    e.preventDefault();
    const url = `/${basePath}/${lang}/${path}`.replaceAll('//', '/');
    router.push(url);
  };

  return (
    <div className="flex flex-row gap-2">
      {lang !== 'pt' && (
        <a className="text-2xl" href={`${basePath}/pt/${path}`} onClick={(e) => navigate(e, 'pt')}>
          🇧🇷
        </a>
      )}
      {lang !== 'en' && (
        <a className="text-2xl" href={`${basePath}/en/${path}`} onClick={(e) => navigate(e, 'en')}>
          🇬🇧
        </a>
      )}
      {lang !== 'ru' && (
        <a className="text-2xl" href={`${basePath}/ru/${path}`} onClick={(e) => navigate(e, 'ru')}>
          🇷🇺
        </a>
      )}
    </div>
  );
};
