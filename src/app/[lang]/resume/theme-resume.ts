'use client';

import { createTheme } from '@mui/material';

export const themeResume = createTheme({
  typography: {
    fontFamily: '"Ubuntu Mono", monospace',
    h1: {
      // fontFamily: '"Ubuntu Mono"',
      fontSize: '3rem',
      fontWeight: 500,
      // letterSpacing: '0.01em',
      color: 'black',
    },
    h2: {
      // fontFamily: '"Ubuntu Mono"',
      fontSize: '2rem',
      color: 'black',
    },
    h3: {
      fontSize: '1.8rem',
      // fontFamily: '"Ubuntu Mono"',
    },
    body1: {
      fontWeight: 600,
      fontSize: '1.2rem',
      // fontFamily: '"Ubuntu Mono Regular italic"',
    },
    body2: {
      fontWeight: 500,
      fontSize: '1.1rem',
      // fontFamily: '"Ubuntu Mono Regular italic"',
    },
  },
});

export default themeResume;
