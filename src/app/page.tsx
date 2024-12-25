import {langList} from '@/conf';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="flex flex-row gap-4 text-4xl">
        {langList.map(lang => (<Link key={`lang-${lang}`} href={`/${lang}`}>{`/${lang}`}</Link>))}
      </div>
    </div>
  );
}
