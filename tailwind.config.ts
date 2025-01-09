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
    },
  },
  plugins: [],
} satisfies Config;
