import { Post } from './post';
import { Project } from './project';
import { Resume } from './resume';

class Api {
  public post: Post = new Post();
  public project: Project = new Project();
  public resume: Resume = new Resume();
}

export const api = new Api();
