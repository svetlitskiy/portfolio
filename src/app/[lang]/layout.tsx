import './../globals.css';
import { Navigation } from '@/components/navigation';
import { langList } from '@/conf';
import { LangSwitcher } from '@/client/components/lang-switcher';
import { Footer } from '@/components/footer';
import { Ubuntu_Mono } from 'next/font/google';
import { YandexMetrika } from '@/components/analytics/yandex-metrika.component';

const ubuntuMono = Ubuntu_Mono({
  subsets: ['cyrillic', 'latin'],
  weight: '400',
});

export async function generateStaticParams() {
  return langList.map((lang) => ({
    lang,
  }));
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string; url: URL }>;
}>) {
  const { lang } = await params;
  const metrikaId = process.env.NEXT_PUBLIC_YC_METRIC;
  
  return (
    <html lang={lang}>
      <body className={`${ubuntuMono.className} bg-background`}>
        {metrikaId && <YandexMetrika id={metrikaId} />}
        <header className="flex flex-col md:flex-row items-center justify-between px-4 py-1 bg-background text-primary print:hidden">
          <Navigation params={{ lang }} />
          {/*<ThemeToggle />*/}
          <LangSwitcher params={{ lang }} />
        </header>
        <main className="flex flex-col">{children}</main>

        <footer className="print:hidden p-4 ">
          <Footer lang={lang} />
        </footer>
      </body>
    </html>
  );
}
