import { I18nLocaleInterface } from '@/i18n/i18n.interface';

export const i18nRu: I18nLocaleInterface = {
  numbers: {
    thousandSeparator: ' ',
    decimalSeparator: ',',
  },
  main: {
    name: 'Светлицкий Алексей',
  },
  home: {
    title: 'Главная',
  },
  blog: {
    title: 'Блог',
  },
  portfolio: {
    title: 'Портфолио',
  },
  tools: {
    title: 'Инструменты',
    remToPixConverter: {
      title: 'Конвертер REM в PX',
      description: 'Инструмент для конвертации единиц REM в PX и обратно с настраиваемым базовым размером шрифта.',
      form: {
        base: {
          label: 'Базовый размер шрифта',
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
      title: 'Конвертер HEX в RGB',
      description: 'Инструмент для преобразования цвета из HEX в RGB и обратно',
      form: {
        hex: {
          label: 'HEX цвет',
        },
        red: {
          label: 'Красный',
        },
        green: {
          label: 'Зелёный',
        },
        blue: {
          label: 'Синий',
        },
        opacity: {
          label: 'Прозрачность',
        },
      },
    },
  },
  resume: {
    title: 'Резюме',
    contacts: {
      title: 'Контакты',
      email: 'Электронная почта',
      telegram: 'Telegram',
      socials: 'Социальные сети',
    },
    projects: {
      title: 'Проекты',
    },
    summary: {
      title: 'Общие сведения',
    },
    education: {
      title: 'Образование',
    },
    experience: {
      title: 'Опыт работы',
    },
  },
};
