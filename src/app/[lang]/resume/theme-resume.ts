'use client';

import { createTheme } from '@mui/material';

export const themeResume = createTheme({
  typography: {
    fontFamily: '"Ubuntu Mono"',
    h1: {
      fontSize: '3rem',
      fontWeight: 500,
      color: 'black',
    },
    h2: {
      fontSize: '2rem',
      color: 'black',
    },
    h3: {
      fontSize: '1.8rem',
    },
    body1: {
      fontWeight: 500,
      fontSize: '1.2rem',
    },
    body2: {
      fontWeight: 500,
      fontSize: '1.1rem',
    },
  },
});

export default themeResume;
