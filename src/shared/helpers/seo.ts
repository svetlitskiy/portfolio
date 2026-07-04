import { langList, projectUrl } from '@/conf';

export const buildUrl = (path: string, lang?: string): string => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const localizedPath = lang ? `/${lang}${normalizedPath}` : normalizedPath;

  return `${projectUrl}${localizedPath.endsWith('/') ? localizedPath : `${localizedPath}/`}`;
};

export const buildLanguageAlternates = (path: string): Record<string, string> =>
  langList.reduce<Record<string, string>>((alternates, lang) => {
    alternates[lang] = buildUrl(path, lang);

    return alternates;
  }, {});
