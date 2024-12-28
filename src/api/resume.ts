import { ResumeInterface } from '@/interfaces/resume.interface';
import { resumeRu } from '@/mocks/resume.ru';
import { resumePt } from '@/mocks/resume.pt';
import { resumeEn } from '@/mocks/resume.en';

export class Resume {
  public async get(lang: string): Promise<ResumeInterface> {
    switch (lang) {
      case 'en':
        return resumeEn; // FIXME
      case 'ru':
        return resumeRu;
      case 'pt':
        return resumePt; // FIXME
      default: {
        throw new Error(`Language ${lang} is not supported`);
      }
    }
  }
}
