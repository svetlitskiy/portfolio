import { ResumeInterface } from '@/interfaces/resume.interface';

export const resumeRu: ResumeInterface = {
  name: 'Алексей Светлицкий',
  position: 'Fullstack/Node.js Разработчик',
  projects: 'Проекты',
  summary: {
    text: [
      'Я люблю писать код и создавать решения, которые не только\n' +
        'решают задачи, но и приносят реальную ценность. За 20 лет\n' +
        'работы я занимался разными проектами, от криптоплатформ\n' +
        'и NFT-маркетплейсов до систем для AI. Моя основная\n' +
        'специализация — Node.js и TypeScript, а также создание API и\n' +
        'архитектура микросервисов.',

      'Помимо серверной части, я также работаю с фронтендом,\n' +
        'создавая удобные и понятные интерфейсы. Это позволяет\n' +
        'строить полноценные решения, где клиентская и серверная\n' +
        'части взаимодействуют друг с другом.',

      'Для меня успех проекта — это не только как он работает,\n' +
        'но и сколько пользы он приносит. А для меня результат\n' +
        'измеряется в том, насколько проект помогает зарабатывать и\n' +
        'приносить реальные деньги. Я всегда стремлюсь решать задачи\n' +
        'эффективно, оптимизируя приложения для стабильной работы и\n' +
        'роста.',
    ],
  },
  education: {
    items: []
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
          start: new Date('2021-09-15'),
          end: new Date('2024-10-22'),
        },
        projects: [],
      },
    ],
  },
};
