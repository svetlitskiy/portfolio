import { langList } from '@/conf';
import { ThemeProvider } from '@mui/material';
import themeResume from './theme-resume';
import 'typeface-ubuntu-mono';

export async function generateStaticParams() {
  return langList.map((lang) => ({
    lang,
  }));
}

export default async function ResumeLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string; url: URL }>;
}>) {
  const { lang } = await params;
  console.log('lang', lang);
  return <ThemeProvider theme={themeResume}>{children}</ThemeProvider>;
}
