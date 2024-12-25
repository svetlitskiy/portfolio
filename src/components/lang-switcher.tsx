// "use client";

import Link from 'next/link';

export const LangSwitcher = async ({params}: { params: Promise<{ lang: string }> | { lang: string } }) => {
  const {lang} = await params;
  return (
    <div className="flex flex-row gap-2">
      {lang !== 'pt' && <Link className="text-2xl" href="/pt/">🇧🇷</Link>}
      {lang !== 'en' &&  <Link className="text-2xl" href="/en/">🇬🇧</Link>}
      {lang !== 'ru' &&  <Link className="text-2xl" href="/ru/">🇷🇺</Link>}
    </div>
  );
};
