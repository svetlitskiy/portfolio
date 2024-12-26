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

export interface ResumeInterface {
  name: string;

  position: string;
  projects: string;
  education?: {
    items: string[];
  };
  summary?: {
    text: string[];
  };
  experience?: {
    items: ResumeWorkPlaceInterface[];
  };
}
