export interface ResumeProjectInterface {
  title: string;
  link?: string;
  description: string;
}

export interface ResumeWorkPlaceInterface {
  companyName: string;
  link?: string;
  position: string;
  period: { start: Date; end: Date };
  responsibilities?: string[];
  achievements?: string[];
  projects?: ResumeProjectInterface[];
}

export interface ResumeEducationPlaceInterface {
  organization: string;
  link?: string;
  program: string;
  period: { start: Date; end: Date };
  description: string[];
}

export interface ResumeInterface {
  name: string;

  position: string;
  projects: string;
  education?: {
    items: ResumeEducationPlaceInterface[];
  };
  summary?: {
    text: string[];
  };
  experience?: {
    items: ResumeWorkPlaceInterface[];
  };
}
