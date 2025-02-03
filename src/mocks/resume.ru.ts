import { ResumeInterface } from '@/interfaces/resume.interface';

export const resumeRu: ResumeInterface = {
  name: 'Алексей Светлицкий',
  position: 'Fullstack/Node.js Разработчик',
  projects: 'Проекты',
  summary: {
    text: [
      'Я <b>full-stack разработчик с {experienceInYears}-летним опытом</b>, который делает не просто код, а <b>работающие бизнес-решения</b>. Специализируюсь на <b>Node.js, TypeScript и архитектуре сложных систем</b>. Разрабатывал криптоплатформы, SaaS-сервисы, Telegram-ботов, AI-решения и корпоративные системы.',
      'Одинаково уверенно работаю и с backend, и с frontend. Проектирую <b>микросервисные архитектуры, оптимизирую производительность</b>, интегрирую платежные системы и создаю <b>интуитивные интерфейсы</b>.',
      'Если вам нужен разработчик, который не просто «пишет код», а <b>понимает бизнес-цели и делает продукт прибыльным</b>, — давайте обсудим, как я могу помочь.',
    ],
  },
  education: {
    items: [
      {
        organization: 'Udacity',
        program: 'Deep Learning',
        link: 'https://www.udacity.com/',
        period: {
          start: new Date('2018-01-15'),
          end: new Date('2018-11-02'),
        },
        description: [],
      },
      {
        organization: 'International Software Testing Qualifications Board (ISTQB)',
        program: 'ISTQB Foundation Level',
        link: 'https://www.istqb.com/',
        period: {
          start: new Date('2018-09-10'),
          end: new Date('2018-12-15'),
        },
        description: [],
      },
      {
        organization: 'Южно-Уральский государственный университет (ЮУрГУ)',
        program: 'Программное обеспечение вычислительной техники и автоматизированных систем',
        link: 'https://www.susu.ru/',
        period: {
          start: new Date('2002-09-01'),
          end: new Date('2007-07-30'),
        },
        description: [
          'Факультет прикладной математики.',
          'Специализация - программное обеспечение автоматизированных систем финансово-кредитной системы.',
        ],
      },
    ],
  },
  experience: {
    items: [
      {
        companyName: 'Cere Network',
        link: 'https://www.cere.network',
        position: 'Fullstack/Node.js Разработчик',
        period: {
          start: new Date('2021-09-15'),
          end: new Date('2024-10-22'),
        },
        description: [
          'Я занимался интеграцией основного криптопротокола компании в различные решения, а также разработкой разнообразных продуктов на его основе. Участвовал во всех этапах процесса — от идеи и проектирования до реализации, нагрузочного тестирования и запуска. Работая в разных командах международного стартапа, помог сделать протокол практичным и полезным инструментом для пользователей и бизнеса. ',
          'Это был интересный опыт, сочетавший решение сложных задач и взаимодействие с коллегами из разных стран.',
        ],
        projects: [
          {
            title: 'DDC Cluster Management',
            link: 'https://www.cere.network/hub/ddc-cluster-management',
            description:
              'Система управления кластерами в основном продукте компании - DDC (Decentralized Data Clusters)',
          },
          {
            title: 'Cere Wallet',
            link: 'https://wallet.cere.io',
            description: 'Криптокошелек Cere Wallet на базе Web3Auth',
          },
          {
            title: 'Davinci NFT Marketplace',
            link: 'https://www.ondavinci.com/',
            description:
              'Маркетплейс на котором артисты могут продавать NFT как билеты на эксклюзивный контент или доступ на события (концерты)',
          },
          {
            title: 'QR Code Scanner',
            link: 'https://qr-code-scanner.core.aws.cere.io',
            description:
              'Приложение для сканирование билетов на мероприятиях, имеет полную интеграцию с Davinci NFT Marketplace',
          },
          {
            title: 'Система оркестрации AI агентов',

            description:
              'Система оркестрации AI агентов, которая позволяет создавать цепочки AI агентов для решения различных прикладных задач. Может разворачиваться как на облачных ресурсах, так и на выделенных серверах',
          },
        ],
      },
      {
        companyName: 'ООО «Ньюити»',
        position: 'Fullstack/Node.js Разработчик',
        link: 'https://newity.ru/',
        period: {
          start: new Date('2019-01-01'),
          end: new Date('2021-09-30'),
        },
        projects: [
          {
            title: 'Криптобиржа SENDEX',
            description: 'Закрытая криптовалютная биржа для торговли токенизированными металлами',
          },
          {
            title: 'Atomyze',
            link: 'https://atomyze.ru/',
            description: 'Платформа для токенезирования активов',
          },
        ],
      },
      {
        companyName: 'Nexign',
        link: 'https://nexign.ru/',
        position: 'Team Lead',
        period: {
          start: new Date('2018-01-01'),
          end: new Date('2018-12-31'),
        },
        projects: [],
      },
      {
        companyName: 'Nexign',
        link: 'https://nexign.ru/',
        position: 'Менеджер по обеспечению качества производства',
        period: {
          start: new Date('2016-10-16'),
          end: new Date('2017-12-31'),
        },
        projects: [],
      },
      {
        companyName: 'Nexign',
        link: 'https://nexign.ru/',
        position: 'Член Комитета по улучшению разработки',
        period: {
          start: new Date('2015-06-01'),
          end: new Date('2017-06-31'),
        },
        projects: [],
      },
      {
        companyName: 'Nexign',
        link: 'https://nexign.ru/',
        position: 'Инженер-программист',
        period: {
          start: new Date('2014-07-10'),
          end: new Date('2016-10-15'),
        },
        projects: [],
      },
      {
        companyName: 'ООО «Эллис ИТ»',
        link: 'https://www.ellis.ru/',
        position: 'Инженер-программист',
        period: {
          start: new Date('2012-08-01'),
          end: new Date('2014-07-15'),
        },
        projects: [],
      },
      {
        companyName: 'ООО «Прайд»',
        link: 'https://www.pride-net.ru/',
        position: 'Инженер-программист',
        period: {
          start: new Date('2008-08-01'),
          end: new Date('2012-07-27'),
        },
        projects: [],
      },
    ],
  },
};
