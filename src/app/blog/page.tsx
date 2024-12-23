import {api} from '@/api/api';
import {JSX} from 'react';
import Link from 'next/link';

export default async function BlogPage(): Promise<JSX.Element> {
  const posts = await api.post.list();
  return (
    <div>
      {posts.map((post) => (<div key={post.id}>
        <div>{post.id}</div>
        <div><Link href={`/blog/${post.id}`}>{post.title}</Link></div>
      </div>))}
    </div>

  );
}
