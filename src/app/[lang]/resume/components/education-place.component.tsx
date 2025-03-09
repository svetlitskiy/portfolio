import { ResumeEducationPlaceInterface } from '@/interfaces/resume.interface';
import { Link, Stack, Typography } from '@mui/material';
import NextLink from 'next/link';

export default function EducationPlaceComponent({
  lang,
  place,
}: {
  lang: string;
  place: ResumeEducationPlaceInterface;
}) {
  const index = `${place.period.start.getTime()}`;
  const toggleKeyId = `education-item-${index}`;
  return (
    <article
      key={`education-${index}`}
      itemProp="hasCredential"
      itemScope
      itemType="https://schema.org/EducationalOccupationalCredential"
      className="flex flex-row "
    >
      <div className="flex flex-col">
        {/*<ToggleButton lang={lang} htmlElementId={toggleKeyId} disabled={!place?.description.length} />*/}
        <div className="flex-1 flex flex-row divide-x divide-gray-500">
          <div className="flex-auto"></div>
          <div className="flex-auto"></div>
        </div>
      </div>

      <div className="flex flex-col gap-3 flex-auto">
        <div className="flex flex-col">
          <div
            itemProp="recognizedBy"
            itemScope
            itemType="https://schema.org/Organization"
            className="flex flex-col md:flex-row justify-between"
          >
            <Typography variant="h3" itemProp="legalName">
              {place.organization}
            </Typography>
            {place.link && (
              <Link itemProp="url" href={place.link} component={NextLink}>
                {place.link}
              </Link>
            )}
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <Typography itemProp="credentialCategory" variant="body1">
              {place.program}
            </Typography>
            <Stack direction="row" spacing={1}>
              <Typography
                variant="body1"
                // dateTime={place?.period?.start.toISOString().substring(0, 7)}
              >
                {place?.period?.start.toLocaleDateString(lang)}
              </Typography>
              <Typography variant="body1">—</Typography>
              <Typography
                variant="body1"
                // dateTime={place?.period?.end.toISOString().substring(0, 7)}
              >
                {place?.period?.end.toLocaleDateString(lang)}
              </Typography>
            </Stack>
          </div>
        </div>

        {place?.description.length > 0 && (
          <div itemProp="competencyRequired" id={toggleKeyId} className="hidden print:flex flex-col pl-4">
            {place?.description &&
              place?.description.map((descriptionItem, i) => (
                <Typography variant="body2" key={`exp-detail-${index}-${i}`}>
                  {descriptionItem}
                </Typography>
              ))}
          </div>
        )}
      </div>
    </article>
  );
}
