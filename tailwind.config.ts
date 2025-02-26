import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)', // Используем переменную CSS для primary
        secondary: 'var(--color-secondary)', // Для secondary
        background: 'var(--color-background)', // Для фона
        surface: 'var(--color-surface)', // Для surface
        textPrimary: 'var(--color-textPrimary)', // Для основного текста
        textSecondary: 'var(--color-textSecondary)', // Для вторичного текста
      },
      backgroundColor: {
        primary: 'var(--color-primary)', // Для фона
        secondary: 'var(--color-secondary)', // Для фона
        background: 'var(--color-background)', // Для фона
        surface: 'var(--color-surface)', // Для фона
      },
      textColor: {
        primary: 'var(--color-textPrimary)', // Для текста
        secondary: 'var(--color-textSecondary)', // Для текста
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '2.25rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
            },
            p: {
              fontSize: '1.125rem',
              lineHeight: '1.75',
              marginBottom: '1.5rem',
            },
            // Добавьте другие элементы по необходимости
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
