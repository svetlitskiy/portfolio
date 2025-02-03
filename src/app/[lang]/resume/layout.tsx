import { ThemeProvider } from '@mui/material';
import themeResume from './theme-resume';
import { EB_Garamond } from 'next/font/google';

const ebGaramond = EB_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  display: 'swap',
});

export default async function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={themeResume}>
      <div className={ebGaramond.className}>{children}</div>
    </ThemeProvider>
  );
}
