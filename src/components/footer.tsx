import { getI18n } from '@/i18n/i18n';
import { I18nLocaleInterface } from '@/i18n/i18n.interface';

export const Footer = ({ lang }: { lang: string }) => {
  const t: I18nLocaleInterface = getI18n(lang);
  return (
    <div className="flex flex-row justify-center">
      © 2002 - {new Date().getFullYear()} {t.main.name}
    </div>
  );
};
