import { ResumeInterface } from '@/interfaces/resume.interface';
import { resumeRu } from '@/mocks/resume.ru';

export class Resume {
  public async get(lang: string): Promise<ResumeInterface> {
    switch (lang) {
      case 'en':
        return resumeRu; // FIXME
      case 'ru':
        return resumeRu;
      case 'pt':
        return resumeRu; // FIXME
      default: {
        throw new Error(`Language ${lang} is not supported`);
      }
    }
  }
}
