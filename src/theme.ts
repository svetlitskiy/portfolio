import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'light', // или 'dark'
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default theme;
