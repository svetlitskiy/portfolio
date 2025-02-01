import { I18nLocaleInterface } from '@/i18n/i18n.interface';

export const i18nEn: I18nLocaleInterface = {
  numbers: {
    thousandSeparator: ',',
    decimalSeparator: '.',
  },
  main: {
    name: 'Aleksey Svetlitskiy',
  },
  home: {
    title: 'Home',
  },
  blog: {
    title: 'Blog',
  },
  portfolio: {
    title: 'Portfolio',
  },
  tools: {
    title: 'Tools',
    remToPixConverter: {
      title: 'REM to PX Converter',
      description: 'A tool for converting REM units to PX and vice versa with a customizable base font size.',
      form: {
        base: {
          label: 'Base font size',
        },
        px: {
          label: 'Px'
        },
        rem: {
          label: 'Rem'
        }
      }
    }
  },
  resume: {
    contacts: {
      title: 'Contacts',
      email: 'Email',
      telegram: 'Telegram',
      socials: 'Socials',
    },
    title: 'Resume / CV',
    projects: {
      title: 'Projects',
    },
    summary: {
      title: 'Summary',
    },
    education: {
      title: 'Education',
    },
    experience: {
      title: 'Work Experience',
    },
  },
};
