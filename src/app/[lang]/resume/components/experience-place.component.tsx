import { ResumeProjectInterface, ResumeWorkPlaceInterface } from '@/interfaces/resume.interface';
import { ToggleButton } from '@/client/components/toggle.button';
import { Link, Stack, Typography } from '@mui/material';
import NextLink from 'next/link';
import { getI18n } from '@/i18n/i18n';

export default function ExperiencePlaceComponent({
  lang,
  place,
  hideCompany = false,
}: {
  lang: string;
  place: ResumeWorkPlaceInterface;
  hideCompany?: boolean;
}) {
  const t = getI18n(lang);
  const index = `${place.period.start.getTime()}`;
  const toggleKeyId = `experience-item-${index}`;
  const isHasDetails = !!place.projects?.length;
  return (
    <article key={`exp-${index}`} itemScope itemType="https://schema.org/JobPosting" className="flex flex-row ">
      <div className="flex flex-col">
        {!hideCompany && <ToggleButton lang={lang} htmlElementId={toggleKeyId} disabled={!isHasDetails} />}

        <div className="flex-1 flex flex-row divide-x divide-gray-500 w-[48px]">
          <div className="flex-auto"></div>
          <div className="flex-auto"></div>
        </div>
      </div>

      <div className="flex flex-col gap-3 flex-auto">
        <div className="flex flex-col">
          {!hideCompany && (
            <div
              className="flex flex-col md:flex-row justify-between pt-1"
              itemProp="hiringOrganization"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <Typography variant="h3" itemProp="name">
                {place.companyName}
              </Typography>
              {place.link && (
                <Link href={place.link} component={NextLink}>
                  {place.link}
                </Link>
              )}
            </div>
          )}

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

        {isHasDetails && (
          <div id={toggleKeyId} className="hidden print:flex pl-4">
            {place.description &&
              place.description?.map((text, i) => (
                <Typography variant="body1" itemProp="description" key={`place-description-${i}`}>
                  {text}
                </Typography>
              ))}

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
        )}
      </div>
    </article>
  );
}
