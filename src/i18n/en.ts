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
      description:
        'Free online tool to convert REM to PX and vice versa. Customize the base font size for precise results!',
      form: {
        base: {
          label: 'Base font size',
        },
        px: {
          label: 'Px',
        },
        rem: {
          label: 'Rem',
        },
      },
    },
    hexToRgbConverter: {
      title: 'HEX to RGB Converter',
      description: 'Free online tool to convert color from HEX to RGB and vice versa',
      form: {
        hex: {
          label: 'HEX Color',
        },
        red: {
          label: 'Red',
        },
        green: {
          label: 'Green',
        },
        blue: {
          label: 'Blue',
        },
        opacity: {
          label: 'Opacity',
        },
      },
    },
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
