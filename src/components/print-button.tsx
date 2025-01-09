'use client';

import PrintIcon from '@mui/icons-material/Print';
import { IconButton } from '@mui/material';

export const PrintButton = () => {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <IconButton onClick={handlePrint} color="primary">
      <PrintIcon />
    </IconButton>
  );
};
