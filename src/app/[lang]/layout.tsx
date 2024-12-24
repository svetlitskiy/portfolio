import "./../globals.css";
import {Navigation} from '@/components/navigation';
import Link from 'next/link';
import {langList} from '@/conf';


export async function generateStaticParams() {
  return langList.map((lang) => ({
    lang,
  }));
}


export default async function LangLayout({
                                     children,
  params
                                   }: Readonly<{
  children: React.ReactNode;
  params: Promise<{lang: string}>;
}>) {
  const { lang } = await params;
  return (
    <div>
      <header className="flex flex-row items-center justify-between px-2 py-1">
        <Navigation params={{ lang }}/>
        <div className="flex flex-row gap-2">
          <Link className="text-2xl" href="/pt/resume">🇧🇷</Link>
          <Link className="text-2xl" href="/en/resume">🇬🇧</Link>
          <Link className="text-2xl" href="/ru/resume">🇷🇺</Link>
        </div>
      </header>
      <main>
        {children}
      </main>

      <footer>

      </footer>
    </div>
  );
}
