'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { langList } from '@/conf';
import { Typography } from '@mui/material';

export const Redirect = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const userLocale = navigator.language.split('-')[0];
    const locale = langList.includes(userLocale) ? userLocale : 'en';

    if (!pathname.startsWith(`/${locale}`)) {
      router.push(`/${locale}/resume`);
    }
  }, [router]);

  return <Typography variant="body1">Detecting the language and redirecting...</Typography>;
};
