import './../globals.css';
import { Navigation } from '@/components/navigation';
import { langList } from '@/conf';
import { LangSwitcher } from '@/client/components/lang-switcher';
import { ThemeToggle } from '@/client/components/theme-toggle';
import { Footer } from '@/components/footer';

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
  return (
    <div>
      <header className="flex flex-col md:flex-row items-center justify-between px-2 py-1 bg-background text-primary print:hidden">
        <Navigation params={{ lang }} />
        <ThemeToggle params={{ lang }} />
        <LangSwitcher params={{ lang }} />
      </header>
      <main className="flex flex-col">{children}</main>

      <footer className="print:hidden p-4 ">
        <Footer lang={lang} />
      </footer>
    </div>
  );
}
