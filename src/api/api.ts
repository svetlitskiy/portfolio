import { Project } from './project';
import { Resume } from './resume';

class Api {
  public project: Project = new Project();
  public resume: Resume = new Resume();
}

export const api = new Api();
