// "use client";

import Link from 'next/link';

export const LangSwitcher = () => {
  return <div className="flex flex-col gap-3">
    <Link href={`./`} locale="ru">ru</Link>
    <Link href={`./`}  locale="pt">pt</Link>
    <Link href={`./`}  locale="en">en</Link>
  </div>;
};
