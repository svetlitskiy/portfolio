import type { Metadata } from 'next';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export const metadata: Metadata = {
  title: 'Aleksey Svetlitskiy',
  description: 'Aleksey Svetlitskiy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>;
}
