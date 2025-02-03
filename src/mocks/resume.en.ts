import { ResumeInterface } from '@/interfaces/resume.interface';

export const resumeEn: ResumeInterface = {
  name: 'Aleksei Svetlitskii',
  position: 'Fullstack/Node.js Developer',
  projects: 'Projects',
  summary: {
    text: [
      'I’m a <b>full-stack developer with {experienceInYears} years of experience</b>, focused on building <b>real business solutions</b> rather than just writing code. My expertise lies in <b>Node.js, TypeScript, and complex system architecture</b>. I’ve developed <b>crypto platforms, SaaS services, Telegram bots, AI solutions, and enterprise systems</b>.',

      'I’m equally skilled in both backend and frontend development. I design <b>microservice architectures, optimize performance</b>, integrate payment systems, and create <b>intuitive user interfaces.</b>',
      'If you need a developer who doesn’t just "write code" but <b>understands business goals and makes products profitable</b>, let’s talk.',
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
        organization: 'South Ural State University (SUSU)',
        program: 'Software for Computing and Automated Systems',
        link: 'https://www.susu.ru/',
        period: {
          start: new Date('2002-09-01'),
          end: new Date('2007-07-30'),
        },
        description: [
          'Faculty of Applied Mathematics.',
          'Specialization - software for automated systems in the financial and credit system.',
        ],
      },
    ],
  },
  experience: {
    items: [
      {
        companyName: 'Cere Network',
        link: 'https://www.cere.network',
        position: 'Fullstack/Node.js Developer',
        period: {
          start: new Date('2021-09-15'),
          end: new Date('2024-10-22'),
        },
        description: [
          'I was involved in integrating the company’s core crypto protocol into various solutions, as well as building diverse products based on it. From ideation and design to implementation and load testing, and launch, I participated in the full development cycle. Working across different teams in an international startup, I helped transform the protocol into a practical and valuable tool for both users and businesses. ',
          'It was a fascinating experience that combined solving complex challenges with collaborating across borders.',
        ],
        projects: [
          {
            title: 'DDC Cluster Management',
            link: 'https://www.cere.network/hub/ddc-cluster-management',
            description: "Cluster management system for the company's core product - DDC (Decentralized Data Clusters)",
          },
          {
            title: 'Cere Wallet',
            link: 'https://wallet.cere.io',
            description: 'Cere Wallet crypto wallet based on Web3Auth',
          },
          {
            title: 'Davinci NFT Marketplace',
            link: 'https://www.ondavinci.com/',
            description: 'Marketplace where artists can sell NFTs as tickets to exclusive content or events (concerts)',
          },
          {
            title: 'QR Code Scanner',
            link: 'https://qr-code-scanner.core.aws.cere.io',
            description:
              'Application for scanning tickets at events, fully integrated with the Davinci NFT Marketplace',
          },
          {
            title: 'AI Agents Orchestration System',
            description:
              'AI agent orchestration system that allows creating chains of AI agents to solve various applied tasks. Can be deployed both on cloud resources and dedicated servers.',
          },
        ],
      },
      {
        companyName: 'Newity LLC',
        position: 'Fullstack/Node.js Developer',
        link: 'https://newity.ru/',
        period: {
          start: new Date('2019-01-01'),
          end: new Date('2021-09-30'),
        },
        projects: [
          {
            title: 'SENDX Crypto Exchange',
            description: 'Private cryptocurrency exchange for trading tokenized metals',
          },
          {
            title: 'Atomyze',
            link: 'https://atomyze.ru/',
            description: 'Platform for asset tokenization',
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
        position: 'Quality Assurance Manager',
        period: {
          start: new Date('2016-10-16'),
          end: new Date('2017-12-31'),
        },
        projects: [],
      },
      {
        companyName: 'Nexign',
        link: 'https://nexign.ru/',
        position: 'Development Improvement Committee Member',
        period: {
          start: new Date('2015-06-01'),
          end: new Date('2017-06-31'),
        },
        projects: [],
      },
      {
        companyName: 'Nexign',
        link: 'https://nexign.ru/',
        position: 'Software Engineer',
        period: {
          start: new Date('2014-07-10'),
          end: new Date('2016-10-15'),
        },
        projects: [],
      },
      {
        companyName: 'Ellis IT LLC',
        link: 'https://www.ellis.ru/',
        position: 'Software Engineer',
        period: {
          start: new Date('2012-08-01'),
          end: new Date('2014-07-15'),
        },
        projects: [],
      },
      {
        companyName: 'Pride LLC',
        link: 'https://www.pride-net.ru/',
        position: 'Software Engineer',
        period: {
          start: new Date('2008-08-01'),
          end: new Date('2012-07-27'),
        },
        projects: [],
      },
    ],
  },
};
