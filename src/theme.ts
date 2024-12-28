'use client';

import { createTheme, Theme } from '@mui/material/styles';

export const theme: Theme = createTheme({
  palette: {},
  typography: {
    h1: {
      color: 'var(--color-primary)', // Заголовок с основным цветом
    },
    h2: {
      color: 'var(--color-secondary)', // Вторичный заголовок
    },
    body1: {
      color: 'var(--color-textPrimary)', // Текст для body
    },
    body2: {
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
