import { JSX } from 'react';
import { getI18n } from '@/i18n/i18n';
import { Typography } from '@mui/material';

export default async function ConmiPage({ params }: { params: Promise<{ lang: string }> }): Promise<JSX.Element> {
  const { lang } = await params;
  const t = getI18n(lang);
  return (
    <div className="p-6 md:p-10">
      <header className="mb-8">
        <Typography variant="h1" gutterBottom>
          {t.home.title}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Онлайн-платформа для русскоговорящих путешественников, предоставляющая услуги переводчиков в режиме реального
          времени и возможность удалённого сопровождения.
        </Typography>
      </header>

      <section className="mb-10">
        <Typography variant="h2" gutterBottom>
          О проекте
        </Typography>
        <Typography variant="body1" color="textPrimary" paragraph>
          Conmi помогает путешественникам решить неожиданные проблемы за границей, будь то участие в важной встрече,
          помощь с документами, организация звонков или переговоры, например, о поставках. Сервис обеспечивает быстрый
          доступ к профессиональным переводчикам, доступным круглосуточно.
        </Typography>
      </section>

      <section className="mb-10">
        <Typography variant="h2" gutterBottom>
          Моя роль
        </Typography>
        <Typography variant="body1" color="textPrimary" paragraph>
          Как разработчик, я полностью спроектировал и реализовал архитектуру приложения, обеспечив его надёжность,
          масштабируемость и интеграцию с внешними системами. Благодаря моему опыту, проект был успешно запущен и готов
          к дальнейшему развитию.
        </Typography>
      </section>

      <section className="mb-10">
        <Typography variant="h2" gutterBottom>
          Использованные технологии
        </Typography>
        <div className="flex flex-wrap gap-2">
          {[
            'Astro',
            'Tailwind CSS',
            'Vue 3',
            'Next.js',
            'PostgreSQL',
            'Serverless (Яндекс Cloud)',
            'Asterisk',
            'Unitpay',
          ].map((tech) => (
            <span key={tech} className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <Typography variant="h2" gutterBottom>
          Результат
        </Typography>
        <Typography variant="body1" color="textPrimary" paragraph>
          Сервис успешно запущен и активно используется клиентами. Благодаря надёжной архитектуре и удобному интерфейсу,
          платформа зарекомендовала себя как удобный инструмент для решения языковых барьеров и организации
          сопровождения за границей. Это позволяет клиентам экономить время и успешно решать свои задачи в любой точке
          мира.
        </Typography>
      </section>

      <footer className="text-center mt-16">
        <Typography variant="caption" color="textSecondary">
          © 2025 Aleksei Svetlitskii. Все права защищены.
        </Typography>
      </footer>
    </div>
  );
}
