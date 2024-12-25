interface I18nResumeProjectInterface {
  title: string;
  link?: string;
  description: string;
}

export interface I18nResumeExperienceInterface {
  companyName: string;
  link?: string;
  position: string;
  period: { start: Date; end: Date };
  responsibilities?: string[];
  achievements?: string[];
  projects?: I18nResumeProjectInterface[];
}

export interface I18nLocaleInterface {
  main: {
    name: string;
  };
  home: {
    title: string;
  };
  blog: {
    title: string;
  };
  resume: {
    title: string;
    position: string;
    projects: string;
    education?: {
      title: string;
    };
    summary?: {
      title: string;
      text: string[];
    };
    experience?: {
      title: string;
      items: I18nResumeExperienceInterface[];
    };
  };
}
