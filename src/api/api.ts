import { Post } from '@/api/post';
import { Project } from '@/api/project';

class Api {
  public post: Post = new Post();
  public project: Project = new Project();
}

export const api = new Api();
