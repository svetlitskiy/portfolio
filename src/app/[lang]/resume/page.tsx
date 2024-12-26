import { Stack, Link, Typography } from '@mui/material';
import { contacts, langList } from '@/conf';
import { getI18n } from '@/i18n/i18n';

import NextLink from 'next/link';
import { api } from '@/api/api';
import { ResumeProjectInterface, ResumeWorkPlaceInterface } from '@/interfaces/resume.interface';
import { ToggleButton } from '@/client/components/toggle.button';

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
    <article
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
            className="rounded-full md:rounded"
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
            className="uppercase bg-background text-primary invert absolute left-0 py-2 pr-4 pl-4 xl:pl-[clamp(16px,calc(8px+(100vw-1280px)/2),100vw)]"
          >
            Fullstack/Node.js Developer
          </Typography>
        </div>
      </header>

      <section className="hidden">
        <Typography variant="h2">Контакты</Typography>
        <Typography variant="body1">
          <strong>Email:</strong>{' '}
          <Link component={NextLink} href={`mailto:${contacts.email}`} itemProp="email">
            {contacts.email}
          </Link>
        </Typography>
        <Typography variant="body1">
          <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressLocality">Florianópolis</span>, <span itemProp="addressRegion">SC</span>,{' '}
            <span itemProp="addressCountry">Brazil</span>
          </span>
        </Typography>
      </section>

      {resume.summary && (
        <section className="hidden">
          <Typography variant="h2">{t.resume.summary.title}</Typography>
          {resume.summary?.text?.map((text, i) => (
            <Typography variant="body1" itemProp="description" key={`summary-text-${i}`}>
              {text}
            </Typography>
          ))}
        </section>
      )}

      {resume?.experience && (
        <section className="flex flex-col">
          <Typography variant="h2">{t.resume.experience.title}</Typography>
          <div className="flex flex-col">
            {resume.experience.items.map((place: ResumeWorkPlaceInterface, index) => (
              <div
                key={`exp-${index}`}
                itemProp="workExperience"
                itemScope
                itemType="https://schema.org/Organization"
                className="flex flex-row "
              >
                <div className="flex flex-col">
                  <ToggleButton params={{ lang, htmlElementId: `exp-detail-${index}` }} />
                  <div className="flex-1 flex flex-row divide-x divide-gray-500">
                    <div className="flex-auto"></div>
                    <div className="flex-auto"></div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 flex-auto">
                  <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row justify-between">
                      <Typography variant="h3" itemProp="name">
                        {place.companyName}
                      </Typography>
                      {place.link && (
                        <Link href={place.link} component={NextLink}>
                          {place.link}
                        </Link>
                      )}
                    </div>

                    <div className="flex flex-col md:flex-row justify-between">
                      <Typography variant="body1" itemProp="jobTitle">
                        {place.position}
                      </Typography>
                      <Stack direction="row" spacing={1}>
                        <Typography
                          component="time"
                          variant="body1"
                          itemProp="startDate"
                          dateTime={place?.period?.start.toISOString().substring(0, 7)}
                        >
                          {place?.period?.start.toLocaleDateString(lang)}
                        </Typography>
                        <Typography variant="body1">—</Typography>
                        <Typography
                          component="time"
                          variant="body1"
                          itemProp="endDate"
                          dateTime={place?.period?.end.toISOString().substring(0, 7)}
                        >
                          {place?.period?.end.toLocaleDateString(lang)}
                        </Typography>
                      </Stack>
                    </div>
                  </div>

                  <div id={`exp-detail-${index}`} className="">
                    <div></div>
                    {place.projects && place.projects.length > 0 && (
                      <div>
                        <Typography variant="h4">{t.resume.projects.title}</Typography>
                        <ul>
                          {place?.projects?.map((project: ResumeProjectInterface, index: number) => (
                            <li key={`p_${index}`} className="p-1">
                              <article itemProp="worksFor" itemScope itemType="https://schema.org/CreativeWork">
                                <Typography variant="h5" itemProp="name">
                                  {project.title}
                                </Typography>{' '}
                                {project?.link && (
                                  <Link component={NextLink} href={project.link}>
                                    {project.link}
                                  </Link>
                                )}
                              </article>
                              <Typography variant="body2" itemProp="description">
                                {project.description}
                              </Typography>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {resume?.education && (
        <section className="mb-8">
          <Typography variant="h4">{t.resume.education.title}</Typography>
          <ul className="list-disc pl-6">
            <li>
              <strong>Udacity:</strong> Deep Learning (2018)
            </li>
            <li>
              <strong>South Ural State University (SUSU):</strong> Software Engineering (2002 - 2007)
            </li>
          </ul>
        </section>
      )}
    </article>
  );
}
