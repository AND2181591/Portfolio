import { Injectable } from '@angular/core';

import { Project } from '../shared/models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [];

  constructor() { }

  getProjects() {
    return this.projects;
  }
}
