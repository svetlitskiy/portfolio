'use client';

import { IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export const ToggleButton = ({ params }: { params: { lang: string; htmlElementId: string } }) => {
  const { lang, htmlElementId } = params;

  console.log('lang', lang);

  const toggle = () => {
    const el = window?.document?.getElementById(htmlElementId);
    if (!el) {
      return;
    }
    if (el?.classList.contains('hidden')) {
      el.classList.remove('hidden');
    } else {
      el.classList.add('hidden');
    }
  };

  return (
    <IconButton aria-label="expand" size="large" onClick={() => toggle()}>
      <ArrowDownwardIcon />
    </IconButton>
  );
};
