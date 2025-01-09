import type { Metadata } from 'next';
import { Ubuntu_Mono } from 'next/font/google';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

const ubuntuMono = Ubuntu_Mono({
  subsets: ['cyrillic', 'latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Aleksey Svetlitskiy',
  description: 'Aleksey Svetlitskiy',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntuMono.className} bg-background`}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
