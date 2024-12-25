
import {Footer} from '@/components/footer';
import {
  Stack,
  Link as MuiLink,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography
} from '@mui/material';
import {contacts, langList} from '@/conf';
import {getI18n} from '@/i18n/i18n';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import {I18nResumeExperienceInterface} from '@/i18n/i18n.interface';

export async function generateStaticParams() {
  return langList.map((lang) => ({
    lang,
  }));
}


export default async function ResumePage({params}: { params: Promise<{ lang: string }> }) {
  const {lang} = await params;
  const t = getI18n(lang);
  return (
    <article itemScope itemType="https://schema.org/Person" className="container mx-auto max-w-4xl px-4">
      <header className="mb-8 text-center">
        <Typography variant="h1" itemProp="name">{t.main.name}</Typography>
        <Typography variant="body1" itemProp="jobTitle">Fullstack/Node.js Developer</Typography>
        <img
          src={`${contacts.github.avatar}?s=200`}
          alt={t.main.name}
          width={200}
          height={200}
        />
      </header>

      <section>
        <Typography variant="h2">Контакты</Typography>
        <Typography variant="body1"><strong>Email:</strong> <MuiLink href={`mailto:${contacts.email}`}
                                                                     itemProp="email">{contacts.email}</MuiLink></Typography>
        <Typography variant="body1">
                <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="addressLocality">Florianópolis</span>, <span itemProp="addressRegion">SC</span>, <span
                  itemProp="addressCountry">Brazil</span>
              </span>
        </Typography>
      </section>

      {t.resume.summary && (<section>
        <Typography variant="h2">{t.resume.summary.title}</Typography>
        {t.resume.summary?.text?.map((text, i) => (
          <Typography variant="body1" itemProp="description" key={`summary-text-${i}`}>{text}</Typography>
        ))}

      </section>)}


      {t.resume.experience && (<section>
        <Typography variant="h2">{t.resume.experience.title}</Typography>
        <Stepper orientation="vertical">
          {t.resume.experience.items.map(((place: I18nResumeExperienceInterface, index) => (
            <Step active={false} key={`exp-${index}`}
                  expanded={true} itemProp="workExperience" itemScope itemType="https://schema.org/Organization">
              <StepLabel icon={<LocationCityIcon/>}>
                <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between"
                       className="truncate">
                  <Typography variant="h3" itemProp="name">{place.companyName}</Typography>
                  <MuiLink>{place.link}</MuiLink>
                </Stack>

                <Stack direction="row" spacing={2} justifyContent="space-between">
                  <Typography variant="body1" itemProp="jobTitle">{place.position}</Typography>
                  <Stack direction="row" spacing={1}>
                    <Typography variant="body2" itemProp="startDate"
                                dateTime={place?.period?.start.toISOString().substring(0, 7)}>{place?.period?.start.toLocaleDateString(lang)}</Typography>
                    <Typography variant="body2">—</Typography>
                    <Typography variant="body2" itemProp="endDate"
                                dateTime={place?.period?.end.toISOString().substring(0, 7)}>{place?.period?.end.toLocaleDateString(lang)}</Typography>
                  </Stack>

                </Stack>

              </StepLabel>
              <StepContent>
                {place?.projects?.length > 0 && (<div>
                  <Typography variant="h4">{t.resume.projects}</Typography>
                  <ul>
                    {place?.projects?.map((project, index) => (<li key={`p_${index}`} className="p-1">
                      <article itemProp="worksFor" itemScope itemType="https://schema.org/CreativeWork">
                        <Typography variant="h5" itemProp="name">{project.title}</Typography> {project?.link &&
                          <MuiLink href={project.link}>{project.link}</MuiLink>}
                      </article>
                      <Typography variant="body2" itemProp="description">{project.description}</Typography>
                    </li>))}
                  </ul>
                </div>)}


              </StepContent>
            </Step>)))}
        </Stepper>
      </section>)}

      {t.resume.education && (
        <section className="mb-8">
          <Typography variant="h4">{t.resume.education.title}</Typography>
          <ul className="list-disc pl-6">
            <li><strong>Udacity:</strong> Deep Learning (2018)</li>
            <li><strong>South Ural State University (SUSU):</strong> Software Engineering (2002 - 2007)</li>
          </ul>
        </section>
      )}


      <Footer lang={lang}/>
    </article>

  );
}
