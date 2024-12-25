import './../globals.css';
import { Navigation } from '@/components/navigation';
import { langList } from '@/conf';
import { LangSwitcher } from '@/components/lang-switcher';
import { ThemeToggle } from '@/client/components/theme-toggle';

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
      <header className="flex flex-row items-center justify-between px-2 py-1 bg-background text-primary">
        <Navigation params={{ lang }} />
        <ThemeToggle params={{ lang }} />
        <LangSwitcher params={{ lang }} />
      </header>
      <main>{children}</main>

      <footer></footer>
    </div>
  );
}
