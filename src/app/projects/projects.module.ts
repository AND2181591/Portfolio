import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsCardComponent } from './projects-card/projects-card.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectsCardComponent
  ],
  imports: [
    CommonModule, 
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
