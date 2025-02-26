import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPageInterface } from '@/interfaces/blog-page.interface';

export async function getSortedMdFiles(directory: string): Promise<BlogPageInterface[]> {
  const fileNames = fs.readdirSync(directory);
  const allPostsData: BlogPageInterface[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const date = new Date(matterResult?.data?.date);
    const title = matterResult?.data?.title;
    const content = matterResult.content;

    return {
      id,
      date,
      title,
      content,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a?.date < b?.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getMdFilesById(directory: string, id: string): Promise<BlogPageInterface> {
  const fileName = `${id}.md`;
  const fullPath = path.join(directory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const date = new Date(matterResult?.data?.date);
  const title = matterResult?.data?.title;
  const content = matterResult.content;

  return {
    id,
    date,
    title,
    content,
  };
}
