import { ProjectInterface } from '@/interfaces/project.interface';

export class Project {
  public list(): Promise<ProjectInterface[]> {
    return Promise.resolve(
      Array.from(Array(10).keys()).map((i, index) => {
        const item: ProjectInterface = {
          id: `${index}`,
          title: `Project ${index}`,
          description: `Project Post ${index} Description`,
          images: Array.from(Array(Math.floor(Math.random() * 10)).keys()).map(() => {
            const imageId = Math.floor(Math.random() * 10000);
            return `https://picsum.photos/${imageId}/0/1200/800`;
          }),
        };
        return item;
      }),
    );
  }

  public get(id: string): Promise<ProjectInterface> {
    return Promise.resolve({
      id: id,
      title: `Blog Post ${id}`,
      description: `Blog Post ${id} Description`,
      images: Array.from(Array(Math.floor(Math.random() * 10)).keys()).map(() => {
        const imageId = Math.floor(Math.random() * 500);
        return `https://picsum.photos/id/${imageId}/1200/800`;
      }),
    });
  }
}
