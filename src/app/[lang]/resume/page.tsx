import { Link, Typography } from '@mui/material';
import { contacts, langList } from '@/conf';
import { getI18n, replaceTextVars } from '@/i18n/i18n';

import NextLink from 'next/link';
import { api } from '@/api/api';
import { ResumeEducationPlaceInterface, ResumeWorkPlaceInterface } from '@/interfaces/resume.interface';
import ExperiencePlaceComponent from '@/app/[lang]/resume/components/experience-place.component';
import EducationPlaceComponent from '@/app/[lang]/resume/components/education-place.component';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { PrintButton } from '@/components/print-button';

export async function generateStaticParams() {
  return langList.map((lang) => ({
    lang,
  }));
}

export default async function ResumePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getI18n(lang);
  const resume = await api.resume.get(lang);

  return (
    <section
      itemScope
      itemType="https://schema.org/Person"
      className="xl:max-w-[1280px] mx-auto p-4 gap-6 flex flex-col w-full"
    >
      <header className="pb-16 md:pb-8 flex flex-col md:flex-row-reverse md:justify-between items-center gap-2">
        <div>
          <img
            src={`${contacts.github.avatar}?s=200`}
            alt={t.main.name}
            width={200}
            height={200}
            className="rounded-full print:rounded"
          />
        </div>
        <div>
          <Typography
            variant="h1"
            itemProp="name"
            className="md:whitespace-pre-wrap md:!break-spaces md:w-10 uppercase text-center"
          >
            {t.main.name}
          </Typography>
          <Typography
            variant="h3"
            component={'p'}
            itemProp="jobTitle"
            className="uppercase bg-background text-primary invert absolute left-0 py-2 pr-4 pl-4 xl:pl-[clamp(16px,calc(8px+(100vw-1280px)/2),100vw)] print:invert-0 print:normal-case"
          >
            Fullstack/Node.js Developer
          </Typography>
        </div>
      </header>

      <aside className="print:hidden absolute right-2 top-12">
        <PrintButton />
      </aside>

      <section className="hidden">
        <Typography variant="h2">Skills</Typography>
        <ul>
          <li itemProp="skills">JavaScript</li>
          <li itemProp="skills">TypeScript</li>
          <li itemProp="skills">Node.js</li>
          <li itemProp="skills">React</li>
          <li itemProp="skills">NestJS</li>
        </ul>
      </section>

      <section>
        <Typography variant="h2">{t.resume.contacts.title}</Typography>
        <Typography variant="body1">
          <strong>{t.resume.contacts.email}:</strong>{' '}
          <Link component={NextLink} href={`mailto:${contacts.email}`} itemProp="email">
            {contacts.email}
          </Link>
        </Typography>
        <Typography variant="body1">
          <strong>{t.resume.contacts.telegram}:</strong>{' '}
          <Link component={NextLink} href={contacts.telegram.link} itemProp="sameAs">
            {contacts.telegram.username}
          </Link>
        </Typography>
        <div className="print:hidden flex flex-row items-center">
          <Typography variant="body1">
            <strong>{t.resume.contacts.socials}:</strong>{' '}
          </Typography>
          <Link component={NextLink} href={contacts.linkedin} itemProp="sameAs">
            <LinkedInIcon sx={{ width: 36, height: 36 }} />
          </Link>
          <Link component={NextLink} href={contacts.github.page} itemProp="sameAs">
            <GitHubIcon sx={{ width: 36, height: 36 }} />
          </Link>
        </div>
      </section>

      {resume.summary && (
        <section className="">
          <Typography variant="h2">{t.resume.summary.title}</Typography>
          {resume.summary?.text?.map((text, i) => (
            <Typography variant="body1" itemProp="description" key={`summary-text-${i}`}>
              {replaceTextVars(text, { experienceInYears: (new Date().getFullYear() - 2008).toString() })}
            </Typography>
          ))}
        </section>
      )}

      {resume?.experience && (
        <section className="flex flex-col">
          <Typography variant="h2">{t.resume.experience.title}</Typography>
          <div className="flex flex-col">
            {resume.experience.items.map((place: ResumeWorkPlaceInterface, index) => {
              const hideCompanyName = resume?.experience?.items[index - 1]?.companyName === place.companyName;
              return (
                <ExperiencePlaceComponent
                  key={`experience-place-${index}`}
                  lang={lang}
                  place={place}
                  hideCompany={hideCompanyName}
                />
              );
            })}
          </div>
        </section>
      )}

      {resume?.education && (
        <section className="mb-8">
          <Typography variant="h4">{t.resume.education.title}</Typography>
          <div className="flex flex-col">
            {resume.education.items.map((place: ResumeEducationPlaceInterface, index) => (
              <EducationPlaceComponent key={`education-place-${index}`} lang={lang} place={place} />
            ))}
          </div>
        </section>
      )}
    </section>
  );
}
