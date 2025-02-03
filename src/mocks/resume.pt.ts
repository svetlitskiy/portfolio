import { ResumeInterface } from '@/interfaces/resume.interface';

export const resumePt: ResumeInterface = {
  name: 'Aleksei Svetlitskii',
  position: 'Desenvolvedor Fullstack/Node.js',
  projects: 'Projetos',
  summary: {
    text: [
      'Sou um <b>desenvolvedor full-stack com 17 anos de experiência</b>, focado em criar <b>soluções reais para negócios</b>, e não apenas escrever código. Minha especialidade é <b>Node.js, TypeScript e arquitetura de sistemas complexos</b>. Já desenvolvi <b>plataformas de cripto, serviços SaaS, bots para Telegram, soluções de IA e sistemas corporativos</b>.',
      'Tenho experiência tanto em backend quanto em frontend. Projeto <b>arquiteturas de microsserviços, otimizo desempenho</b>, integro sistemas de pagamento e crio <b>interfaces intuitivas</b>.',
      'Se você precisa de um desenvolvedor que não apenas "escreve código", mas <b>entende os objetivos do negócio e torna produtos lucrativos</b>, vamos conversar.',
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
        organization: 'Universidade Estadual do Sul dos Urais (SUSU)',
        program: 'Software para Computação e Sistemas Automatizados',
        link: 'https://www.susu.ru/',
        period: {
          start: new Date('2002-09-01'),
          end: new Date('2007-07-30'),
        },
        description: [
          'Faculdade de Matemática Aplicada.',
          'Especialização - software de sistemas automatizados para o setor financeiro.',
        ],
      },
    ],
  },
  experience: {
    items: [
      {
        companyName: 'Cere Network',
        link: 'https://www.cere.network',
        position: 'Desenvolvedor Fullstack/Node.js',
        period: {
          start: new Date('2021-09-15'),
          end: new Date('2024-10-22'),
        },
        description: [
          'Eu estive envolvido na integração do protocolo criptográfico principal da empresa em diversas soluções, assim como na criação de produtos variados baseados nele. Participei de todo o ciclo de desenvolvimento, desde a ideação e design até a implementação, testes de carga e lançamento. Trabalhando em diferentes equipes em uma startup internacional, ajudei a transformar o protocolo em uma ferramenta prática e valiosa tanto para usuários quanto para empresas. ',
          'Foi uma experiência fascinante que combinou a resolução de desafios complexos com a colaboração entre equipes de diferentes países.',
        ],
        projects: [
          {
            title: 'Gerenciamento de Cluster DDC',
            link: 'https://www.cere.network/hub/ddc-cluster-management',
            description:
              'Sistema de gerenciamento de clusters no produto principal da empresa - DDC (Decentralized Data Clusters)',
          },
          {
            title: 'Carteira Cere',
            link: 'https://wallet.cere.io',
            description: 'Carteira de criptomoeda Cere Wallet baseada em Web3Auth',
          },
          {
            title: 'Marketplace Davinci NFT',
            link: 'https://www.ondavinci.com/',
            description:
              'Marketplace onde artistas podem vender NFTs como ingressos para conteúdo exclusivo ou eventos (shows)',
          },
          {
            title: 'Scanner de Código QR',
            link: 'https://qr-code-scanner.core.aws.cere.io',
            description:
              'Aplicativo para escanear ingressos em eventos, totalmente integrado ao Marketplace Davinci NFT',
          },
          {
            title: 'Sistema de Orquestração de Agentes de IA',
            description:
              'Sistema que permite criar fluxos de trabalho com agentes de IA para resolver problemas específicos. Pode ser implementado em recursos de nuvem ou servidores dedicados.',
          },
        ],
      },
      {
        companyName: 'Newity Ltda',
        position: 'Desenvolvedor Fullstack/Node.js',
        link: 'https://newity.ru/',
        period: {
          start: new Date('2019-01-01'),
          end: new Date('2021-09-30'),
        },
        projects: [
          {
            title: 'Exchange de Criptomoedas SENDEX',
            description: 'Exchange privada de criptomoedas para negociação de metais tokenizados',
          },
          {
            title: 'Atomyze',
            link: 'https://atomyze.ru/',
            description: 'Plataforma para tokenização de ativos',
          },
        ],
      },
      {
        companyName: 'Nexign',
        link: 'https://nexign.ru/',
        position: 'Líder de Equipe',
        period: {
          start: new Date('2018-01-01'),
          end: new Date('2018-12-31'),
        },
        projects: [],
      },
      {
        companyName: 'Nexign',
        link: 'https://nexign.ru/',
        position: 'Gerente de Garantia de Qualidade',
        period: {
          start: new Date('2016-10-16'),
          end: new Date('2017-12-31'),
        },
        projects: [],
      },
      {
        companyName: 'Nexign',
        link: 'https://nexign.ru/',
        position: 'Membro do Comitê de Melhoria de Desenvolvimento',
        period: {
          start: new Date('2015-06-01'),
          end: new Date('2017-06-30'),
        },
        projects: [],
      },
      {
        companyName: 'Nexign',
        link: 'https://nexign.ru/',
        position: 'Engenheiro de Software',
        period: {
          start: new Date('2014-07-10'),
          end: new Date('2016-10-15'),
        },
        projects: [],
      },
      {
        companyName: 'Ellis IT Ltda',
        link: 'https://www.ellis.ru/',
        position: 'Engenheiro de Software',
        period: {
          start: new Date('2012-08-01'),
          end: new Date('2014-07-15'),
        },
        projects: [],
      },
      {
        companyName: 'Pride Ltda',
        link: 'https://www.pride-net.ru/',
        position: 'Engenheiro de Software',
        period: {
          start: new Date('2008-08-01'),
          end: new Date('2012-07-27'),
        },
        projects: [],
      },
    ],
  },
};
