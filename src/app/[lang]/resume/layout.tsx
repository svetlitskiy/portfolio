import { ThemeProvider } from '@mui/material';
import themeResume from './theme-resume';

export default async function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider theme={themeResume}>{children}</ThemeProvider>;
}
