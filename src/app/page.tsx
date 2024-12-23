import Image from "next/image";
import {Navigation} from '@/components/navigation';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </div>
  );
}
