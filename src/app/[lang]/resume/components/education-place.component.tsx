import { ResumeEducationPlaceInterface } from '@/interfaces/resume.interface';
import { ToggleButton } from '@/client/components/toggle.button';
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
      itemScope
      itemProp="jobTitle"
      itemType="https://schema.org/JobPosting"
      className="flex flex-row "
    >
      <div className="flex flex-col">
        <ToggleButton lang={lang} htmlElementId={toggleKeyId} disabled={!place?.description.length} />
        <div className="flex-1 flex flex-row divide-x divide-gray-500">
          <div className="flex-auto"></div>
          <div className="flex-auto"></div>
        </div>
      </div>

      <div className="flex flex-col gap-3 flex-auto">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row justify-between">
            <Typography variant="h3" itemProp="name">
              {place.organization}
            </Typography>
            {place.link && (
              <Link href={place.link} component={NextLink}>
                {place.link}
              </Link>
            )}
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <Typography variant="body1" itemProp="jobTitle">
              {place.program}
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

        {place?.description.length > 0 && (
          <div id={toggleKeyId} className="hidden print:flex flex-col pl-4">
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
