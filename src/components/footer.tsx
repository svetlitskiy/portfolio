export const Footer = async ({lang}: {lang: string} ) => {
  const translations = await import(`../locales/${lang}.json`);
  return <div className="flex flex-row">
    © 2024 {translations.main.name}
  </div>
}




