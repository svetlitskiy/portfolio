import { I18nLocaleInterface } from '@/i18n/i18n.interface';

export const i18nPt: I18nLocaleInterface = {
  numbers: {
    thousandSeparator: '.',
    decimalSeparator: ',',
  },
  main: {
    name: 'Aleksei Svetlitskii',
  },
  home: {
    title: 'Início',
  },
  blog: {
    title: 'Blog',
  },
  portfolio: {
    title: 'Portfólio',
  },
  tools: {
    title: 'Ferramentas',
    remToPixConverter: {
      title: 'Conversor de REM para PX',
      description:
        'Uma ferramenta para converter unidades REM em PX e vice-versa, com um tamanho de fonte base personalizável.',
      form: {
        base: {
          label: 'Tamanho da fonte base',
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
      title: 'Conversor de HEX para RGB',
      description: 'Ferramenta online gratuita para converter cores de HEX para RGB e vice-versa',
      form: {
        hex: {
          label: 'Cor HEX',
        },
        red: {
          label: 'Vermelho',
        },
        green: {
          label: 'Verde',
        },
        blue: {
          label: 'Azul',
        },
        opacity: {
          label: 'Opacidade',
        },
      },
    },
  },
  resume: {
    title: 'Currículo / CV',
    contacts: {
      title: 'Contatos',
      email: 'E-mail',
      telegram: 'Telegram',
      socials: 'Redes Sociais',
    },
    projects: {
      title: 'Projetos',
    },
    summary: {
      title: 'Informações Gerais',
    },
    education: {
      title: 'Educação',
    },
    experience: {
      title: 'Experiência Profissional',
    },
  },
};
