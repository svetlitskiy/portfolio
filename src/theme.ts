'use client';

import { createTheme, Theme } from '@mui/material/styles';

export const theme: Theme = createTheme({
  palette: {},
  typography: {
    fontFamily: 'monospace',
    h1: {
      fontSize: '1.75rem', // 28px
      color: 'var(--color-textPrimary)', // Заголовок с основным цветом
    },
    h2: {
      fontSize: '1.5rem', // 24px
      color: 'var(--color-textPrimary)', // Вторичный заголовок
    },
    body1: {
      fontSize: '1.125rem', // 18px
      color: 'var(--color-textPrimary)', // Текст для body
    },
    body2: {
      fontSize: '1rem', // 16px,
      color: 'var(--color-textSecondary)', // Вторичный текст
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Радиус для всех кнопок
        },
        contained: {
          backgroundColor: 'var(--color-primary)', // Основной фон для кнопок типа contained
          color: 'var(--color-surface)', // Текст для кнопок типа contained
          '&:hover': {
            backgroundColor: 'var(--color-secondary)', // Цвет кнопки при наведении
          },
        },
        outlined: {
          borderColor: 'var(--color-primary)', // Цвет рамки для кнопок типа outlined
          color: 'var(--color-primary)', // Цвет текста для кнопок типа outlined
          '&:hover': {
            backgroundColor: 'var(--color-primary)', // Цвет фона при наведении
            color: 'var(--color-surface)', // Цвет текста при наведении
          },
        },
      },
    },
  },
  cssVariables: true,
});
