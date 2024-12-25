import { langList } from '@/conf';
import { ThemeProvider } from '@mui/material';
import { theme } from '@/theme';

export async function generateStaticParams() {
  return langList.map((lang) => ({
    lang,
  }));
}

export default async function ProjectLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string; url: URL }>;
}>) {
  const { lang } = await params;
  console.log('lang', lang);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
