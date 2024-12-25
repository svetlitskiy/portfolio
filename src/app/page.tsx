import {langList} from '@/conf';
import {Link as MuiLink} from '@mui/material';

export default function Home() {
  return (
    <div className="h-[100vw] flex justify-center items-center">
      <div className="flex flex-row gap-4 text-8xl">
        {langList.map(lang => (<MuiLink key={`lang-${lang}`} href={`/${lang}`}>{`/${lang}`}</MuiLink>))}
      </div>
    </div>
  );
}
