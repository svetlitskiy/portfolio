import { JSX } from 'react';
import { langList } from '@/conf';

export async function generateStaticParams() {
  return langList.map((lang) => ({
    lang,
  }));
}

export default async function LangPage(): Promise<JSX.Element> {
  return <></>;
}
