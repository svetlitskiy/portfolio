import { ThemeProvider } from '@mui/material';
import { theme } from '@/theme';

export default async function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
