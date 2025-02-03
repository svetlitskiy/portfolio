'use client';

import { createTheme } from '@mui/material';

export const themeResume = createTheme({
  typography: {
    fontFamily: '"Ubuntu Mono"',
    h1: {
      fontSize: '3rem',
      fontWeight: 500,
      color: 'black',
      '@media print': {
        fontWeight: 700,
        fontSize: '18pt',
        fontFamily: `'EB Garamond', serif`,
      },
    },
    h2: {
      fontWeight: 500,
      fontSize: '2rem',
      color: 'black',
      '@media print': {
        fontWeight: 700,
        fontSize: '16pt',
        fontFamily: `'EB Garamond', serif`,
      },
    },

    h3: {
      fontWeight: 500,
      fontSize: '1.8rem',
      '@media print': {
        fontWeight: 700,
        fontSize: '14pt',
        fontFamily: `'EB Garamond', serif`,
      },
    },
    body1: {
      fontWeight: 400,
      fontSize: '1.2rem',
      '@media print': {
        fontSize: '12pt',
        fontFamily: `'EB Garamond', serif`,
      },
    },
    body2: {
      fontWeight: 400,
      fontSize: '1.1rem',
      '@media print': {
        fontSize: '10pt',
        fontFamily: `'EB Garamond', serif`,
      },
    },
  },
});

export default themeResume;
