import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/shared/models/Project';
import * as AOS from 'aos';

import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    AOS.init();
    this.projects = this.projectsService.getProjects();
  }

}
