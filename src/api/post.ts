import {BlogPageInterface} from '@/interfaces/blog-page.interface';


export class Post {
  public list(): Promise<BlogPageInterface[]> {
    return Promise.resolve(Array.from(Array(10).keys()).map((i, index) => {
      const item: BlogPageInterface = {
        id: `${index}`,
        title: `Blog Post ${index}`,
        description: `Blog Post ${index} Description`,
      }
      return item;
    }));
  }

  public get(id: string): Promise<BlogPageInterface> {
    return Promise.resolve({
      id: id,
      title: `Blog Post ${id}`,
      description: `Blog Post ${id} Description`,
    });
  }
}

