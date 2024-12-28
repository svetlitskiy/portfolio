'use client';

import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from 'react';

export const ToggleButton = ({
  htmlElementId,
  disabled = false,
}: {
  lang: string;
  htmlElementId: string;
  disabled?: boolean;
}) => {
  const [hidden, setHidden] = useState<boolean>(false);

  const toggle = () => {
    const el = window?.document?.getElementById(htmlElementId);
    if (!el) {
      return;
    }
    if (el?.classList.contains('hidden')) {
      el.classList.remove('hidden');
      setHidden(true);
    } else {
      el.classList.add('hidden');
      setHidden(false);
    }
  };

  return (
    <IconButton
      className="w-[10px] h-[10px]"
      disabled={disabled}
      aria-label="expand"
      size="large"
      onClick={() => toggle()}
    >
      <ArrowForwardIosIcon className={hidden ? 'rotate-90' : ''} />
    </IconButton>
  );
};
