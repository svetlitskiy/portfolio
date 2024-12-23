import Link from 'next/link';

export const Navigation = () => (
  <nav className="flex flex-row gap-3">
    <Link href="/">Home</Link>
    <Link href="/blog">Blog</Link>
    <Link href="/en/resume">Resume / CV</Link>
  </nav>
);
